import React, {useState} from 'react';

import {HiMenu} from 'react-icons/hi';


const Navbar =()=>{
    const [isOpen, setIsopen]=useState(false);

    const Toggle=() =>{
       setIsopen(!isOpen);
       console.log(isOpen)         
    }

    return (
        <nav className=" w-full top-0 z-[1] lg:flex lg:justify-between lg:bg-white bg-white px-5 h-[60px] sticky shadow-lg">
            <div className=' flex justify-between items-center' >
                <h1 className=" mx-4 lg:my-6 font-bold text-2xl text-black lg:text-black my-3"><a href='/'>Lamlav Leisure Safaris</a></h1>
                <span  className=' cursor-pointer block lg:hidden' onClick={Toggle}>
                    <HiMenu size={30}/>
                </span>
            </div>
            {
                isOpen ? 
                    <ul className="lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute bg-white w-full left-0 lg:w-auto lg:opacity-100 opacity-100 transition-all ease-in duration-500 ">
                        <li className=" mx-4 my-6 "> 
                        <a href="/" className=" hover:text-[#f15d30] duration-500 lg:text-black ">Home</a>  
                        </li>
                        <li className=" mx-4 my-6 ">
                         <a href="/safaris" className=" hover:text-[#f15d30] duration-500 lg:text-black">Destinations</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/about" className=" hover:text-[#f15d30] duration-500 lg:text-black">Luxury Safaris</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/contacts" className=" hover:text-[#f15d30] duration-500 lg:text-black">FAQs</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/faqs" className=" hover:text-[#f15d30] duration-500 lg:text-black">Contacts/Inquiry</a> 
                        </li>
                    </ul> 
                :
                    <ul className=" lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute w-full left-0 lg:w-auto lg:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                        <li className=" mx-4 my-6 "> 
                        <a href="/" className=" hover:text-yellow-400 duration-500 text-white font-bold lg:text-black">Home</a>  
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/safaris" className=" hover:text-yellow-400 duration-500 text-white font-bold lg:text-black">Destinations</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/about" className=" hover:text-yellow-400 duration-500 text-white font-bold lg:text-black">Luxury Safaris</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/contacts" className=" hover:text-yellow-400 duration-500 text-white font-bold lg:text-black">FAQS</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/faqs" className=" hover:text-yellow-400 duration-500 text-white font-bold lg:text-black">Contacts/Inquiry</a> 
                        </li>
                    </ul>
            }
            
        </nav>
    )
};

export default Navbar;
