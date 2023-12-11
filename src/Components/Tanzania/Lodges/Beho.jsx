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
import Lodge1 from '../../../Assets/Pool2.jpg';

import Lodge2 from '../../../Assets/lounge2.jpg';

import Lodge3 from '../../../Assets/lounge4.jpg';

import Lodge4 from '../../../Assets/Dinner2.jpg';

import Lodge5 from '../../../Assets/Dinner3.jpg';

import Chyulu from '../../../Assets/2020-10-22.jpg';

import ShowMoreText from "react-show-more-text";

import Partners from "../../Partners";

import { useParams, Link } from 'react-router-dom';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Beho =()=>{
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
                <div className=" flex flex-col justify-center items-center mt-[100px]">
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Beho Beho Camp</h1>
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
                Beho Beho, the first camp established in what is now known as Nyerere National Park (formerly Selous Game Reserve), stands out for its unique location away from the banks and flood plains of the Rufiji River. Instead, it is nestled in the elevated highlands, allowing guests to enjoy refreshing breezes that give the camp its name. 
                <br/><br/>While often referred to as a "private camp," Beho Beho has always cherished its distinctiveness and privileged position, making it one of the most enchanting destinations in African safaris.
                <br/><br/>Beho Beho doesn't fit the traditional image of a camp, as it features individual cottages made of stone and thatched with palm leaves, rather than the more common tented accommodations associated with camps. At the same time, it cannot be classified strictly as a safari lodge either, given its smaller scale. 
                <br/><br/>With only eight cottages—four on each side of the main house—it evokes the sense of a personal residence situated amidst the African wilderness.The primary suite at Beho Beho features an open front design, although it can be closed off with a canvas curtain for privacy during the night. Inside, guests will find cozy chairs, a spacious bed protected by a mosquito net, a traditional Zanzibari day-bed, a writing desk, elegant Persian carpets, and a telescope mounted on a tripod for game spotting. Additionally, the suite includes a separate dressing room, a bathroom, and an outdoor shower, allowing guests to enjoy a refreshing bathing experience in the open air.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Beho Beho Camp</strong>
                            <li>Wifi</li>
                            <li>Outdoor pool</li>
                            <li>Bar / lounge</li>
                            <li>Laundry service</li>
                            <li>Restaurant</li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>En-suite bathroom </li>
                            <li>Telescope  for game spotting </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Beho Beho Camp  </strong>
                        <li>Game drives </li>
                        <li>Guided walks </li>
                        <li>visit Lake Tagalala </li>
                        <li>Boat rides</li>


                </p>
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
                    <Slider {...settings} autoplay arrows>
                        <div>
                            <img src={Lodge4} alt="Loges"/>
                        </div>
                        <div>
                        <img src={Lodge2} alt="Loges"/>
                        </div>
                        <div>
                        <img src={Lodge5} alt="Loges"/>
                        </div>
                        <div>
                        <img src={Lodge3} alt="Loges"/>
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

export default Beho;