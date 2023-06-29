import {FaFacebook, FaInstagramSquare} from 'react-icons/fa';

import {AiFillTwitterCircle} from 'react-icons/ai';

import {MdCall} from 'react-icons/md';

const Top =()=>{
    return (
        <div className=' bg-black flex w-full h-[25px] justify-around items-center'>
            <div className=' flex justify-around'>
                <div className=' mr-5'><MdCall color='white'/> </div>
                <p className=' text-white text-xs mr-8 font-[SourceSerifPro-Regular]'> Call:</p>
                <p className=' text-white text-xs mr-8 font-[SourceSerifPro-Regular]'> +254716251932 {""} </p>
                <p className=' text-white text-xs mr-8 font-[SourceSerifPro-Regular]'>+254743937388</p>
                <p className=' text-white text-xs font-[SourceSerifPro-Regular]'>info@lamalavsafaris.com</p>
            </div>
            <div className=' flex'>
                <div className=' mr-3'>
                    <FaFacebook color='white'/>
                </div>
                <div className=' mr-3'>
                    <FaInstagramSquare color='white'/>
                </div>
                <div>
                    <AiFillTwitterCircle color='white'/>
                </div>                
            </div>
        </div>
    )
};

export default Top;