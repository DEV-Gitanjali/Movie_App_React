
import React from 'react';
import { Link } from "react-router-dom";

const Sidenav =() => {
  
  return (
    <div className='w-1/5 h-full border-r-2 border-zinc-200 p-3'>
      <h1 className='text-2xl text-white font-black'>
        <i className="text-[#6556cd] ri-tv-fill mr-3"></i>
        <span className='text-2xl'>SCSDB</span>
      </h1>

      <nav className='flex flex-col  text-zinc-400 text-xl  gap-1'>
        <h1 className='text-white font-semibold text-xl mt-10 mb-5 ml-2'>New Feeds</h1>

        <Link to="/trending" className='hover:bg-[#6556cd] hover:text-white   duration-300 rounded p-3'>
        <i className=" mr-1 ri-fire-fill"></i>Trending</Link>

        <Link className='hover:bg-[#6556cd] hover:text-white   duration-300 rounded p-3'>
        <i className=" mr-2 ri-bard-fill"></i>Popular</Link>
        <Link className='hover:bg-[#6556cd] hover:text-white   duration-300 rounded p-3' >
        <i className=" mr-2 ri-movie-2-fill"></i>Movies</Link>
        <Link className='hover:bg-[#6556cd] hover:text-white   duration-300 rounded p-3'>
        <i className=" mr-2 ri-tv-2-fill"></i>TV Shows</Link>
        <Link className='hover:bg-[#6556cd] hover:text-white   duration-300 rounded p-3'>
        <i className=" mr-2 ri-team-fill"></i>People</Link>
         
      </nav>
        
           <hr className='border-none h-[1px] bg-zinc-400 mt-3'/>
        
      <nav className='flex flex-col  text-zinc-400 text-xl  gap-1'>
        <h1 className='text-white font-semibold text-xl mt-8 mb-3 ml-3'>Website Information</h1>

        <Link className='hover:bg-[#6556cd] hover:text-white   duration-300 rounded p-3'>
        <i className=" mr-2 ri-information-fill "></i>About</Link>

        <Link className='hover:bg-[#6556cd] hover:text-white   duration-300 rounded p-3'>
        <i className="  mr-2 ri-phone-fill "></i>Contact Us</Link>
      
      </nav>
    </div>
  )
}


export default Sidenav; 