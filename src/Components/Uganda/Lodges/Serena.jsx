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
import Lodge1 from '../../../Assets/125258158.jpg';

import Lodge2 from '../../../Assets/38253945.jpg';

import Lodge3 from '../../../Assets/38253946.jpg';

import Lodge4 from '../../../Assets/38253947.jpg';

import Lodge5 from '../../../Assets/38253951.jpg';

import Chyulu from '../../../Assets/2020-10-22.jpg';

import ShowMoreText from "react-show-more-text";

import { useParams, Link } from 'react-router-dom';

import Partners from "../../Partners";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Serena =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif"> Kampala  Serena  Hotel</h1>
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
                The Kampala Serena Hotel is a tranquil and lush haven situated in a prime location at the heart of Kampala. The hotel provides a luxurious 5-star experience, combining elegant accommodations, gourmet cuisine, and an exceptional Conference Centre, positioning it as one of the top business hotels in the city.
                <br/><br/>With 186 guest rooms, including 14 spacious suites, the hotel exudes sophistication and comfort. The suites range from open-plan Executive Suites to a stunning Royal Suite, each designed with attention to detail. Guests can indulge in the beauty of the free-form swimming pool, nestled within rock terraces, wooden bridges, and a cascading waterfall. The Pearl of Africa restaurant offers an unparalleled fine dining experience, while the Champagne Bar provides a perfect setting for relaxation and socializing. 
                <br/><br/>For wellness enthusiasts, the Moroccan-inspired Maisha Spa and Health Club offer a range of amenities, including Swedish saunas, Turkish steam rooms, a plunge pool, and a state-of-the-art fitness center. The Kampala Serena Hotel promises a delightful and inspiring experience, inviting guests to immerse themselves in its wonders.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at  Kampala  Serena  Hotel</strong>
                                <li>24hr Electricity </li>
                                <li>Laundry service </li>
                                <li>Outdoor pool </li>
                                <li>Wifi </li>
                                <li>Fitness center </li>
                                <li>Spa </li>
                                <li>Bar and lounge</li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                                <li>Minibar </li>
                                <li>En-suite bathrooms </li>
                                <li>Bathrobes </li>
                                <li>Flatscreen TV </li>
                                <li>Room service </li>
                                <li>Safe</li>
                                <li>Hairdryers </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at  Kampala  Serena  Hotel  </strong>
                            <li>Massage and wellness </li>
                            <li>Conferencing </li>


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
            <Partners/>
            <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Serena;