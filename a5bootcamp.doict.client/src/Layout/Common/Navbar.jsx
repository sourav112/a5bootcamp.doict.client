import React from 'react'
import { Link,NavLink } from 'react-router-dom'
function Navbar() {
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
        <li><NavLink to="/users">User</NavLink></li>
        <li>
          <a>Parent</a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><NavLink to="/products" className="bg-white">Products</NavLink></li>
        <li><NavLink to="/dashboard" className="bg-white">Dashboard</NavLink></li>
      </ul>
    </div>
    <Link to="/" class="btn btn-ghost text-xl">daisyUI</Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
    <li><NavLink to="/userreg">User</NavLink></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><NavLink to="/productentry" className="bg-white">Product</NavLink></li>
      <li><NavLink to="/catentry" className="bg-white">Category</NavLink></li>
      <li><NavLink to="/dashboard" className="bg-white">Dashboard</NavLink></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn">Button</a>
  </div>
</div>
    </>
  )
}

export default Navbar