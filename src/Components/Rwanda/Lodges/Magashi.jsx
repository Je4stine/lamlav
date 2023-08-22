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
import Lodge1 from '../../../Assets/58cd67dc3d934a749dfed2511a403408.jpg';

import Lodge2 from '../../../Assets/cropmagashi_05-19_-100e-2000x1024.jpg';

import Lodge3 from '../../../Assets/crop©-Morgan-Trimble-2-2000x1024.jpg';

import Lodge4 from '../../../Assets/cp1.jpg';

import Lodge5 from '../../../Assets/cp2.jpg';

import Chyulu from '../../../Assets/2020-10-22.jpg';

import ShowMoreText from "react-show-more-text";

import { useParams, Link } from 'react-router-dom';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Magashi =()=>{
    const [colorChanged, setColorChanged]= useState(false);
    // const { campId} = useParams();
    // const item = LODGES.find((item) => item.campId1  === campId);

    
    
  
    // if (!item) {
    //   return <div>Item not found</div>;
    // }



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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Magashi Camp</h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[300px] px-10" >
            <ShowMoreText
                    /* Default options */
                    lines={4}
                    more='READ MORE'
                    less='READ LESS'
                    anchorClass='font-[SourceSerifPro-Regular] pt-[50px] text-red-600'
                    className='font-[SourceSerifPro-Regular] pt-[50px] text-xl'
                    // onClick={this.executeOnClick}
                    expanded={false}
                    truncatedEndingComponent={"..... "}
                >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Magashi Camp is an exclusive and eco-friendly luxury lodge located in a private concession within Akagera National Park. The camp offers a truly immersive and upscale accommodation experience amidst the park's stunning natural surroundings. Guests are treated to spacious and elegantly appointed tents, featuring comfortable beds, en-suite bathrooms with hot showers, and private verandas that offer panoramic views of Lake Rwanyakazinga. The camp's main area includes a dining area, lounge, and a refreshing swimming pool, where guests can relax and unwind. 
                <br/><br/>Magashi Camp provides a range of exciting activities for guests to enjoy, including guided game drives, where they can spot a variety of wildlife, including elephants, lions, and zebras. Boat safaris on Lake Rwanyakazinga offer a unique perspective to observe hippos, crocodiles, and an array of water birds. Additionally, guided walking safaris allow guests to explore the park on foot, accompanied by experienced rangers who provide insights into the park's ecosystem and wildlife. 
                <br/><br/>With its luxurious accommodations and diverse activities, Magashi Camp offers an unforgettable experience, combining luxury, adventure, and conservation in the heart of Akagera National Park.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Magashi Camp</strong>
                                <li>Infinity pool </li>
                                <li>Wi-Fi </li>
                                <li> Bar</li>
                                <li>Baggage  storage </li>
                                                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                                <li>En-suite bathroom </li>
                                <li>Safe</li>
                                <li>Writing desk </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Magashi Camp  </strong>
                            <li>Game drives</li> 
                            <li>Boating </li>
                            <li>Birding </li>
                            <li>Catch-and-release fishing</li>


                </p>
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
                    <Slider {...settings} autoplay arrows>
                        <div>
                            <img src={Lodge4}/>
                        </div>
                        <div>
                        <img src={Lodge2}/>
                        </div>
                        <div>
                        <img src={Lodge5}/>
                        </div>
                        <div>
                        <img src={Lodge3}/>
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

export default Magashi;