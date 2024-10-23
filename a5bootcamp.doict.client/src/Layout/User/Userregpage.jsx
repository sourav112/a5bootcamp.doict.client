import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../provider/AuthProvider";

const Userregpage = () => {
  const { registerWithEmail,updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

    const handleAddUser = (event) => {
        event.preventDefault();
    
        const form = new FormData(event.currentTarget);
    
        const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");
        const img_url = form.get("img_url");
        const address = form.get("address");

        if(name=="")
        {
          toast.error("Please fillup your name", {
            position: "top-center",
          });
        }
          else if(email=="")
            {
              toast.error("Please fillup your Email", {
                position: "top-center",
              });
            }
            else if(password=="")
              {
                toast.error("Please fillup your password", {
                  position: "top-center",
                });
              }
            else if(img_url=="")
              {
                toast.error("Please fillup your Image URL", {
                  position: "top-center",
                });
              }
            else if(address=="")
              {
                toast.error("Please fillup your Address", {
                  position: "top-center",
                });
              }

        else{
         
          const user = { name, email,password,img_url, address };
          console.log(user);
      
          registerWithEmail(email,password,name,img_url,address)
          .then((result) => {
            console.log(result.user);
            handleUserProfile(name, img_url);
            toast.success("User Registration Successful", {
              position: "top-right",
            });
            navigate("/login");
          })
          .catch((error) => {
            console.log(error);
          });
          const handleUserProfile = (name, img_url) => {
            const profile = { name: name, img_url: img_url };
        
            updateUserProfile(profile)
              .then(() => {})
              .catch((error) => {
                console.log(error);
              });
          };
        }
        //const isAdmin=false;
        //const isBlocked=false;
    
        
       /* fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              toast.success("User Added Successfully", {
                position: "top-right",
              });
            }
            event.target.reset();
          });*/
      };
      return (
        <>
          <div className="mx-auto mt-20">
            <div className="flex justify-center justify-items-center">
              <h1 className="text-3xl font-bold text-center mb-10">
                Registration
              </h1>
              &nbsp;&nbsp;&nbsp;
              <Link to="/">
                <button
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
              py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
                >
                  Home
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
                    Full Name
                  </label>
                </div>
                <div className="md:w-1/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
                  leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="your name"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="email"
                  >
                    E-mail
                  </label>
                </div>
                <div className="md:w-1/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
                  leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="email"
                  >
                    Password
                  </label>
                </div>
                <div className="md:w-1/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
                  leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Type your password here."
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="name"
                  >
                    Image URL
                  </label>
                </div>
                <div className="md:w-1/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
                  leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="img_url"
                    type="text"
                    name="img_url"
                    placeholder="your image"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="name"
                  >
                    Address
                  </label>
                </div>
                <div className="md:w-1/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
                  leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="address"
                    type="text"
                    name="address"
                    placeholder="your address"
                  />
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
                    Add User
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      );
}

export default Userregpage