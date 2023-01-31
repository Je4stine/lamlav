import React, {useState} from 'react';

import {HiMenu} from 'react-icons/hi';


const Navbar =()=>{
    const [isOpen, setIsopen]=useState(false);

    const Toggle=() =>{
       setIsopen(!isOpen);
       console.log(isOpen)         
    }

    return (
        <nav className=" w-full top-0 z-[1] md:flex md:justify-between md:bg-white bg-white px-5 h-[60px] sticky shadow-md">
            <div className=' flex justify-between items-center' >
                <h1 className=" mx-4 md:my-6 font-bold text-2xl text-black md:text-black my-3">Lamlav</h1>
                <span  className=' cursor-pointer block md:hidden' onClick={Toggle}>
                    <HiMenu size={30}/>
                </span>
            </div>
            {
                isOpen ? 
                    <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:opacity-100 opacity-100 transition-all ease-in duration-500 ">
                        <li className=" mx-4 my-6 "> 
                        <a href="/" className=" hover:text-[#f15d30] duration-500 md:text-black ">Home</a>  
                        </li>
                        <li className=" mx-4 my-6 ">
                         <a href="/safaris" className=" hover:text-[#f15d30] duration-500 md:text-black">Safaris</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/about" className=" hover:text-[#f15d30] duration-500 md:text-black">About</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/contacts" className=" hover:text-[#f15d30] duration-500 md:text-black">Contacts</a> 
                        </li>
                    </ul> 
                :
                    <ul className=" md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                        <li className=" mx-4 my-6 "> 
                        <a href="/" className=" hover:text-yellow-400 duration-500 text-white font-bold md:text-black">Home</a>  
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/safaris" className=" hover:text-yellow-400 duration-500 text-white font-bold md:text-black">Safaris</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/about" className=" hover:text-yellow-400 duration-500 text-white font-bold md:text-black">About</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/contacts" className=" hover:text-yellow-400 duration-500 text-white font-bold md:text-black">Contacts</a> 
                        </li>
                    </ul>
            }
            
        </nav>
    )
};

export default Navbar;
