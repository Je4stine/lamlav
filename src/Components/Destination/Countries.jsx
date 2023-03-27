import Kenya from '../../Assets/wildebeests1.jpg';

import Tanzania from '../../Assets/kilima.jpg'

import Uganda from '../../Assets/ug1.jpg'

import Rwanda from '../../Assets/rwan.jpg'

const Countries =()=>{
    return (
        <div className=' flex flex-col items-center justify-center'>
            <h1 className=' m-auto font-bold lg:text-5xl my-20 text-xl '> Destinations </h1>
            <div className=' flex p-5 flex-col items-center justify-center ml-2 '>
                <a href='/safaris' className=' mr-5 mb-5 relative scale-100 hover:scale-105 transition-all ease-in-out duration-500 w-[90%]' >
                    <img src={Kenya} alt="Kenya" className=' rounded-md' loading='lazy'/>
                    <span className=' absolute py-2 px-3 bg-red-600 rounded-l-3xl text-white bottom-[40px] right-0 hover:px-[25px] transition-all ease-in duration-200'>
                        Kenya
                    </span>
                </a>


                <div className=' mr-5 mb-5 relative scale-100 hover:scale-105 transition-all ease-in-out duration-500 w-[90%]'>
                    <img src={Tanzania} alt="Tanzania" className=' rounded-md' loading='lazy'/>
                    <span className=' absolute py-2 px-3 bg-red-600 rounded-l-3xl text-white bottom-[40px] right-0 hover:px-[25px] transition-all ease-in duration-200'>
                        Tanzania
                    </span>
                </div>
                <div className=' mr-5 mb-5 relative scale-100 hover:scale-105 transition-all ease-in-out duration-500 w-[90%]'>
                    <img src={Uganda} alt="Uganda" className=' rounded-md' loading='lazy'/>
                    <span className=' absolute py-2 px-3 bg-red-600 rounded-l-3xl text-white bottom-[40px] right-0 hover:px-[25px] transition-all ease-in duration-200'>
                        Uganda
                    </span>
                </div>
                <div className=' mr-5 mb-5 relative scale-100 hover:scale-105 transition-all ease-in-out duration-500 w-[90%]'>
                    <img src={Rwanda} alt="Rwanda" className=' rounded-md' loading='lazy'/>
                    <span className=' absolute py-2 px-3 bg-red-600 rounded-l-3xl text-white bottom-[40px] right-0 hover:px-[25px] transition-all ease-in duration-200'>
                        Rwanda
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Countries; 