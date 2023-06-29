import React, {useState} from 'react';

import {HiMenu} from 'react-icons/hi';

import {AiOutlinePhone} from 'react-icons/ai'




const Navbar =()=>{
    const [isOpen, setIsopen]=useState(false);

    const Toggle=() =>{
       setIsopen(!isOpen);
       console.log(isOpen)         
    }

    return (
        <nav className=" w-full absolute top-0 z-[1] lg:flex lg:justify-between lg:bg-transparent bg-white px-5 h-[60px] lg:mt-5">
            <div className=' flex justify-between items-center relative' >
                <div className=' flex items-center  '>
                   
                    <h1 className=" mx-4 lg:my-6 font-[SourceSerifPro-Black] text-xl text-black lg:text-white my-3"><a href='/'>Lamlav Leisure Safaris</a></h1>
                </div>
                <span  className=' cursor-pointer block lg:hidden' onClick={Toggle}>
                    <HiMenu size={30}/>
                </span>
                <div className=' hidden lg:inline absolute left-[300px] border-white border-x-[1px] px-5'>
                    <div className=' flex flex-col justify-center items-center'>
                    <div className=' flex justify-center items-center'>
                            <AiOutlinePhone color='#fff'/>
                         <h1 className=' font-bold text-white'> +254716251932 </h1>
                    </div>
                    <h1 className=' font-bold text-white'>Plan for a safari</h1>
                    </div>
                </div>
            </div>
            {
                isOpen ? 
                    <ul className="lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute bg-white w-full left-0 lg:w-auto lg:opacity-100 opacity-100 transition-all ease-in duration-500">
                        <li className=" mx-4 my-6 "> 
                        <a href="/" className=" hover:text-[#f15d30] duration-500 font-[SourceSerifPro-Black]">Home</a>  
                        </li>
                        <li className=" mx-4 my-6 ">
                         <a href="/safaris" className=" hover:text-[#f15d30] duration-500 font-[SourceSerifPro-Black]">Destinations</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/lamlav/about" className=" hover:text-[#f15d30] duration-500 font-[SourceSerifPro-Black]">Luxury Safaris</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/contacts" className=" hover:text-[#f15d30] duration-500 font-[SourceSerifPro-Black]">FAQs</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/faqs" className=" hover:text-[#f15d30] duration-500 font-[SourceSerifPro-Black]">Contacts/Inquiry</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/faqs" className=" hover:text-[#f15d30] duration-500 font-[SourceSerifPro-Black]">Plan for a trip call +254716251932 </a> 
                        </li>
                    </ul> 
                :
                    <ul className=" lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute w-full left-0 lg:w-auto lg:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                        <li className=" mx-4 my-6 "> 
                        <a href="/" className=" hover:text-yellow-400 duration-500 text-white font-[SourceSerifPro-Black]">Home</a>  
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/safaris" className=" hover:text-yellow-400 duration-500 text-white font-[SourceSerifPro-Black]">Destinations</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/about" className=" hover:text-yellow-400 duration-500 text-white font-[SourceSerifPro-Black]">Luxury Safaris</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/contacts" className=" hover:text-yellow-400 duration-500 text-white font-[SourceSerifPro-Black]">FAQS</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/faqs" className=" hover:text-yellow-400 duration-500 text-white font-[SourceSerifPro-Black]">Contacts/Inquiry</a> 
                        </li>
                    </ul>
            }
            
        </nav>
    )
};

export default Navbar;
