import React from 'react';

function ClayModelling() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="https://h30434.www3.hp.com/t5/image/serverpage/image-id/129307i0CDAF31B6EFA48B9/image-size/large?v=mpbl-1&px=-1"
              className="d-block w-100"
              alt="..."
            />
            <div className="prototypingdef">
              <h1>THIS PROGRAMME TRANSLATES A</h1>
              <h1>DESIGNER'S VISION AND CONCEPT</h1>
              <h1>INTO A TANGIBLE REALITY PHYSICAL 3D</h1>
              {/* <h1>PHYSICAL 3D</h1> */}
            </div>
          </div>

          <div className="carousel-item">
            <img src="/cm.jpeg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/cm2.jpeg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/cm3.jpeg" className="d-block w-100" alt="..." />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default ClayModelling;
