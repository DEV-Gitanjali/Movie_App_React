
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';


const Trailer = () => {
  
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  console.log(ytvideo);
  
  return (
      <div className="bg-[rgba(0,0,0,.9)] absolute z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center">
          
       {ytvideo ? <ReactPlayer
        
        height={800}
        width={1500}
        url={`https://www.youtube.com/watch?v=${ytvideo.key}`}/> : <h1>noFound</h1>}

      </div>
  );
};
//   

export default Trailer;





