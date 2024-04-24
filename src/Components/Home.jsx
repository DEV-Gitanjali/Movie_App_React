import React, { useEffect, useState } from 'react';
import Sidenav from '../templates/Sidenav';
import Topnav from '../templates/Topnav';
import axios from '../utils/axios';
import Header from '../templates/Header';
import HorizentalCards from '../templates/HorizentalCards';
import Loading from './Loading';
import Dropdown from '../templates/Dropdown';

const Home = () => {
  document.title = 'Homepage';

  const [wallpaper, setwallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setcategory] = useState("all");


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
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
      // console.log(randomWallpaper);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  // console.log(wallpaper);

  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
    // !trending && getTrending();
  }, [category]);

  // console.log(trending);

  return wallpaper && trending  ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto  overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />
        <div className="flex justify-between p-5">
                    <h1 className="text-3xl font-semibold text-zinc-400">
                        Trending
                    </h1>

                    <Dropdown
                        title="Filter"
                        options={["tv", "movie", "all"]}
                        func={(e) => setcategory(e.target.value)}
                    />
                </div>


        <HorizentalCards data={trending}/>

      </div>
    </>
  ) : (
    <Loading/>
  );
};

export default Home;