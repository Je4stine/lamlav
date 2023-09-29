import React, {useState, useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import DATA from "./Data";

import Profile from "../../Assets/profile.jpg"

const Testimonials =({ testimonials})=> {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [testimonials]);

    return (

      <div className=" lg:px-[200px] my-10">
           <div className=" bg-white rounded-md shadow-sm flex flex-col items-center p-10">
               <img src={Profile} alt="Profile 1" className="rounded-full h-[200px] w-[200px] before:"/>
               <div className="">
                 <div className=" m-auto"><h3 className=" font-black text-xl mb-5">{testimonials[currentIdx].name}</h3></div>
              {/* <h4>Designer</h4> */}
                 <p className="font-[SourceSerifPro-Regular]">
                 "{testimonials[currentIdx].review}"
                 </p>
             </div>
          </div>

      </div>
      // <Carousel
      //   showArrows={true}
      //   infiniteLoop={true}
      //   showThumbs={false}
      //   showStatus={false}
      //   autoPlay={true}
      //   interval={6100}
      // >
        

      //   {
      //     DATA.map((item, index)=>{
      //       return (
      //         <div key={item.id}>
      //             <img src={Profile} alt="Profile 1" />
      //             <div className="myCarousel">
      //               <h3>{item.name}</h3>
      //               {/* <h4>Designer</h4> */}
      //               <p>
      //                {item.review}
      //               </p>
      //             </div>
      //         </div>
      //       )
      //     })
      //   }
      
      // </Carousel>
    );
  
}

export default Testimonials