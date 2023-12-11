import React, {useState} from "react";

import Navbar from "../../Navbar/Navreveal";

import Mara1 from '../../../Assets/Day4.1.jpeg';

import Kanairo from '../../../Assets/kanairo.jpeg';

import Giraffe from '../../../Assets/Day2.3.jpeg'

import Footer from "../../Footer/Footer";

import Site1 from "../../../Assets/sitemap1.png";

import  Hemingways2 from '../../../Assets/Day14.1.jpeg';

import Mzima from '../../../Assets/Day7.1.jpg';

import Tsavo1 from '../../../Assets/FinchH.jpg';

import Creek from '../../../Assets/Creek.jpg';

import Medina from '../../../Assets/Medina.jpg';

import Finch from '../../../Assets/Finch1.jpg';

import Kicheche from '../../../Assets/Kicheche-Laikipia.jpg';

import Heming from '../../../Assets/Hemingways2.jpg';

import Plan from '../../../Assets/Day5.1.jpeg';

import Faq from "react-faq-component";

import Gedi from '../../../Assets/Gedi.jpg';
 
import Surf from '../../../Assets/Surf.jpg';

import Lava from '../../../Assets/Day8.1.jpg';
import Partners from "../../Partners";
import { FaHotel } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

const Amboseli =()=>{
    const data = {
        title: "Iteneraries",
        rows: [
            {
                title: <strong> <h1 className="  font-[SourceSerifPro-Regular]">DAY 1: ARRIVAL IN NAIROBI || Hemingways Hotel </h1></strong>,
                content: <div className=" lg:flex lg:items-center">
                    <img src={Heming} alt=" Mara1" className=" lg:w-1/2"/>
                   
                </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 2: NAIROBI NATIONAL PARK|| David Shieldrick wildlife trust |giraffe center </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Giraffe} alt="Mara1" className=" lg:w-1/2 "/>
                     
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 3: MAASAI MARA NATIONAL RESERVE || A slum-dunk destination </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Kicheche} alt="Mara1" className=" lg:w-1/2"/>
                          
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 4: MAASAI MARA NATIONAL RESERVE|| Game drives with ultimate wildlife spectacles </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt="Mara1" className=" lg:w-1/2"/>
                        
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 5: MAASAI MARA NATIONAL PARK|| Plan  your  day   </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Plan} alt="Mara1" className="lg:w-1/2"/>
                         
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 6: TSAVO WEST NATIONAL PARK|| Face to face with man eaters of Tsavo </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Tsavo1} alt=" Mara1" className="lg:w-1/2"/>
                          
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 7: TSAVO WEST NATIONAL PARK|| Day long game drives| Shetani lava flows| Shiamu crater</strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Lava} alt="Mara1" className=" lg:w-1/2"/>
                           
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 8: TSAVO WEST NATIONAL PARK|| Mzima springs | Ngulia Wildlife Sanctuary </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mzima} alt="Mara1" className="lg:w-1/2"/>
                            
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 9: TSAVO NATIONAL PARK|| bush walks| night game drives </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Finch} alt="Mara1" className="lg:w-1/2"/>
                            
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 10: WATAMU|| Medina palms
                </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Medina} alt=" Mara1" className=" lg:w-1/2"/>
                          
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 11: WATAMU|| Mida Creek
                </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Creek} alt=" Mara1" className=" lg:w-1/2"/>
                            
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY12: WATAMU||ArabukoSokoke forest| big game sport fishing|snorkeling|windsurfing|diving
                </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Surf} alt=" Mara1" className=" lg:w-1/2"/>
                           
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 13: WATAMU|| Watamu Turtle sunctuary|Gede ruins
                </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Gedi} alt=" Mara1" className=" lg:w-1/2"/>
                          
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 14. DEPARTURE||Day room at Hemingways Nairobi
                </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Hemingways2} alt=" Mara1" className=" lg:w-1/2"/>
                          
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
                <img src={Mara1} alt=" Mara Camping" className=" m-auto w-full"/>
                <h1 className=" md:absolute md:bottom-0 text-white text-3xl lg:text-7xl font-[SourceSerifPro-Regular] z-0">KENYA SAFARI AND BEACH HOLIDAY </h1>
            </div>
            <div className=" w-full bg-red-900 md:h-[100px] h-[300px] md:flex md:flex-row flex flex-col md:justify-around justify-center md:items-center px-5">
                <div className=" md:mr-10 md:py-20">
                    <h1 className="font-[SourceSerifPro-Black] text-white">DESTINATION</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white md:flex-wrap">Kenya: Nairobi, Maasai Mara Game reserve, Tsavo West, Watamu</p>
                </div>
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">DURATION</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">14Days/13Nights</p>
                </div>
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">PRICE</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">From $17,400 per person</p>
                </div>
            </div>
            <div className=" p-5 lg:px-[300px] my-10">
                <p className="font-[SourceSerifPro-Regular] lg:text-xl">
                The adventure  is then crowned with five days relaxations and explorations  of the pristine Kenyan coastline and beaches, while enjoying luxurious  stays at the magnificent Medina  Palms  Resort,  in the  bewitching Watamu.
                </p>
            </div>
            
            <div className=" flex flex-col items-center">
                <div className=" lg:flex lg:justify-around">
                    <div className=" p-10 flex flex-col flex-2">
                        <h1 className="lg:px-[200px] text-2xl mb-10 font-[SourceSerifPro-Black] text-red-900">Safari Highlights </h1>
                        <ul className=" font-[SourceSerifPro-Regular] lg:px-[200px] list-none md:text-xl space-y-4 text-left text-black">
                            <li className=" flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Three scheduled  flights to expedite your travel. </span></li>
                            <li className="flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Visit   the giraffe  center  and  the David  shieldrick  wildlife  trust at the heart  of  Nairobi  city. </span>
                            </li>
                          
                            <li className=" flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span> Get up close  with  the great  wildebeest  migration  on a hot  air  balloon  ride  across  the maasai mara Plains </span></li>
                           
                            <li className=" flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Enjoy the thrill of "big five" classic  game  viewing at Tsavo West  and Tsavo east wildlife  sanctuaries </span></li>

                            <li className="flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Excellent  accommodation  at Kenya's  crème  de  la  crème  luxury  camps  and  lodges  </span>
                            </li>

                            <li className="flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Unwind and enjoy a tranquil atmosphere on the picturesque, pure-white sandy shores of the Kenyan coastline in Watamu. </span>
                            </li>
                            
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
                                    Meal Plan
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
                                Hemingways hotel  
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                All meals
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
                                Kicheche Safari Camp 
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                All meals
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#serengeti" className=" hover:text-red-900 md:text-xl">Tsavo west</a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    4
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Finch Hatton’s Luxury Tented Camp
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    All meals
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Watamu</a> 
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    4
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Medina palms 
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                All meals
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Nairobi</a> 
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    0
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Hemingways hotel (Day room)
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Lunch or Dinner
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
                                <span>Lamlav Safari Director and Driver-Guide during your journey.</span>
                            </li>
                        
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span> Spectacular Hot air balloon  Safari  experience</span>
                            </li>

                        
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span> Unlimited  game drives in camps using 4  × 4 vehicles with roof hatches for game viewing</span>
                            </li>
                          
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Transport using  4  4 vehicle with experienced English/French/Spanish speaking driver/guide</span>

                            </li>
            
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Luxury accommodation and all meals  as shown in the itinerary </span>
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

                                <span> Scheduled flights;Amboseli/Lewa/Mara/Nairobi </span></li>
                          
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Telephone  calls and laundry services </span></li>
                        </ul>                   
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className=" flex justify-center items-center flex-col ">
                    {
                        detailed===false?
                    
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
                                <p className='font-bold mb-2'> ARRIVAL IN NAIROBI || Hemingways Hotel</p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                                    Your safari expedition begins immediately you touch down in Kenya’s capital Nairobi. You will be received by our Safari  director who will brief you on your safari as you transfer you to Hemingways hotel, for overnight stay. 
                                    </p>
                                
                                    <img alt='Arival' loading='lazy' src={Heming} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                            </div>
                            <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                                <a href='/kenya/hemingways' className='flex items-center'>
                                <FaHotel className=' mr-3'/> <p>Hemingways hotel Nairobi </p>
                                </a>
                                <hr className='my-5'/>



                                <div>
                                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                                    Day 2
                                </h1>
                                <p className='font-bold mb-2'>NAIROBI NATIONAL PARK|| David Shieldrick wildlife trust |giraffe center </p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                                    Embark on an exciting journey to Nairobi National Park, where you can enjoy a memorable morning with baby orphaned elephants at the David Sheldrick Wildlife Trust. Join the endangered Rothschild’s giraffes for a mid-morning snack at the Giraffe Center, followed by a leisurely lunch at the Carnivore Restaurant. Afterward, return to Hemingway for relaxation, dinner, and an overnight stay
                                  </p>
                                
                                    <img alt='Arival' loading='lazy' src={Giraffe} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                            </div>
                            <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                            <a href='/kenya/hemingways' className='flex items-center'>
                                <FaHotel className=' mr-3'/> <p>Hemingways hotel Nairobi </p>
                                </a>
                                <hr className='my-5'/>


                                <div>
                                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                                    Day 3
                                </h1>
                                <p className='font-bold mb-2'>MAASAI MARA NATIONAL RESERVE || A slum-dunk destination</p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                                    Following breakfast, journey towards the breathtaking Maasai Mara, traversing the picturesque Great Rift Valley. Arrive at Narok town for lunch before continuing the safari. Upon reaching, Kicheche Bush Camp awaits as your luxurious retreat in Kenya's untamed landscapes. Unwind in the camp throughout the day, enjoying a view of the Mara River and wildlife gathering at the watering hole. The captivating sounds and scents of the Mara will enchant and enthrall you.
                                  
                                    </p>
                                
                                    <img alt='Arival' loading='lazy' src={Kicheche} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                            </div>
                            <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                                <a href='/kenya/kicheche' className='flex items-center'>
                                <FaHotel className=' mr-3'/> <p>Kicheche  Mara Camp </p>
                                </a>
                                <hr className='my-5'/>



                                
                                <div>
                                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                                    Day 4
                                </h1>
                                <p className='font-bold mb-2'> MAASAI MARA NATIONAL RESERVE|| Game drives with ultimate wildlife spectacles </p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                                    The Maasai Mara stands out as a premier location in Africa for encountering large felines, with its vast plains serving as the backdrop for the spectacular great wildebeest migration. Spend an entire day exploring the Maasai Mara National Reserve and the Mara Triangle through game drives, accompanied by picnic lunch hampers. Be vigilant and keep your cameras ready, as cheetahs and lions roam the plains, anticipating the migrating wildebeest, while leopards gracefully perch in riverside fig trees—there's an abundance of captivating scenes to witness!
                                    </p>
                                
                                    <img alt='Arival' loading='lazy' src={Mara1} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                                </div>
                                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                                <a href='/kenya/kicheche' className='flex items-center'>
                                <FaHotel className=' mr-3'/> <p>Kicheche  Mara Camp </p>
                                </a>
                                    <hr className='my-5'/>



                                <div>
                                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                                    Day 5
                                </h1>
                                <p className='font-bold mb-2'> MAASAI MARA NATIONAL PARK|| Plan  your  day </p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                                    Kicheche bush camp offers comprehensive activities that are designed to suit your taste and interest. This morning, enjoy a leisurely bush breakfast, and head out on a captivating walking safari around the park, with an opportunity to sight game, including the leopard and some rare species like gerenuk and beisa Oryx. In the afternoon,  you can choose to:
                                <br/><br/> Take a hot air balloon ride around the park and enjoy a fascinating aerial view of the park and it's abundant wildlife. OR 
                                <br/><br/> Make a Maasai cultural visit in the manyattas a chance for you to interact with the Maasai community and learn their heritage. 
                                Return to the camp in the evening for local drinks and refreshing sundowner followed by an elegant al fresco dinner around a camp fire.
                                <br/>
                                 </p>
                                
                                    <img alt='Arival' loading='lazy' src={Plan} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                                </div>
                                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                                <a href='/kenya/kicheche' className='flex items-center'>
                                <FaHotel className=' mr-3'/> <p>Kicheche  Mara Camp </p>
                                </a>
                                    <hr className='my-5'/>



                                <div>
                                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                                    Day 6
                                </h1>
                                <p className='font-bold mb-2'>TSAVO WEST NATIONAL PARK|| Face to face with man eaters of Tsavo  </p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                                    Following a champagne breakfast in the bush, you will have time to venture out on a final game drive for some classic views, before departing to Tsavo west national park in the afternoon via a scheduled flight. Upon arrival you will be transferred to the luxurious Finch Hatton’s Luxury Tented Camp and the rest of the day is for you to enjoy the Camp's comprehensive facilities, with a five star hospitality around.
                                    </p>
                                
                                    <img alt='Arival' loading='lazy' src={Tsavo1} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                                </div>
                                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                                    <a href='/kenya/finch' className='flex items-center'>
                                    <FaHotel className=' mr-3'/> <p>Finch Hatton's </p>
                                    </a>
                                    <hr className='my-5'/>



                                <div>
                                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                                    Day 7
                                </h1>
                                <p className='font-bold mb-2'>TSAVO WEST NATIONAL PARK|| Day long game drives| Shetani lava flows| Shiamu crater  </p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                                    Tsavo west national park is one of the largest parks in Kenya, famed for its striking geographical formations, animal and bird life. Spend this day exploring the landscapes on day long game drives, with visits to Shetani lava flow and Shiamu crater, returning to the camp in between the drives for lunch and relaxation, before setting out on another game drive. Big games that roam in this park include: large herds of various antelopes, zebras, lions, cheetahs, leopards, buffalos, rhinos, giraffes etcetera. After a game drive, stop in the wild for sundowner and cocktails with spectacular views of Mt. Kilimanjaro. A truly magical experience not to be missed!
                                    </p>
                                
                                    <img alt='Arival' loading='lazy' src={Lava} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                                </div>
                                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                                <a href='/kenya/finch' className='flex items-center'>
                                    <FaHotel className=' mr-3'/> <p>Finch Hatton's </p>
                                    </a>
                                    <hr className='my-5'/>



                                <div>
                                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                                    Day 8
                                </h1>
                                <p className='font-bold mb-2'>TSAVO WEST NATIONAL PARK|| Mzima springs | Ngulia Wildlife Sanctuary   </p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                                    Visit the renowned Mzima springs early in the morning to observe hippos and crocodiles from an underground chamber. This area of the park is lush and provides fresh water for wildlife to gather and drink, as well as a home for aquatic species. It's best to go in the morning as hippos tend to hide during the day. After a relaxing breakfast, take a walk through the fever-tree forest to observe the diverse birdlife and other animals.
                                <br/><br/>Next, explore the Chyulu and Ngulia hills using the park's animal trails while observing the over 600 bird species that inhabit the area, including the endangered corncrake and Basra reed warbler. 
                                <br/><br/>Enjoy a picnic lunch before heading to the Ngulia wildlife sanctuary in the late afternoon. This sanctuary is home to endangered rhinos, and you can view them from a panoramic observation point while enjoying a sundowner at the roaring r
                                    </p>
                                
                                    <img alt='Arival' loading='lazy' src={Mzima} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                                </div>
                                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                                <a href='/kenya/finch' className='flex items-center'>
                                    <FaHotel className=' mr-3'/> <p>Finch Hatton's </p>
                                    </a>
                                    <hr className='my-5'/>




                                <div>
                                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                                    Day 9
                                </h1>
                                <p className='font-bold mb-2'>TSAVO NATIONAL PARK|| bush walks| night game drives  </p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                                    Start your day with a hearty bush breakfast before venturing into the hinterland on an adventurous bush walk, accompanied by an armed escort. Following lunch, make the most of the camp's amenities for the afternoon.

                                    <br/><br/>As evening falls, embark on a night drive to immerse yourself in the nocturnal sounds of Tsavo and marvel at the star-studded sky while observing creatures like leopards, civet cats, genet cats, and bush babies. Stay vigilant throughout the drive for these fascinating nocturnal encounters.
                                        </p>
                                
                                    <img alt='Arival' loading='lazy' src={Finch} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                                </div>
                                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                                <a href='/kenya/finch' className='flex items-center'>
                                    <FaHotel className=' mr-3'/> <p>Finch Hatton's </p>
                                    </a>
                                    <hr className='my-5'/>



                                <div>
                                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                                    Day 10
                                </h1>
                                <p className='font-bold mb-2'>WATAMU|| Medina palms  </p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                                    Following a relaxed breakfast, embark on a scenic game drive while exiting the park en route to Mombasa. Upon reaching Mombasa town, savor a leisurely lunch and explore the historic old town before heading to the airport for a brief flight to Malindi. Upon arrival at Malindi airport, you'll be greeted and transferred to the tranquil Medina Palms Resort, where you can unwind and enjoy a four-night stay.                            <br /> <br/>
                                    </p>
                                
                                    <img alt='Arival' loading='lazy' src={Medina} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                                </div>
                                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                                    <a href='/kenya/medina' className='flex items-center'>
                                    <FaHotel className=' mr-3'/> <p>Medina  Palms  Resort </p>
                                    </a>
                                    <hr className='my-5'/>




                                    <div>
                                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                                    Day 11
                                </h1>
                                <p className='font-bold mb-2'>WATAMU|| Mida Creek </p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                                    Spend this day relaxing and unwinding on the pristine white sand beaches of Watamu, while walking through the cocktail menu. In the evening, take a peaceful sun-downer cruise on Mida Creek, sailing peacefully on a romantic Swahili dhow, through a 32 sq. km tidal estuary lined with mangroves and beaches. There is abundant birdlife in this UNESCO biosphere and stunning views to enjoy along with your delicious cocktail and canopes while watching a spectacular sunset and twinkling skies                            <br/><br/>
                                    </p>
                                
                                    <img alt='Arival' loading='lazy' src={Creek} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                                </div>
                                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                                <a href='/kenya/medina' className='flex items-center'>
                                    <FaHotel className=' mr-3'/> <p>Medina  Palms  Resort </p>
                                    </a>
                                    <hr className='my-5'/>



                                    <div>
                                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                                    Day 12
                                </h1>
                                <p className='font-bold mb-2'>WATAMU||ArabukoSokoke forest| big game sport fishing|snorkeling|windsurfing|diving  </p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                                    Following a relaxed breakfast, embark on a scenic game drive while exiting the park en route to Mombasa. Upon reaching Mombasa town, savor a leisurely lunch and explore the historic old town before heading to the airport for a brief flight to Malindi. Upon arrival at Malindi airport, you'll be greeted and transferred to the tranquil Medina Palms Resort, where you can unwind and enjoy a four-night stay.                            <br /> <br/>
                                    </p>
                                
                                    <img alt='Arival' loading='lazy' src={Surf} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                                </div>
                                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                                <a href='/kenya/medina' className='flex items-center'>
                                    <FaHotel className=' mr-3'/> <p>Medina  Palms  Resort </p>
                                    </a>
                                    <hr className='my-5'/>



                                
                                
                                <div>
                                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                                    Day 13
                                </h1>
                                <p className='font-bold mb-2'> WATAMU|| Watamu Turtle sunctuary|Gede ruins  </p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                            Take a mid-morning visit to Watamu turtle sanctuary, and the historical gede ruins in the afternoon. Gede ruins are a 12th Century Swahili village that was mysteriously abandoned some 600 years ago. A guided tour through the ruins and the museum will teach you a lot of interesting things about the fascinating culture of the Swahili people and the ancient town they constructed. Gede is heavily overgrown with beautiful indigenous forest trees, baobabs and tamarind. Take a guided walk along the nature trail network comprising 40 different species of plants and Look out for Syke's Monkeys, and the Golden Rumped Elephant Shrew that are common here.
                                    </p>
                                
                                    <img alt='Arival' loading='lazy' src={Gedi} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                                </div>
                                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                                <a href='/kenya/medina' className='flex items-center'>
                                    <FaHotel className=' mr-3'/> <p>Medina  Palms  Resort </p>
                                    </a>
                                    <hr className='my-5'/>


                                
                                
                                
                                <div>
                                <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                                    Day 14
                                </h1>
                                <p className='font-bold mb-2'> DEPARTURE||Day room at Hemingways Nairobi  </p>
                                <hr/>
                                <div className='lg:flex items-center justify-center'>
                                
                                    <p className='font-[SourceSerifPro-Regular] md:text-xl'>
                                    Dedicate the day to indulging in the resort's extensive amenities, and in the afternoon, explore the historic town of Malindi before taking an evening flight to Nairobi. Upon landing at Wilson Airport, you'll be transported to the Hemingway Hotel for a day room to relax before your departure flight home.
                                    </p>
                                
                                    <img alt='Arival' loading='lazy' src={Hemingways2} className=' lg:w-1/2 lg:ml-5  object-contain'/>
                                    
                                </div>
                                </div>
                                <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                                    <a href='/kenya/hemingways' className='flex items-center'>
                                    <FaHotel className=' mr-3'/> <p>Hemingways  hotel  Nairobi </p>
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
                        <a href='/kenya/hemingways' className="w-1/2 mr-5 cursor-pointer hover:text-orange-500">
                            <img style={imageStyle} alt="1" src="https://www.kenyawildlifetours.com/wp-content/uploads/2021/11/01-hemingways_nairobi-lobby_stairway_entrance_day-kenya.jpg.1920x500_q70_crop-scale.jpg"/>
                            <h1 className="font-bold">Hemingways hotel</h1>
                        </a>
                        <a href='/kenya/kicheche' className="w-1/2 ml-5 cursor-pointer hover:text-orange-500">
                        <img style={imageStyle} src="https://kicheche.com/wp-content/uploads/2018/07/kbc-inside-tent.jpg" alt="2"/>
                        <h1 className="font-bold">Kicheche Safari Camp</h1>
                        </a>
                        <a href='/kenya/finch' className="w-1/2 mr-5 cursor-pointer hover:text-orange-500">
                        <img style={imageStyle} src="https://finchhattons.com/wp-content/uploads/2023/02/A-Tour-of-our-Luxury-Tented-Suites.png" alt="3"/>
                        <h1 className="font-bold">Finch Hattons Luxury Tented Camp</h1>
                        </a>

                        <a href='/kenya/medina' className="w-1/2 ml-5 cursor-pointer hover:text-orange-500">
                        <img style={imageStyle} src="https://www.medinapalms.com/uploads/files/_1200x630_crop_center-center_82_none/26079/Medina-Palms-Home.png?mtime=1693206149" alt="2"/>
                        <h1 className="font-bold">Medina palms</h1>
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

export default Amboseli;