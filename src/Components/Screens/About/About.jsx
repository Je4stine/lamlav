import React,{ useState} from "react";

import './About.css';

import Navbar from '../../Navbar/Navbar';

import Navreveal from '../../Navbar/Navreveal';

import Footer from '../../Footer/Footer';

import ChatBot from '../../ChatBot/ChatBot';

import {AiOutlineArrowDown} from 'react-icons/ai';

import Luxury from '../../../Assets/luxury.jpg';

import About2 from '../../../Assets/about2.jpg';



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
           <div className="md:flex bg-white mt-[50px] mx-[50px]">
                    <div className=" flex flex-col flex-1 mr-5">
                        <img src={Luxury} alt='Luxury' className="mb-5 w-[100%]"/>
                        <img src={Luxury} alt='Luxury' className="mb-5"/>
                    </div>
                    <div className=" flex flex-col flex-1">
                        <img src={About2} alt='About' className="mb-5 w-[93%]"/>
                        <img src={About2} alt='About' className="mb-5 w-[93%]"/>
                    </div>
               </div>
           <div className=" lg:px-[550px] p-10 py-10 bg-white flex flex-col" id="about">
               
                <h1 className=" text-4xl font-[SourceSerifPro-Black] mb-3">What really  sets us apart from others? </h1>
                <p className="mb-6 font-[SourceSerifPro-Regular] md:text-xl text-md">
                     It's  our ironclad commitment  to providing  the best possible experiences for our clients.
                    You will always be treated  like a family  from the moment you book your Safari with us. Our team of knowledgeable  and professional  guides will go above and beyond to make sure your trip is safe, comfortable and unabashedly indulgent.
                    We pride  ourselves  on  our  attention to details, and take great care in selecting  only the finest accommodation and transport  options for our tours.
                    Our intimate  group  sizes allows  us to provide  a more personalised  experience, and our focus on sustainability  means  that we operate  in a way that is both responsible  and respectful  of the local communities  and the environment. 
                </p>
                <h1 className=" text-4xl font-[SourceSerifPro-Black] mb-3">
                    So, why choose  Lamlav  Safaris  for your  next adventure?
                </h1>
                <p className="mb-6 font-[SourceSerifPro-Regular] md:text-xl text-md">
                    Simply put, we offer the highest  level of service,  the most immersive and authentic  experiences  and the best value  for your  money. We can't wait  to show you the beauty  of East Africa and create lasting  memories  with you!
                </p>
                <h1 className=" text-4xl font-[SourceSerifPro-Black] mb-3">
                    Our trips
                </h1>
                <p className="mb-6 font-[SourceSerifPro-Regular] md:text-xl text-md">
                    We have developed an unsurpassed ability to deliver meticulously planned tailor-made trips around the tastes and interests of every client, with a record breaking satisfaction.  Our team of specialist staffs work corporately to design these trips for our guests to their finest details around their tastes, interests, preference and budget - without compromising on the quality. These specialists are professionals who go extra miles to give you the finest, most unique and unforgettable safari experience in East Africa. You are indeed in safe hands when you plan your trip with us because we listen keenly to your desires and carefully design a stylish and original trip that perfectly matches your desires.
                </p>
           </div>
           <ChatBot/>
           <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo"/>
            </div>
           <Footer/>
        </div>
    )
}

export default AboutUs;