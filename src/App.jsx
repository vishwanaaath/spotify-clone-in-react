import "./App.css";
import spotifyLogo from "./assets/spotify.svg"; // Adjust the path if needed
import home from "./assets/home.svg"; // Adjust the path if needed
import Wholesome from "./assets/Wholesome.webp"; // Adjust the path if needed
import mann from "./assets/mann.jpg"; // Adjust the path if needed
import meenakshi from "./assets/meenakshiSundareshwar.jpeg"; // Adjust the path if needed
import prateek from "./assets/prateek.jpeg"
import anuv from "./assets/anuv.jpeg"
import liked from "./assets/liked.jpeg"
import { preetam, mush, happy, central, pov, valentine} from "./assets/images.js"; 



function App() {
  const searchFilters = ["Playlists", "Albums", "Artists", "Podcasts & shows"];
  const PlayLists = [
    {
      title: "Wholesome",
      description: "Playlist . Vishwanath",
      image: Wholesome,
    },
    {
      title: "mann",
      description: "Song . The Yellow Dairy",
      image: mann,
    },
    {
      title: "Meenakshi Sundareshwar",
      description: "Album . Justin Pabakaran",
      image: meenakshi
    }, 
    
  ];
 const recentcards =[
  {title: "Wholesome", 
    image: Wholesome
  },
  {
    title: "Prateek Kuhaad",
    image: prateek
  },
  {
    title: "Anuv Jain",
    image: anuv
  }
  ,{
    title:"Liked Songs",
    image: liked
  }
 ]
 
const maincards=[
  {
    image: valentine,
    description: "India's ultimate love playlist"
  },
  {
    image: mush,
    description:"Let this songs be the background song."
  },
  {
    image: happy,
    description: "bright, sunny, catchy tunes put a smile on you."
  }, 
  {
    image: Wholesome,
    description: "Pritam, Vishal Shekar, A.R.Rehman and more"
  }, 
  {
    image: pov,
    description: "Uff! you've fallen."
  }, 
  {
    image: central,
    description: "Bollywood Central!"
  }, 
  
]
  return (
    <>
      <nav className="h-[60px] w-screen flex items-center">
        <img src={spotifyLogo} alt="Spotify Logo" className="invert ml-2" /> 
      </nav>

      <div className="flex p-[2px]">
        <section className="w-[25vw] min-h-[80vh] bg-[#121212] m-1 rounded-[10px]">
          <header className="flex h-[60px] w-full justify-center rounded-[10px]   items-center">
            <h2 className="text-white">Your Library</h2>
          </header>

          <div
            id="searchFilters"
            className="flex  w-full scroll overflow-x-scroll justify-center ">
            {searchFilters.map((filter) => (
              <Filter key={filter} filter={filter} />
            ))}
            {searchFilters.map((filter) => (
              <Filter key={filter} filter={filter} />
            ))}
          </div>
          <div id="searchbar" className="h-[60px] w-[100%]"></div>
          <div
            id="RowButtons"
            className="text-white scroll h-[60vh] overflow-y-auto scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-thumb-rounded scrollbar-track-rounded">
            {PlayLists.map((playlist) => (
              <RowCard key={playlist.title} playlist={playlist} />
            ))}
            {PlayLists.map((playlist) => (
              <RowCard key={playlist.title} playlist={playlist} />
            ))}
            {PlayLists.map((playlist) => (
              <RowCard key={playlist.title} playlist={playlist} />
            ))}
          </div>
        </section>

        <main className="w-[73.5vw] scroll overflow-y-scroll min-h-[80vh] bg-[#121212] m-1 rounded-[10px]">
          <div
            id="searchFilters"
            className="flex p-2 h-[65px]  sticky  bg-[#121212] opacity-[0.9]   top-0 w-full overflow-hidden items-center justify-start ">
            {searchFilters.map((filter) => (
              <Filter key={filter} filter={filter} />
            ))}
          </div>
          <div
            id="recentCards"
            className="w-full h-[108px] mt-[5px]  flex flex-wrap">
            {recentcards.map((rc) => (
              <RecentCard key={rc.title} rc={rc} />
            ))}
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
    <p className="text-white m-1 h-[30px] whitespace-nowrap text-center w-fit px-4 text-base rounded-full bg-[#222222] flex items-center justify-center">
      {filter}
    </p>
  );
};




const RowCard = ({playlist}) => {
  return (
    <div
      id="rowcard"
      className="text-[15px] h-[64px] flex hover:bg-[#1F1F1F] m-1 rounded-[10px] items-center p-2">
      <img src={playlist.image} className="h-[50px] m-0 rounded-[3px]" alt="" />
      <div className="flex h-[64px] flex-wrap flex-col justify-center p-2 ml-1  ">
        <p>{playlist.title}</p>
        <p>{playlist.description}</p>
      </div>
    </div>
  );
};

const RecentCard = ({ rc }) => {
  return (
    <div
      className="w-[23%] h-[48px] ml-3 hover:bg-[#494949] bg-[#2E2E2E] flex justify-between rounded-[5px]"
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
}

export default App;
