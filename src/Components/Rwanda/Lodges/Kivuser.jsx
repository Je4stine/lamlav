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
import Lodge1 from '../../../Assets/hr-dsc-5630.jpg';

import Lodge2 from '../../../Assets/hr-dsc-5550.jpg';

import Lodge3 from '../../../Assets/hr-dsc-5555.jpg';

import Lodge4 from '../../../Assets/hr-dsc-5569.jpg';

import Lodge5 from '../../../Assets/hr-dsc-5582.jpg';

import Chyulu from '../../../Assets/2020-10-22.jpg';

import ShowMoreText from "react-show-more-text";

import { useParams, Link } from 'react-router-dom';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Partners from "../../Partners";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Kivuser =()=>{
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
                <div className=" flex flex-col justify-center items-center mt-[100px]">
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Lake Kivu Serena Hotel</h1>
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
                With its prime location in Gisenyi, luxurious accommodations, and excellent amenities,  the Lake Kivu Serena Hotel offers a tranquil retreat for those seeking relaxation and a memorable stay on the shores of Lake Kivu.The hotel boasts well-appointed rooms and suites, tastefully designed with modern amenities and comfort in mind. Guests can enjoy spacious and elegantly decorated accommodations, each offering a private balcony or terrace to take in the stunning panoramic views of the lake and surrounding landscapes.
                <br/><br/>With attention to detail and a focus on guest comfort, Lake Kivu Serena Hotel ensures a memorable stay in their thoughtfully designed and well-equipped rooms.The rooms feature elegant decor with a blend of contemporary and Rwandan influences, creating a sophisticated ambiance. Each room is equipped with modern amenities such as comfortable beds, a private balcony or terrace with stunning lake views, air conditioning, flat-screen TVs, minibars, and complimentary Wi-Fi. The en-suite bathrooms are spacious and equipped with modern fixtures, offering a serene environment for guests. 
                <br/><br/>The additional hotel  facilities - and services - such as:  a swimming pool overlooking the lake, a spa offering rejuvenating treatments, and a fitness center for those who wish to stay active, further enhance the stay of its guests.
                <br/><br/>Lastly, dining options at Lake Kivu Serena Hotel are diverse, with a selection of restaurants and bars serving delectable Rwandan and international cuisine. Guests can savor their meals while enjoying the serene ambiance and scenic vistas.
       </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Lake Kivu Serena Hotel</strong>
                                    <li>24hr Electricity</li> 
                                    <li>Wifi</li>
                                    <li>Laundry service </li>
                                    <li>Babysitting </li>
                                    <li>Fitness center </li>
                                    <li>Gift shop </li>
                                    <li>Business Center </li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                                <li>Private deck/veranda </li>
                                <li>In Room safe </li>
                                <li>En-suite bathroom </li>
                                <li>Room service </li>
                                <li>Air conditioning </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Lake Kivu Serena Hotel  </strong>
                                <li>Swimming </li>
                                <li>Water Sports</li>
                                <li>Cultural Experiences</li>
                                <li>Spa and Wellness </li>
                                <li>Culinary Delights</li>
                                <li> Nature Walks </li>


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

export default Kivuser;