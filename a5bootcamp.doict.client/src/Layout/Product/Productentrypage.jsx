import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom'

function Productentrypage() {
  const loadedCats = useLoaderData();
  const [cats, setCat] = useState(loadedCats);
 
  const handleAddUser = (event) => {
    event.preventDefault();



    const form = new FormData(event.currentTarget);

    const name = form.get("name");
    const category = form.get("category");

    const product = { name, category };
    console.log(product);
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Product Added Successfully", {
            position: "top-right",
          });
        }
        event.target.reset();
      });
  };
  return (
    <>
      <div className="mx-auto mt-20">
        <div className="flex justify-center justify-items-center">
          <h1 className="text-3xl font-bold text-center mb-10">
            Product Entry
          </h1>
          &nbsp;&nbsp;&nbsp;
          <Link to="/dashboard/productlist">
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
          py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
            >
              Products
            </button>
          </Link>
        </div>
        <form onSubmit={handleAddUser} className="w-full ">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="name"
              >
                Product Name
              </label>
            </div>
            <div className="md:w-1/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
              leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="name"
                type="text"
                name="name"
                placeholder="product name"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="category"
              >
                Category
              </label>
            </div>
            <div className="md:w-1/3">
            <select id= "category" name= "category" class="select w-full max-w-xs">
            
            {cats.map((cat) => (
              <option value={cat.cat}> {cat.cat}</option>
              
            ))}
            </select>
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white 
              font-bold py-2 px-4 rounded-none"
                type="submit"
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Productentrypage