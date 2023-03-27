import React, {useCallback} from 'react';
import Destination1 from "../../Assets/Mara .jpg";
import Destination2 from "../../Assets/Migration.jpg";
import Destination3 from "../../Assets/Honeymoon.jpg";

import {useNavigate} from 'react-router-dom';



const Destination =()=>{
    const Navigate = useNavigate();
    
    return (
      <div className=" ml-20 p-5 flex flex-col items-center m-auto" id= 'Destination'>
        <h1 className=" my-[50px] font-bold text-5xl max-[768px]:text-xl max-[768px]:my-10">Luxury Safaris</h1>
        
        <div className=" flex flex-col ">
            <div className=" w-[90%] mr-5 mb-20 relative">
                <img src={Destination1} alt="Destinations" className="rounded-md" loading='lazy'/>
                <div className=" absolute bg-white bottom-[-40px] shadow-md w-[90%] left-[5%] py-3 flex flex-col items-center justify-center">
                    <div>
                        <p className=" text-red-600 text-xs"> 9 days/nights tour</p>
                        <h1 className=" font-bold"> Mara Serengeti Deluxe</h1>
                        <p className=" text-xs text-gray-500">  From $9,000</p>
                    </div>
                    <span className=" my-4 border border-red-600 rounded-md p-1 text-red-600 hover:bg-red-600 hover:text-white text-sm" onClick={useCallback(()=> Navigate('/mara', {replace: true}), [Navigate])}>
                      Learn More
                    </span>
                </div>
            </div>


            <div className=" w-[90%] mr-5 mb-20 relative">
                <img src={Destination2} alt="Destinations" className="rounded-md" loading='lazy'/>
                <div className=" absolute bg-white bottom-[-40px] shadow-md w-[90%] left-[5%] py-3 flex flex-col items-center justify-center">
                    <div>
                        <p className=" text-red-600 text-xs"> 9 days/nights tour</p>
                        <h1 className=" font-bold"> Great Migration Safari</h1>
                        <p className=" text-xs text-gray-500">  From $9,000</p>
                    </div>
                   <span className=" my-4 border border-red-600 rounded-md p-1 text-red-600 hover:bg-red-600 hover:text-white text-sm" onClick={useCallback(()=> Navigate('/migration', {replace: true}), [Navigate])}>
                      Learn More
                    </span>
                </div>
            </div>


            <div className=" w-[90%] mr-5 mb-20 relative">
                <img src={Destination3} alt="Destinations" className="rounded-md " loading='lazy'/>
                <div className=" absolute bg-white bottom-[-40px] shadow-md w-[90%] left-[5%] py-3 flex flex-col items-center justify-center">
                    <div>
                        <p className=" text-red-600 text-xs"> 12 days/nights tour</p>
                        <h1 className=" font-bold"> Honeymoon Safari</h1>
                        <p className=" text-xs text-gray-500">  From $13,055</p>
                    </div>
                    <span className=" my-4 border border-red-600 rounded-md p-1 text-red-600 hover:bg-red-600 hover:text-white text-sm" onClick={useCallback(()=> Navigate('/honeymoon', {replace: true}), [Navigate])}>
                      Learn More
                    </span>
                </div>
            </div>


            <div className=" w-[90%] mr-5 mb-20 relative">
                <img src={Destination1} alt="Destinations" className=" rounded-md" loading='lazy'/>
                <div className=" absolute bg-white bottom-[-40px] shadow-md w-[90%] left-[5%] py-3 flex flex-col items-center justify-center">
                    <div>
                        <p className=" text-red-600 text-xs"> 11 days/10 nights tour</p>
                        <h1 className=" font-bold"> Amboseli</h1>
                        <p className=" text-xs text-gray-500">  From $13,241</p>
                    </div>
                    <span className=" my-4 border border-red-600 rounded-md p-1 text-red-600 hover:bg-red-600 hover:text-white text-sm" onClick={useCallback(()=> Navigate('/amboseli', {replace: true}), [Navigate])}>
                      Learn More 
                    </span>
                </div>
            </div>
        </div>
      </div>  
    )
};

export default Destination;