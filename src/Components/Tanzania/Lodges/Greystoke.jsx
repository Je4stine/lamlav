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
import Lodge1 from '../../../Assets/62b1bb8e048e2ace60499d7e_Greystoke-Mahale.jpg';

import Lodge2 from '../../../Assets/62b097a9606a5a2743127908_GreystokeMahale09.jpg';

import Lodge3 from '../../../Assets/62bc1e913a7da53bfb8fd6a1_Greystoke-Mahale.jpg';

import Lodge4 from '../../../Assets/62b097f75e851214892b450b_Greystoke Mahale4.jpg';

import Lodge5 from '../../../Assets/62b0984ec7e362020253fdb7_GreystokeMahale26.jpg';

import Chyulu from '../../../Assets/2020-10-22.jpg';

import ShowMoreText from "react-show-more-text";

import { useParams, Link } from 'react-router-dom';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Greystoke =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Greystoke Mahale</h1>
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
                Greystoke Mahale, located on the shores of Lake Tanganyika, offers an ideal retreat for adventurous individuals seeking to explore the Mahale Mountains. 
                <br/><br/>The camp features six meticulously designed, thatched cottages called bandas. Each banda has its own private wooden deck nestled amidst the adjacent forest, providing a tranquil and secluded space for relaxation. With its open front design, guests can appreciate the breathtaking surroundings right from their rooms. For an even better vantage point, there is an upper deck on the bandas where you can enjoy the view. 
                <br/><br/>Inside, the rooms are equipped with en-suite bathrooms, complete with invigorating showers and readily available hot water. You'll also find secure storage and a writing desk for your convenience. 
                <br/><br/>The communal areas include a spacious thatched cottage overlooking the beach, serving as a dining and relaxation area throughout the day. Adjacent to the water's edge, there's a cozy bar perched on the rocks, perfect for enjoying sundowners.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Greystoke Mahale</strong>
                                <li>Library</li>
                                <li>Restaurant </li>
                                <li>Beach </li>
                                <li>Laundry  service </li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                                <li>Ensuite  Bathrooms </li>
                                <li>In Room safe</li>
                                <li>Writing  desk </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Greystoke Mahale </strong>
                                <li>Chimpanzee Tracking </li>
                                <li>Hiking</li>
                                <li>Bird watching</li>
                                <li>Dhow trips </li>
                                <li>Kayaking</li>
                                <li>Fishing</li>
                                <li>Snorkelling</li>


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

export default Greystoke;