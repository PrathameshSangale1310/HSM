import React from "react";

function Prototyping() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
     <div className="carousel-item active">
       <img src="/pt.jpeg" className="d-block w-100" alt="..."/>
     </div>
     <div className="carousel-item">
       <img src="/pt1.jpeg" className="d-block w-100" alt="..."/>
     </div>
     <div className="carousel-item">
       <img src="/pt2.jpeg" className="d-block w-100" alt="..."/>
     </div>
     <div className="carousel-item">
       <img src="/pt3.jpeg" className="d-block w-100" alt="..."/>
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

export default Prototyping;
