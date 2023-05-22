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

import Dik from '../../Assets/dikdik.jpg';

const DestSamburu =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Samburu National Park</h1>
                    <img src={Dik} alt="Roaring lion" className=" "/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[500px] px-10" >
                <p className=" font-[SourceSerifPro-Regliar] pt-[50px] text-xl">
                The riverine forest is a popular gathering place for various species of mammals, including large herds of elephants. One can often witness groups of 40-50 elephants visiting the river to wash and play. 
                <br/><br/>However, the highlight of this region is not just the wildlife but also the Samburu people. They are closely related to the Maasai and are known for their proud and friendly nature. The Samburu people make a lasting impression on visitors and often become their fondest memories of the safari experience, reminding us that while we may have come to Africa to see its animals, it is its people that leave a lasting impact.

                </p>
                <div className=" mb-20 m-auto">
                    <h1 className=" font-[SourceSerifPro-Bold] pt-[50px] text-xl lg:text-4xl m-auto mb-20">Camps and Lodge in Samburu</h1>
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
                                <h1 className=" absolute top-[20%] left-[40%] text-white font-bold text-2xl">LARSENS CAMP </h1>
                                {/* <p className=" absolute top-[50%] text-white m-auto left-[10%]">
                                    Tortilis is an exceptional tented camp located on the border of Amboseli National Park in Africa. 
                                </p> */}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative z-[7]">
                                <img src={Lodge2} alt="Roaring lion" className="blur-[2px]" loading="lazy"/>
                                <h1 className=" absolute top-[20%] left-[40%] text-white font-bold text-2xl">SASAAB  SAMBURU </h1>
                                {/* <p className=" absolute top-[50%] text-white m-auto left-[10%]">
                                    Tortilis is an exceptional tented camp located on the border of Amboseli National Park in Africa. 
                                </p> */}
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

export default DestSamburu;