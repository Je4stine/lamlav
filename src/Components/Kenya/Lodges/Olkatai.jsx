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
import Lodge1 from '../../../Assets/lodge1.jpg';

import Lodge2 from '../../../Assets/lodge4.jpg';

import Lodge3 from '../../../Assets/lodge5.jpg';

import Chyulu from '../../../Assets/totolis1.jpg';

const Olkatai =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Ol Tukai  Lodge</h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[500px] px-10" >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    Ol Tukai is an exceptional location to witness elephants in their natural habitat and is considered one of the top spots in the world for this experience. Visitors can observe the elephants from the terrace of their chalet or any other area on the property, which features wide open fields with well-manicured lawns and gardens surrounded by a picturesque African acacia forest. A subtle fence surrounds the property, enabling you to watch different wildlife as they go about their daily routines. The main lodge is unique in its design and includes a tranquil library, a large deck for outdoor dining, a beautifully crafted Elephant Bar, and a big swimming pool where you can unwind while admiring the clouds on Mount Kilimanjaro. Ol Tukai also offers delightful champagne breakfasts, sunset drinks on the observation hill Noomotio, and lantern-lit forest dinners, making it a special and cherished place.
                   <br/><br/> At Ol Tukai, guests can enjoy the comfort and style of modern twin rooms with breathtaking views of either the wildlife-rich wetlands of Amboseli or the towering Mount Kilimanjaro. Despite its updated facilities, the chalet retains a classic African feel, reminiscent of the traditional game reserve experience


                <br/><br/> <strong>Amenities at Tortilis  Camp</strong>
                    <li>Shared pool</li>
                    <li> Massage services</li>
                    <li> Wi-Fi</li>
                    <li>Room features </li>
                    <li> En-suite bathrooms</li>
                    <li>Private veranda</li>

                    <br/><br/> <strong>Activities  at Tortilis  Camp </strong>

                    <li>Game drives </li>
                    <li>Bird walk</li>
                    <li>Tree planting </li>
                    <li>Swimming</li>
                    <li>Maasai Village visit</li>
                    <li>Table tennis</li>


                </p>
                
                
            </section>
            <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Olkatai;