import Adventure from '../../Assets/hotel-resto-7.jpg'


const Why =()=>{
    return (
        <div className=' my-10 flex bg-fuchsia-50 rounded-md mr-10 p-8 max-[768px]:p-2 max-[768px]:flex-col-reverse max-[768px]:m-auto max-[768px]:items-center' id='why'>
            <div className=' flex flex-col max-[768px]:items-center'>
                <img src={Adventure} alt="Adventure" className="w-3/4 mb-5"/>                              
            </div>
            <div className='p-5 w-3/4 max-[768px]:p-1 flex flex-col justify-center'>
                <h1 className=' mb-5 text-2xl text-[#f15d30]'> Welcome to Lamlav Leisure Safaris</h1>
                <h1 className=' font-bold text-5xl mb-10 max-[768px]:text-xl'>
                        It's time to start your adventure
                </h1>
                <p className=' font-[Poppins]'>
                    We are an exemplary regional safari outfitter operating in East Africa and beyond. We are globally renowned for operating some of the most luxurious and distinct safaris in Kenya, Tanzania, Uganda and Rwanda, and for  taking our esteemed guests to some of  most elegant and experimental lodges and camps - where each lodge or camp impeccably captures the  true essence of the wild and its natural surroundings.                
                </p>
            </div>
        </div>
    )
}

export default Why;