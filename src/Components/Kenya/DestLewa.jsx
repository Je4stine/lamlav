import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Footer from "../Footer/Footer";
import AmboseliN from '../../Assets/Natpa.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
// import Slider from "react-slick";
import Lodge1 from '../../Assets/lodge1.jpg';

import Lodge2 from '../../Assets/lodge4.jpg';

import Lodge3 from '../../Assets/lodge5.jpg';

import Lewaco from '../../Assets/lewacon.jpg';


const DestLewa =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Lewa Conservancy</h1>
                    <img src={Lewaco} alt="Roaring lion" className=" lg:m-auto lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[500px] px-10" >
                <p className=" font-[SourceSerifPro-Regliar] pt-[50px] text-xl">
                The Lewa Wildlife Conservancy is a safe haven for a wide range of wildlife species, including the big five. The conservancy is also home to various plains game species that are well-adapted to the semi-desert environment, such as Grevy's Zebra and Reticulated Giraffe. The Beisa Oryx and Greater Kudu, which are seasonal visitors, and the Guenther's Dikdik, Gerenuk and Somali Ostrich, which are residents all year round, are also present in the conservancy. .
                <br/><br/>The swamp in the conservancy is a haven for the rare Sitatunga Antelope and its primary predator, the Leopard. The conservancy is also home  to a rich birdlife, including numerous species of Bustard, Plover, Coursers, and birds of prey. 
                <br/><br/>At night, one can encounter leopards along with other nocturnal animals like bush-babies, aardvarks, bat-eared foxes, caracals, and various mongooses, genets and civets. Spending a few days in Lewa will give you a unique combination of hospitality, stunning scenery, and abundant wildlife.
                The Lewa Safari Camp is a luxurious camping experience located within the privately-owned Lewa Wildlife Conservancy. It features 12 tents, each designed to resemble a luxurious bungalow and equipped with thatched roofs, private verandas with stunning views of the surrounding plains and roaming wildlife, and en-suite bathrooms. When Prince William visits, he stays in the private property of the reserve's owners.Lewa is an intimate and private destination known for its peaceful and romantic atmosphere, and it's  the location of Prince William's proposal to Kate Middleton in 2010.

                </p>
                <div className="relative mt-20 z-[0]">
                <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        >
                        <SwiperSlide>
                            <div >
                                <img src={Lodge1} alt="Roaring lion" loading="lazy"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={Lodge2} alt="Roaring lion" loading="lazy"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={Lodge3} alt="Roaring lion" loading="lazy"/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <hr/>
                <div className=" mb-20 m-auto">
                    <div className=" flex justify-center items-center">
                        <hr className="border-black border-[1px]" />
                            <h1 className=" font-[SourceSerifPro-Black] pt-[50px] text-xl lg:text-4xl m-auto mb-10">Camps and Lodge in Lewa Conservancy</h1>
                        <hr className="border-black border-[1px]" />
                    </div>
                    <div className=" lg:flex">
                        <div className=" mr-10 lg:w-1/2">
                            <img src={Lodge1} alt="Tortolis Camp" loading ="lazy"/>
                            <a href='/kenya/amboseli/tortolis'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Lewa Safari  Camp. </h1></a> 
                            <a href='/kenya/amboseli/tortolis'><div className='hover:text-[#f15d30] lg:text-lg'>
                                        <span >Lewa Conservancy Kenya</span>
                            </div></a> 
                        </div>
                        

                        <div className="lg:w-1/2">
                            <img src={Lodge2} alt="Ol Tukai" loading ="lazy"/>
                            <a href='/kenya/amboseli/oltukai'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Kifaru House</h1></a> 
                            <a href='/kenya/amboseli/oltukai'><div className=' hover:text-[#f15d30] lg:text-lg'>
                                        <span >Lewa Conservancy Kenya</span>
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
}

export default DestLewa;