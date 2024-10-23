import React from 'react'



import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave,faWindowRestore   } from '@fortawesome/free-regular-svg-icons';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { FaSignOutAlt } from 'react-icons/fa';


function Navbar() {

  const { user, logOutUser } = useContext(AuthContext);
  console.log("Hello: ",user);

  const navigate = useNavigate();

  const handleLogout = () => {
    logOutUser();
    navigate("/login");
  };

  return (
    <>
  <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/producthome" className="bg-white">All Products</NavLink></li>
        <li>
          
        </li>
        
      </ul>
    </div>
    <Link to="/" class="btn btn-ghost text-xl"><img src="https://img.freepik.com/free-vector/film-device-reel_24908-82978.jpg" className="w-16 rounded-full" />Movie Bazar</Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><NavLink to="/" className="bg-white">Home</NavLink></li>
      <li><NavLink to="/producthome" className="bg-white">All Product</NavLink></li>
    </ul>
  </div>
  <div class="navbar-end">
      {
          user?(
            <ul className='flex gap-4'>
              <li><NavLink to="/dashboard" className="bg-white"> 
              <button class="btn btn-outline btn-primary">
                <FontAwesomeIcon icon={faWindowRestore }/> 
              </button>
              
              </NavLink></li>
              <li><img className='rounded-full' alt="User" width="30" height="20" src={user.img_url} /></li>
              <li> <button
                    onClick={handleLogout}
                    className="text-red-600 text-sm hover:underline flex items-center"
                    >
                  <FaSignOutAlt className="inline mr-2" />
                Logout
                </button></li>
            </ul>
    )
    :(
      <div className="w-10 rounded-full">
           <NavLink to="/login" className="bg-white">Login</NavLink>
      </div>
    )}
   
  </div>
</div>
    </>
  )
}

export default Navbar