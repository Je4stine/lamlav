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
import Lodge1 from '../../../Assets/retreat_intro_3.jpg';

import Lodge2 from '../../../Assets/beachhouse_family_safaris_4.jpg';

import Lodge3 from '../../../Assets/beachhouse_family_safaris_6.jpg';

import Lodge4 from '../../../Assets/beachhouse_fresh_meals_1.jpg';

import Lodge5 from '../../../Assets/beachhouse_fresh_meals_5.jpg';

import Chyulu from '../../../Assets/2020-10-22.jpg';

import ShowMoreText from "react-show-more-text";

import { useParams, Link } from 'react-router-dom';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Matemwe =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Matemwe Lodge</h1>
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
                Nestled atop a rocky ledge, with a captivating view of a shallow lagoon adorned with coral reefs, Matemwe Lodge offers a tranquil haven on the serene northeastern coast of Zanzibar Island.
                <br/><br/> Without doubt, Matamwe lodge is the perfect retreat for unwinding and escaping the daily hustle and bustle. Whether you prefer lazing in a hammock or exploring the depths of the Indian Ocean through diving, Matemwe Lodge guarantees an unparalleled island getaway.
                <br/><br/>The Matemwe Beach, which is secluded and tucked away on the island's northeastern coast, enjoys an ideal location facing the magnificent Mnemba Atoll, renowned for its exceptional diving and snorkeling sites. Surrounded by some of the finest beaches in Zanzibar, the lodge offers privacy and exclusivity, making it one of the quieter and more prestigious destinations on the island.
                <br/><br/>A short 30-minute boat ride transports guests to Mnemba Island, home to a world-famous coral reef teeming with breathtaking marine life. Here, diving and snorkeling enthusiasts are treated to an extraordinary spectacle, with a high probability of encountering turtles, wild dolphins, and an array of colorful reef fish darting amongst the coral formations.
                <br/><br/>In addition, Matemwe Lodge is conveniently located just an hour's drive from Stone Town, allowing for easy day trips to explore the winding streets of this historic town and venture to all corners of the fascinating island.
                <br/><br/>The lodge's 12 chalets, constructed using local materials and enveloped by lush gardens, offer a serene retreat. Each chalet boasts a private veranda furnished with a hammock and sofa, providing an ideal spot to relax and admire the breathtaking views of the glistening Indian Ocean. The accommodation includes six triple-bed chalets, and two chalets are equipped with private plunge pools. The spacious bathrooms feature deep bathtubs and walk-in showers, while all beds are draped with mosquito nets.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Matemwe Lodge</strong>
                                <li>Outdoor pool.</li>
                                <li>Wi-Fi </li>
                                <li>Gift Shop </li>
                                <li>Full body massage</li>
                        </div>

                        <div>
                            <li>Private balcony </li>
                            <li>Housekeeping </li>
                            <li>Safe</li>
                            <li>En-suite bathroom </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Matemwe Lodge  </strong>
                        <li> Hiking </li>
                         <li>Horseback rides </li>
                        <li>Canoeing </li>
                        <li>Snorkeling </li>
                        <li>Deep sea fishing </li>
                        <li>Historical stone town tour </li>
                        <li>Spa and Wellness </li>


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

export default Matemwe;