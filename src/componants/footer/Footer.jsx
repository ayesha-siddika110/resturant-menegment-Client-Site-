import { useContext } from 'react';
import { FaFacebookF,  FaLinkedinIn } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthPrivider';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/15-removebg-preview.png'

const Footer = () => {
    const {isDarkMode} = useContext(AuthContext)
    return (
        <div>
            {/* <div ></div> */}
            <footer className={`footer footer-center  text-base-content rounded p-10 shadow-2xl ${isDarkMode ? 'bg-black text-white': 'bg-orange-100'}`}>
                <div className='flex items-center gap-3'>

                    <div className="flex flex-col items-center space-y-2">
                                        <img src={logo} className="w-32" alt="" />
                                        <p className="uppercase text-2xl font-semibold">GRAND R.</p>
                                        <p className='tracking-[10px]'>--- Restaurant ---</p>
                                    </div>
                </div>
                <nav className="grid grid-flow-col gap-4">
                    <Link className="link link-hover">Home</Link>
                    <Link to="/allFoods" className="link link-hover">All Foods</Link>
                    <Link to="/gallery" className="link link-hover">Gallery</Link>
                    {/* <a className="link link-hover">Press kit</a> */}
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/ayesha.siddika.982225/" target="_blank" rel="noopener noreferrer">
                        <div className='h-10 w-10 flex items-center justify-center rounded-full shadow-2xl border text-orange-500 border-orange-500'>
                            <FaFacebookF className='text-xl' />
                        </div>
                        </a>
                        <a href="https://www.linkedin.com/in/ayesha-siddika110/" target="_blank" rel="noopener noreferrer">
                        <div className='h-10 w-10 flex items-center justify-center rounded-full shadow-2xl border text-orange-500 border-orange-500'>
                            <FaLinkedinIn className='text-xl' />
                        </div>
                        </a>


                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ADream  Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;