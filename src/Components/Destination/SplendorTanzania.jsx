import React,{useState} from 'react';
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Footer from '../Footer/Footer';
import Partners from '../Partners';
import { FaHotel } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdClose } from "react-icons/io";
import { ImCheckmark } from "react-icons/im";



function SplendorTanzania() {
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
    <div className=' bg-white'>
        {
        colorChanged ? <Navreveal/> : <Navbar/>
        }

        <div>
        <div className='relative'>
          <img alt='spirit of Uganda Safari' loading='lazy' src='https://www.senseofafrica.com/wp-content/uploads/2020/06/Tanzania_South-Tanz-Splendour.jpg' className='w-full mt-[100px] lg:mt-[0px]'/>
          <h1 className=" absolute bottom-0 text-white text-3xl lg:text-7xl font-[SourceSerifPro-Regular] md:l-10 z-0"> <strong>Splendours Of Tanzania</strong> </h1>
        </div>
        <div className=" w-full bg-red-900 md:h-[100px] h-[300px] md:flex md:flex-row flex flex-col md:justify-around justify-center md:items-center px-5"> 
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">DESTINATION</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">Arusha, Tarangire, Ngorongoro Crater, Serengeti, Arusha  </p>
                </div>
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">DURATION</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">10days/9nights  </p>
                </div>
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">PRICE</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">From $ 11,860 per person</p>
                </div>
        </div>

        <div className=" lg:px-[300px] px-5 mb-5 mt-10">
          <p className=" font-[SourceSerifPro-Regular] md:text-xl">
          This remarkable expedition leads you through three of Tanzania's most renowned parks in the northern circuit: The Tarangire National Park, celebrated for its impressive elephant herds and striking baobab trees; the iconic Ngorongoro Crater; and the golden Serengeti, the epicenter of the wildebeest migration. Anticipate close-up wildlife encounters, indulgent romantic accommodations, and top-notch service throughout your journey.          </p>
        </div>
       

        <div className=" lg:px-[300px] px-5">
                        <h1 className="text-2xl mb-10 font-[SourceSerifPro-Black] text-red-900">Safari Highlights </h1>
                        <ul className=" font-[SourceSerifPro-Regular] list-none md:text-xl space-y-4 text-left text-black">
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

        <div className=' lg:px-[300px] mt-10 px-5'>
              <div className='flex flex-col items-center justify-center mb-10'>
                  <div className="h-[80px] w-[80px] rounded-full bg-orange-500 flex flex-col items-center justify-center"><ImCheckmark size={20} /></div>
                  <h1 className="text-2xl font-[SourceSerifPro-Black] text-red-900 mt-10 mb-5">Included</h1>
                  <hr/>
                </div>
              <div className="lg:flex lg:justify-between ">
                <ul className="mb-8 space-y-4 text-left text-black mt-10">
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
                    <span>Airport and Airstrip transfers</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Road transfers as detailed in the itinerary using  4 × 4 vehicle with experienced English/French/Spanish speaking driver/guide.</span>
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
                    <span>All scheduled safari activities offered by the camps or lodges.</span>
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
                    <span>Mineral water on  game drives</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Gorilla tracking Permit.</span>
                  </li>

                  <li className="font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span>24hour Lamlav Safaris on call support</span>
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
                    <span>Accommodation as specified</span>
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


{
  detailed === false ? 

      <div className=' lg:px-[200px] px-[70px] mt-10'>
          <div className=' flex justify-between'>
            <h1 className=' text-2xl font-bold mb-5'>Itinerary Summary</h1>
            <div onClick={toggleDetails} className='font-bold text-lg cursor-pointer bg-orange-500 text-white p-3 rounded-md mb-5'>View Detailed Itinerary</div>
          </div>
          <hr/>
          <div className="my-5">
          <div className=' flex justify-between'>
              <h1 className='font-bold mb-2'>Day 1: ARUSHA ||Touch - down</h1>
              {clicked && isActive===1 ? <div onClick={()=>closeArrow(1)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(1)}><IoIosArrowDown/></div>}
          </div>
              {clicked && isActive===1?  <img alt='Arival' loading='lazy' src='https://www.elewanacollection.com/images/acl/ArushaCoffeeLodge---Restaurant-Exterior.jpg' className=' lg:w-1/2 w-full object-contain'/>:<div/>}

          </div>
          <hr/>

          <div className="my-5"> 
          <div className=' flex justify-between'>
              <h1 className='font-bold mb-2'>Day 2:ARUSHA|| Coffee experiences</h1>
              {clicked && isActive===2 ? <div onClick={()=>closeArrow(2)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(2)}><IoIosArrowDown/></div>}
          </div>
              {clicked && isActive===2?  <img alt='Arival' loading='lazy' src='https://www.andbeyond.com/wp-content/uploads/sites/5/Tea-Garden-at-Arusha-Coffee-Lodge.jpg' className=' lg:w-1/2 w-full object-contain'/>:<div/>}

          </div>
          <hr/>

          <div className="my-5">
          <div className=' flex justify-between'>
              <h1 className='font-bold mb-2'>Day 3: TARANGIRE || Into the Wilderness</h1>
              {clicked && isActive===3 ? <div onClick={()=>closeArrow(3)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(3)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===3?  <img alt='Arival' loading='lazy' src='https://live.staticflickr.com/2240/33000774415_73bffb6d49_b.jpg' className=' lg:w-1/2 w-full object-contain'/>:<div/>}

          </div>
          <hr/>

          <div className="my-5">
          <div className=' flex justify-between'>
              <h1 className='font-bold mb-2'>Day 4: TARANGIRE || Classic game viewing</h1>
              {clicked && isActive===4 ? <div onClick={()=>closeArrow(4)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(4)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===4?  <img alt='Arival' loading='lazy' src='https://www.tarangirenationalparks.com/wp-content/uploads/2020/08/Game-Drives-in-Tarangire-National-Parkss-750x450.jpg' className=' lg:w-1/2 w-full object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className="my-5">
          <div className=' flex justify-between'>
              <h1 className='font-bold mb-2'>Day 5: NGORONGORO CRATER|| Into the "Lost World.".</h1>
              {clicked && isActive===5 ? <div onClick={()=>closeArrow(5)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(5)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===5?  <img alt='Arival' loading='lazy' src='https://media.tacdn.com/media/attractions-splice-spp-674x446/07/36/9f/27.jpg' className=' lg:w-1/2 w-full object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className="my-5">
          <div className=' flex justify-between'>
              <h1 className='font-bold mb-2'>Day 6: NGORONGORO CRATER || Rewarding game drives</h1>
              {clicked && isActive===6 ? <div onClick={()=>closeArrow(6)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(6)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===6?  <img alt='Arival' loading='lazy' src='https://www.tarangirenationalparks.com/wp-content/uploads/2021/12/Ngorongoro-Facts-750x450-1.jpg' className=' lg:w-1/2 w-full object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className="my-5">
          <div className=' flex justify-between'>
              <h1 className='font-bold mb-2'>Day 7: SERENGETI || Golden plains</h1>
              {clicked && isActive===7 ? <div onClick={()=>closeArrow(7)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(7)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===7?  <img alt='Arival' loading='lazy' src='https://upload.wikimedia.org/wikipedia/commons/a/af/Floating_through_the_Serengeti_plains.jpg' className=' lg:w-1/2 w-full object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className="my-5">
          <div className=' flex justify-between'>
              <h1 className='font-bold mb-2'>Day 8: SERENGETI || Explore the endless plains</h1>
              {clicked && isActive===8 ? <div onClick={()=>closeArrow(8)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(8)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===8?  <img alt='Arival' loading='lazy' src='https://c.pxhere.com/photos/7c/a8/tanzania_serengeti_national_park_animal_wildlife_wild_zoology_mammal_species-979082.jpg!d' className=' lg:w-1/2 w-full object-contain'/>:<div/>}

          </div>
          <hr/>

          <div className="my-5">
          <div className=' flex justify-between'>
              <h1 className='font-bold mb-2'>Day 9: SERENGETI || Awe-inspiring Great- Migration</h1>
                {clicked && isActive===9 ? <div onClick={()=>closeArrow(9)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(9)}><IoIosArrowDown/></div>}

          </div>
          {clicked && isActive===9?  <img alt='Arival' loading='lazy' src='https://lp-cms-production.imgix.net/2021-10/GettyRF_545860943.jpg' className=' lg:w-1/2 w-full object-contain'/>:<div/>}

          </div>
          <hr/>

          <div className="my-5">
          <div className=' flex justify-between'>
              <h1 className='font-bold mb-2'>Day 10: ARUSHA || Homeward connections</h1>
              {clicked && isActive===10 ? <div onClick={()=>closeArrow(10)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(10)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===10?  <img alt='Arival' loading='lazy' src='https://www.safari.co.za/images/arusha-national-park-01-590x390.jpg' className=' lg:w-1/2 w-full object-contain'/>:<div/>}

          </div>
         <hr/>
         
        </div>

:
              

        <div className=' lg:px-[200px] px-[70px] mt-10'>
          <div className=' flex justify-between'>
            <h1 className=' text-2xl font-bold mb-5'>Itinerary </h1>
            <div onClick={toggleDetails} className='font-bold text-lg cursor-pointer bg-orange-500 text-white p-3 rounded-md mb-5'>View Summary Itinerary</div>
          </div>
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
              
                <img alt='Arival' loading='lazy' src='https://www.elewanacollection.com/images/acl/ArushaCoffeeLodge---Restaurant-Exterior.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                
              </div>
          </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <a href="/tanzania/lodges/coffee" className='flex items-center underline decoration-orange-500'>
                 <FaHotel className=' mr-3'/> <p>Arusha  Coffee  Lodge  </p>
                </a>
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
                  <img alt='Arival' loading='lazy' src='https://www.andbeyond.com/wp-content/uploads/sites/5/Tea-Garden-at-Arusha-Coffee-Lodge.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <a href="/tanzania/lodges/coffee" className='flex items-center underline decoration-orange-500'>
                 <FaHotel className=' mr-3'/> <p>Arusha  Coffee  Lodge  </p>
                </a>
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
                  <img alt='Arival' loading='lazy' src='https://live.staticflickr.com/2240/33000774415_73bffb6d49_b.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <a href='/tanzania/lodges/treetop' className='flex items-center underline decoration-orange-500'>
                 <FaHotel className=' mr-3'/> <p>Tarangire Treetops Lodge</p>
                </a>
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
                  <img alt='Arival' loading='lazy' src='https://www.tarangirenationalparks.com/wp-content/uploads/2020/08/Game-Drives-in-Tarangire-National-Parkss-750x450.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <a href='/tanzania/lodges/treetop' className='flex items-center underline decoration-orange-500'>
                 <FaHotel className=' mr-3'/> <p>Tarangire Treetops Lodge</p>
                </a>
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
                  <img alt='Arival' loading='lazy' src='https://media.tacdn.com/media/attractions-splice-spp-674x446/07/36/9f/27.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <a href="/tanzania/lodges/manor" className='flex items-center underline decoration-orange-500'>
                 <FaHotel className=' mr-3'/> <p>Manor At Ngorongoro  </p>
                </a>
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
                  <img alt='Arival' loading='lazy' src='https://www.tarangirenationalparks.com/wp-content/uploads/2021/12/Ngorongoro-Facts-750x450-1.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <a href="/tanzania/lodges/manor" className='flex items-center underline decoration-orange-500'>
                 <FaHotel className=' mr-3'/> <p>Manor At Ngorongoro  </p>
                </a>
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
                  <img alt='Arival' loading='lazy' src='https://upload.wikimedia.org/wikipedia/commons/a/af/Floating_through_the_Serengeti_plains.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <a href="/" className='flex items-center underline decoration-orange-500'>
                 <FaHotel className=' mr-3'/> <p> Migration  Camp   </p>
                </a>
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
                  <img alt='Arival' loading='lazy' src='https://c.pxhere.com/photos/7c/a8/tanzania_serengeti_national_park_animal_wildlife_wild_zoology_mammal_species-979082.jpg!d' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <a href="/" className='flex items-center underline decoration-orange-500'>
                 <FaHotel className=' mr-3'/> <p> Migration  Camp   </p>
                </a>
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
                  <img alt='Arival' loading='lazy' src='https://lp-cms-production.imgix.net/2021-10/GettyRF_545860943.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                   
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <a href="/" className='flex items-center underline decoration-orange-500'>
                 <FaHotel className=' mr-3'/> <p> Migration  Camp   </p>
                </a>
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
                  <img alt='Arival' loading='lazy' src='https://www.safari.co.za/images/arusha-national-park-01-590x390.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <a href="/tanzania/lodges/coffee" className='flex items-center underline decoration-orange-500'>
                 <FaHotel className=' mr-3'/> <p> Arusha  Coffee  Lodge   </p>
                </a>
                <hr className='my-5'/>



              


        </div>
}
        </div>

        <div className="mt-10 mb-5">
          
          <div className="relative mt-20 z-[0] m-auto w-[80%]">
          <h1 className='font-[SourceSerifPro-Black] text-2xl'>Hotels & Lodges</h1>
                    <Slider {...settings} arrows style={containerStyle}>
                        <a href='/tanzania/lodges/coffee' className="w-1/2 cursor-pointer hover:text-orange-500">
                            <img style={imageStyle} alt="1" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/34603553.jpg?k=dc9f54f42f3cdaa64e0d653937639162e83c6af9f6529ddaadb3db69f4b87adb&o=&hp=1"/>
                            <h1 className="font-bold">Arusha Coffee Lodge</h1>
                        </a>
                        <a href='/tanzania/lodges/treetop' className="w-1/2 ml-5 cursor-pointer hover:text-orange-500">
                        <img style={imageStyle} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/59/37/c6/tree-house-interior-at.jpg?w=700&h=-1&s=1" alt="2"/>
                        <h1 className="font-bold">Tarangire Treetops Lodge</h1>
                        </a>
                        <a href='/tanzania/lodges/manor' className="w-1/2 cursor-pointer hover:text-orange-500">
                        <img style={imageStyle} src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/375293886.jpg?k=e9310a0bb2d275e6770c52ac25a1f1070be917581b03966a47841896c8b184cb&o=&hp=1" alt="3"/>
                        <h1 className="font-bold">Manor At Ngorongoro</h1>
                        </a>
                        <div className="w-1/2 ml-5 cursor-pointer hover:text-orange-500">
                        <img style={imageStyle}src="https://www.micato.com/wp-content/uploads/2018/09/serengeti-migration-camp-1-2.jpg" alt="4"/>
                        <h1 className="font-bold">Migration Camp</h1>
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

export default SplendorTanzania;