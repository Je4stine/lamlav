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
import Lodge1 from '../../../Assets/NRF_490702_Courtyard.jpg';

import Lodge2 from '../../../Assets/NRF_490679_Abraham-suite.jpg';

import Lodge3 from '../../../Assets/NRF_490693_Swimming-Pool.jpg';

import Chyulu from '../../../Assets/NRF_490686_Delamere-Wing---Deluxe.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Norfolk =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Fairmont The Norfolk</h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[300px] px-10" >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                <em>Fairmont The Norfolk provides a serene and tranquil retreat for all visitors to Nairobi, whether they are stopping over for work, or embarking on a Kenyan safari journey. The hotel offers luxurious accommodation in Nairobi, creating a peaceful oasis for all guests.</em>

                <br/><br/>Fairmont The Norfolk, a well-known and beloved landmark that has been around since 1904, has played an important part in Kenya's history, especially as the town of Nairobi grew and developed into a modern city. With a mix of traditional charm and modern design, the hotel is a delightful surprise and provides guests with a stylish and refined haven in the heart of the city. It is conveniently located near key business districts like Gigiri, Westlands, and Upperhill, as well as popular leisure spots and the emerging Nairobi art scene.
                <br/><br/>The hotel has a total of 108 rooms and 17 suites, which are located around peaceful tropical gardens. Guests can can enjoy the heated outdoor swimming pool and the health club, which includes a fitness centre and spa facilities. The rooms are a blend of timeless sophistication and contemporary style, featuring unobtrusive modern technology. Several rooms offer stunning views of the landscaped courtyard from elevated positions. For those looking for an opulent stay that connects with the city's cultural heritage, the signature suites are an exceptional choice.


                <br/><br/> <strong>Amenities at Fairmont The Norfolk</strong>
                <li>Gift shop</li>
                <li>High-speed  Internet </li>
                <li>Babysitting </li>
                <li>Laundry  services </li>
                <li>Infinity  pool</li>
                <li>Butler  service </li>
                <li>Spa</li>
                <li>Fitness  centre </li>
                <li>Electricity </li>


                <br/><br/>Room features 
                <li>En-suite  bathroom </li>
                <li>Minibars</li>
                <li> Satellite  TV </li>
                <li>Wi-Fi</li>
                <li>Hairdryers</li>
                <li>In-room safe deposit box</li>
                <li>Hairdryers</li>



                    <br/><br/> <strong>Activities  at Fairmont The Norfolk  </strong>

                   <li>Events and weddings </li>
                    <li>Visits to Karen  Blixen Muesum,  Daphne Shieldrick  wildlife  trust,  Giraffe Center, Kenya  National  Museums  etc</li>

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
                    <img src={Lodge1}/>
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

export default Norfolk;