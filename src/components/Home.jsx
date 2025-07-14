import React from 'react';
import './Home.css';

function Home() {

  return (
    <div className="home-container">
      {/* First Image with Overlay */}
      <div className="image-section">
        <img
          src="2.jpg"
          alt="Shelby Cobra"
          className="responsive-image studioimage"
        />
        <div className="overlay">
          <h1>HSMDESIGNS</h1>
          <h1>STUDIO</h1>
          <p>HOME AWAY FROM HOME IS WHERE</p>
          <h3>YOURS KNOWLEDGE INCREASED</h3>
        </div>
      </div>
      <br />

      {/* Split Image Section with Left Image Changing */}
      

      <div className="image-section">
        <img
          src="homenew.jpg"
          alt="Clay Lab"
          className="responsive-image"
        />
        <div className="clay">
          <h1>OUR</h1>
          <h1>CLAY LAB</h1>
          <p>THE BEST PLACE FOR</p>
          <h3>PROFESSIONALISM</h3>
        </div>
      </div>
      <br />

      {/* Models Section */}
      <div className="image-section">
        <img
          src="Duccati.jpeg"
          alt="Models"
          className="responsive-image"
        />
        <div className="bike">
          <h1>OUR HAND MADE</h1>
          <h1>MODELS</h1>
          <h1>OUR PRIDE</h1>
        </div>
      </div>

      {/* Background Video */}
      <div className="video-section">
        <video className="homepage-video" autoPlay muted loop playsInline>
          <source src="/ShelbyClip.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Home;
