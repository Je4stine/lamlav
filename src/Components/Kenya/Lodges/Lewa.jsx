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
import Lodge1 from '../../../Assets/64888bd65340c231b3581874_lewa-wilderness.jpg';

import Lodge2 from '../../../Assets/6268077461ce941da705a5af_Lewa Wilderness8.jpeg';

import Lodge3 from '../../../Assets/62680784f81a327310ac0b08_Lewa Wilderness1.jpeg';

import Lodge4 from '../../../Assets/62680784f81a327310ac0b08_Lewa Wilderness1.jpeg';

import Lodge5 from '../../../Assets/626807da704b340b24bdce62_Lewa Wilderness23.jpeg';

import Lodge6 from '../../../Assets/626807fa6d041c82742c266d_Lewa Wilderness11.jpeg';

import Chyulu from '../../../Assets/Lewa-Safari-Camp---Family-Tent-2.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowMoreText from "react-show-more-text";

const Lewa =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Lewa Safari  Camp. </h1>
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
                Lewa Safari camp provides a comfortable and authentic experience for its guests with spacious tented rooms that have private balconies and luxurious bathrooms. The camp also features a cozy lounge area with a log fireplace, perfect for unwinding after a day exploring the 65,000-acre private reserve. Visitors of the exclusive retreat will have privileged access to this protected wilderness.
                <br/><br/> The Camp has 11 luxurious safari tents, each with its own private bathroom. The tents can be arranged as either double or twin rooms, with three of them capable of accommodating three people, but only if they are under 16 years old. The tents are covered by thatched roofs and include a main bedroom, a private bathroom, and a large deck area. Additionally, there are 2 family suites available, each consisting of two safari tents (one with a double bed and one with twin beds) connected by a shared veranda.
                </p>
                </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                <br/><br/> <strong>Amenities at Lewa Safari  Camp </strong>
                    <li>Outdoor pool</li>
                    <li> Massage services</li>
                    <li> Wi-Fi</li>

                    <br/><br/> <strong>Room features </strong>
                        <li>Private terrace </li>
                        <li>Laundry service</li>
                        <li>Daily housekeeping</li>
                        <li>Room service</li>
                        <li>Private bathroom</li>


                    <br/><br/> <strong>Activities  at Tortilis  Camp </strong>

                            <li>Game drives</li>
                            <li>Guided walks</li>
                            <li> Horse and Camel Riding</li>
                            <li>Bush breakfast  and Sundowners </li>
                            <li>Cultural  and Conservancy  visits</li>
                            <li>Ngare Ndare forest visit</li>
                            <li>Honeymoon  and Weddings </li>



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
                    {/* <div>
                    <img src={Lodge5}/>
                    </div> */}
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

export default Lewa;