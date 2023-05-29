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
import Lodge1 from '../../../Assets/sasaab.jpg';

import Lodge2 from '../../../Assets/lodge4.jpg';

import Lodge3 from '../../../Assets/lodge5.jpg';

import Chyulu from '../../../Assets/totolis1.jpg';

const Sasaab =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Sasaab  </h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[500px] px-10" >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Sasaab is a remarkably beautiful accommodation with nine spacious and luxurious rooms that offer complete privacy and breathtaking views, including from the en-suite bathroom. Guests can enjoy their own private plunge pool and veranda, providing a comfortable and relaxing spot to observe passing wildlife. 
                <br/><br/>Located on the outskirts of the Samburu National Reserve in Kenya's Northern Frontier District, the lodge is modeled after a Moroccan palace, featuring a bright, airy and pristine white design. The rooms are furnished with elegant four-poster beds adorned with exquisite drapes, low couches decorated with silk pillows, and calming blue lanterns, all contributing to the lodge's serene and tranquil atmosphere.
                <br/><br/>The area is characterized by a rugged landscape adorned with mountains, teeming wildlife, and a fascinating cultural legacy. It boasts an exceptional range of flora and fauna, featuring a remarkable array of animals, such as elephants, cheetahs, wild dogs, and the 'Samburu Special Five' - five species of animals that are exclusive to the region, namely the Beisa oryx, reticulated giraffe, Grevy's zebra, Gerenuk antelope and Somali ostrich. 



                <br/><br/> <strong>Amenities at Sasaab  </strong>
                <li>Spa</li>
                <li>Shared  pool</li>
                <li>Gift shop</li>
                <li>Bush gym</li>
                <li> Wi-Fi</li>
                <li>Massage </li>
                <li>Electricity </li>
                <li> Laundry  services </li>


                <br/><br/>Room features 
                <li>Private Pool</li>
                <li>Private balcony </li>
                <li>En-suite bathroom </li>
              



                    <br/><br/> <strong>Activities  at Sasaab  </strong>

                    <li>Quad biking</li>
                    <li>Sundowners </li>
                    <li>Bush breakfast </li>
                    <li>Cultural  visits  and excursions </li>
                    <li>Helicopter  rides</li>
                    <li>Game drives </li>

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

export default Sasaab;