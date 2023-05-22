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

import Chyulu from '../../Assets/chyullu.jpg';

const DestChyulu =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">The Chyullu Hills</h1>
                    <img src={Chyulu} alt="Roaring lion" className=" "/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[500px] px-10" >
                <p className=" font-[SourceSerifPro-Regliar] pt-[50px] text-xl">
                Comprising of over 750,000 acres managed for wildlife, the Chyulu Hills are considered to be one of the finest wilderness areas in Africa, featuring rainforests and lush meadows.The hills and the nearby plains with their forested areas and river sources, are secluded and teeming with wildlife that is not frequently disturbed. Mount Kilimanjaro, which can be seen on the East side, is constantly present during safaris to the Chyulu Hills, just across the Kenya-Tanzania border.
                <br/><br/>This area is ideal for hikers who enjoy ascending hills and creating unforgettable memories.

                </p>
                <div className=" mb-20 m-auto">
                    <h1 className=" font-[SourceSerifPro-Bold] pt-[50px] text-xl lg:text-4xl m-auto mb-20">Camps and Lodge in Chyullu</h1>
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
                                <h1 className=" absolute top-[20%] left-[40%] text-white font-bold text-2xl">CAMPI YA KANZI</h1>
                                {/* <p className=" absolute top-[50%] text-white m-auto left-[10%]">
                                    Tortilis is an exceptional tented camp located on the border of Amboseli National Park in Africa. 
                                </p> */}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative z-[7]">
                                <img src={Lodge2} alt="Roaring lion" className="blur-[2px]" loading="lazy"/>
                                <h1 className=" absolute top-[20%] left-[40%] text-white font-bold text-2xl">OL DONYO LODGE</h1>
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

export default DestChyulu;