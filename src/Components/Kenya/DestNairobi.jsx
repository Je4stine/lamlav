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

import Suncity from '../../Assets/sunsity.jpg';


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
            <section className=" bg-white w-[100%] m-auto lg:px-[500px] px-10" >
                <p className=" font-[SourceSerifPro-Regliar] pt-[50px] text-xl">
                Nairobi, the capital city of Kenya, is often considered by travelers as a mere stopover during their safari or beach holiday. However, a stay in Nairobi at the beginning or end of a trip can be an enjoyable experience. The city offers a range of opportunities to buy local souvenirs at vibrant Maasai markets, try the delicious street food, or visit the historic colonial home of Karen Blixen, the Danish writer who wrote the famous book "Out of Africa".
                <br/><br/>The Nairobi National Park, located 7 kilometers from the city, is a must-visit destination. It boasts an impressive density of black rhinos, lions, giraffes, and zebras, making it one of the world's largest habitats for black rhinos, thanks to the efforts of Daphine and David Shieldrick. 
                You can spend a day at the Wildlife Trust, where you can interact with baby elephants and rhinos, or visit the Giraffe Center, which focuses on preserving the endangered Rothschild's giraffe. For a unique experience, stay at Giraffe Manor, a colonial-style property where resident giraffes roam the grounds and sometimes even join you for breakfast on the terrace.

                </p>
                <div className=" mb-20 m-auto">
                    <h1 className=" font-[SourceSerifPro-Bold] pt-[50px] text-xl lg:text-4xl m-auto mb-20">Camps and Lodge in Nairobi</h1>
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
                            <div className=" relative z-[7]">
                                <img src={Lodge1} alt="Roaring lion" className="blur-[2px]" loading="lazy"/>
                                <h1 className=" absolute top-[20%] left-[40%] text-white font-bold text-2xl">HOUSE OF  WAINE </h1>
                                {/* <p className=" absolute top-[50%] text-white m-auto left-[10%]">
                                    Tortilis is an exceptional tented camp located on the border of Amboseli National Park in Africa. 
                                </p> */}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative z-[7]">
                                <img src={Lodge2} alt="Roaring lion" className="blur-[2px]" loading="lazy"/>
                                <h1 className=" absolute top-[20%] left-[40%] text-white font-bold text-2xl">GIRAFFE MANOR</h1>
                                
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" relative">
                                <img src={Lodge3} alt="Roaring lion" className="blur-[2px]" loading="lazy"/>
                                <h1 className=" absolute top-[20%] left-[40%] text-white font-bold text-2xl">FAIRMOUNT  NORFOLK HOTEL </h1>
                               
                            </div>
                        </SwiperSlide>
                    </Swiper>
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