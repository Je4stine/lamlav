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
import Lodge1 from '../../../Assets/329065050.jpg';

import Lodge2 from '../../../Assets/445151509.jpg';

import Lodge3 from '../../../Assets/427295557.jpg';

import Lodge4 from '../../../Assets/427292005.jpg';

import Lodge5 from '../../../Assets/378314575.jpg';

import Chyulu from '../../../Assets/2020-10-22.jpg';

import ShowMoreText from "react-show-more-text";

import { useParams, Link } from 'react-router-dom';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Mantis =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Mantis Akagera Game Lodge</h1>
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
                Mantis Akagera Game Lodge boasts well-appointed rooms that provide a comfortable and elegant retreat after a day of wildlife exploration. Each room features en-suite bathrooms, allowing guests to relax and rejuvenate in style. The rooms also offer breathtaking views of the surrounding park and the tranquil lake, creating a serene atmosphere that enhances the overall stay.
                <br/><br/>The lodge's amenities are designed to cater to the needs and desires of its discerning guests. The on-site restaurant serves delicious meals, showcasing both local and international flavors, and guests can savor their culinary delights while enjoying the stunning views of Lake Ihema and the smaller Lake Shikani. The swimming pool provides a refreshing oasis where guests can take a dip and unwind amidst the natural beauty of the surroundings. Additionally, the lodge's bar area offers a relaxed and cozy setting to socialize and enjoy a variety of beverages.
                <br/><br/>Mantis Akagera Game Lodge offers an array of activities that allow guests to fully immerse themselves in the wonders of Akagera National Park. The game drives organized by the lodge provide thrilling opportunities to encounter a diverse range of wildlife, including elephants, buffaloes, giraffes, zebras, and numerous bird species. The experienced guides share their knowledge and expertise, ensuring an informative and exciting safari experience. Guests can also embark on boat safaris, gliding along the serene waters of Lake Ihema, where they can spot hippos, crocodiles, and an abundance of birdlife. 
                <br/><br/>Whether exploring the park's vast savannahs or discovering the secrets of the lake, Akagera Game Lodge offers a memorable adventure that showcases the beauty and wildlife of Akagera National Park.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Mantis Akagera Game Lodge</strong>
                            <li>Restaurant </li>
                            <li>Outdoor pool </li>
                            <li>Laundry  service </li>
                            <li>Tennis court </li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>En-suite bathroom </li>
                            <li>In Room  safe</li>
                            <li>Hairdryers </li>
                            <li>Complementary Wi-Fi </li>
                            <li>Satellite TV </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Mantis Akagera Game Lodge  </strong>
                            <li>Game drives</li>
                            <li>Boating </li>
                            <li>Birding </li>


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
            <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Mantis;