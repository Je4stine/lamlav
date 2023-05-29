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
import Lodge1 from '../../../Assets/Lewa.jpg';

import Lodge2 from '../../../Assets/lodge4.jpg';

import Lodge3 from '../../../Assets/lodge5.jpg';

import Chyulu from '../../../Assets/totolis1.jpg';

const Lewa =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Lewa Safari  Camp. </h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[500px] px-10" >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Lewa Safari camp provides a comfortable and authentic experience for its guests with spacious tented rooms that have private balconies and luxurious bathrooms. The camp also features a cozy lounge area with a log fireplace, perfect for unwinding after a day exploring the 65,000-acre private reserve. Visitors of the exclusive retreat will have privileged access to this protected wilderness.
                <br/><br/> The Camp has 11 luxurious safari tents, each with its own private bathroom. The tents can be arranged as either double or twin rooms, with three of them capable of accommodating three people, but only if they are under 16 years old. The tents are covered by thatched roofs and include a main bedroom, a private bathroom, and a large deck area. Additionally, there are 2 family suites available, each consisting of two safari tents (one with a double bed and one with twin beds) connected by a shared veranda.


                <br/><br/> <strong>Amenities at Lewa Safari  Camp </strong>
                    <li>Outdoor pool</li>
                    <li> Massage services</li>
                    <li> Wi-Fi</li>

                    <br/><br/> <strong>Room features </strong>
                        <li>Private terrace </li>
                        <li>Laundry service</li>
                        <li>Daily housekeeping</li>
                        <li>Room service</li>
                        <li>Private bathroom</li>


                    <br/><br/> <strong>Activities  at Tortilis  Camp </strong>

                            <li>Game drives</li>
                            <li>Guided walks</li>
                            <li> Horse and Camel Riding</li>
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

export default Lewa;