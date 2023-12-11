import React,{ useState} from "react";

import './Safaris.css';

import Navbar from '../../Navbar/Navbar';

import Navreveal from '../../Navbar/Navreveal';

import Footer from '../../Footer/Footer';

import Destinations from '../../Destination/Destination';

import ChatBot from '../../ChatBot/ChatBot';

import {AiOutlineArrowDown} from 'react-icons/ai';

import Partners from "../../Partners";


const Safaris =()=>{
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

    return (
        <div className = "">
           {
                colorChanged ? <Navreveal/> : <Navbar/>
            }
           <div className=' parallax1'>
                <div className=" absolute top-[40%] lg:left-[45%] left-[32%]">
                    <h1 className=" text-white md:text-6xl font-bold text-4xl ">SAFARIS</h1>
                </div>
                <div className=" absolute top-[90%] md:left-[50%] left-[40%] animate-bounce">
                      <a href="#destinations">  <AiOutlineArrowDown size={60} color="white"/></a>
                </div>
           </div>
           <div id="destinations" className=" m-auto">
                <Destinations/>
           </div>
           <ChatBot/>
           <Partners/>
           <div className="bg-white">
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo"/>
            </div>
           <Footer/>
        </div>
    )
}

export default Safaris;