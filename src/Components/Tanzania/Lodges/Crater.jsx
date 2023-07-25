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

import { useParams, Link } from 'react-router-dom';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Crater =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Ngorongoro  Crater  Lodge</h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
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
                Crater Lodge, positioned on the edge of the crater, is the most luxurious accommodation in Tanzania. It exudes grandeur with its adorned walls, lively fires, extravagant chandeliers, and impeccably dressed staff.
                <br/><br/>The lodge consists of three distinct camps: North Camp, South Camp, and Tree Camp. Each camp has its own main lodge and adjacent rooms. Inside these lodges, you will discover lavish living rooms adorned with plush velvet sofas, luxurious rugs, antique tables adorned with sherry decanters, crystal glasses, bronze statues, and old books. Adjacent to the living room, you'll find a dining room that gleams with pristine white tablecloths, polished silverware, and menus offering exquisite three-course meals. Notably, every room in the lodge features a magnificent Maasai-made chandelier.
                <br/><br/>Nestled on the rim of the crater, all the rooms at Crater Lodge are spacious and exquisitely decorated. A wood-paneled hallway leads to a combined bedroom and living room. Leather armchairs are arranged in front of the crackling fireplace, while king-size velvet beds with elaborate headboards dominate the room. Luxurious silk curtains drape from the expansive windows, creating an opulent ambiance. The bathrooms feature both baths and showers, and outside, a large veranda provides breathtaking views of the crater.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Ngorongoro  Crater  Lodge</strong>
                            <li>24 hr Electricity </li>
                            <li> Library</li>
                            <li>Gift shop</li>
                        </div>

                        <div>
                            <br/><br/><strong>Room features </strong>
                           <li>Private deck</li>
                           <li>En-suite bathrooms</li>
                           <li>In Room massage </li>
                           <li>WiFi </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Ngorongoro  Crater  Lodge  </strong>
                        <li>Safari  game drives </li>
                        <li>SCultural  visits </li>
                        <li>SCrater  floor  banquets </li>
                        <li>SGuided  walks/hikes</li>
                        <li>SLion Impact at the Kopelion Conservation.</li>


                </p>
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
                    <Slider {...settings} autoplay arrows>
                        <div>
                            <img src={Lodge4}/>
                        </div>
                        <div>
                        <img src={Lodge2}/>
                        </div>
                        <div>
                        <img src={Lodge5}/>
                        </div>
                        <div>
                        <img src={Lodge3}/>
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

export default Crater;