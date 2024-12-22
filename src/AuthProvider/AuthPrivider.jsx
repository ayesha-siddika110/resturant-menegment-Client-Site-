import { createContext, useState } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user,serUser] = useState([])


    const authinfo = {
        user
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;