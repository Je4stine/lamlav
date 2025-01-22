import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { AiTwotoneStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

import DATA from "./Data";

import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="bg-[#f9f9f9] py-10">
      <h1 className=" my-10 text-center font-bold text-3xl text-orange-700">
        What Our Clients Say
      </h1>

      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        showIndicators={false}
      >
        {DATA.map((item, index) => {
          return (
            <div key={item.id}>
              <div className="myCarousel">
                <h3 className=" text-orange-700">{item.name}</h3>
                {/* <h4>Designer</h4> */}
                <p className=" font-bold">{item.review}</p>
                <div className=" flex mt-5 m-auto items-center justify-center text-orange-700">
                  <FaStar size={20} />
                  <FaStar size={20} />
                  <FaStar size={20} />
                  <FaStar size={20} />
                  <FaStar size={20} />
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Testimonials;
