import {RiWhatsappFill} from 'react-icons/ri';

import { BsQuestionCircleFill} from 'react-icons/bs'

import { FcOnlineSupport} from 'react-icons/fc';

import {  BiSolidPhoneCall } from 'react-icons/bi';

import { IoCheckmarkDoneCircleSharp} from 'react-icons/io5'


const Intro =()=>{
    return (
        <div className='bg-white w-full p-5 py-10'>
            <div className='m-auto text-center my-10'><h1 className=' font-bold text-2xl'>HOW TO BOOK</h1></div>
            <div className=' lg:px-10 mb-10 m-auto text-center'><p className='font-[SourceSerifPro-Regular] text-xl'>Lamlav will simply do things for you.. Whether you're  embarking on your first adventure or a seasoned safari aficionado, we're fully prepared to craft a customized itinerary that suits your preferences perfectly.</p></div>
            <div className=' md:flex justify-around '> 
                <div className='flex flex-col items-center justify-center text-center mb-10 md:mb-0'>
                    <BiSolidPhoneCall size={50}/>
                    <h1 className='font-[SourceSerifPro-Black]'>1. Connect</h1>
                    <h1 className='font-[SourceSerifPro-Regular] text-center'>Get the inspiration and make a call or enquire online to share your dreams.</h1>
                </div>
                <div className='flex flex-col items-center justify-center text-center  mb-10 md:mb-0'>
                    <FcOnlineSupport size={50}/>
                    <h1 className=' font-[SourceSerifPro-Black]'>2. Customize</h1>
                    <h1 className='font-[SourceSerifPro-Regular] text-center'>A travel consultant  will help curate your ultimate tailor-made  Itenerary. </h1>
                </div>
                <div className='flex flex-col items-center justify-center text-center  mb-10 md:mb-0'>
                    <IoCheckmarkDoneCircleSharp size={50}/>
                    <h1 className=' font-[SourceSerifPro-Black]'>3. Confirm</h1>
                    <h1 className='font-[SourceSerifPro-Regular] text-center'>Confirm  your perfect  trip and start parking.</h1>
                </div>
            </div>
            <div className=' mt-10 lg:flex justify-around'>
                <a href='https://wa.me/+254716251932'><div className=" bg-green-600 rounded-md py-3 px-2 flex items-center justify-center mb-10 cursor-pointer">
                    <RiWhatsappFill color='#fff' size={30} className=' mr-2'/>
                    <p className=' text-white font-bold'>Call us/ WhatsApp us</p>
                </div></a>
                <a href="https://wa.me/+254716251932" ><div className=" bg-green-600 rounded-md py-3 px-2 flex items-center justify-center mb-10 cursor-pointer">
                    <BsQuestionCircleFill color='#fff' size={20} className=' mr-2'/>
                    <p className=' text-white font-bold'>Enquire</p>
                </div></a>
            </div>
            <hr className=' mt-10'/>
        </div>
    )
};

export default Intro;