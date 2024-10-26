import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const links = (
    <>
      <li className="">
        <NavLink to="/" className="">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allTouristsSpot">All Tourists Spot</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addTouristsSpot">Add Tourists Spot</NavLink>
          </li>
          <li>
            <NavLink to={`/myList/${user.email}`}>My List</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </>
      )}
    </>
  );

  const logout = () => {
    // console.log('logout');
    signOut(auth)
      .then((result) => {
        toast.success("Logged out successfully");
        // console.log("User signed out successfully");
        // Your code here to handle user sign-out
      })
      .catch((error) => {
        toast.error("Failed to log out");
        // console.error("Failed to sign out:", error);
        // Your code here to handle user sign-out error
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 mb-5 px-5 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to='/' className="text-2xl font-bold text-green-500">Tourism</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex flex-row gap-5">{links}</ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <div className="flex flex-row gap-5">
            <Link to="/login">
              <li className="btn bg-green-500 text-white border-2 border-green-500 hover:bg-transparent hover:border-green-500 hover:text-green-500">Login</li>
            </Link>
            <Link to="/register">
              <li className="btn bg-blue-300 text-black border-2 border-blue-300 hover:bg-transparent hover:border-blue-300 hover:text-black">Register</li>
            </Link>
          </div>
        ) : (
          <div className="dropdown dropdown-hover dropdown-end mr-8">
            <div tabIndex={0} role="button" className="">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                  {/* <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /> */}
                  <img src={user?.photoURL ? user.photoURL : "../../public/user-avatar-male-5.png"} alt="" />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow flex flex-col gap-2"
            >
              <li>
                <a className="font-bold">{user.displayName}</a>
              </li>
              <li>
                <a onClick={() => logout()} className="btn bg-red-500 text-white hover:bg-transparent border-2 border-red-500 hover:border-red-500 hover:text-red-500" >Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
