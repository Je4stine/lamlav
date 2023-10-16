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
import Lodge1 from '../../../Assets/Almanara-2018-15.jpg';

import Lodge2 from '../../../Assets/Almanara1.jpg';

import Lodge3 from '../../../Assets/Almanara2.jpg';

import Lodge4 from '../../../Assets/Almanara3.jpg';

import Lodge5 from '../../../Assets/Almanara4.jpg';

import Chyulu from '../../../Assets/2020-10-22.jpg';

import ShowMoreText from "react-show-more-text";

import Partners from "../../Partners";

import { useParams, Link } from 'react-router-dom';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Sasakwa =()=>{
    const [colorChanged, setColorChanged]= useState(false);
    // const { campId} = useParams();
    // const item = LODGES.find((item) => item.campId1  === campId);

    
    
  
    // if (!item) {
    //   return <div>Item not found</div>;
    // }



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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Sasakwa Hill Lodge</h1>
                    <img src="https://cdn.audleytravel.com/1050/750/79/257948-sasakwa-hill-lodge.webp" alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[300px] px-10" >
            <ShowMoreText
                    /* Default options */
                    lines={4}
                    more='READ MORE'
                    less='READ LESS'
                    anchorClass='font-[SourceSerifPro-Regular] pt-[50px] text-red-600'
                    className='font-[SourceSerifPro-Regular] pt-[50px] text-xl'
                    // onClick={this.executeOnClick}
                    expanded={false}
                    truncatedEndingComponent={"..... "}
                >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Sasakwa Hill Lodge stands as one of the most opulent establishments in East Africa. Perched atop a hill, this lodge offers breathtaking vistas of the Serengeti plains, making it an exceptional spot for game viewing, particularly during the Great Migration.
                <br/><br/>The lodge boasts a selection of air-conditioned guest cottages, each adorned with antique furnishings, exquisite crystal vases filled with roses, and timeless artwork, creating an ambiance reminiscent of the 1920s. This nostalgic atmosphere permeates the entire lodge, with its splendid dining and drawing rooms, a vintage wine cellar, a tennis court, an archery pavilion, a croquet lawn, and even an equestrian center dedicated to housing polo ponies and thoroughbred horses.
                <br/><br/>Sasakwa presents an ideal destination for those seeking a safari experience immersed in the captivating elegance and style of the colonial era.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Sasakwa Hill Lodge</strong>
                            <li>24hr Electricity </li>
                            <li>Laundry servicFree High Speed Internet (WiFi)</li>
                            <li>Infinity Pool</li>
                            <li>Fitness Center with Gym / Workout Room</li>
                            <li>Tennis court</li>
                            <li>Bar / lounge</li>
                            <li>Restaurant</li>
                            <li>Spa</li>
                            <li>Butler service</li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>En-suite bathroom </li>
                            <li>Private veranda</li>
                            <li>In Room electronic  safe</li>
                            <li>Air conditioning</li>
                            <li>Room service</li>
                            <li>Minibar</li>
                            <li>Refrigeratorli</li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Sasakwa Hill Lodge  </strong>
                        <li>Cultural  visits </li>
                        <li>Yoga</li>
                        <li>Balloon  safari </li>
                        <li>Tennis </li>
                        <li>Game drives</li>
                        <li>Romantic  bush  dinner/breakfast </li>
                        <li>Guided  safari  walks</li>
                        <li>Wine experiences</li>


                </p>
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
                    <Slider {...settings} autoplay arrows>
                        <div>
                            <img src="https://cdn.audleytravel.com/1050/750/79/139251-bathroom-sasakwa-hill-lodge-serengeti-national-park.webp" alt="Lodge"/>
                        </div>
                        <div>
                        <img src="https://cdn.audleytravel.com/1050/750/79/257946-sasakwa-hill-lodge.webp" alt="Lodge"/>
                        </div>
                        <div>
                        <img src="https://cdn.audleytravel.com/1050/750/79/257947-sasakwa-hill-lodge.webp" alt="Lodge"/>
                        </div>
                        <div>
                        <img src="https://cdn.audleytravel.com/1050/750/79/257944-sasakwa-hill-lodge.webp" alt="Lodge"/>
                        </div>
                    </Slider>
                </div>
                
            </section>
            <Partners/>
            <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Sasakwa;