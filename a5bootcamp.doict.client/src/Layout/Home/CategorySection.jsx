import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function CategorySection() {

    const [getCat, setCategories] = useState([]);
    
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch(import.meta.env.VITE_BACKEND_LINK+'/cats');
                const data = await res.json();
                setCategories(data);
               
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
    
        fetchCategories();
    }, []);
  return (
    <>
    <div className='text-center text-red-700 uppercase decoration-solid text-2xl m-5'>
        <h2>Movie Category</h2>
    </div>
    <div className='grid md:grid-cols-5 space-x-2 ml-10 mr-10 sm: grid-cols-1'>
    {getCat.map((cat) => (
        <div class="card bg-base-100 shadow-xl mt-5">
        <figure class="px-5 pt-5">
        <img
        src="https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg"
        alt="Movies"
        className="rounded-xl w-36" />
        </figure>
        <div class="card-body items-center text-center">
        <h2 class="card-title">{cat.cat}</h2>
        <div class="card-actions">
        <Link to={`/cathome/${cat.cat}`}><button class="btn btn-primary"><FontAwesomeIcon icon={faEye}/> View Movies</button></Link>
        </div>
        </div>
        </div>
        ))}
         </div>
    </>
    
  )
}

export default CategorySection