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
import Lodge1 from '../../../Assets/lodia.jpg';

import Lodge2 from '../../../Assets/lodge4.jpg';

import Lodge3 from '../../../Assets/lodge5.jpg';

import Chyulu from '../../../Assets/totolis1.jpg';

const Loldia =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Loldia House and Cottages  </h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[500px] px-10" >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Loldia House and Cottages is a private retreat located on a 6,000 acre ranch on the western side of Lake Naivasha. Upon arrival, guests are welcomed by friendly children and immediately feel relaxed and at home. The property features a stunning location on the lake shore with picturesque fever trees and a magnificent ancient fig tree providing shade for the green lawns and Loldia House. 
                <br/><br/>Built in 1930, Loldia House has retained its original charm and character. Its stone veranda offers fantastic views of the lake, and a cosy living room includes a grand piano, plush sofas, an open fireplace, rugs, and interesting reference books about Kenya. The dining room features a polished wooden table, vases of flowers, and gleaming silver cutlery. The food at Loldia is exceptional. 
                <br/><br/>There are a total of nine rooms, three in the main house and six in the gardens, all still furnished with the original household furniture and bursting with character and charm. Each room has an en suite bathroom with a large bathtub. In addition, there is a private cottage located a four-minute drive up the hill, which has three bedrooms, breathtaking views, and is perfect for families or groups of friends.



                <br/><br/> <strong>Amenities at Loldia  House   </strong>
                <li>Massage  and  Spa </li>
                <li>Wi-fi</li>
                <li>Shared  pool</li>
                <li>Bar</li>
                <li>Gift  shop </li>
                <li>Laundry  service </li>


                <br/><br/>Room features 
                <li>Room service</li>
                <li>Private balcony </li>
                <li>En-suite bathroom </li>
            



                    <br/><br/> <strong>Activities  at Loldia  House   </strong>

                    <li>Horse riding </li>
                    <li>Boating</li>
                    <li> Walking  tours</li>
                    <li>Bird watching </li>


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

export default Loldia;