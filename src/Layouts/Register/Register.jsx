/* eslint-disable no-unused-vars */
import  { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthPrivider';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import googlelogo from '../../assets/logo/google.png'
import { updateProfile } from 'firebase/auth';
import { auth } from '../../Authentication/Firebase.init';

import banner from '../../assets/banner/White Texture Modern Korean Food Banner.jpg'

const Register = () => {
    const {signInUser,GoogleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const [eye,setEye] = useState(true)
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
     
        if(email === '' || name === '' || photo==='' || password ===''){
           return toast.error('please fill All fields')
        }

        if(!passwordRegex.test(password)){
            return toast.error('Must have an Uppercase letter, a lowercase letter, Length must be at least 6 character');
            
        }

        signInUser(email, password)
            .then(res => {
                // console.log(res);

                const updateData = {
                    displayName: name,
                    photoURL: photo
                }

                updateProfile(auth.currentUser, updateData)
                    .then(res => {
                        console.log(res);

                    })
                    .catch(err => {
                        console.log(err.message);

                    })
                navigate("/")
                toast.success('Successfully created!');

            })
            .catch(error => {
                toast.error(error.message);

            }
            )
    }
    const handleEye=()=>{
        setEye(!eye)
    }
    const handleGoogleLogin =()=>{
        GoogleLogin()
        .then(res=> {
            toast.success('Succefully Login')
            navigate("/")
            
        })

    }

    return (
        <div
        style={{
                    backgroundImage: `url(${banner})`,
                    height: '100vh',
                    backgroundSize:'cover',
                    backgroundRepeat: 'no-repeat'
                }}
        className={`flex flex-col justify-center items-center `}>
            <div className='md:flex justify-start py-[10%] md:pt-[10%] md:w-[80%] w-[95%] m-auto text-white'>

            <form onSubmit={handleRegister} className="p-8 shadow-lg border lg:w-[40%] md:w-[60%] text-black">
                <h1 className='text-4xl font-semibold text-center py-2 text-orange-400'>Registration</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="">name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className={`bg-orange-200 text-black py-3 px-3 focus:outline-none focus:border-orange-200 focus:ring-orange-200 focus:ring-2`} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="">photo</span>
                    </label>
                    <input type="text" name='photo' placeholder="photo" className={`bg-orange-200 text-black py-3 px-3 focus:outline-none focus:border-orange-200 focus:ring-orange-200 focus:ring-2`} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="">email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className={`bg-orange-200 text-black py-3 px-3 focus:outline-none focus:border-orange-200 focus:ring-orange-200 focus:ring-2`} />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="">Password</span>
                    </label>
                    <input type={`${eye ? 'password': 'text'}`} placeholder="password" name='password' className={`bg-orange-200 text-black py-3 px-3 focus:outline-none focus:border-orange-200 focus:ring-orange-200 focus:ring-2`}  />
                    <p className='text-xl absolute right-10 top-12' onClick={handleEye}>{eye ? <FaEye /> : <FaEyeSlash />}</p>

                </div>
                <div className="form-control mt-6">
                    <button className="bg-orange-500 text-white py-3 px-3 focus:outline-none focus:border-orange-200 focus:ring-orange-200 focus:ring-2 text-lg">register</button>
                </div>
                <p className='text-center py-4'>---------- Continue with -----------</p>
                                <div className='flex justify-center gap-7'>
                                    <h1 onClick={handleGoogleLogin} className=' flex items-center border-2 px-3 border-orange-500 cursor-pointer '><p className=' text-lg text-black'>Google</p><img className='w-8' src={googlelogo} alt="google" /></h1>
                                    {/* <h1 className='font-bold cursor-pointer '><img className='w-16 rounded-full' src={fbimg} alt="facebook" /></h1> */}
                                    {/* <h1 onClick={handletwitterlogin} className='font-bold cursor-pointer '><img className='w-10' src={twitimg} alt="" /></h1> */}
                                    {/* <h1 onClick={handlegithublogin} className='font-bold cursor-pointer '><img className='w-10' src={gitimg} alt="" /></h1> */}
                
                                </div>
                <div className='text-black pt-6'>Don&apos;t have any account ? please <Link to="/login" className='font-semibold text-orange-600'>Login</Link></div>
            </form>
            </div>
        </div>
    );
};

export default Register;