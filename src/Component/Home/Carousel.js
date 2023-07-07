import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <>
      <div className="carouselBlock" id="carousel-block">
        <div id="slide-img" className="carousel slide" data-bs-ride="carousel">
          {/* Indicators/dots */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#slide-img"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#slide-img"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#slide-img"
              data-bs-slide-to="2"
            ></button>
            <button
              type="button"
              data-bs-target="#slide-img"
              data-bs-slide-to="3"
            ></button>
          </div>

          {/* The slideshow/carousel  */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://i.ibb.co/rcMHMvS/slide-img1.png"
                alt="Sliding Image"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.ibb.co/Cm8Vtjw/slide-img2.png"
                alt="Sliding Image"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.ibb.co/LSMd53j/slide-img3.png"
                alt="Sliding Image"
              />
            </div>
            <div className="carousel-item">
              <img src="https://i.ibb.co/DkFXQ7j/slide-img4.png" />
            </div>
          </div>

          {/* Left and right controls/icons */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#slide-img"
            data-bs-slide="prev"
          >
            <i className="fa-solid fa-angle-left prevIcon"></i>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#slide-img"
            data-bs-slide="next"
          >
            <i className="fa-solid fa-angle-right nextIcon"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
