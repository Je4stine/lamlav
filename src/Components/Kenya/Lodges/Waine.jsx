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
import Lodge1 from '../../../Assets/waine.jpg';

import Lodge2 from '../../../Assets/hw-cottage-gallery-19.jpg';

import Lodge3 from '../../../Assets/hw-cottage-gallery-20.jpg';

import Chyulu from '../../../Assets/hw-manyatta-gallery-1.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Waine=()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">House of Waine </h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[300px] px-10" >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                House of Waine is a high-end boutique hotel situated on a spacious 2.5-acre property that combines the sophistication of luxurious living with the essence of contemporary Africa, providing a secluded and tranquil atmosphere. The hotel features 11 bedrooms, each designed to reflect a unique style and ambiance,and  is centrally located near the best of Nairobi's attractions such as the Karen Blixen Muesum, the Kazuri beads, The Giraffe centre and The world famous David Sheldrick Wildlife Trust amongst others.
                <br/><br/>The hotel boasts an ornate design, showcasing the designer's refined taste. The reception area features a stunning chandelier crafted from ostrich eggs, the bar has feather lampshades, and the living room is adorned with oversized leather sofas and sturdy wooden tables. Upstairs, each bedroom has a distinct character, including an Indian room with opulent gold fabrics, a coastal room with bright colors and seashell accents, and several African-themed rooms with bedspreads boasting African prints.

                <br/><br/>While the decor may not appeal to everyone, the hotel provides exceptional comfort. Each bedroom is exceptionally spacious and equipped with air conditioning, satellite television, minibars, safes, and sizable en suite bathrooms.



                <br/><br/> <strong>Amenities at House of Waine  </strong>
                <li>Shared pool </li>
                <li>Complementary  Wi-Fi</li>
                <li>Babysitting </li>
                <li>Massage  and Spa</li>
                <li>Laundry  services </li>
                <li>Gift shop</li>
                <li>Bar</li>


                <br/><br/><strong>Room features </strong>
                <li>En-suite  Bathroom </li>
                <li>Flatscreen TV</li>
                <li>Telephone </li>
                <li>Room service  and Housekeeping </li>
                <li>Minibar</li>
                <li>Hair dryer</li>
                <li>Laptop safe</li>
                <li>Coffee  and tea making facilities </li>



                    <br/><br/> <strong>Activities  at House of Waine  </strong>

                    <li>Biking</li>
                    <li>Swimming </li>
                    <li>Visits  to Karen Blixen Muesum, the Kazuri beads, The Giraffe centre and The world famous David Sheldrick Wildlife Trust amongst others.</li>


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

export default Waine;