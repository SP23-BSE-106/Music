import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [email, setEmail] = useState("");
  const [dialogMessage, setDialogMessage] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [showNewAccountForm, setShowNewAccountForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Sample database of registered emails
  const registeredEmails = ["test@example.com", "user@example.com"];
//Download button function
  const handleDownload = () => {
    const fileUrl = ""; // Replace with your actual file URL
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "app-download.apk"; // Name of the file to save
    link.click();
  };
  
  // Email validation function
  const validateEmail = (email) => {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reg.test(email);
  };

  // Handle email submission
  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setDialogMessage("Invalid email. Please enter a valid email address.");
      setShowDialog(true);
    } else if (registeredEmails.includes(email)) {
      setDialogMessage("Already registered account.");
      setShowDialog(true);
    } else {
      // Prompt to create a new account
      setShowNewAccountForm(true);
    }
  };

  // Handle account creation
  const handleCreateAccount = () => {
    if (!username || !password) {
      setDialogMessage("Please enter a valid username and password.");
      setShowDialog(true);
    } else {
      // Use backticks for template literals
      setDialogMessage(
        `Account created successfully!\nUsername: ${username}\nEmail: ${email}`
      );
      console.log(dialogMessage);
      
      setShowNewAccountForm(false);
      setShowDialog(true);
      setEmail("");
      setUsername("");
      setPassword("");
    }
  };
  
  

  // Close dialog
  const closeDialog = () => {
    setShowDialog(false);
  };

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
        <button className="download-btn"  onClick={handleDownload}>Download App</button>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
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

      {/* Dialog Box */}
      {showDialog && (
  <div className="dialog">
    <div className="dialog-content">
      {/* Properly handle multi-line messages */}
      {dialogMessage.split("\n").map((line, index) => (
        <p key={index}>{line}</p> // Render each line as a <p>
      ))}
      <button className="close-btn" onClick={closeDialog}>
        Close
      </button>
    </div>
  </div>
)}


      {/* New Account Form */}
      {showNewAccountForm && (
        <div className="dialog">
          <div className="dialog-content">
            <h2>Create New Account</h2>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
            />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
            <button className="submit-btn" onClick={handleCreateAccount}>
              Create Account
            </button>
            <button className="close-btn" onClick={() => setShowNewAccountForm(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;