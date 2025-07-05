import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavBar from "./NavBar";
import Img2 from "../assets/Sentimental2.jpg";
import Img3 from "../assets/sentimental3.jpg";
import Img4 from "../assets/img4.jpg";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 cursor-pointer z-10 hover:bg-opacity-75"
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 cursor-pointer z-10 hover:bg-opacity-75"
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
}

function Banner() {
  const images = [Img2, Img3, Img4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
          padding: 0,
          zIndex: 20,
          lineHeight: 0,
        }}
      >
        <ul className="flex space-x-2 m-0 p-0">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div
        className="w-2.5 h-2.5 bg-white rounded-full opacity-75 hover:opacity-100"
        style={{ transition: "opacity 0.3s" }}
      />
    ),
  };

  return (
    <>
      {/* <NavBar /> */}
      <div className="relative leading-none m-0 p-0 overflow-hidden">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div
              key={index}
              className="relative m-0 p-0"
              style={{ lineHeight: 0 }}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-[30vh] sm:h-[40vh] md:h-[40vh] lg:h-[55vh] object-cover block"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Banner;
