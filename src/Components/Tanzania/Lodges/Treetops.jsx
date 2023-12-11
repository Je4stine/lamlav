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
import Lodge1 from '../../../Assets/TarangireTreetops---Game-Drive.jpg';

import Lodge2 from '../../../Assets/TarangireTreetops---Lounge-and-firepit.jpg';

import Lodge3 from '../../../Assets/TarangireTreetops---Room-Exterior.jpg';

import Lodge4 from '../../../Assets/TarangireTreetops---Room-Exterior-2.jpg';

import Lodge5 from '../../../Assets/TarangireTreetops---Room-Verandah.jpg';

import Chyulu from '../../../Assets/2020-10-22.jpg';

import ShowMoreText from "react-show-more-text";

import { useParams, Link } from 'react-router-dom';

import Partners from "../../Partners";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Treetops =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Tarangire  Treetops Lodge</h1>
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
                Tarangire  Treetops Lodge is strategically positioned on the East of Tarangire  National Park, along the elephant migratory route from Tarangire to Amboseli in Kenya.The treehouses, constructed around baobab and Mopani trees, contribute to its unique charm and provides an enjoyable experience. 
                <br/><br/>Each of the 20 treehouses at Tarangire Treetops covers a spacious area of nearly 700 square feet and combines a blend of modern and traditional materials. Every treehouse offers a rejuvenating and scenic veranda, a complete bathroom with a double shower, reliable wifi connectivity, and the dedicated service of the lodge's staff. 
                <br/><br/>The main lodge is nestled harmoniously around an ancient and wise baobab tree, while the dining area provides a vantage point overlooking a watering hole frequently visited by the diverse wildlife of Tarangire. To further enhance the experience, guests can indulge in a refreshing swim in the lodge's vibrant blue swimming pool after an exciting game drive.The open-air showers are always a memorable highlight of the stay.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Treetops</strong>
                           <li>Wifi</li>
                           <li>Outdoor pool </li>
                           <li>Fitness Center </li>
                           <li>Bar / lounge</li>
                           <li>Restaurant</li>
                           <li>Laundry  service </li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>En-suite bathrooms</li>
                            <li>Bathrobes</li>
                            <li>In-room safe deposit box</li>
                            <li> Private deck</li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Treetops  </strong>
                    <li>Day and Night  game drives</li> 
                    <li>Sundowner  Cocktails </li>
                    <li>Cultural  visits </li>


                </p>
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
                    <Slider {...settings} autoplay arrows>
                        <div>
                            <img src={Lodge4} alt=" Loge"/>
                        </div>
                        <div>
                        <img src={Lodge2} alt=" Loge"/>
                        </div>
                        <div>
                        <img src={Lodge5} alt=" Loge"/>
                        </div>
                        <div>
                        <img src={Lodge3} alt=" Loge"/>
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

export default Treetops;