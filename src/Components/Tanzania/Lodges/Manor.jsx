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
import Lodge1 from '../../../Assets/manor-at-ngorongoro-6.jpg';

import Lodge2 from '../../../Assets/manor-at-ngorongoro-9.jpg';

import Lodge3 from '../../../Assets/manor-at-ngorongoro-11.jpg';

import Lodge4 from '../../../Assets/manor-at-ngorongoro-12.jpg';

import Lodge5 from '../../../Assets/manor-at-ngorongoro-2.jpg';

import Chyulu from '../../../Assets/2020-10-22.jpg';

import ShowMoreText from "react-show-more-text";

import { useParams, Link } from 'react-router-dom';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Manor =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Manor At Ngorongoro</h1>
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
                The Manor at Ngorongoro offers an ideal setting to unwind and appreciate the stunning natural beauty of its gardens and the hills covered in coffee plants. Situated in northwest Tanzania, this unique safari lodge combines East African hospitality with a blend of Afro-European architecture and design. 
                <br/><br/>With its 9 luxurious cottages (comprising 18 suites), a family cottage, and a grand Manor House, it stands as one of the pioneering lodges to create a harmonious fusion of old-world charm and traditional African elements. Positioned next to the renowned Ngorongoro conservation area and encompassing a sprawling 1500-acre Arabica coffee plantation, The Manor evokes the elegance of a sophisticated farmstead in the Cape Dutch architectural style.
                <br/><br/>The Stable Cottage at The Manor at Ngorongoro is a separate family cottage located behind the riding stables. It provides a private and comfortable accommodation option for families or groups of friends. Guests can enjoy breakfast in the nearby courtyard if requested. The cottage includes a small dining area, lounge, and fireplace, creating a cozy atmosphere for intimate meals. 
                <br/><br/>The ground floor features a luxurious Master Bedroom, a Twin Bedroom, and individual bathrooms with Victorian baths, rain showers, and fireplaces. There is also a shared Family Lounge area for gathering and planning activities. Upstairs, there is a dedicated children's area with a Twin Room, a toddler-friendly bathroom, and a satellite TV Playroom. 

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Manor At Ngorongoro</strong>
                                <li>Shared pool</li>
                                <li>24hr Electricity </li>
                                <li>Laundry services</li>
                                <li>Butler service</li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                                <li>WiFi</li>
                                <li>En-suite bathrooms</li>
                                <li>Bathrobes</li>
                                <li> Private deck/veranda</li>
                                <li>In-room hairdryers</li>
                                <li>In-room safe deposit box</li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Manor At Ngorongoro  </strong>
                            <li>Game drives in the Ngorongoro Crater and lake Manyara </li>
                            <li>Lunch at the Ngorongoro Crater  floor </li>
                            <li> Horse riding</li>
                           <li> Sundowner Cocktails</li>
                            <li>Deep  tissue  massage </li>


                </p>
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
                    <Slider {...settings} autoplay arrows>
                        <div>
                            <img src={Lodge4}/>
                        </div>
                        <div>
                        <img src={Lodge2}/>
                        </div>
                        <div>
                        <img src={Lodge5}/>
                        </div>
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

export default Manor;