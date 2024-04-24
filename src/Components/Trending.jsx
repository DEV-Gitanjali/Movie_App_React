import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from '../templates/Topnav';
import Dropdown from '../templates/Dropdown';
import axios from "../utils/axios";
import Cards from '../templates/Cards';
import Loading from './Loading';

const Trending = () => {
  const navigate = useNavigate();
    const [category, setcategory] =useState("all");
    const [duration, setduration] =useState("day");
    const [trending, settrending] =useState("null");

    const GetTrending = async () => {
      try {
        const { data } = await axios.get(`/trending/${category}/${duration}`);
        settrending(data.results);
        // console.log(randomWallpaper);
      } catch (err) {
        console.log("Error: ", error);
      }
    };

    console.log(trending);

    useEffect(()=>{
      GetTrending();
    }, [category, duration])


  return  trending ? (
    <div className=' px-[3%] w-screen h-screen overflow-hidden overflow-y-auto'>
      <div className='w-full  flex  items-center justify-between'>
        <h1 className=" w-[20%]  text-2xl font-semibold text-zinc-400">
                  <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] ri-arrow-left-line"
                    ></i>{" "}
                    Trending
                </h1>
                
               <div className='flex items-center w-[80%]'>
                <Topnav  />

                <Dropdown 
                 title="Category"
                 options={["movie", "tv", "all"]}
                 func={(e) => setcategory(e.target.value)}
                 />
                <div className='w-[2%]'></div>

                <Dropdown
                        title="Duration"
                        options={["week", "day"]}
                        func={(e) => setduration(e.target.value)}
                        />

                </div>




        
       </div>
    
       <Cards data={trending} title={category} />
        
  
    </div>
  ) : (

    <Loading/>
  )
}

export default Trending
