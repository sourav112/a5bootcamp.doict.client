import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import {
  FaUser,
  FaUsers,
  FaEnvelope,
  FaSignOutAlt,
  FaPenAlt,
  FaShoppingCart,
  FaFilm,
} from "react-icons/fa";

function Sidebar() {
  
    const { user, logOutUser } = useContext(AuthContext);
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
            src={user.img_url}
            alt="User Profile"
            className="w-16 rounded-full"
          />
          <span>{user.name}</span>
          <span className="text-xs">{user.email}</span>
        </div>
        <hr className="my-4" />
  
        {/* Sidebar Links */}
        <nav className="flex flex-col gap-4">
          {/* Profile Link */}
          
          <NavLink
            to={`/dashboard/useredit/${user._id}`}
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
            }
          >
            <FaUser className="inline mr-2" />
            Profile
          </NavLink>
          <NavLink
            to={`/dashboard/productbuylist`}
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
            }
          >
            <FaShoppingCart className="inline mr-2" />
            My Movie
          </NavLink>
  
            <>
              {" "}
              {/* Admin Links */}
              {user?.isAdmin && (
                <>
                  <NavLink
                    to="/dashboard/userlist"
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
                    to="/dashboard/catlist"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-blue-500"
                    }
                  >
                    <FaPenAlt className="inline mr-2" />
                    All Categories
                  </NavLink>
                  <NavLink
                  to="/dashboard/productlist"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-500"
                  }
                >
                  <FaFilm className="inline mr-2" />
                  All Movies
                </NavLink>
                </>
             )}
              {/* User Links */}
             
              
              
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