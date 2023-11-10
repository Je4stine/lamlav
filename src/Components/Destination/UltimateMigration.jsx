import React,{useState} from 'react';
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Footer from '../Footer/Footer';
import {FaHotel} from 'react-icons/fa'

function UltimateMigration() {
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
    <div className='bg-white'>
        {
        colorChanged ? <Navreveal/> : <Navbar/>
        }
        
        <div>
        <div className='relative'>
          <img alt='spirit of Uganda Safari' loading='lazy' src='https://media.discoverafrica.com/wp-content/uploads/2021/11/sayari-camp-game-drive-migration-serengeti-safari.jpg?strip=all&lossy=1&ssl=1' className='w-full mt-[100px] lg:mt-[0px]'/>
          <h1 className="absolute bottom-0 text-white text-3xl lg:text-7xl font-[SourceSerifPro-Regular] md:l-10 z-0"> <strong>Ultimate Greate Migration Safari</strong> </h1>
        </div>
        <div className=" w-full bg-red-900 md:h-[100px] h-[300px] md:flex md:flex-row flex flex-col md:justify-around justify-center md:items-center px-5"> 
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">DURATION</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">13days/12 nights </p>
                </div>
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">PRICE</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">From $ 15,275 per person</p>
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
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Nairobi</a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    2
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                House of Waine  
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Bed and Breakfast
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#maasaimara" className=" hover:text-red-900 md:text-xl">Amboseli  </a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    2
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Ol Tukai Lodge 
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#serengeti" className=" hover:text-red-900 md:text-xl">Arusha</a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    1
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Onsea House 
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Bed and Breakfast
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Ngorongoro </a> 
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    1
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Ngorongoro Crater Lodge 
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>

                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Serengeti  </a> 
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    3
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Lemala Ewanjan 
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>

                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Maasai Mara  </a> 
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    3
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Mara Plains  Camp 
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            

                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Nairobi  </a> 
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    ___
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                House of Waine
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Day Room
                                </td>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                </div>
        </div>

        <div className=" lg:px-[300px] px-5">
                        <h1 className="text-2xl mb-10 font-[SourceSerifPro-Black] text-red-900">Safari Highlights </h1>
                        <ul className=" font-[SourceSerifPro-Regular] list-none md:text-xl space-y-4 text-left text-black">
                            <li className=" flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Up close  with giraffes  and baby  elephants  at the heart  of Nairobi  city</span></li>
                            <li className="flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span> Six  nights  at the epicentre  of great wildebeest  migration  spectacle:  the great Maasai Mara and Serengeti national parks </span>
                            </li>
                          
                            <li className=" flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Excellent accommodations  at East Africa’s  most luxurious tented  camps and lodges </span></li>
                           
                            <li className=" flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Three exhilarating  flights  to expedite  your  travel between  the camps. </span></li>
                            
                            
                        </ul>
                    </div>


              <div className=' mt-10 lg:px-[300px] px-5'>
              <h1 className="text-2xl font-[SourceSerifPro-Black] text-red-900">Included</h1>
              <div className="p-5">
                <ul className="mb-8 space-y-4 text-left text-black">
                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Spectacular Hot air balloon  safari</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Bush breakfast, Sundowner and all beverages  as provided </span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>House wines and local beers/spirits.</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Unlimited game drives in camps 4  4 vehicles with roof hatches for game viewing</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Airport and Airstrip transfers.</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Parks and conservation entry fees.</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Flying Doctors emergency evacuation cover.</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Mineral water on game drives.</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Transport using  4  4 vehicle with experienced English/French/Spanish speaking driver/guide.</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Scheduled flights;maasai mara/serengeti/Nairobi</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Optional activities  and excursions.</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>24-hour Lamlav Safaris on call support.</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Telephone  calls and laundry services </span>
                  </li>
                </ul>
              </div>
        </div>
        <div>
        </div>

        <div className=' lg:px-[200px] px-[70px]'>
          <h1 className=' text-2xl font-bold mb-5'>Itinerary</h1>
          <div>
              <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 1
              </h1>
              <p className='font-bold mb-2'>NAIROBI KENYA|| Grand arrival.</p>
              <hr/>
              <div className='lg:flex items-center justify-center'>
              
                <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                Arrive in Nairobi and transfer to  your luxurious hotel.  
                </p>
              
                <img alt='Arival' loading="lazy" src='https://i.natgeofe.com/n/fbc59cb3-1962-49e8-8d98-2743e0f98cdc/skyline-nairobi-kenya.jpg?w=2520&h=1324' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                
              </div>
          </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>House of Waine  </p>
                </div>
                <hr className='my-5'/>


              <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 2
                </h1>
                <p className='font-bold mb-2'>NAIROBI || City explorations  </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  After a satisfying morning meal, you will embark on a journey to discover the wonders of Nairobi. You will:
                    <li>Pay a visit to the residence of Karen Blixen.</li>
                    <li>Encounter charming young elephants at the Daphne Sheldrick elephant orphanage, and  </li>
                    <li>Commingle with the planet's tallest land mammals at the Giraffe Centre. </li>
                  </p>
                  <img loading='lazy' alt='Arival' src='https://media.tacdn.com/media/attractions-splice-spp-674x446/06/dd/de/17.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>House of Waine </p>
                </div>
                <hr className='my-5'/>


                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 3
                </h1>
                <p className='font-bold mb-2'>AMBOSELI || At the base of Mt.Kilimanjaro.  </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  This morning, embark on a journey to the enchanting Amboseli National Park, nestled at the foot of the majestic, snow-capped Mount Kilimanjaro; renowned as the tallest freestanding mountain globally. Begin your quest to witness the area's magnificent wildlife, with a particular focus on the impressive elephant herds that traverse the arid savannahs. As the day draws to a close, join your fellow travelers for a delightful welcome dinner
                   </p>
                  <img alt='Arival' loading="lazy" src='https://cdn.pixabay.com/photo/2019/06/15/14/40/elephants-4275741_1280.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Ol Tukai  Lodge </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 4
                </h1>
                <p className='font-bold mb-2'>AMBOSELI || Game viewing  </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Discover the abundant wildlife in Amboseli National Park. Besides observing elephants up close, witnessing them march purposefully, you can also spot other remarkable creatures like zebras, hippos, giraffes, wildebeests, lions hyenas, and Cape buffaloes. Pause for lunch and  embark on another game drive, In the afternoon, unveiling further marvels of East Africa's natural beauty.
                   </p>
                  <img alt='Arival' loading='lazy' src='https://live.staticflickr.com/65535/51209270682_ca12145045_b.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Ol Tukai  Lodge  </p>
                </div>
                <hr className='my-5'/>




                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 5
                </h1>
                <p className='font-bold mb-2'>ARUSHA || Exploring the lovely Arusha coffee plantations    </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Today, you'll be flying to Arusha via Kilimanjaro International Airport. Upon arrival, a driver will be waiting for you at the arrivals area to take you to Onsea House. This charming accommodation is strategically located close to some of Tanzania's top national parks and Mount Kilimanjaro, making it a popular choice for adventurers. In the afternoon, embark on an exciting journey to explore Arusha on a walking tour.  Visit  Arusha's coffee plantations and the Shanga Workshop, with a private guide, to learn about the handmade jewelry and homeware created there. Return to your room, in the evening, for a delicious evening meal and drinks as you reflect on your safari experiences.                  </p>
                  <img alt='Arival' loading='lazy' src='https://images.pexels.com/photos/11854977/pexels-photo-11854977.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Onsea House  </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 6
                </h1>
                <p className='font-bold mb-2'>NGORONGORO || Into the epic Caldera.   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  This morning, you'll embark on a journey to the awe-inspiring Ngorongoro Crater, enjoying a scenic drive along the way. Your route will lead you to the peaceful Gibb's Farm, where you'll savor a sumptuous lunch .
                  <br/><br/>Ngorongoro Crater is  a remarkable caldera plunging 2,000 feet deep. Inside, you'll discover a captivating microcosm of East African wildlife, including black rhinos, elephants, wildebeests, zebras, lions, leopards, buffalo, and flamingos. 
                  <br/><br/>Finally, you'll arrive at the Ngorongoro Crater Lodge, that boasts elegant accommodations with cozy beds, crisp linens, and en-suite bathrooms. Relax on your private deck and take in the breathtaking panoramic views of this natural wonderland.
                  </p>
                  <img alt='Arival' loading='lazy' src='https://upload.wikimedia.org/wikipedia/commons/e/e5/Ngorongoro_Crater%2C_Tanzania.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Ngorongoro Crater Lodge.  </p>
                </div>
                <hr className='my-5'/>




                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 7
                </h1>
                <p className='font-bold mb-2'>SERENGETI NATIONAL PARK ||  Deep into the vast  plains    </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  We will venture down to the floor of the natural amphitheater of Ngorongoro crater for an incredibly rewarding game drive. This is where you'll have the opportunity to spot nearly all of East Africa's renowned wildlife. Descend into the crater during its most active time of day to observe the resident animals, all while enjoying a delicious lunch at the crater's base.                  
                  <br/><br/>Afterwards, we'll take a flight to the legendary Serengeti National Park and make ourselves at home in the remote and authentic Lemala Ewanjan camp. Relax on your veranda and take in the sweeping views of the Serengeti plains.
                  </p>
                  <img alt='Arival' loading="lazy" src='https://live.staticflickr.com/5225/5699832418_365b81c739_b.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Lemala Ewanjan camp.   </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 8
                </h1>
                <p className='font-bold mb-2'>SERENGETI NATIONAL PARK || Big five explorations  </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  After a delightful  morning breakfast, you will set out on both morning and afternoon game drives across the vast Serengeti plains. Beyond sighting the renowned Big Five animals - Cape buffalo, elephants, rhinos lions, and leopards  -  you might witness the impressive Great Migration as vast herds of wildebeests and zebras journey through the Serengeti in search of food and water.Your highly experienced driver-guide will ensure you stay in the heart of the action for optimal game viewing. 
                  <br/><br/>As the day winds down, return to the camp in the evening, where you can sip a cocktail and contemplate the grandeur of Africa during a tranquil Scenic Sundowner experience.
                   </p>
                  <img alt='Arival' loading='lazy' src='https://upload.wikimedia.org/wikipedia/commons/6/61/Serengeti_National_Park%2C_Tanzania_-_panoramio_%288%29.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Lemala Ewanjan Camp.   </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 9
                </h1>
                <p className='font-bold mb-2'> SERENGETI NATIONAL PARK || Create  your  own day plan  </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Set out for an early  morning  game drive and return  to the lodge  to sample  the various  activities  on offer which  includes: Guided  nature  walks,  bird watching,  riding  on horsebacks, cultural  visits  at the manyattas and the Spectacular  hot air  balloon  rides.                  </p>
                  <img alt='Arival' src='https://images.pexels.com/photos/7280783/pexels-photo-7280783.jpeg?auto=compress&cs=tinysrgb&w=1600' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Lemala Ewanjan Camp   </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 10
                </h1>
                <p className='font-bold mb-2'>MAASAI MARA|| Deep into the wild    </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  This day, you'll embark on a private chartered flight to the  famed Masai Mara Game Reserve. 
                  <br/><br/>Upon landing, settle into your luxurious camp and then dive into the vast Mara during an afternoon game drive. Your arrival here is strategically timed to coincide with the historical presence of the Great Migration in the Masai Mara, increasing your chances of witnessing this extraordinary natural phenomenon.
                  <br/><br/>As night falls, unwind in your wonderfully appointed en-suite tent, where you can stargaze at the African night sky from your spacious wooden deck.
                  </p>
                  <img alt='Arival' src='https://live.staticflickr.com/7827/46196374375_3a67240235_b.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Mara Plains  Camp   </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 11
                </h1>
                <p className='font-bold mb-2'>MAASAI MARA|| Inherent splendor in Mara's natural richness. </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Get an early start to your day for an exhilarating hot air balloon journey that will have you gliding above the expansive and wildlife-filled Masai Mara, offering a unique and breathtaking view of the animals below. Afterward, land for a hearty bush breakfast in the wild.
                  <br/><br/>In the afternoon, make sure your camera is ready for captivating moments like a cheetah chasing a group of speedy Thomson's gazelles during your game drive. As the day winds down, head back to the camp for a delightful dinner enjoyed around a warm and inviting campfire.
                  </p>
                  <img alt='Arival' loading='lazy' src='https://live.staticflickr.com/65535/52653899824_d04bef4c3a_b.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Mara Plains  Camp    </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 12
                </h1>
                <p className='font-bold mb-2'>MAASAI MARA|| Hot air ballooning & exclusive visits    </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Begin your day early with a thrilling hot air balloon excursion, offering a unique perspective as you glide above the expansive and wildlife-filled Maasai Mara. Afterward, enjoy a bush breakfast upon landing. In the afternoon, immerse yourself in Maasai culture through an exclusive visit to their traditional homesteads, known as manyattas, and gain valuable insights into their harmonious coexistence with the park's wildlife.                  </p>
                  <img alt='Arival' loading='lazy' src='https://images.pexels.com/photos/18647898/pexels-photo-18647898/free-photo-of-colorful-hot-air-balloon-above-savannah.jpeg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>  Mara Plains  Camp   </p>
                </div>
                <hr className='my-5'/>


                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 13 
                </h1>
                <p className='font-bold mb-2'> NAIROBI || Wayward  connection  back home     </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  After a hearty morning breakfast, you will depart for a flight to Kenya’s capital Nairobi and subsequent transfer to House of Waine  day room service and a meal before you catch a flight back.                  </p>
                  <img alt='Arival' src='https://upload.wikimedia.org/wikipedia/commons/3/30/Nairobi_City_Aerial_view.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> House of Waine    </p>
                </div>
                <hr className='my-5'/>

        </div>
        </div>


        <div className=" bg-[#fff]">
                <img src={require('../../Assets/kanairo-black.svg').default } alt="Kanairo"/>
        </div>
        <Footer/>
    </div>
  )
};

export default UltimateMigration;