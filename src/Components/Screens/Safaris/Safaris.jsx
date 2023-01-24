import React,{ useState} from "react";

import './Safaris.css';

import Navbar from '../../Navbar/Navbar';

import Navreveal from '../../Navbar/Navreveal';

import Footer from '../../Footer/Footer';

import Destinations from '../../Destination/Destination';

import ChatBot from '../../ChatBot/ChatBot';

import {AiOutlineArrowDown} from 'react-icons/ai';


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
        <div>
           {
                colorChanged ? <Navreveal/> : <Navbar/>
            }
           <div className=' parallax1'>
                <div className=" absolute top-[40%] left-[45%] max-[768px]:left-[32%]">
                    <h1 className=" text-white text-6xl font-bold max-[768px]:text-4xl ">SAFARIS</h1>
                </div>
                <div className=" absolute top-[90%] left-[50%] max-[768px]:left-[40%] animate-bounce">
                      <a href="#destinations">  <AiOutlineArrowDown size={60} color="white"/></a>
                </div>
           </div>
           <div id="destinations">
                <Destinations/>
           </div>
           <ChatBot/>
           <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo"/>
            </div>
           <Footer/>
        </div>
    )
}

export default Safaris;