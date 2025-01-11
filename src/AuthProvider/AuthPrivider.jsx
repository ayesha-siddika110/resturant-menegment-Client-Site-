import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../Authentication/Firebase.init';
import axios from 'axios';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isDarkMode, setIsDarkMode] = useState(() => true);


    const signInUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const signOutUser = ()=>{
        return signOut(auth)
    }

    const googleProvider = new GoogleAuthProvider()
    const GoogleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateProfileData = (updateData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updateData)
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
            if(currentUser?.email){
                const user = {email : currentUser.email};

                axios.post('https://restaurant-management-server-site.vercel.app/jwt',user,{withCredentials: true})
                .then(res=>{
                    setLoading(false)
                    console.log('login',res.data);
                    
                })
            }
            else{
                axios.post('https://restaurant-management-server-site.vercel.app/logout',{},{
                    withCredentials: true
                })
                .then(res=>{
                    setLoading(false)
                    console.log('logout', res.data);
                    
                })
            }
        })
        return () => {
            unSubscribe()
        }

    }, [])
    console.log(user);



    const authinfo = {
        user,
        signInUser,
        loginUser,
        GoogleLogin,
        updateProfileData,
        signOutUser,
        setIsDarkMode,
        isDarkMode
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;