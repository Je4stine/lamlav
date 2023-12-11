import React, {useState} from "react";

import Navbar from "../../Navbar/Navreveal";

import Mara1 from '../../../Assets/Day33.jpeg';

import Kanairo from '../../../Assets/Day11.jpeg';

import Kanairo1 from '../../../Assets/Hero11.jpg';

import Giraffe from '../../../Assets/Day1.1.jpg'

import Footer from "../../Footer/Footer";

import Site1 from "../../../Assets/sitemap1.png";

import Keekorok from "../../../Assets/Day44.jpg";

import Fours from '../../../Assets/Day66.jpeg';

import Hot from '../../../Assets/Day77.jpeg';

import Ngoro from '../../../Assets/Day88.jpg';

import Ngoro1 from '../../../Assets/Day99.jpg';

import Loudge from "../../../Assets/Day55.jpeg";

import Faq from "react-faq-component";
import Partners from "../../Partners";
import { FaHotel } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

const Migration =()=>{
    const data = {
        title: "Iteneraries",
        rows: [
            {
                title: <strong> <h1 className="  font-[SourceSerifPro-Regular]">Day 1: Nairobi - Welcome to Africa’s 4th largest city </h1></strong>,
                content: <div className=" lg:flex lg:items-center">
                    <img src={Kanairo} alt=" Mara1" className=" lg:w-1/2"/>
                    
                </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">Day 2: NAIROBI –David Shieldrick wildlife trust and the giraffe center </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Giraffe} alt="Mara1" className=" lg:w-1/2"/>
                            
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">Day 3:  MAASAI MARA GAME RESERVE -Into the untamed  wilderness </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt="Mara1" className=" lg:w-1/2"/>
                            
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">Day 4:  MAASAI MARA -Constant exploration  </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Keekorok} alt="Mara1" className=" lg:w-1/2"/>
                            
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 5: MAASAI MARA-Create your own day plan  </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Loudge} alt="Mara1" className=" lg:w-1/2"/>
                            
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">Day 6 SERENGETI NATIONAL PARK -  Golden  plains </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Fours} alt=" Mara1" className=" lg:w-1/2"/>
                            
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 7: SERENGETI NATIONAL PARK- Make friends  with tree climbing  lions of Serengeti   </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Hot} alt="Mara1" className=" lg:w-1/2"/>
                            
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">Day 8 : SERENGETI NATIONAL PARK - Visit " the lost world"  of Ngorongoro and the Mara river  </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Ngoro} alt="Mara1" className=" lg:w-1/2"/>
                            
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">Day 9: SERENGETI NATIONAL PARK - Create  your  own day plan </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Ngoro1} alt="Mara1" className=" lg:w-1/2"/>
                            
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">Day 9: NAIROBI - Wayward  connection  back home
                </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt=" Mara1" className=" lg:w-1/2"/>
                           
                        </div>,
            },
        ],
    };


    const styles = {
        // bgColor: 'white',
        titleTextColor: "black",
        rowTitleColor: "black",
        // rowContentColor: 'grey',
        // arrowColor: "red",
    };
    
    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

  
    const [detailed, setDetailed] = useState(false);

    const toggleDetails =()=>{
        setDetailed(!detailed)
      };

      
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


    return (
        <div className=" bg-white">
            <Navbar/>
            <div className=" relative bg-[#3c0008]">
                <img src={Kanairo1} alt=" Mara Camping" className=" m-auto w-full"/>
                <h1 className=" md:absolute md:bottom-0 text-white text-3xl lg:text-7xl font-[SourceSerifPro-Regular] z-0">Mara-Serengeti Great Migration Safari</h1>
            </div>
            <div className=" w-full bg-red-900 md:h-[100px] h-[300px] md:flex md:flex-row flex flex-col md:justify-around justify-center md:items-center px-5">
                <div className=" md:mr-10 md:py-20">
                    <h1 className="font-[SourceSerifPro-Black] text-white">DESTINATION</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white md:flex-wrap">Kenya: Nairobi, Maasai Mara Game reserve, Serengeti National Park</p>
                </div>
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">DURATION</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">10days/9 nights</p>
                </div>
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">PRICE</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">From $ 9,700 per person</p>
                </div>
            </div>

            <div className=" p-5 lg:px-[300px] my-10">
                <p className="font-[SourceSerifPro-Regular] lg:text-xl">This safari begins with an extraordinary wildlife excursions in Nairobi city, followed by visits to the famed Maasai Mara and Serengeti  parks - two pivotal locations within the world's significant animal migration routes. Witness the remarkable wildebeest migration  and encounter year-round resident wildlife, including the majestic big cats. In Tanzania, seize the opportunity to marvel at both the natural wonder of the Ngorongoro Crater and the vast and golden plains of the Serengeti National Park.This immersive and authentic adventure unfolds seamlessly with the convenience of three scheduled flights, ensuring swift and efficient travel between these extraordinary camps.</p>
            </div>
   
            <div className=" flex flex-col items-center">
                <div className=" lg:flex lg:justify-around">
                    <div className=" p-10 flex flex-col flex-2">
                        <h1 className="lg:px-[200px] text-2xl mb-10 font-[SourceSerifPro-Black] text-red-900">Safari Highlights </h1>
                        <ul className=" font-[SourceSerifPro-Regular] lg:px-[200px] list-none md:text-xl space-y-4 text-left text-black">
                            <li className=" flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Up close  with giraffes  and baby  elephants  at the heart  of Nairobi  city </span></li>
                            <li className="flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span> Seven exhilarating  nights  at the epicentre  of great wildebeest  migration  spectacle - the great maasai mara and Serengeti</span>
                            </li>
                          
                            <li className=" flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Three exhilarating  flights  to expedite  your  travel between  the camps</span></li>
                           
                            <li className=" flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Accommodations  at East Africa’s  most luxurious tented  camps and lodges including,  the iconic  Keekorok  lodge and the beguiling  Four  Seasons  Safari  Lodge.</span></li>
                            
                        </ul>
                    </div>
                    {/* <div className=" flex flex-col items-center text-2xl my-10">
                        <h1 className=" font-[SourceSerifPro-Black] text-red-900">Site map</h1>
                        <img src={Site1} alt="Sample site maps" className=" lg:h-[500px] lg:w-[1200px]"/>
                    </div> */}
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
                                    Category
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
                                    Norfolk hotel Nairobi  
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#maasaimara" className=" hover:text-red-900 md:text-xl">Maasai Mara </a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    3
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Keekorok camp  
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#serengeti" className=" hover:text-red-900 md:text-xl">Serengeti</a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    4
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Four seasons safari lodge  
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Nairobi</a> 
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    ___
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Norfolk hotel Nairobi  
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Day Room/ Half  board
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
                <h1 className="text-2xl mb-10 font-[SourceSerifPro-Black] text-red-900">Included</h1>
                <div className=" lg:flex lg: justify-between p-5">
                        <ul className=" lg:p-5 mb-8 space-y-4 text-left text-black">
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Bush breakfast, Sundowner and all beverages  as provided</span>
                            </li>
                        
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span> House wines and local beers/spirits</span>
                            </li>

                        
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span> game drives in camps 4 X 4 vehicles with roof hatches for game viewing</span>
                            </li>
                          
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Transport using  4  4 vehicle with experienced English/French/Spanish speaking driver/guide</span>

                            </li>
            
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Finnest accommodation in the most authentic  camps and lodges shown in the itinerary</span>
                            </li>
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-centee space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Airport and Airstrip transfers</span>
                            </li>
                        </ul>

                        <ul className=" lg:p-5 space-y-4 text-left text-black">
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Park/conservancy fees</span>
                            </li>
                          
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Flying Doctors emergency evacuation cover</span>
                            </li>
                           
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Mineral water on  game drives</span>
                            </li>
                         
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Scheduled flights;maasai mara/serengeti/Nairobi</span>
                            </li>
                           
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>24 hour Lamlav Safaris on call support</span></li>
                        
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Optional activities  and excursions </span></li>
                          
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Telephone  calls and laundry services </span></li>
                        </ul>                   
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className=" flex justify-center items-center flex-col ">
                    {
                    detailed === false?
                    <div className=" p-5 lg:px-[200px]">
                    <div onClick={toggleDetails} className='ml-auto w-[250px] font-bold text-lg cursor-pointer bg-orange-500 text-white p-3 rounded-md mb-5'>
                        View Detailed Itinerary
                    </div>
                        <Faq
                            data={data}
                            styles={styles}
                            config={config}
                        />
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
                                <p className='font-bold mb-2'>Nairobi - Welcome to Africa’s 4th largest city</p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                                    Arrival and transfer to one of Kenya’s most luxurious hotels in the city, the Norfolk Hotel Nairobi, for a leisurely two-night stay.               
                                    </p>
                                
                                    <img alt='Arival' loading='lazy' src={Kanairo} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                            </div>
                            <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                                <a href="/kenya/norfolk" className='flex items-center'>
                                <FaHotel className=' mr-3'/> <p>Norfolk hotel Nairobi </p>
                                </a>
                                <hr className='my-5'/>



                                <div>
                                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                                    Day 2
                                </h1>
                                <p className='font-bold mb-2'>NAIROBI –David Shieldrick wildlife trust and the giraffe center </p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                                    Following a relaxed morning breakfast, journey to the David Sheldrick Wildlife Trust near Nairobi National Park. Here, you'll have the chance to intimately connect with orphaned elephants and potentially adopt a baby elephant.
                                    <br/><br/>In the afternoon, engage with the world's tallest species at the renowned Giraffe Center, which houses the endangered Rothschild's giraffe. Notably, this wildlife sanctuary is uniquely situated within a city, approximately 5 kilometers from the city center. Conclude your day with a visit to the National Museums of Kenya before enjoying dinner and unwinding at the Norfolk Hotel.
                                    <br/>                                    </p>
                                
                                    <img alt='Arival' loading='lazy' src={Giraffe} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                            </div>
                            <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                            <a href="/kenya/norfolk" className='flex items-center'>
                                <FaHotel className=' mr-3'/> <p>Norfolk hotel Nairobi </p>
                                </a>
                                <hr className='my-5'/>


                                <div>
                                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                                    Day 3
                                </h1>
                                <p className='font-bold mb-2'>MAASAI MARA GAME RESERVE -Into the untamed  wilderness </p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                                    After a relaxed breakfast, you'll be transported to Wilson Airport for a morning flight to the Maasai Mara National Reserve. Upon arrival, our representative will warmly greet you and facilitate your transfer to the luxurious Keekorok Lodge for a three-night stay. Enjoy a delightful lunch in the bush before embarking on an afternoon game drive, returning to the lodge as the sun sets.
                                  
                                    </p>
                                
                                    <img alt='Arival' loading='lazy' src={Mara1} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                            </div>
                            <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                                <a href="/kenya/keekorok" className='flex items-center'>
                                <FaHotel className=' mr-3'/> <p>Keekorok Lodge </p>
                                </a>
                                <hr className='my-5'/>



                                
                                <div>
                                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                                    Day 4
                                </h1>
                                <p className='font-bold mb-2'>MAASAI MARA -Constant exploration </p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                                    Embark on early morning and afternoon game drives to explore an expansive area spanning over 600 square miles, encompassing savannas, woodlands, and tree-lined rivers. Keep a keen eye out during these drives to witness a diverse array of animal species, creating an enduringly captivating experience. Encounter the awe-inspiring Great Migration of wildebeest and other breathtaking wildlife spectacles from the comfort of 4x4 vehicles. Observe sunbathing crocodiles, alert hippos in muddy waters, and playful antics of mischievous monkeys overhead. Marvel at African elephants gracefully moving along the forest's edge and giraffes extending their necks to reach leaves from lofty branches.                                  
                                    </p>
                                
                                    <img alt='Arival' loading='lazy' src={Keekorok} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                                </div>
                                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                                <a href="/kenya/keekorok" className='flex items-center'>
                                <FaHotel className=' mr-3'/> <p>Keekorok Lodge </p>
                                </a>
                                    <hr className='my-5'/>



                                <div>
                                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                                    Day 5
                                </h1>
                                <p className='font-bold mb-2'>MAASAI MARA-Create your own day plan </p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                                    Set out on an early morning game drive, and then, afterwards, sample some of the activities offered by the camp: You can take a breathtaking hot air balloon ride over the Mara Plains, join a guided bird walk to observe the diverse bird species in the area, engage in the art of beading with the Maasai tribe to craft your jewelry, or test your skills with Maasai warriors by trying your hand at their traditional hunting club. Later, participate in a late-afternoon game drive before relishing a scenic sundowner with traditional cocktails while appreciating the picturesque open plains at dusk.
                                    </p>
                                
                                    <img alt='Arival' loading='lazy' src={Loudge} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                                </div>
                                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                                <a href="/kenya/keekorok" className='flex items-center'>
                                <FaHotel className=' mr-3'/> <p>Keekorok Lodge </p>
                                </a>
                                    <hr className='my-5'/>



                                <div>
                                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                                    Day 6
                                </h1>
                                <p className='font-bold mb-2'>SERENGETI NATIONAL PARK -  Golden  plains </p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                                    We will fly to the Serengeti through Nairobi and Arusha in Tanzania and arrive at the celebrated Four Seasons Safari Lodge, located on a beautiful set of kopjes and offering breathtaking views of the golden plains. The Serengeti is renowned for its large lion population, together with 500 bird species and over 70 mammals, including elephants, cheetahs, gazelles, wildebeests, zebras, giraffes, lions, rhinos, and many other species. At Serengeti, you will witness an epic spectacle of the great migration of millions of wildebeest, zebras, gazelles, buffalos, giraffes, and other animal species crossing the Mara River in search of the sprouting pasture on the Kenyan Maasai Mara.
                                    </p>
                                
                                    <img alt='Arival' loading='lazy' src={Fours} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                                </div>
                                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                                    <div className='flex items-center'>
                                    <FaHotel className=' mr-3'/> <p>Four Seasons Safari Lodge </p>
                                    </div>
                                    <hr className='my-5'/>



                                <div>
                                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                                    Day 7
                                </h1>
                                <p className='font-bold mb-2'>SERENGETI NATIONAL PARK- Make friends  with tree climbing  lions of Serengeti  </p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                                    Enjoy the real safari experience today by searching for the Big Five animals, as well as other animals like giraffes, gazelles, and zebras. Explore the rivers, plains, and rocky areas to spot some of the smaller inhabitants of the Serengeti, such as leopard tortoises and rhinoceros beetles. Crown your day by witnessing the great migration firsthand.                                 
                                    </p>
                                
                                    <img alt='Arival' loading='lazy' src={Hot} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                                </div>
                                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                                    <div className='flex items-center'>
                                    <FaHotel className=' mr-3'/> <p>Four Seasons Safari Lodge </p>
                                    </div>
                                    <hr className='my-5'/>



                                <div>
                                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                                    Day 8
                                </h1>
                                <p className='font-bold mb-2'>SERENGETI NATIONAL PARK - Visit " the lost world"  of Ngorongoro and the Mara river   </p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                                    Spend this day on an excursion visit to the great wildlife haven of Ngorongoro Crater and the famed Mara River, to observe wildlife in their most active state. The crater floor, which spans over 100 square miles, is an ideal location for observing the numerous species that inhabit the area, including buffalo and elephants. You may also be lucky enough to spot flamingos (during their season) or the elusive black rhino
                                    </p>
                                
                                    <img alt='Arival' loading='lazy' src={Ngoro} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                                </div>
                                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                                    <div className='flex items-center'>
                                    <FaHotel className=' mr-3'/> <p>Four Seasons Safari Lodge </p>
                                    </div>
                                    <hr className='my-5'/>




                                <div>
                                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                                    Day 9
                                </h1>
                                <p className='font-bold mb-2'>SERENGETI NATIONAL PARK - Create  your  own day plan  </p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                                    Set out for an early morning game drive and return to the lodge to sample the various activities on offer: guided nature walks, bird watching, riding on horseback, cultural visits at the manyattas, and the spectacular hot air balloon rides.
                                    </p>
                                
                                    <img alt='Arival' loading='lazy' src={Ngoro1} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                                </div>
                                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                                    <div className='flex items-center'>
                                    <FaHotel className=' mr-3'/> <p>Four Seasons Safari Lodge </p>
                                    </div>
                                    <hr className='my-5'/>



                                <div>
                                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                                    Day 9
                                </h1>
                                <p className='font-bold mb-2'>NAIROBI - Wayward  connection  back home  </p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                                    After a hearty morning breakfast, you will depart for a flight to Kenya’s capital, Nairobi, and a subsequent transfer to the Norfolk Hotel for day room service and a meal before you catch a flight back.                            ,<br /> <br/>
                                    </p>
                                
                                    <img alt='Arival' loading='lazy' src={Hot} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                                </div>
                                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                                    <a href="/kenya/norfolk" className='flex items-center'>
                                    <FaHotel className=' mr-3'/> <p>Norfolk  hotel  Nairobi </p>
                                    </a>
                                    <hr className='my-5'/>
                                
                    </div>
                }

                </div>
            </div> 

            
        <div className="mt-10 mb-5">
          
          <div className="relative mt-20 z-[0] m-auto w-[80%]">
          <h1 className='font-[SourceSerifPro-Black] text-2xl'>Hotels & Lodges</h1>
                    <Slider {...settings} arrows style={containerStyle}>
                        <a href='/kenya/norfolk' className="w-1/2 mr-5 cursor-pointer hover:text-orange-500">
                            <img style={imageStyle} alt="1" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/ee/89/aa/fairmont-the-norfolk.jpg?w=700&h=-1&s=1"/>
                            <h1 className="font-bold">Norfolk hotel Nairobi</h1>
                        </a>
                        <a href='/kenya/keekorok' className="w-1/2 ml-5 cursor-pointer hover:text-orange-500">
                        <img style={imageStyle} src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/79530540.jpg?k=161e9575728b1ec006bbce358da1259be5577ab06342887c74e9b94ad4b54e7f&o=&hp=1" alt="2"/>
                        <h1 className="font-bold">Keekorok camp</h1>
                        </a>
                        <a href='/rwanda/lodges/bisate' className="w-1/2 mr-5 cursor-pointer hover:text-orange-500">
                        <img style={imageStyle} src="https://www.venchatravel.com/accommodations_images/thumbnail3/xlargr_2_11881.jpg" alt="3"/>
                        <h1 className="font-bold">Four seasons safari lodge</h1>
                        </a>
                        
                        {/* <div>
                        <img src="" alt="4"/>
                        <h1 className="font-bold"></h1>
                        </div> */}
                    </Slider>
                </div>
        </div>
                <Partners/>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo"/>
            <Footer/>
        </div>
    )
}

export default Migration;