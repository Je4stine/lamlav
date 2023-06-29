
import {FaFacebook, FaInstagramSquare} from 'react-icons/fa';

import {AiFillTwitterCircle} from 'react-icons/ai';

const Footer =()=>{

    const Today = new Date();

    return (
        <div className=" bg-black w-full p-5  ">
            <div className=' flex flex-1 justify-between max-[768px]:flex-col'> 
                <div className=' flex flex-col flex-1 items-center'>
                    <div className=' flex item-center'>
                        <h2 className=' text-white max-[768px]:hidden font-[SourceSerifPro-Regular]'>Lamlav</h2>
                    </div>
                    <p className=" text-gray-400 text-center max-[768px]:text-sm"> 
                        Lamlav Leisure Safaris <br/>
                        Grevillea lane,Brookside drive- Westland <br/>
                        P o box 57945 -00200 <br />
                        Nairobi - Kenya. <br />
                        Email: info@lamlavsafaris.com <br/>
                        Phone: +254716251932
                                +254743937388
                    </p>
                </div>

                <hr className=' w-[1px] h-[200px] inline-block  bg-white max-[768px]:hidden'/>

                <div className=' flex flex-col flex-1'>
                    <div className=' flex flex-col items-center'>
                        <h2 className=' text-white max-[768px]:text-sm max-[768px]:mt-5 font-[SourceSerifPro-Black]'> Quick Links</h2>
                        <a href='#1' className=' no-underline text-gray-400 max-[768px]:text-sm font-[SourceSerifPro-Regular]'> Home</a>
                        <a href="#1" className=' no-underline text-gray-400 max-[768px]:text-sm font-[SourceSerifPro-Regular]'>About US</a>
                        <a href='#1' className=' no-underline text-gray-400 max-[768px]:text-sm font-[SourceSerifPro-Regular]'>Policies</a>
                        <a href='#1' className=' no-underline text-gray-400 max-[768px]:text-sm font-[SourceSerifPro-Regular]'>FAQs</a>
                    </div>
                </div>

                {/* <div className=' w-[0.5px] h-[200px] bg-white flex flex-col items-center'>
                </div> */}
                <hr className=' w-[1px] h-[200px] inline-block bg-white max-[768px]:hidden'/>
                <div className=' flex flex-col flex-1 items-center'>
                    <h2 className=' text-white max-[768px]:text-sm max-[768px]:mt-5 font-[SourceSerifPro-Bold]'>Socials</h2>
                    <div className='flex max-[768px]:items-center '>
                         <FaFacebook color='#fff' size={25}/>
                         <p className=' text-gray-400 m-2 max-[768px]:text-sm font-[SourceSerifPro-Regular]'>Lamlav Leisure Safaris </p>
                    </div>
                    <div className='flex items-center '>
                         <FaInstagramSquare color=' #fff' size={25}/>
                         <p className=' text-gray-400 m-2 max-[768px]:text-sm font-[SourceSerifPro-Regular]'>Lamlav Leisure Safaris </p>
                    </div>
                    <div className='flex items-center '>
                         <AiFillTwitterCircle color=' #fff' size={25}/>
                         <p className=' text-gray-400 m-2 max-[768px]:text-sm font-[SourceSerifPro-Regular]'>Lamlav Leisure Safaris </p>
                    </div>
                    
                  
                </div>
            </div>
          <div className=' m-auto flex items-center'>
                <p className=' text-gray-400 m-auto text-center mt-5 max-[768px]:text-sm font-[SourceSerifPro-Regular]'>All rights reserved  &#169; {Today.getFullYear()}- Lamlav Leisure Safaris  </p>
         </div> 

        </div>
    )
}

export default Footer;