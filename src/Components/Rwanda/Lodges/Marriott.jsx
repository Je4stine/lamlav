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

const Marriott =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif"> Kigali Marriott Hotel </h1>
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
                The Kigali Marriott Hotel is a luxurious 5-star hotel located in the heart of Rwanda's capital, offering a remarkable stay with its impeccable amenities and exceptional services. The hotel boasts spacious and modern accommodations with a range of deluxe amenities featuring: stylishly  designed  rooms and lavish suites adorned with floor-to-ceiling windows, plush pillow-top bedding, and spacious bathrooms, flat-screen TVs, ergonomic workspaces, and a  complimentary Wi-Fi. 
                <br/><br/> At Kigali  Marriott Hotel,  you will  certainly Indulge in  delightful dining experiences at the hotel's popular restaurants, offering a variety of culinary options. You will also get time  to unwind and relax by taking a refreshing dip in the outdoor pool or treat yourself to a soothing massage at the spa facility. For fitness enthusiasts, a well-equipped fitness center is available to maintain your workout routine. Additionally, a dedicated concierge is always ready to assist you in planning exciting excursions to witness the magnificent Big Five, experience the famous canopy walks, or visit the home of the renowned mountain gorillas.
                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at  Kigali Marriott Hotel </strong>
                                <li>Laundry service </li>
                                <li>Spa</li>
                                <li> Fitness center </li>
                                <li>Gift shop</li>
                                <li>Restaurant </li>
                                <li>Wifi</li>
                                <li>Outdoor pool </li>
                                                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                                <li>Air conditioning </li>
                                <li>Private veranda </li>
                                <li>En-suite bathroom </li>
                                <li>In Room safe</li>
                                <li>Minibar </li>
                                <li>Room service </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at  Kigali Marriott Hotel   </strong>
                            <li>Spa and Wellness </li>
                            <li>Local sightseeing </li>
                            <li>Culinary delights</li>


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

export default Marriott;