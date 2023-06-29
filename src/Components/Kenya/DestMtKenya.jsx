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
import Lodge1 from '../../Assets/mtk3.jpg';

import Lodge2 from '../../Assets/FMKSC Animals 975X600 (5).jpg';

import Lodge3 from '../../Assets/FMKSC Animals 975X600 (6).jpg';

import Lodge4 from '../../Assets/Property gallery 975X600 (3).jpg';

import Lodge5 from '../../Assets/Property gallery 975X600 (7).jpg';

import Mount from '../../Assets/Mtkenya.jpg';

import Fairmount from '../../Assets/fairmount.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import ShowMoreText from "react-show-more-text";


const DestMtK =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Mount Kenya</h1>
                    <img src={Mount} alt="Roaring lion" className="lg:m-auto lg:w-[70%]"/>
                </div>
            </section>
            <section className=" bg-white w-[100%] m-auto lg:px-[100px] px-10" >
            <ShowMoreText
                    /* Default options */
                    lines={7}
                    more='Show more'
                    less='Show less'
                    anchorClass='pt-[50px]'
                    className='font-[SourceSerifPro-Regular] pt-[50px] text-xl'
                    // onClick={this.executeOnClick}
                    expanded={false}
                    truncatedEndingComponent={"..... "}
                >
                <p className=" font-[SourceSerifPro-Regliar] pt-[50px] text-xl">
                Mount Kenyan is considered the home of Ngai - the God. It is Africa's second highest mountain, standing at 17,057 feet and is known for being difficult to climb. The mountain rises dramatically from the already high plains, starting slowly and gracefully, before reaching its jagged, glaciated peak. In the mornings, it is often clearly visible, but during the afternoons, it is hidden by clouds created by warm air from the plains, which Hemingway described as "look[ing] like you could have scooped them up with a spoon."

                <br/><br/>This "majestic and tender" mountain, as Hemingway referred to it, becomes a source of inspiration for guests on Lamlav Safaris, reminding them of Africa's beauty and balance. Kenya is the only country named after a mountain and Mount Kenya holds a special place in the lives of those who live in its vicinity, being not just a symbol but an integral part of their lives.

                </p>
                </ShowMoreText>
                <div className="relative mt-20 z-[0] m-auto lg:w-[70%]">
                <Slider {...settings} autoplay arrows>
                    <div>
                        <img src={Lodge4}/>
                    </div>
                    <div>
                    <img src={Lodge2}/>
                    </div>
                    <div>
                    <img src={Lodge3}/>
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
                            <h1 className=" font-[SourceSerifPro-Black] pt-[50px] text-xl lg:text-4xl m-auto mb-10">Camps and Lodges in Mount Kenya</h1>
                        <hr className="border-black border-[1px]" />
                    </div>
                    <div className=" lg:flex">
                        <div className=" mr-10 lg:w-1/2">
                            <img src={Fairmount} alt="Tortolis Camp" loading ="lazy"/>
                            <a href='/kenya/fairmount'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Fairmount Mount Kenya</h1></a> 
                            <a href='/kenya/fairmount'><div className='hover:text-[#f15d30] lg:text-lg'>
                                        <span >Mount Kenya, Kenya</span>
                            </div></a> 
                        </div>
                        

                        {/* <div className="lg:w-1/2">
                            <img src={Lodge2} alt="Ol Tukai" loading ="lazy"/>
                            <a href='/kenya/amboseli/oltukai'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Ol Tukai  Lodge</h1></a> 
                            <a href='/kenya/amboseli/oltukai'><div className=' hover:text-[#f15d30] lg:text-lg'>
                                        <span >Mount Kenya</span>
                            </div></a> 
                        </div> */}
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

export default DestMtK;