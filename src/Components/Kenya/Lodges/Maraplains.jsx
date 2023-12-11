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
import Lodge1 from '../../../Assets/great-plains-conservation-mara-plains-bridge-600x400.jpg';

import Lodge2 from '../../../Assets/mara-plains-camp-1.jpg.webp';

import Lodge3 from '../../../Assets/mara-plains-camp-11.jpg.webp';

import Lodge4 from '../../../Assets/mara-plains-camp-12.jpg.webp';

import Lodge5 from '../../../Assets/mara-plains-camp-13.jpg.webp';

import Lodge6 from '../../../Assets/mara-plains-camp-2.jpg.webp';

import Chyulu from '../../../Assets/mara-plains-camp-5.jpg.webp';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowMoreText from "react-show-more-text";

const MaraPlains=()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Mara Plains Camp </h1>
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
                Mara Plains Camp provides a unique and intimate safari experience for those who want to get up close and personal with nature. Located in the Maasai Mara eco-system, the luxurious  Campsite  has exclusive access to all the main areas in the region, allowing guests to witness a lot of wildlife, including predatory cats.
                <br/><br/>The camp has only seven rooms and is built to blend with the environment while providing a luxury experience. The rooms are raised on platforms above a creek, surrounded by wildlife, and offer stunning views from the verandahs.
                <br/><br/>The tents at Mara Plains Camp are octagonal in shape and uniquely designed, each decorated with hurricane lanterns, hand-carved furnishings, and warm-toned fabrics that blend in with the natural colors of the bush. Every tent has its own en-suite bathroom, dressing area, and viewing terrace. The luxury tents are built on raised decks and offer the option to open up three of the canvas walls for a closer connection to nature. 
                <br/><br/>The center of the camp consists of three open-air marquee-style tents that serve as a lounge, library, writing room, and dining area. A campfire is located nearby, surrounded by comfortable chairs, perfect for relaxing with a drink and stargazing at night. Mara Plains Camp provides guests with a comfortable and luxurious safari experience, while still being mindful of their surroundings.
                </p>
                </ShowMoreText>


                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Mara Plains Camp  </strong>
                            <li>Butler service</li>
                            <li>Library</li>
                            <li>24-hour electricity</li>
                            <li>Laundry services</li>
                            <li>Gift shop</li>
                        </div>
                        <div>
                                <br/><br/>Room features 
                                <li>Room service</li>
                                <li>Private Veranda </li>
                                <li>En-suite bathroom </li>
                        </div>
                        <div>
                             <br/><br/> <strong>Activities  at Mara Plains Camp   </strong>

                            <li>Hot air balloon  safari </li>
                            <li>Sundowner</li>
                            <li>Bush breakfast </li>
                            <li>Game drives</li>
                            <li>Cultural  visits </li>
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

export default MaraPlains;