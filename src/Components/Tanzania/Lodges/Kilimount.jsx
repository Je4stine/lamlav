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
import Lodge1 from '../../../Assets/kili_resort.jpg';

import Lodge2 from '../../../Assets/0c9762b9.jpg';

import Lodge3 from '../../../Assets/5dd9d87e.jpg';

import Lodge4 from '../../../Assets/1a26495e.jpg';

import Lodge5 from '../../../Assets/5c74bdcb.jpg';

import Chyulu from '../../../Assets/2020-10-22.jpg';

import ShowMoreText from "react-show-more-text";

import Partners from "../../Partners";

import { useParams, Link } from 'react-router-dom';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Kilimount =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Kilimanjaro  Mountain  Resort</h1>
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
                The Kilimanjaro Mountain Resort is a premier tourist destination nestled amidst the verdant banana and coffee plantations of Kyalla Village in Marangu West, located on the slopes of Mount Kilimanjaro. Positioned in close proximity to the entrance gates of Kilimanjaro National Park, it serves as the ideal starting point for climbers embarking on the journey to reach the majestic Kibo peak, also known as the roof of Africa.
                <br/><br/>This exquisite resort offers a range of luxurious amenities and facilities, including a swimming pool, a well-equipped gym center, a business center, a dedicated massage corner, and expansive tropical gardens. Guests can indulge in ultimate relaxation while enjoying the serene ambiance. The resort also boasts an exceptional bar, restaurant, and a sun deck, providing a delightful setting for unwinding and savoring delectable cuisine.
                <br/><br/>With its enchanting surroundings and top-notch amenities, the Kilimanjaro Mountain Resort invites visitors to experience a blend of tranquility and thrilling country adventures throughout the year.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Kilimanjaro  Mountain  Resort</strong>
                                <li>Outdoor  pool </li>
                                <li>Sun deck</li>
                                <li>Gym facilities </li>
                                <li>Bar & Restaurant </li>
                                <li>Spar and Massage Parlor</li>
                                <li>Laundry  service </li>
                                <li>Satelite Tv </li>
                                <li>Internet</li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>En-suite bathrooms </li>
                            <li>Air conditioning </li>
                            <li>Room service </li>
                            <li>Minibar</li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Kilimanjaro  Mountain  Resort  </strong>
                            <li>Waterfall  exploration </li>
                            <li>Mountain  climbing </li>
                            <li>General  safari </li>
                            


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

export default Kilimount;