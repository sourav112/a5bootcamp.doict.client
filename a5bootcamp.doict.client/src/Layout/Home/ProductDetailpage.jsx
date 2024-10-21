import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";

function ProductDetailpage() {
    const loadedProduct = useLoaderData();
    console.log(loadedProduct);
  return (
    <>
    <div class="card bg-base-100 shadow-xl mt-5">
    <figure class="px-10 pt-10">
    <img
    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    alt="Shoes"
    class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
    <h2 class="card-title">{loadedProduct.category}</h2>
    <p>{loadedProduct.name}</p>
    <div class="card-actions">
    <Link to={`/producthome/${loadedProduct._id}`}><button class="btn btn-primary"><FontAwesomeIcon icon={faEye}/> Buy Now</button></Link>
    </div>
    </div>
    </div>
    </>
  )
}

export default ProductDetailpage