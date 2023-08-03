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

const Kyaninga =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Kyaninga Lodge</h1>
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
                Kyaninga Lodge invites you to bask in the breathtaking surroundings, relish the opulence and grace it offers, and embark on a remarkable journey where the beauty of Africa's unexplored treasures unfolds before your eyes.
                <br/><br/> Nestled amidst the captivating scenery of Lake Kyaninga and the Rwenzori Mountains, Kyaninga Lodge is the remarkable outcome of one individual's vision and dedicated efforts spanning six years. It offers a truly unparalleled experience of Africa's natural splendor that is unmatched elsewhere.
                <br/><br/> At Kyaninga Lodge, you have the opportunity to immerse yourself in the enchanting beauty and romance of this undiscovered region, all while enjoying the utmost in luxury and refinement. The lodge features nine exquisite cottages meticulously crafted from hand-carved logs, exuding elegance and charm. Every generously-sized cottage offers the option of twin or double beds, adorned with luxurious bed linen and feather pillows. A comfortable indoor seating area leads to a private deck, where you can savor a tranquil morning tea or coffee while taking in the picturesque vistas of the lake and the majestic Rwenzori Mountains.
                <br/><br/> The en-suite bathrooms are designed to perfection, featuring marble countertop basins supported by carefully crafted Elgon olive pedestals. You'll find claw-footed freestanding baths and glass-walled showers, ensuring a lavish bathing experience. Thanks to modern solar power, you can enjoy the convenience of hot water and electrical charging points at all times.                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Kyaninga Lodge</strong>
                            <li>Laundry service</li> 
                            <li>Massage services </li>
                            <li>Wifi</li>
                            <li>Tennis court</li> 
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>Room service </li>
                            <li>Safe</li>
                            <li>Private Deck/Veranda</li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Kyaninga Lodge  </strong>
                    <li>Boat trips to Lake Kyaninga</li> 
                    <li>Nature Walks and hikes </li>
                    <li>Explore Fort Portal</li>
                    <li>Yoga & wellness. </li>
                    <li>Bird watching </li>
                    <li>Cultural visits </li>


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

export default Kyaninga;