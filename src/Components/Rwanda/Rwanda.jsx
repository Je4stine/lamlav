import React, {useState} from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Tz from '../../Assets/rwanda.jpg';
// import UDATA from './ugdata';

import RWANDADATA from "./rwandadata";
import { Link } from "react-router-dom";

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
  

  // const renderItems =({ title, description, })=>{
  //   return(
  //     <div>
  //       <div className=" lg:flex lg:justify-around items-center  mt-20 lg:px-[80px]">
  //                 <img src={Tz} alt=" Lion" className=" lg:w-1/2 lg:h-3/4 m-auto" loading="lazy"/>
  //                 <div className="p-5 lg:justify-between lg:w-1/2">
  //                     <h1 className=" font-[SourceSerifPro-Bold] mb-10 text-3xl">{title}</h1>
  //                     <p className=" font-[SourceSerifPro-Regular] text-lg">
  //                       {description}
  //                     </p>
  //                     <a href='/kenya/destamboseli'><div className=' mt-10 border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto'>
  //                               <span >Explore more</span>
  //                   </div></a> 
  //             </div>
  //         </div>
  //         <hr class="h-px my-8 border-0 bg-gray-300 w-full"></hr>
  //     </div>
  //   )
  // }
 

    return (
      <div>
          {
              colorChanged ? <Navreveal/> : <Navbar/>
          }
        <div>
        <div className=" relative">
               <img src={Tz} loading="lazy" className=" w-[100vw] h-[100vh] object-cover" alt="Lion"/>
               <hi className=" absolute top-[50%] lg:left-[35%] left-15%] text-white lg:text-6xl text-6xl font-[SourceSerifPro-Black] text-center ">
                    Welcome  to the "Land of a thousand hills."
                </hi>
           
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

            <section className=" bg-white flex flex-col items-center pt-20 ">
              <h1 className=" lg:text-5xl text-3xl font-[SourceSerifPro-Bold] text-center">Explore the Most  popular<br/>  spots in Rwanda </h1>
              {
                RWANDADATA.map((item, index)=>{
                  const isEvenIndex = index % 2 === 0;
                  const itemClassName = isEvenIndex ? 'flex-row' : 'flex-row-reverse';

                  return (
                     <div >
                      <div key={item.id} className={`lg:flex lg:justify-around items-center mt-20 lg:px-[80px] ${itemClassName}`}>
                   
                     
                        <img src={item.image} alt="Lion" className="lg:w-1/2 lg:h-3/4 m-auto" loading="lazy" />
                        <div className="p-5 lg:justify-between lg:w-1/2">
                          <h1 className="font-[SourceSerifPro-Bold] mb-10 text-3xl">{item.title}</h1>
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
                    </div>
                  )
                })
              }
            </section>
        </div>
          <div>
              <img src={require('../../Assets/kanairo-black.svg').default } alt="Kanairo"/>
          </div>
        <Footer/>
      </div>
  )
};

export default Rwanda;