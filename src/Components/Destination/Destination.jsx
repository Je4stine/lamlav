import React, {useCallback} from 'react';
import Destination1 from "../../Assets/leo.jpg";
import Destination2 from "../../Assets/moon.jpg";
import Destination3 from "../../Assets/migr.jpg";
import Destination4 from "../../Assets/ambo.jpg";
import Destination5 from '../../Assets/wildness.jpg'

import {useNavigate} from 'react-router-dom';


const Destination =()=>{
    const Navigate = useNavigate();
    
    return (
      <div className=" flex flex-col items-center m-auto p-5" id= 'Destination'>
        <h1 className=" my-[50px] font-bold text-5xl max-[768px]:text-xl max-[768px]:my-10">Luxury Safaris</h1>
        
        <div className="">
            
            <div className=" w-full mb-20 relative bg-white lg:w-[90%] m-auto p-5 flex flex-col justify-center items-center rounded-md shadow-md">
                <img src={Destination1}/>
                    <h1 className=' font-[SourceSerifPro-Black] text-2xl my-5 text-red-900'> LAMLAV  MARA SERENGETI DELUXE</h1>
                    <h2 className=' text-xl italic font-bold mb-10 text-red-900'> Experience  a truly  memorable and  unapologetically  indulging Safari  in the Mara and Serengeti  ecosystems </h2>
                    <p className=' font-[SourceSerifPro-Regular] lg:px-[100px]'>
                        An immersive  and most authentic  adventure  that begins  with amazing  wildlife  excursions  in the city, before  heading  to the two slum-dunk  destinations  at  the heart  of the world’s  most  important  animal  migration  corridors.                </p>
                    <p className=' my-5 text-lg font-[SourceSerifPro-Regular] text-red-900'> 10days/9 nights from $ 9,700 per person.</p>
                <a href='/mara' className=' text-red-900 border border-red-900 rounded-md p-3 hover:bg-red-900 hover:text-white duration-500 left-16'>
                    <h1 className=' font-[SourceSerifPro-Black]'>Learn More</h1>
                </a>
            </div>

            <div className=" w-full mb-20 relative bg-white lg:w-[90%] m-auto p-5 flex flex-col justify-center items-center rounded-md shadow-md">
                <img src={Destination3}/>
                <h1 className=' font-[SourceSerifPro-Black] text-2xl my-5 text-red-900'> GREAT MIGRATION  SAFARI - Kenyan  Edition </h1>
                <h2 className=' text-xl italic font-bold mb-10 text-red-900'> Discover the wonders of Kenya with a touch of luxury </h2>
                <p className=' font-[SourceSerifPro-Regular] lg:px-[100px]'>
                This is a high-end Kenyan safari that's very popular among those who want to experience Africa's renowned savannahs and witness the awe-inspiring wildebeest migrations up close. The safari covers three of Kenya's top wildlife sanctuaries: Nairobi National Park, Lewa Conservancy in the Laikipia Plateau, and the famous Maasai Mara game reserve, which is known for its incredible wildlife sightings. 
                </p>
                <p className=' my-5 text-lg font-[SourceSerifPro-Regular] text-red-900'> 10days/9nights, from $9,127 per person.</p>
                <a href='/migration' className=' text-red-900 border border-red-900 rounded-md p-3 hover:bg-red-900 hover:text-white duration-500 left-16'>
                    <h1 className=' font-[SourceSerifPro-Black]'>Learn More</h1>
                </a>
            </div>

            <div className=" w-full mb-20 relative bg-white lg:w-[90%] m-auto p-5 flex flex-col justify-center items-center rounded-md shadow-md">
                <img src={Destination2}/>
                <h1 className=' font-[SourceSerifPro-Black] text-2xl my-5 text-red-900'> LAMLAV  HONEYMOON SAFARI </h1>
                <h2 className=' text-xl italic font-bold mb-10 text-red-900'> An adventure  that feeds your Soul.</h2>
                <p className=' font-[SourceSerifPro-Regular] lg:px-[100px]'>
                
                By commemorating your union in a grand fashion, at some of the finest honeymoon destinations in Kenya, Lamlav Honeymoon  Safari presents you an opportunity  to discover  and create  unforgettable  memories that you will forever  cherish. This safari package guarantees lavish stays at top-rated accommodations that includes: the Hemingways Hotel in Nairobi, Kicheche Safari Camp in the southern part of Laikipia's Ol Pejeta Conservancy, Ol Seki Hemingways in Maasai Mara, and the renowned Hemingway's Hotel in the beguiling Watamu. 
                </p>
                <p className=' my-5 text-lg font-[SourceSerifPro-Regular] text-red-900'> 12days/11Nights from  from $ 13,055 per person.</p>
                <a href='/honeymoon' className=' text-red-900 border border-red-900 rounded-md p-3 hover:bg-red-900 hover:text-white duration-500 left-16'>
                    <h1 className=' font-[SourceSerifPro-Black]'>Learn More</h1>
                </a>
            </div>

            <div className=" w-full mb-20 relative bg-white lg:w-[90%] m-auto p-5 flex flex-col justify-center items-center rounded-md shadow-md">
                <img src={Destination4}/>
                <h1 className=' font-[SourceSerifPro-Black] text-2xl my-5 text-red-900'> LAMLAV BUSH  AND BEACH SAFARI </h1>
                <h2 className=' text-xl italic font-bold mb-10 text-red-900'>MARA -TSAVO –WATAMU. Explore the Kenyan  wildlife  havens  in Style.</h2>
                <p className=' font-[SourceSerifPro-Regular] lg:px-[100px]'>
                
                Bush and beach is one of Lamlav's  most  comprehensive  safari  package  that  matchlessly introduces you to the country's most  treasured  and exhilarating  savannahs:  the city's Nairobi  National  park,  the Iconic Maasai  Mara Game  Reserve and Tsavo West and East National  Parks. The adventure ends with five days relaxations and explorations  of the pristine Kenyan coastline and beaches, while enjoying luxurious  stays at the magnificent Medina  Palms  Resort,  in the  bewitching Watamu.
                </p>
                <p className=' my-5 text-lg font-[SourceSerifPro-Regular] text-red-900'> 14Days/13Nights tour from $17,400 per person.</p>
                <a href='/amboseli' className=' text-red-900 border border-red-900 rounded-md p-3 hover:bg-red-900 hover:text-white duration-500 left-16'>
                    <h1 className=' font-[SourceSerifPro-Black]'>Learn More</h1>
                </a>
            </div>

            <div className=" w-full mb-20 relative bg-white lg:w-[90%] m-auto p-5 flex flex-col justify-center items-center rounded-md shadow-md">
                <img src={Destination5}/>
                <h1 className=' font-[SourceSerifPro-Black] text-2xl my-5 text-red-900'> LAMLAV GREAT WILDERNESS  SAFARI.  </h1>
                <h2 className=' text-xl italic font-bold mb-10 text-red-900'>A truly compelling and quintessential  Kenyan Safari experience. </h2>
                <p className=' font-[SourceSerifPro-Regular] lg:px-[100px]'> 
                    Great Wilderness  safari  package offers you a chance  to explore  the Kenyan legendary  savannahs in the Amboseli  National  Park ,  Lewa Conservancy  in the dramatic Laikipia  plateau, and the famed Maasai  Mara Game Reserve, all while  enjoying  leisurely  stays at the  most refined  and lavishly  elegant  resorts. 
                </p>
                <p className=' my-5 text-lg font-[SourceSerifPro-Regular] text-red-900'> 10days/9nights, from $13,241.00 per person.</p>
                <a href='/wilderness' className=' text-red-900 border border-red-900 rounded-md p-3 hover:bg-red-900 hover:text-white duration-500 left-16'>
                    <h1 className=' font-[SourceSerifPro-Black]'>Learn More</h1>
                </a>
            </div>


        </div>
      </div>  
    )
};

export default Destination;