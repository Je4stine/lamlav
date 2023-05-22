import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Footer from "../Footer/Footer";
import AmboseliN from '../../Assets/Natpa.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
// import Slider from "react-slick";
import Lodge1 from '../../Assets/lodge1.jpg';

import Lodge2 from '../../Assets/lodge4.jpg';

import Lodge3 from '../../Assets/lodge5.jpg';

import Game1 from '../../Assets/game.jpg';


const DestMaasai =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">The Massai Mara National Reserve</h1>
                    <img src={Game1} alt="The Maasai Mara" className=" lg:m-auto lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[500px] px-10" >
                <p className=" font-[SourceSerifPro-Regliar] pt-[50px] text-xl">
                The Masai Mara National Reserve is a highly-regarded safari destination in Africa known for its vast open plains and diverse wildlife, including elephants, buffalo, zebra, giraffe, hyenas, and the famous big cats like lions, leopards, and cheetahs. The Maasai Mara shares a border with the Serengeti  National Park  in Tanzania,  and the wildlife  move freely between  the  two.Every year from August to November, it serves as a resting place for large herds of wildebeest during their perilous 2,900-kilometer (1,800-mile) migration in search of water and food. Widely touted as the ' greatest  show on earth' the chance of a ringside seat for a perilous  river crossing draws thousands  of visitors  every year.
                <br/> <br/>The popularity of the Maasai Mara attracts a lot of tourists, which  results in large  crowds. To address this, private conservancies have been established around the main reserve over the past 15 years, offering a more intimate and exclusive safari experience. Nine of these conservancies are dedicated to wildlife conservation, and they are collectively nearly the same size as the Mara reserve itself. Staying  in a private conservancy  can make a safari  more enjoyable,  while supporting  conservation  efforts  too.

                </p>
                <div className=" mb-20 m-auto">
                    <h1 className=" font-[SourceSerifPro-Bold] pt-[50px] text-xl lg:text-4xl m-auto mb-20">Camps and Lodge in Maasai Mara</h1>
                     <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        >
                        <SwiperSlide>
                            <div className=" relative z-[7]">
                                <img src={Lodge1} alt="Roaring lion" className="blur-[2px]" loading="lazy"/>
                                <h1 className=" absolute top-[20%] left-[40%] text-white font-bold text-2xl">MARA SERENA  LODGE</h1>
                                {/* <p className=" absolute top-[50%] text-white m-auto left-[10%]">
                                    Tortilis is an exceptional tented camp located on the border of Amboseli National Park in Africa. 
                                </p> */}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative z-[7]">
                                <img src={Lodge2} alt="Roaring lion" className="blur-[2px]" loading="lazy"/>
                                <h1 className=" absolute top-[20%] left-[40%] text-white font-bold text-2xl">MARA PLAINS  CAMP </h1>
                                <p className=" absolute top-[50%] text-white m-auto left-[10%]">
                                    Tortilis is an exceptional tented camp located on the border of Amboseli National Park in Africa. 
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={Lodge3} alt="Roaring lion" className="blur-[2px]" loading="lazy"/>
                                <h1></h1>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                
            </section>
            <div>
                <img src={require('../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
}

export default DestMaasai;