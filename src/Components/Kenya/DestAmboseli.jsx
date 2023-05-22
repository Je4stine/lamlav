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


const DestAmboseli =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Amboseli National Park</h1>
                    <img src={AmboseliN} alt="Roaring lion" className=" "/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[500px] px-10" >
                <p className=" font-[SourceSerifPro-Regliar] pt-[50px] text-xl">
                Located in the Southern  part of Kenya, near the boarder with Tanzania,  the Amboseli National Park, is famed for its large herds of elephants and its spectacular views of Mount Kilimanjaro, the highest mountain in Africa, which can be seen in the background. It is only 392Km2 in size, and  an hour's  flight  or four hours drive from Nairobi City.
                <br/>This reserve has been made even more notable through the work and wildlife documentaries of Dr. Cynthia Moss and the Elephant Trust, who have been studying the elephants in Amboseli for more than 30 years. Due to protection from tourists and researchers and support from the local Maasai people, the Amboseli elephants have lived a natural existence, making it one of the few places where you can see elephants of all ages, including the famous old bulls with their long tusks.

                <br/><br/>Amboseli encompasses various habitats, including acacia woodland, rocky thornbush, swamps, marshland, and wide-open plains. The savannah is fed by underground water from Mount Kilimanjaro's ice cap and two permanent springs, which provide a source of water for the large elephant and buffalo herds, as well as resident hippos. Wildebeest, zebra, giraffe, and impala graze the grasslands, and are hunted by predators such as lion, leopard, caracal, cheetah, jackal, spotted hyena, and serval. .

                <br/><br/>In addition, The park's grasslands and wetlands are home to over 400 bird species, and the park is also home to several large swamps, including the Amboseli Swamp, which is an important breeding ground for many species of waterfowl.
                <br/>The park also has a rich cultural history and the Maasai community who live near the park. Visitors can learn about the Maasai's way of life, including their customs, traditions, and beliefs.
                </p>
                <div className=" mb-20 m-auto">
                    <h1 className=" font-[SourceSerifPro-Bold] pt-[50px] text-xl lg:text-4xl m-auto mb-20">Camps and Lodge in Amboselli</h1>
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
                                <h1 className=" absolute top-[20%] left-[40%] text-white font-bold text-2xl">TORTILIS CAMP </h1>
                                <p className=" absolute top-[50%] text-white m-auto left-[10%]">
                                    Tortilis is an exceptional tented camp located on the border of Amboseli National Park in Africa. 
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative z-[7]">
                                <img src={Lodge2} alt="Roaring lion" className="blur-[2px]" loading="lazy"/>
                                <h1 className=" absolute top-[20%] left-[40%] text-white font-bold text-2xl">OL TUKAI LODGE</h1>
                                <p className=" absolute top-[50%] text-white m-auto left-[10%]">
                                    Tortilis is an exceptional tented camp located on the border of Amboseli National Park in Africa. 
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={Lodge3} alt="Roaring lion" className="blur-[2px]" loading="lazy"/>
                                <h1></h1>
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

export default DestAmboseli;