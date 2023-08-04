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

const KigaliSerena =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif"> Kigali Serena Hotel</h1>
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
                Guests can expect exceptional service and an extraordinary experience at the Kigali Serena Hotel, as it consistently goes above and beyond to surpass expectations. With its distinctive sense of place, beautifully landscaped gardens, and exquisite health spa and swimming pool, this hotel sets the stage for an unparalleled stay in Rwanda.
                <br/><br/> This hotel seamlessly blends Rwandan heritage, art, and culture with modern 5-star luxury across its 148 elegant rooms and suites. Each room is equipped with either double or twin beds, a telephone, a television, air-conditioning, a minibar, tea and coffee making facilities, and a private bathroom with a bathtub and shower. Guests can therefore enjoy a wider range of leisure amenities during their stay: They can opt to unwind amidst the serene atmosphere of the beautifully landscaped pool area or indulge in rejuvenating spa treatments such as Mayan-inspired hot stone massages or nature-based body wraps at the Maisha Mind Body & Spirit Spa.
                <br/><br/> Additionally, the hotel's restaurants offer a delightful culinary journey, featuring expertly crafted Rwandese delicacies as well as enticing flavors from around the world.
                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at  Kigali Serena Hotel</strong>
                                <li>Outdoor pool </li>
                                <li>Spa</li>
                                <li>Babysitting </li>
                                <li>Wifi</li>
                                <li>Laundry service </li>
                                <li>Fitness center </li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                                <li>Private deck/veranda </li>
                                <li>In Room safe </li>
                                <li>En-suite bathrooms </li>
                                <li>Room service </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at  Kigali Serena Hotel  </strong>
                            <li>Swimming </li>
                            <li>Spa treatments </li>
                            <li>Garden strolls</li>
                            <li>Culinary Journey</li>
                            <li>Business and Social Events</li>


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

export default KigaliSerena;