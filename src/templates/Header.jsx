
// import React from 'react'

import { Link } from "react-router-dom";

const Header = ({ data }) => {
  // console.log(data);
  return (
    <div
     
    style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(https://image.tmdb.org/t/p/original/${
        data.backdrop_path || data.profile_path
      })`,
      backgroundpossition:"center",
      backgroundSize:"cover",
      backgroundnorepeat:"no-repeat"
    }}
      className='w-full h-[50vh] flex flex-col justify-end  items-start p-[10%] '
    >
      <h1 className='w-[70%]text-5xl font-black text-white'>{data.name || data.title || data.original_name || data.original_title}</h1>

     

      <p className="text-white w-[70%] mt-3 mb-3">
        {data.overview.slice(0, 200)}...
        <Link
            to={`/${data.media_type}/details/${data.id}`}
            className="text-blue-400">more</Link>
      </p>
            
      
   <p className="text-white">
        <i className="text-yellow-500 ri-megaphone-fill"></i>
        {data.release_date || "No Information"}
        <i className="text-yellow-500 ml-5 ri-album-fill"></i>
        {data.media_type.toUpperCase()}
      </p>

   

      <Link
        to={`/${data.media_type}/details/${data.id}/trailer`}
        className="bg-[#6556cd] mt-5 text-white rounded-lg p-2"
      >
        Watch Trailer
      </Link>


     
    </div>

  );
};  

export default Header;