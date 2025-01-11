/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import googlelogo from '../../assets/logo/google.png'
import { AuthContext } from '../../AuthProvider/AuthPrivider';
import banner from '../../assets/banner/Black White Simple Opening Banner.png'

const Login = () => {

    const [eye, setEye] = useState(true)
    const navigate = useNavigate()
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const { loginUser, GoogleLogin, isDarkMode } = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (email === '' || password === '') {
            return toast.error('please fill All fields')
        }
        // if(!passwordRegex.test(password)){
        //     return toast.error('Must have an Uppercase letter, a lowercase letter, Length must be at least 6 character');

        // }
        // console.log(email,password);


        loginUser(email, password)
            .then(res => {
                toast.success('login user');
                navigate("/")

            })
            .catch(err => {
                console.log(err.message);

            })

    }

    const handleEye = () => {
        setEye(!eye)
    }
    const handleGoogleLogin = () => {
        GoogleLogin()
            .then(res => {
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
        className={``}>
         {/* <div className="h-16"></div> */}
        
        <div className={`md:flex justify-center py-[10%] md:pt-[10%] md:w-[80%] w-[95%] m-auto text-white`}>
            
            <form onSubmit={handleLogin} className={`p-8 shadow-lg border lg:w-[40%] md:w-[60%] `}>
                <h1 className='text-4xl font-semibold text-center py-2 text-orange-400'>Login Now!</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="text-white">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className={`bg-orange-200 text-black py-3 px-3 `} />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="text-white">Password</span>
                    </label>
                    <input type={`${eye ? 'password' : 'text'}`} placeholder="password" name='password' className={`bg-orange-200 text-black py-3 px-3 input-bordered `} />
                    {/* <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label> */}
                    <p className='text-xl absolute right-10 top-12' onClick={handleEye}>{eye ? <FaEye /> : <FaEyeSlash />}</p>
                </div>
                <div className="form-control mt-6">
                    <button className="bg-orange-400 text-black py-3 px-3">Login</button>
                </div>
                <p className='text-center py-4 text-lg'>---------- Continue with -----------</p>
                <div className='flex justify-center gap-7'>
                    <h1 onClick={handleGoogleLogin} className=' cursor-pointer flex items-center border p-2 text-orange-200 gap-3'>
                        <img className='w-8' src={googlelogo} alt="google" />
                        <p className='text-lg'>Google</p>
                    </h1>
                    {/* <h1 className='font-bold cursor-pointer '><img className='w-16 rounded-full' src={fbimg} alt="facebook" /></h1> */}
                    {/* <h1 onClick={handletwitterlogin} className='font-bold cursor-pointer '><img className='w-10' src={twitimg} alt="" /></h1> */}
                    {/* <h1 onClick={handlegithublogin} className='font-bold cursor-pointer '><img className='w-10' src={gitimg} alt="" /></h1> */}

                </div>
                <div className='pt-6'>Don&apos;t have any account ? please <Link to="/register" className='font-semibold text-orange-600 text-lg'>Register</Link></div>

            </form>
            <div className='lg:w-[60%] md:w-[40%] text-center lg:text-7xl md:text-5xl pt-4 hidden md:flex pl-6' >
                <p>Wellcome Back !</p>
            </div>
        </div>
        </div>
    );
};

export default Login;