import React, {useState} from 'react';

import {HiMenu} from 'react-icons/hi';

import {AiOutlinePhone} from 'react-icons/ai';

import Logo from '../../Assets/Logos/logo.png'


const Navbar =()=>{
    const [isOpen, setIsopen]=useState(false);

    const Toggle=() =>{
       setIsopen(!isOpen);
       console.log(isOpen)         
    }

    return (
        <nav className=" w-full top-0 z-[1] lg:flex lg:justify-between lg:bg-white bg-white px-5 min-h-[60px] sticky shadow-lg">
            <div className=' flex justify-between items-center relative' >
                <a href='/'><img src={Logo} alt="Lamlav logo" className=' h-[100px]'/></a>
                <h1 className="hidden lg:inline mx-4 lg:my-6 font-bold text-xl text-black lg:text-black my-3 font-[SourceSerifPro-Black]"><a href='/'>Lamlav Leisure Safaris</a></h1>
                <span  className=' cursor-pointer block lg:hidden' onClick={Toggle}>
                    <HiMenu size={30}/>
                </span>
                <div className=' hidden lg:inline absolute lg:left-[400px] border-black border-x-[1px] px-5'>
                    <div className=' flex flex-col justify-center items-center'>
                    <div className=' flex justify-center items-center'>
                            <AiOutlinePhone color='#000'/>
                         <a href="https://wa.me/+254716251932" className=' cursor-pointer'><h1 className=' font-bold'> +254716251932 </h1></a>
                    </div>
                    <h1 className=' font-bold'>Plan for a safari</h1>
                    </div>
                </div>
            </div>
            {
                isOpen ? 
                    <ul className="lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute bg-white w-full left-0 lg:w-auto lg:opacity-100 opacity-100 transition-all ease-in duration-500 ">
                        <li className=" mx-4 my-6 "> 
                        <a href="/" className=" hover:text-[#f15d30] duration-500 lg:text-black font-[SourceSerifPro-Black]">Home</a>  
                        </li>
                        <li className=" mx-4 my-6 ">
                         <a href="/safaris" className=" hover:text-[#f15d30] duration-500 lg:text-black font-[SourceSerifPro-Black]">Destinations</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/about" className=" hover:text-[#f15d30] duration-500 lg:text-black font-[SourceSerifPro-Black]">Luxury Safaris</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/faqs" className=" hover:text-[#f15d30] duration-500 lg:text-black font-[SourceSerifPro-Black]">FAQs</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/contacts" className=" hover:text-[#f15d30] duration-500 lg:text-black font-[SourceSerifPro-Black]">Contacts/Inquiry</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="https://wa.me/+254716251932" className=" hover:text-[#f15d30] duration-500 lg:text-black font-[SourceSerifPro-Black]">Plan for a trip call +254716251932</a> 
                        </li>
                    </ul> 
                :
                    <ul className=" lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute w-full left-0 lg:w-auto lg:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                        <li className=" mx-4 my-6 "> 
                        <a href="/" className=" hover:text-yellow-400 duration-500 text-white font-[SourceSerifPro-Black] lg:text-black">Home</a>  
                        </li>
                        <li className=" mx-4 my-6 ">
                        <div className="relative group">
                                <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none text-black font-[SourceSerifPro-Black]">
                                    <span>Destinations</span>
                                </button>
                                <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                                    
                                    <div className="px-2 pt-2 pb-4 bg-white shadow-lg rounded-sm">
                                        <div className=" flex flex-col px-5">
                                        <a href='/kenya' className='text-black font-[SourceSerifPro-Black] cursor-pointer'>
                                            Kenya
                                        </a>
                                        <a href='/uganda' className='text-black font-[SourceSerifPro-Black] cursor-pointer'>
                                            Uganda
                                        </a>
                                        <a href='/tanzania' className='text-black font-[SourceSerifPro-Black] cursor-pointer'>
                                            Tanzania
                                        </a>
                                        <a href='/rwanda' className='text-black font-[SourceSerifPro-Black] cursor-pointer'>
                                            Rwanda
                                        </a>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/about" className=" hover:text-yellow-400 duration-500 text-white font-[SourceSerifPro-Black] lg:text-black">Luxury Safaris</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/faqs" className=" hover:text-yellow-400 duration-500 text-white font-[SourceSerifPro-Black] lg:text-black">FAQS</a> 
                        </li>
                        <li className=" mx-4 my-6 ">
                            <a href="/contacts" className=" hover:text-yellow-400 duration-500 text-white font-[SourceSerifPro-Black] lg:text-black">Contacts/Inquiry</a> 
                        </li>
                      
                    </ul>
            }
            
        </nav>
    )
};

export default Navbar;
