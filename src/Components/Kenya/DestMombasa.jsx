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
import Lodge1 from '../../Assets/voyager-beach-resort-galleryvoyager-family-65.jpg';

import Lodge2 from '../../Assets/voyager-beach-resort-gallery18417031619_4ba0dd8323_o.jpg';

import Lodge3 from '../../Assets/voyager-beach-resort-gallerydscf8965.jpg';

import Lodge4 from '../../Assets/mbsa1.jpg';

import Mombasani from '../../Assets/00-best-safari-parks-and-game-reserves-near-mombasa-BW-header1200px.jpg';

import Sands from  '../../Assets/sands.jpg';

import Kinondo from '../../Assets/kinindo.jpg';

import Almanara from '../../Assets/Almanara-2018-15.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowMoreText from "react-show-more-text";

const DestMombasa =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Mombasa</h1>
                    <img src={Mombasani} alt="Roaring lion" className=" "/>
                </div>
            </section>
            <section className=" bg-white w-[100%] m-auto lg:px-[100px] px-10" >
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
                <p className=" font-[SourceSerifPro-Regliar] pt-[50px] text-xl">
                The Kenya's coastline, stretching for 480 kilometers from the northern border to Tanzania, is a popular tourist destination known for its warm waters and sandy beaches fringed by coconut palms. The coral reefs provide protection for swimming and water sports, and the area has become a prime kitesurfing spot in recent years. 
                With an average temperature of 28°C and short rains in November and long rains in May, the area is ideal for diving, with March and November being the hottest months. The culture along the coast reflects the history of the Swahili people - a blend of Arab, Indian, and indigenous cultures - and is evident in the architecture of towns like Lamu and Mombasa. 
                <br/><br/>The old city of Mombasa is characterized by its narrow streets and intricate carvings, while the Gedi ruins south of Malindi are some of the most impressive examples of the area's history. The Kenya coast is rich in the remains of old Swahili settlements.

                </p>
                </ShowMoreText>
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
                            <h1 className=" font-[SourceSerifPro-Black] pt-[50px] text-xl lg:text-4xl m-auto mb-10">Camps and Lodges in Mombasa</h1>
                        <hr className="border-black border-[1px]" />
                    </div>
                    <div className=" lg:flex">
                        <div className=" mr-10 lg:w-1/3">
                            <img src={Sands} alt="Tortolis Camp" loading ="lazy"/>
                            <a href='/kenya/sands'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >The Sands of Nomad</h1></a> 
                            <a href='/kenya/sands'><div className='hover:text-[#f15d30] lg:text-lg'>
                                        <span >Mombasa, Kenya</span>
                            </div></a> 
                        </div>
                        

                        <div className="mr-10 lg:w-1/3">
                            <img src={Kinondo} alt="Ol Tukai" loading ="lazy"/>
                            <a href='/kenya/kinondo'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Kinindo Kwetu</h1></a> 
                            <a href='/kenya/kinondo'><div className=' hover:text-[#f15d30] lg:text-lg'>
                                        <span >Mombasa, Kenya</span>
                            </div></a> 
                        </div>

                        <div className="lg:w-1/3">
                            <img src={Almanara} alt="Ol Tukai" loading ="lazy"/>
                            <a href='/kenya/almanara'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Almanara</h1></a> 
                            <a href='/kenya/almanara'><div className=' hover:text-[#f15d30] lg:text-lg'>
                                        <span >Mombasa, Kenya</span>
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

export default DestMombasa;