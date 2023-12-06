import React,{useState} from 'react';
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Footer from '../Footer/Footer';
import Partners from '../Partners';
import {FaHotel} from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ThousandHills() {
    const [colorChanged, setColorChanged]= useState(false);
    const [detailed, setDetailed] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [isActive, setIsActive] = useState(0);

    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "black", borderRadius:50 }}
          onClick={onClick}
        />
      );
    }
    
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "black",borderRadius:50 }}
          onClick={onClick}
        />
      );
    }

    const settings = {
      dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    const imageStyle = {
      width: '100%', // Fixed width
      height: '400px',
      objectFit: 'cover',
    };

    const containerStyle ={
      margin: 'auto'
     
    }

    const toggleDetails =()=>{
      setDetailed(!detailed)
    };

    const toggleArrow =(index)=>{
      setClicked(true);
      setIsActive(index);
    };

    const closeArrow =(index)=>{
      setClicked(false);
      setIsActive(index);
    }



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
          <img alt='spirit of Uganda Safari' loading='lazy' src='http://intriqjourney-dev.harnods-server.com/wp-content/uploads/2020/06/Country-Rwanda-1820x697_c.jpg' className='w-full mt-[100px] lg:mt-[0px]'/>
          <h1 className=" absolute bottom-0 text-white text-3xl lg:text-7xl font-[SourceSerifPro-Regular] md:l-10 z-0"> <strong>Treasures  Of a Thousand  Hills</strong> </h1>
        </div>
        <div className=" w-full bg-red-900 md:h-[100px] h-[300px] md:flex md:flex-row flex flex-col md:justify-around justify-center md:items-center px-5"> 
                
                 <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">DESTINATION</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">Kigali, Volcanoes, Lake Kivu, Nyungwe Forest  </p>
                </div>
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">DURATION</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">11days/ 10nights  </p>
                </div>
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">PRICE</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">From $ 14, 300 per person</p>
                </div>
        </div>

        <div className=" lg:px-[300px] px-5 mb-5 mt-10">
          <p className=" font-[SourceSerifPro-Regular] md:text-xl">
          Rwanda's landscape is truly awe-inspiring, ranging from the majestic Virunga volcanoes to mist-covered tea plantations and vast rainforests. Over the course of 11 days, explore Volcanoes National Park, Lake Kivu, and Nyungwe Forest. This itinerary offers a unique opportunity to observe magnificent silverback gorillas and their families with the guidance of skilled trackers, retracing the path of Dian Fossey, who dedicated her life to studying mountain gorillas in the Virunga Mountains. For those passionate about chimpanzees, this safari promises a once-in-a-lifetime experience in one of the world's most abundant primate-rich destinations.        
          </p>
          </div>
  

        <div className=" lg:px-[300px] px-5">
                        <h1 className="text-2xl mb-10 font-[SourceSerifPro-Black] text-red-900">Safari Highlights </h1>
                        <ul className=" font-[SourceSerifPro-Regular] list-none md:text-xl space-y-4 text-left text-black">
                            <li className=" flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Learn about Rwanda's tragic past with an expert guide in the capital, Kigali. </span></li>
                            <li className="flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span> Trek and spend magical moments with gorilla family in the lush wilderness of Volcanoes National Park </span>
                            </li>
                          
                            <li className=" flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Witness the playful behavior of chimpanzees and troops of colombus monkeys  in Nyungwe Forest. </span></li>
                           
                            <li className=" flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Break from hiking and unwind on the shores of the crystal-clear waters of Lake Kivu. </span></li>
                            
                            <li className=" flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Excellent accommodations  at Rwanda's most luxurious tented  camps and lodges.  </span></li>
                            <li className=" flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Explore the rich culture and history of Rwanda </span></li>

                           
                        </ul>
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
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Kigali</a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    2
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Kigali Serena Hotel 
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Bed , Breakfast and Lunch
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#maasaimara" className=" hover:text-red-900 md:text-xl">Volcanoes National Park  </a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    3
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Singita Kwitonda Lodge 
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#serengeti" className=" hover:text-red-900 md:text-xl">Lake Kivu</a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    2
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Cleo Lake Kivu
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Nyungwe  Forest </a> 
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    3
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                One & Only Nyungwe House 
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Kigali</a> 
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    ___
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Kigali  Serena  Hotel
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Day Room
                                </td>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                </div>
        </div>


        <div className=' lg:px-[300px] mt-10 px-5'>
              <h1 className="text-2xl font-[SourceSerifPro-Black] text-red-900">Included</h1>
              <div className="p-5">
                <ul className="mb-8 space-y-4 text-left text-black">
                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Meals as specified</span>
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
                    <span>Road transfers as detailed in the itenerary using  4 × 4 vehicle with experienced English/French/Spanish speaking driver/guide.</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Park/conservancy entry fees </span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>All scheduled safari activities offered by the camps or lodges</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Finnest accommodation in the most authentic  camps and lodges shown in the itinerary</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Mineral water on  game drives.</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Gorilla tracking Permit .</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>24hour Lamlav Safaris on call support.</span>
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
                    <span>Telephone  calls and laundry services .</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Accomodation as specified.</span>
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

          <div className='my-5'>
          <div className='flex justify-between'>
              <h1 className='font-bold mb-2'>Day 1: KIGALI RWANDA|| Arrival</h1>
              {clicked && isActive===1 ? <div onClick={()=>closeArrow(1)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(1)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===1?  <img alt='Arival' loading='lazy' src='https://image-tc.galaxy.tf/wijpeg-2w7ueb8np3077348kg8u539fy/hr-dsc-5646.jpg?width=1600&height=1066' className=' w-1/2 object-contain'/>:<div/>}


          </div>
          <hr/>
          <div className='my-5'>
          <div className='flex justify-between'>
              <h1 className='font-bold mb-2'>Day 2: KIGALI || Genocide Memorial & Silicon Valley Explorations.</h1>
              {clicked && isActive===2 ? <div onClick={()=>closeArrow(2)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(2)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===2?  <img alt='Arival' loading='lazy' src='https://upload.wikimedia.org/wikipedia/commons/a/ae/Genocide_Memorial_site_of_Gisozi_Kigali_Genocide_Memorial_021.jpg' className=' w-1/2 object-contain'/>:<div/>}

          </div>
          <hr/>

          <div className='my-5'>
          <div className='flex justify-between'>
              <h1 className='font-bold mb-2'>Day 3: VOLCANOES NATIONAL PARK|| At the foothills of Virunga Volcanoes</h1>
              {clicked && isActive===3 ? <div onClick={()=>closeArrow(3)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(3)}><IoIosArrowDown/></div>}

          </div>
          {clicked && isActive===3?  <img alt='Arival' loading='lazy' src='https://live.staticflickr.com/114/290786253_f798d07a53_b.jpg' className=' w-1/2 object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className='my-5'>
          <div className='flex justify-between'>
              <h1 className='font-bold mb-2'>Day 4 & 5: VOLCANOES NATIONAL PARK || Up close with "Gorillas In the mist."</h1>
              {clicked && isActive===4 ? <div onClick={()=>closeArrow(4)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(4)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===4?  <img alt='Arival' loading='lazy' src='https://upload.wikimedia.org/wikipedia/commons/0/00/Gorillas_of_Volcanoes_National_park.jpg' className=' w-1/2 object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className='my-5'>
          <div className='flex justify-between'>
              <h1 className='font-bold mb-2'>Day 6: LAKE KIVU || Soaking up the shores of Lake Kivu</h1>
              {clicked && isActive===5 ? <div onClick={()=>closeArrow(5)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(5)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===5?  <img alt='Arival' loading='lazy' src='https://www.safarisrwandasafari.com/wp-content/uploads/2023/03/lake-kivu-rwanda.jpg' className=' w-1/2 object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className='my-5'>
          <div className='flex justify-between'>
              <h1 className='font-bold mb-2'>Day 7: LAKE KIVU || Discover the greatest valleys, pristine peninsulas and island</h1>
              {clicked && isActive===6 ? <div onClick={()=>closeArrow(6)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(6)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===6?  <img alt='Arival' loading='lazy' src='https://journeysbydesign.com/wp-content/uploads/2017/01/%C2%A9-Stella-Wadulo.jpg' className=' w-1/2 object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className='my-5'>
          <div className='flex justify-between'>
              <h1 className='font-bold mb-2'>Day 8: NYUNGWE FOREST|| Up close with Mountain Gorillas</h1>
              {clicked && isActive===7 ? <div onClick={()=>closeArrow(7)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(7)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===7?  <img alt='Arival' loading='lazy' src='https://live.staticflickr.com/4080/4945696386_5d9dda6334_b.jpg' className=' w-1/2 object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className='my-5'>
          <div className='flex justify-between'>
              <h1 className='font-bold mb-2'>Day 9 & 10: NYUNGWE FOREST || Create your own day plan</h1>
              {clicked && isActive===8 ? <div onClick={()=>closeArrow(8)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(8)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===8?  <img alt='Arival' loading='lazy' src='https://uniglobeletsgotravel.com/wp-content/uploads/2019/02/gorilla-group-1.jpg' className=' w-1/2 object-contain'/>:<div/>}


          </div>
          <hr/>
          <div className='my-5'>
          <div className='flex justify-between'>
              <h1 className='font-bold mb-2'>Day 11: KIGALI RWANDA|| Homeward connections</h1>
              {clicked && isActive===9 ? <div onClick={()=>closeArrow(9)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(9)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===9?  <img alt='Arival' loading='lazy' src='https://www.explorerwandatours.com/wp-content/uploads/2019/08/Kigali-City-750x450.jpg' className=' w-1/2 object-contain'/>:<div/>}


          </div>
          <hr/>
         
        </div>

:

        <div className=' lg:px-[200px] px-[70px]'>
        <div className=' flex justify-between'>
            <h1 className=' text-2xl font-bold mb-5'>Itinerary </h1>
            <div onClick={toggleDetails} className='font-bold text-lg cursor-pointer bg-orange-500 text-white p-3 rounded-md mb-5'>View Summary Itinerary</div>
          </div>
          <div>
              <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 1
              </h1>
              <p className='font-bold mb-2'>KIGALI RWANDA|| Arrival </p>
              <hr/>
              <div className='lg:flex items-center justify-center'>
              
                <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                Upon arrival in  Kigali you will be recieved by your Lamlav Safari Director,  who  will  brief you on your safari as you transfer to the luxurious Kigali Serena Hotel.                 </p>
              
                <img alt='Arival' loading='lazy' src='https://image-tc.galaxy.tf/wijpeg-2w7ueb8np3077348kg8u539fy/hr-dsc-5646.jpg?width=1600&height=1066' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                
              </div>
          </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Kigali Serena Hotel.</p>
                </div>
                <hr className='my-5'/>


              <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 2
                </h1>
                <p className='font-bold mb-2'>KIGALI || Genocide Memorial &  Silicon Valley  Explorations. </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Today, you'll embark on a meaningful journey by visiting the Genocide Memorial Site, where you'll discover Rwanda's powerful approach to addressing its past and becoming a beacon of human strength. Following a delightful lunch at a nearby restaurant, continue your day with a tour of Kigali, exploring various attractions, including a visit to a coffee farm where you'll gain insights into coffee cultivation, from harvesting to roasting and brewing.                  </p>
                  <img alt='Arival' loading='lazy' src='https://upload.wikimedia.org/wikipedia/commons/a/ae/Genocide_Memorial_site_of_Gisozi_Kigali_Genocide_Memorial_021.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Kigali Serena Hotel</p>
                </div>
                <hr className='my-5'/>


                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 3
                </h1>
                <p className='font-bold mb-2'> VOLCANOES NATIONAL PARK||  At the foothills of Virunga Volcanoes  </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  This morning, embark on a journey towards Volcanoes National Park, situated on a vast volcanic massif containing six active and three dormant volcanoes. Here, you'll have the incredible chance to experience a once-in-a-lifetime encounter with the majestic mountain gorillas of Parc Nationale des Volcanes.
                  <br/><br/>Arrive punctually and get comfortable at the stunning Singita Kwitonda Lodge, where you'll be spending three thrilling nights! Afterward, delight in a delectable lunch, and the remainder of the afternoon is yours to unwind and make the most of the camp's facilities while admiring the distant, towering volcanic cones. Conclude your adventure with a picturesque sundowner on the riverbank, watching the sun gracefully disappear behind the majestic peaks as sipping your preferred beverage.                  </p>
                  <img alt='Arival' loading='lazy' src='https://live.staticflickr.com/114/290786253_f798d07a53_b.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Singita Kwitonda Lodge. </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 4 & 5
                </h1>
                <p className='font-bold mb-2'>VOLCANOES  NATIONAL PARK || Up close with "Gorillas In the  mist."  </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Over the next two days, you'll journey through the dense forest accompanied by a skilled park guide, until you have the incredible opportunity to encounter both golden monkeys and a local gorilla family. Witness these remarkable creatures as they engage in playful activities, search for food, and find respite in the shade of the trees. The time it takes to reach the gorillas can vary from as little as 45 minutes to a few hours, depending on their location, which may be in bamboo thickets or within the dense forest. This is undeniably one of the most memorable and awe-inspiring wildlife encounters one can ever experience – words truly cannot capture its sheer magnificence.
                  <br/><br/>Additionally, there's a plethora of other activities to explore, such as visiting the Karisoke Research Center of the Dian Fossey Gorilla Fund, hiking, guided nature walks, birdwatching, and canoeing along the Mukungwa River.                  </p>
                  <img alt='Arival' loading='lazy' src='https://upload.wikimedia.org/wikipedia/commons/0/00/Gorillas_of_Volcanoes_National_park.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Singta Kwitonda Lodge.   </p>
                </div>
                <hr className='my-5'/>




                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 6
                </h1>
                <p className='font-bold mb-2'>LAKE KIVU || Soaking up the shores of Lake Kivu   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  This morning, embark on a picturesque journey to the tranquil shores of Lake Kivu, where you'll find your peaceful retreat for an unforgettable two-night stay at the delightful Cleo Lake Kivu -Renowned for its captivating beauty and air of mystery, teeming with traders and fishermen navigating its waters in traditional dugout canoes.
<br/><br/>Dedicate the rest of the day to discovering a wide range of activities both on the property and in its vicinity. You have the opportunity to embark on adventures right at the resort, such as enjoying the pristine blue swimming pool, indulging in spa treatments, kayaking, and taking exhilarating rides on speedboats.                   </p>
                  <img alt='Arival' loading='lazy' src='https://www.safarisrwandasafari.com/wp-content/uploads/2023/03/lake-kivu-rwanda.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Cleo Lake Kivu </h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Paraa Safari  Lodge  </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 7
                </h1>
                <p className='font-bold mb-2'>LAKE KIVU || Discover the greatest valleys, pristine peninsulas and isl   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  This day you will explore the nearby islands, venture along safe and unexplored trails, hike to the bird's nest with its enchanting views in Kibuye, go on biking expeditions, visit national parks, immerse yourself in cultural tours, experience sunset or nighttime fishing, and even join local fishermen in traditional songs.                  </p>
                  <img alt='Arival' loading='lazy' src='https://journeysbydesign.com/wp-content/uploads/2017/01/%C2%A9-Stella-Wadulo.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Cleo Lake Kivu    </p>
                </div>
                <hr className='my-5'/>




                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 8
                </h1>
                <p className='font-bold mb-2'>NYUNGWE FOREST||  Up close with Mountain Gorillas    </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  After breakfast, you will embark on a journey to Nyungwe Forest National Park, an untouched and biologically diverse rainforest teeming with captivating wildlife.You will head southward to Nyanza, a place steeped in Rwandan history as the former seat of the Rwandan kingdom. Here, you'll explore the King's Palace Museum.  Upon arrival at One & Only Nyungwe House, a tranquil retreat nestled on the fringes of the forest within a tea plantation,  you will savor a delicious on-site lunch. The rest of your day is yours to unwind or partake in the various activities available for your enjoyment.                  </p>
                  <img alt='Arival' loading='lazy' src='https://live.staticflickr.com/4080/4945696386_5d9dda6334_b.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> One & Only Nyungwe House   </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 9 & 10
                </h1>
                <p className='font-bold mb-2'> NYUNGWE FOREST || Create  your  own day plan </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Use these days to fully explore the park and take advantage of the camp's amenities and activities. You can engage in a range of experiences, including guided chimpanzee tracking expeditions, guided canopy walks in Nyungwe Forest, birdwatching, wildlife spotting, and cultural visits, among other options.
Nyungwe Forest is an exceptional location for observing chimpanzees in their natural habitat. The park's primary attractions include its diverse monkey species, with chimpanzees being the highlight. Additionally, you'll have the chance to encounter various primates such as the abundant l'Hoest's monkeys, Grey-cheeked mangabeys, and the largest known group of Rwenzori colobus monkeys.                   </p>
                  <img alt='Arival' loading='lazy' src='https://uniglobeletsgotravel.com/wp-content/uploads/2019/02/gorilla-group-1.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>  One & Only Nyungwe House   </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 11
                </h1>
                <p className='font-bold mb-2'> KIGALI RWANDA|| Homeward connections  </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  As your Rwanda journey concludes, you'll be chauffeured back to Kigali, with opportunities to visit Butare and Nyanza along the way. These stops provide additional insights into Rwandan culture and daily life before reaching the airport for your evening departure flight. You will  have a day room at the Kigali Serena Hotel or any other convenient  hotel.                  </p>
                  <img alt='Arival' loading='lazy' src='https://www.explorerwandatours.com/wp-content/uploads/2019/08/Kigali-City-750x450.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Kigali Serena Hotel    </p>
                </div>
                <hr className='my-5'/>
                
        </div>
        }
        </div>

        <div className="mt-10 mb-5">
          
          <div className="relative mt-20 z-[0] m-auto w-[80%]">
          <h1 className='font-[SourceSerifPro-Black] text-2xl'>Hotels & Lodges</h1>
                    <Slider {...settings} autoplay arrows style={containerStyle}>
                        <div className="w-1/2">
                            <img style={imageStyle} alt="1" src="https://image-tc.galaxy.tf/wijpeg-9mbxti86r9uj4nhjff35so37q/hr-dsc-5555.jpg?width=1600&height=1066"/>
                            <h1 className="font-bold">Kigali Serena Hotel</h1>
                        </div>
                        <div className="w-1/2 ml-5">
                        <img style={imageStyle} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/d9/f5/f0/singita-kwitonda-lodge.jpg?w=700&h=-1&s=1" alt="2"/>
                        <h1 className="font-bold">Singita Kwitonda Lodge</h1>
                        </div>
                        <div className="w-1/2">
                        <img style={imageStyle} src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/322181831.jpg?k=d2c6350b50fc9308d582212adbce570b1424eaf5bb6706787d14a5d930542195&o=&hp=1" alt="3"/>
                        <h1 className="font-bold">Cleo Lake Kivu</h1>
                        </div>
                        <div className="w-1/2 ml-5">
                        <img style={imageStyle}src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/462528510.jpg?k=9812832fde3690f7e2312e2cf38bf9185304241b1f115d0eed2e014b3dcea5d5&o=&hp=1" alt="4"/>
                        <h1 className="font-bold">One & Only Nyungwe House</h1>
                        </div>
                       
                        {/* <div>
                        <img src="" alt="4"/>
                        <h1 className="font-bold"></h1>
                        </div> */}
                    </Slider>
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

export default ThousandHills;