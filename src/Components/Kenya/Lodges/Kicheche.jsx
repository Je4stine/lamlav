import React, {useState} from "react";
import Navbar from "../../Navbar/Navbar";
import Navreveal from "../../Navbar/Navreveal";
import Footer from "../../Footer/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
// import Slider from "react-slick";
import Lodge1 from '../../../Assets/lodge1.jpg';

import Lodge2 from '../../../Assets/lodge4.jpg';

import Lodge3 from '../../../Assets/lodge5.jpg';

import Chyulu from '../../../Assets/totolis1.jpg';

const Kicheche =()=>{
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div className=" bg-white">
             {
                colorChanged ? <Navreveal/> : <Navbar/>
            }
            <secttion>
                <div className=" flex flex-col justify-center items-center mt-[60px] lg:mt-[120px]">
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Ol Tukai  Lodge</h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[500px] px-10" >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Kicheche is a small, high-end tented camp that has received recognition for its eco-friendly practices. It is situated near the base of an indigenous forest and overlooks a watering hole, with Mount Kenya visible in the distance. The camp's stylish and environmentally conscious design blends seamlessly with the natural environment of the Ol Pejeta wilderness area.
                <br/><br/>  The camp is expertly managed to ensure a superior guest experience and has six exclusive  high-end tents, each creating an intimate and personalized atmosphere for guests. One of the tents is a family suite that includes two bedrooms, each with its own private bathroom. The two bedrooms are connected by a lounge area that is furnished with a sofa and a small table, making it suitable for private dining.


                <br/><br/> <strong>Amenities at Kicheche  Laikipia  Camp </strong>
                    <li>Shared pool</li>
                    <li> Wi-Fi</li>
                    
                    <br/><br/><strong>Room features </strong>
                    <li>En-suite  bathrooms </li>
                    <li>Room service / housekeeping </li>


                    <br/><br/> <strong>Activities  at Kicheche  Laikipia  Camp </strong>
                    <li>Day and night game  drives </li>
                    <li>Canoeing </li>
                    <li>Horse and Camel  rides </li>
                    <li>Guided guided bush walks</li>
                    <li>Cultural  visits </li>
                    <li> Mountain  biking </li>
                    <li>Excursions  - Chipanzee sunctuary,  Morani center, Anti- poaching  dogs visits.</li>



                </p>
                
                
            </section>
            <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Kicheche;