
import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Footer from "../Footer/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
// import Slider from "react-slick";
import Lodge1 from '../../Assets/lodge1.jpg';

import Lodge2 from '../../Assets/lodge4.jpg';

import Lodge3 from '../../Assets/lodge5.jpg';

import Tsavo from '../../Assets/tsavo11.jpg';


const DesTsavo =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Tsavo  National  park</h1>
                    <img src={Tsavo} alt="Roaring lion" className=" "/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[500px] px-10" >
                <p className=" font-[SourceSerifPro-Regliar] pt-[50px] text-xl">
                Tsavo National Park is a major tourist destination in Kenya located in the south-western part of the country. It consists of two separate parks, Tsavo East and Tsavo West, which are separated by a railway line. The park is famous for its man-eating lions, which were known for attacking construction workers during the building of the railway. The park spans an area of 13,747 square kilometers and offers visitors a diverse landscape, including rugged mountains in Tsavo West and semi-arid grasslands and savannah in Tsavo East, where visitors can see various wildlife species.
                <br/><br/>Although the park is home to the "big 5" animals, the dense bush and hilly terrain can make wildlife viewing a bit challenging. However, there are fewer crowds in this wilderness area, making the safari experience more authentic.
                <br/> <br/>The park boasts some spectacular scenic highlights, including the dramatic black lava fields, imposing cones, and Mzima Springs, where visitors can see hippos underwater. The majestic Mt Kilimanjaro can be seen in the background on clear days, and a forest walk in the undulating Chyulu Hills is a delightful experience.
                <br/> <br/>Visitors to the park will easily see an abundance of African savannah elephants,Black rhinoceros,hippos,klipspringer,giraffes, zebras,fringe-eared, eland, , lesser kudu,  oryx, shy gerenuks, and the blue wildebeest. The park also offers good lion sightings, and visitors may even be lucky enough to elusive spot a leopard.
                Bird watching in Tsavo is exceptional, with over 400 species on the checklist, including many dry-country specials. The Finch Hatton's luxury tented camp provides a great base for exploring the park and visitors may see a variety of birds such as the African wood owl,Green wood-hoopoe, Kori, Yellow-throated and Black-faced sandgrouse, Martial eagle, Von der Decken's hornbill, Purple grenadiers, Northern carmine bee-eater, Red-and-yellow barbet, Retz' helmet-shrike, Red-faced crombec, Northern brownbul, Violet-backed and Ruppell's starlings, Silverbird, Bronze sunbird, and and Black-bellied bustards,

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
                            <h1 className=" font-[SourceSerifPro-Black] pt-[50px] text-xl lg:text-4xl m-auto mb-10">Camps and Lodge in Tsavo</h1>
                        <hr className="border-black border-[1px]" />
                    </div>
                    <div className=" lg:flex">
                        <div className=" mr-10 lg:w-1/2">
                            <img src={Lodge1} alt="Tortolis Camp" loading ="lazy"/>
                            <a href='/kenya/amboseli/tortolis'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Finch Hatton's Luxury Camp</h1></a> 
                            <a href='/kenya/amboseli/tortolis'><div className='hover:text-[#f15d30] lg:text-lg'>
                                        <span >Tsavo National Park Kenya</span>
                            </div></a> 
                        </div>
                        

                        <div className="lg:w-1/2">
                            <img src={Lodge2} alt="Ol Tukai" loading ="lazy"/>
                            <a href='/kenya/amboseli/oltukai'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Kilanguni Serena Safari Lodge</h1></a> 
                            <a href='/kenya/amboseli/oltukai'><div className=' hover:text-[#f15d30] lg:text-lg'>
                                        <span >Tsavo National Park Kenya</span>
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

export default DesTsavo;