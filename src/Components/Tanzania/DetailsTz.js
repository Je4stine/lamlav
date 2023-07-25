import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Footer from "../Footer/Footer";
import AmboseliN from '../../Assets/Zebra.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ImageGallery from 'react-image-gallery';
import Slider from "react-slick";
import ShowMoreText from "react-show-more-text";
import { useParams, Link } from 'react-router-dom';
import DATA from './data';
import DETAILS from "./detailsdata";

import Lodge1 from '../../Assets/Amboseli11.jpg';

import Lodge2 from '../../Assets/Amboselli22.jpg';

import Lodge3 from '../../Assets/Amboselli33.jpg';

import Lodge4 from '../../Assets/Amboselli44.jpg';

import Tortolis from '../../Assets/274932-tortilis-camp-amboseli-national-park.jpg';

import Olka from '../../Assets/ol-tukai-lodge3.jpg';

const DetailsTz = () => {
  const [colorChanged, setColorChanged] = useState(false);
  const { itemId} = useParams();
  const item = DETAILS.find((item) => item.id === parseInt(itemId));
  
  

  if (!item) {
    return <div>Item not found</div>;
  }

  // const paragraphs = item.description.split('\n\n'); // Split the description into paragraphs

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChanged(true);
    } else {
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
      {colorChanged ? <Navreveal /> : <Navbar />}
      <section>
        <div className=" flex flex-col justify-center items-center mt-[60px] lg:mt-[100px]">
          <h1 className="lg:text-6xl text-4xl font-serif">{item.title}</h1>
          <img src={AmboseliN} alt="Roaring lion" className=" w-[100vw] h-[100vh] object-cover" />
        </div>
      </section>
      <section className=" bg-white w-[100%] m-auto lg:px-[100px] px-10">
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
         
            <p className="font-[SourceSerifPro-Regular] pt-[50px] text-xl">
              {item.p1}
              <br/><br/>{item.p2}
              <br/><br/>{item.p3}
              <br/><br/>{item.p4}
            </p>
      
        </ShowMoreText>

        <div className="relative mt-20 z-[0] m-auto lg:w-[70%]">
          <Slider {...settings} autoplay arrows>
            <div>
              <img src={Lodge1} alt="Lodge 1" />
            </div>
            <div>
              <img src={Lodge2} alt="Lodge 2" />
            </div>
            <div>
              <img src={Lodge3} alt="Lodge 3" />
            </div>
            <div>
              <img src={Lodge4} alt="Lodge 4" />
            </div>
          </Slider>
        </div>
        <hr />
        <div className=" mb-20 m-auto">
          <div className=" flex justify-center items-center">
            <hr className="border-black border-[1px]" />
            <h1 className=" font-[SourceSerifPro-Black] pt-[50px] text-xl lg:text-4xl m-auto mb-10">Camps and Lodges in {item.title}</h1>
            <hr className="border-black border-[1px]" />
          </div>
          <div className=" lg:flex">
            <div className=" mr-10 lg:w-1/2">
              <img src={Tortolis} alt="Tortolis Camp" loading="lazy" />
              <a href={item.campId1}><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >{item.camp1}</h1></a>
              <a href={item.campId1}><div className='hover:text-[#f15d30] lg:text-lg'>
                <span>{item.title}, Tanzania</span>
              </div></a>
            </div>


            <div className="lg:w-1/2">
              <img src={Olka} alt="Ol Tukai" loading="lazy" />
              <a href={item.campId2}><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >{item.camp2}</h1></a>
              <a href={item.campId2}><div className=' hover:text-[#f15d30] lg:text-lg'>
                <span>{item.title}, Tanzania</span>
              </div></a>
            </div>
          </div>

          <Link to={`/tanzania/lodge/${item.campId1}`}><div className=' mt-10 border-[#f15d30] border-[1px] text-[#f15d30] font-bold text-lg rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] min-w-[100px] p-10 flex items-center justify-center m-auto'>
            <span className="">View all Tanzanian Camps and lodges</span>
          </div></Link>

        </div>

      </section>
      <div>
        <img src={require('../../Assets/kanairo-black.svg').default} alt="Kanairo" loading="lazy" />
      </div>
      <Footer />
    </div>
  );
};

export default DetailsTz;
