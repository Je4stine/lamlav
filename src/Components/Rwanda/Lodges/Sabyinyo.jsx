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
import Lodge1 from '../../../Assets/DSC_0064-1024x682.jpg';

import Lodge2 from '../../../Assets/DSC_9862-1024x682.jpg';

import Lodge3 from '../../../Assets/DSC_9875-1024x682.jpg';

import Lodge4 from '../../../Assets/DSC_9887-1024x682.jpg';

import Lodge5 from '../../../Assets/DSC_9925-1024x682.jpg';

import Chyulu from '../../../Assets/2020-10-22.jpg';

import ShowMoreText from "react-show-more-text";

import { useParams, Link } from 'react-router-dom';


import Partners from "../../Partners";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Sabyinyo =()=>{
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
                <div className=" flex flex-col justify-center items-center mt-[100px]">
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif"> Sabyinyo Silverback Lodge</h1>
                    <img src="https://www.africanwelcomesafaris.com/wp-content/uploads/2019/10/Sabyinyo-Silverback-Lodge-2.jpg" alt="Roaring lion" className=" lg:w-[70%]"/>
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
                Sabyinyo Lodge is a luxurious accommodation nestled in the foothills of the Virunga Mountains in Rwanda. This stunning lodge offers a unique and unforgettable experience for nature lovers and adventure seekers alike. The lodge features a total of five cottages, providing an intimate and exclusive atmosphere for guests. Each cottage is beautifully designed and equipped with modern amenities, ensuring a comfortable and relaxing stay. The spacious rooms offer breathtaking views of the surrounding landscape, including the majestic volcanoes and lush greenery. The lodge also has a main lodge building, where guests can enjoy delicious meals prepared by talented chefs, as well as a cozy lounge area with a fireplace, perfect for unwinding after a day of exploration.
                <br/><br/>Guests have Sabyinyo Silverback Lodge have the incredible opportunity to trek through the dense forests and encounter mountain  gorillas  up close in their natural habitat. Other activities include guided hikes to explore the beautiful landscapes, visits to local communities to learn about the culture and traditions of the Rwandan people, and birdwatching excursions to spot various species of birds. For those seeking relaxation, the lodge provides spa treatments and massages to rejuvenate both the body and mind.
                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at  Sabyinyo Silverback Lodge</strong>
                            <li>Gift shop </li>
                            <li>Laundry service </li>
                            <li>24hr Electricity </li>
                            <li>Library </li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>Private  veranda </li>
                            <li>En-suite bathroom </li>
                            <li>Wifi</li>
                            <li>In Room massage </li>
                            <li>Hairdryers </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at  Sabyinyo Silverback Lodge  </strong>
                    <li>Gorilla trekking </li>
                    <li>Birdwatching </li>
                    <li>Hiking and Nature Walks </li>
                    <li>Conservation and Community Visits </li>


                </p>
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
                    <Slider {...settings} autoplay arrows>
                        <div>
                            <img src="https://www.andbeyond.com/wp-content/uploads/sites/5/Sabyinyo-rwanda-suite-bathroom.jpg" alt="Lodge"/>
                        </div>
                        <div>
                        <img src="https://www.andbeyond.com/wp-content/uploads/sites/5/Sabyinyo-rwanda-family-cottage-bathroom.jpg" alt="Lodge"/>
                        </div>
                        <div>
                        <img src="https://www.andbeyond.com/wp-content/uploads/sites/5/Sabyinyo-rwanda-family-cottage.jpg" alt="Lodge"/>
                        </div>
                        <div>
                        <img src="https://www.andbeyond.com/wp-content/uploads/sites/5/Sabyinyo-rwanda-guest-area.jpg" alt="Lodge"/>
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

export default Sabyinyo;