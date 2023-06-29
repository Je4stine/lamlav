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
import Lodge1 from '../../Assets/olpe2.jpeg';

import Lodge2 from '../../Assets/olpe1.jpg';

import Lodge3 from '../../Assets/olpe3.jpg';

import Olpe from '../../Assets/olpe1.jpg';

import Kicheche from '../../Assets/Kicheche.jpg';

import Porini from '../../Assets/porini.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowMoreText from "react-show-more-text";


const DestOlpe =()=>{
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
                <div className=" flex flex-col justify-center items-center mt-[60px] lg:mt-[120px]">
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Ol Pejeta Conservancy</h1>
                    <img src={Olpe} alt="Roaring lion" className=" "/>
                </div>
            </section>
            <section className=" bg-white w-[100%] m-auto lg:px-[100px] px-10" >
            <ShowMoreText
                    /* Default options */
                    lines={4}
                    more='Show more'
                    less='Show less'
                    anchorClass='pt-[50px]'
                    className='font-[SourceSerifPro-Regular] pt-[50px] text-xl'
                    // onClick={this.executeOnClick}
                    expanded={false}
                    truncatedEndingComponent={"..... "}
                >
                <p className=" font-[SourceSerifPro-Regliar] pt-[50px] text-xl">
                This protected area and a great tourists destination is situated near the equator, to the west of Nanyuki, near the foothills of Mount Kenya and the Aberdares. It was founded with the goal of preserving wildlife, providing a habitat for great apes, and generating revenue through wildlife-related activities. 
                <br/><br/>At Ol Pejeta Conservancy, you don't have to limit yourself to game viewing by vehicle. Other options include game walks, horseback or camel rides, and night drives. The conservancy, has had a rich history, with previous owners ranging from Lord Delamere to Roussel Onassis and Adnan Khashoggi. Originally established as a cattle ranch, the frequent destruction of fences by elephant herds made intensive cattle farming difficult, but cattle still plays a role in the conservancy today as a managed livestock. <br/><br/>Ol Pejeta is also dedicated to education, hosting an Environmental and Conservation Centre that annually welcomes around 100 Kenyan schools, and offers opportunities to learn about the local culture and traditions of the Samburu, Turkana, Pokot, and Maasai peoples.
                </p>
                </ShowMoreText>
                <div className="relative mt-20 z-[0] m-auto lg:w-[70%]">
                <Slider {...settings} autoplay arrows>
                    <div>
                        <img src={Lodge1}/>
                    </div>
                    {/* <div>
                    <img src={Lodge2}/>
                    </div> */}
                    <div>
                    <img src={Lodge3}/>
                    </div>
                    {/* <div>
                    <img src={Lodge2}/>
                    </div> */}
                    </Slider>
                </div>
                <hr/>
                <div className=" mb-20 m-auto">
                    <div className=" flex justify-center items-center">
                        <hr className="border-black border-[1px]" />
                            <h1 className=" font-[SourceSerifPro-Black] pt-[50px] text-xl lg:text-4xl m-auto mb-10">Camps and Lodges in Ol Pejeta Conservancy</h1>
                        <hr className="border-black border-[1px]" />
                    </div>
                    <div className=" lg:flex">
                        <div className=" mr-10 lg:w-1/2">
                            <img src={Kicheche} alt="Tortolis Camp" loading ="lazy"/>
                            <a href='/kenya/kicheche'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Kicheche Laikipia Camp</h1></a> 
                            <a href='/kenya/kicheche'><div className='hover:text-[#f15d30] lg:text-lg'>
                                        <span >Ol Pejeta, Kenya</span>
                            </div></a> 
                        </div>
                        

                        <div className="lg:w-1/2">
                            <img src={Porini} alt="Ol Tukai" loading ="lazy"/>
                            <a href='/kenya/porini'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Porini Rhino Camp</h1></a> 
                            <a href='/kenya/porini'><div className=' hover:text-[#f15d30] lg:text-lg'>
                                        <span >Ol Pejeta Park, Kenya</span>
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

export default DestOlpe;