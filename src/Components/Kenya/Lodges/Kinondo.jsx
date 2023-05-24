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

const Kinondo =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Kinondo Kwetu  </h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[500px] px-10" >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Kinondo Kwetu in Dian boasts of a  private and serene beach surrounded by a sacred forest of baobab trees. Each of the lodge's rooms is unique but all share a Swahili-style reminiscent of the East African coast.
                <br/><br/>The lodge has five cottages and two villas named Mama Taa and Mama Tina. Two new suites have been added, including the honeymoon-designed Andersson Room and the family-friendly Borelius Room. Mama Taa Villa features six suites, three upstairs and three downstairs, with en suite bathrooms and a second room that can be utilized as a sitting room or extra bedroom. Mama Tina is the original house with an en suite double room and two twin rooms with shared bathrooms.
                <br/><br/>There are also five cottages, three of which have en suite double rooms, while one has a double and single room sharing a bathroom, and the other has a double en suite room as well as a double and single room sharing a bathroom. The rooms feature cool white walls, elegant mosquito nets, and hand-carved Swahili furniture.
                <br/><br/>The Andersson Room is a roomy suite with an en suite bedroom, stylish lounge, air conditioning, and balconies overlooking the gorgeous beach and ocean. Finally, the new family suite, the Borelius Room, consists of two large en suite bedrooms with a spacious veranda providing a stunning view of the Indian Ocean.



                <br/><br/> <strong>Amenities at Kinondo Kwetu  </strong>
                <li>Yoga & fitness  facilities </li>
                <li>Bar/ lounge </li>
                <li>Shared pool</li>
                <li>High speed  Internet </li>
                <li>Babysitting</li>
                <li>Laundry  services </li>


                <br/><br/>Room features 
                <li>Air conditioned</li>
                <li>Ensuite Bathrooms</li>
                <li>Private furnished veranda</li>




                    <br/><br/> <strong>Activities  at Kinondo Kwetu   </strong>

                    <li>Horse riding</li>
                    <li>Game drives within Shimba Hills</li>
                    <li>Tennis sports</li>
                    <li>Golfing</li>
                    <li>Cultural  visits  to Kinondo village & Kinondo Kwetu Community works  </li>
                    <li>Shopping / sight-seeing trips to Ukunda or Mombasa </li>
                    <li>Kite surfing</li>
                    <li> Deep-sea fishing  </li>
                    <li> Wind surfing  </li>
                    <li> Water skiing  </li>
                    <li>Boat Excursions to ‘Paradise Lost’ island </li>
                    <li>Scuba diving (ranging from first PADI diving les-son to advanced reef dives and international diving ‘passport’) </li> 
                    <li>Snorkelling  </li>
                    <li>Sailing & Canoeing  </li>
                    <li>Wood-fired Sauna </li>

                </p>
                
                
            </section>
            <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Kinondo;