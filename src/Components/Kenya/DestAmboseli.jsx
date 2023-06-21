import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Footer from "../Footer/Footer";
import AmboseliN from '../../Assets/Natpa.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ImageGallery from 'react-image-gallery';
// import Slider from "react-slick";
import Lodge1 from '../../Assets/ol-tukai-lodge-amboseli_153098540519.jpg';

import Lodge2 from '../../Assets/ol-tukai-lodge-amboseli_153098540928.jpg';

import Lodge3 from '../../Assets/ol-tukai-lodge-amboseli_153098541131.jpg';

import Lodge4 from '../../Assets/ol-tukai-lodge-amboseli_153098541132.jpg';

import Tortolis from '../../Assets/274932-tortilis-camp-amboseli-national-park.jpg';

import Olka from '../../Assets/ol-tukai-lodge3.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const DestAmboseli =()=>{
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
            <section>
                <div className=" flex flex-col justify-center items-center mt-[60px] lg:mt-[100px]">
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Amboseli National Park</h1>
                    <img src={AmboseliN} alt="Roaring lion" className=""/>
                </div>
            </section>
            <section className=" bg-white w-[100%] m-auto lg:px-[100px] px-10" >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Located in the Southern  part of Kenya, near the boarder with Tanzania,  the Amboseli National Park, is famed for its large herds of elephants and its spectacular views of Mount Kilimanjaro, the highest mountain in Africa, which can be seen in the background. It is only 392Km2 in size, and  an hour's  flight  or four hours drive from Nairobi City.
                <br/>This reserve has been made even more notable through the work and wildlife documentaries of Dr. Cynthia Moss and the Elephant Trust, who have been studying the elephants in Amboseli for more than 30 years. Due to protection from tourists and researchers and support from the local Maasai people, the Amboseli elephants have lived a natural existence, making it one of the few places where you can see elephants of all ages, including the famous old bulls with their long tusks.

                <br/><br/>Amboseli encompasses various habitats, including acacia woodland, rocky thornbush, swamps, marshland, and wide-open plains. The savannah is fed by underground water from Mount Kilimanjaro's ice cap and two permanent springs, which provide a source of water for the large elephant and buffalo herds, as well as resident hippos. Wildebeest, zebra, giraffe, and impala graze the grasslands, and are hunted by predators such as lion, leopard, caracal, cheetah, jackal, spotted hyena, and serval. .

                <br/><br/>In addition, The park's grasslands and wetlands are home to over 400 bird species, and the park is also home to several large swamps, including the Amboseli Swamp, which is an important breeding ground for many species of waterfowl.
                <br/>The park also has a rich cultural history and the Maasai community who live near the park. Visitors can learn about the Maasai's way of life, including their customs, traditions, and beliefs.
                </p>

                <div className="relative mt-20 z-[0] lg:mx-[20px]">
                <Slider {...settings} autoplay arrows>
                    <div>
                        <img src={Lodge1}/>
                    </div>
                    <div>
                    <img src={Lodge2}/>
                    </div>
                    <div>
                    <img src={Lodge3}/>
                    </div>
                    <div>
                    <img src={Lodge4}/>
                    </div>
                    </Slider>
                </div>
                <hr/>
                <div className=" mb-20 m-auto">
                    <div className=" flex justify-center items-center">
                        <hr className="border-black border-[1px]" />
                            <h1 className=" font-[SourceSerifPro-Black] pt-[50px] text-xl lg:text-4xl m-auto mb-10">Camps and Lodges in Amboselli</h1>
                        <hr className="border-black border-[1px]" />
                    </div>
                    <div className=" lg:flex">
                        <div className=" mr-10 lg:w-1/2">
                            <img src={Tortolis} alt="Tortolis Camp" loading ="lazy"/>
                            <a href='/kenya/amboseli/tortolis'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Tortolis Camp</h1></a> 
                            <a href='/kenya/amboseli/tortolis'><div className='hover:text-[#f15d30] lg:text-lg'>
                                        <span >Amboseli National Park, Kenya</span>
                            </div></a> 
                        </div>
                        

                        <div className="lg:w-1/2">
                            <img src={Olka} alt="Ol Tukai" loading ="lazy"/>
                            <a href='/kenya/amboseli/oltukai'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Ol Tukai  Lodge</h1></a> 
                            <a href='/kenya/amboseli/oltukai'><div className=' hover:text-[#f15d30] lg:text-lg'>
                                        <span >Amboseli National Park, Kenya</span>
                            </div></a> 
                        </div>
                    </div>
                    <a href='/kenya/destamboseli'><div className=' mt-10 border-[#f15d30] border-[1px] text-[#f15d30] font-bold text-lg rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] min-w-[100px] p-10 flex items-center justify-center m-auto'>
                                <span className="">View all Kenya Camps and lodges</span>
                      </div></a>            

                </div>
                
            </section>
            <div>
                <img src={require('../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
};

export default DestAmboseli;