import Adventure from '../../Assets/cranes.jpg';

const Why =()=>{
    return (
        <div className=' bg-white lg:p-2 p-1 flex flex-col m-auto items-center justify-center' id='why'>
          
            <div className='flex flex-col justify-center items-center'>
                <h1 className=' font-bold text-4xl lg:text-5xl mb-10 max-[768px]:text-xl'>
                        It's time to start your adventure
                </h1>


                <div className=' lg:flex lg:flex-row-reverse justify-center items-center'>
                    <img src={Adventure} alt="Adventure" className=" lg:w-1/2 mb-5 lg:mb-0"/> 
                        <div >
                            <p className=' font-[SourceSerifPro-Regular] lg:text-lg text-md mb-5 lg:p-10'>
                                Lamlav Leisure Safaris is globally renowned for operating some of the most luxurious and distinct Safaris in <strong>Kenya</strong>, <strong>Tanzania</strong>, <strong>Uganda</strong> and <strong>Rwanda</strong>.<br/>
                                <br/>
                                We take pride in taking our esteemed guests to some of the most elegant and experimental camps and lodges, where each lodge or camp impeccably captures the true essence of the wild and its natural surroundings.                 
                            </p>
                            <a href='/about'><div className=' border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto'>
                                <span className='font-[SourceSerifPro-Regular]'>Discover more</span>
                            </div></a> 
                        </div>                       
                </div>
                
            </div>
        </div>
    )
}

export default Why;