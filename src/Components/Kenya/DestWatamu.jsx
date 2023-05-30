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
import Lodge1 from '../../Assets/watamu11.jpg';

import Lodge2 from '../../Assets/watamu22.jpg';

import Lodge3 from '../../Assets/watamu33.jpg';

import Tatol from '../../Assets/Tatol.jpg';

import HemWat from '../../Assets/hemwatamu.jpg';

import Medina from '../../Assets/medina333.jpg';

const DestWatamu =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Watamu</h1>
                    <img src={Tatol} alt="Roaring lion" className="lg:m-auto lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[300px] px-10" >
                <p className=" font-[SourceSerifPro-Regliar] pt-[50px] text-xl">
                Watamu in the North-Coast is a magical, charming, and timeless place that enchants all who visit. Perched on a small peninsula, surrounded by the serene Mida Creek and dotted with rocky coves and shimmering lagoons, Watamu is a paradise. The turquoise waters, protected by Kenya's barrier reef, are crystal clear and warm all year, making it an ideal location for swimming and relaxing. The area is surrounded by towering baobab trees and boasts three great stretches of silver sand, making it  a true escape from the hustle and bustle of everyday life.
                </p>
                <div className="relative mt-20 z-[0]">
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
                            <div >
                                <img src={Lodge1} alt="Roaring lion" loading="lazy"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={Lodge2} alt="Roaring lion" loading="lazy"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={Lodge3} alt="Roaring lion" loading="lazy"/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <hr/>
                <div className=" mb-20 m-auto">
                    <div className=" flex justify-center items-center">
                        <hr className="border-black border-[1px]" />
                            <h1 className=" font-[SourceSerifPro-Black] pt-[50px] text-xl lg:text-4xl m-auto mb-10">Camps and Lodge in Watamu</h1>
                        <hr className="border-black border-[1px]" />
                    </div>
                    <div className=" lg:flex">
                        <div className=" mr-10 lg:w-1/2">
                            <img src={Medina} alt="Tortolis Camp" loading ="lazy"/>
                            <a href='/kenya/medina'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Medina Palms</h1></a> 
                            <a href='/kenya/medina'><div className='hover:text-[#f15d30] lg:text-lg'>
                                        <span >Watamu Kenya</span>
                            </div></a> 
                        </div>
                        

                        <div className="lg:w-1/2">
                            <img src={HemWat} alt="Ol Tukai" loading ="lazy"/>
                            <a href='/kenya/hemwatamu'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Hemingways Hotel Watamu</h1></a> 
                            <a href='/kenya/hemwatamu'><div className=' hover:text-[#f15d30] lg:text-lg'>
                                        <span >Watamu Kenya</span>
                            </div></a> 
                        </div>
                    </div>
                    <a href='/kenya/destamboseli'><div className=' mt-10 border-[#f15d30] border-[1px] text-[#f15d30] font-bold text-lg rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] min-w-[100px] p-10 flex items-center justify-center m-auto'>
                                <span className="">View all Kenya Camps and lodges</span>
                      </div></a>            

                </div>
                
            </section>
            <div>
                <img src={require('../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
}

export default DestWatamu;