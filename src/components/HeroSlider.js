import React, { Component } from "react";
import Slider from "react-slick";


export default function HeroSlider(){

  const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "10px",
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3500,
      cssEase: "linear",

  };

    return(
        <div>
          <div className="mt-5 w-75 mx-auto p-4 gap-4">
          <Slider {...settings}>
          <div className="bg-secondary rounded-4 ms-5 p-4 ">
          <img className="d-flex rounded-4 img-thumbnail justify-content-center align-content-center w-100" 
          src="https://new.axilthemes.com/themes/splash/abstrak/assets/media/others/demo-slide-4.png"/>
          </div>
          <div className="ms-5 p-4">
          <img className="d-flex rounded-4  justify-content-center align-content-center w-100"
           src="https://new.axilthemes.com/themes/splash/abstrak/assets/media/others/demo-slide-5.png"/>
          </div>
          <div className="ms-5 p-4">
          <img className="d-flex rounded-4  justify-content-center align-content-center w-100"
           src="https://new.axilthemes.com/themes/splash/abstrak/assets/media/others/demo-slide-1.png"/>
          </div>
          <div className="ms-5 p-4">
          <img className="d-flex rounded-4  justify-content-center align-content-center w-100"
           src="https://new.axilthemes.com/themes/splash/abstrak/assets/media/others/demo-slide-3.png"/>
          </div>
          <div className="ms-5 p-4">
          <img className="d-flex rounded-4  justify-content-center align-content-center w-100"
           src="https://new.axilthemes.com/themes/splash/abstrak/assets/media/others/demo-slide-2.png"/>
          </div>
        </Slider>
        </div>
          </div> 
    );
}