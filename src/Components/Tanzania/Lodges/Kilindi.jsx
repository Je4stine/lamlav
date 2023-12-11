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

import Lodge2 from '../../../Assets/Kilindi-Twilight-Dinner.jpg';

import Lodge3 from '../../../Assets/Kilindi-Sunset-Dinner.jpg';

import Lodge4 from '../../../Assets/kilindi-spa-2.jpg';

import Lodge5 from '../../../Assets/kilindi-4.jpg';

import Chyulu from '../../../Assets/2020-10-22.jpg';

import ShowMoreText from "react-show-more-text";

import Partners from "../../Partners";

import { useParams, Link } from 'react-router-dom';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Kilindi =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Kilindi</h1>
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
                Kilindi is a remarkable and captivating resort that rests beside the crystal-clear turquoise waters of the Indian Ocean, on the northwest coast of Zanzibar.  The design of the pavilions seamlessly combines Scandinavian elements with subtle touches of Middle Eastern inspiration. 
                <br/><br/>Every Pavilion suite features wide-arched windows without glass, adorned with white wooden-slatted shutters. These windows offer stunning panoramic views of the Indian Ocean. The design also allows the refreshing ocean breeze to flow freely through the rooms, bringing along the enchanting melodies of Kilindi's vibrant bird population.
                <br/><br/>Additionally, guests have the option to dine on the open-air terrace or choose to enjoy their meals along the unspoiled white beach that stretches across the entire property. A stay at Kilindi promises to be a sensory delight, captivating your senses with its scenic beauty and captivating soundscape.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Kilindi</strong>
                                <li>Private pool.</li>
                                <li>Wi-Fi </li>
                                <li>Butler service </li>
                                <li>Laundry service </li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>Room service </li>
                            <li>In Room electronic safe </li>
                            <li>Adjoining 'rainfall' shower Pavilion</li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Kilindi  </strong>
                            <li>Deep sea fishing </li>
                            <li>Island Spice tour </li>
                            <li>Private sunset  dhow  cruise </li>
                            <li>Historical stone town tour</li>
                            <li>Blue dolphin and Snorkeling tour </li>
                            <li>Spa and Wellness </li>


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

export default Kilindi;