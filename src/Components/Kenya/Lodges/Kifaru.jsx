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
import Lodge1 from '../../../Assets/kifaru.jpg';

import Lodge2 from '../../../Assets/lodge4.jpg';

import Lodge3 from '../../../Assets/lodge5.jpg';

import Chyulu from '../../../Assets/totolis1.jpg';

const Kifaru =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Kifaru House</h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[500px] px-10" >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Visiting Elewana Kifaru House means experiencing the serene and timeless atmosphere of Africa.The Camp offers luxurious accommodations in a bush setting, with friendly staff and a comfortable lounge, bar, and dining area. Guests can enjoy breakfast on the terrace with views of the waterhole, or relax by the infinity pool with distant plain views. 
                <br/><br/>Set in the  beautiful  and lush gardens, that are home  to many  birds,  are five lovely cottages with thatched roofs, each having nicely furnished bedrooms with comfortable four-poster beds and large private bathrooms
                <br/><br/>With a library and log fires, guests can enjoy cosy comfort during cool evenings and the peaceful African night.


                <br/><br/> <strong>Amenities  at  Kifaru House  </strong>
                    <li></li>Infinity Pool
                    <li>Wi-fi</li>
                    <li>Infinity  pool</li>
                    <li>Library </li>
                    <li>Bar</li>

                    <br/><br/> <strong> Room features </strong>
                    <li>En-suite  bathrooms  with Victorian-style bath </li>
                    <li>Room service </li>
                    <li>Private  veranda </li>

                    

                    <br/><br/> <strong>Activities  at Kifaru  House</strong>

                    <li>Game drives</li>
                    <li>Guided walks</li>
                    <li>Horse and Camel Riding</li>
                    <li>Bush breakfast  and Sundowners </li>
                    <li>Cultural  and Conservancy  visits</li>
                    <li>Ngare Ndare forest visit</li>
                    <li>Honeymoon  and Weddings </li>

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

export default Kifaru;