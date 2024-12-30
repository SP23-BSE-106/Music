import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [pollResult, setPollResult] = useState(null);

  const handleVote = () => {
    if (selectedOption) {
      setPollResult(selectedOption);
    }
  };

  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About MusicMash</h1>
      </header>
      <main className="about-content">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            At MusicMash, we believe in the power of music to unite, inspire, and elevate every moment of life. Our platform offers an ever-expanding library of playlists, curated to fit any mood, occasion, or activity. Whether you're working, studying, or just relaxing, MusicMash ensures you never run out of the perfect soundtrack. We aim to create a community where music lovers can discover new genres, connect with like-minded individuals, and enhance their lives through music.
          </p>
        </section>
        <section className="team">
          <h2>Our Team</h2>
          <p>
            MusicMash is built by a passionate team of developers, music lovers, and creators dedicated to delivering a seamless listening experience. Our team consists of experts in various fields, from software development to music curation, ensuring that every aspect of the platform meets the highest standards. We work tirelessly to provide a platform that not only meets but exceeds your expectations. Each member brings their unique expertise, and together, we strive to make MusicMash a go-to destination for music enthusiasts around the world.
          </p>
        </section>
        <section className="poll">
          <h2>What is your favorite music genre?</h2>
          <div className="poll-options">
            <label>
              <input
                type="radio"
                value="Pop"
                checked={selectedOption === "Pop"}
                onChange={() => setSelectedOption("Pop")}
              />
              Pop
            </label>
            <label>
              <input
                type="radio"
                value="Rock"
                checked={selectedOption === "Rock"}
                onChange={() => setSelectedOption("Rock")}
              />
              Rock
            </label>
            <label>
              <input
                type="radio"
                value="Jazz"
                checked={selectedOption === "Jazz"}
                onChange={() => setSelectedOption("Jazz")}
              />
              Jazz
            </label>
            <label>
              <input
                type="radio"
                value="Hip-hop"
                checked={selectedOption === "Hip-hop"}
                onChange={() => setSelectedOption("Hip-hop")}
              />
              Hip-hop
            </label>
          </div>
          <button className="vote-btn" onClick={handleVote}>
            Vote
          </button>
          {pollResult && (
            <div className="poll-result">
              <h3>Thank you for voting!</h3>
              <p>Your favorite genre is: {pollResult}</p>
              <p>Now, we’ll give you music suggestions related to your choice!</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default About;
