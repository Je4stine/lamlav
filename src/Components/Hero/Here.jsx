import './Hero.css';

const Hero =()=>{
    return (
       <div className='parallax'>
            <div className=' w-full h-full'>
                <h1 className=' text-[#f15d30] absolute top-[25vh] left-16 text-4xl max-[768px]:text-xl max-[768px]:font-[SourceSerifPro-Black] font-[SourceSerifPro-Regular]'>Welcome to Lamlav</h1>
                <h1 className=' text-white absolute font-[SourceSerifPro-Black] top-[32vh] text-7xl left-16 mt-5 max-[768px]:text-5xl max-[768]:left-10 max-[768px]:mt-0 max-[768px]:font-bold' >Let us take you <br /> places</h1>
                <p className=' text-white absolute top-[57vh] left-16 mt-5 max-[768px]:mt-0 text-lg font-[SourceSerifPro-Regular]'> Travel with us and discover places </p>
                <div className=' absolute top-[67vh] text-white border border-white rounded-md p-3 hover:bg-white hover:text-black duration-500 left-16'><a href='#why'>Learn More</a></div>
            </div> 
       </div>
    )
};

export default Hero;



        