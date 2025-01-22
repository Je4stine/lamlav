import React, { useState, useEffect } from "react";
import GetInTouch from "../Contact/Contacts";

import Countries from "../Destination/Countries";
import Destination from "../Destination/Destination";

import Footer from "../Footer/Footer";
import Hero from "../Hero/Here";
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Testimonials from "../Testmonials/Testimonials";
import Why from "../Why/Why";
import Intro from "../Intro/Intro";
import Callfor from "../Contact/Callfor";
import Partners from "../Partners";
import "animate.css/animate.min.css";

import DATA from "../Testmonials/Data";

const Homepage = () => {
  const [colorChanged, setColorChanged] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChanged(true);
    } else {
      setColorChanged(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <>
      <div className=" ">
        {colorChanged ? <Navreveal /> : <Navbar />}
        <Hero />
        <Intro />
        <Why />
        <Countries />
        <Destination />
        <Callfor />
        <Testimonials testimonials={DATA} />
        {/* <TestimonialsCarousel/> */}
        <GetInTouch />
        <Partners />
        <div className=" bg-[#fff]">
          <img
            src={require("../../Assets/kanairo-black.svg").default}
            alt="Kanairo"
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
