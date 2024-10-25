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
    <div className='text-center text-red-700 uppercase decoration-solid text-2xl container mx-auto pb-10 justify-center'>
        <img 
        src="https://rukminim2.flixcart.com/image/850/1000/l2z26q80/poster/4/r/k/small-yaa-fast-furious-cool-art-effect-movie-poster-original-image72hwzkpexdg.jpeg?q=20&crop=false"
        alt="Movies"
        className="rounded-xl w-4/5 h-64 mx-auto"/>
    
        <div class="stats shadow m-2 w-3/4">
        <div class="stat">
            <div class="stat-figure text-secondary">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block h-8 w-8 stroke-current">
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            </div>
            <div class="stat-title">Downloads</div>
            <div class="stat-value">31K</div>
            <div class="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div class="stat">
            <div class="stat-figure text-secondary">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block h-8 w-8 stroke-current">
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
            </svg>
            </div>
            <div class="stat-title">New Users</div>
            <div class="stat-value">4,200</div>
            <div class="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div class="stat">
            <div class="stat-figure text-secondary">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block h-8 w-8 stroke-current">
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
            </svg>
            </div>
            <div class="stat-title">New Movies</div>
            <div class="stat-value">1,200</div>
            <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>
        
        </div>
    </div>
        
        
    {/** 2nd Stat */}
    <div className='text-center'>
    <div class="stats shadow text-center">
    <div class="stat">
        <div class="stat-title"></div>
        <div class="stat-value">All Categories</div>
        <div class="stat-desc"></div>
    </div>
    </div>
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
