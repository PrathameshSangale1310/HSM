import React from 'react'

function clayModelling() {
  return (
    <div>
      {/* <img src="/cm.jpeg" alt="" height="1180px" />
      <br />
      <br />
      <img src="/cm2.jpeg" alt="" height="1180px" /> */}

<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
     <div className="carousel-item active">
       <img src="/cm.jpeg" className="d-block w-100" alt="..."/>
     </div>
     <div className="carousel-item">
       <img src="/cm2.jpeg" className="d-block w-100" alt="..."/>
     </div>
     <div className="carousel-item">
       <img src="/cm3.jpeg" className="d-block w-100" alt="..."/>
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
  )
}

export default clayModelling
