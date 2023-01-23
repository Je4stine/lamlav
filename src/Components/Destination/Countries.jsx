import Kenya from '../../Assets/Kenya.jpg';

import Tanzania from '../../Assets/Tanzania2.jpg'

import Uganda from '../../Assets/uganda.jpg'

import Rwanda from '../../Assets/Rwanda2.jpg'

const Countries =()=>{
    return (
        <div className=' flex flex-col items-center justify-center'>
            <h1 className=' m-auto font-bold text-5xl my-20 max-[768px]:text-xl '> Discover the beauty of East Africa</h1>
            <div className=' flex p-5 max-[768px]:flex-col max-[768px]:items-center max-[768px]:justify-center max-[768px]:ml-2 '>
                <div className=' mr-5 max-[768px]:mb-5 relative scale-100 hover:scale-105 transition-all ease-in-out duration-500'>
                    <img src={Kenya} alt="Kenya" className=' rounded-md'/>
                    <span className=' absolute py-2 px-3 bg-red-600 rounded-l-3xl text-white bottom-[40px] right-0 hover:px-[25px] transition-all ease-in duration-200'>
                        Kenya
                    </span>
                </div>
                <div className=' mr-5 max-[768px]:mb-5 relative scale-100 hover:scale-105 transition-all ease-in-out duration-500'>
                    <img src={Tanzania} alt="Tanzania" className=' rounded-md'/>
                    <span className=' absolute py-2 px-3 bg-red-600 rounded-l-3xl text-white bottom-[40px] right-0 hover:px-[25px] transition-all ease-in duration-200'>
                        Tanzania
                    </span>
                </div>
                <div className=' mr-5 max-[768px]:mb-5 relative scale-100 hover:scale-105 transition-all ease-in-out duration-500'>
                    <img src={Uganda} alt="Uganda" className=' rounded-md'/>
                    <span className=' absolute py-2 px-3 bg-red-600 rounded-l-3xl text-white bottom-[40px] right-0 hover:px-[25px] transition-all ease-in duration-200'>
                        Uganda
                    </span>
                </div>
                <div className=' mr-5 max-[768px]:mb-5 relative scale-100 hover:scale-105 transition-all ease-in-out duration-500'>
                    <img src={Rwanda} alt="Rwanda" className=' rounded-md'/>
                    <span className=' absolute py-2 px-3 bg-red-600 rounded-l-3xl text-white bottom-[40px] right-0 hover:px-[25px] transition-all ease-in duration-200'>
                        Rwanda
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Countries; 