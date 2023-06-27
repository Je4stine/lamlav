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
import Lodge1 from '../../../Assets/Elewana-Kifaru-2018-35.1.jpg';

import Lodge2 from '../../../Assets/Elewana-Kifaru-2018-117.1.jpg';

import Lodge3 from '../../../Assets/Elewana-Kifaru-2018-165.1.jpg';

import Chyulu from '../../../Assets/Elewana-Kifaru-2018-5.1.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowMoreText from "react-show-more-text";


const Kifaru =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Kifaru House</h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[300px] px-10" >
            <ShowMoreText
                    /* Default options */
                    lines={3}
                    more='Show more'
                    less='Show less'
                    anchorClass='pt-[50px]'
                    className='font-[SourceSerifPro-Regular] pt-[50px] text-xl'
                    // onClick={this.executeOnClick}
                    expanded={false}
                    truncatedEndingComponent={"..... "}
                >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Visiting Elewana Kifaru House means experiencing the serene and timeless atmosphere of Africa.The Camp offers luxurious accommodations in a bush setting, with friendly staff and a comfortable lounge, bar, and dining area. Guests can enjoy breakfast on the terrace with views of the waterhole, or relax by the infinity pool with distant plain views. 
                <br/><br/>Set in the  beautiful  and lush gardens, that are home  to many  birds,  are five lovely cottages with thatched roofs, each having nicely furnished bedrooms with comfortable four-poster beds and large private bathrooms
                <br/><br/>With a library and log fires, guests can enjoy cosy comfort during cool evenings and the peaceful African night.
                </p>
                </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                <br/><br/> <strong>Amenities  at  Kifaru House  </strong>
                    <li>Infinity Pool</li>
                    <li>Wi-fi</li>
                    <li>Infinity  pool</li>
                    <li>Library </li>
                    <li>Bar</li>

                    <br/><br/> <strong> Room features </strong>
                    <li>En-suite  bathrooms  with Victorian-style bath </li>
                    <li>Room service </li>
                    <li>Private  veranda </li>

                    

                    <br/><br/> <strong>Activities  at Kifaru  House</strong>

                    <li>Game drives</li>
                    <li>Guided walks</li>
                    <li>Horse and Camel Riding</li>
                    <li>Bush breakfast  and Sundowners </li>
                    <li>Cultural  and Conservancy  visits</li>
                    <li>Ngare Ndare forest visit</li>
                    <li>Honeymoon  and Weddings </li>

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

export default Kifaru;