import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import {
  FaUser,
  FaUsers,
  FaEnvelope,
  FaSignOutAlt,
  FaPenAlt,
} from "react-icons/fa";

function Sidebar() {
  
    //const { user, logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const handleLogout = () => {
      logOutUser();
      navigate("/");
    };
  
    return (
      <div className="p-4">
        {/* User Profile Info */}
        <div className="flex flex-row lg:flex-col items-start gap-2">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="User Profile"
            className="w-16 rounded-full"
          />
          <span>User Name</span>
          <span className="text-xs">User Email</span>
        </div>
        <hr className="my-4" />
  
        {/* Sidebar Links */}
        <nav className="flex flex-col gap-4">
          {/* Profile Link */}
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
            }
          >
            <FaUser className="inline mr-2" />
            Profile
          </NavLink>
  
            <>
              {" "}
              {/* Admin Links */}
              
                <>
                  <NavLink
                    to="/userlist"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-blue-500"
                    }
                  >
                    <FaUsers className="inline mr-2" />
                    All Users
                  </NavLink>
                  <NavLink
                    to="/catlist"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-blue-500"
                    }
                  >
                    <FaPenAlt className="inline mr-2" />
                    All Categories
                  </NavLink>
                </>
             
              {/* User Links */}
             
                <NavLink
                  to="/productlist"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-500"
                  }
                >
                  <FaEnvelope className="inline mr-2" />
                  All Products
                </NavLink>
              
            </>
          
          {/* Logout */}
          <button
            onClick={handleLogout}
            className="text-red-600 text-sm hover:underline flex items-center"
          >
            <FaSignOutAlt className="inline mr-2" />
            Logout
          </button>
        </nav>
      </div>
    );
}

export default Sidebar