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
import Lodge1 from '../../Assets/CYK-Camp-layout-with-Chyulu-backdrop-Ian-Johnson_preview.jpg';

import Lodge2 from '../../Assets/chyulus-kili-behind.jpg';

import Lodge3 from '../../Assets/CYK-Flights.jpg';

import Lodge4 from '../../Assets/CYK-Walking-in-the-mist-with-Chyulu-background.jpg';

import Lodge5 from '../../Assets/CYK-sundowner.jpg';

import Lodge6 from '../../Assets/IMG_0180-compressor.jpg';

import Lodge7 from '../../Assets/IMG_0688-compressor.jpg';


import Kampi from '../../Assets/kampi.jpg';

import Oldonyo from '../../Assets/oldonyo1.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowMoreText from "react-show-more-text";
import AllLodges from "../AllLodges";

const DestChyulu =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">The Chyullu Hills</h1>
                    <img src={Lodge2} alt="Roaring lion" className=" w-[100vw] h-[100vh] object-cover"/>
                </div>
            </section>
            <section className=" bg-white w-[100%] m-auto lg:px-[100px] px-10" >
                <p className=" font-[SourceSerifPro-Regliar] pt-[50px] text-xl">
                Comprising of over 750,000 acres managed for wildlife, the Chyulu Hills are considered to be one of the finest wilderness areas in Africa, featuring rainforests and lush meadows.The hills and the nearby plains with their forested areas and river sources, are secluded and teeming with wildlife that is not frequently disturbed. Mount Kilimanjaro, which can be seen on the East side, is constantly present during safaris to the Chyulu Hills, just across the Kenya-Tanzania border.
                <br/><br/>This area is ideal for hikers who enjoy ascending hills and creating unforgettable memories.

                </p>
                <div className="relative mt-20 z-[0] m-auto lg:w-[70%]">
                <Slider {...settings} autoplay arrows>
                    <div>
                        <img src={Lodge1} alt="Lodges"/>
                    </div>
                    <div>
                    <img src={Lodge4} alt="Lodges"/>
                    </div>
                    <div>
                    <img src={Lodge3} alt="Lodges"/>
                    </div>
                    <div>
                    <img src={Lodge5} alt="Lodges"/>
                    </div>
                    <div>
                    <img src={Lodge6} alt="Lodges"/>
                    </div>
                    <div>
                    <img src={Lodge7} alt="Lodges"/>
                    </div>
                    </Slider>
                </div>
                <hr/>
                <div className=" mb-20 m-auto">
                    <div className=" flex justify-center items-center">
                        <hr className="border-black border-[1px]" />
                            <h1 className=" font-[SourceSerifPro-Black] pt-[50px] text-xl lg:text-4xl m-auto mb-10">Camps and Lodges in Chyullu Hills</h1>
                        <hr className="border-black border-[1px]" />
                    </div>
                    <div className=" lg:flex">
                        <div className=" mr-10 lg:w-1/2">
                            <img src={Kampi} alt="Tortolis Camp" loading ="lazy"/>
                            <a href='/kenya/campi'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Kampi ya Kazi</h1></a> 
                            <a href='/kenya/campi'><div className='hover:text-[#f15d30] lg:text-lg'>
                                        <span >Chyullu Hills, Kenya</span>
                            </div></a> 
                        </div>
                        

                        <div className="lg:w-1/2">
                            <img src={Oldonyo} alt="Ol Tukai" loading ="lazy"/>
                            <a href='/kenya/oldonyo'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Ol Donyo Lodge</h1></a> 
                            <a href='/kenya/oldonyo'><div className=' hover:text-[#f15d30] lg:text-lg'>
                                        <span >Chyullu Hills, Kenya</span>
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

export default DestChyulu;