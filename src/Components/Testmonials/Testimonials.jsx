import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Testimonials.css';

import Profile from "../../Assets/profile.jpg"

const Testimonials =()=> {

    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={Profile} alt="Profile 1" />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              Best tour company in the region, they deliver just as they had promised. 
              I fully recommend them, expecially for your honeymoons
            </p>
          </div>
        </div>

        <div>
          <img src={Profile} alt="Profile 1"/>
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
            Best tour company in the region, they deliver just as they had promised. 
              I fully recommend them, expecially for your honeymoons
            </p>
          </div>
        </div>

        <div>
          <img src={Profile} alt="Profile 1"/>
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
            Best tour company in the region, they deliver just as they had promised. 
              I fully recommend them, expecially for your honeymoons
            </p>
          </div>
        </div>
      </Carousel>
    );
  
}

export default Testimonials