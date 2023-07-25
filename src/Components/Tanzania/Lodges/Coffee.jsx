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

const ArushaCoffee =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Arusha Coffee Lodge</h1>
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
                Arusha Coffee Lodge, is  an exquisite retreat nestled within the lush landscapes of Arusha, Tanzania. This luxurious haven seamlessly blends the allure of nature with the indulgence of refined comfort, offering an unparalleled experience for discerning travelers.
                <br/><br/> As you arrive at the lodge, you are greeted by a breathtaking vista of coffee plantations that stretch as far as the eye can see. The aroma of freshly brewed coffee dances in the air, inviting you to embark on a sensory journey like no other.
                <br/><br/> Arusha Coffee Lodge boasts a range of exceptional amenities to ensure a memorable stay. The main lodge is a stunning oasis, featuring elegant architecture inspired by traditional plantation houses. Step into the opulent lounge, adorned with plush furnishings and a crackling fireplace, creating an ambiance of sophisticated relaxation. Indulge in sumptuous culinary delights at the lodge's renowned restaurant, where locally sourced ingredients are expertly crafted into delectable dishes, paired perfectly with aromatic coffees.
                <br/><br/> Additionally,  the lodge offers luxurious rooms that epitomize comfort and elegance. Each room is a sanctuary of tranquility, exquisitely furnished with a harmonious blend of modern amenities and traditional African accents. Sink into plush bedding, unwind in a spacious en-suite bathroom, and revel in the private veranda overlooking the stunning coffee fields. Immerse yourself in the beauty of nature, with every room providing a serene retreat to rejuvenate both body and soul.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Arusha Coffee Lodge</strong>
                            <li>Business Center </li>
                            <li>Conference facilities</li>
                            <li>Massage & Spa </li>
                            <li>Wifi</li>
                            <li>Outdoor pool</li>
                            <li>Bar / lounge</li>
                            <li>Gift shop</li>
                            <li>Laundry service</li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                                <li>Private  veranda </li>
                                <li>Minibar</li>
                                <li>En-suite bathroom </li>
                                <li>Room service </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Arusha Coffee Lodge  </strong>
                        <li>Coffee   tasting experience </li>
                        <li>Guided  tour  through  the  coffee  plantations </li>
                        <li>Wildlife  safaris to Ngorongoro  Crater  and Serengeti  national park </li>


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

export default ArushaCoffee;