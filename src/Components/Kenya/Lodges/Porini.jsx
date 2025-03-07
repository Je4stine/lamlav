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
import Lodge1 from '../../../Assets/porini-rhino-camp-gallery-image-10-1444934857.jpg';

import Lodge2 from '../../../Assets/porini-rhino-camp-gallery-image-11-1444934868.jpg';

import Lodge3 from '../../../Assets/porini-rhino-camp-gallery-image-12-1444934879.jpg';

import Chyulu from '../../../Assets/porini-rhino-camp-gallery-image-16-1444934915.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowMoreText from "react-show-more-text";

const Porini =()=>{
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
                <div className=" flex flex-col justify-center items-center mt-[100px]">
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Porini Rhino Camp </h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[300px] px-10" >
            <ShowMoreText
                    /* Default options */
                    lines={5}
                    more='READ MORE'
                    less='READ LESS'
                    anchorClass='font-[SourceSerifPro-Regular] pt-[50px] text-red-600'
                    className='font-[SourceSerifPro-Regular] pt-[50px] text-xl'
                    // onClick={this.executeOnClick}
                    expanded={false}
                    truncatedEndingComponent={"..... "}
                >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Porini Rhino Camp is a luxurious and environmentally friendly safari camp located in a remote valley in Ol Pejeta, Kenya. The camp offers eight spacious and comfortable guest tents, each tastefully furnished and equipped with solar-powered lighting, hot showers, and flush toilets. The newest tent is a family unit consisting of two rooms and a lounge area, making it ideal for families or groups of friends. The camp's design has minimal impact on the environment and includes a wildlife viewing hide that allows guests to safely observe and photograph the local wildlife. The hide is strategically located to provide a close-up view of animals in their natural habitat, allowing guests to fully immerse themselves in the natural surroundings.
                </p>
                </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                             <br/><br/> <strong>Amenities at Porini Rhino Camp </strong>
                            <li>Shared pool</li>
                            <li> Restaurant</li>
                            <li> Bar and Lodges</li>

                        </div>
                        <div>
                                <br/><br/> <strong>Room features </strong>
                            <li>Laundry  service</li>
                            <li>En-suite  bathroom</li> 
                        </div>
                        <div>
                            <br/><br/> <strong>Activities  at Porini Rhino Camp </strong>

                                <li>Lion tracking </li>
                                <li>Rhino Riding </li>
                                <li>Game drives </li>
                                <li>Guided  bush walks</li>
                                <li>Sundowners  and bush breakfast </li>
                                <li>Cultural visits and excursions </li>
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
                    <img src={Lodge1}/>
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

export default Porini;