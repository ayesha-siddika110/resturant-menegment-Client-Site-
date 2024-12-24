import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthPrivider";
import { FaArrowRight } from "react-icons/fa";
import toast from "react-hot-toast";


const Navbar = () => {
    const { user,signOutUser } = useContext(AuthContext)
    const navigate = useContext(AuthContext)
    const handleSignOut =()=>{
        signOutUser()
        .then(res=> {
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
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <li><Link to="/addFoods">Add Foods</Link></li>
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
        <div className="navbar bg-base-100 flex justify-between">
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
                        className="menu space-y-3 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
                        {links}
                    </ul>
                </div>

                <a className="btn btn-ghost text-xl">daisyUI</a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    {links}
                </ul>
            </div>
            <div className="">
                {profile}

            </div>
        </div>
    );
};

export default Navbar;