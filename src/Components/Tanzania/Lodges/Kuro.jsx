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

const Kuro =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Kuro Tangerine</h1>
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
                Kuro Tarangire provides an exhilarating and authentic wilderness encounter without compromising on comfort or the expertise of its guides. The camp embraces the unhurried rhythm of the bush, allowing guests to fully immerse themselves in the natural wonders of this untamed region in Northern Tanzania. Visitors can truly surrender to the harmonious atmosphere of the wild and feel a deep connection with the untamed surroundings at Kuro Tarangire.
                <br/><br/>The camp consists of six rooms, each featuring an en-suite bathroom with an eco-friendly flush toilet and a bucket shower. The rooms are tastefully decorated with comfortable wooden beds, combining the elements of a tented camp and a thatched wooden structure flawlessly. They are spacious, well-designed, and include a private veranda for enjoying the breathtaking views. Additionally, there is a family tent available, featuring two bedrooms with en-suite bathrooms and a connecting sitting area.
                <br/><br/>The main area of Kuro Tarangire provides a cozy and natural ambiance, furnished with wooden chairs, plush sofas adorned with soft cushions. The thatched roof and exposed walls create a close-to-nature atmosphere, while large windows allow for a panoramic view. Guests can enjoy their meals in the dining area or opt for al fresco dining on the inviting wooden terrace.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Kuro Tarangire</strong>
                            <li>24 hr Electricity </li>
                            <li>Free internet</li>
                            <li>Internet</li>
                            <li>Bar / lounge</li>
                            <li>Restaurant</li>
                            <li>Laundry service</li>
                        </div>

                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>In Room safe</li>
                            <li>En-suite bathrooms</li>
                            <li>En-suite bucket showers</li>
                            <li>En-suite flush toilet</li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Kuro Tarangire  </strong>
                            <li>Sundowners Cocktails </li>
                            <li>Game drives</li>
                            <li> Night drives</li>
                            <li>Bush walks</li>


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

export default Kuro;