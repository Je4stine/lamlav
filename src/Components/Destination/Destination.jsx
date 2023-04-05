import React, {useCallback} from 'react';
import Destination1 from "../../Assets/leo.jpg";
import Destination2 from "../../Assets/moon.jpg";
import Destination3 from "../../Assets/migr.jpg";
import Destination4 from "../../Assets/ambo.jpg";

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
                <p className=' font-[SourceSerifPro-Regular] lg:px-[100px]'>
                    Experience  a truly  memorable and unabashedly  indulgent  Safari  in the Mara and Serengeti  ecosystems.From an amazing  wildlife  excursions  in the city, to the two slum-dunk  destinations at the heart of the world’s  most important  animal migration corridors,the iconic Maasai Mara and Serengeti  game reserves,experience  the most immersive  and authentic  adventure with three scheduled  flights  to expedite  your  travel  between the camps.
                </p>
                <p className=' my-5 text-lg font-[SourceSerifPro-Regular] text-red-900'> 9days/8nights from $ 9,700 per person.</p>
                <a href='/mara' className=' text-red-900 border border-red-900 rounded-md p-3 hover:bg-red-900 hover:text-white duration-500 left-16'>
                    <h1 className=' font-[SourceSerifPro-Black]'>Learn More</h1>
                </a>
            </div>

            <div className=" w-full mb-20 relative bg-white lg:w-[90%] m-auto p-5 flex flex-col justify-center items-center rounded-md shadow-md">
                <img src={Destination3}/>
                <h1 className=' font-[SourceSerifPro-Black] text-2xl my-5 text-red-900'> GREAT MIGRATION  SAFARI - Kenyan  Edition </h1>
                <p className=' font-[SourceSerifPro-Regular] lg:px-[100px]'>
                    An unabashedly  luxurious  safari, favoured  by many who  desire to to explore Africa's  legendary  savannahs,  and witness -first hand - the  breath-taking  wildebeest  migrations. This classic  Safari  covers three of Kenya’s great wildlife havens: The Nairobi National  Park, The Lewa Conservancy, in the dramatic  Laikipia Plateau,  and the iconic Maasai Mara game reserve, which is the centerpiece  of wildlife spectacles. Three exhilarating  flights between  the luxury camps and lodges  (and  back to the city) are meant  to expedite  your  travel.
                </p>
                <p className=' my-5 text-lg font-[SourceSerifPro-Regular] text-red-900'> 9 days/8nights, from $9000 per person.</p>
                <a href='/migration' className=' text-red-900 border border-red-900 rounded-md p-3 hover:bg-red-900 hover:text-white duration-500 left-16'>
                    <h1 className=' font-[SourceSerifPro-Black]'>Learn More</h1>
                </a>
            </div>

            <div className=" w-full mb-20 relative bg-white lg:w-[90%] m-auto p-5 flex flex-col justify-center items-center rounded-md shadow-md">
                <img src={Destination2}/>
                <h1 className=' font-[SourceSerifPro-Black] text-2xl my-5 text-red-900'> LAMLAV  HONEYMOON SAFARI </h1>
                <p className=' font-[SourceSerifPro-Regular] lg:px-[100px]'>
                    Lamlav Honeymoon Safari offers the newly weds  a chance to celebrate their Mariage In style at some of the best honeymoon Spots In Kenya, with a promise  of luxurious respites at the crème de la crème accommodations: the Hemingways hotel In Nairobi, Kicheche Safari Camp In Ol Pejeta Conservancy, South of Laikipia, Ol Seki Hemingways in Maasai Mara; and at the Hemingway’s hotel In Watamu. Explore  and make memories  that will last a lifetime. 
                </p>
                <p className=' my-5 text-lg font-[SourceSerifPro-Regular] text-red-900'> 12days/11Nights from  from $ 13,055 per person.</p>
                <a href='/honeymoon' className=' text-red-900 border border-red-900 rounded-md p-3 hover:bg-red-900 hover:text-white duration-500 left-16'>
                    <h1 className=' font-[SourceSerifPro-Black]'>Learn More</h1>
                </a>
            </div>

            <div className=" w-full mb-20 relative bg-white lg:w-[90%] m-auto p-5 flex flex-col justify-center items-center rounded-md shadow-md">
                <img src={Destination4}/>
                <h1 className=' font-[SourceSerifPro-Black] text-2xl my-5 text-red-900'> Amboseli</h1>
                <p className=' font-[SourceSerifPro-Regular] lg:px-[100px]'>
                    Amboseli National Park is located in southern Kenya, near the border with Tanzania. It is known for its large herds of elephants and its spectacular views of Mount Kilimanjaro, the highest mountain in Africa, which can be seen in the background.
                </p>
                <p className=' my-5 text-lg font-[SourceSerifPro-Regular] text-red-900'> 11 days/10 nights tour from $13,241 per person.</p>
                <a href='/amboseli' className=' text-red-900 border border-red-900 rounded-md p-3 hover:bg-red-900 hover:text-white duration-500 left-16'>
                    <h1 className=' font-[SourceSerifPro-Black]'>Learn More</h1>
                </a>
            </div>


        </div>
      </div>  
    )
};

export default Destination;