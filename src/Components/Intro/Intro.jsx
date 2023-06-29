import {GiCommercialAirplane} from 'react-icons/gi';

import { FcMoneyTransfer, FcOnlineSupport} from 'react-icons/fc';

import {MdDateRange} from 'react-icons/md';

const Intro =()=>{
    return (
        <div className=' bg-white w-full p-5 md:flex justify-around py-10'> 
            <div className='flex flex-col items-center justify-center text-center mb-10 md:mb-0'>
                <GiCommercialAirplane size={50}/>
                <h1 className='font-[SourceSerifPro-Black]'> Amazing destinations</h1>
                <h1 className='font-[SourceSerifPro-Regular]'>Beaches, Game Parks, Resorts, City Tours</h1>
            </div>
            <div className='flex flex-col items-center justify-center text-center  mb-10 md:mb-0'>
                <FcMoneyTransfer size={50}/>
                <h1 className=' font-[SourceSerifPro-Black]'>Best Price Guaranteed</h1>
                <h1 className='font-[SourceSerifPro-Regular]'>Our Rates are reasonable and competitive</h1>
            </div>
            <div className='flex flex-col items-center justify-center text-center  mb-10 md:mb-0'>
                <FcOnlineSupport size={50}/>
                <h1 className=' font-[SourceSerifPro-Black]'>Great Customer Support</h1>
                <h1 className='font-[SourceSerifPro-Regular]'>Our Customer Service is key to our Business approach.</h1>
            </div>
            <div className='flex flex-col items-center justify-center text-center  mb-10 md:mb-0'>
                <MdDateRange size={50}/>
                <h1 className=' font-[SourceSerifPro-Black]'>Super Fast Booking</h1>
                <h1 className='font-[SourceSerifPro-Regular]'>We make booking process as swift as possible.</h1>
            </div>
        </div>
    )
};

export default Intro;