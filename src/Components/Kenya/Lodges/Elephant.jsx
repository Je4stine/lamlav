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

const Elephant =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">The Elephant Bedroom Camp </h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[500px] px-10" >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                The Elephant Bedroom Camp provides opulent accommodations amidst stunning natural surroundings. It is situated by the Ewaso Nyiro River, and is covered by a green area of forest consisting of Doum palms and other trees that create shade in the Samburu National Reserve.
                <br/><br/>The Samburu National Reserve is an incredibly beautiful area with dry plains that are crossed by a winding river and set against the stunning backdrop of Africa's mountains, including Mt. Kenya. The camp features 14 spacious tents that are adorned with colorful African decor, providing all the modern amenities such as hot and cold running water, electricity, and even a private plunge pool on the deck. The lounge and dining area has a safari-style decoration, with soft and warm lighting to create a comfortable and relaxing atmosphere. The camp is frequently visited by wild animals like elephants, monkeys, and impalas, and the reserve is home to many lions and leopards, as well as other species native to northern Kenya. Exciting game drives are offered for guests to explore the wildlife and experience the natural beauty 


                <br/><br/> <strong>Amenities at The Elephant Bedroom Camp </strong>
                <li>Wi-fi</li> 
                <li>24hr Electricity</li>
                <li>Shared pool </li>
         
                <br/><br/>Room features 
                <li>Private  deck</li>
                <li>Private pool</li>
                <li>En-suite  bathroom </li>
                <li>Room service </li>




                    <br/><br/> <strong>Activities  at The Elephant Bedroom Camp  </strong>

                    <li>Game drives </li>
                    <li>Bush breakfast</li> 
                    <li>Cultural  visits and excursions </li>
                    <li>Sundowners </li>
                    <li>Guided  bush  walks </li>


                </p>
                
                
            </section>
            <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Elephant;