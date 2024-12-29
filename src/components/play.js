import React, { useState, useRef, useEffect } from "react";
import "./App.css";

const songsList = [
  {
    id: 1,
    title: "Husn",
    artist: "Anuv Jain",
    image: "images/husn pic.jpeg",
    link: "songs/Husn by  Anuv jain.mp3",
  },
  {
    id: 2,
    title: "Baarishen",
    artist: "Anuv Jain",
    image: "images/Baarishen.jpg",
    link: "songs/Baarishen By Anuv Jain.mp3",
  },
  {
    id: 3,
    title: "Jo tum Mere ho",
    artist: "Anuv Jain",
    image: "images/Jo tum mere ho.jpg",
    link: "songs/Jo tum Mere ho Anuv Jain.mp3",
  },
  {
    id: 4,
    title: "Perfect",
    artist: "Ed Sheeran",
    image: "https://via.placeholder.com/150/4",
    link: "/songs/perfect.mp3",
  },
  {
    id: 5,
    title: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    image: "https://via.placeholder.com/150/5",
    link: "/songs/stay.mp3",
  },
];

const Play = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query
  const audioRef = useRef(null);

  const playNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songsList.length);
  };

  const playPrevious = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songsList.length - 1 : prevIndex - 1
    );
  };

  const playSong = () => {
    audioRef.current.play();
  };

  const pauseSong = () => {
    audioRef.current.pause();
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [currentSongIndex]);

  // Filter songs based on the search query
  const filteredSongs = songsList.filter(
    (song) =>
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <header className="header">
        <h1>Streamify Songs</h1>
      </header>

      <main>
        {/* Audio Player */}
        <div className="audio-player">
          <div className="current-song-info">
            <img
              src={songsList[currentSongIndex].image}
              alt={songsList[currentSongIndex].title}
              className="song-image-large"
            />
            <div>
              <p>
                <strong>{songsList[currentSongIndex].title}</strong> by{" "}
                {songsList[currentSongIndex].artist}
              </p>
            </div>
          </div>
          <div className="player-controls">
            <button onClick={playPrevious}>⏮</button>
            <button onClick={playSong}>▶</button>
            <button onClick={pauseSong}>⏸</button>
            <button onClick={playNext}>⏭</button>
          </div>
          <audio ref={audioRef} src={songsList[currentSongIndex].link}></audio>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search songs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Playlist */}
        <div className="playlist">
          <h2>Playlist</h2>
          <ul>
            {filteredSongs.map((song, index) => (
              <li
                key={song.id}
                className={`playlist-item ${
                  index === currentSongIndex ? "active" : ""
                }`}
                onClick={() => setCurrentSongIndex(index)}
              >
                <img
                  src={song.image}
                  alt={song.title}
                  className="playlist-song-image"
                />
                <div>
                  {song.title} - {song.artist}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className="footer">
        <p>© 2024 Streamify Playlist. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Play;
