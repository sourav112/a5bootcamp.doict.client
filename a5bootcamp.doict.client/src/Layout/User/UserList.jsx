import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaUserShield } from "react-icons/fa";
import { ImBlocked } from "react-icons/im";
import { Link, useLoaderData } from "react-router-dom";

function UserList() {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);
    const [isAdminToggleModalOpen, setIsAdminToggleModalOpen] = useState(false);
    const [formData, setFormData] = useState({
      displayName: "",
      phone: "",
      photoURL: "",
      address: "",
    });
  
    //console.log(loadedUsers);
  
    const handleDelete = (_id) => {
      console.log(_id);
      fetch(`http://localhost:5000/user/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            toast.success("User Deleted Successfully", {
              position: "top-right",
            });
            const remainingUsers = users.filter((user) => user._id !== _id);
            setUsers(remainingUsers);
          }
        });
    };
    
  // Fetch all users from the backend
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers(); // Load users when the component mounts
  }, []);

  // Block a user
  const handleBlock = async () => {
    try {
      console.log({ selectedUser });
      const updatedUser = {
        ...selectedUser,
        isBlocked: !selectedUser?.isBlocked,
      };
      console.log({ updatedUser });

      await fetch(
        `http://localhost:5000/user/${selectedUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      ).then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("User Updated Successfully", {
            position: "top-right",
          });
        }
        //event.target.reset();
      });
      fetchUsers(); // Reload users after update
      setIsBlockModalOpen(false);
    } catch (error) {
      console.error("Error blocking/unblocking user:", error);
    }
  };
  // Toggle admin status
  const handleToggleAdmin = async () => {
    try {
      console.log({ selectedUser });
      const updatedUser = { ...selectedUser, isAdmin: !selectedUser?.isAdmin };
      console.log({ updatedUser });
      await fetch(
        `http://localhost:5000/user/${selectedUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      ).then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("Grant Permission Successfully", {
            position: "top-right",
          });
        }
        //event.target.reset();
      });
      fetchUsers(); // Reload users after update
      setIsAdminToggleModalOpen(false);
    } catch (error) {
      console.error("Error toggling admin status:", error);
    }
  };

  // Open the edit modal with the user's current details
  const openEditModal = (user) => {
    console.log(user);
    setSelectedUser(user);
    setFormData({
      name: user.name || "",
      email: user.email || "",
      img_url: user.img_url || "",
      address: user.address || "",
    });
    setIsEditModalOpen(true);
  };

  // Update user info
  const handleUpdate = async () => {
    try {
      const updatedUser = {
        ...selectedUser,
        name: formData.name,
        email: formData.email,
        img_url: formData.img_url,
        address: formData.address,
      };

      await fetch(
        `http://localhost:5000/user/${selectedUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      )
      .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              toast.success("User Updated Successfully", {
                position: "top-right",
              });
            }
            //event.target.reset();
          });
      fetchUsers(); // Reload users after update
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleClickedSetBlock = (user) => {
    setSelectedUser(user);
    setIsBlockModalOpen(true);
  };
  const handleClickedSetUserOrAdminRole = (user) => {
    setSelectedUser(user);
    setIsAdminToggleModalOpen(true);
  };

    
    return (
      <div className="mt-14">
        <div className="flex justify-center justify-items-center">
          <h1 className="text-3xl font-bold text-center mb-10">
            All Users List: {users.length}
          </h1>
          &nbsp;&nbsp;&nbsp;
          
        </div>
        <table className="border-collapse w-2/3 mx-auto">
          <thead>
            <tr>
              <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                user name 
              </th>
              <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                E-mail
              </th>
              <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                Address
              </th>
  
              <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
              >
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    {" "}
                    name
                  </span>
                  {user.name} {" "} {user.isAdmin
                ? <div class="badge badge-success"></div>
                : <div class="badge badge-error"></div> }
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    {" "}
                    email
                  </span>
                  {user.email}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    {" "}
                    address
                  </span>
                  {user.address}
                </td>
  
                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    Actions
                  </span>
                 {/** <Link to={`/useredit/${user._id}`}>
                    <button
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 
            border border-blue-500 hover:border-transparent rounded-none"
                    >
                      Edit
                    </button>
                  </Link>
                  &nbsp;&nbsp;&nbsp;
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-red-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 
            border border-blue-500 hover:border-transparent rounded-none"
                  >
                    Delete
                  </button> */}
                  <button
                  onClick={() => handleClickedSetUserOrAdminRole(user)}
                  className={`mr-2 p-2 rounded-full text-white ${
                    user.isAdmin ? "bg-green-500" : "bg-blue-500"
                  } ${
                    user.email === "super-admin@dev-master.com"
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  title="Toggle Admin/User"
                  disabled={user.email === "super-admin@dev-master.com"}
                >
                  <FaUserShield />
                </button>

                <button
                  onClick={() => openEditModal(user)}
                  className="mr-2 p-2 rounded-full bg-yellow-500 text-white"
                  title="Edit User"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleClickedSetBlock(user)}
                  className={`p-2 rounded-full bg-red-500 text-white ${
                    user.email === "super-admin@dev-master.com"
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  title="Block User"
                  disabled={user.email === "super-admin@dev-master.com"}
                >
                  <ImBlocked />
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
{/* Edit Modal */}
{isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h3 className="text-xl mb-4">Edit User</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium">Name:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Photo URL:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.img_url}
                onChange={(e) =>
                  setFormData({ ...formData, img_url: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Address:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>
            <button
              onClick={handleUpdate}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="bg-red-500 text-white px-4 py-2 rounded ml-4"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Block Modal */}
      {isBlockModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h3 className="text-xl mb-4">
              {selectedUser.isBlocked
                ? "Unblock this user?"
                : "Block this user?"}
            </h3>
            <button
              onClick={handleBlock}
              className={`bg-red-500 text-white px-4 py-2 rounded ${
                selectedUser.isBlocked ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {selectedUser.isBlocked ? "Unblock" : "Block"}
            </button>
            <button
              onClick={() => setIsBlockModalOpen(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded ml-4"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Toggle Admin Modal */}
      {isAdminToggleModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h3 className="text-xl mb-4">
              {selectedUser.isAdmin
                ? "Revoke Admin Privileges?"
                : "Grant Admin Privileges?"}
            </h3>
            <button
              onClick={handleToggleAdmin}
              className={`bg-green-500 text-white px-4 py-2 rounded`}
            >
              {selectedUser.isAdmin ? "Revoke" : "Grant"}
            </button>
            <button
              onClick={() => setIsAdminToggleModalOpen(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded ml-4"
            >
              Cancel
            </button>
          </div>
        </div>
      )}


      </div>

      
    );
}

export default UserList