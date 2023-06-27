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
import Lodge1 from '../../../Assets/Elsas_Kopje_8.png';

import Lodge2 from '../../../Assets/Elsa-s-Cottage---View-from-private-veranda.jpg';

import Lodge3 from '../../../Assets/Elsa-s-Honeymoon-Cottage-2.jpg';

import Lodge4 from '../../../Assets/Elsa-s-Honeymoon-Cottage-outdoor-bath.jpg';

import Lodge5 from '../../../Assets/Elsa-s-Kopje---accommodation---private-house---living-room-2.jpg';

import Lodge6 from '../../../Assets/Elsa-s-Kopje---accommodation---private-house---living-room.jpg';

import Lodge7 from '../../../Assets/Elsa-s-Kopje---activities---views-from-Mughwangho-hill.jpg';

import Chyulu from '../../../Assets/2019-11-30.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowMoreText from "react-show-more-text";

const Elsa =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Elsa's Kopje  </h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[300px] px-10" >
            <ShowMoreText
                    /* Default options */
                    lines={3}
                    more='Show more'
                    less='Show less'
                    anchorClass='pt-[50px]'
                    className='font-[SourceSerifPro-Regular] pt-[50px] text-xl'
                    // onClick={this.executeOnClick}
                    expanded={false}
                    truncatedEndingComponent={"..... "}
                >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Elsa's Kopje is a magnificent and luxurious camp that blends high style, luxury, and the romance of safari. The camp is located on Mughwango Hill and offers breathtaking 360-degree views of Meru National Park, including the majestic Mount Kenya. The hobbit-style cottages are famous for their appearance in the movie "Born Free", which featured the beloved lioness Elsa.

                <br/><br/>The original campsite where George Adamson raised and released orphan lions is located below the lodge, and guests can explore the same stunning surroundings where Elsa and her family once roamed. Activities at Elsa's Kopje include morning and afternoon game drives, walking tours, and fishing. Meru National Park is home to an incredible variety of wildlife, including hippopotamus, lions, large elephant herds, and over 60 black and white rhinoceroses, as well as a diverse bird population.

                <br/><br/>The park also features great forests, giant baobab trees, and rare species such as the caracal, Lesser Kudu, and aardwolf. Returning to the boutique luxury lodge after each expedition is a delightful experience, with options to relax by the infinity pool on the hillside, enjoy a delicious lunch in the open air, or indulge in a massage or reading a book on the private balcony, where curious and harmless hyrax may visit.
                <br/><br/> Elsa's Kopje offers a selection of uniquely luxurious and dreamlike cottages that are built into and around the beautiful red rocks, also known as "kopje" in Afrikaans, and boast spacious bedrooms, sitting rooms, bathrooms, and verandas with stunning views of the expansive plains of Meru National Park. Some cottages even feature romantic outdoor baths for an added touch of luxury. For families on safari, a new, larger cottage with two bedrooms, a living room, and a private deck is available. <br/><br/>Additionally, Elsa's Private House provides a particularly lavish experience with its large dining and sitting rooms, private garden, and infinity swimming pool. The spa offers impeccable massage and mani-pedi treatments to keep your skin glowing and your body feeling great. Dinner at Elsa's Kopje is a truly regal and relaxing experience, with delectable courses served under the starry African sky in the elegantly set garden tables illuminated by candles.
                </p>
                </ShowMoreText>
 
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                <br/><br/> <strong>Amenities at Elsa's Kopje  </strong>
                <li>Shared pool</li>
                <li>Massage  services </li>
                <li>Gift shop </li>
                <li>Laundry  services </li>


                <br/><br/><strong>Room features</strong>
                <li>Room service</li>
                <li>Private Veranda </li>
                <li>En-suite bathroom </li>
                



                    <br/><br/> <strong>Activities  at Elsa's Kopje  </strong>

                    <li> Game drives </li>
                   <li> Guided  walks </li>
                   <li> Bush breakfast </li>
                   <li> Excursions </li>
                   <li> River fishing </li>
                   <li> Honeymoons  and  Weddings </li>


                </p>
                <div className="relative mt-20 z-[0] lg:mx-[150px]">
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
                    <div>
                    <img src={Lodge6}/>
                    </div>
                    <div>
                    <img src={Lodge7}/>
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

export default Elsa;