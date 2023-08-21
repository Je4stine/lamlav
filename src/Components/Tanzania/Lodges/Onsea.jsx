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
import Lodge1 from '../../../Assets/Onsea.jpg';

import Lodge2 from '../../../Assets/60103506.jpg';

import Lodge3 from '../../../Assets/60103540.jpg';

import Lodge4 from '../../../Assets/60103541.jpg';

import Lodge5 from '../../../Assets/60103543.jpg';

import Chyulu from '../../../Assets/2020-10-22.jpg';

import ShowMoreText from "react-show-more-text";

import { useParams, Link } from 'react-router-dom';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Onsea =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Onsea House</h1>
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
                    Onsea House provides a unique combination of charming comfort, picturesque surroundings, exceptional dining experiences, and personalized service. Nestled in a serene and leafy suburb, the hotel provides a picturesque backdrop, with breathtaking views of Arusha and the surrounding valley.
                    <br/><br/>The original farmhouse, known as Onsea, is a treasure trove of character. It features two bedrooms that open onto a lovely terrace, allowing guests to enjoy the scenic beauty. Additionally, it boasts a central swimming pool for relaxation and rejuvenation. Adjacent to it is the more contemporary Machweo section which is more contemporary and includes several honeymoon suites and cottage rooms spread across the hillside. These accommodations offer modern amenities and a stylish ambiance, ensuring a luxurious and comfortable stay.
                    <br/><br/>The main highlight of the hotel is its exquisite dining room and terrace, which overlook a second swimming pool and offer magnificent vistas of Arusha and Mount Meru. It is the perfect spot to unwind with a glass of wine and witness the sunset
                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Onsea House</strong>
                             
                                    <li>Outdoor  pool </li>
                                    <li>24hr Electricity </li>
                                    <li>Laundry  service </li>
                                    <li>Full body massage & Spa </li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                                <li>In Room safe </li>
                                <li> Writing  desk </li>
                                <li>Hairdryer </li>
                                <li> Bathrobes </li>
                                <li>En-suite bathroom </li>
                                <li> Room service </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Onsea House  </strong>
                        <li>Day Trips and Excursions</li>
                        <li>Bird Watching</li>
                        <li>Yoga and Meditation</li>
                        <li>Spa and Wellness</li>
                        <li>Guided Nature Walks</li>
                        <li>Cultural Visits</li>
                        <li>Wine Tasting</li>


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

export default Onsea;