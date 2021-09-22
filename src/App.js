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
        rating: "⭐⭐⭐⭐⭐",
        linkPreview: "youtube/perfect",
        link: "https://youtu.be/2Vv-BfVoq4g",
        description: "An Ed Sheeran song",
      },
      {
        song: "Love Me Like You Do",
        rating: "⭐⭐⭐⭐⭐",
        linkPreview: "youtube/Love Me Like You Do",
        link: "https://youtu.be/AJtDXIazrMo",
        description: "An Ellie Goldie song",
      },
      {
        song: "What About Us",
        rating: "⭐⭐⭐⭐⭐",
        linkPreview: "youtube/What About Us",
        link: "https://youtu.be/ClU3fctbGls",
        description: "A Pink Floyd song",
      },
    ],
    Bollywood: [
      {
        song: "Khairiyat",
        rating: "⭐⭐⭐⭐⭐",
        linkPreview: "youtube/Khairiyat",
        link: "https://youtu.be/hoNb6HuNmU0",
        description: "An Arijit Singh song",
      },
      {
        song: "Teri Jhuki Nazar",
        rating: "⭐⭐⭐⭐⭐",
        linkPreview: "youtube/Teri Jhuki Nazar",
        link: "https://youtu.be/ZgIzch1Pqj4",
        description: "A song by Shafqat Amanat Ali",
      },
      {
        song: "Tu Chahiye",
        rating: "⭐⭐⭐⭐⭐",
        linkPreview: "youtube/Tu Chahiye",
        link: "https://youtu.be/zuvla6ABKbs",
        description: "A song by Javed Ali",
      },
    ],
    Bengali: [
      {
        song: "Bojhena Sey Bojhena",
        rating: "⭐⭐⭐⭐⭐",
        linkPreview: "youtube/Bojhena Sey Bojhena",
        link: "https://youtu.be/J2JQQm1h6xQ",
        description: "A song by Arijit Singh",
      },
      {
        song: "Na Re Na",
        rating: "⭐⭐⭐⭐⭐",
        linkPreview: "youtube/Na Re Na",
        link: "https://youtu.be/azLiK9wdxl8",
        description: "An Arijit Singh song",
      },
      {
        song: "Ekla Cholo Re",
        rating: "⭐⭐⭐⭐⭐",
        linkPreview: "youtube/Ekla Cholo Re",
        link: "https://youtu.be/r94gSTyH2cM",
        description: "A song by Amitabh Bachchan",
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
            <div className="listItems">
              <li
                onClick={() => setSelectedSong(item)}
                className={`${selectedSong.song === item.song && "song"}`}
                key={item.song}
              >
                <span>
                  {item.song}
                  <br />
                  <p style={{ fontSize: "12px", margin: 0, marginTop: "5px" }}>
                    {item.description}
                  </p>
                </span>

                <div>{item.rating}</div>
              </li>
            </div>
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
