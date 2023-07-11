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
import Lodge1 from '../../Assets/Samburu100.jpg';

import Lodge2 from '../../Assets/Samburu200.jpg';

import Lodge3 from '../../Assets/Samburu300.jpg';

import Lodge4 from '../../Assets/Samburu400.jpg';

import Lodge5 from '../../Assets/Samburu500.jpg';

import Dik from '../../Assets/Elelphant-samburu-northern-frontier.jpg';

import Larsen from '../../Assets/larsens.jpg';

import Sasaab from '../../Assets/sasaab.jpg';

import Elephant from '../../Assets/safari-in-samburu-by-muthaiga-travel-11-900x500.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowMoreText from "react-show-more-text";

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
            <section>
                <div className=" flex flex-col justify-center items-center mt-[60px] lg:mt-[120px]">
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Samburu National Park</h1>
                    <img src={Dik} alt="Roaring lion" className=" w-[100vw] h-[100vh] object-cover"/>
                </div>
            </section>
            <section className=" bg-white w-[100%] m-auto lg:px-[100px] px-10" >
                
            <ShowMoreText
                    /* Default options */
                    lines={3}
                    more='READ MORE'
                    less='READ LESS'
                    anchorClass='font-[SourceSerifPro-Regular] pt-[50px] text-red-600'
                    className='font-[SourceSerifPro-Regular] pt-[50px] text-xl'
                    // onClick={this.executeOnClick}
                    expanded={false}
                    truncatedEndingComponent={"..... "}
                >
                <p className=" font-[SourceSerifPro-Regliar] pt-[50px] text-xl">
                The riverine forest is a popular gathering place for various species of mammals, including large herds of elephants. One can often witness groups of 40-50 elephants visiting the river to wash and play. 
                <br/><br/>However, the highlight of this region is not just the wildlife but also the Samburu people. They are closely related to the Maasai and are known for their proud and friendly nature. The Samburu people make a lasting impression on visitors and often become their fondest memories of the safari experience, reminding us that while we may have come to Africa to see its animals, it is its people that leave a lasting impact.

                </p>
                </ShowMoreText>
                <div className="relative mt-20 z-[0] m-auto lg:w-[70%]">
                <Slider {...settings} autoplay arrows>
                    
                    <img src={Lodge1} className=" object-cover"/>
                   
                    <img src={Lodge2} className=" object-cover"/>
                   
                    
                    <img src={Lodge3} className=" object-cover"/>
                    
                    
                    <img src={Lodge4} className=" object-cover"/>

                    <img src={Lodge5} className=" object-cover"/>
                   
                </Slider>
                </div>
                <hr/>
                <div className=" mb-20 m-auto">
                    <div className=" flex justify-center items-center">
                        <hr className="border-black border-[1px]" />
                            <h1 className=" font-[SourceSerifPro-Black] pt-[50px] text-xl lg:text-4xl m-auto mb-10">Camps and Lodges in Samburu</h1>
                        <hr className="border-black border-[1px]" />
                    </div>
                    <div className=" lg:flex">
                        <div className=" mr-10 lg:w-1/3">
                            <img src={Larsen} alt="Tortolis Camp" loading ="lazy"/>
                            <a href='/kenya/larsen'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Larsens Camp</h1></a> 
                            <a href='/kenya/larsen'><div className='hover:text-[#f15d30] lg:text-lg'>
                                        <span >Samburu National Park, Kenya</span>
                            </div></a> 
                        </div>
                        

                        <div className="mr-10 lg:w-1/3">
                            <img src={Sasaab} alt="Ol Tukai" loading ="lazy"/>
                            <a href='/kenya/sasaab'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Sasaab Samburu</h1></a> 
                            <a href='/kenya/sasaab'><div className=' hover:text-[#f15d30] lg:text-lg'>
                                        <span >Samburu National Park, Kenya</span>
                            </div></a> 
                        </div>

                        <div className="lg:w-1/3">
                            <img src={Elephant} alt="Ol Tukai" loading ="lazy"/>
                            <a href='/kenya/elephant'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Elephant Bedroom Samburu</h1></a> 
                            <a href='/kenya/elephant'><div className=' hover:text-[#f15d30] lg:text-lg'>
                                        <span >Samburu National Park, Kenya</span>
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

export default DestSamburu;