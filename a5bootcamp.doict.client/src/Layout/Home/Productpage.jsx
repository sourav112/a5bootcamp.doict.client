import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";

function Productpage() {
    const loadedProduct = useLoaderData();
    console.log(loadedProduct);
  return (
    <>
    <div className='grid md:grid-cols-4 space-x-2 m-10 sm: grid-cols-1'>

    {loadedProduct.map((product) => (
        <div class="card bg-base-100 shadow-xl mt-5">
        <figure class="px-10 pt-10">
        <img
        src={product.image}
        alt="Shoes"
        class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
        <h2 class="card-title">{product.category}</h2>
        <p>{product.name}</p>
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