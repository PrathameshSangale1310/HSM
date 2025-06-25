import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
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

      <div className="image-section">
        <img
          src="studio2.jpeg"
          alt="Super Car"
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
      <div className="image-section">
        <img
          src="Duccati.jpeg"
          alt="Super Car"
          className="responsive-image"
        />
        <div className="bike">
          <h1>OUR HAND MADE</h1>
          <h1>MODELS</h1>
          <h1>OUR PRIDE</h1>
        </div>
      </div>

      <div className="video-section">
        <video
          className="homepage-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/ShelbyCLip.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    // <div id="carouselExample" className="carousel slide">
    // <div className="carousel-inner">
    //   <div className="carousel-item active">
    //     <img src="studio.jpeg" className="d-block w-100" alt="..."/>
    //   </div>
    //   <div className="carousel-item">
    //     <img src="studio2.jpeg" className="d-block w-100" alt="..."/>
    //   </div>
    //   <div className="carousel-item">
    //     <img src="Duccati.jpeg" className="d-block w-100" alt="..."/>
    //   </div>
    // </div>
    // <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    //   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //   <span className="visually-hidden">Previous</span>
    // </button>
    // <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    //   <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //   <span className="visually-hidden">Next</span>
    // </button>
    // </div>
  );
}

export default Home;
