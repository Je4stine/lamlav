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
import Lodge1 from '../../Assets/nairobi-8.jpg';

import Lodge2 from '../../Assets/Uhuru_Park_Lake_20220621194047.jpg';

import Lodge3 from '../../Assets/nairobi-2.jpg';

import Lodge4 from '../../Assets/attr_2096.jpg';

import Lodge5 from '../../Assets/attr_2100.jpg';

import Suncity from '../../Assets/sunsity.jpg';

import Waine from '../../Assets/waine.jpg';

import Fair2 from '../../Assets/fairnai.jpg';

import Giraffe2 from '../../Assets/giraffe2.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowMoreText from "react-show-more-text";


const DestNairobi =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Nairobi</h1>
                    <img src={Suncity} alt="Roaring lion" className=" w-[100vw] h-[100vh] object-cover"/>
                </div>
            </section>
            <section className=" bg-white w-[100%] m-auto lg:px-[100px] px-10" >
            <ShowMoreText
                    /* Default options */
                    lines={4}
                    more='READ MORE'
                    less='READ LESS'
                    anchorClass='font-[SourceSerifPro-Regular] pt-[50px] text-red-600'
                    className='font-[SourceSerifPro-Regular] pt-[50px] text-xl'
                    // onClick={this.executeOnClick}
                    expanded={false}
                    truncatedEndingComponent={"..... "}
                >
                <p className=" font-[SourceSerifPro-Regliar] pt-[50px] text-xl">
                Nairobi, the capital city of Kenya, is often considered by travelers as a mere stopover during their safari or beach holiday. However, a stay in Nairobi at the beginning or end of a trip can be an enjoyable experience. The city offers a range of opportunities to buy local souvenirs at vibrant Maasai markets, try the delicious street food, or visit the historic colonial home of Karen Blixen, the Danish writer who wrote the famous book "Out of Africa".
                <br/><br/>The Nairobi National Park, located 7 kilometers from the city, is a must-visit destination. It boasts an impressive density of black rhinos, lions, giraffes, and zebras, making it one of the world's largest habitats for black rhinos, thanks to the efforts of Daphine and David Shieldrick. 
                You can spend a day at the Wildlife Trust, where you can interact with baby elephants and rhinos, or visit the Giraffe Center, which focuses on preserving the endangered Rothschild's giraffe. 
                <br/><br/>For a unique experience, stay at Giraffe Manor, a colonial-style property where resident giraffes roam the grounds and sometimes even join you for breakfast on the terrace.

                </p>
                </ShowMoreText>
                <div className="relative mt-20 z-[0] m-auto lg:w-[70%]">
                <Slider {...settings} autoplay arrows>
                    <div>
                        <img src={Lodge2}/>
                    </div>
                    <div>
                    <img src={Lodge1}/>
                    </div>
                    <div>
                    <img src={Lodge4}/>
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
                            <h1 className=" font-[SourceSerifPro-Black] pt-[50px] text-xl lg:text-4xl m-auto mb-10">Camps and Lodges in Nairobi</h1>
                        <hr className="border-black border-[1px]" />
                    </div>
                    <div className=" lg:flex">
                        <div className=" mr-10 lg:w-1/3">
                            <img src={Waine} alt="Tortolis Camp" loading ="lazy"/>
                            <a href='/kenya/waine'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >House of Waine</h1></a> 
                            <a href='/kenya/waine'><div className='hover:text-[#f15d30] lg:text-lg'>
                                        <span >Nairobi, Kenya</span>
                            </div></a> 
                        </div>
                        

                        <div className="lg:w-1/3 mr-10">
                            <img src={Giraffe2} alt="Ol Tukai" loading ="lazy"/>
                            <a href='/kenya/giraffe'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Giraffe Manor</h1></a> 
                            <a href='/kenya/giraffe'><div className=' hover:text-[#f15d30] lg:text-lg'>
                                        <span >Nairobi, Kenya</span>
                            </div></a> 
                        </div>

                        <div className="lg:w-1/3">
                            <img src={Fair2} alt="Ol Tukai" loading ="lazy"/>
                            <a href='/kenya/norfolk'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Fairmount  Norfolk Hotel</h1></a> 
                            <a href='/kenya/norfolk'><div className=' hover:text-[#f15d30] lg:text-lg'>
                                        <span >Nairobi, Kenya</span>
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

export default DestNairobi;