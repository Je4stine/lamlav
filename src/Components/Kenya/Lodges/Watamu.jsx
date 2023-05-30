import React, {useState} from "react";
import Navbar from "../../Navbar/Navbar";
import Navreveal from "../../Navbar/Navreveal";
import Footer from "../../Footer/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
// import Slider from "react-slick";
import Lodge1 from '../../../Assets/watamu1.jpg';

import Lodge2 from '../../../Assets/lodge4.jpg';

import Lodge3 from '../../../Assets/lodge5.jpg';

import Chyulu from '../../../Assets/totolis1.jpg';

const Watamu =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Hemingways  Hotel  Watamu </h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[300px] px-10" >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Hemingways is a privately owned hotel located on the beachfront with stunning ocean views visible from most of its rooms. The hotel's appearance is characterized by pristine white exteriors and spacious stone terraces that are surrounded by numerous palm trees and two sparkling blue swimming pools. Hemingways is an elegant and upscale hotel that is popular with both British Kenyans and international visitors. Its bar, dining room, and reception are housed in large white round buildings with high, dramatic roofs. The hotel is particularly renowned for its emphasis on fine dining, which is reflected in the elegant dining room's decor and candlelit ambience. The hotel has two wings: the original sea-view wing with smaller but quieter double rooms that offer spectacular ocean views, and a newer "superior" wing with larger and more luxurious rooms that offer views of the sea beyond the hotel's gardens and swimming pools. All rooms were recently refurbished to ensure maximum comfort for guests.



                <br/><br/> <strong>Amenities at Hemingways  Hotel  Watamu  </strong>
               <li>Spa </li>
               <li>Butler  service </li>
               <li>Laundry  services </li>
               <li>Bar</li>
               <li>Botanical  pool</li>
               <li>Wi-Fi</li>
               <li>Ocean View </li>


                <br/><br/>Room features 
                <li>Air conditioned </li>
                <li>Private terrace </li>
                <li>En-suite  bathroom </li>
                <li>Room  service </li>




                    <br/><br/> <strong>Activities  at Hemingways  Hotel  Watamu  </strong>

                    <li>Sundowners  bitings </li>
                    <li>Watersports </li>
                    <li>Excursions </li>
                    <li>Whale/ Dolphin  watching </li>
                    <li>Deep Sea fishing </li>


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
                                <img src={Lodge1} alt="Roaring lion" loading="lazy"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={Lodge1} alt="Roaring lion" loading="lazy"/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    </div>

            </section>
            <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Watamu;