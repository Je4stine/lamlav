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

const Sands =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">The Sands at Nomad  </h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[500px] px-10" >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Located on one of the most beautiful beaches in Africa, The Sands at Nomad provides a hassle-free beach vacation experience with exceptional service on Kenya's southern coast.The accommodation at this resort consists of 30 lavish rooms and suites as well as seven exclusive cottages, each with a distinct style and decorated with traditional Swahili carved furniture. All the rooms are equipped with air conditioning, entertainment systems, private bars, and certain rooms have the added benefit of a private Jacuzzi and panoramic  terraces.
                <br/><br/>This lavish boutique resort has won awards and is an excellent choice for anyone seeking to explore the stunning Diani Beach. Guests can savor top-notch dining, choose from an extensive collection of new and old world wines from the owner's wine cellar, go scuba diving on pristine reefs with Kenya's top PADI dive center, or simply relax and enjoy the warm hospitality for which the south coast of Kenya is known. The resort is committed to sustainable practices, making it a leader in Kenya in its efforts to conserve, safeguard, and educate about the precious natural environment of the country's southern coast. It's an ideal place to escape from the bustle of city life and a perfect end to a Kenyan safari, completing the ultimate African holiday.


                <br/><br/> <strong>Amenities at The Sands at Nomad </strong>
                <li>Bar and restaurant </li>
                <li>Swimming  pool </li>
                <li>Wi-Fi</li>
                <li>Spa services </li>
                <li>Fitness  & Yoga</li>


                <br/><br/>Room features 
                <li>Air conditioning </li>
                <li>Private  Jacuzzi </li>
                <li>Panoramic  terrace</li>
                <li>Private bar</li>
                <li>En-suite  bathroom </li>




                    <br/><br/> <strong>Activities  at The Sands at Nomad   </strong>

                    <li>Boat  trips</li>
                    <li>Big Game fishing </li>
                    <li>Visit Chale Island </li>
                    <li>Tsavo  Safaris </li>
                    <li>Dive with Turtles</li>
                    <li> Dhow rides</li>
                    <li>Full moon dinner</li>
                    <li>Watersports </li>

                </p>
                
                
            </section>
            <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Sands;