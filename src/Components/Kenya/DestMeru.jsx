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
import Lodge1 from '../../Assets/meru1.jpg';

import Lodge2 from '../../Assets/meru2.jpg';

import Lodge3 from '../../Assets/meru3.jpg';

import Zebra from '../../Assets/GrevyZebra 2.jpg';

import Elsa from '../../Assets/elsa.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowMoreText from "react-show-more-text";


const DestMeru =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Meru National Park</h1>
                    <img src={Zebra} alt="Roaring lion" className=" "/>
                </div>
            </section>
            <section className=" bg-white w-[100%] m-auto lg:px-[100px] px-10" >
            <ShowMoreText
                    /* Default options */
                    lines={3}
                    more='Show more'
                    less='Show less'
                    anchorClass='pt-[50px]'
                    className='font-[SourceSerifPro-Regular] pt-[50px] text-xl'
                    // onClick={this.executeOnClick}
                    expanded={false}
                    truncatedEndingComponent={"..... "}
                >
                <p className=" font-[SourceSerifPro-Regliar] pt-[50px] text-xl">
                Meru National Park is located in the Central Highlands of Kenya, near Mount Kenya and straddles the equator. The park is known for its diverse wildlife, including elephants, hippos, cheetahs, giraffes, buffalos, and over 400 species of birds. 
                <br/><br/>The park was once home to the famous lioness Elsa, who was adopted by George and Joy Admanson and was the subject of the popular book and song "Born Free." Spending a peaceful afternoon in Meru, surrounded by birdsong, and revisiting the story of Elsa is a great way to spend the day.

                </p>
                </ShowMoreText>
                <div className="relative mt-20 z-[0] m-auto w-[70%]">
                <Slider {...settings} autoplay arrows>
                    <div>
                        <img src={Lodge1}/>
                    </div>
                    {/* <div>
                    <img src={Lodge2}/>
                    </div> */}
                    <div>
                    <img src={Lodge3}/>
                    </div>
                    {/* <div>
                    <img src={Lodge2}/>
                    </div> */}
                    </Slider>
                </div>
                <hr/>
                <div className=" mb-20 m-auto">
                    <div className=" flex justify-center items-center">
                        <hr className="border-black border-[1px]" />
                            <h1 className=" font-[SourceSerifPro-Black] pt-[50px] text-xl lg:text-4xl m-auto mb-10">Camps and Lodges in Meru National Park</h1>
                        <hr className="border-black border-[1px]" />
                    </div>
                    <div className=" lg:flex">
                        <div className=" mr-10 lg:w-1/2">
                            <img src={Elsa} alt="Tortolis Camp" loading ="lazy"/>
                            <a href='/kenya/elsa'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Elsa's Kopje</h1></a> 
                            <a href='/kenya/amboseli/elsa'><div className='hover:text-[#f15d30] lg:text-lg'>
                                        <span >Meru National Park, Kenya</span>
                            </div></a> 
                        </div>
                        

                        {/* <div className="lg:w-1/2">
                            <img src={Lodge2} alt="Ol Tukai" loading ="lazy"/>
                            <a href='/kenya/amboseli/oltukai'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Ol Tukai  Lodge</h1></a> 
                            <a href='/kenya/amboseli/oltukai'><div className=' hover:text-[#f15d30] lg:text-lg'>
                                        <span >Amboseli National Park Kenya</span>
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

export default DestMeru;