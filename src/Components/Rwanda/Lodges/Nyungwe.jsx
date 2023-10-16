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
import Lodge1 from '../../../Assets/462528547.jpg';

import Lodge2 from '../../../Assets/462528510.jpg';

import Lodge3 from '../../../Assets/462528524.jpg';

import Lodge4 from '../../../Assets/479081622.jpg';

import Lodge5 from '../../../Assets/479081623.jpg';

import ShowMoreText from "react-show-more-text";

import Partners from "../../Partners";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Nyungwe =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">One&Only Nyungwe House </h1>
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
                One&Only Nyungwe House offers a tranquil and elegant setting for guests to immerse themselves in the natural beauty of the Nyungwe Forest National Park. The lodge features spacious and beautifully designed suites and villas, providing a serene haven with stunning views of the forest and tea fields. Each accommodation is equipped with modern amenities, including plush bedding, en-suite bathrooms, and private terraces or balconies.
                <br/><br/>Guests at One&Only Nyungwe House can indulge in a range of amenities and services. The lodge boasts a spa, where visitors can unwind with rejuvenating treatments and therapies inspired by traditional Rwandan practices. The infinity pool provides a serene spot to relax and take in the panoramic views. Culinary delights await at the on-site restaurant, which serves a variety of gourmet dishes showcasing local flavors and fresh ingredients.
                <br/><br/>Additionally, the lodge offers a diverse selection of activities  to explore the wonders of Nyungwe Forest National Park. Guests can participate in guided chimpanzee trekking, where they have the opportunity to track and observe these fascinating primates in their natural habitat. Guided hikes and nature walks allow guests to discover the rich biodiversity of the forest, while birdwatching excursions unveil the park's remarkable avian population. Additionally, cultural experiences and visits to nearby tea plantations provide insights into the local communities and Rwandan heritage.
                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at One&Only Nyungwe House </strong>
                                <li>Wifi </li>
                                <li>Business Center </li>
                                <li>Restaurant </li>
                                <li>Laundry service </li>
                                <li>Fitness center </li>
                                <li>Spa and Wellness </li>
                                <li>Fool body massage</li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>En-suite bathroom </li>
                            <li>Private balconies </li>
                            <li>Minibar </li>
                            <li>Safe</li>
                            <li>Air conditioning </li>
                            <li> Bathrobes </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at One&Only Nyungwe House   </strong>
                            <li>Guided Chimpanzee trekking </li>
                            <li>Guided hikes and nature walks </li>
                            <li>Birdwatching excursions </li>
                            <li>Cultural experiances and visits to tea fields. </li>


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

export default Nyungwe;