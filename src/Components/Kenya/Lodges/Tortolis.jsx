import React, {useState} from "react";
import Navbar from "../../Navbar/Navbar";
import Navreveal from "../../Navbar/Navreveal";
import Footer from "../../Footer/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import Slider from "react-slick";
import Lodge1 from '../../../Assets/tortilis-22.jpg';

import Lodge2 from '../../../Assets/603f42b0-1200x767.jpg';

import Lodge3 from '../../../Assets/a83b8f8b-1200x767.jpg';

import Lodge4 from '../../../Assets/b9378d9c-1200x767.jpg';

import Chyulu from '../../../Assets/af50da6f-1200x767.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import ShowMoreText from "react-show-more-text";


const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className=" inline w-full">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className=" ">
          {isReadMore ? "...read more" : " READ LESS"}
        </span>
      </p>
    );
  };



const Tortolis =()=>{
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
                <div className=" flex flex-col justify-center items-center mt-[100px]">
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Tortolis Camp</h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[300px] px-10" >
              
            <ShowMoreText
                    /* Default options */
                    lines={5}
                    more='READ MORE'
                    less='READ LESS'
                    anchorClass='font-[SourceSerifPro-Regular] pt-[50px] text-red-600'
                    className='font-[SourceSerifPro-Regular] pt-[50px] text-xl'
                    // onClick={this.executeOnClick}
                    expanded={false}
                    truncatedEndingComponent={"..... "}
                >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Tortilis is an exceptional tented camp located on the border of Amboseli National Park in Africa. The camp upholds traditional safari customs while incorporating modern amenities and luxurious touches, which is a hallmark of Lamlav's camping and lodging facilities. <br/><br/>Tortilis stands out for its commitment to sustainability and conservation. It is powered entirely by solar energy, and its solar panels are discreetly hidden from view. Additionally, the camp is a leader in the East African conservancy movement, paying substantial rent to the local Maasai owners of the land and working closely with them to maintain the health of the Kitirua Conservancy, a 30,000-acre wildlife corridor connecting Amboseli with Tanzania's gamelands to the south. Staying at Tortilis offers guests the opportunity to be a part of African conservation solutions, adding to the camp's allure.
                <br/><br/>The Camp has 15 spacious and well-lit tents that offer magnificent views of Mount Kilimanjaro and privacy from one another, creating a cozy atmosphere. The tents are designed to feel like a step back in time, with thatched roof verandas that allow you to gaze at the beautiful mountain and watch the wildlife on the surrounding plains.
                </p>
              </ShowMoreText>
              
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                  <div className=" ">
                    <div>
                        <br/><br/> <strong>Amenities at Tortilis  Camp</strong>
                        <li>Shared pool</li>
                        <li> Massage services only</li>
                    </div>
                    <div>
                        <br/><br/><strong>Room features </strong>
                        <li> En-suite bathrooms</li>
                        <li>Private veranda</li>
                    </div> 
                    <div>
                    <br/><br/> <strong>Activities  at Tortilis  Camp </strong>
                        <li>Game drives </li>
                        <li>Guiding  </li>
                        <li>Guided  walks </li>
                        <li>Bush breakfast  and Sundowners</li>
                        <li>Cultural  visits </li>
                    </div>
                    </div>

                       
                </p>
                


                
                
                <div className="relative mt-20 z-[0] m-auto lg:w-[80%]">
                 <Slider {...settings} autoplay arrows>
                    <div>
                        <img src={Lodge2} className=" object-cover"/>
                    </div>
                    <div>
                    <img src={Lodge3} className=" object-cover"/>
                    </div>
                    <div>
                    <img src={Chyulu} className=" object-cover"/>
                    </div>
                    <div>
                    <img src={Lodge4} className=" object-cover"/>
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

export default Tortolis;