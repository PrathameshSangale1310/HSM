import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [leftImageIndex, setLeftImageIndex] = useState(0);
  const leftImages = ["/home1.jpeg", "/home2.jpeg"]; // Add as needed

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftImageIndex(prev => (prev + 1) % leftImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [leftImages.length]);

  return (
    <div className="home-container">
      {/* First Image with Overlay */}
      <div className="image-section">
        <img
          src="studio.jpeg"
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
      <div className="split-image-section">
        <div className="split-image left fade-in-image">
          <img src={leftImages[leftImageIndex]} alt="Left Changing" className="split-img" />
        </div>
        <div className="split-image right">
          <img src="/home2.jpeg" alt="Right" className="split-img" />
        </div>
      </div>
      <br />

      {/* Second Static Split Section */}
      <div className="split-image-section">
        <div className="split-image left">
          <img src="/home2.jpeg" alt="Left Static" className="split-img" />
        </div>
        <div className="split-image right">
          <img src="/home2.jpeg" alt="Right Static" className="split-img" />
        </div>
      </div>
      <br />

      {/* Clay Lab Section */}
      <div className="image-section">
        <img
          src="studio2.jpeg"
          alt="Clay Lab"
          className="responsive-image"
        />
        <div className="clay">
          <h1>OUR</h1>
          <h1>CLAY LAB</h1>
          <p>THE BEST PLACE</p>
          <h3>FOR PROFESSIONALISM</h3>
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
          <source src="/ShelbyCLip.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Home;
