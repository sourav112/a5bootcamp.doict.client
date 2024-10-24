import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useState,useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from 'react-helmet-async';
import { FaStar } from "react-icons/fa";
function ProductDetailpage() {
    const loadedProduct = useLoaderData();
    const { user } = useContext(AuthContext);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      address: "",
      movie_name: "",
      movie_id: "",
    });
    console.log(loadedProduct);

     // Open the edit modal with the user's current details
  const openEditModal = (user) => {
    console.log(user);
    setSelectedUser(user);
    setFormData({
      name: user.name || "",
      email: user.email || "",
      address: user.address || "",
      movie_name: formData.movie_name || "",
      movie_id: formData.movie_id || "",
    });
    setIsEditModalOpen(true);
  };

  // Update user info
  const handleProductEntry = async () => {
    try {
      const buyProduct = {
        name: user.name,
        email: user.email,
        address: user.address,
        movie_name:loadedProduct.name,
        movie_id:loadedProduct._id,
        isApproved:false,
      };

      console.log(buyProduct);

      await fetch(
        import.meta.env.VITE_BACKEND_LINK+`/productBuy`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(buyProduct),
        }
      )
      .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              toast.success("Buy Successfully.Please Wait for Admin Approval.", {
                position: "top-right",
              });
            }
            //event.target.reset();
          });
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };
  return (
    <>
    <Helmet>
          <title>Moviebazar| Details</title>
        </Helmet>
    <div class="card bg-base-100 shadow-xl mt-5">
    <figure class="px-10 pt-10">
    <img
    src={loadedProduct.image}
    alt="Movies"
    className="rounded-xl w-64" />
    </figure>
    <div class="card-body items-center text-center">
    <h2 class="card-title">{loadedProduct.category}</h2>
    <p>Movie Name: {loadedProduct.name}</p>
    <p className="text-justify">{loadedProduct.details}</p>
    <p className="flex justify-center items-center"><FaStar className="text-orange-400"/>: {loadedProduct.rating}</p>
    <p className="flex justify-center items-center">Price: {loadedProduct.price}$</p>
    <div class="card-actions">
    <button  onClick={() => openEditModal(loadedProduct)} class="btn btn-primary"><FontAwesomeIcon icon={faEye}/> Buy Now</button>
    </div>
    </div>
    </div>

    {/* Edit Modal */}
{isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h3 className="text-xl mb-4">Buy Movie Link</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium">Name:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={user.name}
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
                value={user.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Address:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={user.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Movie Name:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={loadedProduct.name}
                onChange={(e) =>
                  setFormData({ ...formData, movie_name: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Movie ID:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={loadedProduct._id}
                onChange={(e) =>
                  setFormData({ ...formData, movie_id: e.target.value })
                }
              />
            </div>
            <button
              onClick={handleProductEntry}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Buy Now
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
    </>
  )
}

export default ProductDetailpage