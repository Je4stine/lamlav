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
import Lodge1 from '../../../Assets/mbweha.jpg';

import Lodge2 from '../../../Assets/lodge4.jpg';

import Lodge3 from '../../../Assets/lodge5.jpg';

import Chyulu from '../../../Assets/totolis1.jpg';

const Mbweha =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Mbweha Camp  </h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[500px] px-10" >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Mbweha Camp is located near the southern boundary of Lake Nakuru National Park and offers stunning views of the Eburru and Mau mountain ranges. It is situated in the Congreve Conservancy, which is part of the larger Soysambu Conservancy. The camp features ten cottages built of rustic lava stone with thatched roofs and is surrounded by indigenous trees such as the euphorbia candelabra and yellow barked acacia. Despite being only a few hours away from Nairobi, Mbweha Camp has a relaxing atmosphere and offers a range of activities, including walking tours, mountain biking, and night game drives. Guests can also visit Nakuru National Park for a day trip and enjoy a gourmet bush lunch with magnificent views of the lake and park. Soysambu Conservancy is a World Heritage Site and Ramsar Site with a diverse array of flora and fauna, including 12,000 wildlife species, including the endangered colossus monkey.Tourists can observe wildlife just 16 kilometers away from the camp at Lake Elementaita, which is a breeding habitat for the great white pelican and visited by both the lesser and greater flamingo. 


                <br/><br/> <strong>Amenities at Mara Mbweha Camp </strong>
                <li>24hr  Electricity </li>
                <li>Shared pool </li>
                <li>Spa services </li>
                <li>Wi-Fi</li>
                <li> Laundry  services</li>
                <li> Bar & Restaurant </li>


                <br/><br/>Room features 
                <li>Room service</li>
                <li>En-suite bathroom </li>
             



                    <br/><br/> <strong>Activities  at Mbweha Camp   </strong>

                    <li>Day and Night game  drives </li>
                    <li>Excursions </li>
                    <li>Mountain  biking </li>
                    <li>Walking tours</li>
                    <li>Sundowners </li>
                    <li>Bush breakfast </li>
                    <li>Hiking</li>
                    <li>Guided  bush  walks </li>
                    <li>Horse/camel rides</li>


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

export default Mbweha;