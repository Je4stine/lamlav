import React,{useState} from 'react';
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Footer from '../Footer/Footer';
import {FaHotel} from 'react-icons/fa'
import Partners from '../Partners';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {ImCheckmark} from 'react-icons/im';
import { IoMdClose } from "react-icons/io";

function UgandaFamily() {
    const [colorChanged, setColorChanged]= useState(false);
    const [detailed, setDetailed] = useState(false);
    const [isActive, setIsActive] = useState(0);
    const [clicked, setClicked] = useState(false);

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
        speed: 1500,
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
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
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
    <div className='bg-white'>
        {
        colorChanged ? <Navreveal/> : <Navbar/>
        }
      <div>
      <div className='relative'>
          <img alt='spirit of Uganda Safari' loading='lazy' src='https://mondsafaris.com/wp-content/uploads/2021/03/family.jpg' className='w-full mt-[100px] lg:mt-[0px]'/>
          <h1 className=" absolute bottom-0 text-white text-3xl lg:text-7xl font-[SourceSerifPro-Regular] md:l-10 z-0"> <strong>Uganda family Safari</strong> </h1>
        </div>
        <div className=" w-full bg-red-900 md:h-[100px] h-[300px] md:flex md:flex-row flex flex-col md:justify-around justify-center md:items-center px-5"> 
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">DESTINATION</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">Entebbe, Jinja, Queen Elizabeth </p>
                    <p className="font-[SourceSerifPro-Regular] text-white">Ishasha, Bwindi, Boma Hotel Entebbe </p>
                </div>
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">DURATION</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">12days/11nights </p>
                </div>
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">PRICE</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">From $ 8,567 per person</p>
                </div>
        </div>
        <div className=" lg:px-[300px] px-5 mb-5 mt-10">
          <p className=" font-[SourceSerifPro-Regular] md:text-xl">Your adventure kicks - off with one night in Entebbe, at the exquisite Boma Hotel, followed by a three-night stay at WildWaters Lodge on the banks of the River Nile, in Jinja. Revel in a plethora of activities, from quad biking, bungee jumping, to white-water rafting. 

            <br/><br/>Take a scenic flight to Queen Elizabeth National Park, where a two-part stay at Mweya Lodge and Ishasha Wilderness Camp offers diverse wildlife experiences, including a chance to spot tree-climbing lions.
  
            <br/><br/>At Mahogany Springs in Bwindi Impenetrable Forest, seasoned guides, trackers, and porters will accompany you into the dense forest as you track gorillas, providing an opportunity to observe these magnificent apes up close.</p>
        </div>
        

        <div className=" lg:px-[300px] px-5">
                        <h1 className="text-2xl mb-10 font-[SourceSerifPro-Black] text-red-900">Safari Highlights </h1>
                        <ul className=" font-[SourceSerifPro-Regular] list-none md:text-xl space-y-4 text-left text-black">
                            <li className=" flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>White-water rafting on the Nile River</span></li>
                            <li className="flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span> Classic game viewing in Queen Elizabeth National Park Parks </span>
                            </li>
                          
                            <li className=" flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Stunning scenaries: Verdant woodlands, expansive grasslands, crater lakes, and snow-capped mountains. </span></li>
                           
                            <li className=" flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Mountain Gorilla and chimp tracking experiences </span></li>
                            
                            <li className=" flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Up close and personal with hippo along the Kazinga Channel </span></li>
                            <li className=" flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Excellent accommodations </span></li>

                            
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
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Entebbe</a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    1
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Boma Hotel Entebbe 
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
                                    3
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
                                    <a href="#serengeti" className=" hover:text-red-900 md:text-xl">Queen Elizabeth </a>
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
                                Mahogany Springs
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Boma Hotel Entebbe  </a> 
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    ___
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Boma Hotel Entebbe 
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Day Room
                                </td>
                            </tr>
                           
                           
                        </tbody>
                    </table>
                </div>
        </div>


        <div className=' mt-10 lg:px-[300px] px-5'>
              <div className='flex flex-col items-center justify-center mb-10'>
                  <div className="h-[80px] w-[80px] rounded-full bg-orange-500 flex flex-col items-center justify-center"><ImCheckmark size={20} /></div>
                  <h1 className="text-2xl font-[SourceSerifPro-Black] text-red-900 mt-10 mb-5">Included</h1>
                  <hr/>
                </div>
              <div className="p-5">
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

        <div className=' lg:px-[300px] mt-10 px-5'>
              <div className='flex flex-col items-center justify-center mb-10'>
                  <div className="h-[80px] w-[80px] rounded-full bg-red-700 flex flex-col items-center justify-center"><IoMdClose size={20} color='#fff' /></div>
                  <h1 className="text-2xl font-[SourceSerifPro-Black] text-red-900 mt-10 mb-5">Excluded</h1>
                  <hr/>
                </div>
              <div className="lg:flex lg:justify-between ">
                <ul className="mb-8 space-y-4 text-left text-black mt-10">
                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Visa fees and International flight</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Regional flights and departure taxes</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Medical, Travel and baggie insurance</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Beverages where not indicated </span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Optional activities and excursions not Individualised  for you.</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Inoculations and personal insurance</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Additional gorilla treks</span>
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
          <div className=' flex justify-between'>
              <h1 className='font-bold mb-2'>Day 1: ENTEBBE || Arrival.</h1>
              {clicked && isActive===1 ? <div onClick={()=>closeArrow(1)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(1)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===1?  <img alt='Arival' loading='lazy' src='https://www.boma.co.ug/wp-content/uploads/2018/10/MK1_9584.jpg' className=' lg:w-1/2 w-full object-contain'/>:<div/>}

          </div>
          <hr/>

          <div className='my-5'>
          <div className='flex justify-between'>
              <h1 className='font-bold mb-2'>Day 2: JINJA || Out and About.</h1>
              {clicked && isActive===2 ? <div onClick={()=>closeArrow(2)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(2)}><IoIosArrowDown/></div>}

          </div>
          {clicked && isActive===2?  <img alt='Arival' loading='lazy' src='https://i.ytimg.com/vi/zh4ntxmqsVw/maxresdefault.jpg' className=' lg:w-1/2 w-full object-contain'/>:<div/>}

          </div>

          <hr/>
          <div className='my-5'>
          <div className='flex justify-between'>
              <h1 className='font-bold mb-2'>Day 3: JINJA || White-water rafting and Nile boat expedition</h1>
              {clicked && isActive===3 ? <div onClick={()=>closeArrow(3)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(3)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===3?  <img alt='Arival' loading='lazy' src='https://www.jinjatours.com/wp-content/uploads/2021/02/rafting-in-jinja-1.jpg' className=' lg:w-1/2 w-full object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className='my-5'>
          <div className='flex justify-between'>
              <h1 className='font-bold mb-2'>Day 4: JINJA ||. Design your day.</h1>
              {clicked && isActive===4 ? <div onClick={()=>closeArrow(4)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(4)}><IoIosArrowDown/></div>}

          </div>
          {clicked && isActive===4?  <img alt='Arival' loading='lazy' src='https://www.africanmeccasafaris.com/wp-content/uploads/jinjanileriver4.jpg' className=' lg:w-1/2 w-full object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className='my-5'>
          <div className='flex justify-between'>
              <h1 className='font-bold mb-2'>Day 5: QUEEN ELIZABETH || Wild ventures</h1>
              {clicked && isActive===5 ? <div onClick={()=>closeArrow(5)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(5)}><IoIosArrowDown/></div>}

          </div>
          {clicked && isActive===5?  <img alt='Arival' loading='lazy' src='https://live.staticflickr.com/5531/14187737541_967d6500d7_b.jpg' className=' lg:w-1/2 w-full object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className='my-5'>
          <div className='flex justify-between'>
              <h1 className='font-bold mb-2'>Day 6: QUEEN ELIZABETH || Chimpanzee trek in the Kyambura valley.</h1>
              {clicked && isActive===6 ? <div onClick={()=>closeArrow(6)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(6)}><IoIosArrowDown/></div>}

          </div>
          {clicked && isActive===6?  <img alt='Arival' loading='lazy' src='https://www.queenelizabethparkuganda.com/wp-content/uploads/2021/11/kibale-chimps-1-1.jpg' className=' lg:w-1/2 w-full object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className='my-5'>
          <div className='flex justify-between'>
              <h1 className='font-bold mb-2'>Day 7: ISHASHA || Spot the tree climbing lions & Cruise the Kazinga Channel</h1>
              {clicked && isActive===7 ? <div onClick={()=>closeArrow(7)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(7)}><IoIosArrowDown/></div>}

          </div>
          {clicked && isActive===7?  <img alt='Arival' loading='lazy' src='https://www.queenelizabethnationalpark.com/wp-content/uploads/2020/07/tree-climbing-lions-uganda.jpg' className=' lg:w-1/2 w-full object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className='my-5'>
          <div className='flex justify-between'>
              <h1 className='font-bold mb-2'>Day 8: ISHASHA || Constant explorations</h1>
              {clicked && isActive===8 ? <div onClick={()=>closeArrow(8)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(8)}><IoIosArrowDown/></div>}

          </div>
          {clicked && isActive===8?  <img alt='Arival' loading='lazy' src='https://www.africanwildlifesafaris.com/wp-content/uploads/ishasha-wilderness-lodge-inset1.jpg' className=' lg:w-1/2 w-full object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className='my-5'>
          <div className='flex justify-between'>
              <h1 className='font-bold mb-2'>Day 9: BWINDI. || Up close with Mountain Gorillas</h1>
              {clicked && isActive===9 ? <div onClick={()=>closeArrow(9)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(9)}><IoIosArrowDown/></div>}

          </div>
          {clicked && isActive===9?  <img alt='Arival' loading='lazy' src='https://image.jimcdn.com/app/cms/image/transf/none/path/sa42828d9880ea9d8/image/i788f317f4ba0f81f/version/1474648366/image.jpg' className=' lg:w-1/2 w-full object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className='my-5'>
          <div className='my-5 flex justify-between'>
              <h1 className='font-bold mb-2'>Day 10: BWINDI || Batwa tribe experiences and philanthropy tours</h1>
              {clicked && isActive===10 ? <div onClick={()=>closeArrow(10)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(10)}><IoIosArrowDown/></div>}

          </div>
          {clicked && isActive===10?  <img alt='Arival' loading='lazy' src='https://live.staticflickr.com/590/21909751398_3f4264b8a2_b.jpg' className=' lg:w-1/2 w-full object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className='my-5'>
          <div className='flex justify-between'>
              <h1 className='font-bold mb-2'>Day 11: BWINDI || Customize your day's activities</h1>
              {clicked && isActive===11 ? <div onClick={()=>closeArrow(11)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(11)}><IoIosArrowDown/></div>}

          </div>
          {clicked && isActive===11?  <img alt='Arival' loading='lazy' src='https://destinationuganda.com/wp-content/uploads/2020/05/bwindi-impenetrable-uganda-treks.jpg' className=' lg:w-1/2 w-full object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className='my-5'>
          <div className='flex justify-between'>
              <h1 className='font-bold mb-2'>Day 12: ENTEBBE || Wayward connection back home</h1>
              {clicked && isActive===12 ? <div onClick={()=>closeArrow(12)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(12)}><IoIosArrowDown/></div>}

          </div>
          {clicked && isActive===12?  <img alt='Arival' loading='lazy' src='https://upload.wikimedia.org/wikipedia/commons/6/69/Entebbe_vue_du_ciel.jpg' className=' lg:w-1/2 w-full object-contain'/>:<div/>}

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
              <p className='font-bold mb-2'>ENTEBBE || Arrival.</p>
              <hr/>
              <div className='lg:flex items-center justify-center'>
              
                <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                Upon your arrival, your dedicated safari director/guide will be ready to meet you and facilitate your transfer to Boma hotel for a leisurely evening stay.                 </p>
              
                <img alt='Arival' loading='lazy' src='https://www.boma.co.ug/wp-content/uploads/2018/10/MK1_9584.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                
              </div>
          </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Boma Hotel Entebbe </p>
                </div>
                <hr className='my-5'/>


              <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 2
                </h1>
                <p className='font-bold mb-2'>JINJA || Out and About. </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Following a delightful breakfast, take the opportunity to discover Entebbe City before setting out on a scenic afternoon journey to Jinja town. Upon reaching your destination, make yourself a comfortable home in the luxurious accommodations at Wildwaters Lodge, your fun base for the next three nights.                  </p>
                  <img alt='Arival' loading='lazy' src='https://i.ytimg.com/vi/zh4ntxmqsVw/maxresdefault.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
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
                <p className='font-bold mb-2'>JINJA || White-water rafting and Nile boat expedition   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Wildwaters Lodge provides an array of activity choices. Today, you will  delight in a Nile boat expedition aboard the iconic and restored African Queen, renowned from the film featuring Humphrey Bogart.  You may also contemplate engaging in white-water rafting on the rapids of the Nile or immerse yourself in quad biking and horseback rides.                  </p>
                  <img alt='Arival' loading='lazy' src='https://www.jinjatours.com/wp-content/uploads/2021/02/rafting-in-jinja-1.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
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
                <p className='font-bold mb-2'>JINJA ||. Design your day.   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Today, you have the freedom to structure your day as you wish. Options include  unwinding with some beach time on the serene shores of Lake Victoria or exploring the town and the local community markets to find unique and interesting souvenirs .Other exciting activities  to be explored on this day  include: sunset Nile boat cruises, golfing , and birding.                  </p>
                  <img alt='Arival' src='https://www.africanmeccasafaris.com/wp-content/uploads/jinjanileriver4.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Wildwaters Lodge  </p>
                </div>
                <hr className='my-5'/>




                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 5
                </h1>
                <p className='font-bold mb-2'>QUEEN ELIZABETH || Wild ventures   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Today, following breakfast, you will journey to Kampala International Airport and catch a flight to Mweya Airport in Queen Elizabeth National Park. Upon arrival, your dedicated guide/driver will be ready to welcome you and facilitate your transfer to Mweya Safari Lodge, where you will spend two leisurely nights. Arrive in time for lunch and unwind in your room before embarking on a late afternoon game drive, offering the chance to witness extraordinary wildlife, including the renowned tree-climbing lions the park is celebrated for.                  </p>
                  <img alt='Arival' loading='lazy' src='https://live.staticflickr.com/5531/14187737541_967d6500d7_b.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Mweya Safari Lodge.   </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 6
                </h1>
                <p className='font-bold mb-2'>QUEEN ELIZABETH  || Chimpanzee trek in the Kyambura valley.   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  This morning, embark on a chimpanzee trek in the Kyambura valley, which acts as a natural boundary alongside the Kyambura Wildlife Sanctuary to the east. This gorge creates an enclosed habitat for the chimpanzees, making the likelihood of encountering these animals quite high. After a rewarding  hike, enjoy a late afternoon boat excursion along the Kazinga Canal for a chance to spot hippos, crocodiles, as well as buffaloes, elephants, warthogs, and various bird species congregating near the shoreline to quench their thirst—a splendid opportunity to closely observe these animals from the boat and capture photographs. Wrap up your safari day with a scenic sundowner celebration.                  </p>
                  <img alt='Arival' src='https://www.queenelizabethparkuganda.com/wp-content/uploads/2021/11/kibale-chimps-1-1.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Mweya Safari Lodge.   </p>
                </div>
                <hr className='my-5'/>




                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 7
                </h1>
                <p className='font-bold mb-2'>ISHASHA || Spot the tree climbing lions & Cruise the Kazinga Channel   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Set forth on a venture to the Ishasha sector of Queen Elizabeth National Park today, enjoying a game drive amidst picturesque landscapes. Your lodging will be situated in the secluded Ishasha sector, known for candelabra trees serving as preferred resting spots for the park's renowned tree-climbing lions. In the evening, embark on a captivating  boat cruise along the Kazinga Channel, a 32-kilometer waterway linking Lake George and Lake Edward. Perfect for bird enthusiasts and wildlife lovers, the channel attracts diverse animals, including hippos, crocodiles elephants and buffalos.                  </p>
                  <img alt='Arival' loading='lazy' src='https://www.queenelizabethnationalpark.com/wp-content/uploads/2020/07/tree-climbing-lions-uganda.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Ishasha Wilderness Camp.   </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 8
                </h1>
                <p className='font-bold mb-2'>ISHASHA ||  Constant explorations   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Today, we proceed southward towards Queen Elizabeth National Park. Upon arrival, make yourself comfortable in your accommodation at Mweya Safari Lodge, as you enjoy  the stunning parking  views from your  private deck. In the afternoon, embark on a game drive to venture into the nearby terrain, for an opportunity to encounter the "big five," hippos, baboons, buffaloes, and a variety of other wildlife.
                   </p>
                  <img alt='Arival' loading='lazy' src='https://www.africanwildlifesafaris.com/wp-content/uploads/ishasha-wilderness-lodge-inset1.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Ishasha Wilderness Camp.   </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 9
                </h1>
                <p className='font-bold mb-2'>BWINDI. || Up close with Mountain Gorillas  </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Savor a delightful breakfast to kickstart your day before embarking on a picturesque journey to Bwindi Impenetrable National Park. Enjoy the scenic drive, meandering through the Rift Valley, Kigezi Highlands, and the mountains leading to the national park.Indulge in a culinary delight upon your arrival at your camp in the afternoon                  </p>
                  <img alt='Arival' loading='lazy' src='https://image.jimcdn.com/app/cms/image/transf/none/path/sa42828d9880ea9d8/image/i788f317f4ba0f81f/version/1474648366/image.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Mahogany Springs   </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 10
                </h1>
                <p className='font-bold mb-2'>BWINDI || Batwa tribe experiences and philanthropy tours   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Embark on a journey to the Ishasha sector of Queen Elizabeth National Park today, indulging in a game drive while appreciating the scenic views along the way. Your accommodation will be in the secluded Ishasha sector, characterized by candelabra trees that serve as the favored resting spots for the park's famous tree-climbing lions. In the evening,  take a breathtaking  along Cruise the Kazinga Channel for a chance  to spot  hippos, crocodiles and a variety  of  bird species.
                  </p>
                  <img alt='Arival' loading='lazy' src='https://live.staticflickr.com/590/21909751398_3f4264b8a2_b.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>  Mahogany Springs</p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 11
                </h1>
                <p className='font-bold mb-2'>BWINDI || Customize your day's  activities     </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Today, when you're not immersed in the gorilla trekking adventure, take the opportunity to explore the lively local community surrounding the National Park through an enlightening village visit. In the evening, enjoy a stroll to the nearby village where Bwindi Bar awaits, offering an authentic and chic atmosphere along with tapas-style cuisine and lively cocktails.
                  </p>
                  <img alt='Arival' src='https://destinationuganda.com/wp-content/uploads/2020/05/bwindi-impenetrable-uganda-treks.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Mahogany Springs.    </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 12
                </h1>
                <p className='font-bold mb-2'>ENTEBBE || Wayward  connection  back home   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  As your remarkable journey concludes, board your return flight to Entebbe. Make the most of your final day in Uganda by savoring a tranquil meal amidst the picturesque gardens of The Boma Hotel.                  </p>
                  <img alt='Arival' loading='lazy' src='https://upload.wikimedia.org/wikipedia/commons/6/69/Entebbe_vue_du_ciel.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>  Boma Hotel Entebbe    </p>
                </div>
                <hr className='my-5'/>


               



        </div>
}
      </div>


        <div className="mt-10 mb-5 ">
          
          <div className="relative mt-20 z-[0] m-auto w-[80%]">
          <h1 className='font-[SourceSerifPro-Black] text-2xl'>Hotels & Lodges</h1>
                    <Slider {...settings} arrows style={containerStyle}>
                        <a href='/uganda/lodges/boma' className="w-1/2 cursor-pointer hover:text-orange-500">
                            <img style={imageStyle} alt="1" src="https://www.boma.co.ug/wp-content/uploads/2018/10/MK1_8918.jpg"/>
                            <h1 className="font-bold">Boma Hotel Entebbe</h1>
                        </a>
                        <a href='/uganda/lodges/wildwaters' className="w-1/2 ml-5 cursor-pointer hover:text-orange-500">
                        <img style={imageStyle} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/39/cf/fa/lemala-wildwaters-lodge.jpg?w=700&h=-1&s=1" alt="2"/>
                        <h1 className="font-bold">Wildwaters Lodge</h1>
                        </a>
                        <a href='/uganda/lodges/mweya' className="w-1/2 cursor-pointer hover:text-orange-500">
                        <img style={imageStyle} src="https://www.ugandabudgetsafaris.com/wp-content/uploads/2020/01/Mweya-Safari-LodgeS-750x450.jpg" alt="3"/>
                        <h1 className="font-bold">Mweya Safari Lodge</h1>
                        </a>
                        <a href='/uganda/lodges/ishasha' className="w-1/2 ml-5 cursor-pointer hover:text-orange-500">
                        <img style={imageStyle}src="https://www.andbeyond.com/wp-content/uploads/sites/5/Dining-Area-at-Ishasha-Wilderness-Camp-Queen-Elizabeth-National-Park.jpg" alt="4"/>
                        <h1 className="font-bold">Ishasha wildwaters Camp</h1>
                        </a>
                        <a href='/uganda/lodges/mahogany' className="w-1/2 cursor-pointer hover:text-orange-500">
                        <img style={imageStyle} src="https://www.bwindiforestgorillatrekking.com/wp-content/uploads/2020/01/Mahogany-springs-lodge.jpg" alt="4"/>
                        <h1 className="font-bold">Mahogany Springs</h1>
                        </a>
                      
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

export default UgandaFamily;