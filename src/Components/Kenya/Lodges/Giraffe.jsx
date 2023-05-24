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
import Lodge1 from '../../../Assets/lodge1.jpg';

import Lodge2 from '../../../Assets/lodge4.jpg';

import Lodge3 from '../../../Assets/lodge5.jpg';

import Chyulu from '../../../Assets/totolis1.jpg';

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
            <section className=" bg-white w-[100%] m-auto lg:px-[500px] px-10" >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                The Giraffe  Manor offers you a chance unwind and de-stress  in a peaceful and calming place in the middle of a residential area in Nairobi.
                <br/><br/>Giraffe Manor, owned by The Safari Collection, is a popular and luxurious boutique hotel located in the Langata suburb of Nairobi. The manor is situated in a 12-acre private land surrounded by 140 acres of indigenous forest. It is a historic building that dates back to the 1930s and is reminiscent of the era when people came to East Africa for safaris. The hotel has a stately façade, beautiful interiors, green gardens, sunny terraces, and courtyards that give it a classic and elegant appeal. One of the unique attractions of Giraffe Manor is its resident herd of Rothschild's giraffes that often visit the hotel and poke their necks into the windows in search of food before retreating back to the forest. The hotel has twelve rooms, one of which is named after the author Karen Blixen. Guests can book Giraffe Manor for a night or as part of a customized Kenya safari package offered by The Safari Collection.



                <br/><br/> <strong>Amenities at The Giraffe  Manor  </strong>
                <li>Massage & Spa</li>
                <li>Laundry  services </li>
                <li>Gym </li>
                <li>Library </li>


                <br/><br/>Room features 
                <li>En-suite  bathroom </li>
                <li>Wi-Fi</li>
                <li>Hairdryers </li>
                <li>Coffee/Tea facilities</li>
                <li>Coffee/Tea facilities</li>




                    <br/><br/> <strong>Activities  at The Giraffe  Manor   </strong>

                    <li>Bucket-list breakfast </li>
                    <li>Horseriding in Nairobi </li>
                    <li>Visits to Nairobi  National  Park, Daphne  Shieldrick  wildlife  trust,  Giraffe  Center,  Karen  Blixen  Muesum etc</li>
                    <li> Manor Games  of croquet, boules or chess</li>


                </p>
                
                
            </section>
            <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Giraffe;