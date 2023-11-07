import React,{useState} from 'react';
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Footer from '../Footer/Footer';
import Partners from '../Partners';
import { FaHotel } from 'react-icons/fa';

function SplendorTanzania() {
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
    <div className=' bg-white'>
        {
        colorChanged ? <Navreveal/> : <Navbar/>
        }

        <div>
        <div className='relative'>
          <img alt='spirit of Uganda Safari' loading='lazy' src='https://www.senseofafrica.com/wp-content/uploads/2020/06/Tanzania_South-Tanz-Splendour.jpg' className='w-full'/>
          <h1 className=" md:absolute md:bottom-0 text-white text-3xl lg:text-7xl font-[SourceSerifPro-Regular] md:l-10 z-0"> <strong>Splendours Of Tanzania</strong> </h1>
        </div>
        <div className=" w-full bg-red-900 md:h-[100px] h-[300px] md:flex md:flex-row flex flex-col md:justify-around justify-center md:items-center px-5"> 
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">DURATION</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">10days/9nights  </p>
                </div>
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">PRICE</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">From $ 11,860 per person</p>
                </div>
        </div>
        <div className=" p-5 lg:px-[300px]">
        <h1 className=" font-[SourceSerifPro-Black] text-2xl mb-10 text-red-900">Accomodation Overview</h1>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 md:text-xl">
                                    Destination
                                </th>
                                <th scope="col" className="px-6 py-3 md:text-xl">
                                    Night
                                </th>
                                <th scope="col" className="px-6 py-3 md:text-xl">
                                    Accomodation
                                </th>
                                <th scope="col" className="px-6 py-3 md:text-xl">
                                    Meal plan
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Arusha</a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    2
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Arusha  Coffee  Lodge  
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#maasaimara" className=" hover:text-red-900 md:text-xl">Tarangire  </a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    2
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                  Tarangire Treetops Lodge
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#serengeti" className=" hover:text-red-900 md:text-xl">Ngorongoro  Crater</a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    2
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Manor At Ngorongoro 
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Serengeti </a> 
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    3
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                  Migration Camp
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Arusha </a> 
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    1
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Arusha  Coffee  Lodge
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Day room
                                </td>
                            </tr>
                           
                        </tbody>
                    </table>
                </div>
        </div>

        <div className=" p-10 flex flex-col flex-2 lg:px-[300px]">
                        <h1 className="lg:px-[200px] text-2xl mb-10 font-[SourceSerifPro-Black] text-red-900">Safari Highlights </h1>
                        <ul className=" font-[SourceSerifPro-Regular] lg:px-[200px] list-none md:text-xl space-y-4 text-left text-black">
                            <li className=" flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Guided tour of Coffee plantations in Arusha.</span></li>
                            <li className="flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span> Explore Tanzania's top wildlife destinations on a comprehensive safari. </span>
                            </li>
                          
                            <li className=" flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Witness the rugged landscapes of Tarangire, the pristine beauty of Ngorongoro Crater, and the vast Serengeti Plains, all renowned for exceptional game viewing experiences. </span></li>
                           
                            <li className=" flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Thrilling  game  drives and guided nature  strolls  in the breathtaking  Serengeti landscapes.  </span></li>
                            
                            <li className=" flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Excellent accommodation at  Tanzania's  most stylish  and unique  camps and lodges. </span></li>
                            
                            
                        </ul>
                    </div>


              

        <div className=' lg:px-[200px] px-[70px]'>
          <h1 className=' text-2xl font-bold mb-5'>Itinerary</h1>
          <div>
              <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 1
              </h1>
              <p className='font-bold mb-2'>ARUSHA ||Touch - down</p>
              <hr/>
              <div className='lg:flex items-center justify-center'>
              
                <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                Warm reception  by your Lamlav Safari Director  upon touch-down at Arusha  International  Airport, and transfer  to Arusha Coffee  Lodge  for  a two night stay.
                </p>
              
                <img alt='Arival' loading='lazy' src='https://www.elewanacollection.com/images/acl/ArushaCoffeeLodge---Restaurant-Exterior.jpg' className=' lg:w-1/2 ml-5'/>
                
              </div>
          </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Arusha  Coffee  Lodge  </p>
                </div>
                <hr className='my-5'/>


              <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 2
                </h1>
                <p className='font-bold mb-2'>ARUSHA|| Coffee experiences </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Take a moment, after  enduring  challenging long flights, to relax and unwind at the serene Arusha Coffee retreat, nestled within lush coffee plantations. Experience the beauty of the flower-filled surroundings, the gentle breeze, and the stunning sight of Mt. Meru from your suite's veranda. Afterwards, embark on a guided tour of the coffee plantations later in the day.
                  </p>
                  <img alt='Arival' loading='lazy' src='https://www.andbeyond.com/wp-content/uploads/sites/5/Tea-Garden-at-Arusha-Coffee-Lodge.jpg' className=' lg:w-1/2 ml-5'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Arusha  Coffee  Lodge  </p>
                </div>
                <hr className='my-5'/>


                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 3
                </h1>
                <p className='font-bold mb-2'>TARANGIRE ||  Into the Wilderness   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Begin your day with a satisfying breakfast, then embark on an incredible drive to Tarangire National Park. Arrive at the luxurious Tarangire Treetops Lodge, ingeniously constructed around a thousand-year-old baobab trees. 
<br/><br/>From your tree house's balcony, you'll gaze upon the diverse landscapes of Tarangire — the wooden savannah adorned with acacias and baobabs, rocky formations, and undulating hills. This area hosts a rich array of African wildlife, including iconic species like elephants, alongside some rare additions such as oryx and kudu .
                  </p>
                  <img alt='Arival' loading='lazy' src='https://live.staticflickr.com/2240/33000774415_73bffb6d49_b.jpg' className=' lg:w-1/2 ml-5'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Tarangire Treetops Lodge</p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 4
                </h1>
                <p className='font-bold mb-2'>TARANGIRE || Classic game viewing </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Embark on both morning and afternoon wildlife excursions to discover the captivating Tarangire National Park. Witness an impressive abundance of animals and numerous bird species frolicking amidst the trees. Keep an eye out for the telltale swaying tail of a leopard concealed in lofty branches, as well as the presence of notable creatures such as pythons, kudu, oryx, and other prominent wildlife.
                  </p>
                  <img alt='Arival' loading='lazy' src='https://www.tarangirenationalparks.com/wp-content/uploads/2020/08/Game-Drives-in-Tarangire-National-Parkss-750x450.jpg' className=' lg:w-1/2 ml-5'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Tarangire Treetops Lodge  </p>
                </div>
                <hr className='my-5'/>




                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 5
                </h1>
                <p className='font-bold mb-2'>NGORONGORO CRATER|| Into the "Lost World."   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  This day, Embark on a journey towards the magnificent Ngorongoro Crater, passing by Lake Manyara on the way to the serene Manor at Ngorongoro Lodge. 
                  <br/><br/>Explore the Ngorongoro forest on a guided  walk with a Maasai Traditional Healer and learn about over 20 native plants and their traditional uses. 
                  <br/><br/>Enjoy a peaceful evening and spend the night at the lodge while indulging in a traditional high tea served on your private deck.
                  </p>
                  <img alt='Arival' loading='lazy' src='https://media.tacdn.com/media/attractions-splice-spp-674x446/07/36/9f/27.jpg' className=' lg:w-1/2 ml-5'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Manor At Ngorongoro  </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 6
                </h1>
                <p className='font-bold mb-2'>NGORONGORO CRATER || Rewarding  game drives   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Descend to the floor of Ngorongoro Crater and explore its expansive grasslands teeming with wildlife. The crater's towering walls provide an extraordinary safari adventure. 
                  <br/><br/>Immerse yourself in an authentic "Lost World" where diverse and abundant wildlife roams freely. Encounter the entire Big Five in a single day—lions, elephants, black rhinos, and more—within this captivating UNESCO World Heritage Site. Enjoy a delightful outdoor lunch in this unique setting before returning to your lodge to unwind with serene sundowners on your private terrace, followed by a delightful dinner overlooking this enchanting destination.                  </p>
                  <img alt='Arival' loading='lazy' src='https://www.tarangirenationalparks.com/wp-content/uploads/2021/12/Ngorongoro-Facts-750x450-1.jpg' className=' lg:w-1/2 ml-5'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Manor At Ngorongoro   </p>
                </div>
                <hr className='my-5'/>




                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 7
                </h1>
                <p className='font-bold mb-2'>SERENGETI || Golden plains   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Drive to Serengeti National Park, an expansive landscape in Tanzania renowned for hosting the remarkable annual event known as the Great Migration. During this spectacle, millions of herbivores journey across the Serengeti plains in search of water and lush grass. 
                  <br/><br/>Enjoy a three-night stay at Migration Camp, nestled amidst kopje-like rock formations above the Grumeti River. Each of the camp's 20 tents is surrounded by a deck, offering a personal retreat to observe the captivating natural show unfolding both below and in the distance.
                  </p>
                  <img alt='Arival' loading='lazy' src='https://upload.wikimedia.org/wikipedia/commons/a/af/Floating_through_the_Serengeti_plains.jpg' className=' lg:w-1/2 ml-5'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Migration  Camp   </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 8
                </h1>
                <p className='font-bold mb-2'>SERENGETI || Explore the endless plains   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  During today's exploration, you might encounter the big fives and numerous other wildlife species during both morning and afternoon game drives.                   </p>
                  <img alt='Arival' loading='lazy' src='https://c.pxhere.com/photos/7c/a8/tanzania_serengeti_national_park_animal_wildlife_wild_zoology_mammal_species-979082.jpg!d' className=' lg:w-1/2 ml-5'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>  Migration  Camp   </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 9
                </h1>
                <p className='font-bold mb-2'>SERENGETI || Awe-inspiring Great- Migration   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Engage once again in the breathtaking environment, keeping your eye peeled for sudden encounters as you track game across the expansive, golden grasslands of the Serengeti. Experience the Great Wildebeest Migration firsthand.                  </p>
                  <img alt='Arival' loading='lazy' src='https://lp-cms-production.imgix.net/2021-10/GettyRF_545860943.jpg' className=' lg:w-1/2 ml-5'/>
                   
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Migration  Camp.   </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 10
                </h1>
                <p className='font-bold mb-2'>ARUSHA || Homeward connections   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  You will have a concluding early  morning  game drive across  the vast plains  before  heading  back  to the Migration  Camp for a hearty   breakfast. 
                  <br/><br/>Afterwards, fly back to Arusha, relax in day rooms at  the Arusha  Coffee  Lodge as you prepare for your  homebound  plane in the evening.
                  </p>
                  <img alt='Arival' loading='lazy' src='https://www.safari.co.za/images/arusha-national-park-01-590x390.jpg' className=' lg:w-1/2 ml-5'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Arusha  Coffee  Lodge   </p>
                </div>
                <hr className='my-5'/>



              


        </div>
        </div>




        <Partners/>
        <div className=" bg-[#fff]">
                <img src={require('../../Assets/kanairo-black.svg').default } alt="Kanairo"/>
        </div>
        <Footer/>
    </div>
  )
};

export default SplendorTanzania;