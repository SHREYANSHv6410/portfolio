import React from "react";

function CarouselProj() {
  return (
    <section id="carouselproj">
      <div
        id="carouselExampleInterval"
        className="carousel slide shadow-lg"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src="/Counter.png"
              className="d-block w-100 rounded"
              alt="Counter"
            ></img>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="/BGColorSelector.png"
              className="d-block w-100 rounded"
              alt="BGColor"
            ></img>
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-3000" alt="..."></img>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default CarouselProj;
