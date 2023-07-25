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

const NeptuneNg =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Neptune Ngorongoro  Luxury  Lodge </h1>
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
                Neptune Ngorongoro  Luxury  Lodge  is Situated within 50 acres of untouched Tanzanian wilderness in the Ngorongoro volcanic region, just a short walk from the Game Reserve Gate and a 20-minute drive from the renowned Ngorongoro Crater. 
                <br/><br/>The resort provides a comprehensive experience, including 20 generously sized private log cabins equipped with well-maintained fireplaces, a generous veranda, a restaurant, a bar, and conference facilities, and a comfortable ambiance that evokes the spirit of a classic safari. Guests can unwind and enjoy leisurely moments at the swimming pool or indulge in the Earth & Rain Spa after an exhilarating full-day game drive. In total, the property boasts 20 luxurious suites.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Neptune Ngorongoro  Luxury  Lodge </strong>
                            <li>Shared pool</li>
                            <li>Library</li>
                            <li>Gift shop</li>
                            <li>Safe deposit box at reception</li>
                            <li>Satellite TV in common area</li>
                            <li>Laundry services</li>
                            <li>Butler service</li>
                            <li>Babysitting</li>
                        </div>

                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>En-suite bathrooms</li>
                            <li>WiFi</li>
                            <li>In-room safe deposit box</li>
                            <li>Comfortable living room with armchairs, sofa bed and coffee table</li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Neptune Ngorongoro  Luxury  Lodge   </strong>
                    <li>Sundowner Cocktails </li>
                    <li>Game drives </li>
                    <li>Deep tissue  massage </li>
                    <li> Wine experiences </li>


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

export default NeptuneNg;