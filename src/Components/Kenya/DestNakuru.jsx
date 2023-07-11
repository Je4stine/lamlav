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
import Lodge1 from '../../Assets/Lake-Naivasha-Sopa-Resort-5-scaled.jpg';

import Lodge2 from '../../Assets/Lake-Naivasha-Sopa-Resort-6-scaled.jpg';

import Lodge3 from '../../Assets/Lake-Naivasha-Sopa-Resort-63.jpg';


import Lodge4 from '../../Assets/LakeNakuru11.jpg';

import Lodge5 from '../../Assets/Lake Nakuru 22.jpg';

import Naivasha from '../../Assets/Lake Nakuru National Park group of zebra.jpg';

import Mbweha from '../../Assets/mbweha.jpg';

import Lodia from '../../Assets/lodia.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowMoreText from "react-show-more-text";


const DestNakuru =()=>{
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
            <section>
                <div className=" flex flex-col justify-center items-center mt-[60px] lg:mt-[120px]">
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Lake Nakuru and Lake Naivasha</h1>
                    <img src={Naivasha} alt="Roaring lion" className=" w-[100vw] h-[100vh] object-cover"/>
                </div>
            </section>
            <section className=" bg-white w-[100%] m-auto lg:px-[100px] px-10" >
                <p className=" font-[SourceSerifPro-Regliar] pt-[50px] text-xl">
                Lake Nakuru, located in its namesake national park, is famous for the large number of flamingos that gather there to feed on algae. The lake is a breathtaking sight as hundreds of thousands of flamingos take flight in a pink cloud. The protected  area also supports  a healthy  number of black and white  rhinos,  as well as tree- climbing lion, leopard and the usual plains game.This is just one of the many dramatic natural events that can be experienced in Africa.
                </p>
                <div className="relative mt-20 z-[0] m-auto lg:w-[70%]">
                <Slider {...settings} autoplay arrows>
                    <div>
                        <img src={Lodge1}/>
                    </div>
                    <div>
                    <img src={Lodge2}/>
                    </div>
                    <div>
                    <img src={Lodge3}/>
                    </div>
                    <div>
                    <img src={Lodge4}/>
                    </div>
                    <div>
                    <img src={Lodge5}/>
                    </div>
                    </Slider>
                </div>
                <hr/>
                <div className=" mb-20 m-auto">
                    <div className=" flex justify-center items-center">
                        <hr className="border-black border-[1px]" />
                            <h1 className=" font-[SourceSerifPro-Black] pt-[50px] text-xl lg:text-4xl m-auto mb-10">Camps and Lodges in Lake Nakuru & Naivasha</h1>
                        <hr className="border-black border-[1px]" />
                    </div>
                    <div className=" lg:flex">
                        <div className=" mr-10 lg:w-1/2">
                            <img src={Lodia} alt="Tortolis Camp" loading ="lazy"/>
                            <a href='/kenya/loldia'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Loldia House & Cottages</h1></a> 
                            <a href='/kenya/loldia'><div className='hover:text-[#f15d30] lg:text-lg'>
                                        <span >Lake Nakuru, Kenya</span>
                            </div></a> 
                        </div>
                        

                        <div className="lg:w-1/2">
                            <img src={Mbweha} alt="Ol Tukai" loading ="lazy"/>
                            <a href='/kenya/mbweha'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Mbweha Camp</h1></a> 
                            <a href='/kenya/mbweha'><div className=' hover:text-[#f15d30] lg:text-lg'>
                                        <span >Lake Nakuru, Kenya</span>
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

export default DestNakuru;