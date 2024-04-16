import { useState } from 'react';
import { Link } from 'react-router-dom';


const Topnav = () => {

       const[query, setquery] = useState("");

       console.log(query)

  return (
    <div className='w-full h-[10vh] relative flex justify-start  items-center  ml-[15%]'>
        <i className="  text-zinc-400 text-2xl ri-search-line"></i>
         
         <input   onChange={(e)=> setquery(e.target.value)}
         value={query}

         className=" w-[40%] mx-10 p-2 text-xl outline-none boder-none  bg-transparent text-zinc-200  "
          type='text' placeholder='search anything' />
          {query.length > 0 && (

            <i onClick={() =>setquery("")} className="  text-zinc-400 text-3xl ri-close-fill"></i>
          )}

        <div className='w-[50%] max-h-[50vh]  bg-zinc-200 absolute top-[90%] overflow-auto border-rounded'>
            {/* <Link  className='  hover:text-black hover:bg-zinc-300 duration-300 font-semibold  text-zinc-600 inline-block  w-[100%] p-8  flex justify-start items-center border-b-2 border-zinc-100  '>
            <img src="" alt="" />
             <span>Hello everyone</span>
            </Link>  */}

        </div>
    
    </div>
  )
}

export default Topnav
