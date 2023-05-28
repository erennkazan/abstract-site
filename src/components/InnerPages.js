import React, { Component } from "react";
import Slider from "react-slick";

export default function InnerPages(){

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };

    return(
        <div>
          <div className="container mt-5">
            <p className="text-inner-color fs-4">
              Ready To Use
            </p>
            <h2 className="text-demo-font-size w-50">Elegant And Impressive Inner Pages</h2>
          </div>
          <div className="mt-5">
        <Slider {...settings}>
          <div className="w-50">
            <img src="https://new.axilthemes.com/themes/splash/abstrak/assets/media/others/demo-slide-4.png" />
          </div>
          <div>
          <img src="https://new.axilthemes.com/themes/splash/abstrak/assets/media/others/demo-slide-4.png" />
          </div>
          <div>
          <img src="https://new.axilthemes.com/themes/splash/abstrak/assets/media/others/demo-slide-4.png" />
          </div>
          <div>
          <img src="https://new.axilthemes.com/themes/splash/abstrak/assets/media/others/demo-slide-4.png" />
          </div>
          <div>
          <img src="https://new.axilthemes.com/themes/splash/abstrak/assets/media/others/demo-slide-4.png" />
          </div>
          <div>
          <img src="https://new.axilthemes.com/themes/splash/abstrak/assets/media/others/demo-slide-4.png" />
          </div>
        </Slider>
      </div>
        </div>
    )
}