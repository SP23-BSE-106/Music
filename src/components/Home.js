import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const defaultUsername = "admin";
  const defaultPassword = "123";

  const handleSubmit = () => {
    if (username === defaultUsername && password === defaultPassword) {
      navigate("/play");
    } else {
      alert("Invalid username or password.");
    }
    setUsername("");
    setPassword("");
  };

  return (
    <div className="home">

      <main className="main-content">
        <div className="text-content">
          <h1>
            Don’t Stop <br />
            Play It Till You Feel The <br />
            <span className="groove-text">Groove</span>
          </h1>
          <p className="para">
            Choose and listen from thousands of our already made playlists and never worry about changing your song while you work.
          </p>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter username"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
        <div className="image-content">
          <img
            src="https://cdn.dribbble.com/users/3245373/screenshots/13953672/media/583f99d58e2beafcd18252c5fcecebc2.png?resize=1000x750&vertical=center"
            alt="App Screens"
            className="app-image"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
