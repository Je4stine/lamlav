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
import Lodge1 from '../../../Assets/lodge4.jpg';

import Lodge2 from '../../../Assets/001-reception-entrance.jpg';

import Lodge3 from '../../../Assets/01-exterior-view-with-pool-and-plains.jpg';

import Lodge4 from '../../../Assets/083-lobby-area-balcony.jpg';

import Lodge5 from '../../../Assets/dining-3.jpg';

import Lodge6 from '../../../Assets/lunch-spread.jpg';

import Chyulu from '../../../Assets/totolis1.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowMoreText from "react-show-more-text";

const Mara =()=>{
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
                <div className=" flex flex-col justify-center items-center mt-[100px]">
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Mara Serena Safari Lodge </h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[300px] px-10" >
            <ShowMoreText
                    /* Default options */
                    lines={5}
                    more='READ MORE'
                    less='READ LESS'
                    anchorClass='font-[SourceSerifPro-Regular] pt-[50px] text-red-600'
                    className='font-[SourceSerifPro-Regular] pt-[50px] text-xl'
                    // onClick={this.executeOnClick}
                    expanded={false}
                    truncatedEndingComponent={"..... "}
                >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Mara Serena Safari Lodge offers an unforgettable safari holiday destination with breathtaking landscapes of the Masai Mara National Reserve and stunning views of the Mara River. The lodge's design is inspired by the traditional Maasai Manyatta, and its 74 guest rooms, including a suite, reflect the local Maasai heritage and natural surroundings. 
                <br/><br/>The rooms are arranged to provide sweeping views of the river and savannah and feature Maasai-inspired design patterns, King or twin beds, all-encompassing mosquito-curtaining, and marble bathrooms with walk-in showers. The rooms also include modern amenities such as complimentary internet and satellite TV, as well as personalized touches like ceiling fans to enhance the guest experience. 
                </p>
                </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Mara Serena Safari Lodge </strong>
                            <li>Wireless  Internet</li> 
                            <li>Satellite  TV</li>
                            <li>Private pool </li>
                            <li> Bar & Restaurant </li>
                            <li>Gym & Spa</li>
                            <li>Gift Shop</li>
                            <li>Conference  center</li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>Room service</li>
                            <li>Private balcony </li>
                            <li>En-suite bathroom </li>
                            <li>Dedicated  room steward</li>
                            <li>Laundry  service </li>
                            <li>Ceiling fans</li>
                        </div>
                        <div>
                            <br/><br/> <strong>Activities  at Mara Serena Safari Lodge  </strong>

                            <li> Ololoolo  escarpment hike Expeditions</li>
                            <li>Weddings Honeymoon  and Special  occasions </li>
                            <li>Mara Sundowner </li>
                            <li>Bush barbeque  dinner </li>
                            <li>Night game  drives </li>
                            <li>Hot-air balloon  safari </li>
                            <li>Pool barbeque  dinner </li>
                            <li>Star lit dinner  Cultural  visits </li>
                            <li>Hippo pool breakfast </li>
                        </div>
                    </div>
               
                    

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

export default Mara;