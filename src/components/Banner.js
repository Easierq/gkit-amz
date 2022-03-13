import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative mt-[90px]">
      {/* <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" /> */}
      <img className="flex w-[899px] md:hidden" src="/im/free.jpg" alt="" />
      <Carousel
        className="hidden md:flex"
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/im/one.jpg" />
        </div>
        <div>
          <img loading="lazy" src="/im/two.jpg" />
        </div>
        <div>
          <img loading="lazy" src="/im/three.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
