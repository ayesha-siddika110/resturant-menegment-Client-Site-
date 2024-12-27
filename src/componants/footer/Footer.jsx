import React, { useContext } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthPrivider';
import { Link } from 'react-router-dom';

const Footer = () => {
    const {isDarkMode} = useContext(AuthContext)
    return (
        <div>
            <footer className={`footer footer-center  text-base-content rounded p-10 shadow-2xl ${isDarkMode ? 'bg-black text-white': 'bg-slate-200'}`}>
                <div className='flex items-center gap-3'>

                    <p className='poppins-edu font-semibold text-3xl'>GRAND R.</p>
                </div>
                <nav className="grid grid-flow-col gap-4">
                    <Link className="link link-hover">Home</Link>
                    <Link to="/allFoods" className="link link-hover">All Foods</Link>
                    <Link to="/gallery" className="link link-hover">Gallery</Link>
                    {/* <a className="link link-hover">Press kit</a> */}
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <div className='h-10 w-10 flex items-center justify-center rounded-full shadow-2xl bg-blue-600 text-white'>
                            <FaFacebookF className='text-xl' />
                        </div>
                        <div className='h-10 w-10 flex items-center justify-center rounded-full shadow-2xl bg-purple-600 text-white'>
                            <FaInstagram className='text-xl' />
                        </div>
                        <div className='h-10 w-10 flex items-center justify-center rounded-full shadow-2xl bg-blue-500 text-white'>
                            <FaLinkedinIn className='text-xl' />
                        </div>


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