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
import Lodge1 from '../../../Assets/Kleins-camp-serengeti-welcome-1024x576.jpg';

import Lodge2 from '../../../Assets/Kleins-camp-serengeti-romantic-dinner-1024x576.jpg';

import Lodge3 from '../../../Assets/Kleins-camp-serengeti-guest-room-verandah-1024x576.jpg';

import Lodge4 from '../../../Assets/Kleins-camp-serengeti-game-drive-1024x576.jpg';

import Lodge5 from '../../../Assets/Kleins-360-Sept-2020-1024x576.jpg';

import Chyulu from '../../../Assets/2020-10-22.jpg';

import ShowMoreText from "react-show-more-text";

import { useParams, Link } from 'react-router-dom';


import Partners from "../../Partners";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Beyond =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">&Beyond Klein's Camp</h1>
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
                Situated on the periphery of the Kuka Hills, Klein's Camp offers magnificent vistas overlooking the bordering valley of the Serengeti and the Masai Mara. The camp embraces the essence of the wild terrain with a vintage safari ambiance. 
                <br/><br/>The guest areas feature stone interiors that reveal awe-inspiring panoramas, while the warmth of open fireplaces adds comfort. The bar and sitting area are tastefully furnished, boasting stone floors and plush leather armchairs that entice guests to unwind and relax.
                <br/><br/>Comprising of only ten cozy cottages constructed from local stone and thatch, Klein's Camp exudes an intimate atmosphere. The cottages are enhanced by rich wooden floors and timeless decor. Each cottage boasts an en-suite bathroom and a private veranda, allowing guests to soak in the extraordinary valley views while enjoying their preferred beverages from the personal minibar.                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at &Beyond Klein's Camp</strong>
                            <li>Infinity Pool </li>
                            <li>Sauna</li>
                            <li>Bar &Restaurant</li>
                            <li>Airport transportation</li>
                            <li>Massage</li>
                            <li>Butler service</li>
                            <li>Laundry service</li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                                <li>En-suite bathroom </li>
                                <li>E Pirate  deck </li>
                                <li>EWriting  desk</li>
                                <li>ESafe</li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at &Beyond Klein's Camp  </strong>
                        <li>Game drives </li>
                        <li>Witness  great  migration </li>
                        <li> Birdwatching </li>
                        <li>Guided  bush walks</li>
                        <li>Sundowners </li>
                        <li>Romantic  bush breakfast </li>


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

export default Beyond;