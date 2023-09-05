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

import Lodge2 from '../../../Assets/SVNP_ROOM_Kwitonda_Lodge_Exterior_Ross_Couper_3.jpg';

import Lodge3 from '../../../Assets/SVNP_ROOM_Kwitonda_Lodge_Bedroom_Ross_Couper_1.jpg';

import Lodge4 from '../../../Assets/SVNP_LODGE_Kwitonda_Lodge_Akarabo_Nursery_Farm_To_Table_Ross_Couper_5__2_.jpg';

import Lodge5 from '../../../Assets/SVNP_ROOM_Kwitonda_Lodge_Lounge_Ross_Couper_2.jpg';
import Lodge6 from '../../../Assets/Kwitonda_slider_1.jpg';
import Lodge7 from '../../../Assets/Kwitonda_slider_2.jpg';




import ShowMoreText from "react-show-more-text";




import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Singita =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Singita Kwitonda Lodge </h1>
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
                Singita Kwitonda Lodge  is a remarkable luxury lodge set amidst the stunning landscape of wetlands and meadows, offering breathtaking views of Sabyinyo, Gahinga and Muhabura volcanoes. The lodge's architecture seamlessly integrates with the environment, utilizing local materials and showcasing a contemporary interpretation of traditional design elements. From suspended structures to green-roofed cabins, the lodge's layout is visually striking and harmonious. Inside, the curated interiors feature handcrafted details, layered textures, and a rich color palette, creating a reflective and interactive space.
                <br/><br/>The lodge's central hub serves as a gathering place with indoor and outdoor living areas, dining spaces, a fire pit, an interactive kitchen, and a wine cellar. Private one-bedroom suites and a two-bedroom suite offer luxurious amenities like indoor and outdoor showers, in-room massage areas, dressing rooms, and heated plunge pools. Guests can also indulge in the on-site spa, enjoy fine dining and wine experiences, and/or partake in gorilla trekking, guided hikes, and cultural visits to immerse themselves in the region's natural beauty and wildlife. 
                <br/><br/>For an exclusive experience, Kataza House, a four-bedroom villa, provides additional features such as a cinema room, fitness center, and a small cellar. Singita Kwitonda Lodge offers a captivating blend of luxurious accommodations, exceptional architecture, and breathtaking views, providing an unforgettable stay in Rwanda's remarkable natural surroundings.
                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Singita Kwitonda Lodge </strong>
                            <li>24hr Electricity </li>
                            <li>Boutique & Gallary store.</li>
                            <li>Private outdoor  pool.</li>
                            <li>Conservation room.</li>
                            <li>Laundry service </li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>En-suite bathroom </li>
                            <li>Hairdryers </li>
                            <li>In Room massage treatments </li>
                            <li> Wifi</li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Singita Kwitonda Lodge   </strong>
                            <li>Stargazing</li>
                            <li>Movies</li>
                            <li>Swimming</li>
                            <li>Birding</li>
                            <li>Cycling</li>
                            <li>Akarabo Nursery and garden tour</li>
                            <li>Golden monkey treks </li>
                            <li>Gorilla trekking </li>
                            <li>Yoga &:wellnes</li>
                            <li>Hiking & Walking </li>
                            <li>Wine experiences </li>


                </p>
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
                    <Slider {...settings} autoplay arrows>
                        <div>
                            <img src={Lodge4} alt="Lodges"/>
                        </div>
                        <div>
                        <img src={Lodge2} alt="Lodges"/>
                        </div>
                        <div>
                        <img src={Lodge5} alt="Lodges"/>
                        </div>
                        <div>
                        <img src={Lodge3} alt="Lodges"/>
                        </div>
                        <div>
                        <img src={Lodge6} alt="Lodges"/>
                        </div>
                        <div>
                        <img src={Lodge7} alt="Lodges"/>
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

export default Singita;