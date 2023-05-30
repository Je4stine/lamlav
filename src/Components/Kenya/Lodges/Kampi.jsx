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
import Lodge1 from '../../../Assets/Photo-26-11-2020-17-38-07.jpg';

import Lodge2 from '../../../Assets/Chyulu_Wilderness_Camp_Lodge_luxury_twin.jpg';

import Lodge3 from '../../../Assets/Chyulu_Wilderness_Camp_quadruple_tent_jp.jpg';

import Chyulu from '../../../Assets/IMG_1863.jpg';

const Kampi =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Kampi ya Kanzi </h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[300px] px-10" >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Campi ya Kanzi is a luxury safari camp that offers six thatched roof cottages and two tented suites, all designed in the traditional safari style. Each accommodation has a personal Maasai attendant and provides stunning views of Kilimanjaro and the surrounding forests and plains. The camp also includes a villa called Kanzi House, which is suitable for larger groups and families who prefer private dining, and a Pool Cottage with a large swimming pool overlooking Kilimanjaro. The main lodge is elegant and welcoming, and the dining experience is exceptional, with a creative Italian twist on local cuisine overseen by Antonella.

                <br/><br/> <strong>Amenities at Campi  Ya Kanzi</strong>
                    <li>Electricity</li>
                    <li> Laundry Room</li>
                
                    <br/><br/> <strong>Room features</strong>
                    <li>En-suite  bathroom</li>
                    <li>Private  veranda </li>



                    <br/><br/> <strong>Activities  at Kampi  Ya Kanzi </strong>

                    <li>Guided walks</li>
                    <li>Game drives</li>
                    <li>Sundowners </li>
                    <li>Excursions </li>



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
                                <img src={Lodge2} alt="Roaring lion" loading="lazy"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={Lodge3} alt="Roaring lion" loading="lazy"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={Chyulu} alt="Roaring lion" loading="lazy"/>
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

export default Kampi;