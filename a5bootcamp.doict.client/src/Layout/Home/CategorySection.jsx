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
    <div className='grid md:grid-cols-3 space-x-2 m-10 sm: grid-cols-1'>

    {getCat.map((cat) => (
        <div class="card bg-base-100 shadow-xl mt-5">
        <figure class="px-10 pt-10">
        <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
        class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
        <h2 class="card-title">{cat.cat}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
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