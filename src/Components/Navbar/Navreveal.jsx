import React, {useState} from 'react';

import {HiMenu} from 'react-icons/hi';

const Navreveal =()=>{
    const [isOpen, setIsopen]=useState(false);

    const Toggle=() =>{
       setIsopen(!isOpen);
       console.log(isOpen)         
    }

    return (
        <nav className=" w-full top-0 z-[1] min-[768px]:flex min-[768px]:justify-between max-[768px]:bg-white px-5 bg-white sticky shadow-md max-[768px]:h-[60px]">
            <div className=' max-[768px]:flex max-[768px]:justify-between items-center' >
                <h1 className=" mx-4 my-6 font-bold text-2xl max-[768px]:my-3 ">Lamlav</h1>
                <span  className=' cursor-pointer block min-[768px]:hidden' onClick={Toggle}>
                    <HiMenu size={30}/>
                </span>
            </div>
            {
                isOpen ? 
                    <ul className=" min-[768px]:flex min-[768px]:items-center z-[-1] min-[768px]:z-auto min-[768px]:static absolute max-[768px]:bg-white w-full left-0 min-[768px]:w-auto min-[768px]:opacity-100 opacity-100 transition-all ease-in duration-500">
                        <li className=" mx-4 my-6 "> 
                        <a href="/" className=" hover:text-[#f15d30] duration-500">Home</a>  
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/safaris" className=" hover:text-[#f15d30] duration-500">Safaris</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/about" className=" hover:text-[#f15d30] duration-500">About</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/contacts" className=" hover:text-[#f15d30] duration-500">Contacts</a> 
                        </li>
                    </ul> 
                :
                    <ul className=" min-[768px]:flex min-[768px]:items-center z-[-1] min-[768px]:z-auto min-[768px]:static absolute max-[768px]:bg-white w-full left-0 min-[768px]:w-auto min-[768px]:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                        <li className=" mx-4 my-6 "> 
                        <a href="/" className=" hover:text-[#f15d30] duration-500 font-bold">Home</a>  
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/safaris" className=" hover:text-[#f15d30] duration-500 font-bold">Safaris</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/about" className=" hover:text-[#f15d30] duration-500 font-bold">About</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/contacts" className=" hover:text-[#f15d30] duration-500 font-bold">Contacts</a> 
                        </li>
                    </ul>
            }
            
        </nav>
    )
};

export default Navreveal;
