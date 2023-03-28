import React,{ useState} from "react";

import './About.css';

import Navbar from '../../Navbar/Navbar';

import Navreveal from '../../Navbar/Navreveal';

import Footer from '../../Footer/Footer';

import ChatBot from '../../ChatBot/ChatBot';

import {AiOutlineArrowDown} from 'react-icons/ai';



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
           <div className=" lg:px-[550px] p-10 py-10 bg-white flex flex-col" id="about">
                <h1 className=" text-3xl font-[SourceSerifPro-Black]">Welcome to Lamlav Leisure Safaris</h1>
                <p className="mb-6 font-[SourceSerifPro-Regular] md:text-lg text-md">We are an exemplary regional safari outfitter operating in East Africa and beyond. We are globally renowned for operating some of the most luxurious and distinct safaris in Kenya, Tanzania, Uganda and Rwanda, and for  taking our esteemed guests to some of  most elegant and experimental lodges and camps - where each lodge or camp impeccably captures the  true essence of the wild and its natural surroundings.
                    Our goal is to always exceed the expectations of every client by offering a one in a life time safari excursions in some of the best sanctuaries in the world, of course with a promise of a luxurious respite in stunning lodges and camps.
                </p>
                <h1 className=" text-3xl font-[SourceSerifPro-Black]">But what really  sets us apart from others? </h1>
                <p className="mb-6 font-[SourceSerifPro-Regular] md:text-lg text-md ">
                     It's  our ironclad commitment  to providing  the best possible experiences for our clients.
                    You will always be treated  like a family  from the moment you book your Safari with us. Our team of knowledgeable  and professional  guides will go above and beyond to make sure your trip is safe, comfortable and unabashedly indulgent.
                    We pride  ourselves  on  our  attention to details, and take great care in selecting  only the finest accommodation and transport  options for our tours.
                    Our intimate  group  sizes allows  us to provide  a more personalised  experience, and our focus on sustainability  means  that we operate  in a way that is both responsible  and respectful  of the local communities  and the environment. 
                </p>
                <h1 className=" text-3xl font-[SourceSerifPro-Black]">
                    So, why choose  Lamlav  Safaris  for your  next adventure?
                </h1>
                <p className="mb-6 font-[SourceSerifPro-Regular] md:text-lg text-md">
                    Simply put, we offer the highest  level of service,  the most immersive and authentic  experiences  and the best value  for your  money. We can't wait  to show you the beauty  of East Africa and create lasting  memories  with you!
                </p>
                <h1 className=" text-3xl font-[SourceSerifPro-Black]">
                    Our trips
                </h1>
                <p className="mb-6 font-[SourceSerifPro-Regular] md:text-lg text-md">
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