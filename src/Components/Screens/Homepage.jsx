import React,{ useState} from "react";
import GetInTouch from '../Contact/Contacts'
import ChatBot from "../ChatBot/ChatBot";
// import ControlledCarousel from "../Carousel/Carousel";

import Countries from "../Destination/Countries";
import Destination from "../Destination/Destination";

import Footer from "../Footer/Footer";
import Hero from "../Hero/Here";
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Testimonials from "../Testmonials/Testimonials";
import Top from "../Top/Top";
import Why from "../Why/Why";
import Intro from "../Intro/Intro";
import Callfor from "../Contact/Callfor";

const Homepage =()=>{
    const [colorChanged, setColorChanged]= useState(false);

    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
          setColorChanged(true);
        }
        else{
          setColorChanged(false);
        }
     };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <div className=" relative" >
            <Top/>
            {/* <Top/> */}
            {
                colorChanged ? <Navreveal/> : <Navbar/>
            }
            <Hero/>
            <Intro/>
            <Why/> 
            <Countries/>
            <Destination/>
            <Callfor/>
            <Testimonials/>
            <GetInTouch/>
            <ChatBot/>
            <div>
                <img src={require('../../Assets/kanairo-black.svg').default } alt="Kanairo"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Homepage;