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
import Lodge1 from '../../../Assets/287074672.jpg';

import Lodge2 from '../../../Assets/282266464.jpg';

import Lodge3 from '../../../Assets/282266488.jpg';

import Lodge4 from '../../../Assets/282266490.jpg';

import Lodge5 from '../../../Assets/282266492.jpg';

import Chyulu from '../../../Assets/2020-10-22.jpg';

import Partners from "../../Partners";

import ShowMoreText from "react-show-more-text";

import { useParams, Link } from 'react-router-dom';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Manyarasecrete =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Manyarasecrete</h1>
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
                Manyara's Secret, which overlooks Lake Manyara's National Park, and is close to Tarangire National Park, is a stunning lodge that offers exceptional service and personalized attention. The lodge provides easy access to these captivating locations. Whether guests desire thrilling adventures or total relaxation, the dedicated team is always ready to enhance their stay with unparalleled service.
                <br/><br/> The lodge is owned by a Dutch couple who developed it based on their fond memories and extensive travels throughout Africa, incorporating influences from the local people and the environment. It provides a cozy and welcoming atmosphere - with villas available for couples and families - featuring private plunge pools and outdoor showers.  
                <br/><br/> At Manyara's Secret, a range of activities awaits guests, ranging from simple pleasures like swimming or enjoying a book on the terrace to thrilling safaris. Guests can even experience unique moments such as showering under the stars or sleeping beneath the iconic Baobab Tree, known as the "upside-down tree of the African plain."
                <br/><br/> After an amazing day, guests can anticipate a delightful menu and indulge in the supreme luxury of their accommodations. The lodge's service goes beyond mere special treatment, allowing guests to dictate their preferences and the timing of their desires.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Manyara's Secret</strong>
                            <li>Plunge pool</li>
                            <li>24-hour security</li>
                            <li>Butler service</li>
                            <li>Laundry service </li>
                            <li>Full body massage</li>
                            <li>WI-FI </li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>En-suite  bathroom </li>
                            <li>Bathrobes </li>
                            <li>Writing  desk</li>
                            <li>In Room safe </li>
                            <li>Room service </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Manyara's Secret </strong>
                            <li>Game drives </li>
                            <li>Sundowners </li>
                            <li>Cultural  visits  </li>
                            <li>Massage services </li>


                </p>
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
                    <Slider {...settings} autoplay arrows>
                        <div>
                            <img src={Lodge4} alt="Lodge"/>
                        </div>
                        <div>
                        <img src={Lodge2} alt="Lodge"/>
                        </div>
                        <div>
                        <img src={Lodge5} alt="Lodge"/>
                        </div>
                        <div>
                        <img src={Lodge3} alt="Lodge"/>
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

export default Manyarasecrete;