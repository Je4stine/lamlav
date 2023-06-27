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
import Lodge1 from '../../../Assets/Photo-26-11-2020-17-38-07.jpg';

import Lodge2 from '../../../Assets/6R1A6271-compressor.jpg';

import Lodge4 from '../../../Assets/6R1A6278-compressor.jpg';

import Lodge5 from '../../../Assets/bush-dinner-chyulu.jpg';

import Lodge6 from '../../../Assets/DSC_5294.jpg';

import Lodge3 from '../../../Assets/IMG_0683-compressor-1.jpg';

import Chyulu from '../../../Assets/IMG_1863.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowMoreText from "react-show-more-text";

const Kampi =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Kampi ya Kanzi </h1>
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
                Campi ya Kanzi is a luxury safari camp that offers six thatched roof cottages and two tented suites, all designed in the traditional safari style. Each accommodation has a personal Maasai attendant and provides stunning views of Kilimanjaro and the surrounding forests and plains. 
                <br/><br/> The camp also includes a villa called Kanzi House, which is suitable for larger groups and families who prefer private dining, and a Pool Cottage with a large swimming pool overlooking Kilimanjaro. The main lodge is elegant and welcoming, and the dining experience is exceptional, with a creative Italian twist on local cuisine overseen by Antonella.
            </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                <br/><br/> <strong>Amenities at Campi  Ya Kanzi</strong>
                    <li>Electricity</li>
                    <li> Laundry Room</li>
                
                    <br/><br/> <strong>Room features</strong>
                    <li>En-suite  bathroom</li>
                    <li>Private  veranda </li>



                    <br/><br/> <strong>Activities  at Kampi  Ya Kanzi </strong>

                    <li>Guided walks</li>
                    <li>Game drives</li>
                    <li>Sundowners </li>
                    <li>Excursions </li>



                </p>
                <div className="relative mt-20 z-[0] lg:mx-[80px]">
                <Slider {...settings} autoplay arrows>
                    
                    <div>
                    <img src={Lodge2}/>
                    </div>
                    <div>
                    <img src={Chyulu}/>
                    </div>
                    <div>
                    <img src={Lodge3}/>
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

export default Kampi;