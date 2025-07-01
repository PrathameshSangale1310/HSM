import React, { useEffect } from 'react';
import './clayModelling.css';

function ClayModelling() {
  useEffect(() => {
    const carouselEl = document.querySelector('#carouselExample');
    if (carouselEl) {
      const carousel = window.bootstrap.Carousel.getInstance(carouselEl);
      if (!carousel) {
        new window.bootstrap.Carousel(carouselEl, {
          interval: 5000,
          ride: 'carousel',
          pause: false,
          wrap: true
        });
      }
    }
  }, []);

  return (
    <div>
      <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000" data-bs-pause="false">
        <div className="carousel-inner">
          <div className="carousel-item active claymod">
            <img
              src="https://h30434.www3.hp.com/t5/image/serverpage/image-id/129307i0CDAF31B6EFA48B9/image-size/large?v=mpbl-1&px=-1"
              className="d-block w-100"
              alt="Clay Modelling 1"
            />
            <div className="prototypingdef">
              <h1>THIS PROGRAMME TRANSLATES A</h1>
              <h1>DESIGNER'S VISION AND CONCEPT</h1>
              <h1>INTO A TANGIBLE REALITY PHYSICAL 3D</h1>
            </div>
          </div>

          <div className="carousel-item">
            <img src="/cm.jpeg" className="d-block w-100" alt="Clay Modelling 2" />
          </div>
          <div className="carousel-item">
            <img src="/cm2.jpeg" className="d-block w-100" alt="Clay Modelling 3" />
          </div>
          <div className="carousel-item">
            <img src="/cm3.jpeg" className="d-block w-100" alt="Clay Modelling 4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClayModelling;
