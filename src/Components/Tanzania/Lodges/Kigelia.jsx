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
import Lodge1 from '../../../Assets/628b581829afba6c79b12ddb_Kigelia-Ruaha-23.jpg';

import Lodge2 from '../../../Assets/628b580f4b6badd51a7907ae_Kigelia-Ruaha-2.jpg';

import Lodge3 from '../../../Assets/628b580aa4d23a662ac28750_Kigelia-Ruaha-0.jpg';

import Lodge4 from '../../../Assets/628b581d29afba6c74b13088_Kigelia-Ruaha-20.jpg';

import Lodge5 from '../../../Assets/627983ccbbacf438bb85b980_KigeliaRuaha12.jpg';

import Chyulu from '../../../Assets/2020-10-22.jpg';

import ShowMoreText from "react-show-more-text";

import { useParams, Link } from 'react-router-dom';

import Partners from "../../Partners";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Kigelia =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Kigelia Ruaha</h1>
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
                    Kigelia Ruaha is an exceptional camp located in the prime game region of Ruaha National Park, offering a remarkable opportunity to explore the vast surrounding wilderness. 
                    <br/><br/>The camp comprises only six spacious tents that are situated beneath the majestic Sausage Tree, from which it takes its name. Its charm and unpretentiousness allow the natural beauty of the surrounding landscape to take center stage. Sleeping in these canvas tents while listening to the enchanting calls of leopards and awakening to the gentle sunlight filtering through the bush creates a truly magical experience.
                    <br/><br/>Additionally, your en-suite bathroom provides the convenience of a hot safari-style bucket shower and a flush toilet, allowing you to enjoy the unique experience under the starry sky.
                    <br/><br/>After an exhilarating day of wildlife sightings, you can unwind by the campfire with your sundowner drink, taking in the captivating silhouettes of baobab trees and the twinkling stars above. Delicious yet simple meals can be enjoyed around the fire or in a separate dining tent.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Kigelia Ruaha</strong>
                            <li>24hr Electricity </li>
                            <li>Laundry  service</li>
                            <li>Outdoor fireplace</li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>Ensuite bathrooms </li>
                            <li>Safari bucket showers </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Kigelia Ruaha  </strong>
                            <li>Game drives </li>
                            <li>Bush walks </li>
                            <li>Sundowner  Cocktails  </li>
                  
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

export default Kigelia;