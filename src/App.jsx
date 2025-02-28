import "./App.css";
import spotifyLogo from "./assets/spotify.svg"; // Adjust the path if needed
import home from "./assets/home.svg"; // Adjust the path if needed
import ham from "./assets/ham.svg"; // Adjust the path if needed
import search from "./assets/search.svg"; // Adjust the path if needed
import Wholesome from "./assets/Wholesome.webp"; // Adjust the path if needed
import mann from "./assets/mann.jpg"; // Adjust the path if needed
import meenakshi from "./assets/meenakshiSundareshwar.jpeg"; // Adjust the path if needed
import prateek from "./assets/prateek.jpeg";
import anuv from "./assets/anuv.jpeg";
import liked from "./assets/liked.jpeg";
import {
  preetam,
  mush,
  happy,
  central,
  pov,
  valentine,
} from "./assets/images.js";

function App() {
  const searchFilters = ["Playlists", "Albums", "Artists", "Podcasts & shows"];
  const PlayLists = [
    {
      title: "Wholesome",
      description: "Playlist . Vishwanath",
      image: Wholesome,
    },
    {
      title: "Mann",
      description: "Song . The Yellow Dairy",
      image: mann,
    },
    {
      title: "Meenakshi Sundareshwar",
      description: "Album . Justin Pabakaran",
      image: meenakshi,
    },
    {
      image: valentine,
      title: " ultimate love playlist",
      description: "Song . The Yellow Dairy",
    },
    {
      image: mush,
      title: " background song.",
      description: "Song . The Yellow Dairy",
    },
    {
      image: happy,
      title: "bright, sunny.",
      description: "Song . The Yellow Dairy",
    },
    {
      image: pov,
      title: "Uff! you've fallen.",
      description: "Song . The Yellow Dairy",
    },
    {
      image: central,
      title: "Bollywood Central!",
      description: "Song . The Yellow Dairy",
    },
  ];
  const recentcards = [
    { title: "Wholesome", image: Wholesome },
    {
      title: "Prateek Kuhaad",
      image: prateek,
    },
    {
      title: "Anuv Jain",
      image: anuv,
    },
    {
      title: "Liked Songs",
      image: liked,
    },
    {
      image: pov,
      title: "Uff! you've fallen.",
    },
    {
      image: central,
      title: "Bollywood Central!",
    },
    {
      image: valentine,
      title: "India's ultimate love playlist",
    },
    {
      image: mush,
      title: "Let this songs be the background.",
    },
  ];

  const maincards = [
    {
      image: valentine,
      description: "India's ultimate love playlist",
    },
    {
      image: mush,
      description: "Let this songs be the background song.",
    },
    {
      image: happy,
      description: "bright, sunny, catchy tunes put a smile on you.",
    },
    {
      image: Wholesome,
      description: "Pritam, Vishal Shekar, A.R.Rehman and more",
    },
    {
      image: pov,
      description: "Uff! you've fallen.",
    },
    {
      image: central,
      description: "Bollywood Central!",
    },
  ];
  return (
    <>
      <nav className="h-[60px] w-screen justify-start flex items-center">
        <img
          src={spotifyLogo}
          alt="Spotify Logo"
          className="invert h-[30px] cursor-pointer w-[40px] ml-[40px]"
        />
        <div
          id="searchbar"
          className="h-[40px]  p-2  bg-[#1F1F1F]   w-[40%] rounded-[20px]  flex justify-around items-center">
          <div
            id="search"
            className="flex  h-[40px] w-[100%] justify-around  rounded-[8px] items-center   ">
            <input
              type="text"
              name="search"
              placeholder="What do you want to play"
              className="w-[90%] text-white text-[14px]  outline-none focus:ring-0"
              id=""
            />
            <img
              src={search}
              className="invert h-[20px]   m-1 flex w-[20px] "
              alt=""
            />
          </div>
        </div>
      </nav>

      <div className="flex p-[2px]">
        <section className="w-[18vw] min-h-[80vh] bg-[#121212] m-1 rounded-[10px]">
          <header className="flex h-[60px] w-full justify-center rounded-[10px]   items-center">
            <h2 className="text-white">Your Library</h2>
          </header>

          <div
            id="searchFilters"
            className="flex w-full  scroll overflow-x-scroll items-center ">
            {searchFilters.map((filter) => (
              <Filter key={filter} filter={filter} />
            ))}
          </div>
          <div
            id="searchbar"
            className="h-[60px] w-[100%]  flex justify-around items-center">
            <div
              id="search"
              className="flex w-[60%] bg-[#1F1F1F] justify-around  rounded-[8px] items-center  h-[30px] ">
              <input
                type="text"
                name="search"
                onInput={searchLibrary}
                placeholder="Search"
                className="w-[70%] text-white text-[14px]  outline-none focus:ring-0"
                id="libsearch"
              />
              <img
                src={search}
                onClick={searchLibrary}
                className="invert h-[20px] cursor-pointer  m-1 flex w-[20px] "
                alt=""
              />
            </div>
            <div id="recent" className="flex   w-[30%] justify-between">
              <h4 className="text-white text-[14px]">Recents</h4>
              <img src={ham} className="invert w-[20px] h-[20px]" alt="" />
            </div>
          </div>
          <div
            id="RowButtons"
            className="text-white h-[60vh] scroll overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
            {PlayLists.map((playlist) => (
              <RowCard key={playlist.title} playlist={playlist} />
            ))} 
          </div>
        </section>

        <main className="w-[80.5vw] scroll overflow-y-scroll min-h-[80vh] bg-[#121212] m-1 rounded-[10px]">
          <div
            id="searchFilters"
            className="flex p-2 h-[65px]  sticky  bg-[#121212] opacity-[0.8]   top-0 w-full overflow-hidden items-center justify-start ">
            {searchFilters.map((filter) => (
              <Filter key={filter} filter={filter} />
            ))}
          </div>
          <div
            id="recentCards"
            className="w-full min-h-[125px]  flex flex-wrap">
            {recentcards.map((rc) => (
              <RecentCard key={rc.title} rc={rc} />
            ))} 
          </div>
          <div
            id="maincardsection"
            className="w-[100%]  mt-[20px] text-white flex  flex-wrap h-[300px]">
            <header className="h-[50px] w-[100%] pl-[20px] text-[25px] flex justify-start items-center ">
              Made For You
            </header>
            <div
              id="maincards"
              className="w-[100%] overflow-x-scroll scroll p-1 flex justify-between items-center">
              {maincards.map((mc) => (
                <MainCard key={mc.image} mc={mc} />
              ))}
            </div>
            <header className="h-[50px] w-[100%] pl-[20px] text-[25px] flex justify-start items-center ">
              Made For You
            </header>
            <div
              id="maincards"
              className="w-[100%] overflow-x-scroll scroll p-1 flex justify-between items-center">
              {maincards.map((mc) => (
                <MainCard key={mc.image} mc={mc} />
              ))}
            </div>
            <header className="h-[50px] w-[100%] pl-[20px] text-[25px] flex justify-start items-center ">
              Made For You
            </header>
            <div
              id="maincards"
              className="w-[100%] overflow-x-scroll scroll p-1 flex justify-between items-center">
              {maincards.map((mc) => (
                <MainCard key={mc.image} mc={mc} />
              ))}
            </div>
          </div>
        </main>
      </div>
      <footer className="h-[75px] w-full fixed bottom-0 flex items-center bg-[#000]"></footer>
    </>
  );
}

// ✅ Fixed Filter Component
const Filter = ({ filter }) => {
  return (
    <p className="text-[#A5A5A5] m-1 text-[14px] h-[30px] cursor-pointer whitespace-nowrap text-center w-fit px-4 text-base rounded-full bg-[#222222] flex items-center justify-center">
      {filter}
    </p>
  );
};

const RowCard = ({ playlist }) => {
  return (
    <div
      id="rowcard"
      className="h-[64px] flex hover:bg-[#1F1F1F] m-1 rounded-[10px] items-center p-2">
      <img
        src={playlist.image}
        className="h-[50px] min-w-[50px] m-0 rounded-[3px]"
        alt=""
      />
      <div className="h-[64px] flex-1 flex flex-col justify-center p-2 ml-1  md:flex">
        <p className="text-[15px]">{playlist.title}</p>
        <p className="text-[14px] text-[#A5A5A5]">{playlist.description}</p>
        <button >
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                class="e-9640-icon"
                viewBox="0 0 24 24">
                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
              </svg>
        </button>
      </div>
    </div>
  );
};

const RecentCard = ({ rc }) => {
  return (
    <div
      className="min-w-[15%] h-[48px] ml-3 mt-2 hover:bg-[#494949] bg-[#2E2E2E] flex justify-between rounded-[5px]"
      id="recentCard">
      <img
        className="h-[48px] w-[48px] rounded-bl-[5px] rounded-tl-[5px]"
        src={rc.image}
        alt={rc.title}
      />
      <p className="text-white flex items-center justify-start p-2 w-[100%]">
        {rc.title}
      </p>
    </div>
  );
};

const MainCard = ({ mc }) => {
  return (
    <>
      <div
        id="maincard"
        className="h-[240px]  ml-2 hover:bg-[#1A1A1A] rounded-[5px] min-w-[195px] flex flex-wrap justify-center pt-2 ">
        <img
          src={mc.image}
          className="h-[172px] rounded-[5px] w-[172px] "
          alt=""
        />
        <div id="description" className="p-2 text-[15px] text-[#A5A5A5]">
          {mc.description}
        </div>
      </div>
    </>
  );
};


function searchLibrary() {
  let searchValue = document.getElementById("libsearch").value.toLowerCase(); 
  document.getElementById("RowButtons").childNodes.forEach((element) => {
    if (element.id === "rowcard") {
      let title = element.querySelector("p").textContent.toLowerCase();
      element.style.display = title.includes(searchValue) ? "flex" : "none";
    }
  });
}



export default App;

// In Tailwind CSS, you can use responsive prefixes to apply styles based on screen sizes. The default breakpoints are:

// sm → 640px (Small screens like mobiles)
// md → 768px
// lg → 1024px
// xl → 1280px
// 2xl → 1536px
