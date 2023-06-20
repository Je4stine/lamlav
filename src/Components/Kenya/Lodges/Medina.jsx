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
import Lodge1 from '../../../Assets/Medina-Main.png';

// import Lodge2 from '../../../Assets/Medina.png';

// import Lodge3 from '../../../Assets/backdrop.png';

// import Chyulu from '../../../Assets/aerial.png';

import Lodge2 from '../../../Assets/images (21).jpeg';

import Lodge3 from '../../../Assets/images (6).jpeg';

import Chyulu from '../../../Assets/images (9).jpeg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Medina =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Medina Palms </h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[300px] px-10" >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Medina Palms is a beautiful property situated in Turtle Bay, a serene location away from the bustling Watamu center, within a marine reserve where guests can enjoy the beach and ocean without any distractions. The property comprises of 50 suites including luxury apartments, penthouses, and villas that can accommodate up to ten people. These suites are set in lush tropical gardens and have modern designs mixed with locally crafted wooden furnishings. They feature en suite bathrooms, lounges, verandas, small kitchenettes, Wi-Fi, and satellite TV.
                <br/><br/> The luxurious Swahili-style lodging at Medina surpasses traditional hotels and resorts in terms of space and sophistication. Guests can enjoy elegant suites with garden views, penthouses with high ceilings and inner courtyards, and beach villas with exceptional and exclusive spaces. The oceanfront villas have breathtaking panoramic sea views and come with chic plunge pools on the rooftop
                <br/><br/> Guests can relax in different areas of the property such as the coffee garden, rooftop lounge, and private beach where they can enjoy meals under the stars. The property also has a fantastic spa with a relaxation terrace and spa pool, a fitness center, and a juice bar. 
                <br/><br/> For the active guests, Medina Palms offers plenty of activities to choose from including snorkeling, diving, fishing, kitesurfing, and stand-up paddleboarding. Guests can also go for a round of golf at a championship golf course, which is an hour away, or go for a safari at Tsavo National Park, which is two hours away, with arrangements made by the hotel. 
                <br/><br/> The Medina lifestyle is truly unique and unmatched anywhere else on the Indian Ocean coast.


                <br/><br/> <strong>Amenities at Medina Palms  </strong>
                <li>Spa</li>
                <li>Shared pool</li>
                <li>Fitness  centre </li>
                <li> A juice bar</li>
                <li>Private beach</li>
                <li>Ocean view</li>
                <li>Wi-Fi</li>


                <br/><br/>Room features 
                <li>En-suite  bathroom </li>
                <li>Room service </li>
                <li>Air conditioned </li>
                <li>Rooftop  terrace </li>




                    <br/><br/> <strong>Activities  at Medina Palms   </strong>

                    <li>Visits  to  Watamu  turtle  sanctuary </li>
                    <li>Watersports </li>
                    <li>Mountain  biking </li>
                    <li>Visit the BioKen Snake Farm</li>
                    <li>Dolphin watching</li>
                    <li>Humpback whale watching (seasonal)</li>
                    <li>Dine in a mangrove restaurant</li>
                    <li>Lunch at Rock on Sea Restaurant</li>


                </p>
                
                <div className="relative mt-20 z-[0] lg:mx-[100px]">
                <Slider {...settings} autoplay arrows>
                    <div>
                        <img src={Lodge2}/>
                    </div>
                    <div>
                    <img src={Lodge3}/>
                    </div>
                    <div>
                    <img src={Chyulu}/>
                    </div>
                    
                    </Slider>
                </div>
            </section>
            <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Medina;