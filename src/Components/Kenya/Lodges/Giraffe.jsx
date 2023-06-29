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
import Lodge1 from '../../../Assets/giraffe.jpg';

import Lodge2 from '../../../Assets/613a6c222429c5127f83ef15_Nelson-Travel-Giraffe-Manor-1.jpg';

import Lodge3 from '../../../Assets/613a6c229ecd8b59d188cafb_Nelson-Travel-Giraffe-Manor-5.jpg';

import Lodge4 from '../../../Assets/613a6df04e3ebaf8b33adc96_GiraffeManor.jpg';

import Chyulu from '../../../Assets/637faf40805ff81f2a0b6e6c_Giraffe-Manor-2.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowMoreText from "react-show-more-text";

const Giraffe =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">The Giraffe  Manor </h1>
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
                
                Giraffe Manor, owned by The Safari Collection, is a popular and luxurious boutique hotel located in the Langata suburb of Nairobi. 
                <br/><br/>The manor is situated in a 12-acre private land surrounded by 140 acres of indigenous forest. It is a historic building that dates back to the 1930s and is reminiscent of the era when people came to East Africa for safaris. The hotel has a stately façade, beautiful interiors, green gardens, sunny terraces, and courtyards that give it a classic and elegant appeal. 
                <br/><br/>One of the unique attractions of Giraffe Manor is its resident herd of Rothschild's giraffes that often visit the hotel and poke their necks into the windows in search of food before retreating back to the forest. 
                <br/><br/>The hotel has twelve rooms, one of which is named after the author Karen Blixen. Guests can book Giraffe Manor for a night or as part of a customized Kenya safari package offered by The Safari Collection.
                </p>
                </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" lg:flex justify-between">
                        <div>
                            <br/><br/> <strong>Amenities at The Giraffe  Manor  </strong>
                            <li>Massage & Spa</li>
                            <li>Laundry  services </li>
                            <li>Gym </li>
                            <li>Library </li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>En-suite  bathroom </li>
                            <li>Wi-Fi</li>
                            <li>Hairdryers </li>
                            <li>Coffee/Tea facilities</li>
                            <li>Coffee/Tea facilities</li>
                        </div>
                    </div>
             

                    <br/><br/> <strong>Activities  at The Giraffe  Manor   </strong>

                    <li>Bucket-list breakfast </li>
                    <li>Horseriding in Nairobi </li>
                    <li>Visits to Nairobi  National  Park, Daphne  Shieldrick  wildlife  trust,  Giraffe  Center,  Karen  Blixen  Muesum etc</li>
                    <li> Manor Games  of croquet, boules or chess</li>


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

export default Giraffe;