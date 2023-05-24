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

const Neptune =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Neptune  Mara  Rianta  Luxury  Tented  Camps </h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[500px] px-10" >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                The ideal starting point for an exclusive Safari experience is the Neptune Mara Rianta Luxury Tented Camp, situated in the heart of the Masai Mara. This luxurious camp is surrounded by indigenous vegetation and trees, providing a genuine bush experience. The camp's 20 luxury tents offer spectacular views of the Mara River, which flows gently around the camp and is home to an array of wildlife, including numerous groups of hippos. You can unwind at the Earth & Rain Spa, which offers a range of relaxing and invigorating massages. Alternatively, you can savor an outdoor lunch or evening barbecue by the pool, accompanied by Masai dancing performances (once a month) and talks on the Masai culture.
                <br/><br/>The tents at the camp are very modern and luxurious, and they don't look like ordinary tents. They have a large bathroom and a comfortable sitting area. The tents have a traditional safari design and the riverside wall can be rolled up to enjoy the beautiful view and fresh air. The common areas of the camp are connected by wooden walkways and include a spa, a bar, dining areas with great views, and a small pool where you can have a barbecue in the evening.


                <br/><br/> <strong>Amenities at Neptune  Mara  Rianta  Luxury  Tented  Camps </strong>
                <li>Shared pool</li>
                <li>Wi-Fi</li>
                <li>Library</li>
                <li>Gift shop</li>
                <li>Spa</li>
                <li>Butler service</li>
                <li>Laundry Services</li>


                <br/><br/>Room features 
                <li>Private Veranda </li>
                <li>En-suite bathroom </li>
        

                    <br/><br/> <strong>Activities  at Neptune  Mara  Rianta  Luxury  Tented  Camps </strong>

                    <li>Hot air balloon  safari </li>
                    <li>Sundowners</li>
                    <li>Bush  breakfast </li>
                    <li>Bird watching </li>
                    <li> Game drives </li>
                    <li>Cultural  visits</li>
                    <li>Guided  nature  walk </li>


                </p>
                
                
            </section>
            <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Neptune;