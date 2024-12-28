import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import googlelogo from '../../assets/logo/google.png'
import { AuthContext } from '../../AuthProvider/AuthPrivider';

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
        <div className={`flex flex-col justify-center items-center py-8 ${isDarkMode && 'bg-blue-950 text-white'}`}>
            <form onSubmit={handleLogin} className={`card-body shadow-lg border w-[40%] ${isDarkMode && 'text-white'}`}>
                <h1 className='text-5xl font-semibold text-center py-2'>Login</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className={`input input-bordered ${isDarkMode && 'text-black'}`} />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="">Password</span>
                    </label>
                    <input type={`${eye ? 'password' : 'text'}`} placeholder="password" name='password' className={`input input-bordered ${isDarkMode && 'text-black'}`} />
                    {/* <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label> */}
                    <p className='text-xl absolute right-10 top-12' onClick={handleEye}>{eye ? <FaEye /> : <FaEyeSlash />}</p>
                </div>
                <div className="form-control mt-6">
                    <button className="btn py-3 bg-slate-600 text-white">Login</button>
                </div>
                <p className='text-center py-4'>---------- Continue with -----------</p>
                <div className='flex justify-center gap-7'>
                    <h1 onClick={handleGoogleLogin} className='font-bold cursor-pointer '><img className='w-10' src={googlelogo} alt="google" /></h1>
                    {/* <h1 className='font-bold cursor-pointer '><img className='w-16 rounded-full' src={fbimg} alt="facebook" /></h1> */}
                    {/* <h1 onClick={handletwitterlogin} className='font-bold cursor-pointer '><img className='w-10' src={twitimg} alt="" /></h1> */}
                    {/* <h1 onClick={handlegithublogin} className='font-bold cursor-pointer '><img className='w-10' src={gitimg} alt="" /></h1> */}

                </div>
                <div>Don&apos;t have any account ? please <Link to="/register" className='font-semibold text-blue-600'>Register</Link></div>

            </form>
        </div>
    );
};

export default Login;