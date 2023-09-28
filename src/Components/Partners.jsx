import React from 'react';
import Expert from '../Assets/PNG/expert.png';
import Service from '../Assets/PNG/quality-service.png'
import Travel from '../Assets/PNG/travel-and-tourism.png'
import Customer from '../Assets/PNG/customer-service.png'

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

function Partners() {
  return (
    <div className=' py-5 px-2 bg-[#d3d3d3] flex flex-col justify-center '>
        <div className=' m-auto'><h1 className=' font-bold lg:text-3xl text-xl mb-10 '>WHY LAMALAV</h1></div>
        <div className='lg:flex justify-around'>
            <div className=' flex flex-col items-center '>
            <div className=' rounded-full bg-gray-300 p-3'><img src={Expert} alt='expert' className=' h-[80px]'/></div>
                <p className=' font-bold'>Passionate Local Experts </p>
                <p className=' text-center'> World class  specialists and local guides<br/> who have travelled extensively and<br/> reside in their specialist  regions</p>
            </div>
            <div className=' flex flex-col items-center '>
                <div className=' rounded-full bg-gray-300 p-3'><img src={Service} alt='expert' className=' h-[80px]'/></div>
                <p className=' font-bold'>Bespoke Services </p>
                <p className=' text-center'>Customised Iteneraries crafted exclusively<br/>  for your travel needs, preferences and<br/> budget.</p>
            </div>
            <div className=' flex flex-col items-center'>
                <div className=' rounded-full bg-gray-300 p-3'><img src={Travel} alt='expert' className=' h-[80px]'/></div>
                <p className=' font-bold'>Responsible Tourism </p>
                <p className=' text-center'>Preserving biodiversity  and bolstering <br/>local communities </p>
            </div>
            <div className=' flex flex-col items-center'>
                <div className=' rounded-full bg-gray-300 p-3'><img src={Customer} alt='expert' className=' h-[80px]'/></div>
                <p className=' font-bold'>Trusted Service </p>
                <p className=' '>
                    <li>24/7 expert advise </li>
                    <li>Specialised 4×4 Safari vehicles </li>
                    <li>Full financial protection </li>
                </p>
            </div>
        </div>
        <div className=' m-auto'><h1 className=' font-bold lg:text-3xl text-xl mb-10 mt-10'>Our Prefered Partners</h1></div>
        
        <div className=' flex justify-around flex-wrap mb-10 items-center'>
            <div className=" flex items-center mb-10 flex-grow">
                <img src={Birdlife} alt='Partner logo' className=' h-[80px]'/>
                 
            </div>
            <div className=" flex items-center mb-10 flex-grow">
                <img src={British} alt='Partner logo' className=' h-[80px]'/>
                 
            </div>
            <div className=" flex items-center mb-10 flex-grow">
                <img src={Eko} alt='Partner logo' className=' h-[80px]'/>
                 
            </div>

            <div className=" flex items-center mb-10 flex-grow">
                <img src={KENVO} alt='Partner logo' className=' h-[80px]'/>
                 
            </div>
            <div className=" flex items-center mb-10 flex-grow">
                <img src={Airways} alt='Partner logo' className=' h-[80px]'/>
                 
            </div>
            <div className=" flex items-center mb-10 flex-grow">
                <img src={EAWLS} alt='Partner logo' className=' h-[80px]'/>
                 
            </div>
           
            
        </div>
        <div className=' flex justify-around flex-wrap mb-10 items-center'>
                    <div className=" flex items-center mb-10 flex-grow">
                        <img src={KWS} alt='Partner logo' className=' h-[80px]'/>
                         
                    </div>
                    <div className=" flex items-center mb-10 flex-grow">
                        <img src={Lewa} alt='Partner logo' className=' h-[80px]'/>
                         
                    </div>

                    <div className=" flex items-center mb-10 flex-grow">
                        <img src={NOrth} alt='Partner logo' className=' h-[80px]'/>
                         
                    </div>
                    <div className=" flex items-center mb-10 flex-grow">
                        <img src={RWCA} alt='Partner logo' className=' h-[80px]'/>
                         
                    </div>
                    <div className=" flex items-center mb-10 flex-grow">
                        <img src={UG} alt='Partner logo' className=' h-[80px]'/>
                         
                    </div>
                    <div className=" flex items-center mb-10 flex-grow">
                        <img src={WFP} alt='Partner logo' className=' h-[80px]'/>
                         
                    </div>
        </div>
    </div>
  )
}

export default Partners;