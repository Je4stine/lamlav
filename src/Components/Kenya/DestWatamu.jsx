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
import Lodge1 from '../../Assets/watamu1.jpeg';

import Lodge2 from '../../Assets/watamu2.jpeg';

import Lodge3 from '../../Assets/watamu3.jpeg';

import Lodge4 from '../../Assets/watamu4.jpeg';

import Tatol from '../../Assets/502213485_maldives.jpg';

import HemWat from '../../Assets/hemwatamu.jpg';

import Medina from '../../Assets/medina333.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowMoreText from "react-show-more-text";
import AllLodges from "../AllLodges";

const DestWatamu =()=>{
    const [colorChanged, setColorChanged]= useState(false);
    const [open, setOpen] = useState(false)

    const toggleLodges =()=>{
        setOpen(!open)
    };

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
                <div className=" flex flex-col justify-center items-center mt-[100px]">
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Watamu</h1>
                    <img src={Tatol} alt="Roaring lion" className=" w-[100vw] h-[100vh] object-cover"/>
                </div>
            </section>
            <section className=" bg-white w-[100%] m-auto lg:px-[100px] px-10" >
                <p className=" font-[SourceSerifPro-Regliar] pt-[50px] text-xl">
                    Watamu in the North-Coast is a magical, charming, and timeless place that enchants all who visit. Perched on a small peninsula, surrounded by the serene Mida Creek and dotted with rocky coves and shimmering lagoons, Watamu is a paradise. The turquoise waters, protected by Kenya's barrier reef, are crystal clear and warm all year, making it an ideal location for swimming and relaxing. The area is surrounded by towering baobab trees and boasts three great stretches of silver sand, making it  a true escape from the hustle and bustle of everyday life.
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
                    </Slider>
                </div>
                <hr/>
                <div className=" mb-20 m-auto">
                    <div className=" flex justify-center items-center">
                        <hr className="border-black border-[1px]" />
                            <h1 className=" font-[SourceSerifPro-Black] pt-[50px] text-xl lg:text-4xl m-auto mb-10">Camps and Lodges in Watamu</h1>
                        <hr className="border-black border-[1px]" />
                    </div>
                    <div className=" lg:flex">
                        <div className=" mr-10 lg:w-1/2">
                            <img src={Medina} alt="Tortolis Camp" loading ="lazy"/>
                            <a href='/kenya/medina'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Medina Palms</h1></a> 
                            <a href='/kenya/medina'><div className='hover:text-[#f15d30] lg:text-lg'>
                                        <span >Watamu, Kenya</span>
                            </div></a> 
                        </div>
                        

                        <div className="lg:w-1/2">
                            <img src={HemWat} alt="Ol Tukai" loading ="lazy"/>
                            <a href='/kenya/hemwatamu'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Hemingways Hotel Watamu</h1></a> 
                            <a href='/kenya/hemwatamu'><div className=' hover:text-[#f15d30] lg:text-lg'>
                                        <span >Watamu, Kenya</span>
                            </div></a> 
                        </div>
                    </div>
                    <div onClick={toggleLodges} className=' cursor-pointer mt-10 border-[#f15d30] border-[1px] text-[#f15d30] font-bold text-lg rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] min-w-[100px] p-10 flex items-center justify-center m-auto'>
                                <span className="">View all Kenya Camps and lodges</span>
                      </div>

                      <div
                            className={`${
                            open ? 'opacity-100' : 'opacity-0'
                            } transition-all duration-500`}
                        >
                        {open?<AllLodges/>:<div/>} 
                      </div>             

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