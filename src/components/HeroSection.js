import React, { Component } from "react";
import Slider from "react-slick";


export default function HeroSection(){

  const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3500,
      cssEase: "linear",

  };

    return(
        <div className="container">
          <div className="w-100 mt-5 d-flex align-items-center justify-content-center text-center">
          <h1 className="fw-bold text-hero-font-size">Creative Agency, Corporate And Portfolio WordPress Theme</h1>
          </div>
          <div className="d-flex gap-5 justify-content-center mt-5 ">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <span className="hero-text-color fw-bold">
                  Demo Website(More Coming)
                </span>
                <span className="text-primary-color fw-bold text-font-size">
                  10+
                </span>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <span className="hero-text-color fw-bold">
                Inner Page
                </span>
                <span className="text-primary-color fw-bold text-font-size">
                  35+
                </span>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <span className="hero-text-color fw-bold">
                  Elements
                </span>
                <span className="text-primary-color fw-bold text-font-size">
                  30+
                </span>
              </div>
          </div>
        </div>
    );
}