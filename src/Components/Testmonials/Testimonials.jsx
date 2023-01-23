import { Parallax } from 'react-parallax';

import Beach from '../../Assets/beach.jpg';

import Profile from "../../Assets/angry.jpg";

const Testimonials =()=>{
    return (
        <div>
            <Parallax bgImage={Beach} bgImageAlt="the cat" strength={500} >
                <div className=' w-full h-[400px] flex flex-col items-center justify-center'>
                    <h1 className=' text-xl font-bold mb-5'>
                        Testimonials
                    </h1>
                    <div className=' flex justify-around'>
                        <div className=' bg-white w-[280px] h-[160px] p-4 rounded mr-5'>
                            <p className=' text-sm text-gray-500 font-thin'> "I'm glad I got to know Lamlav Safaris, exquisite services I would 100% reccomend. My honeymoon was such a blast"</p>
                            <div className=' flex items-center justify-center'>
                                <img src={Profile} alt='profilePhoto' className=' w-[60px] h-[60px] rounded-full mr-5'/>
                                <div>
                                    <p className=' text-sm'> Clarence Mianoo</p>
                                    <p className='text-red-500 text-xs'> Uganda</p>
                                </div>
                            </div>
                        </div>

                        <div className=' bg-white w-[280px] h-[160px] p-4 rounded mr-5'>
                            <p className=' text-sm text-gray-500 font-thin'> "I'm glad I got to know Lamlav Safaris, exquisite services I would 100% reccomend. My honeymoon was such a blast"</p>
                            <div className=' flex items-center justify-center'>
                                <img src={Profile} alt='profilePhoto' className=' w-[60px] h-[60px] rounded-full mr-5'/>
                                <div>
                                    <p className=' text-sm'> Clarence Mianoo</p>
                                    <p className='text-red-500 text-xs'> Uganda</p>
                                </div>
                            </div>
                        </div>

                        <div className=' bg-white w-[280px] h-[160px] p-4 rounded mr-5'>
                            <p className=' text-sm text-gray-500 font-thin'> "I'm glad I got to know Lamlav Safaris, exquisite services I would 100% reccomend. My honeymoon was such a blast"</p>
                            <div className=' flex items-center justify-center'>
                                <img src={Profile} alt='profilePhoto' className=' w-[60px] h-[60px] rounded-full mr-5'/>
                                <div>
                                    <p className=' text-sm'> Clarence Mianoo</p>
                                    <p className='text-red-500 text-xs'> Uganda</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    )
};

export default Testimonials;