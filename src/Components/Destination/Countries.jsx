import Kenya from '../../Assets/wildebeests1.jpg';

import Tanzania from '../../Assets/tanzania_safari.jpg'

import Uganda from '../../Assets/muurchison-750x429-1.jpg'

import Rwanda from '../../Assets/rwanda.jpg'

const Countries =()=>{
    return (
        <div className=' flex flex-col items-center justify-center'>
            <h1 className=' m-auto font-[SourceSerifPro-Black] lg:text-5xl my-20 text-xl '> Destinations </h1>

            <div className=' flex flex-col items-center justify-center'>
                
                <a href='/kenya' className='lg:flex flex-1 mb-5 lg:w-[98%] bg-white'>
                    <img src={Kenya} alt="Kenya" className='lg:w-1/2 lg:h-[50vh]' loading='lazy'/>
                        <div className=' p-10 flex flex-col justify-center'> 
                            <h1 className=' font-[SourceSerifPro-Black] text-2xl '>
                                    Kenya
                            </h1>
                            <br/>
                            <h1 className=' font-[SourceSerifPro-Black] text-xl'>
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


                <a href='/tanzania' className='lg:flex lg:flex-row-reverse flex-1 mb-5 lg:w-[98%] bg-white'>
                    <img src={Tanzania} alt="Kenya" className='lg:w-1/2 lg:h-[50vh]' loading='lazy'/>
                    <div className=' p-10 flex flex-col justify-center'> 
                            <h1 className=' font-[SourceSerifPro-Black] text-2xl '>
                                    Tanzania
                            </h1>
                            <br/>
                            <h1 className=' font-[SourceSerifPro-Black] text-xl'>
                                    The quintessential African holiday experience
                            </h1>
                            <br/>
                            <p className=' font-[SourceSerifPro-Regular] '>
                                Tanzania encapsulates the quintessential African holiday experience in its rich and diverse essence. From the majestic heights of Kilimanjaro to the awe-inspiring depths of the Ngorongoro; to  the golden landscapes of Serengeti, and idyllic  beaches  of Zanzibar, this sun-drenched land guarantees boundless variety, and unforgettable adventures.                            </p>
                            <a href='/tanzania'>
                                <div className=' border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto mt-10'>
                                    <span className=' font-[SourceSerifPro-Regular]'>Explore more</span>
                                </div>
                            </a>
                    </div>
                </a>



                <a href='/uganda' className='lg:flex flex-1 mb-5 lg:w-[98%] bg-white'>
                    <img src={Uganda} alt="Kenya" className='lg:w-1/2 lg:h-[50vh]' loading='lazy'/>
                        <div className=' p-10 flex flex-col justify-center'> 
                            <h1 className=' font-[SourceSerifPro-Black] text-2xl '>
                                    Uganda
                            </h1>
                            <br/>
                            <h1 className=' font-[SourceSerifPro-Black] text-xl'>
                                    The "Pearl Of Africa "
                            </h1>
                            <br/>
                            <p className=' font-[SourceSerifPro-Regular] '>
                                    “For magnificence, for variety of form and color, for profusion of brilliant life — bird, insect, reptile, beast — for vast scale — Uganda is truly the ‘Pearl of Africa’.” ~ Sir Winston Churchill                             </p>
                            <a href='/uganda'>
                                <div className=' border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto mt-10'>
                                    <span className=' font-[SourceSerifPro-Regular]'>Explore more</span>
                                </div>
                            </a>
                        </div>
                </a>




                <a href='/rwanda' className='lg:flex lg:flex-row-reverse flex-1 mb-5 lg:w-[98%] bg-white'>
                    <img src={Rwanda} alt="Kenya" className='lg:w-1/2 lg:h-[50vh]' loading='lazy'/>
                    <div className=' p-10 flex flex-col justify-center'> 
                            <h1 className=' font-[SourceSerifPro-Black] text-2xl '>
                                    Rwanda
                            </h1>
                            <br/>
                            <h1 className=' font-[SourceSerifPro-Black] text-xl'>
                                Welcome  to the "Land of a thousand hills."
                            </h1>
                            <br/>
                            <p className=' font-[SourceSerifPro-Regular] '>
                            Rwanda is a country with three national parks: <strong>Volcanoes  National  park</strong>, <strong>Akagera National Park</strong>, and <strong>Nyungwe Forest Natiional park</strong>. 
                            </p>
                            <a href='/rwanda'>
                                <div className=' border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto mt-10'>
                                    <span className=' font-[SourceSerifPro-Regular]'>Explore more</span>
                                </div>
                            </a>
                    </div>
                </a>


            </div>
        </div>
    )
}

export default Countries; 