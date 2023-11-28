import React,{useState} from 'react';
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Footer from '../Footer/Footer';
import Partners from '../Partners';
import {FaHotel} from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";

function SpiritOfUganda() {
    const [colorChanged, setColorChanged]= useState(false);
    const [detailed, setDetailed] = useState(false);

    const toggleDetails =()=>{
      setDetailed(!detailed)
    };

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
        <div className='relative'>
          <img alt='spirit of Uganda Safari' src='https://www.kideponationalpark.com/wp-content/uploads/2016/11/kidepooo-1350x500.jpg' className='w-full mt-[100px] lg:mt-[0px]'/>
          <h1 className=" absolute bottom-0 text-white text-3xl lg:text-7xl font-[SourceSerifPro-Regular] md:l-10 z-0"> <strong>Spirit of Uganda</strong> </h1>
        </div>
        <div className=" w-full bg-red-900 md:h-[100px] h-[300px] md:flex md:flex-row flex flex-col md:justify-around justify-center md:items-center px-5"> 
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">DURATION</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">15days/14 nights </p>
                </div>
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">PRICE</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">From $ 17,567 per person</p>
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
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Entebbe</a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    1
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Protea Hotel Entebbe 
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Bed and Breakfast
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#maasaimara" className=" hover:text-red-900 md:text-xl">Jinja  </a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    2
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Wildwaters Lodge 
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#serengeti" className=" hover:text-red-900 md:text-xl">Murchison Falls</a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    2
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Paraa Safari Lodge
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Kibale Forest </a> 
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    2
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                  Kyaninga Lodge
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Queen Elizabeth </a> 
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    2
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Mweya Safari Lodge
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Ishasha </a> 
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    2
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Ishasha Wilderness Camp
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Bwindi </a> 
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    3
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Sunctuary Gorilla Forest Camp
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Entebbe </a> 
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    __
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Protea Hotel Entebbe
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Day room
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
                                <span>White-water rafting on the Nile River</span></li>
                            <li className="flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span> Prolific  game viewing at  Murchison Falls and Queen Elizabeth National Parks </span>
                            </li>
                          
                            <li className=" flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Spot Tree-climbing lions in Queen Elizabeth National Park </span></li>
                           
                            <li className=" flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Stunning scenaries: Verdant woodlands, expansive grasslands, crater lakes, and snow-capped mountains. </span></li>
                            
                            <li className=" flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Mountain Gorilla and chimp tracking experiencesk </span></li>
                            <li className=" flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Up close and personal with hippo along the Kazinga Channel </span></li>

                            <li className=" flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>A wide variety of avian species, including several exclusive to the Albertine Rift region. </span></li>
                            
                        </ul>
                    </div>


              <div className=' lg:px-[300px] mt-10 px-10'>
              <h1 className="text-2xl font-[SourceSerifPro-Black] text-red-900">Included</h1>
              <div className="lg:flex lg:justify-between ">
                <ul className="mb-8 space-y-4 text-left text-black">
                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Meals and accommodations as shown in the itinerary.</span>
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
                    <span>Game drives in camps 4x4 vehicles with roof hatches for game viewing.</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Transport using 4x4 vehicle with experienced English/French/Spanish speaking driver/guide.</span>
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
                    <span>One chimpanzee tracking permit in Kibale National Park.</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>One boat cruise on the Kazinga Channel, Queen Elizabeth National Park.</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>2 x gorilla tracking permits in Bwindi National Park.</span>
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
                    <span>Optional activities and excursions: Visit to Rhino Sanctuary, White Water Rafting, Boat ride on the Nile, Horseback Ride Experience, Batwa Cultural Experience, Telephone calls and laundry services.</span>
                  </li>
                </ul>
              </div>
        </div>
        <div>
        </div>

        {
          detailed === false ? 
        

        <div className=' lg:px-[200px] px-[70px] mt-10'>
          <div className=' flex justify-between'>
            <h1 className=' text-2xl font-bold mb-5'>Itinerary Summary</h1>
            <div onClick={toggleDetails} className='font-bold text-lg cursor-pointer bg-orange-500 text-white p-3 rounded-md mb-5'>View Detailed Itinerary</div>
          </div>
          <hr/>
          <div className='my-5 flex justify-between'>
              <h1 className='font-bold mb-2'>Day 1: ENTEBBE || Arrival.</h1>
              <IoIosArrowDown/>
          </div>
          <hr/>
          <div className='my-5 flex justify-between'>
              <h1 className='font-bold mb-2'>Day 2: JINJA || White Water Rafting</h1>
              <IoIosArrowDown/>
          </div>
          <hr/>
          <div className='my-5 flex justify-between'>
              <h1 className='font-bold mb-2'>Day 3: JINJA || Constant explorations.</h1>
              <IoIosArrowDown/>
          </div>
          <hr/>
          <div className='my-5 flex justify-between'>
              <h1 className='font-bold mb-2'>Day 4: MURCHISONS FALLS || Jewel of River Nile</h1>
              <IoIosArrowDown/>
          </div>
          <hr/>
          <div className='my-5 flex justify-between'>
              <h1 className='font-bold mb-2'>Day 5: MURCHISONS FALLS || Game viewing.</h1>
              <IoIosArrowDown/>
          </div>
          <hr/>
          <div className='my-5 flex justify-between'>
              <h1 className='font-bold mb-2'>Day 6: KIBALE FOREST || Bunyaruguru Crater Exploration.</h1>
              <IoIosArrowDown/>
          </div>
          <hr/>
          <div className='my-5 flex justify-between'>
              <h1 className='font-bold mb-2'>Day 7: KIBALE FOREST || Chimpanzee trek.</h1>
              <IoIosArrowDown/>
          </div>
          <hr/>
          <div className='my-5 flex justify-between'>
              <h1 className='font-bold mb-2'>Day 8: QUEEN ELIZABETH || Wild Adventures</h1>
              <IoIosArrowDown/>
          </div>
          <hr/>
          <div className='my-5 flex justify-between'>
              <h1 className='font-bold mb-2'>Day 9: QUEEN ELIZABETH || Wild Adventures</h1>
              <IoIosArrowDown/>
          </div>
          <hr/>
          <div className='my-5 flex justify-between'>
              <h1 className='font-bold mb-2'>Day 10: ISHASHA || Cruise the Kazinga Channel</h1>
              <IoIosArrowDown/>
          </div>
          <hr/>
          <div className='my-5 flex justify-between'>
              <h1 className='font-bold mb-2'>Day 11: ISHASHA || Constant explorations</h1>
              <IoIosArrowDown/>
          </div>
          <hr/>
          <div className='my-5 flex justify-between'>
              <h1 className='font-bold mb-2'>Day 12: BWINDI. || Up close with Mountain Gorillas</h1>
              <IoIosArrowDown/>
          </div>
          <hr/>
          <div className='my-5 flex justify-between'>
              <h1 className='font-bold mb-2'>Day 13 & 14: BWINDI || Batwa tribe experiences and philanthropy tours</h1>
              <IoIosArrowDown/>
          </div>
          <hr/>
          <div className='my-5 flex justify-between'>
              <h1 className='font-bold mb-2'>Day 15: ENTEBBE || Wayward connection back home.</h1>
              <IoIosArrowDown/>
          </div>
          <hr/>
         
        </div>

          :

        <>
           <div className=' lg:px-[200px] px-[70px] mt-10'>
          <div className=' flex justify-between'>
            <h1 className=' text-2xl font-bold mb-5'>Itinerary </h1>
            <div onClick={toggleDetails} className='font-bold text-lg cursor-pointer bg-orange-500 text-white p-3 rounded-md mb-5'>View Summary Itinerary</div>
          </div>
         
          <div >
              <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 1
              </h1>
              <p className='font-bold mb-2'>ENTEBBE || Arrival.</p>
              <hr/>
              <div className='lg:flex items-center justify-center'>
              
                <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Upon your arrival at Entebbe Airport, we will meet you and transfer  you to your Hotel for a leisurely evening stay. 
                </p>
              
                <img alt='Arival' loading='lazy' src='https://z.cdrst.com/foto/hotel-sf/84a50/granderesp/protea-hotel-by-marriott-entebbe-general-ce05712.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                
              </div>
          </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Protea Hotel Entebbe </p>
                </div>
                <hr className='my-5'/>


              <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 2
                </h1>
                <p className='font-bold mb-2'>JINJA || White  Water Rafting </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Following breakfast, explore the charm of Entebbe City before embarking on a captivating scenic trip to Jinja town. Upon arrival, settle into the comfort of your lavish accommodation at Wildwaters Lodge, where you'll be based for the next two nights. 
                  </p>
                  <img alt='Arival' loading='lazy' src='https://www.gorillatrips.net/wp-content/uploads/2018/05/White-Water-Rafting-in-Jinja-Uganda.png' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Wildwaters Lodge </p>
                </div>
                <hr className='my-5'/>


                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 3
                </h1>
                <p className='font-bold mb-2'>JINJA || Constant  explorations  </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Today, take advantage of the various activities available during your stay, such as quad biking, horseback riding, white-water rafting, and a guided village tour. You will also delight in a Nile boat expedition aboard the iconic and restored African Queen, renowned from the film featuring Humphrey Bogart.  
                  </p>
                  <img alt='Arival' loading='lazy' src='https://www.jinjatours.com/wp-content/uploads/2021/02/Source-of-the-nile-Bridge-2.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Wildwaters Lodge </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 4
                </h1>
                <p className='font-bold mb-2'>MURCHISONS FALLS || Jewel of River Nile  </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Embark on an early morning journey to Murchison Falls, a picturesque site along the Nile and the setting for the iconic Humphrey Bogart film, The African Queen. En route, you'll make stops at points of interest before taking a ferry across the Nile directly to the lodge. Upon arrival, settle in before accompanying your guide to explore Murchison Falls, where a refreshing mist cascades down a narrow gorge.  
                  </p>
                  <img alt='Arival' loading='lazy' src='https://upload.wikimedia.org/wikipedia/commons/b/bb/Murchison_Falls_-_by_Boschlech.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Paraa Safari  Lodge  </p>
                </div>
                <hr className='my-5'/>




                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 5
                </h1>
                <p className='font-bold mb-2'>MURCHISONS FALLS ||  Game viewing.   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Spend this day indulging in wildlife observation along the banks of the Nile in Murchison Falls, where you'll encounter a rich array of animals including: elephants, giraffes, hippos, buffaloes, lions, antelopes, warthogs, and more. An ideal way to spend the day is by embarking on a morning game drive followed by an afternoon boat safari to the base of the falls and to the top. Additional activities to be explored include:  Chimpanzee tracking,  nature walks, rhino sanctuary visit, and a boat trip to the Nile Delta.                   
                  </p>
                  <img alt='Arival' loading='lazy' src='https://live.staticflickr.com/8757/17973276409_434bf59cb5_b.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Paraa Safari  Lodge  </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 6
                </h1>
                <p className='font-bold mb-2'>KIBALE FOREST || Bunyaruguru Crater Exploration.   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  After a substantial morning breakfast, catch a flight to Kibale and then proceed to your lodge. Dedicate the remainder of the day to unwinding and enjoying the amenities of the lodge. Alternatively, you can choose to partake in a nature walk along the summit of the Bunyaruguru Crater later in the day.                  
                  </p>
                  <img alt='Arival' src='https://live.staticflickr.com/65535/49424295957_e179727d0f_b.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Kyaninga Lodge   </p>
                </div>
                <hr className='my-5'/>




                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 7
                </h1>
                <p className='font-bold mb-2'>KIBALE FOREST ||   Chimpanzee trek.   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Rise early for the commencement of your chimpanzee trek, immersing yourself in the quietude of the forest as you traverse. The trek will guide you through Kibale Forest, offering promising encounters with red-tailed monkeys and grey-cheeked mangabeys along the path. If fortunate enough to join the company of chimpanzees, relish an hour observing their behaviors and capturing photographs to your satisfaction. Subsequently, experience a local-style journey by African canoe across a lake, keeping an eye out for wildlife and savoring the picturesque surroundings.                  
                  </p>
                  <img alt='Arival' loading='lazy' src='https://live.staticflickr.com/3830/13774854724_348132af08_b.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Kyaninga Lodge   </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 8
                </h1>
                <p className='font-bold mb-2'>QUEEN ELIZABETH || Wild Adventures  </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Today, we proceed southward towards Queen Elizabeth National Park. Upon arrival, make yourself comfortable in your accommodation at Mweya Safari Lodge, as you enjoy  the stunning parking  views from your  private deck. In the afternoon, embark on a game drive to venture into the nearby terrain, for an opportunity to encounter the "big five," hippos, baboons, buffaloes, and a variety of other wildlife.
                   </p>
                  <img alt='Arival' loading='lazy' src='https://nowthendigital.com/wp-content/uploads/2022/09/queen-elizabeth-national-park-uganda.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Mweya Safari Lodge.   </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 9
                </h1>
                <p className='font-bold mb-2'>QUEEN ELIZABETH || Wild Adventures  </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Participate in a unique lion-tracking adventure led by the rangers of Queen Elizabeth National Park, for an opportunity to spot the rarely seen tree-climbing lions - a phenomenon uncommon elsewhere in Africa. Following lunch, return to the park for a boat safari along the Kazinga Channel. Here, you can witness numerous animals congregating to drink from the channel, such as hippos,  buffalo, crocodiles, as well as bird species like, fish eagles pied, pelicans, and kingfishers. Conclude your safari day with a picturesque sundowner celebration.
                  </p>
                  <img alt='Arival' loading='lazy' src='https://upload.wikimedia.org/wikipedia/commons/6/66/Lion_-_Queen_Elizabeth_National_Park%2C_Uganda_%283%29.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Mweya Safari Lodge.   </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 10
                </h1>
                <p className='font-bold mb-2'>ISHASHA || Cruise the Kazinga Channel   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Embark on a journey to the Ishasha sector of Queen Elizabeth National Park today, indulging in a game drive while appreciating the scenic views along the way. Your accommodation will be in the secluded Ishasha sector, characterized by candelabra trees that serve as the favored resting spots for the park's famous tree-climbing lions. In the evening,  take a breathtaking  along Cruise the Kazinga Channel for a chance  to spot  hippos, crocodiles and a variety  of  bird species.
                  </p>
                  <img alt='Arival' loading='lazy' src='https://www.insidequeenelizabethnationalpark.com/wp-content/uploads/2021/12/boat-cruise-3-1024x683.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Ishasha Wilderness Camp.   </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 11
                </h1>
                <p className='font-bold mb-2'>ISHASHA ||  Constant explorations    </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  The Ishasha savannahs are famous for hosting tree-climbing lions. Furthermore, being located within the park, the camp allows wildlife to move freely, offering guests the chance to observe elephants bathing in the river, buffalo grazing, and frequent sightings of Black-and-White Colobus and vervet monkeys in the vicinity.
                  <br/><br/>Dedicate this day to exploring the park through morning and afternoon game drives, remaining vigilant for captivating wildlife encounters. Conclude the safari day with a picturesque sundowner celebration.
                  </p>
                  <img alt='Arival' loading='lazy' src='https://live.staticflickr.com/2746/4504362858_56801a0680_b.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Ishasha Wilderness Camp.   </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 12
                </h1>
                <p className='font-bold mb-2'>BWINDI. || Up close with Mountain Gorillas    </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Indulge in a delicious morning breakfast before embarking on a picturesque journey to Bwindi Impenetrable National Park. Enjoy the scenic drive along the way, passing through the Rift Valley, Kigezi Highlands, and the mountains that lead to the national park. Upon reaching your camp in the afternoon, relish a Chef's Table experience.
                  </p>
                  <img alt='Arival' loading='lazy' src='https://live.staticflickr.com/7329/16372469599_0b2554cb0e_b.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>  Sunctuary Gorilla Forested Camp.   </p>
                </div>
                <hr className='my-5'/>


                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 13 & 14
                </h1>
                <p className='font-bold mb-2'>BWINDI || Batwa tribe experiences and philanthropy tours     </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Dedicate the next two days to tracking endangered mountain gorillas, spending an hour each day observing them.  Other potential activities during this period include: community and philanthropy tours, birding and forest walks, and experiences with the Batwa tribe.
                  </p>
                  <img alt='Arival' loading='lazy' src='https://cdn2.picryl.com/photo/2017/09/08/usaid-measuring-impact-conservation-enterprise-retrospective-uganda-international-b9dbb0-1024.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>  Sunctuary Gorilla Forested Camp.   </p>
                </div>
                <hr className='my-5'/>


                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 15
                </h1>
                <p className='font-bold mb-2'>ENTEBBE || Wayward  connection  back home    </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Take a flight back to Entebbe and check into Protea Hotel, where a dayroom is reserved for your use until your departure for the international flight.
                  </p>
                  <img alt='Arival' src='https://upload.wikimedia.org/wikipedia/commons/e/e4/Entebbe_Airport_2009-08-27_13-30-48.JPG' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>  Protea Hotel Entebbe.   </p>
                </div>
                <hr className='my-5'/>
          </div>

          
        </>
       
}

        <Partners/>
        <div className=" bg-[#fff]">
                <img src={require('../../Assets/kanairo-black.svg').default } alt="Kanairo"/>
        </div>
        <Footer/>
    </div>
  )
};

export default SpiritOfUganda;