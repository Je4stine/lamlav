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
import Lodge1 from '../../../Assets/great-plains-conservation-ol-donyo-lodge-horseback-safari-gallery-4-600x400.jpg';

import Lodge2 from '../../../Assets/download (6).jpeg';

import Lodge3 from '../../../Assets/download (7).jpeg';

import Lodge4 from '../../../Assets/download (8).jpeg';

import Lodge5 from '../../../Assets/download (9).jpeg';

import Chyulu from '../../../Assets/download (10).jpeg';

import Lodge6 from '../../../Assets/download (11).jpeg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowMoreText from "react-show-more-text";


const Oldonyo =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Ol Donyo Lodge </h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[300px] px-10" >
            <ShowMoreText
                    /* Default options */
                    lines={7}
                    more='Show more'
                    less='Show less'
                    anchorClass='pt-[50px]'
                    className='font-[SourceSerifPro-Regular] pt-[50px] text-xl'
                    // onClick={this.executeOnClick}
                    expanded={false}
                    truncatedEndingComponent={"..... "}
                >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Ol Donyo Lodge is an exceptionally luxurious safari lodge, situated in the Chyulu Hills of Kenya. It covers more than 111,000 hectares of private land and nestled between Tsavo and Amboseli National Parks. The lodge's location, which was formed from ancient lava rock ejected from Kilimanjaro hundreds of thousands of years ago, provides a timeless atmosphere that captivates all who visit. .
                <br/><br/>Ol Donyo Lodge offers unique and individually designed suites and lodges. Guests can enjoy lavish accommodations with ample personal space, and some lodges can even serve as a private retreat with a personal pool, vehicle, guide, and chef for in-villa dining. Additionally, the lodge offers an exclusive experience with Star Beds, which are custom-made beds placed on raised wooden platforms with thatched roofs. 
                <br/><br/>These beds can be rolled out onto the rooftop, providing guests with complete privacy to enjoy a night under the stars, with only the vast equatorial night sky as their ceiling.
                </p>
                </ShowMoreText>


                < p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" lg:flex justify-between">
                        <div>
                            <br/><br/> <strong>Amenities at Ol Donyo  Lodge </strong>
                            <li>Chef Services</li>
                            <li> 24hr Security</li>
                            <li> Wi-Fi</li>
                            <li>Laundry services</li>
                        </div>
                        <div>
                                <br/><br/> <strong>Room features </strong>
                            <li>En-suite bathrooms</li>
                            <li>Private deck/veranda</li>
                            <li>Private pool</li>
                            <li>In-room massage</li>
                        </div>
                    </div>

                    <br/><br/> <strong>Activities  at Ol Donyo  Lodge </strong>

                    <li>Horseback safaris</li>
                    <li>Mountain bike safaris</li>
                    <li>Guided walking safaris </li>
                    <li>Open vehicle game drives</li>



                </p>
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
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
                    <div>
                    <img src={Lodge4}/>
                    </div>
                    <div>
                    <img src={Lodge5}/>
                    </div>
                    <div>
                    <img src={Lodge6}/>
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

export default Oldonyo;