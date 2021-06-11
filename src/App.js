import "./App.css";
import { useState } from "react";
import { ImYoutube2 } from "react-icons/im";

function App() {
  const [genre, setGenre] = useState("Bollywood");
  const [selectedSong, setSelectedSong] = useState({});

  const musicLibrary = {
    Western: [
      {
        song: "Perfect",
        linkPreview: "youtube/perfect",
        link: "https://youtu.be/2Vv-BfVoq4g",
      },
      {
        song: "Love Me Like You Do",
        linkPreview: "youtube/Love Me Like You Do",
        link: "https://youtu.be/AJtDXIazrMo",
      },
      {
        song: "What About Us",
        linkPreview: "youtube/What About Us",
        link: "https://youtu.be/ClU3fctbGls",
      },
    ],
    Bollywood: [
      {
        song: "Khairiyat",
        linkPreview: "youtube/Khairiyat",
        link: "https://youtu.be/hoNb6HuNmU0",
      },
      {
        song: "Teri Jhuki Nazar",
        linkPreview: "youtube/Teri Jhuki Nazar",
        link: "https://youtu.be/ZgIzch1Pqj4",
      },
      {
        song: "Tu Chahiye",
        linkPreview: "youtube/Tu Chahiye",
        link: "https://youtu.be/zuvla6ABKbs",
      },
    ],
    Bengali: [
      {
        song: "Bojhena Sey Bojhena",
        linkPreview: "youtube/Bojhena Sey Bojhena",
        link: "https://youtu.be/J2JQQm1h6xQ",
      },
      {
        song: "Ekla Cholo Re",
        linkPreview: "youtube/Ekla Cholo Re",
        link: "https://youtu.be/r94gSTyH2cM",
      },
    ],
  };

  const genreArray = Object.keys(musicLibrary);

  console.log(selectedSong);

  return (
    <div className="App">
      <div className="container">
        <h2>Music Reccos</h2>
        <div className="buttons">
          {genreArray.map((item) => (
            <button
              className={`button ${genre === item && "selected"}`}
              key={item}
              onClick={() => setGenre(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <ul>
          {musicLibrary[genre]?.map((item) => (
            <li
              onClick={() => setSelectedSong(item)}
              className={`${selectedSong.song === item.song && "song"}`}
              key={item.song}
            >
              {item.song}
            </li>
          ))}
        </ul>
      </div>

      <div className="yt-link">
        <ImYoutube2 className="yt-icon" />

        {selectedSong?.link ? (
          <a href={selectedSong.link}>{selectedSong.linkPreview}</a>
        ) : (
          <p>Click on a song to get YouTube Link</p>
        )}
      </div>
    </div>
  );
}

export default App;
