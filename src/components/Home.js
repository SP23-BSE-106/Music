import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="logo">Streamify</div>
        <nav>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Pricing</li>
            <li>Support</li>
          </ul>
        </nav>
        <button className="download-btn">Download App</button>
      </header>

      {/* Main Section */}
      <main className="main-content">
        <div className="text-content">
          <h1>
            Don’t Stop <br />
            Play It Till You Feel The <br />
            <span className="groove-text">Groove</span>
          </h1>
          <p className="para">
            Choose and listen from thousands of our already made playlists and
            never worry about changing your song while you work.
          </p>
          <div className="email-box">
            <input
              type="email"
              placeholder="Submit your email here"
              className="email-input"
            />
            <button className="submit-btn">Submit</button>
          </div>
        </div>
        <div className="image-content">
          <img
            src="https://cdn.dribbble.com/users/3245373/screenshots/13953672/media/583f99d58e2beafcd18252c5fcecebc2.png?resize=1000x750&vertical=center" /* Replace with your actual image URL */
            alt="App Screens"
            className="app-image"
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
