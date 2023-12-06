import React,{useState} from 'react';
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Footer from '../Footer/Footer';
import Partners from '../Partners';
import {FaHotel} from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ImCheckmark } from "react-icons/im";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"


function Gorrilla() {
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
    <div className='bg-white'>
        {
        colorChanged ? <Navreveal/> : <Navbar/>
        }
    
    <div className='relative '>
          <img alt='spirit of Uganda Safari' loading='lazy' src='https://www.lakenakurukenya.com/wp-content/uploads/2021/07/Congo-gorillas-1.jpg' className='w-full mt-[100px] lg:mt-[0px]'/>
          <h1 className=" absolute bottom-0 text-white text-3xl lg:text-7xl font-[SourceSerifPro-Regular] md:l-10 z-0"> <strong>Rwanda Gorilla & Game Vacation.</strong> </h1>
        </div>
        <div className=" w-full bg-red-900 md:h-[100px] h-[300px] md:flex md:flex-row flex flex-col md:justify-around justify-center md:items-center px-5"> 
                
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">DESTINATION</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">Kigali, Akagera National Park  </p>
                    <p className="font-[SourceSerifPro-Regular] text-white">Volcanoes National Park  </p>
                </div>
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">DURATION</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">9days/ 8nights </p>
                </div>
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">PRICE</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">From  $ 12,873 per person</p>
                </div>
        </div>


        <div className=" lg:px-[300px] px-5 mb-5 mt-10">
          <p className=" font-[SourceSerifPro-Regular] md:text-xl">
            During a vacation in Rwanda, one cannot help but be deeply touched and motivated by witnessing the remarkable reconstruction efforts that have taken place since the tragic Rwandan genocide of 1994. This safari experience provides a unique opportunity to explore both the country's painful history and its hopeful present. Your journey will encompass visits to significant sites like the moving Rwandan Genocide Memorial in the bustling city of Kigali, as well as the unspoiled natural beauty of Volcanoes National Park and the captivating Akagera National Park. All of this will be complemented by stays in Rwanda's most innovative and exceptional hotels and lodges.          </p>
        </div>



        <div className=" lg:px-[300px] px-5">
                        <h1 className="text-2xl mb-10 font-[SourceSerifPro-Black] text-red-900">Safari Highlights </h1>
                        <ul className=" font-[SourceSerifPro-Regular] list-none md:text-xl space-y-4 text-left text-black">
                            <li className=" flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Tour the poignant Genocide Memorial Site in Kigali.</span></li>
                            <li className="flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span> Spend two daysTracking the majestic Mountain gorillas  and golden  monkeys at  Volcanoes National Park  </span>
                            </li>
                          
                            <li className=" flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Spot the 'Big fives' and learn  about conservation efforts at the Akagera National Park. </span></li>
                           
                            <li className=" flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Participate in conservation initiatives aimed at tracking and observing the 'Big fives.' </span></li>
                            
                            <li className=" flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Excellent accommodations  at Rwanda's most luxurious tented  camps and lodges. </span></li>                            
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
                                    Bed, Breakfast and Lunch
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#maasaimara" className=" hover:text-red-900 md:text-xl">Akagera National Park   </a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    3
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Magashi Camp 
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#serengeti" className=" hover:text-red-900 md:text-xl">Volcanoes National Park</a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    3
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Bisate Lodge
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Kigali </a> 
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    ___
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                  Kigali Serena Hotel
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
              <h1 className="text-2xl font-[SourceSerifPro-Black] text-red-900">Included</h1>
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
        <div>
        </div>
        {
          detailed === false ? 
        

        <div className=' lg:px-[200px] px-[70px]'>
          <div className=' flex justify-between'>
            <h1 className=' text-2xl font-bold mb-5'>Itinerary Summary</h1>
            <div onClick={toggleDetails} className='font-bold text-lg cursor-pointer bg-orange-500 text-white p-3 rounded-md mb-5'>View Detailed Itinerary</div>
          </div>
          <hr/>
          <div className='my-5'>
          <div className=' flex justify-between'>
              <h1 className='font-bold mb-2'>Day 1: KIGALI RWANDA|| Arrival.</h1>
              {clicked && isActive===1 ? <div onClick={()=>closeArrow(1)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(1)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===1?  <img alt='Arival' loading='lazy' src='https://cdn.audleytravel.com/798/570/79/261974-kigali-serena-hotel-kigali.jpg' className=' w-full object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className='my-5'>
          <div className=' flex justify-between'>
              <h1 className='font-bold mb-2'>Day 2: KIGALI RWANDA|| Genocide Memorial and Exclusive Coffee Explorations</h1>
              {clicked && isActive===2 ? <div onClick={()=>closeArrow(2)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(2)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===2?  <img alt='Arival' loading='lazy' src='https://upload.wikimedia.org/wikipedia/commons/0/0d/Genocide_Memorial_site_of_Gisozi_Kigali_Genocide_Memorial_007.jpg' className=' w-full object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className='my-5'>
          <div className=' flex justify-between'>
              <h1 className='font-bold mb-2'>Day 3: AKAGERA || At the only 'Big Five' protected area.</h1>
              {clicked && isActive===3 ? <div onClick={()=>closeArrow(3)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(3)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===3?  <img alt='Arival' loading='lazy' src='https://upload.wikimedia.org/wikipedia/commons/6/65/Webp.net-compress-image-59.jpg' className=' w-full object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className='my-5'>
          <div className=' flex justify-between'>
              <h1 className='font-bold mb-2'>Day 4: AKAGERA || Game viewing.</h1>
              {clicked && isActive===4 ? <div onClick={()=>closeArrow(4)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(4)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===4?  <img alt='Arival' loading='lazy' src='https://live.staticflickr.com/5705/22819687517_9305a08039_b.jpg' className=' w-full object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className='my-5'>
          <div className=' flex justify-between'>
              <h1 className='font-bold mb-2'>Day 5: AKAGERA || Design your day.</h1>
              {clicked && isActive===5 ? <div onClick={()=>closeArrow(5)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(5)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===5?  <img alt='Arival' loading='lazy' src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Topi_in_Akagera_National_Park_1.jpg' className=' w-full object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className='my-5'>
          <div className=' flex justify-between'>
              <h1 className='font-bold mb-2'>Day 6: VOLCANOES NATIONAL PARK || At the foothills of Virunga Volcanoes</h1>
              {clicked && isActive===6 ? <div onClick={()=>closeArrow(6)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(6)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===6?  <img alt='Arival' loading='lazy' src='https://upload.wikimedia.org/wikipedia/commons/a/a1/1-Virunga_Lodge_Aerila_ViewSinamatella_-_Rwanda_-_Virunga_-_20180915_-_1054.jpg' className=' w-full object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className='my-5'>
          <div className=' flex justify-between'>
              <h1 className='font-bold mb-2'>Day 7: VOLCANOES NATIONALPARK || Up close with Mountain Gorillas</h1>
              {clicked && isActive===7 ? <div onClick={()=>closeArrow(7)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(7)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===7?  <img alt='Arival' loading='lazy' src='https://www.amboseliparkkenya.com/wp-content/uploads/2020/10/asasff-750x450.jpg' className=' w-full object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className='my-5'>
          <div className=' flex justify-between'>
              <h1 className='font-bold mb-2'>Day 8: VOLCANOES NATIONALPARK || Create your own day plan</h1>
              {clicked && isActive===8 ? <div onClick={()=>closeArrow(8)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(8)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===8?  <img alt='Arival' loading='lazy' src='https://ujuzitravel.com/wp-content/uploads/2022/01/rwanda-volcanoes-golden-monkey-shutterstock.jpg' className=' w-full object-contain'/>:<div/>}

          </div>
          <hr/>
          <div className='my-5'>
          <div className=' flex justify-between'>
              <h1 className='font-bold mb-2'>Day 9: KIGALI RWANDA|| Homeward connections</h1>
              {clicked && isActive===9 ? <div onClick={()=>closeArrow(9)}><IoIosArrowUp/> </div> : <div onClick={()=>toggleArrow(9)}><IoIosArrowDown/></div>}
          </div>
          {clicked && isActive===9?  <img alt='Arival' loading='lazy' src='https://image-tc.galaxy.tf/wijpeg-b9x7g9tddzlq2za9p0d8wto8c/hr-dsc-5630.jpg' className=' w-full object-contain'/>:<div/>}

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
              <p className='font-bold mb-2'>KIGALI RWANDA|| Arrival.</p>
              <hr/>
              <div className='lg:flex items-center justify-center'>
              
                <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                Arrive in Kigali and transfer to  your luxurious hotel                
                </p>
              
                <img alt='Arival' loading='lazy' src='https://cdn.audleytravel.com/798/570/79/261974-kigali-serena-hotel-kigali.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                
              </div>
          </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Kigali Serena Hotel </p>
                </div>
                <hr className='my-5'/>


              <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 2
                </h1>
                <p className='font-bold mb-2'>KIGALI RWANDA|| Genocide Memorial and Exclusive Coffee Explorations  </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Start your day with a poignant visit to the Genocide Memorial Site, where you can gain insights into how Rwanda has confronted its history and emerged as a symbol of human resilience.
<br/><br/>After a satisfying lunch at a nearby eatery, you'll have the opportunity to explore the coffee-making process in Kigali, from cultivating and harvesting the beans to roasting and brewing.
                  </p>
                  <img alt='Arival' loading='lazy' src='https://upload.wikimedia.org/wikipedia/commons/0/0d/Genocide_Memorial_site_of_Gisozi_Kigali_Genocide_Memorial_007.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Kigali Serena Hotel  </p>
                </div>
                <hr className='my-5'/>


                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 3
                </h1>
                <p className='font-bold mb-2'>AKAGERA || At the only 'Big Five' protected area.   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  After your morning breakfast, you'll enjoy one last tour of Kigali city before setting off on a roughly two and a half-hour journey to the captivating Akagera National Park in eastern Rwanda. Upon arrival, you'll have the opportunity to check into your accommodation at the splendid Magashi Camp and enjoy a sumptuous  lunch thereafter. In the afternoon, you can choose to unwind in your room or explore the camp's surroundings at your leisure.As the day comes to an end, gather with your fellow travelers for a pleasant welcome dinner.
                  </p>
                  <img alt='Arival' loading='lazy' src='https://upload.wikimedia.org/wikipedia/commons/6/65/Webp.net-compress-image-59.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Magashi  Camp  </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 4
                </h1>
                <p className='font-bold mb-2'>AKAGERA || Game viewing. </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Explore the abundant wildlife in Akagera National Park on scheduled  morning ,afternoon  and night  game drives. Return to the camp  in between the drives for lunch and relaxation,  before  setting  out for another game  drive. 
                  <br/><br/>Akagera is  home to various animals like elephants, giraffes, zebras, lions; and a host to over 500 bird species, including African fish eagles and shoebills. Keep your  eyes peeled  for  an  opportunity  to  spot  these incredible  creatures  during  the  game drives.
                  </p>
                  <img alt='Arival' loading='lazy' src='https://live.staticflickr.com/5705/22819687517_9305a08039_b.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Magashi  Camp  </p>
                </div>
                <hr className='my-5'/>




                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 5
                </h1>
                <p className='font-bold mb-2'>AKAGERA || Design your day.   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  This day, you will explore the park on an early  morning  game drive  and return  back to the camp  to sample the numerous  activities  that the camp provides. You can  choose  to:

                  <br/><br/><li>Venture  out on a guided  boat safaris - or fishing expedition - on Lake Rwanyakazinga, for a unique opportunities to observe hippos, crocodiles, and a variety of water birds up close. OR,</li>
                  <li>Set out on a guided  walking safaris  to explore the park on foot, accompanied by experienced rangers who provide insights into the park's ecosystem and wildlife.</li>
                  <br/><br/>Head back to the camp in the evening to enjoy a cocktail while you reflect on the magnificent " a thousand hills" scenery during a peaceful Scenic Sundowner experience.
                  </p>
                  <img alt='Arival' loading='lazy' src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Topi_in_Akagera_National_Park_1.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p>Magashi  Camp   </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 6
                </h1>
                <p className='font-bold mb-2'>VOLCANOES NATIONAL PARK || At the foothills of Virunga Volcanoes    </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  This day you will savor a sumptuous bush breakfast  before embarking  on a scenic  drive to the Iconic Volcanoes National Park -  home to the endangered mountain gorillas. 
                  <br/><br/>Upon your arrival, you'll check in and get comfortable at the iconic Bisate Lodge; where you'll have the early afternoon to unwind in this luxurious lodge with stunning views of the volcanic massif.
                  <br/><br/> Later in the day, you can relax and cool off with an exclusive Lamlav canoe trip led by an experienced guide. This tranquil journey takes you down the gently flowing Mukungwa River, meandering through the foothills of the Virunga Volcanoes. Along the way, you'll enjoy breathtaking vistas of the towering volcanic cones in the distance, spot a variety of birds.
                  <br/><br/>Conclude your adventure, with a stop on the riverbank for a refreshing sundowner. </p>
                  <img alt='Arival' loading='lazy' src='https://upload.wikimedia.org/wikipedia/commons/a/a1/1-Virunga_Lodge_Aerila_ViewSinamatella_-_Rwanda_-_Virunga_-_20180915_-_1054.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Bisate Lodge    </p>
                </div>
                <hr className='my-5'/>




                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 7
                </h1>
                <p className='font-bold mb-2'>VOLCANOES NATIONALPARK ||  Up close with Mountain Gorillas    </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  This day, embark on a trek through the thick park foliage, guided by experienced trackers, as you search for the elusive mountain gorillas and other primates. Upon encountering the gorillas, you'll have the privilege of spending an enchanting hour observing their daily activities, which include feeding, playing, resting, and caring for their young. Head back to your lodge for lunch, and the remainder of the day is yours to relax and unwind as you please.
                  </p>
                  <img alt='Arival' loading='lazy' src='https://www.amboseliparkkenya.com/wp-content/uploads/2020/10/asasff-750x450.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Bisate Lodge   </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 8
                </h1>
                <p className='font-bold mb-2'>VOLCANOES NATIONALPARK || Create  your  own day plan  </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  You will savor  a hearty  morning  breakfast and the rest of the day is for you to explore a range of activities that the lodge  offers, including tracking golden monkeys, going on hikes and nature walks, birdwatching, and engaging in conservation and community visits.
                  </p>
                  <img alt='Arival' loading='lazy' src='https://ujuzitravel.com/wp-content/uploads/2022/01/rwanda-volcanoes-golden-monkey-shutterstock.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Bisate Lodge   </p>
                </div>
                <hr className='my-5'/>



                <div>
                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                  Day 9
                </h1>
                <p className='font-bold mb-2'>KIGALI RWANDA|| Homeward connections   </p>
                <hr/>
                <div className='lg:flex items-center justify-center'>
              
                  <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                  Embark on a final morning trek to observe a different gorilla family, allowing you to witness the captivating behaviors of these remarkable primates once more. After your lunch, relax and enjoy  the lodge's amenities  before returning  to Kigali. Enjoy some downtime in a cozy dayroom before heading to the airport for your outbound flight.
                   </p>
                  <img alt='Arival' loading='lazy' src='https://image-tc.galaxy.tf/wijpeg-b9x7g9tddzlq2za9p0d8wto8c/hr-dsc-5630.jpg' className=' lg:w-1/3 lg:ml-5  object-contain'/>
                  
                </div>
            </div>
                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center'>
                 <FaHotel className=' mr-3'/> <p> Kigali Serena Hotel     </p>
                </div>
                <hr className='my-5'/>

              <div>
                <h1 className='font-semibold text-xl mb-2'> End of Safari</h1>
                <p className='font-[SourceSerifPro-Regular] md:text-xl'>Each Lamlav Safari Itenerary is meticulously tailored to match your specific travel preferences. There are no pre-packaged tours or fixed departure dates. Our  skilled team is always available  initiate the process of crafting your personalized travel plan.</p>
              </div>

                
        </div>
        }

<div className="mt-10 mb-5">
          
          <div className="relative mt-20 z-[0] m-auto w-[80%]">
          <h1 className='font-[SourceSerifPro-Black] text-2xl'>Hotels & Lodges</h1>
                    <Slider {...settings} autoplay arrows style={containerStyle}>
                        <div className="w-1/2">
                            <img style={imageStyle} alt="1" src="https://image-tc.galaxy.tf/wijpeg-b9x7g9tddzlq2za9p0d8wto8c/hr-dsc-5630.jpg"/>
                            <h1 className="font-bold">Kigali Serena Hotel</h1>
                        </div>
                        <div className="w-1/2 ml-5">
                        <img style={imageStyle} src="https://www.andbeyond.com/wp-content/uploads/sites/5/Magashi_40.jpg" alt="2"/>
                        <h1 className="font-bold">Magashi Camp</h1>
                        </div>
                        <div className="w-1/2">
                        <img style={imageStyle} src="https://www.gorillasafarirwanda.com/wp-content/uploads/2017/09/Bisate-Rooms-.jpeg" alt="3"/>
                        <h1 className="font-bold">Bisate Lodge</h1>
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

export default Gorrilla;