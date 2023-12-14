import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
    const {logOut, user} = useAuth()
    const handleLogOutUser = () =>{
        logOut()
        .then(res =>{
            console.log(res.user);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/petlisting">Pet Listing</NavLink></li>
        <li><NavLink to="/donation">Donation Campaigns</NavLink></li>
        {
            user ? '' : <li><NavLink to="/login">Login</NavLink></li>
        }
    </>
    return (
        <div className="">
            <div className=" lg:pl-10 lg:pr-10 shadow-md  ">
                <div className="navbar py-4">
                    <div className="navbar-start">
                        <div className="dropdown ">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 font-bold text-xl shadow rounded-box w-52 bg-gray-200">
                                {navLinks}
                            </ul>
                        </div>
                        <div className="flex items-center">
                            <img src="https://i.ibb.co/N3YkfRK/logo.png" alt="" />
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex ">
                        <ul className="menu menu-horizontal font-bold text-lg px-1 ">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div>
                            {
                                user ? <span className="text-lg mr-3">{user.displayName}</span> : ''
                            }
                        </div>
                        <div className="dropdown dropdown-end ">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar w-14  ">
                                <div className="rounded-full ">
                                <div >
                                    {
                                        user ? <>
                                        <img className="" src={user.photoURL} alt="" />
                                        </>
                                        :  <div className="w-10 rounded-full">
                                        <img src="https://i.ibb.co/GdHDs3r/40.jpg" />
                                    </div>
                                    }
                                </div>
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 rounded-box w-52">
                                <li className="">
                                    {
                                        user ? <div className="flex items-center justify-center ">
                                    <Link to={'/dashboard'}>
                                    <li className="font-bold md:text-xl text-center  ">
                                            Dashboard
                                        </li>
                                    </Link>
                                    </div> : ''
                                    }
                                </li>
                                <li>
                                    <div className="flex justify-center">
                                    {
                                        user ?   <button onClick={handleLogOutUser} className=" bg-[#FA7C54] shadow-md shadow-orange-500-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] text-white py-3 px-4 rounded-md font-bold">
                                        Log Out
                                    </button> : ''
                                    }
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;