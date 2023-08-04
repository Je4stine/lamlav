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
import Lodge1 from '../../../Assets/Almanara-2018-15.jpg';

import Lodge2 from '../../../Assets/Almanara1.jpg';

import Lodge3 from '../../../Assets/Almanara2.jpg';

import Lodge4 from '../../../Assets/Almanara3.jpg';

import Lodge5 from '../../../Assets/Almanara4.jpg';

import Chyulu from '../../../Assets/2020-10-22.jpg';

import ShowMoreText from "react-show-more-text";

import { useParams, Link } from 'react-router-dom';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Trackers =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Trackers Safari Lodge</h1>
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
                Trackers Safari Lodge is situated in the Buhoma Sector of Bwindi Impenetrable National Park, which is renowned for its remarkable biodiversity. 
                <br/><br/>The Lodge offers a variety of accommodations, including seven double rooms, two family cottages, and four twin cottages. All of these lodging options are constructed with logs and feature breathtaking balconies that provide magnificent views of the Bwindi Impenetrable Forest and its surroundings. The cottages are designed to be spacious and luxurious, equipped with king-size beds featuring orthopedic mattresses and modern bathrooms. Guests can enjoy the elevated bar and dining area, which offers panoramic vistas of the entire Bwindi Forest and beyond.

                <br/><br/>In addition to the comfortable accommodations, the Trackers Safari Lodge boasts a range of facilities for guests' convenience and relaxation. These include a health club complete with a sauna, steam bath, gym, massage services, and a swimming pool. The lodge also features beautiful lawns and a cozy fireplace with an outdoor bar, where guests can be entertained by live performances from a one-man guitar player and traditional dancers. Internet access is available 24 hours a day in all rooms, and there is a craft shop located at the front office for those looking to purchase souvenirs.

                <br/><br/>There are a variety of activities to make guests' stay memorable. These activities include rare mountain gorilla tracking, forest trails, excursions to the Batwa Pygmy Village, birdwatching safaris, honeymoon packages, golf games on an 18-hole golf course, tracking of climbing lions, and game hunting in Kyambura or Lake Mburo National Park. 
                <br/><br/>With its stunning surroundings, comfortable accommodations, and diverse range of activities, the Lodge provides a unique and memorable experience for its guests.
                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Trackers Safari Lodge</strong>
                                <li>Health Club </li>
                                <li>Wifi</li>
                                <li>Laundry service</li> 
                                <li>Massage parlor </li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>Private deck/veranda </li>
                            <li>Hairdryers </li>
                            <li>En-suite bathroom </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Trackers Safari Lodge  </strong>
                   <li>Golfing in Kihihi</li>
                   <li>Birdwatching tours</li>
                   <li>Shoebill treks </li>
                   <li>Primate tracking </li>
                   <li>Nature walks from Buhoma</li>
                   <li>Rushura Hill walk in Bwindi </li>
                   <li>The habinyanja trail</li>
                   <li>Batwa Pygmy Experience </li>


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

export default Trackers;