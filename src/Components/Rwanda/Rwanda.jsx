import React, {useState} from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Tz from '../../Assets/rwanda.jpg';
// import UDATA from './ugdata';

import RWANDADATA from "./rwandadata";
import { Link } from "react-router-dom";
import Partners from "../Partners";
import { FiArrowRight  } from "react-icons/fi";
import Fade from 'react-reveal/Fade';


const Rwanda =()=> {
  const [colorChanged, setColorChanged]= useState(false);

  const changeNavbarColor = () =>{
      if(window.scrollY >= 80){
        setColorChanged(true);
      }
      else{
        setColorChanged(false);
      }
   };
  window.addEventListener('scroll', changeNavbarColor);
  

 
 

    return (
      <div className=" bg-white">
          {
              colorChanged ? <Navreveal/> : <Navbar/>
          }
        <div>
        <div className=" relative">
               <img src={Tz} loading="lazy" className=" w-[100vw] h-[100vh] object-cover" alt="Lion"/>
               <div className=" absolute top-0 w-full h-[100vh] flex flex-col justify-center items-center">
                  <h1 className="  text-white lg:text-8xl text-6xl font-[SourceSerifPro-Black] text-center mb-10 underline">
                        RWANDA
                    </h1>
                  <h1 className=" text-white lg:text-6xl text-4xl font-[SourceSerifPro-Regular] text-center ">
                  Magical  land of a thousand hills
                    </h1>
               </div>
              
            </div>
            <section className=" bg-white w-[100%] m-auto lg:px-[50px] px-10">
              <div className=" lg:px-[100px]">
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] lg:text-xl">
                As you venture through the dense jungle forest with guided by experienced trackers, you may catch glimpses of the gorillas in their mist-covered surroundings. Witnessing these gentle giants in their natural environment is an unforgettable privilege and a significant conservation success story.
                <br/><br/><strong>Akagera National Park</strong>  in the east of the country offers a unique blend of savannah, wetlands, and lakes, which provide a diverse habitat for wildlife. Here, you may spot animals such as elephants, lions, giraffes, zebras, and a variety of bird species. <strong>Nyungwe Forest National Park</strong> on the other hand is located in the southwest and is an ancient rainforest teeming with biodiversity. It is home to over 1,000 species of plants with several endemic ones, as well as 13 different primate species - chimpanzees and colobus monkeys. Exploring the dense forest canopy, walking along scenic trails, and encountering these incredible primates make for a remarkable adventure.
                <br/><br/>In addition to its natural wonders, the capital city of <strong>Kigali</strong> offers a clean and friendly urban experience, that is rich in history and cultural heritage. Rwanda's commitment to conservation and unique wildlife encounters make it an exceptional destination to explore.
                <br/><br/>Rwanda offers much more than meets the eye and <strong>Lamav Leisure Safari</strong> is committed to creating an unforgettable experience  that captures the true essence of Rwanda - by taking  our esteemed guests  through it's varied landscapes such as the national parks, dense forests, and captivating cultural sites. Our aim is to refine the safari experience and highlight the unique features of Rwanda. Whether through personalized itineraries, exclusive private tours, or carefully curated small group safaris, we strive to provide an exceptional and tailored adventure for each traveler.
                
                </p>
              </div>
            </section>
            <h1 className="lg:px-[100px] px-2 font-[SourceSerifPro-Black] text-2xl mt-20">Inspirational Safaris Holidays Kenya </h1>
            <section className="my-10 lg:px-[80px] px-2">
              <div className="lg:flex lg:justify-around lg:flex-wrap my-10">
                  <a href="/rwanda/gorilla" className="lg:w-1/2 my-5 bg-white shadow-md flex hover:shadow-xl hover:cursor-pointer">
                    <img alt="Safari" src="https://drive.google.com/uc?export=view&id=1UlAmCffzQ7pgYoRwUwB1LCaL588Jpsw5" className="lg:w-1/3 w-1/2 mr-3 object-cover"/>
                    <div>
                        <h1 className=" font-[SourceSerifPro-Black] mb-10">1. Rwanda Gorilla & Game vacation</h1>
                        <p className="font-[SourceSerifPro-Regular]"> <em>An uplifting safari experience in Rwanda</em></p>
                        <p className="font-[SourceSerifPro-Black] my-10">
                        10days/9nights From $ 11,860 per person.
                        </p>
                        <div className="my-3 flex items-center">
                          <p className="font-[SourceSerifPro-Black] text-orange-600">View All Itineraies</p>
                          <FiArrowRight  />
                        </div>
                    </div>
                  </a>

                  <a href="/rwanda/thousandhills" className="lg:w-1/2 my-5 bg-white shadow-md flex hover:shadow-xl hover:cursor-pointer">
                    <img alt="Safari" src="https://live.staticflickr.com/8740/16298396774_e6d631a1e7_b.jpg" className="lg:w-1/3 w-1/2 mr-3 object-cover"/>
                    <div>
                      <h1 className=" font-[SourceSerifPro-Black] mb-10">2. Treasures  of a thousand hills</h1>
                      <p className="font-[SourceSerifPro-Regular]"><em> An adventure amidst the captivating allure of misty volcanoes densely cloaked in jungle foliage.</em></p>
                      <p className="font-[SourceSerifPro-Black] my-10">
                        10days/9nights From $ 11,860 per person.
                        </p>
                        <div className="my-3 flex items-center">
                          <p className="font-[SourceSerifPro-Black] text-orange-600">View All Itineraies</p>
                          <FiArrowRight  />
                        </div>
                    </div>
                  </a>   
              </div>              
            </section>

            <section className=" bg-white flex flex-col items-center pt-20 ">
              <h1 className=" lg:text-5xl text-3xl font-[SourceSerifPro-Black] text-center">Explore the Most  popular<br/>  spots in Rwanda </h1>
              {
                RWANDADATA.map((item, index)=>{
                  const isEvenIndex = index % 2 === 0;
                  const itemClassName = isEvenIndex ? 'flex-row' : 'flex-row-reverse';

                  return (
                     <Fade left>
                      <div key={item.id} className={`lg:flex lg:justify-around items-center mt-20 lg:px-[80px] ${itemClassName}`}>
                   
                     
                        <img src={item.image} alt="Lion" className="lg:w-1/2 lg:h-3/4 m-auto" loading="lazy" />
                        <div className="p-5 lg:justify-between lg:w-1/2">
                          <h1 className="font-[SourceSerifPro-Black] mb-10 text-3xl">{item.title}</h1>
                          <p className="font-[SourceSerifPro-Regular] text-lg">
                            {item.descripton}
                          </p>
                          <Link to={`/rwanda/${item.id}`}>
                            <div className="mt-10 border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto">
                              <span>Explore more</span>
                            </div>
                          </Link>
                        </div>    
                      </div>
                     
                      <hr className="h-px my-8 border-0 bg-gray-300 w-full" />
                    </Fade>
                  )
                })
              }
            </section>
        </div>

        <div className="bg-white px-10">
              <div>
                <h1 className="font-[SourceSerifPro-Black] text-3xl">Best time to visit Rwanda</h1>
              </div>
              <p className="font-[SourceSerifPro-Regular] text-lg py-6">
              Irrespective of the season, embarking on a trek to witness mountain gorillas and chimpanzees in Rwanda is a truly extraordinary experience, available throughout the year. For the best chances of encountering the country's notable highlight, the mountain gorilla, it is recommended to choose the drier period from June to September when hiking conditions are more favorable. 
              <br/><br/>The Optimal times for tracking chimpanzees, along with a quieter atmosphere, coincide with the rainy seasons from March to May and in November.
              </p>
              <div className=" bg-gray-100 py-10">
              <div className="  flex justify-around mb-8">
                <p className="font-[SourceSerifPro-Black]">Jan</p>
                <p className="font-[SourceSerifPro-Black]">Feb</p>
                <p className="font-[SourceSerifPro-Black]">Mar</p>
                <p className="font-[SourceSerifPro-Black]">Apr</p>
                <p className="font-[SourceSerifPro-Black]">May</p>
                <p className="font-[SourceSerifPro-Black]">Jun</p>
                <p className="font-[SourceSerifPro-Black]">Jul</p>
                <p className="font-[SourceSerifPro-Black]">Aug</p>
                <p className="font-[SourceSerifPro-Black]">Sep</p>
                <p className="font-[SourceSerifPro-Black]">Oct</p>
                <p className="font-[SourceSerifPro-Black]">Nov</p>
                <p className="font-[SourceSerifPro-Black]">Dec</p>
              </div>
              <div className="  flex justify-around">
                  <div className=" h-[20px] w-[20px] rounded-full bg-yellow-300"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-yellow-300"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-gray-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-gray-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-gray-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-green-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-green-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-green-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-green-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-gray-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-gray-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-yellow-300"></div>
              </div>
              </div>
              <div className=" flex justify-evenly my-10"> 
                 <p>Excellent time</p>
                  <div className=" h-[20px] w-[20px] rounded-full bg-green-400"></div>
                  <p>Good</p>
                  <div className=" h-[20px] w-[20px] rounded-full bg-yellow-300"></div>
                  <p>Mixed</p>
                  <div className=" h-[20px] w-[20px] rounded-full bg-gray-400"></div>
              </div>
            </div>
            <hr/>
            <Partners/>
          <div>
              <img src={require('../../Assets/kanairo-black.svg').default } alt="Kanairo"/>
          </div>
        <Footer/>
      </div>
  )
};

export default Rwanda;