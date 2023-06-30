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
import Lodge1 from '../../../Assets/The-Safari-Collection-Sasaab-AFRICA-SAFARI-CAMP-spa.jpg';

import Lodge2 from '../../../Assets/The-Safari-Collection-Sasaab-Pool.jpg';

import Lodge3 from '../../../Assets/The-Safari-Collection-Sasaab-Reception.jpg';

import Chyulu from '../../../Assets/The-Safari-Collection-Sasaab-SAMBURU-SAFARI-CAMP-Reception.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowMoreText from "react-show-more-text";

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
            <section className=" bg-white w-[100%] m-auto lg:px-[300px] px-10" >
            <ShowMoreText
                    /* Default options */
                    lines={5}
                    more='Show more'
                    less='Show less'
                    anchorClass='font-[SourceSerifPro-Regular] pt-[50px] text-red-600'
                    className='font-[SourceSerifPro-Regular] pt-[50px] text-xl'
                    // onClick={this.executeOnClick}
                    expanded={false}
                    truncatedEndingComponent={"..... "}
                >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Sasaab is a remarkably beautiful accommodation with nine spacious and luxurious rooms that offer complete privacy and breathtaking views, including from the en-suite bathroom. Guests can enjoy their own private plunge pool and veranda, providing a comfortable and relaxing spot to observe passing wildlife. 
                <br/><br/>Located on the outskirts of the Samburu National Reserve in Kenya's Northern Frontier District, the lodge is modeled after a Moroccan palace, featuring a bright, airy and pristine white design. The rooms are furnished with elegant four-poster beds adorned with exquisite drapes, low couches decorated with silk pillows, and calming blue lanterns, all contributing to the lodge's serene and tranquil atmosphere.
                <br/><br/>The area is characterized by a rugged landscape adorned with mountains, teeming wildlife, and a fascinating cultural legacy. It boasts an exceptional range of flora and fauna, featuring a remarkable array of animals, such as elephants, cheetahs, wild dogs, and the 'Samburu Special Five' - five species of animals that are exclusive to the region, namely the Beisa oryx, reticulated giraffe, Grevy's zebra, Gerenuk antelope and Somali ostrich. 
                </p>
                </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" lg:flex justify-between">
                        <div>
                             <br/><br/> <strong>Amenities at Sasaab  </strong>
                            <li>Spa</li>
                            <li>Shared  pool</li>
                            <li>Gift shop</li>
                            <li>Bush gym</li>
                            <li> Wi-Fi</li>
                            <li>Massage </li>
                            <li>Electricity </li>
                            <li> Laundry  services </li>
                        </div>
                        <div>
                                <br/><br/><strong>Room features </strong>
                        <li>Private Pool</li>
                        <li>Private balcony </li>
                        <li>En-suite bathroom </li>
                            
                        </div>
                    </div>

                    <br/><br/> <strong>Activities  at Sasaab  </strong>

                    <li>Quad biking</li>
                    <li>Sundowners </li>
                    <li>Bush breakfast </li>
                    <li>Cultural  visits  and excursions </li>
                    <li>Helicopter  rides</li>
                    <li>Game drives </li>

                </p>
                
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
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

export default Sasaab;