import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Movie() {




let [movie,setMovie]=useState([])
   async function MovieTrend() {
    let {data}=await axios.get (`https://api.themoviedb.org/3/trending/movie/day?api_key=44ee5523e457e74020effc2bddc4592e`);
    console.log(data.results);
    setMovie(data.results)
    }
  useEffect(()=>{
    MovieTrend()
  },[])
    return<>
     <div className="text-white">
     <h1 className=' text-center'>Movie</h1>
     <div className="container mt-4">
       <div className="row">
        {movie.map((ele,index)=>
        <div className='col-md-3' key={index}>
          <Link to={`/details/${ele.id}`} className='text-text-decoration-none'>
  <div className="position-relative"> 
   <img src={'https://image.tmdb.org/t/p/w500/'+ele.poster_path}  alt='' className='w-100 rounded rounded-5'    />
        <div className="imageLayer rounded rounded-5">
          <div className="imageInfo">
            <h6>{ele.title}</h6>
          </div>
        </div>
    {ele.vote_average? <div className=" bg-info p-2 text-white position-absolute top-0 end-0">
    {ele.vote_average?.toFixed(1)}
      </div>
      :''}
         </div> 
      
   
     </Link>
         <h4>Name: {ele.title}</h4></div>)}
      </div>
      </div>
      </div>
    </>
}
