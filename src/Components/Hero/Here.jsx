import './Hero.css';

const Hero =()=>{
    return (
       <div className='parallax'>
            <div className=' w-full h-full'>
                <h1 className=' text-[#fff] absolute font-[SourceSerifPro-Regular] lg:top-[32vh] top-[32vh] lg:text-7xl left-10 md:left-16 mt-5 md:text-5xl text-3xl lg:left-10 ' >Discover Africa With </h1>
                <h1 className=' text-white absolute font-[SourceSerifPro-Regular] lg:top-[42vh] top-[38vh] lg:text-7xl left-10 md:left-16 mt-5 md:text-5xl md:top-[39vh] text-3xl lg:left-10  ' >A Touch Of Luxury</h1>
                <div className=' absolute top-[67vh] text-white border border-white rounded-md p-3 hover:bg-white hover:text-black duration-500 left-16 font-[SourceSerifPro-Regular]'><a href='#Destination'>Learn More</a></div>
            </div> 
       </div>
    )
};

export default Hero;



        