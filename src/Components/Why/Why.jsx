import Adventure from '../../Assets/cranes.jpg';




const Why =()=>{
    return (
        <div className=' lg:flex lg:flex-row bg-white rounded-md lg:p-2 p-1 flex flex-col-reverse m-auto items-center justify-center' id='why'>
            <div className=' flex flex-col max-[768px]:items-center'>
                <img src={Adventure} alt="Adventure" className=" rounded-md my-5 mx-10"/>                              
            </div>
            <div className='p-5 w-3/4 max-[768px]:p-1 flex flex-col justify-center'>
                <h1 className=' mb-5 text-2xl text-[#f15d30] max-[768px]:text-xl mt-5'> Welcome to Lamlav Leisure Safaris</h1>
                <h1 className=' font-bold text-5xl mb-10 max-[768px]:text-xl'>
                        It's time to start your adventure
                </h1>
                <p className=' font-[SourceSerifPro-Regular] lg:text-lg text-md mb-5'>
                    We are globally renowned for operating some of the most luxurious and distinct safaris in Kenya, Tanzania, Uganda and Rwanda, and for  taking our esteemed guests to some of  most elegant and experimental lodges and camps - where each lodge or camp impeccably captures the  true essence of the wild and its natural surroundings.                
                </p>
                <a href='/about'><div className=' border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center'>
                    <span >Discover more</span>
                </div></a>
            </div>
        </div>
    )
}

export default Why;