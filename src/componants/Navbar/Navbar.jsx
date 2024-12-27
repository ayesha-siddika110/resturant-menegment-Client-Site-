import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthPrivider";
import { FaArrowRight } from "react-icons/fa";
import toast from "react-hot-toast";
import DarkModeToggle from "react-dark-mode-toggle";
import './Navbar.css'



const Navbar = () => {
    const { user, signOutUser, isDarkMode, setIsDarkMode } = useContext(AuthContext)
    const navigate = useContext(AuthContext)


    // dark mode
    console.log(isDarkMode);




    const handleSignOut = () => {
        signOutUser()
            .then(res => {
                toast.success('Log Out Successfully')
                navigate('/')
            })

    }

    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allFoods">All Foods</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>

    </>
    const profile = <>
        {
            user ? <>
                <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content ">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4" className="drawer-button "><img src={user?.photoURL} alt="Profile" className="border w-12 h-12 rounded-full" /></label>
                    </div>
                    <div className="drawer-side z-50">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className={`menu bg-base-200 text-base-content mt-[63px]   lg:w-[30%] md:w-[30%] w-[50%]  p-4 ${isDarkMode && 'bg-blue-950 text-white'}`}>
                            {/* Sidebar content here */}
                            <li><Link to="/addFoods">Add Foods</Link></li>
                            <li><Link to={`/myFoods/${user?.email}`}>My Foods</Link></li>
                            <li><Link to={`/orders/${user?.email}`}>My Orders</Link></li>
                            <li className="pl-3">
                                <DarkModeToggle
                                    onChange={setIsDarkMode}
                                    checked={isDarkMode}
                                    size={60}
                                />
                            </li>
                            <li onClick={handleSignOut}><Link >Sign Out <FaArrowRight /></Link></li>
                        </ul>
                    </div>
                </div>


            </>

                :

                <NavLink to="/login" className={`btn`}>Login</NavLink>
        }

    </>
    return (
        <div className={`${isDarkMode ? 'bg-blue-950 text-white' : 'bg-base-100'}`}>
        <div className={`navbar bg-base-100 container m-auto flex justify-between ${isDarkMode && 'bg-blue-950 text-white'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className={`menu space-y-3 menu-sm dropdown-content rounded-box z-50 mt-3 w-52 p-2 shadow-lg ${isDarkMode ? 'bg-blue-950' : 'bg-base-100'}`}>
                        {links}
                    </ul>
                </div>

                <a className="btn btn-ghost text-xl">GRAND R.</a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    {links}
                </ul>
            </div>
            <div className="gap-3">

                <div>
                    {profile}

                </div>


            </div>

            {/* dark mode */}

        </div>
        </div>
    );
};

export default Navbar;