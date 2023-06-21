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

import Lodge2 from '../../../Assets/Untitled-HDR-04.1-1140x600-1.jpg';

import Lodge3 from '../../../Assets/Untitled-HDR-09.1-1140x600-1.jpg';

import Chyulu from '../../../Assets/2020-10-22.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Almanara =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Almanara Luxury Villa</h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[300px] px-10" >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Diani Beach is situated on the east coast of Africa, south of Mombasa, Kenya. It is surrounded by the Indian Ocean's crystal-clear waters and the open plains of the Shimba Hills National Reserve. The coastline stretches for 25 kilometers and is characterized by pristine white sands and verdant forests, creating a tranquil and idyllic atmosphere.

                <br/><br/>Almanara, nestled amidst the towering palm trees and lush gardens, features six Garden Villas and a stunning Boutique Hotel with five bedrooms. Guests can indulge in the luxury of 5-star accommodations, complete with personal chef and maid services, while immersing themselves in the authentic African cultures.
                <br/><br/>The Resort's Private Garden Villas are ideal for both families and couples, as they are designed to cater to their needs. These villas feature a unique blend of local artwork, bespoke furniture, and modern amenities, coupled with traditional African decor. 
                <br/><br/>Each villa is fully air-conditioned and comprises three double bedrooms, each with its own en-suite bathroom, and a downstairs cloakroom. The open-plan dining and living area is perfect for relaxing and dining indoors and opens onto a covered veranda. The central swimming pool is accompanied by a sunken pool bar that serves cocktails and refreshments all day.
                <br/><br/>Casa Bella, it's  boutique  hotel, provide guests with luxury service and stunning views through its 3 Ocean View Rooms and 2 Ocean View Suites. It is decorated with Italian Marble & Mosaic and the open plan layout allows guests to relax in a generous space. The entrance hall leads to a veranda that overlooks the swimming pool and ocean. All suites and rooms are en-suite and equipped with air-conditioning for guest comfort.



                <br/><br/> <strong>Amenities at Almanara Luxury Villa</strong>
                <li>Complementary  Wi-Fi</li>
                <li>Ocean  view</li>
                <li>Infinity  pool</li>
                <li>Butler service </li>
                <li>Gym & Games room</li>


                <br/><br/><strong>Room features </strong>
                <li>Personal chef</li>
                <li>Air conditioned </li>
                <li>Satellite TV </li>
                <li>Minibar</li>
                <li>En-suite  bathroom </li>
                <li>En-suite  double  bedroom </li>
                <li> Private Dining  </li>
                <li>Rooftop  terrace </li>




                    <br/><br/> <strong>Activities  at Almanara Luxury Villa  </strong>

                    <li>Kite & Windsurfing</li>
                    <li>Deep Sea Fishing</li>
                    <li>Scuba Diving</li>
                    <li>Snorkelling & SUP</li>


                </p>
                <div className="relative mt-20 z-[0] lg:mx-[100px]">
                    <Slider {...settings} autoplay arrows>
                        <div>
                            <img src={Lodge1}/>
                        </div>
                        <div>
                        <img src={Lodge2}/>
                        </div>
                        {/* <div>
                        <img src={Lodge3}/>
                        </div> */}
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

export default Almanara;