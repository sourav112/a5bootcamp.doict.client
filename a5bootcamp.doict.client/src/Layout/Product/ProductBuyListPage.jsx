import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../provider/AuthProvider";
import { FaMoneyCheck } from 'react-icons/fa6';
import { Helmet } from 'react-helmet-async';
const ProductBuyListPage = () => {
    
    const { user } = useContext(AuthContext);

    const [products, setProducts] = useState([]);

// Fetch Product Data from the backend

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/productBuyQuery/${user.email}`
      );
      const data = await response.json();
      console.log("Buy Page: ",data);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Load Data when the component mounts
  }, []);

    return (
        <div>
          <Helmet>
          <title>Moviebazar| Buy</title>
        </Helmet>
            <div className="flex justify-center justify-items-center">
          <h1 className="text-3xl font-bold text-center mb-10">
           Product Payment Status: {products.length}
          </h1>
          &nbsp;&nbsp;&nbsp;
          
        </div>
            <table className="border-collapse w-2/3 mx-auto">
          <thead>
            <tr>
              <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                Movie Name 
              </th>
              <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                Status
              </th>
              
              <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
          {products.map((product) => (
              <tr
                key={user._id}
                className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
              >
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    {" "}
                    name
                  </span>
                  {product.movie_name} 
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    {" "}
                    status
                  </span>
                  {user.isApproved
                ? <div class="badge badge-success">Active</div>
                : <div class="badge badge-error">Pending</div> }
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                <button
                  
                  className={`p-2 rounded-full bg-red-500 text-white ${
                    user.email === "super-admin@dev-master.com"
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  title="Payment Please."
                  disabled={user.email === "super-admin@dev-master.com"}
                >
                  <FaMoneyCheck />
                </button>
                </td>
                </tr>
            ))}



            </tbody>
            </table>
        </div>
    );
};

export default ProductBuyListPage;