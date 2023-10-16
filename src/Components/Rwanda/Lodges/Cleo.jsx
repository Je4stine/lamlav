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
import Lodge1 from '../../../Assets/DSC_0064-1024x682.jpg';

import Lodge2 from '../../../Assets/DSC_9862-1024x682.jpg';

import Lodge3 from '../../../Assets/DSC_9875-1024x682.jpg';

import Lodge4 from '../../../Assets/DSC_9887-1024x682.jpg';

import Lodge5 from '../../../Assets/DSC_9925-1024x682.jpg';

import Chyulu from '../../../Assets/2020-10-22.jpg';

import ShowMoreText from "react-show-more-text";

import { useParams, Link } from 'react-router-dom';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Partners from "../../Partners";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Cleo =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif"> Cleo Lake Kivu Hotel:</h1>
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
                From the hillside  overlooking  Lake Kivu, the brand new haven Cleo Lake Kivu Hotel offers privacy while being your launchpad into boundless adventures and relaxation. 
                <br/><br/>The hotel provides a wide range of amenities to ensure a comfortable and enjoyable stay on the shores of Lake Kivu. The spacious and well-appointed rooms feature modern decor and are equipped with amenities such as air conditioning, flat-screen TVs, minibars, and private bathrooms. Guests can choose from a variety of room options, including suites and cottages, some of which offer stunning views of the lake.
                <br/><br/>The hotel also provides a plethora of activities to cater to every interest. Guests can indulge in water sports like swimming, kayaking, and paddleboarding, or explore the lake on boat tours. Fishing enthusiasts can try their luck in the rich waters of Lake Kivu. For those who prefer land-based activities, Cleo Lake Kivu Hotel provides opportunities for hiking and nature walks, allowing guests to explore the surrounding hills and forests. Cultural tours are also available, providing an opportunity to immerse in the local traditions and customs.

                <br/><br/>Additionally, Cleo Lake Kivu Hotel boasts various amenities to enhance the guest experience. The resort features a spa where guests can relax and rejuvenate with a range of treatments. There are also dining options available, serving delicious local and international cuisine. For those who want to stay active, the hotel may offer facilities such as a fitness center, tennis courts, or volleyball courts. Whether guests seek adventure, relaxation, or cultural immersion, Cleo Lake Kivu Hotel offers a memorable stay with its luxurious amenities, comfortable rooms, and a diverse range of activities to enjoy.
                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at  Cleo Lake Kivu Hotel:</strong>
                                <li>Wifi </li>
                                <li>Bar & Restaurant </li>
                                <li>Laundry service </li>
                                <li>Butler service </li>
                                <li>Fitness center </li>
                                <li>Spa</li>
                                <li>Outdoor fireplace </li>
                                <li>Infinity pool </li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                                <li>Air conditioning</li>
                                <li> Safe</li>
                                <li>Private beach </li>
                                <li> Private deck </li>
                                <li>Satellite TV </li>
                                <li>En-suite bathrooms </li>
                                <li>Bathrobes </li>
                                <li>Minibar </li>
                                <li>Room service </li>
                                <li>Housekeeping </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at  Cleo Lake Kivu Hotel:  </strong>
                        <li>Canoeing </li>
                        <li>Boating</li>
                        <li>Cycling </li>
                        <li>Hiking and Nature  walks</li>
                        <li>Spa and Wellness </li>
                        <li>Birdwatching excursions </li>
                        <li>Cultural Tours</li>
                        <li> Fishing </li>


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
            <Partners/>
            <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Cleo;