import React, {useState} from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Tz from '../../Assets/tanzania_safari.jpg';
import DATA from './data';
import { Link } from "react-router-dom";
import Partners from "../Partners";
import { FiArrowRight  } from "react-icons/fi";
import Fade from 'react-reveal/Fade';

const Tanzania =()=> {
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
                  <h1 className=" text-white lg:text-8xl text-6xl font-[SourceSerifPro-Black] text-center mb-10 underline">
                        TANZANIA
                    </h1>
                  <h1 className=" text-white lg:text-6xl text-4xl font-[SourceSerifPro-Regular] text-center ">
                        A Central hub for Earth wildlife
                    </h1>
               </div>
               
           
            </div>
            <section className=" bg-white w-[100%] m-auto lg:px-[50px] px-10">
              <div className=" lg:px-[100px]">
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] lg:text-xl">
                It is challenging to find a destination that surpasses Tanzania as it  holds a unique position in the affections of both seasoned and novice Africa enthusiasts. Top  attraction spots on one's travel wish-list include: encountering The Big 5 in the animal-thronged Lost World of the <strong>Ngorongoro Crater</strong>, witnessing The Great Migration, and exploring <strong>Serengeti National Park</strong>, and tracking chimpanzees in the <strong>Mahale Mountains</strong>. 
                <br/><br/>Additionally, you can conquer the continent's highest peak, Mount Kilimanjaro, and witness the breathtaking spectacle of wildebeest herds thundering across the Serengeti during the Great Migration; and even combine your safari adventure with relaxing beach time in Zanzibar, which is just a short and picturesque flight away.The <strong>Mafia Islands</strong> possess a vibrant local culture and offer scenic stretches of sandy beaches lined with palm trees and crystal-clear azure waters. Here, you can partake in activities like <strong>kayaking</strong> and <strong>whale watching</strong>, or simply relax and soak up the sun.
                <br/><br/>Furthermore, Tanzania's expansive land, diverse parks, and extensive coastline offer a wide range of accommodations that mirror the diversity of its landscape. Whether you prefer the rustic charm of mobile camping, the luxury of tented camps, or the breathtaking elegance of high-end lodges and resorts, you can find a home that perfectly complements the ecosystem in which it is nestled.
                <br/><br/><strong>LAMLAV LEISURE  SAFARIS</strong> through <strong>Custom Safari, Private Safari, or Small  Group  Classic  Safaris</strong>, consistently include a visit to Tanzania, which is recognized as the prominent hub of the world's animal kingdom. We endeavour  to showcase  Tanzania's  diverse  landscapes comprising of:
                
                
                  <li>The renowned <strong>Northern circuit</strong>, which encompasses the Serengeti, Lake Manyara, Tarangire,  Mt Kilimanjaro and  the Ngorongoro Conservation Area.</li>
                  <li>The <strong>Southern circuit</strong>, which includes the vast  <strong>Nyerere  National  Park</strong>, renowned for its walking safaris and boat activities.</li>
                  <li>The untamed wilderness of the <strong>Western circuit</strong>, which encompasses  the Mahale  Mountains where Tanzania's chimpanzees make their home!</li>
                
                </p>
              </div>
            </section>
            <h1 className="lg:px-[100px] px-2 font-[SourceSerifPro-Black] text-2xl mt-20">Inspirational Safaris Holidays Kenya </h1>
            <section className="my-10 lg:px-[80px] px-2">
              <div className="lg:flex lg:justify-around lg:flex-wrap my-10">
                 

                  <a href="/tanzania/ultimatemigration" className="lg:w-1/2 my-5 bg-white shadow-md flex hover:shadow-xl hover:cursor-pointer">
                    <img alt="Safari" src="https://www.naturaltoursandsafaris.com/wp-content/uploads/2020/01/Wildebeest-Migration-Maasai-Mara-Natural-World-Kenya-Safaris.jpg" className="lg:w-1/3 w-1/2 mr-3 object-cover"/>
                    <div>
                      <h1 className=" font-[SourceSerifPro-Black] mb-10">1. Kenya and Tanzania, great  migration safari</h1>
                      <p className="font-[SourceSerifPro-Regular]"><em> Experience the thrill of being at the epicenter of the Great Wildebeest Migration, surrounded by the untamed wilderness while enjoying all the refined comforts you desire.</em></p>
                      <p className="font-[SourceSerifPro-Black] my-10">
                          13days/12 nights from $ 15,275 per person.
                        </p>
                          
                    </div>
                  </a>

                  <a href="/tanzania/splendoftz" className="lg:w-1/2 my-5 bg-white shadow-md flex hover:shadow-xl hover:cursor-pointer">
                    <img alt="Safari" src="https://secretafrica.com/wp-content/uploads/2021/10/Best-Time-To-Go-To-Tanzania-36.jpg" className="lg:w-1/3 w-1/2 mr-3 object-cover"/>
                    <div>
                        <h1 className=" font-[SourceSerifPro-Black] mb-10">2. Splendous of Tanzania</h1>
                        <p className="font-[SourceSerifPro-Regular]"> <em>An iconic safari combining the perfect blend of adventure, cultural immersion, and relaxation.</em></p>
                        <p className="font-[SourceSerifPro-Black] my-10">
                            10days/9nights From $ 11,860 per person.
                        </p>
                          
                    </div>
                  </a>

                  <a href="/safaris" className="flex flex-col items-center text-orange-500 h-[50px] mt-[50px] lg:mt-[100px] p-3 border border-black rounded-md hover:bg-orange-500 hover:text-white hover:border-white duration-500 font-[SourceSerifPro-Black]">
                    View All Itineraies     
                  </a> 
              </div>              
            </section>

            <section className=" bg-white flex flex-col items-center pt-20 ">
              <h1 className=" lg:text-5xl text-3xl font-[SourceSerifPro-Black] text-center">Explore the Most  popular<br/>  spots in Tanzania </h1>
              {
                DATA.map((item, index)=>{
                  const isEvenIndex = index % 2 === 0;
                  const itemClassName = isEvenIndex ? 'flex-row' : 'flex-row-reverse';

                  return (
                     <Fade left >
                      <div key={item.id} className={`lg:flex lg:justify-around items-center mt-20 lg:px-[80px] ${itemClassName}`}>
                   
                     
                        <img src={item.image} alt="Lion" className="lg:w-1/2 lg:h-3/4 m-auto" loading="lazy" />
                        <div className="p-5 lg:justify-between lg:w-1/2">
                          <h1 className="font-[SourceSerifPro-Black] mb-10 text-3xl">{item.title}</h1>
                          <p className="font-[SourceSerifPro-Regular] text-lg">
                            {item.descripton}
                          </p>
                          <Link to={`/tanzania/${item.id}`}>
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
                <h1 className="font-[SourceSerifPro-Black] text-3xl">Best time to visit Tanzania</h1>
              </div>
              <p className="font-[SourceSerifPro-Regular] text-lg py-6">
              The peak months for witnessing the iconic Great Migration river crossings in the Serengeti are from July to September. The dry season, spanning from June to October, marks prime time for optimal game sightings, while the period from November to March offers lush landscapes and a more secluded experience. 
              <br/><br/>The only period typically avoided is between April and May, when heavy rains may disrupt wildlife viewing. This time, however, is ideal for birdwatching as migratory species arrive, and it offers the opportunity to observe Great Migration herds with their newly born calves.
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
                  <div className=" h-[20px] w-[20px] rounded-full bg-green-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-green-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-yellow-300"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-gray-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-gray-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-green-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-green-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-green-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-green-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-green-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-yellow-300"></div>
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

export default Tanzania;