import Kenya from '../../Assets/wildebeests1.jpg';

import Tanzania from '../../Assets/kilima.jpg'

import Uganda from '../../Assets/ug1.jpg'

import Rwanda from '../../Assets/rwan.jpg'

const Countries =()=>{
    return (
        <div className=' flex flex-col items-center justify-center'>
            <h1 className=' m-auto font-bold lg:text-5xl my-20 text-xl '> Destinations </h1>

            <div className=' flex flex-col items-center justify-center'>
                
                <a href='/kenya' className='lg:flex flex-1 mb-5 lg:w-[98%] bg-white'>
                    <img src={Kenya} alt="Kenya" className='lg:w-1/2 lg:h-[50vh]' loading='lazy'/>
                        <div className=' p-10 flex flex-col justify-center'> 
                            <h1 className=' font-bold text-2xl '>
                                    Kenya
                            </h1>
                            <br/>
                            <h1 className=' font-bold text-xl'>
                                    Home of Adventure
                            </h1>
                            <br/>
                            <p className=' font-[SourceSerifPro-Regular] '>
                                    Kenya is where the concept of commercial safaris was first introduced in the 1930s, and it continues to be one of the top destinations in the world for spectacular wildlife watching and beach vacations
                            </p>
                            <a href='/kenya'>
                                <div className=' border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto mt-10'>
                                    <span className=' font-[SourceSerifPro-Regular]'>Explore more</span>
                                </div>
                            </a>
                        </div>
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