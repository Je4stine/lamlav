import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Footer from "../Footer/Footer";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
// import Slider from "react-slick";
import Lodge1 from '../../Assets/ABW_12_06_18_Two-lionesses-1_zmvl1r-768x512.jpg.jpeg';

import Lodge2 from '../../Assets/Angama_Mara_2018_086_rbludk-1-768x512.jpg.jpeg';

import Lodge3 from '../../Assets/angama-tented-camp-768x432.jpg.jpeg';

import Lodge4 from '../../Assets/A-tent-with-a-view-1_v2jbgu-1-768x470.jpg.jpeg';

import Game1 from '../../Assets/6-Days-Masai-Mara-safari-750x450.jpg';

import Serena from '../../Assets/maraserena.jpg';

import Rianta from '../../Assets/rianta2.jpg';


import Plains from '../../Assets/maraplains.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowMoreText from "react-show-more-text";
import AllLodges from "../AllLodges";


const DestMaasai =()=>{
    const [colorChanged, setColorChanged]= useState(false);
    const [open, setOpen] = useState(false)

    const toggleLodges =()=>{
        setOpen(!open)
    };

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
                <div className=" flex flex-col justify-center items-center mt-[100px]">
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">The Massai Mara National Reserve</h1>
                    <img src={Game1} alt="The Maasai Mara" className=" w-[100vw] h-[100vh] object-cover"/>
                </div>
            </section>
            <section className=" bg-white w-[100%] m-auto lg:px-[100px] px-10" >
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
                    <p className=" font-[SourceSerifPro-Regliar] pt-[50px] text-xl">
                    The Masai Mara National Reserve is a highly-regarded safari destination in Africa known for its vast open plains and diverse wildlife, including elephants, buffalo, zebra, giraffe, hyenas, and the famous big cats like lions, leopards, and cheetahs. The Maasai Mara shares a border with the Serengeti  National Park  in Tanzania,  and the wildlife  move freely between  the  two.Every year from August to November, it serves as a resting place for large herds of wildebeest during their perilous 2,900-kilometer (1,800-mile) migration in search of water and food. Widely touted as the ' greatest  show on earth' the chance of a ringside seat for a perilous  river crossing draws thousands  of visitors  every year.
                    <br/> <br/>The popularity of the Maasai Mara attracts a lot of tourists, which  results in large  crowds. To address this, private conservancies have been established around the main reserve over the past 15 years, offering a more intimate and exclusive safari experience. Nine of these conservancies are dedicated to wildlife conservation, and they are collectively nearly the same size as the Mara reserve itself. Staying  in a private conservancy  can make a safari  more enjoyable,  while supporting  conservation  efforts  too.

                    </p>
                </ShowMoreText>
                <div className="relative mt-20 z-[0] m-auto lg:w-[70%]">
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
                            <h1 className=" font-[SourceSerifPro-Black] pt-[50px] text-xl lg:text-4xl m-auto mb-10">Camps and Lodges in Maasai Mara</h1>
                        <hr className="border-black border-[1px]" />
                    </div>
                    <div className=" lg:flex">
                        <div className=" mr-10 lg:w-1/3">
                            <img src={Serena} alt="Tortolis Camp" loading ="lazy"/>
                            <a href='/kenya/marares'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Mara Serena Lodge</h1></a> 
                            <a href='/kenya/marares'><div className='hover:text-[#f15d30] lg:text-lg'>
                                        <span >Maasai Mara - Kenya</span>
                            </div></a> 
                        </div>
                        
                        


                        <div className=" mr-10 lg:w-1/3">
                            <img src={Plains} alt="Ol Tukai" loading ="lazy"/>
                            <a href='/kenya/maraplains'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Mara Plain Camps</h1></a> 
                            <a href='/kenya/maraplains'><div className=' hover:text-[#f15d30] lg:text-lg'>
                                        <span >Maasai Mara, Kenya</span>
                            </div></a> 
                        </div>

                        <div className="lg:w-1/3">
                            <img src={Rianta} alt="Ol Tukai" loading ="lazy"/>
                            <a href='/kenya/neptune'><h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2" >Neptune Mara Rianta Luxury Tented Camps</h1></a> 
                            <a href='/kenya/neptune'><div className=' hover:text-[#f15d30] lg:text-lg'>
                                        <span >Maasai Mara, Kenya</span>
                            </div></a> 
                        </div>
                    </div>
                    <div onClick={toggleLodges} className=' cursor-pointer mt-10 border-[#f15d30] border-[1px] text-[#f15d30] font-bold text-lg rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] min-w-[100px] p-10 flex items-center justify-center m-auto'>
                                <span className="">View all Kenya Camps and lodges</span>
                      </div>

                      <div
                            className={`${
                            open ? 'opacity-100' : 'opacity-0'
                            } transition-all duration-500`}
                        >
                        {open?<AllLodges/>:<div/>} 
                      </div>            

                </div>
                
            </section>
            <div>
                <img src={require('../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
}

export default DestMaasai;