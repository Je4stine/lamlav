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
import Lodge1 from '../../../Assets/larsens.jpg';

import Lodge2 from '../../../Assets/lodge4.jpg';

import Lodge3 from '../../../Assets/lodge5.jpg';

import Chyulu from '../../../Assets/totolis1.jpg';

const Larsen =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Larsens Camp  </h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[500px] px-10" >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                The staff at Larsens Camp provides excellent service with a warm and welcoming approach, making guests feel at home. One example of this is a Samburu warrior stationed in the dining tent who scares away monkeys eyeing the fruit with a slingshot, eliciting cheers from guests. The Samburu National Reserve is a scenic and remote region, famous for its unique wildlife such as the gerenuk antelope,reticulated giraffe,Somali ostrich , and Grevy's zebra. Guests may also spot other animals like elephants,various species of antelope,birds,  leopards, and  cheetahs in the striking landscape of red and green earth beneath the blue sky. Guests will enjoy the friendly and hospitable staff so much that they will be reluctant to leave.
                <br/><br/>Larsens Camp can be found by the Ewaso Nyiro River, where various animals such as, vervet monkeys, birds, and dik diks can be seen wandering around freely. The camp exudes a classic safari ambiance that is simple yet elegant, with wooden floors, oriental rugs, and hurricane lamps in the rooms that provide a cozy and comfortable atmosphere. Guests can enjoy watching game  in the river from the private deck of their tent or from the dining tent's  comfortable setting.



                <br/><br/> <strong>Amenities at Larsens Camp  </strong>
                <li>Wireless  Internet</li> 
                <li>Spa</li>
                <li>Shared pool </li>
               

                <br/><br/>Room features 
               
                <li>Private balcony </li>
                <li>En-suite bathroom </li>
             



                    <br/><br/> <strong>Activities  at Larsens Camp   </strong>
                    <li>Game drives</li>
                    <li>Sundowners </li>
                    <li>Bush breakfast </li>
                    <li>Cultural  visits</li>


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

export default Larsen;