import React, { useEffect, useState } from 'react';
import Sidenav from '../templates/Sidenav';
import Topnav from '../templates/Topnav';
import axios from '../utils/axios';
import Header from '../templates/Header';

const Home = () => {
  document.title = 'Homepage';

  const [wallpaper, setwallpaper] = useState(null);
  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      const randomData = data.results[Math.floor(Math.random() * data.results.length)];
      setwallpaper(randomData);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  console.log(wallpaper);

  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
  }, [wallpaper]);

  return wallpaper ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full ">
        <Topnav />
        <Header data={wallpaper} />
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
};

export default Home;