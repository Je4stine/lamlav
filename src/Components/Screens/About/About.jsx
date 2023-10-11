import React,{ useState} from "react";

import './About.css';

import Navbar from '../../Navbar/Navbar';

import Navreveal from '../../Navbar/Navreveal';

import Footer from '../../Footer/Footer';

import ChatBot from '../../ChatBot/ChatBot';

import {AiOutlineArrowDown} from 'react-icons/ai';

import {RiWhatsappFill} from 'react-icons/ri';

import { BsQuestionCircleFill} from 'react-icons/bs'

import Luxury from '../../../Assets/flamingos.jpg';

import Luxury2 from '../../../Assets/cheetah-cub.jpg';



import About2 from '../../../Assets/about2.jpg';
import Callfor from "../../Contact/Callfor";
import Partners from "../../Partners";



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
                <div className="m-auto mb-10 lg:max">
                    <h1 className=" lg:text-2xl text-2xl font-[SourceSerifPro-Black] mb-3">Overview</h1>
                    <p className="mb-10 font-[SourceSerifPro-Regular] md:text-xl text-md"> 
                    Lamlav's group of travel specialists holds a profound knowledge of Africa, and is committed to crafting an extraordinary experience that fosters a meaningful connection between you and the continent—whether it's an adventurous getaway, a family vacation, or a romantic honeymoon. We take great pride in being acknowledged as authorities in designing safari holidays in Africa, renowned for our customized adventures, thrilling wildlife encounters, intimate cultural immersions, and commitment to sustainable practices
                    </p>

                    <em><h1 className=" lg:text-2xl text-2xl font-[SourceSerifPro-Black] mb-3">Feeling Inspired?</h1></em>
                    <div className=' mt-10 lg:flex justify-around'>
                        <a href='https://wa.me/+254716251932'><div className=" bg-green-600 rounded-md py-3 px-2 flex items-center justify-center mb-10 cursor-pointer lg:w-[300px]">
                            <RiWhatsappFill color='#fff' size={30} className=' mr-2'/>
                            <p className=' text-white font-bold'>CALL / WHATSAPP US</p>
                        </div></a>
                        <a href="https://wa.me/+254716251932" ><div className=" bg-green-600 rounded-md py-3 px-2 flex items-center justify-center mb-10 cursor-pointer lg:w-[300px]">
                            <BsQuestionCircleFill color='#fff' size={20} className=' mr-2'/>
                            <p className=' text-white font-bold'>ENQUIRE</p>
                        </div></a>
                    </div>
                </div>
               
                <h1 className=" md:text-4xl text-2xl font-[SourceSerifPro-Black] mb-3">What really  sets us apart from others? </h1>
                    <div className="lg:flex flex flex-col justify-center items-center bg-white md:mt-[50px] ">
                    <div className=" md:flex mr-5 ">
                        <p className="font-[SourceSerifPro-Regular] md:text-xl text-md ">
                            Simply put, It's our ironclad commitment  to providing  the best possible experiences for our clients.
                            You will always be treated  like a family  from the moment you book your Safari with us.
                            <br/><li>Our team of knowledgeable  and professional  guides will go above and beyond what is possible to make sure your trip is safe, comfortable and unabashedly indulgent.</li>
                            <br/><li>We pride  ourselves  on  our  attention to details and take great care in selecting  only the finest accommodation and transport  options for our tours.</li>
                            <br/><li>Our intimate  group  sizes allows  us to provide  a more personalised  experience, and our focus on sustainability  means  that we operate  in a way that is both responsible  and respectful  of the local communities  and the environment.</li>
                            <br/><li>We will continously improve our skills and expertise because we are dedicated to providing excellent service, ensuring high standards and fullfilling our social obligations. </li>
                            <br/>This devotion to hospitality, quality and social responsibility is unwavering, and is the reasons why we will never stop refining our craft
                        </p>
                        <img src={Luxury2} alt='Luxury' className="mb-5 md:w-1/2"/>
                    </div>
               </div>
                

                <h1 className=" text-4xl font-[SourceSerifPro-Black] mb-3 my-10">
                    Our trips
                </h1>
                <div className="lg:flex flex flex-col justify-center items-center bg-white ">
                    <div className=" md:flex mr-5 ">
                        <img src={Luxury} alt='Luxury' className="mb-5 md:w-1/2 mr-3"/>
                        <p className="font-[SourceSerifPro-Regular] md:text-xl text-md ">
                            Lamlav's ability to deliver meticulously planned tailor-made trips around the tastes and interests of every client, with a record-breaking satisfaction, is unsurpassed.

                            <br/><li> Our team of specialist staff work corporately in designing the trips for our guests to their finest details around their tastes, interests, preferences and budget; without compromising on quality.</li>
                            <br/><li> These specialists are professional who go extra miles to give you the finest, most unique and unforgetable safari experience in East Africa and beyond.</li>
                            <br/><li>You are indeed in safe hands when you plan your trip with us because we listen keenly to your desires and carefully design a stylish and original trip that perfectly matches your desires.</li>
                        </p>
   
                    </div>
               </div>

               
           </div>
           <Callfor/>
           <Partners/>
           <ChatBot/>
           <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo"/>
            </div>
           <Footer/>
        </div>
    )
}

export default AboutUs;