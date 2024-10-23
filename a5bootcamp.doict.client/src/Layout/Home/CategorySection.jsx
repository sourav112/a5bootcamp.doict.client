import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function CategorySection() {

    const [getCat, setCategories] = useState([]);
    
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch('http://localhost:5000/cats');
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
    <div className='text-center text-red-700 uppercase decoration-solid text-lg m-5'>
        <h2>Movie Category</h2>
    </div>
    <div className='grid md:grid-cols-4 space-x-2 ml-10 mr-10 sm: grid-cols-1'>
    {getCat.map((cat) => (
        <div class="card bg-base-100 shadow-xl mt-5">
        <figure class="px-10 pt-10">
        <img
        src="https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg"
        alt="Movies"
        class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
        <h2 class="card-title">{cat.cat}</h2>
        <div class="card-actions">
        <Link to={`/cathome/${cat.cat}`}><button class="btn btn-primary"><FontAwesomeIcon icon={faEye}/> Get Details</button></Link>
        </div>
        </div>
        </div>
        ))}
         </div>
    </>
    
  )
}

export default CategorySection