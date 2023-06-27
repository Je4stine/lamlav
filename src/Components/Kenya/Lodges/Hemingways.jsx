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
import Lodge1 from '../../../Assets/Hem1.jpg';

import Lodge2 from '../../../Assets/hemingway-23.jpg';

import Lodge3 from '../../../Assets/hemingway-3.jpg';

import Lodge4 from '../../../Assets/hemingway-5.jpg';

import Lodge5 from '../../../Assets/hemingway-7.jpg';

import Lodge6 from '../../../Assets/hemingway-8.jpg';

import Chyulu from '../../../Assets/Hemingways-2017-02-41.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hemingways =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Hemingways Nairobi  </h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[300px] px-10" >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Tailored and customized for individual preferences, while also ensuring privacy and ease of use.
                <br/><br/>Hemingwa ys Nairobi is a boutique hotel located in the quiet Nairobi suburb of Karen, which is beautifully decorated in a high colonial plantation style. The hotel's amenities are luxurious and of the highest quality, including a premier restaurant, individually decorated spacious rooms, and a sparkling spa. Hemingways prides itself on providing expert, amiable, and 24-hour-constant service, which includes a dedicated butler who is attentive to guests' preferences and needs, such as remembering which type of tea they prefer and how they like their trousers pressed. 
                <br/><br/>The Hotel has 45 spacious and elegantly designed rooms with high ceilings, adorned with calming colors and featuring comfortable beds with canopies. The rooms are a perfect blend of traditional and modern safari elements, with hints of brass and mahogany. The bathrooms are spacious, featuring Italian marble, and the rooms are equipped with amenities such as a personalized bar, full electronic connectivity, a large pop-up TV, and in-room dining services. The hotel staff provides attentive service, with each room assigned a butler to ensure guests' needs are met and exceeded. This dedication to providing the highest level of service and comfort is a testament to Hemingways' commitment to excellence. 



                <br/><br/> <strong>Amenities at Hemingways Nairobi  </strong>
                <li>Butler Services</li> 
                <li>Spa</li>
                <li>Shared pool </li>
               

                <br/><br/> <strong>Room features  </strong>
                <li>Room service</li>
                <li>Private deck </li>
                <li>En-suite bathroom </li>
             


                    <br/><br/> <strong>Activities  at Hemingways Nairobi  </strong>

                    <li>Visit to Karen  Blixen</li> 
                    <li>Visit to David  Sheldrick  wildlife trust </li>
                    <li>Visit  to the Giraffe  Center </li>


                </p>
                
                <div className="relative mt-20 z-[0] lg:mx-[80px]">
                <Slider {...settings} autoplay arrows>
                    <div>
                        <img src={Lodge2}/>
                    </div>
                    <div>
                    <img src={Lodge3}/>
                    </div>
                    <div>
                    <img src={Chyulu}/>
                    </div>
                    <div>
                    <img src={Lodge4}/>
                    </div>
                    <div>
                    <img src={Lodge5}/>
                    </div>
                    <div>
                    <img src={Lodge6}/>
                    </div>
                    </Slider>
                </div>
            </section>
            <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Hemingways;