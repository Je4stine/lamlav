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

const Forest =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Nyungwe Forest Lodge</h1>
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
                The stunning lodge Nyungwe Forest  Lodge offers a perfect blend of comfort, style, and immersion in nature. The lodge provides a range of amenities to ensure a memorable stay, including a spa offering rejuvenating treatments, a fitness center, and a restaurant serving delicious meals prepared with locally sourced ingredients. Guests can also relax and take in the breathtaking views from the lodge's terrace or cozy up by the fireplace in the lounge area.
                <br/><br/> The rooms and suites feature elegant decor, spacious layouts, and large windows that offer panoramic views of the surrounding forest. Each accommodation comes with modern amenities such as en-suite bathrooms, luxury bedding, and private terraces where guests can relax and immerse themselves in the tranquil ambiance of the park.
                <br/><br/> Nyungwe Forest Lodge offers a variety of activities for guests to explore the natural wonders of the park: 
                <li>Guided chimpanzee trekking is a highlight, allowing visitors to track and observe these incredible primates up close. </li>
                <li>Guests can also embark on guided forest walks and hikes, birdwatching excursions to spot the park's diverse bird species, AND/OR</li>
                <li>Take part in tea plantation visits to learn about the local culture and heritage. </li>
                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Nyungwe Forest Lodge</strong>
                            <li>Fitness center </li>
                            <li>Spa</li>
                            <li>Massage services </li>
                            <li>Restaurant </li>
                            <li>Internet</li>
                            <li> Common fire  place</li>
                            <li>Laundry service </li>
                            <li>Air-conditioning </li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>In Room electronic safe </li>
                            <li>Hairdryers </li>
                            <li>Private deck/veranda </li>
                            <li>Minibar</li>
                            <li>Satellite TV </li>
                            <li>En-suite bathrooms </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Nyungwe Forest Lodge  </strong>
                        <li>Bird watching walk</li>
                        <li>Cultural area walk with lodge guide</li>
                        <li>Hiking and guided nature trails</li>
                        <li>Birdwatching excursions </li>
                        <li>Chimpanzee trekking </li>


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

export default Forest;