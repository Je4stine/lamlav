import Adventure from '../../Assets/cranes.jpg';

const Why =()=>{
    return (
        <div className=' bg-white rounded-md lg:p-2 p-1 flex flex-col m-auto items-center justify-center' id='why'>
          
            <div className='p-5 flex flex-col justify-center items-center'>
                <h1 className=' font-bold text-4xl lg:text-5xl mb-10 max-[768px]:text-xl'>
                        It's time to start your adventure
                </h1>
                <div className=' flex flex-col items-center'>
                    <img src={Adventure} alt="Adventure" className=" rounded-md mx-10"/>                              
                </div>
                <div className=' p-5'>
                    <p className=' font-[SourceSerifPro-Regular] lg:text-lg text-md mb-5'>
                        Lamlav Leisure Safaris is globally renowned for operating some of the most luxurious and distinct Safaris in Kenya, Tanzania, Uganda and Rwanda.<br/>
                        <br/>
                        We take pride in taking our esteemed guests to some of the most elegant and experimental camps and lodges, where each lodge or camp impeccably captures the true essence of the wild and its natural surroundings.                 
                    </p>
                </div>
              
                <a href='/about'><div className=' border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center'>
                    <span >Discover more</span>
                </div></a>
            </div>
        </div>
    )
}

export default Why;