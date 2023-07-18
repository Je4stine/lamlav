import React, {useState} from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Tz from '../../Assets/tanzania_safari.jpg';
import DATA from './data';
import { Link } from "react-router-dom";

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
  

  const renderItems =({ title, description, })=>{
    return(
      <div>
        <div className=" lg:flex lg:justify-around items-center  mt-20 lg:px-[80px]">
                  <img src={Tz} alt=" Lion" className=" lg:w-1/2 lg:h-3/4 m-auto" loading="lazy"/>
                  <div className="p-5 lg:justify-between lg:w-1/2">
                      <h1 className=" font-[SourceSerifPro-Bold] mb-10 text-3xl">{title}</h1>
                      <p className=" font-[SourceSerifPro-Regular] text-lg">
                        {description}
                      </p>
                      <a href='/kenya/destamboseli'><div className=' mt-10 border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto'>
                                <span >Explore more</span>
                    </div></a> 
              </div>
          </div>
          <hr class="h-px my-8 border-0 bg-gray-300 w-full"></hr>
      </div>
    )
  }
 

    return (
      <div>
          {
              colorChanged ? <Navreveal/> : <Navbar/>
          }
        <div>
        <div className=" relative">
               <img src={Tz} loading="lazy" className=" w-[100vw] h-[100vh] object-cover" alt="Lion"/>
               <hi className=" absolute top-[50%] lg:left-[35%] left-15%] text-white lg:text-6xl text-6xl font-[SourceSerifPro-Black] text-center ">
                    Welcome to Tanzania
                </hi>
           
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

            <section className=" bg-white flex flex-col items-center pt-20 ">
              <h1 className=" lg:text-5xl text-3xl font-[SourceSerifPro-Bold] text-center">Explore the Most  popular<br/>  spots in Tanzania </h1>
              {
                DATA.map((item, index)=>{
                  const isEvenIndex = index % 2 === 0;
                  const itemClassName = isEvenIndex ? 'flex-row' : 'flex-row-reverse';

                  return (
                     <div >
                      <div key={item.id} className={`lg:flex lg:justify-around items-center mt-20 lg:px-[80px] ${itemClassName}`}>
                   
                     
                        <img src={Tz} alt="Lion" className="lg:w-1/2 lg:h-3/4 m-auto" loading="lazy" />
                        <div className="p-5 lg:justify-between lg:w-1/2">
                          <h1 className="font-[SourceSerifPro-Bold] mb-10 text-3xl">{item.title}</h1>
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

export default Tanzania;