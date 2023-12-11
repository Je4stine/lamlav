import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Lion from '../../Assets/elfyn-evans-scott-martin-toyot.jpg';
import AmboseliN from '../../Assets/Natpa.jpg';
import Tsavo from '../../Assets/tsavo11.jpg';
import Lewaco from '../../Assets/lewacon.jpg';
import Footer from "../Footer/Footer";
import Olpe from '../../Assets/olpe1.jpg';
import Game1 from '../../Assets/game.jpg';
import Chyulu from '../../Assets/chyullu.jpg';
import Zebra from '../../Assets/GrevyZebra 2.jpg';
import Naivasha from '../../Assets/Naivasha.jpg';
import Dik from '../../Assets/dikdik.jpg';
import Mount from '../../Assets/Mtkenya.jpg';
import Suncity from '../../Assets/sunsity.jpg';
import Mombasani from '../../Assets/Mombasani.jpg';
import Tatol from '../../Assets/Tatol.jpg';
import Partners from "../Partners";
import Fade from 'react-reveal/Fade';
import { FiArrowRight  } from "react-icons/fi";

const Kenya = ()=>{
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
        <div className="bg-white">
            {
                colorChanged ? <Navreveal/> : <Navbar/>
            }
            <div className=" relative">
               <img src={Lion} loading="lazy" className=" w-[100vw] h-[100vh] object-cover" alt="Lion"/>
               <div className=" absolute top-0 w-full h-[100vh] flex flex-col justify-center items-center">
                  <h1 className="  text-white lg:text-8xl text-6xl font-[SourceSerifPro-Black] text-center mb-10 underline">
                        KENYA
                    </h1>
                  <h1 className=" text-white lg:text-6xl text-4xl font-[SourceSerifPro-Regular] text-center ">
                        A Magical Destination
                    </h1>
               </div>
               
                
            </div>
            <section className=" bg-white w-[100%] m-auto lg:px-[50px] px-10">
              <div className=" lg:px-[100px]">
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] lg:text-xl">
                  Visitors worldwide are drawn to the bustling atmosphere and modern architecture of Nairobi, as well as its fine dining options. However, in the countryside, specifically in the treasured national parks and conservancies, the focus shifts from human activity to the awe-inspiring wildlife. Observing the Big Five becomes a natural experience in this region. These magnificent creatures captivate visitors with their numbers and opportunities for close-up observation.The thrilling events of the Great Migration, which take place annually in the Masai Mara, is one striking example.
                  <br/><br/>For those seeking a more secluded safari experience, the Laikipia Plateau, with its endangered species such as the white rhinoceroses, Grévy's zebra and wild dog; and the sun-soaked Samburu National Reserve, with its cooling elephants in the Ewaso Ng'iro River, offer a different perspective. 
                  <br/> <br/>In addition to wildlife viewing, a trip to Kenya presents the chance to learn about the Maasai cliture and to unwind on the idyllic beaches along the country's extensive coastline.
                  <br/> <br/><strong>LAMLAV LEISURE  SAFARIS</strong> provides exclusive, inspiring, and authentic safari experiences through its Private Safaris, Custom Safaris, and Small group Classic Safaris that are always built  around  the tastes, preferences, and budget of every client.  
                  <br/><br/>We showcase the diverse landscapes of Kenya including:
                  <li>The world-famous Maasai Mara, which is the northern part of the Serengeti-Maasai Mara ecosystem and the greatest wildlife show on the planet.</li>
                  <li>The breathtaking Amboseli National Park with views of Kilimanjaro.</li>
                  <li>The brush and riverine areas of Samburu, Laikipia Plateau and  Mount Kenya. </li>
                  <li>The stunning Lake Turkana, in the northern  district. </li>
                  <li>The iconic  Tsavo West and Tsavo  East wildlife  sanctuaries </li>
                </p>
              </div>
            </section>
            <h1 className="lg:px-[100px] px-2 font-[SourceSerifPro-Black] text-2xl mt-20">Inspirational Safaris Holidays Kenya </h1>
            <section className="my-10 lg:px-[80px] px-2">
              <div className="lg:flex lg:justify-around lg:flex-wrap my-10">
                  <a href="/mara" className="lg:w-1/2 my-5 bg-white shadow-md flex hover:shadow-xl hover:cursor-pointer">
                    <img alt="Safari" src="https://live.staticflickr.com/65535/48543931301_2680b59709_b.jpg" className="lg:w-1/3 w-1/2 mr-3"/>
                    <div>
                        <h1 className=" font-[SourceSerifPro-Black] mb-10">1. Mara Serengeti Safari</h1>
                        <p className="font-[SourceSerifPro-Regular]"> <em>Presenting an exceptionally memorable and unabashedly luxurious safari experience within the Mara and Serengeti ecosystems.</em></p>
                         
                    </div>
                  </a>

                  <a href="/migration" className="lg:w-1/2 my-5 bg-white shadow-md flex hover:shadow-xl hover:cursor-pointer">
                    <img alt="Safari" src="https://www.asiliaafrica.com/media/kvmdsaks/ubuntu-migration-camp-game-drive.jpg?width=0&format=webp&quality=60&rnd=132271987049770000&mode=crop" className="lg:w-1/3 w-1/2 mr-3"/>
                    <div>
                      <h1 className=" font-[SourceSerifPro-Black] mb-10">2. Great Migration Safari</h1>
                      <p className="font-[SourceSerifPro-Regular]"><em>Experience the pulse of nature and the grandeur of wildlife in a seamless exploration of diverse landscapes. </em></p>
                       
                    </div>
                  </a>

                  <a href="/honeymoon" className="lg:w-1/2 my-5 bg-white shadow-md flex hover:shadow-xl hover:cursor-pointer">
                    <img alt="Safari" src="https://www.kiwoitoafricasafaris.com/wp-content/uploads/2020/01/honeymoon-safaris.jpg" className="lg:w-1/3 w-1/2 mr-3"/>
                    <div>
                      <h1 className=" font-[SourceSerifPro-Black] mb-10">3. Lamlav Honeymoon Safari</h1>
                      <p className="font-[SourceSerifPro-Regular]"><em> An adventure that feeds your Soul</em></p>
                       
                    </div>
                  </a>

                  <a href="/amboseli" className="lg:w-1/2 my-5 bg-white shadow-md flex hover:shadow-xl hover:cursor-pointer">
                    <img alt="Safari" src="https://skyviewofafrica.com/wp-content/uploads/2020/08/kruger-national-park-pic.jpg" className="lg:w-1/3 w-1/2 mr-3"/>
                    <div>
                      <h1 className=" font-[SourceSerifPro-Black] mb-10">4. Kenya Bush and Beach Safari</h1>
                      <p className="font-[SourceSerifPro-Regular]"><em>Explore the Kenyan wildlife havens in Style.</em></p>
                       
                      </div>
                  </a>
                  <a href="/wilderness" className="lg:w-1/2 my-5 bg-white shadow-md flex hover:shadow-xl hover:cursor-pointer">
                    <img alt="Safari" src="https://peaksofafrica.co.za/wp-content/uploads/2016/11/Kenya-and-Tanzania-Great-Wilderness-Safari-1.jpg" className="lg:w-1/3 w-1/2 mr-3"/>
                    <div>
                      <h1 className=" font-[SourceSerifPro-Black] mb-10">5.Great Wilderness safari </h1>
                      <p className="font-[SourceSerifPro-Regular]"><em> A truly indulgent and quintessential Kenyan Safari experience.</em></p>
                    
                       </div>
                  </a>
                  <a href="/safaris" className="flex flex-col items-center text-orange-500 h-[50px] mt-[50px] lg:mt-[100px] p-3 border border-black rounded-md hover:bg-orange-500 hover:text-white hover:border-white duration-500 font-[SourceSerifPro-Black]">
                    View All Itineraies     
                  </a>   
              </div> 
                              
            </section>


            <section className=" bg-white flex flex-col items-center pt-20 ">
              <h1 className=" lg:text-5xl text-3xl font-[SourceSerifPro-Black] text-center">Explore the Most  popular<br/>  spots in Kenya </h1>
             <Fade left>
              <div className=" lg:flex lg:justify-around items-center  mt-20 lg:px-[80px]">
                  <img src={AmboseliN} alt=" Lion" className=" lg:w-1/2 lg:h-3/4 m-auto" loading="lazy"/>
                  <div className="p-5 lg:justify-between lg:w-1/2">
                      <h1 className=" font-[SourceSerifPro-Black] mb-10 text-3xl">Amboseli  National  Reserve </h1>
                      <p className=" font-[SourceSerifPro-Regular] text-lg">
                        The name "Amboseli" means "salty dust" in reference to the ancient volcanic ash that creates shimmering mirages and dust devils in the dry season, especially around seasonal Lake Amboseli
                      </p>
                      <a href='/kenya/destamboseli'><div className=' mt-10 border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto'>
                                <span >Explore more</span>
                      </div></a> 
                  </div>
              </div>
              <hr class="h-px my-8 border-0 bg-gray-300 w-full"></hr>
             </Fade >

             <Fade right>
              <div className=" lg:flex lg:flex-row-reverse lg:justify-around items-center mt-20 lg:px-[80px]">
                  <img src={Tsavo} alt=" Tsavo" className=" lg:w-1/2 lg:h-3/4 m-auto" loading="lazy"/>
                  <div className="p-5">
                      <h1 className=" font-[SourceSerifPro-Black] mb-10 text-3xl">Tsavo  National  park </h1>
                      <p className=" font-[SourceSerifPro-Regular] text-lg">
                        "It’s quite difficult to portray the magic of Tsavo in just a few words… It really grips your soul. Tremendous contrasts everywhere. Tsavo, in fact, has a greater bio-diversity than any other place on earth. The more you know about nature, the more you can learn" ~Dr Dame Daphne Sheldrick
                      </p>
                      <a href='/kenya/tsavonational'><div className=' mt-10 border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto'>
                                <span >Explore more</span>
                      </div></a> 
                  </div>
              </div>

              <hr class="h-px my-8 border-0 bg-gray-300 w-full"></hr>
             </Fade >

             <Fade left>
              <div className=" lg:flex lg:justify-around items-center mt-20 lg:px-[80px]">
                  <img src={Lewaco} alt=" Lewa Conservancy" className=" lg:w-1/2 lg:h-3/4 m-auto" loading="lazy"/>
                  <div className="p-5">
                      <h1 className=" font-[SourceSerifPro-Black] mb-10 text-3xl">Lewa Conservancy </h1>
                      <p className=" font-[SourceSerifPro-Regular] text-lg">
                      The Lewa Conservancy, also called the Lewa Downs, is a groundbreaking World Heritage Site, established by the Craig family in 1996. The 250-square-mile conservancy was originally established to protect Kenya's rhinos, which today make up 13% of the country's rhino population.
                      </p>
                     
                      <a href='/kenya/lewaconservancy'><div className=' mt-10 border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto'>
                                <span >Explore more</span>
                      </div></a> 
                  </div>
              </div>


              <hr class="h-px my-8 border-0 bg-gray-300 w-full"></hr>
             </Fade >

             <Fade right>
              <div className=" lg:flex lg:flex-row-reverse lg:justify-around items-center mt-20 lg:px-[80px]">
                  <img src={Olpe} alt=" Ol Pejeta" className=" lg:w-1/2 lg:h-3/4 m-auto" loading="lazy"/>
                  <div className="p-5">
                      <h1 className=" font-[SourceSerifPro-Black] mb-10 text-3xl">Ol Pejeta  Conservancy  </h1>
                      <p className=" font-[SourceSerifPro-Regular] text-lg">
                        With a size of 36,400 hectares, Ol Pejeta is home to the world's largest population of black rhinos and the last two remaining white rhinos. This Conservancy is a non-profit wildlife organization located in Laikipia County, Central Kenya.
                      </p>
                      
                      <a href='/kenya/olpejeta'><div className=' mt-10 border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto'>
                                <span >Explore more</span>
                      </div></a> 
                  </div>
              </div>

              <hr class="h-px my-8 border-0 bg-gray-300 w-full"></hr>
             </Fade >

             <Fade left>
              <div className=" lg:flex lg:justify-around items-center mt-20 lg:px-[80px]">
                  <img src={Game1} alt=" The game" className=" lg:w-1/2 lg:h-3/4 m-auto" loading="lazy"/>
                  <div className="p-5">
                      <h1 className=" font-[SourceSerifPro-Black] mb-10 text-3xl">The Maasai Mara National Reserve  </h1>
                      <p className=" font-[SourceSerifPro-Regular] text-lg">
                        With its diverse and attractive scenery and its well-known abundance of wild animals, Maasai Mara is the centerpiece of spectacular  wildlife  encounters and  is a perfect representation of what attracts people to Africa.
                      </p>
                    
                      <a href='/kenya/maasaimara'><div className=' mt-10 border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto'>
                                <span >Explore more</span>
                      </div></a> 
                  </div>
              </div>

              <hr class="h-px my-8 border-0 bg-gray-300 w-full"></hr>
             </Fade >

             <Fade right>
              <div className=" lg:flex lg:flex-row-reverse lg:justify-around items-center mt-20 lg:px-[80px]">
                  <img src={Chyulu} alt=" Chyullu hills" className=" lg:w-1/2 lg:h-3/4 m-auto" loading="lazy"/>
                  <div className="p-5">
                      <h1 className=" font-[SourceSerifPro-Black] mb-10 text-3xl">Chyullu hills </h1>
                      <p className=" font-[SourceSerifPro-Regular] text-lg">
                        <em>"Green Hills of Africa" <br/> <br/></em>
                        The Chyulu Hills, a relatively new range in the world, extend across eastern Kenya, with a view of expansive grasslands. 
                      </p>
                      <a href='/kenya/chyulu'><div className=' mt-10 border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto'>
                                <span >Explore more</span>
                      </div></a> 
                  </div>
              </div>

              <hr class="h-px my-8 border-0 bg-gray-300 w-full"></hr>
             </Fade >
             <Fade left>
              <div className=" lg:flex lg:justify-around items-center mt-20 lg:px-[80px]">
                  <img src={Zebra} alt=" Zebra" className=" lg:w-1/2 lg:h-3/4 m-auto" loading="lazy"/>
                  <div className="p-5">
                      <h1 className=" font-[SourceSerifPro-Black] mb-10 text-3xl">Meru National Park </h1>
                      <p className=" font-[SourceSerifPro-Regular] text-lg">
                        <em>Home to Elsa the Lioness</em>
                      </p>
                      <br/><p className=" font-[SourceSerifPro-Regular] text-lg">
                      Meru National Park is located in the Central Highlands of Kenya, near Mount Kenya and straddles the equator. The park is known for its diverse wildlife, including elephants, hippos, cheetahs, giraffes, buffalos, and over 400 species of birds.                           
                      </p>
                      <a href='/kenya/meru'><div className=' mt-10 border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto'>
                                <span >Explore more</span>
                      </div></a> 
                  </div>
              </div>

              <hr class="h-px my-8 border-0 bg-gray-300 w-full"></hr>
             </Fade >

             <Fade right>
              <div className=" lg:flex lg:flex-row-reverse lg:justify-around items-center mt-20 lg:px-[80px]">
                  <img src={Naivasha} alt="Flamingo" className=" lg:w-1/2 lg:h-3/4 m-auto" loading="lazy"/>
                  <div className="p-5">
                      <h1 className=" font-[SourceSerifPro-Black] mb-10 text-3xl">Lake Nakuru & Lake Naivasha </h1>
                      <p className=" font-[SourceSerifPro-Regular] text-lg">
                        <em>Tete-a- tete  with  the flamingos of Nakuru</em>
                      </p>
                      <br/><p className=" font-[SourceSerifPro-Regular] text-lg">
                      Located on the floor of the Great Rift Valley, and  surrounded by bushy grasslands and woods, Nakuru  and  Naivasha  offers a diverse range of habitats, including the lakes, escarpment, and ridges, which make them  excellent destinations for visitors interested in ecology.                            
                      </p>
                      <a href='/kenya/nakuru'><div className=' mt-10 border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto'>
                                <span >Explore more</span>
                      </div></a> 
                  </div>
              </div>

              <hr class="h-px my-8 border-0 bg-gray-300 w-full"></hr>
             </Fade >


             <Fade left>
              <div className=" lg:flex lg:justify-around items-center mt-20 lg:px-[80px]">
                  <img src={Dik} alt=" Dik Dik" className=" lg:w-1/2 lg:h-3/4 m-auto" loading="lazy"/>
                  <div className="p-5">
                      <h1 className=" font-[SourceSerifPro-Black] mb-10 text-3xl">Samburu National Park</h1>
                      <p className=" font-[SourceSerifPro-Regular] text-lg">
                      The Samburu region is characterized by the beautiful Ewaso Nyiro River and is known for its rugged and serene landscape, reminiscent of the traditional Africa.
                      </p>
                     
                      <a href='/kenya/samburu'><div className=' mt-10 border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto'>
                                <span >Explore more</span>
                      </div></a> 
                  </div>
              </div>
              <hr class="h-px my-8 border-0 bg-gray-300 w-full"></hr>
             </Fade >

             <Fade right>
              <div className=" lg:flex lg:flex-row-reverse lg:justify-around items-center mt-20 lg:px-[80px]">
                  <img src={Mount} alt=" Mt. Kenya" className=" lg:w-1/2 lg:h-3/4 m-auto" loading="lazy"/>
                  <div className="p-5">
                      <h1 className=" font-[SourceSerifPro-Black] mb-10 text-3xl">Mount Kenya</h1>
                      <p className=" font-[SourceSerifPro-Regular] text-lg">
                        The Lordly, "Majestic  and tender  Mountain"  in Africa that is visible from many parts of central Kenya. 
                      </p>
                      
                      <a href='/kenya/mountkenya'><div className=' mt-10 border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto'>
                                <span >Explore more</span>
                      </div></a> 
                  </div>
              </div>

              <hr class="h-px my-8 border-0 bg-gray-300 w-full"></hr>
             </Fade >


             <Fade left>
              <div className=" lg:flex lg:justify-around items-center mt-20 lg:px-[80px]">
                  <img src={Suncity} alt=" City under the sun" className=" lg:w-1/2 lg:h-3/4 m-auto" loading="lazy"/>
                  <div className="p-5">
                      <h1 className=" font-[SourceSerifPro-Black] mb-10 text-3xl">Nairobi</h1>
                      <p className=" font-[SourceSerifPro-Regular] text-lg">
                        <em>Around  and About the only "City in  the  Sun "<br/><br/></em>
                        Nairobi is not only known as the "Safari capital of the world," but it is also one of the most vibrant cities in Africa. It is definitely worth spending a few days exploring the "City in the Sun" of Kenya before or after your safari.
                      </p>
                     
                      <a href='/kenya/nairobi'><div className=' mt-10 border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto'>
                                <span >Explore more</span>
                      </div></a> 
                  </div>
              </div>

              <hr class="h-px my-8 border-0 bg-gray-300 w-full"></hr>
             </Fade >


             <Fade right>
              <div className=" lg:flex lg:flex-row-reverse lg:justify-around items-center mt-20 lg:px-[80px]">
                  <img src={Mombasani} alt=" City under the sun" className=" lg:w-1/2 lg:h-3/4 m-auto" loading="lazy"/>
                  <div className="p-5">
                      <h1 className=" font-[SourceSerifPro-Black] mb-10 text-3xl">Mombasa</h1>
                      <p className=" font-[SourceSerifPro-Regular] text-lg">
                        Mombasa is a city with a rich history of cultural fusion, evident in its blend of Arab, Portuguese, and British influences that can still be seen in its cuisine, buildings, and the people. This stunning coastal region of Kenya,  is known for its pristine beaches, breathtaking coral reefs, and historic Swahili towns, some of which date back to the Middle Ages.
                      </p>
                      
                      <a href='/kenya/mombasa'><div className=' mt-10 border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto'>
                                <span >Explore more</span>
                      </div></a> 
                  </div>
              </div>

              <hr class="h-px my-8 border-0 bg-gray-300 w-full"></hr>
             </Fade >

             <Fade left>
              <div className=" lg:flex lg:justify-around items-center mt-20 lg:px-[80px]">
                  <img src={Tatol} alt=" City under the sun" className=" lg:w-1/2 lg:h-3/4 m-auto" loading="lazy"/>
                  <div className="p-5">
                      <h1 className=" font-[SourceSerifPro-Black] mb-10 text-3xl">Watamu</h1>
                      <p className=" font-[SourceSerifPro-Regular] text-lg">
                        <em>
                        Beguiling,  tempting,  and  bewitching Watamu.
                        </em>
                      </p>
                      <br/><p className=" font-[SourceSerifPro-Regular] text-lg">
                      Watamu offers the best of both worlds, with the backdrop of the lush Arabuko-Sokoke Forest and the mysterious ruins of Gedi, a 13th century Swahili city. Whether you're looking for adventure or a peaceful escape, Watamu has something for everyone.
                               
                      </p>
                      <a href='/kenya/watamu'><div className=' mt-10 border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto'>
                                <span >Explore more</span>
                      </div></a> 
                  </div>
              </div>

              <hr class="h-px my-8 border-0 bg-gray-300 w-full"></hr>
             </Fade >

            </section>

            <div className="bg-white px-10">
              <div>
                <h1 className="font-[SourceSerifPro-Black] text-3xl">Best time to visit kenya</h1>
              </div>
              <p className="font-[SourceSerifPro-Regular] text-lg py-6">Kenya welcomes visitors throughout the year as an ideal safari and beach destination. Among the finest times to explore Kenya is between July and October, aligning with the dry season and the remarkable Great Migration of wildebeest and zebra in Maasai Mara National Park. 
              <b/><br/>Additionally, from December to March, the country experiences minimal rainfall and pleasant temperatures, creating excellent conditions for game viewing. This period also tends to be less crowded and offers more budget-friendly options. It presents an opportunity to witness newborn wildlife and the arrival of migratory bird species.</p>
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
                  <div className=" h-[20px] w-[20px] rounded-full bg-yellow-300"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-gray-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-gray-400"></div>
                  <div className=" h-[20px] w-[20px] rounded-full bg-yellow-300"></div>
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
            <div className=" bg-white pt-20">
                <img src={require('../../Assets/kanairo-black.svg').default } alt="Kanairo"/>
            </div>
            <Footer/>
        </div>
    )
};

export default Kenya;