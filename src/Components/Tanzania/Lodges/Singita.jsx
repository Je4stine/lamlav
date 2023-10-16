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
import Lodge1 from '../../../Assets/kilindi-stone-town.jpg';

import Lodge2 from '../../../Assets/kilindi-spa-2.jpg';

import Lodge3 from '../../../Assets/kilindi-spa-2.jpg';

import Lodge4 from '../../../Assets/kilindi-spa-2.jpg';

import Lodge5 from '../../../Assets/kilindi-4.jpg';

import Chyulu from '../../../Assets/2020-10-22.jpg';

import ShowMoreText from "react-show-more-text";

import { useParams, Link } from 'react-router-dom';

import Partners from "../../Partners";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Singita2 =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Singita Mara River Tented Camp</h1>
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
                Singita Mara River Tented Camp is an eco-lodge located in the Serengeti that operates sustainably and off the grid. It offers six luxurious tents constructed from natural and recycled materials, incorporating solar power and locally sourced elements. 
                <br/><br/>The tents feature en-suite bathrooms, private decks with views of the Mara River, and a private open-air tub. 
                <br/><br/>The camp provides activities like game drives, walking safaris, and night drives, with prime views of the migration. Guests can enjoy delicious cuisine, relax in the plunge pool, and stay connected with complimentary WiFi. 
                <br/><br/>The camp focuses on minimizing environmental impact, using solar energy and rechargeable LED lamps, to provide guests with a luxurious and eco-friendly experience. 

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Singita Mara River Tented Camp</strong>
                                <li>Outdoor dining area</li>
                                <li>Snack bar</li>
                                <li>Baggage storage</li>
                                <li>Concierge</li>
                                <li>Butler service</li>
                                <li>Laundry service</li>
                                <li>Spa</li>
                                <li>24-hour security/ Electricity</li> 
                                <li>Wifi</li>
                                <li>Outdoor pool</li>
                                <li>Bar / lounge</li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>Private veranda </li>
                            <li>En-suite  bathroom </li>
                            <li>Private open-air tab</li>
                            <li>Complimentary toiletries</li>
                            <li>Hair  dryer </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Singita Mara River Tented Camp  </strong>
                        <li>Game drives </li>
                        <li>Yoga</li>
                        <li>Massage treatments </li>
                        <li>Swimming </li>
                        <li>Stargazing</li>
                        <li>Board games </li>
                    
                        <li>Wine experiences</li>


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
            <Partners/>
            <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Singita2;