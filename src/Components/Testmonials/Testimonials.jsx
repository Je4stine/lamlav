import React, {useState, useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {AiTwotoneStar} from 'react-icons/ai'

import DATA from "./Data";

import './Testimonials.css'

import Profile from "../../Assets/profile.jpg"

const Testimonials =()=> {

    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        showIndicators={false}
      >
        

        {
          DATA.map((item, index)=>{
            return (
              <div key={item.id}>
                  <div className="myCarousel">
                    <h3>{item.name}</h3>
                    {/* <h4>Designer</h4> */}
                    <p>
                     {item.review}
                    </p>
                    <div className=" flex mt-5 m-auto items-center justify-center">
                      <AiTwotoneStar size={20}/>
                      <AiTwotoneStar size={20}/>
                      <AiTwotoneStar size={20}/>
                      <AiTwotoneStar size={20}/>
                      <AiTwotoneStar size={20}/>
                    </div>
                  </div>
              </div>
            )
          })
        }
      
      </Carousel>
    );
  
}

export default Testimonials