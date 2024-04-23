import React, { useEffect, useState } from 'react';
import Sidenav from '../templates/Sidenav';
import Topnav from '../templates/Topnav';
import axios from '../utils/axios';
import Header from '../templates/Header';
import HorizentalCards from '../templates/HorizentalCards';

const Home = () => {
  document.title = 'Homepage';

  const [wallpaper, setwallpaper] = useState(null);
  const [trending, setTrending] = useState(null);

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      const randomData = data.results[Math.floor(Math.random() * data.results.length)];
      setwallpaper(randomData);
    } catch (error) {
      console.log('Error:', error);
    }
  };


  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      setTrending(data.results);
      // console.log(randomWallpaper);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  // console.log(wallpaper);

  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
    !trending && getTrending();
  }, []);

  console.log(trending);

  return wallpaper && trending  ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto  overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />
        <HorizentalCards data={trending}/>

      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
};

export default Home;