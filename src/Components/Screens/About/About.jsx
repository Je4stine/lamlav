import React,{ useState} from "react";

import './About.css';

import Navbar from '../../Navbar/Navbar';

import Navreveal from '../../Navbar/Navreveal';

import Footer from '../../Footer/Footer';

import ChatBot from '../../ChatBot/ChatBot';

import {AiOutlineArrowDown} from 'react-icons/ai';

import Luxury from '../../../Assets/luxury.jpg';

import About2 from '../../../Assets/about2.jpg';
import Callfor from "../../Contact/Callfor";



const AboutUs =()=>{
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
           <div className=' parallax2'>
                <div className=" absolute top-[40%] lg:left-[32%] left-[8%]">
                    <h1 className=" text-white md:text-6xl font-bold text-4xl text-center ">WHY LAMLAV SAFARIS?</h1>
                </div>
                <div className=" absolute top-[90%] md:left-[50%] left-[40%] animate-bounce">
                      <a href="#about">  <AiOutlineArrowDown size={60} color="white"/></a>
                </div>
           </div>

           <div className=" lg:px-[200px] p-5 md:p-10 md:py-10 bg-white flex flex-col" id="about">
               
                <h1 className=" md:text-4xl text-2xl font-[SourceSerifPro-Black] mb-3">What really  sets us apart from others? </h1>
                <p className="mb-6 font-[SourceSerifPro-Regular] md:text-xl text-md mt-5 md:mx-[50px]">
                     Simply put, It's our ironclad commitment  to providing  the best possible experiences for our clients. 
                </p>
                <p className="mb-10 font-[SourceSerifPro-Regular] md:text-xl text-md md:mx-[50px]">  You will always be treated  like a family  from the moment you book your Safari with us.</p>

                <div className="lg:flex flex flex-col justify-center items-center bg-white md:mt-[50px] md:mx-[50px]">
                    <div className=" md:flex mr-5 ">
                        <img src={Luxury} alt='Luxury' className="mb-5 md:w-1/2 mr-5 "/>
                        <img src={Luxury} alt='Luxury' className="mb-5 md:w-1/2"/>
                    </div>
               </div>
                

                <p className="mb-6 font-[SourceSerifPro-Regular] md:text-xl text-md md:mx-[50px]">  Our team of knowledgeable  and professional  guides will go above and beyond what is possible to make sure your trip is safe, comfortable and unabashedly indulgent.</p>

                <div className="lg:flex flex flex-col justify-center items-center bg-white md:mx-[50px]">
                    <div className=" md:flex md:mr-5 ">
                        <img src={Luxury} alt='Luxury' className="mb-5 md:w-1/2 mr-5 "/>
                        <img src={Luxury} alt='Luxury' className="mb-5 md:w-1/2"/>
                    </div>
               </div>
             <p className="mb-10 font-[SourceSerifPro-Regular] md:text-xl text-md md:mx-[50px]"> We pride  ourselves  on  our  attention to details and take great care in selecting  only the finest accommodation and transport  options for our tours.</p>
                <p className="mb-6 font-[SourceSerifPro-Regular] md:text-xl text-md md:mx-[50px]">
                    Our intimate  group  sizes allows  us to provide  a more personalised  experience, and our focus on sustainability  means  that we operate  in a way that is both responsible  and respectful  of the local communities  and the environment.                </p>
                <div className="lg:flex flex flex-col justify-center items-center bg-white md:mt-[50px] md:mx-[50px]">
                    <div className=" md:flex mr-5 ">
                        <img src={Luxury} alt='Luxury' className="mb-5 md:w-1/2 mr-5"/>
                        <img src={Luxury} alt='Luxury' className="mb-5 md:w-1/2"/>
                    </div>
               </div>
               <p className="mb-6 font-[SourceSerifPro-Regular] md:text-xl text-md md:mx-[50px]">
                    We will continously improve our skills and expertise because we are dedicated to providing excellent service, ensuring high standards and fullfilling our social obligations. 
                    This devotion to hospitality, quality and social responsibility is unwavering, and is the reasons why we will never stop refining our craft
                </p>
                <h1 className=" text-4xl font-[SourceSerifPro-Black] mb-3 md:mx-[50px]">
                    Our trips
                </h1>
                <p className="mb-6 font-[SourceSerifPro-Regular] md:text-xl text-md md:mx-[50px]">
                    Lamlav's ability to deliver meticulously planned tailor-made trips around the tastes and interests of every client, with a record-breaking satisfaction, is unsurpassed.
                </p>
                <p className="mb-6 font-[SourceSerifPro-Regular] md:text-xl text-md md:mx-[50px]">
                    Our team of specialist staff work corporately in designing the trips for our guests to their finest details around their tastes, interest, preference and budget; without compromising on quality.
                </p>
                <p className="mb-6 font-[SourceSerifPro-Regular] md:text-xl text-md md:mx-[50px]">
                    These specialists are professional who go extra miles to give you the finest, most unique and unforgetable safari experience in East Africa and beyond.<br/>
                    <br/>You are indeed in safe hands when you plan your trip with us 
                    because we listen keenly to your desires and carefully design a stylish and original trip that perfectly matches your desires.
                </p>
               
           </div>
           <Callfor/>
           <h1 className=" text-4xl font-[SourceSerifPro-Black] mb-3 mx-[50px]">
                    Our Partners
                </h1>
           <ChatBot/>
           <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo"/>
            </div>
           <Footer/>
        </div>
    )
}

export default AboutUs;