import React, {useState} from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Tz from '../../Assets/muurchison-750x429-1.jpg';
import UDATA from './ugdata';
import { Link } from "react-router-dom";
import Ugim from '../../Assets/muurchison-750x429-1.jpg'
import Partners from "../Partners";

const Uganda =()=> {
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
                  <img src={Ugim} alt=" Lion" className=" lg:w-1/2 lg:h-3/4 m-auto" loading="lazy"/>
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
      <div className="bg-white">
          {
              colorChanged ? <Navreveal/> : <Navbar/>
          }
        <div>
        <div className=" relative">
               <img src={Tz} loading="lazy" className=" w-[100vw] h-[100vh] object-cover" alt="Lion"/>
               <div className=" absolute top-0 w-full h-[100vh] flex flex-col justify-center items-center">
                  <h1 className="  text-white lg:text-8xl text-6xl font-[SourceSerifPro-Black] text-center mb-10 underline">
                        UGANDA
                    </h1>
                  <h1 className=" text-white lg:text-6xl text-4xl font-[SourceSerifPro-Regular] text-center ">
                        Pearl of Africa
                    </h1>
               </div>
           
            </div>
            <section className=" bg-white w-[100%] m-auto lg:px-[50px] px-10">
              <div className=" lg:px-[100px]">
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] lg:text-xl">
                Uganda's beauty lies not only in its natural wonders but also in the genuine warmth and authenticity of its people. Whether it's exploring the wild, embarking on thrilling adventures, or immersing oneself in rich cultural experiences, the "Pearl of Africa" offers a truly unique and unforgettable journey for travelers seeking an exceptional African experience.
                <br/><br/>From its towering Rwenzori Mountains to the sprawling savannahs and serene lakes, Uganda's landscapes paint a breathtaking picture. It is a wildlife enthusiast's haven, boasting rare and endangered species like <strong>mountain gorillas</strong> and <strong>chimpanzees</strong>, inviting visitors to embark on unforgettable primate encounters. 
                <br/><br/>Tracking the  mountain gorillas and chimpanzees is an exceptional experience; and hiking through the dense and varied vegetation of <strong>Bwindi Impenetrable National Park or Kibale Forest National Park</strong> is a top highlight. It may be a demanding activity, but spotting and observing these elusive animals is an unforgettable memory.
                <br/><br/> <strong>Murchison Falls National Park</strong> on the other hand harbors a magnificent display of water as the Nile River creates a forceful surge by squeezing through a narrow gap in the Rift Valley Escarpment. This results in an impressive cascade of frothy white water, forming a breathtaking sight.
                <br/><br/>Additionally, the country's cultural tapestry is equally captivating, with over 50 ethnic groups showcasing their vibrant traditions, music, and dance. Warm hospitality and friendly smiles welcome travelers, allowing them to immerse themselves in the rich tapestry of Uganda's heritage. 
                <br/><br/><strong>Lamav Leisure Safaris </strong> is dedicated to providing an unforgettable experience that truly embodies the essence of Uganda by guiding our valued guests through its diverse landscapes and captivating attractions. Whether it's our <strong>Small Group Classic Safaris, Custom Safaris, or Private Safaris</strong>, we are fully committed to ensuring a remarkable journey around Uganda's mesmerizing sites. Our team is available 24/7 to create a memorable adventure for every traveler.
                
                </p>
              </div>
            </section>

            <section className=" bg-white flex flex-col items-center pt-20 ">
              <h1 className=" lg:text-5xl text-3xl font-[SourceSerifPro-Bold] text-center">Explore the Most  popular<br/>  spots in Uganda </h1>
              {
                UDATA.map((item, index)=>{
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
                          <Link to={`/uganda/${item.id}`}>
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

        <div className="bg-white px-10">
              <div>
                <h1 className="font-[SourceSerifPro-Black] text-3xl">Best time to visit Uganda</h1>
              </div>
              <p className="font-[SourceSerifPro-Regular] text-lg py-6">
              Uganda experiences two distinct dry seasons: one from December to February and another from June to August. If you're considering mountain gorilla and chimpanzee trekking, it's advisable to opt for the period between December and February or the dry months from June to September. These times offer more favorable conditions for hiking. 
              <br/><br/>For traditional game viewing in the national parks, February, March, and September come highly recommended. Uganda is an excellent destination for birdwatching throughout the year.
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
                  <div className=" h-[20px] w-[20px] rounded-full bg-gray-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-gray-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-gray-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-green-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-green-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-green-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-yellow-300"></div>
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

export default Uganda;