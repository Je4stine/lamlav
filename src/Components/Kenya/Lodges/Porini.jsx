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

const Porini =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Porini Rhino Camp </h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[500px] px-10" >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Porini Rhino Camp is a luxurious and environmentally friendly safari camp located in a remote valley in Ol Pejeta, Kenya. The camp offers eight spacious and comfortable guest tents, each tastefully furnished and equipped with solar-powered lighting, hot showers, and flush toilets. The newest tent is a family unit consisting of two rooms and a lounge area, making it ideal for families or groups of friends. The camp's design has minimal impact on the environment and includes a wildlife viewing hide that allows guests to safely observe and photograph the local wildlife. The hide is strategically located to provide a close-up view of animals in their natural habitat, allowing guests to fully immerse themselves in the natural surroundings.

                <br/><br/> <strong>Amenities at Porini Rhino </strong>
                    <li>Shared pool</li>
                    <li> Restaurant</li>
                    <li> Bar and Lodges</li>
                

                <br/><br/> <strong>Room features </strong>
                    <li>Laundry  service</li>
                    <li>En-suite  bathroom</li> 


                    <br/><br/> <strong>Activities  at Tortilis  Camp </strong>

                    <li>Lion tracking </li>
                    <li>Rhino Riding </li>
                    <li>Game drives </li>
                    <li>Guided  bush walks</li>
                    <li>Sundowners  and bush breakfast </li>
                    <li>Cultural visits and excursions </li>



                </p>
                
                
            </section>
            <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Porini;