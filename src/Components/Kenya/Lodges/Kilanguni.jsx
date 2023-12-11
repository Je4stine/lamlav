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
import Lodge1 from '../../../Assets/5cae9dee.jpg';

import Lodge2 from '../../../Assets/42a40483.jpg';

import Lodge3 from '../../../Assets/833d7db7.jpg';

import Lodge4 from '../../../Assets/f8aada82.jpg';

import Lodge5 from '../../../Assets/fa58f997.jpg';

import Chyulu from '../../../Assets/283406fb.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowMoreText from "react-show-more-text";


const Kilanguni =()=>{
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
                <div className=" flex flex-col justify-center items-center mt-[100px]">
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Kilaguni Serena Safari Lodge</h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[300px] px-10" >
            <ShowMoreText
                    /* Default options */
                    lines={5}
                    more='READ MORE'
                    less='READ LESS'
                    anchorClass='font-[SourceSerifPro-Regular] pt-[50px] text-red-600'
                    className='font-[SourceSerifPro-Regular] pt-[50px] text-xl'
                    // onClick={this.executeOnClick}
                    expanded={false}
                    truncatedEndingComponent={"..... "}
                >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Kilaguni Serena Safari Lodge, located in the breathtaking Chyulu Hills and surrounded by Mount Kilimanjaro and the lush green volcanic landscapes of Tsavo West National Park, offers a peaceful and comfortable escape into stunning natural beauty and exciting adventures. Upon arrival, guests will be captivated by the lodge's classic stone design and views of wildlife such as elephants and buffalo drinking at the nearby water hole.

                <br/><br/>The lodge features 56 guest rooms, including 5 spacious suites, ranging from standard rooms to deluxe suites and the luxurious Kilaguni Suite. Start your day with a bush breakfast or enjoy a traditional sundowner cocktail at Lion Rock. Relax on the garden sundeck by the pool, savor locally sourced seasonal cuisine in the dining room with views of the water hole, and unwind in a day bed at the stone-built bar while admiring the stunning views of the Chyulu Hills. 
                <br/><br/>The lodge can arrange unforgettable experiences such as private game drives in Tsavo West National Park with a dedicated guide, soothing massages, or trips to see the hippos and aquatic life at Mzima Springs.

                <br/><br/>Embrace the wild and ancient beauty of Tsavo West, the land of lions and lava, at Kilaguni Serena Safari Lodge.
                </p>
                </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities  at Kilaguni  Serena  Safari  Lodge </strong>
                            
                            <li>Swimming  pool  and sundeck </li>
                            <li>Wi-Fi</li>
                            <li>Gift shop</li>
                            <li>Stand alone  conference  facilities </li>
                            <li> Spa facilities </li>
                            <li> Honeymoon  suite </li>
                            <li>Library </li>
                        </div>
                        <div>
                            
                        <br/><br/> <strong>Room features</strong>
                                <li>Housekeeping  services </li>
                                <li> En-suite  bathrooms </li>
                                <li>Private  veranda </li>
                        </div>
                        <div>
                            <br/><br/> <strong>Activities  at Kilaguni  Serena  Safari  Lodge.  </strong>

                            <li>Game drives </li>
                            <li>Roaring  rocks </li>
                            <li>Field excursions  with visits  to Mzima Springs  and to the Shetani  caves and lava flows </li>
                            <li>Lion Rock breakfast </li>
                            <li> Bush  barbeque  dinner </li>
                            <li>Bubbly  Sundowner at Lion Rock</li>
                        </div>
                    </div>

                   


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
                    <img src={Lodge4}/>
                    </div>
                    <div>
                    <img src={Lodge5}/>
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

export default Kilanguni;