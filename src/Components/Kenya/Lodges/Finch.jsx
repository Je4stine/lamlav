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
import Lodge1 from '../../../Assets/images (2).jpeg';

import Lodge2 from '../../../Assets/finch_hattons_camp_fire_at_night_0071c13acc7ebc5a56d7604277c286f3.jpg';

import Lodge3 from '../../../Assets/finch-hattons-tsavo-double-suite-deck-1024x576.jpg';

import Lodge4 from '../../../Assets/finch-hattons-tsavo-observation-deck-1024x576.jpg';

import Lodge5 from '../../../Assets/finch-hattons-tsavo-star-gazing-1024x576.jpg';

import Chyulu from '../../../Assets/FinchHattons-Camp8.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowMoreText from "react-show-more-text";

const Finch =()=>{
    const [colorChanged, setColorChanged]= useState(false);

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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Finch Hatton's Luxury Camp</h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[300px] px-10" >
            <ShowMoreText
                    /* Default options */
                    lines={7}
                    more='Show more'
                    less='Show less'
                    anchorClass='pt-[50px]'
                    className='font-[SourceSerifPro-Regular] pt-[50px] text-xl'
                    // onClick={this.executeOnClick}
                    expanded={false}
                    truncatedEndingComponent={"..... "}
                >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Finch Hattons is a tented safari camp that embodies luxury and a deep appreciation for the natural beauty of Tsavo. The camp is situated in a secluded location, giving the feeling of being completely disconnected from the outside world. It is a place where guests can immerse themselves in the vast and diverse landscape, surrounded by the many wildlife species that inhabit the area.<br/><br/>This magical destination is situated within 35 acres of land in the southwestern corner of Tsavo West, and covers 9000 square kilometers of unspoiled African wilderness. 
                <br/><br/> The area is characterized by natural fresh water springs, rainforests, volcanoes, lava flows, and a diverse range of flora and fauna. While staying at this camp, guests will have the opportunity to see elephants, lions, leopards, hippos, crocodiles, buffalos, and a wide variety of birds, among other treasured wildlife.
                <br/><br/> The Camp features 17 luxurious tents that blend the beauty of Africa with sophistication and comfort. These tents are elevated to provide stunning views of the surrounding area and ensure complete privacy for guests. The open-plan design of the tents allows for a refreshing flow of air from the nearby springs, bringing the sights and fragrances of the wilderness directly to you
                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                <br/><br/> <strong>Amenities  at Finch  Hatton’s  Luxury </strong>
                    <div className=" lg:flex justify-between" >
                        <div>
                            <li>Exceptional conferencing facilities</li>
                            <li>Wi-fi</li>
                            <li>Infinity  pool</li>
                            <li>Library  and Research  centre </li>
                           
                        </div>
                        <div>
                            <li>Chyulu  Spa & massage </li>
                            <li>Fitness  center </li>
                             <li>Airstrip  with helipad </li>
                            <li>Safari  shop</li>
                           
                        </div>
                    </div>
                    
                     <br/><br/><strong>Room  features </strong>
                            <li>Private  veranda </li>
                            <li>En-suite  bathrooms </li>
                            <li>Battler  service </li>
                    


                    <br/><br/> <strong>Activities  at Finch Hattons </strong>

                    <li>Day & night  game drives</li>
                    <li>Bush walks and crater climbs</li>
                    <li>Bush breakfast</li>
                    <li>Tsavo explorer adventures</li>
                    <li>Cultural visits & excursions </li>
                    <li>Sundowners</li>
                </p>
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
                <Slider {...settings} autoplay arrows>
                    <div>
                        <img src={Lodge4}/>
                    </div>
                    {/* <div>
                    <img src={Lodge2}/>
                    </div> */}
                    <div>
                    <img src={Lodge3}/>
                    </div>
                    {/* <div>
                    <img src={Chyulu}/>
                    </div> */}
                    <div>
                    <img src={Lodge5}/>
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

export default Finch;