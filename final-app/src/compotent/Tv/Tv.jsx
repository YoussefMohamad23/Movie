import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Tv() {
    const[tvapi,setTvApi]=useState([])

async function Tv() {
let x= await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=44ee5523e457e74020effc2bddc4592e`)
console.log(x.data.results);
setTvApi(x.data.results)
}

useEffect(()=>{
  Tv()
},[])


  return <>
  <h1 className=' mt-5 mb-3 text-center'>Ternd TV</h1>
  <div className="container">
    <div className="row">
    <div className="col-md-3 d-flex align-items-center">
      <div>
      <div className="border w-25 mb-3"></div>
      <h2 className=' h4'>Trending TV <br/> To Watch Right Now</h2>
      <p className=' py-2 '>Watched Tv To Watch Right Now</p>
      <div className=" w-100 mt-3 border "></div>
      </div>
    </div>

        {tvapi.map((ele,index)=><div className="col-md-3" key={index}>
        <Link to={`/detailstv/${ele.id}`} className=' text-decoration-none'>

        <div className="position-relative"> 
   <img src={'https://image.tmdb.org/t/p/w500/'+ele.poster_path}  alt='' className='w-100 rounded rounded-5'    />
        <div className="imageLayer rounded rounded-5">
          <div className="imageInfo">
            <h6>{ele.name}</h6>
          </div>
        </div>
    {ele.vote_average? <div className=" bg-info p-2 text-white position-absolute top-0 end-0">
    {ele.vote_average?.toFixed(1)}
      </div>
      :''}
         </div> 
      
   
     </Link>
<h4>{ele.name}</h4>
</div>
)}
    </div>
  </div>
  
  
  </>
}
