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
import Lodge1 from '../../../Assets/Janv 23 (3).png';

import Lodge2 from '../../../Assets/Property gallery 975X600 (1).jpg';

import Lodge3 from '../../../Assets/Property gallery 975X600 (2).jpg';

import Chyulu from '../../../Assets/Property gallery 975X600 (5).jpg';

import Lodge4 from '../../../Assets/Property gallery 975X600 (6).jpg';

import Lodge5 from '../../../Assets/Property gallery 975X600 (9).jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowMoreText from "react-show-more-text";


const FairmountMt =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">The Fairmont Mount Kenya Safari Club  </h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[300px] px-10" >
            <ShowMoreText
                    /* Default options */
                    lines={6}
                    more='READ MORE'
                    less='READ LESS'
                    anchorClass='font-[SourceSerifPro-Regular] pt-[50px] text-red-600'
                    className='font-[SourceSerifPro-Regular] pt-[50px] text-xl'
                    // onClick={this.executeOnClick}
                    expanded={false}
                    truncatedEndingComponent={"..... "}
                >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                The Fairmont Mount Kenya Safari Club is a well-known vacation spot that offers numerous activities, but one of its most unique and thrilling features is the animal orphanage run by the William Holden Wildlife Foundation. This sanctuary serves as a home and provides care to young wildlife, some of which have grown accustomed to human interaction and can be fed and played with by guests. 
                <br/><br/>The Club was established by the famous actor William Holden over half a century ago and has since transformed into a lavish retreat for prominent individuals in fields such as politics, cinema, and theatre. The Club's picturesque setting, including Africa's second-highest mountain, has made it a favoured destination for notable figures such as Winston Churchill, Lord Mountbatten, Clark Gable, and John Wayne.
                <br/><br/> The lounge walls of the Club are adorned with black and white photographs that suggest the interesting discussions that may have taken place in the past when famous figures like Winston Churchill and Lord Mountbattan would visit and talk politics while smoking cigars. The Trophy Room has mounted heads of animals like lions, buffalos, and zebras, adding to the overall ambiance.

                <br/><br/> The luxurious rooms at the Club have been renovated to perfection by Fairmont, offering amenities such as woodburning fireplaces, private verandas, and comfortable furniture. The rooms provide all the necessary comforts to feel like a home away from home, including hairdryers, minibars, and large rainshowers.
                </p>
            </ShowMoreText>
                
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at The Fairmont Mount Kenya Safari Club </strong>
                            <li>24-hour electricity</li>
                            <li>Spa</li>
                            <li>Laundry services</li>
                            <li>Butler service</li>
                            <li>Fitness room/gym</li>
                            <li>Shared pool</li>
                            <li>Library</li>
                            <li>Laundry  services </li>
                            <li>Babysitting </li>
                            <li>Gift shop</li>
                            <li> Medical  Services </li>
                            <li>Massage  and Spa</li>
                            <li>Conference  center</li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>En-suite bathrooms</li>
                            <li>WiFi</li>
                            <li>Minibar</li>
                            <li>Private deck/veranda</li>
                            <li>Air conditioning</li>
                            <li>Hairdryers</li>
                        </div>
                        <div>
                                 <br/><br/> <strong>Activities  at The Fairmont Mount Kenya Safari Club </strong>

                                <li>Golfing </li>
                                <li>Fishing </li>
                                <li>Equator  ceremony </li>
                                <li>Horse riding</li>
                                <li>Biking</li>
                                <li>Excursions </li>
                                <li>Game drives </li>
                                <li>Bird watching </li>
                                <li>Honeymoons  and  Weddings </li>
                        </div>
                    </div>
               
                   


                </p>
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
                <Slider {...settings} autoplay arrows>
                    <div>
                        <img src={Lodge2}/>
                    </div>
                    <div>
                    <img src={Lodge3}/>
                    </div>
                    <div>
                    <img src={Chyulu}/>
                    </div>
                    <div>
                    <img src={Lodge4}/>
                    </div>
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

export default FairmountMt;