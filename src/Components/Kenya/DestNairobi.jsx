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
import Lodge1 from '../../Assets/Nairobipa.jpg';

import Lodge2 from '../../Assets/kanairo.jpeg';

import Lodge3 from '../../Assets/Kanairo3.jpg';

import Suncity from '../../Assets/sunsity.jpg';

import Waine from '../../Assets/waine.jpg';

import Fair2 from '../../Assets/fairnai.jpg';

import Giraffe2 from '../../Assets/giraffe2.jpg';


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
            <secttion>
                <div className=" flex flex-col justify-center items-center mt-[60px] lg:mt-[120px]">
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Nairobi</h1>
                    <img src={Suncity} alt="Roaring lion" className="lg:m-auto lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[300px] px-10" >
                <p className=" font-[SourceSerifPro-Regliar] pt-[50px] text-xl">
                Nairobi, the capital city of Kenya, is often considered by travelers as a mere stopover during their safari or beach holiday. However, a stay in Nairobi at the beginning or end of a trip can be an enjoyable experience. The city offers a range of opportunities to buy local souvenirs at vibrant Maasai markets, try the delicious street food, or visit the historic colonial home of Karen Blixen, the Danish writer who wrote the famous book "Out of Africa".
                <br/><br/>The Nairobi National Park, located 7 kilometers from the city, is a must-visit destination. It boasts an impressive density of black rhinos, lions, giraffes, and zebras, making it one of the world's largest habitats for black rhinos, thanks to the efforts of Daphine and David Shieldrick. 
                You can spend a day at the Wildlife Trust, where you can interact with baby elephants and rhinos, or visit the Giraffe Center, which focuses on preserving the endangered Rothschild's giraffe. For a unique experience, stay at Giraffe Manor, a colonial-style property where resident giraffes roam the grounds and sometimes even join you for breakfast on the terrace.

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
                            <h1 className=" font-[SourceSerifPro-Black] pt-[50px] text-xl lg:text-4xl m-auto mb-10">Camps and Lodge in Nairobi</h1>
                        <hr className="border-black border-[1px]" />
                    </div>
                    <div className=" lg:flex">
                        <div className=" mr-10 lg:w-1/3">
                            <img src={Waine} alt="Tortolis Camp" loading ="lazy"/>
                            <a href='/kenya/waine'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >House of Waine</h1></a> 
                            <a href='/kenya/waine'><div className='hover:text-[#f15d30] lg:text-lg'>
                                        <span >Nairobi Kenya</span>
                            </div></a> 
                        </div>
                        

                        <div className="lg:w-1/3 mr-10">
                            <img src={Giraffe2} alt="Ol Tukai" loading ="lazy"/>
                            <a href='/kenya/giraffe'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Giraffe Manor</h1></a> 
                            <a href='/kenya/giraffe'><div className=' hover:text-[#f15d30] lg:text-lg'>
                                        <span >Nairobi Kenya</span>
                            </div></a> 
                        </div>

                        <div className="lg:w-1/3">
                            <img src={Fair2} alt="Ol Tukai" loading ="lazy"/>
                            <a href='/kenya/norfolk'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Fairmount  Norfolk Hotel</h1></a> 
                            <a href='/kenya/norfolk'><div className=' hover:text-[#f15d30] lg:text-lg'>
                                        <span >Nairobi Kenya</span>
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