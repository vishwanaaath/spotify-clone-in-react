import "./App.css";
import spotifyLogo from "./assets/spotify.svg"; // Adjust the path if needed
import Wholesome from "./assets/Wholesome.webp"; // Adjust the path if needed
import mann from "./assets/mann.jpg"; // Adjust the path if needed
import meenakshi from "./assets/meenakshiSundareshwar.jpeg"; // Adjust the path if needed

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

  return (
    <>
      <nav className="h-[60px] w-screen flex items-center">
        <img
          src={spotifyLogo}
          alt="Spotify Logo"
          width="30"
          height="30"
          className="invert ml-2"
        />
      </nav>

      <div className="flex p-[2px]">
        <section className="w-[25vw] min-h-[80vh] bg-[#121212] m-1 rounded-[10px]">
          <header className="flex h-[60px] w-full justify-center rounded-[10px]   items-center">
            <h2 className="text-white">Your Library</h2>
          </header>

          <div
            id="searchFilters"
            className="flex  w-full overflow-hidden justify-center ">
            {searchFilters.map((filter) => (
              <Filter key={filter} filter={filter} />
            ))}
          </div>
          <div id="searchbar" className="h-[60px] w-[100%]"></div>
          <div
  id="RowButtons"
  className="text-white h-[60vh] overflow-y-auto scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-thumb-rounded scrollbar-track-rounded"
>
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

        <main className="w-[73.5vw] min-h-[80vh] bg-[#121212] m-1 rounded-[10px]"></main>
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





export default App;
