import React from 'react';
import Expert from '../Assets/PNG/Local.jpg';
import Service from '../Assets/PNG/Bespoke.jpg'
import Travel from '../Assets/PNG/Responsible.jpg'
import Customer from '../Assets/PNG/Trusted.jpg'

import Birdlife from '../Assets/Logos/BirdLife_International_logo-700x520.png';
import British from '../Assets/Logos/British_Airways-Logo.png'
import Eko from '../Assets/Logos/Eko.gif'
import KENVO from '../Assets/Logos/KENVO.png'
import Airways from '../Assets/Logos/Kenya_Airways-Logo.wine.png'
import EAWLS from '../Assets/Logos/eawls-logo.jpg'
import KWS from '../Assets/Logos/kws.png'
import Lewa from '../Assets/Logos/lewa.png'
import NOrth from '../Assets/Logos/north.png'
import RWCA from '../Assets/Logos/RWCA.png'
import UG from '../Assets/Logos/ugwildlife.png'
import WFP from '../Assets/Logos/WFP.png'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Partners() {
    const logos = [
        {
            "id":1,
            "image":Birdlife
        },
        {
            "id":2,
            "image":British
        },
        {
            "id":3,
            "image":Eko
        },
        {
            "id":4,
            "image":KENVO
        },
        {
            "id":5,
            "image":Airways
        },
        {
            "id":6,
            "image":EAWLS
        },
        {
            "id":7,
            "image":KWS
        },
        {
            "id":8,
            "image":Lewa
        },

        {
            "id":9,
            "image":NOrth
        },

        {
            "id":10,
            "image":RWCA
        },
        {
            "id":11,
            "image":UG
        },
        {
            "id":12,
            "image":WFP
        },
    ];


    const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            // responsive: [
            // {
            //     breakpoint: 1024,
            //     settings: {
            //     slidesToShow: 3,
            //     },
            // },
            // {
            //     breakpoint: 640,
            //     settings: {
            //     slidesToShow: 2,
            //     },
            // },
            // ],
      };

  return (
    <div className=' py-5 px-2 bg-[#fff] flex flex-col justify-center'>
        <div className=' m-auto'><h1 className=' font-bold lg:text-3xl text-xl mb-10 text-center'>Compelling reasons why you should travel with Lamlav Leisure Safaris</h1></div>
        <div className='lg:flex justify-around'>
            <div className=' flex flex-col items-center '>
            <div className="rounded-full bg-gray-300 p-3"><img src={Expert} alt='expert' className="w-[200px] h-[200px] border-white border-4 rounded-full shadow-md object-cover"/></div>
                <p className=' font-bold font-[SourceSerifPro-Regular]'>Passionate Local Experts </p>
                <p className=' text-center font-[SourceSerifPro-Regular]'> World class  specialists and local guides<br/> who have travelled extensively and<br/> reside in their specialist  regions</p>
            </div>
            <div className=' flex flex-col items-center '>
                <div className=' rounded-full bg-gray-300 p-3'><img src={Service} alt='expert' className="w-[200px] h-[200px] border-white border-4 rounded-full shadow-md object-cover"/></div>
                <p className=' font-bold font-[SourceSerifPro-Regular] '>Bespoke Services </p>
                <p className=' text-center font-[SourceSerifPro-Regular]'>Customised Iteneraries crafted exclusively<br/>  for your travel needs, preferences and<br/> budget.</p>
            </div>
            <div className=' flex flex-col items-center'>
                <div className=' rounded-full bg-gray-300 p-3'><img src={Travel} alt='expert' className="w-[200px] h-[200px] border-white border-4 rounded-full shadow-md object-cover"/></div>
                <p className=' font-bold font-[SourceSerifPro-Regular]'>Responsible Tourism </p>
                <p className=' text-center font-[SourceSerifPro-Regular]'>Preserving biodiversity  and bolstering <br/>local communities </p>
            </div>
            <div className=' flex flex-col items-center'>
                <div className=' rounded-full bg-gray-300 p-3'><img src={Customer} alt='expert' className="w-[200px] h-[200px] border-white border-4 rounded-full shadow-md object-cover"/></div>
                <p className=' font-bold'>Trusted Service </p>
                <p className=' font-[SourceSerifPro-Regular]'>
                    <li>24/7 expert advise </li>
                    <li>Specialised 4×4 Safari vehicles </li>
                    <li>Full financial protection </li>
                </p>
            </div>
        </div>
        <hr className='mt-10'/>
        <div className=' m-auto'><h1 className=' font-bold lg:text-3xl text-xl mb-10 mt-10'>Our Preferred Partners</h1></div>
        <div >
                <Slider {...settings}>
                {logos.map((item, index) => {
                    return(
                        <div >
                        <img
                            key={index}
                            src={item.image}
                            alt="log"
                            className="h-[100px]"
                        />
                    </div>
                    )
                })} 
                </Slider>
        </div>
        <hr className=' mb-10'/>
    </div>
  )
}

export default Partners;