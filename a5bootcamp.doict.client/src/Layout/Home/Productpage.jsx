import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { Helmet } from 'react-helmet-async';
import { FaStar } from "react-icons/fa";
function Productpage() {
    const loadedProduct = useLoaderData();
    console.log(loadedProduct);
  return (
    <>
    <Helmet>
          <title>Moviebazar| Products</title>
    </Helmet>
    <div className='text-center'>
          <h2 className='text-red-700 decoration-solid text-2xl'>Movie List Here</h2>
      </div>
    <div className='grid md:grid-cols-4 space-x-5 m-10 sm: grid-cols-1'>

    {loadedProduct.map((product) => (
        <div class="card bg-base-100 shadow-xl mt-5">
        <figure class="px-5 pt-5">
        <img
        src={product.image}
        alt="Shoes"
        className="rounded-xl w-32" />
        </figure>
        <div class="card-body items-center text-center">
        <h2 class="card-title">{product.category}</h2>
        <p>{product.name}</p>
        <p className="text-justify">{product.details}</p>
        <p className="flex justify-center items-center"><FaStar className="text-orange-400"/>: {product.rating}</p>
        <div class="card-actions">
        <Link to={`/producthome/${product._id}`}><button class="btn btn-primary"><FontAwesomeIcon icon={faEye}/> Get Details</button></Link>
        </div>
        </div>
        </div>
        ))}
         </div>
    </>
  )
}

export default Productpage