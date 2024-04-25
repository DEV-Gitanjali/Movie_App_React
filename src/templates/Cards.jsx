import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ data, title }) => {
 
    if (!Array.isArray(data)) {
        return <div>Data is not an array.</div>;
      }
    
      return (
        <div className='flex flex-wrap w-full h-full px-[3%] ml-10 bg-[#1F1E24]  ml-0'>
          {data.map((c, i) => (
            <Link className='w-[25vh] mr-[5%] mb-[5%]' key={i}>
              <img
                className=' shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover'
                src={`https://image.tmdb.org/t/p/original/${c.backdrop_path || c.poster_path}`}
                alt=''
              />

              <h1 className='text-2xl text-zinc-300 mt-2 font-semibold'>
              {c.name || c.title || c.original_name || c.original_title}

              </h1>


            </Link>
          ))}
        </div>
      );
    };
export default Cards;