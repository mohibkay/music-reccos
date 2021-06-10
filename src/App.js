import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [genre, setGenre] = useState("Bollywood");

  const musicLibrary = {
    Western: ["Perfect", "Love Me Like You Do"],
    Bollywood: ["Khairiyat", "Teri Jhuki Nazar"],
    Bengali: ["Bojhena Sey Bojhena", "Ekla Cholo Re"],
  };

  const genreArray = Object.keys(musicLibrary);

  return (
    <div className="App">
      {genreArray.map((item) => (
        <button key={item} onClick={() => setGenre(item)}>
          {item}
        </button>
      ))}

      <ul>
        {musicLibrary[genre]?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
