import {RiWhatsappFill} from 'react-icons/ri';

import { BsQuestionCircleFill} from 'react-icons/bs'

import { FcOnlineSupport} from 'react-icons/fc';

import {  BiSolidPhoneCall } from 'react-icons/bi';

import { IoCheckmarkDoneCircleSharp} from 'react-icons/io5';

import Connect from '../../Assets/PNG/Connect.jpeg';
import Customize from '../../Assets/PNG/Customize.jpeg';
import Confirm from '../../Assets/PNG/Confirm.jpeg';


const Intro =()=>{

    const phoneNumber = '+254716251932'; // Replace with the desired phone number

  const handleClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

    return (
        <div className='bg-white w-full p-5 py-10'>
            <div className='m-auto text-center my-10'><h1 className=' font-bold text-2xl'>HOW TO BOOK</h1></div>
            <div className=' lg:px-10 mb-10 m-auto text-center'><p className='font-[SourceSerifPro-Regular] text-xl'> Whether you're  embarking on your first adventure or a seasoned safari aficionado, we're fully prepared to craft a customized itinerary that suits your preferences perfectly. 
            Only 3 steps are involved:
            </p></div>
            <div className=' md:flex justify-around '> 
                <div className='flex flex-col items-center justify-center text-center mb-10 md:mb-0'>
                    <div className=" "><img src={Connect} alt="Connect" className="w-[200px] h-[200px] border-white border-4 rounded-full shadow-md object-cover"/> </div>
                    <h1 className='font-[SourceSerifPro-Black]'>1. Connect</h1>
                    <h1 className='font-[SourceSerifPro-Regular] text-center'>Get the inspiration and make a call or enquire online to share your dreams.</h1>
                </div>
                <div className='flex flex-col items-center justify-center text-center  mb-10 md:mb-0'>
                    <div className=" "><img src={Customize} alt="Connect" className="w-[200px] h-[200px] border-white border-4 rounded-full shadow-md object-cover"/> </div>
                    <h1 className=' font-[SourceSerifPro-Black]'>2. Customize</h1>
                    <h1 className='font-[SourceSerifPro-Regular] text-center'>A travel consultant  will help curate your ultimate tailor-made  Itenerary. </h1>
                </div>
                <div className='flex flex-col items-center justify-center text-center  mb-10 md:mb-0'>
                    <div className=" "><img src={Confirm} alt="Connect" className="w-[200px] h-[200px] border-white border-4 rounded-full shadow-md object-cover"/> </div>
                    <h1 className=' font-[SourceSerifPro-Black]'>3. Confirm</h1>
                    <h1 className='font-[SourceSerifPro-Regular] text-center'>Confirm  your perfect  trip and start parking.</h1>
                </div>
            </div>
            <div className=' mt-10 lg:flex justify-around'>
                <a href='https://wa.me/+254716251932'><div className=" bg-green-600 rounded-md py-3 px-2 flex items-center justify-center mb-10 cursor-pointer lg:w-[300px]">
                    <RiWhatsappFill color='#fff' size={30} className=' mr-2'/>
                    <p className=' text-white font-bold'>CALL / WHATSAPP US</p>
                </div></a>
                <a href={`tel:${phoneNumber}`} onClick={handleClick} ><div className=" bg-green-600 rounded-md py-3 px-2 flex items-center justify-center mb-10 cursor-pointer lg:w-[300px]">
                    <BsQuestionCircleFill color='#fff' size={20} className=' mr-2'/>
                    <p className=' text-white font-bold'>ENQUIRE</p>
                </div></a>
            </div>
            <hr className=' mt-10'/>
        </div>
    )
};

export default Intro;