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

import Naivasha from '../../Assets/Naivasha.jpg';


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
            <secttion>
                <div className=" flex flex-col justify-center items-center mt-[60px] lg:mt-[120px]">
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Lake Nakuru and Lake Naivasha</h1>
                    <img src={Naivasha} alt="Roaring lion" className=" "/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[500px] px-10" >
                <p className=" font-[SourceSerifPro-Regliar] pt-[50px] text-xl">
                Lake Nakuru, located in its namesake national park, is famous for the large number of flamingos that gather there to feed on algae. The lake was featured in the movie "Out of Africa," where it was depicted as a breathtaking sight as hundreds of thousands of flamingos take flight in a pink cloud. The protected  area also supports  a healthy  number of black and white  rhinos,  as well as tree- climbing lion, leopard and the usual plains game.This is just one of the many dramatic natural events that can be experienced in Africa.
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
                            <h1 className=" font-[SourceSerifPro-Black] pt-[50px] text-xl lg:text-4xl m-auto mb-10">Camps and Lodge in Nakuru</h1>
                        <hr className="border-black border-[1px]" />
                    </div>
                    <div className=" lg:flex">
                        <div className=" mr-10 lg:w-1/2">
                            <img src={Lodge1} alt="Tortolis Camp" loading ="lazy"/>
                            <a href='/kenya/amboseli/tortolis'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Loldia House & Cottages</h1></a> 
                            <a href='/kenya/amboseli/tortolis'><div className='hover:text-[#f15d30] lg:text-lg'>
                                        <span >Nakuru Kenya</span>
                            </div></a> 
                        </div>
                        

                        <div className="lg:w-1/2">
                            <img src={Lodge2} alt="Ol Tukai" loading ="lazy"/>
                            <a href='/kenya/amboseli/oltukai'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Mbweha Camp</h1></a> 
                            <a href='/kenya/amboseli/oltukai'><div className=' hover:text-[#f15d30] lg:text-lg'>
                                        <span >NakuruKenya</span>
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