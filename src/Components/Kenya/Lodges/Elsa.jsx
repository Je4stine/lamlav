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
            <section className=" bg-white w-[100%] m-auto lg:px-[500px] px-10" >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Elsa's Kopje is a magnificent and luxurious camp that blends high style, luxury, and the romance of safari. The camp is located on Mughwango Hill and offers breathtaking 360-degree views of Meru National Park, including the majestic Mount Kenya. The hobbit-style cottages are famous for their appearance in the movie "Born Free", which featured the beloved lioness Elsa.

                <br/><br/>The original campsite where George Adamson raised and released orphan lions is located below the lodge, and guests can explore the same stunning surroundings where Elsa and her family once roamed. Activities at Elsa's Kopje include morning and afternoon game drives, walking tours, and fishing. Meru National Park is home to an incredible variety of wildlife, including hippopotamus, lions, large elephant herds, and over 60 black and white rhinoceroses, as well as a diverse bird population.

                <br/><br/>The park also features great forests, giant baobab trees, and rare species such as the caracal, Lesser Kudu, and aardwolf. Returning to the boutique luxury lodge after each expedition is a delightful experience, with options to relax by the infinity pool on the hillside, enjoy a delicious lunch in the open air, or indulge in a massage or reading a book on the private balcony, where curious and harmless hyrax may visit.
                <br/><br/> Elsa's Kopje offers a selection of uniquely luxurious and dreamlike cottages that are built into and around the beautiful red rocks, also known as "kopje" in Afrikaans, and boast spacious bedrooms, sitting rooms, bathrooms, and verandas with stunning views of the expansive plains of Meru National Park. Some cottages even feature romantic outdoor baths for an added touch of luxury. For families on safari, a new, larger cottage with two bedrooms, a living room, and a private deck is available. Additionally, Elsa's Private House provides a particularly lavish experience with its large dining and sitting rooms, private garden, and infinity swimming pool. The spa offers impeccable massage and mani-pedi treatments to keep your skin glowing and your body feeling great. Dinner at Elsa's Kopje is a truly regal and relaxing experience, with delectable courses served under the starry African sky in the elegantly set garden tables illuminated by candles.



                <br/><br/> <strong>Amenities at Elsa's Kopje  </strong>
                <li>Shared pool</li>
                <li>Massage  services </li>
                <li>Gift shop </li>
                <li>Laundry  services </li>


                <br/><br/>Room features 
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
                
                
            </section>
            <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Elsa;