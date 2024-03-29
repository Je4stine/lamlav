import React,{useState} from "react";

import { Carousel } from 'react-responsive-carousel';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import Navbar from "../../Navbar/Navreveal";

import Mara1 from '../../../Assets/serengeti1.jpg';

import Kanairo from '../../../Assets/kanairo.jpeg';

import Giraffe from '../../../Assets/giraffe.jpg';

import Day1 from '../../../Assets/Day111.jpeg';

import Day2 from '../../../Assets/Day222.jpeg';

import Day3 from '../../../Assets/Day333.jpeg';

import Day4 from '../../../Assets/Day444.jpeg';

import Day5 from '../../../Assets/Day555.jpeg';

import Day6 from '../../../Assets/Day666.jpeg';

import Day7 from '../../../Assets/Day777.jpeg';

import Day8 from '../../../Assets/Day888.jpeg';

import Day9 from '../../../Assets/Day999.jpeg';

import Day10 from '../../../Assets/Day1010.jpeg';

import Footer from "../../Footer/Footer";

import Site1 from "../../../Assets/sitemap1.png";

import Faq from "react-faq-component";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Partners from "../../Partners";
import { ImCheckmark } from "react-icons/im";
import { FaHotel, FaSadCry } from "react-icons/fa";

const Mara =()=>{
    
    const data = {
        title: "Iteneraries",
        rows: [
            {
                title: <strong> <h1 className="  font-[SourceSerifPro-Regular]">DAY 1 ARRIVAL IN NAIROBI ||Grand Welcome to kenya</h1></strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Day1} alt=" Mara1" className=" lg:w-1/2"/>
                </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 2:  NAIROBI || Commingle  with  giraffes  and baby  elephants </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Day2} alt="Mara1" className=" lg:w-1/2 "/>
                            
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 3 LEWA WILDLIFE CONSERVANCY || In the wilderness of Laikipia Plateau </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Day3} alt="Mara1" className=" lg:w-1/2"/>
                            
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 4: LEWA CONSERVANCY || Classic game viewing  </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Day4} alt="Mara1" className=" lg:w-1/2"/>
                           
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 5: LEWA CONSERVANCY || Plan your  day   </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Day5} alt="Mara1" className=" lg:w-1/2"/>
                           
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 6: MAASAI MARA || Face to face with the great migration!</strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Day6} alt=" Mara1" className=" lg:w-1/2"/>
                            
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">  DAY 7: MAASAI MARA  || Breath- taking wildlife encounters</strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Day7} alt="Mara1" className=" lg:w-1/2"/>
                            
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 8: MAASAI MARA NATIONAL RESERVE || hippo pool bush breakfast, game drives, Maasai cultural visit  </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Day8} alt="Mara1" className=" lg:w-1/2"/>
                           
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 9: MAASAI MARA NATIONAL RESERVE|| Hot air balloon safari, star –lit bush diner </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Day9} alt="Mara1" className=" lg:w-1/2"/>
                            
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 10 NAIROBI</strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Day10} alt=" Mara1" className=" lg:w-1/2"/>
                            
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
                <h1 className=" md:absolute md:bottom-0 text-white text-3xl lg:text-7xl font-[SourceSerifPro-Regular] z-0">Great Migration Safari</h1>
            </div>
            <div className=" w-full bg-red-900 md:h-[100px] h-[300px] md:flex md:flex-row flex flex-col md:justify-around justify-center md:items-center px-5">
                <div className=" md:mr-10 md:py-20">
                    <h1 className="font-[SourceSerifPro-Black] text-white">DESTINATION</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white md:flex-wrap">Kenya: Nairobi, Lewa Conservancy, Maasai Mara</p>
                </div>
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">DURATION</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">10days/9 nights</p>
                </div>
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">PRICE</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">From $ 9,127  per person</p>
                </div>
            </div>
            <div className=" p-5 lg:px-[300px] my-10">
                <p className="font-[SourceSerifPro-Regular] lg:text-xl">
                During your safari adventure, you'll enjoy a comfortable and leisurely stay in top-notch accommodations, such as the Fairmont Norfolk Hotel in the heart of the city, the Elewana Lewa Safari Camp in Laikipia, and the beautifully luxurious Mara Serena Lodge in Maasai Mara.
                <br/><br/>To make travel faster and more convenient, you'll take three thrilling flights between the luxurious camps and lodges, as well as back to the city.
                </p>
            </div>
          
            <div className=" flex flex-col items-center">
                <div className=" lg:flex lg:justify-around">
                    <div className=" p-10 flex flex-col flex-2">
                        <h1 className="lg:px-[200px] text-2xl mb-10 font-[SourceSerifPro-Black] text-red-900">Safari Highlights </h1>
                        <ul className=" font-[SourceSerifPro-Regular] lg:px-[200px] list-none md:text-xl space-y-4 text-left text-black">
                            <li className=" flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Seven nights game viewing thrill at Kenya's  top wildlife  destinations.</span></li>
                            <li className="flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Spectacular  wildebeest  migration  experience  in Maasai  Mara </span>
                            </li>
                          
                            <li className=" flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Three exhilarating  flights  to expedite  your  travel  between  the camps</span></li>
                           
                            <li className=" flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Accommodation at high end camps  and lodges </span></li>
                            
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
                                    Meal
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
                                    All meals 
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#maasaimara" className=" hover:text-red-900 md:text-xl">Lewa Conservancy </a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    3
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Lewa Safari Camp  
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    All Meals
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#serengeti" className=" hover:text-red-900 md:text-xl">Maasai Mara</a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    4
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Mara Serena lodge  
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
                                    Norfolk hotel Nairobi  
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Day Room
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                <div className="h-[80px] w-[80px] rounded-full bg-orange-500 flex flex-col items-center justify-center"><ImCheckmark size={20} /></div>
                  <h1 className="text-2xl font-[SourceSerifPro-Black] text-red-900 mt-10 mb-5">Included</h1>
                <div className=" lg:flex lg: justify-between p-5">
                        <ul className=" lg:p-5 mb-8 space-y-4 text-left text-black">
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Luxury accommodation  and all meals.</span>
                            </li>
                        
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span> Spectacular hot air balloon  Safari.</span>
                            </li>

                        
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span> Optional activities and excursions Individualised for you by your Safari Director.</span>
                            </li>
                          
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Unlimited game drives in  4  4 vehicles with roof hatches for game viewing.</span>

                            </li>
            
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Transport using 4 X 4 vehicle with experienced English/French/spanish speaking driver/guide</span>
                            </li>
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-centee space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Accommodation as shown in the itinerary. </span>
                            </li>
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Daily valet laundry service.</span></li>

                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Tips for driver/guide/lodge/camp staff</span></li>
                        </ul>

                        <ul className=" lg:p-5 space-y-4 text-left text-black">
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Internet  access.</span>
                            </li>
                          
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Soft drinks, beer, house wines and selected spirits</span>
                            </li>
                           
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Airport and Airstrip transfers. </span>
                            </li>
                         
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Park/conservancy fees.</span>
                            </li>
                           
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Flying Doctors emergency evacuation cover.</span></li>
                        
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Mineral water on  game drives. </span></li>
                          
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Scheduled flights; Lewa/maasai mara/Nairobi.</span></li>
                            
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>24hour Lamlav on call support.</span></li>
                            
                        </ul>                   
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className=" flex justify-center items-center flex-col ">
                { detailed === false?

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
            <p className='font-bold mb-2'> ARRIVAL IN NAIROBI ||Grand Welcome to kenya</p>
            <hr/>
            <div className='lg:flex items-center justify-center'>
            
                <p className='font-[SourceSerifPro-Regular] md:text-xl lg:w-1/2'>
                Upon arrival at Jomo Kenyatta International Airport, you will be warmly received by your Lamlav  Safari Director who will brief you on the safari and transfer you to Norfolk hotel for overnight stay.
                </p>
            
                <img alt='Arival' loading='lazy' src={Day1} className=' lg:w-1/2 lg:ml-5  object-cover'/>
                
            </div>
        </div>
        <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
            <a href='/kenya/norfolk' className='flex items-center underline decoration-orange-500'>
            <FaHotel className=' mr-3'/> <p>Norfolk hotel Nairobi </p>
            </a>
            <hr className='my-5'/>



            <div>
            <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 2
            </h1>
            <p className='font-bold mb-2'>NAIROBI || Commingle  with  giraffes  and baby  elephants </p>
            <hr/>
            <div className='lg:flex items-center justify-center'>
            
                <p className='font-[SourceSerifPro-Regular] md:text-xl lg:w-1/2'>
                Combine wildlife and culture with morning trips to the <strong>giraffe center, David Shieldrick Wildlife Trust,</strong> the <strong>Karen Blixen Muesum</strong> and later to the <strong>Kazuri bead factory</strong> where you will see how classic pottery beads are made, following the process from beginning to end. Return  to Norfolk  hotel  for evening  dinner  dinner  and relaxation. 
                 </p>
            
                <img alt='Arival' loading='lazy' src={Day2} className=' lg:w-1/2 lg:ml-5  object-cover'/>
                
            </div>
        </div>
        <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
            <a href='/kenya/norfolk' className='flex items-center underline decoration-orange-500'>
            <FaHotel className=' mr-3'/> <p>Norfolk hotel Nairobi </p>
            </a>
            <hr className='my-5'/>


            <div>
            <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 3
            </h1>
            <p className='font-bold mb-2'>LEWA WILDLIFE CONSERVANCY || In the wilderness of Laikipia Plateau </p>
            <hr/>
            <div className='lg:flex items-center justify-center'>
            
                <p className='font-[SourceSerifPro-Regular] md:text-xl lg:w-1/2'>
                Catch a flight at Wilson airport and fly over the Laikipia plateau, enjoying the stunning view of the lordly Mt Kenya, to the Lewa wildlife conservancy. Upon touch down at Lewa airstrip, you will enjoy a game drive transfer to the famous Lewa Safari Camp, where you will spend three amazing nights. Arrive in time for lunch and have time to relax before setting out for an afternoon game drive to dusk.
              
                </p>
            
                <img alt='Arival' loading='lazy' src={Day3} className=' lg:w-1/2 lg:ml-5  object-cover'/>
                
            </div>
        </div>
        <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
            <a href='/kenya/lewaconservancy' className='flex items-center underline decoration-orange-500'>
            <FaHotel className=' mr-3'/> <p>Lewa Safari  Camp </p>
            </a>
            <hr className='my-5'/>



            
            <div>
            <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 4
            </h1>
            <p className='font-bold mb-2'>LEWA CONSERVANCY || Classic game viewing  </p>
            <hr/>
            <div className='lg:flex items-center justify-center'>
            
                <p className='font-[SourceSerifPro-Regular] md:text-xl lg:w-1/2'>
                Spend this day exploring the landscapes on scheduled morning and afternoon game drives, returning to the camp In between the drives for lunch and relaxation, before setting out for another game drive.
                      <br/><br/>Lewa wildlife conservancy is a world heritage center and home to diverse array of game mammals and birds. It is a vital stronghold for the approximately 400 Grevy’s Zebras and more than 120 rhinos, and  second to Maasai Mara in terms of wildlife densities. Visitors to Lewa are privy to some of the most spectacular wildlife viewing that Kenya has to offer. Prides of lion, leopard and jackal thrive on the rich diversity of prey that inhabits the area. 
                                        
                 </p>
            
                <img alt='Arival' loading='lazy' src={Day4} className=' lg:w-1/2 lg:ml-5  object-cover'/>
                
            </div>
            </div>
            <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
            <a href='/kenya/lewaconservancy' className='flex items-center underline decoration-orange-500'>
            <FaHotel className=' mr-3'/> <p>Lewa Safari  Camp </p>
            </a>
                <hr className='my-5'/>



            <div>
            <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 5
            </h1>
            <p className='font-bold mb-2'>LEWA CONSERVANCY || Plan your  day </p>
            <hr/>
            <div className='lg:flex items-center justify-center'>
            
                <p className='font-[SourceSerifPro-Regular] md:text-xl lg:w-1/2'>
                This morning,  you  will enjoy a sumptuous Champaign breakfast in the bush, and then head out to explore the beautiful terrains on a fascinating guided walk, with an armed escort. Horse rides, camel rides and cultural visits are some exciting activities that you will also have a chance to explore on this day. Your day ends with a sundowner and a delicious al fresco dinner around a warm campfire.                                <br/>
                </p>
            
                <img alt='Arival' loading='lazy' src={Day5} className=' lg:w-1/2 lg:ml-5  object-cover'/>
                
            </div>
            </div>
            <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
            <a href='/kenya/lewaconservancy' className='flex items-center underline decoration-orange-500'>
            <FaHotel className=' mr-3'/> <p>Lewa Safari  Camp </p>
            </a>
                <hr className='my-5'/>



            <div>
            <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 6
            </h1>
            <p className='font-bold mb-2'>MAASAI MARA || Face to face with the great migration! </p>
            <hr/>
            <div className='lg:flex items-center justify-center'>
            
                <p className='font-[SourceSerifPro-Regular] md:text-xl lg:w-1/2'>
                            Transfer to Lewa airstrip, this morning, for a flight to the great Maasai Mara National Park. While airborne,  you  will enjoy  a captivating  aerial  view of the beautiful scenery of the Great Rift Valley and the expansive park. Upon touch down, you will be transferred to the indulgent and lush Mara Serena camp for a three night stay. Enjoy game drive en route to the camp from keekorock airstrip, and arrive in time for a hearty lunch and relaxation.
                            <br/><br/>Depart for a thrilling afternoon game drive to dusk, around the park, for a chance to view the big cats; lion, cheetah, leopard and other games like rhino, elephant, buffalo, gazelle etcetera. Return to the lodge for a comprehensive dinner around a cozy camp fire or lounge.
                </p>
            
                <img alt='Arival' loading='lazy' src={Day6} className=' lg:w-1/2 lg:ml-5  object-cover'/>
                
            </div>
            </div>
            <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <div className='flex items-center underline decoration-orange-500'>
                <FaHotel className=' mr-3'/> <p>Four Seasons Safari Lodge </p>
                </div>
                <hr className='my-5'/>



            <div>
            <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 7
            </h1>
            <p className='font-bold mb-2'>MAASAI MARA  || Breath- taking wildlife encounters  </p>
            <hr/>
            <div className='lg:flex items-center justify-center'>
            
                <p className='font-[SourceSerifPro-Regular] md:text-xl lg:w-1/2'>
                Spend this day exploring the Mara ecosystem on unlimited game drives, for a chance to experience these breathtaking and unforgettable spectacles that will always leave you breathless!
                </p>
            
                <img alt='Arival' loading='lazy' src={Day7} className=' lg:w-1/2 lg:ml-5  object-cover'/>
                
            </div>
            </div>
            <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <a href='/kenya/marares' className='flex items-center underline decoration-orange-500'>
                <FaHotel className=' mr-3'/> <p>Mara Serena camp </p>
                </a>
                <hr className='my-5'/>



            <div>
            <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 8
            </h1>
            <p className='font-bold mb-2'> MAASAI MARA NATIONAL RESERVE || hippo pool bush breakfast, game drives, Maasai cultural visit   </p>
            <hr/>
            <div className='lg:flex items-center justify-center'>
            
                <p className='font-[SourceSerifPro-Regular] md:text-xl lg:w-1/2'>
                This morning, you will crown your game viewing experience with a leisurely Bush Breakfast by the Mara River Hippo Pools, before heading out for a morning game drive. Return to the lodge for lunch and indulge in spa, or a muscle relieving massage, before making a grand visit (optional) to the maasai villages for an opportunity to learn their proud heritage and how they peacefully coexist with the wild animals.
                </p>
            
                <img alt='Arival' loading='lazy' src={Day8} className=' lg:w-1/2 lg:ml-5  object-cover'/>
                
            </div>
            </div>
            <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
            <a href='/kenya/marares' className='flex items-center underline decoration-orange-500'>
                <FaHotel className=' mr-3'/> <p>Mara Serena camp </p>
                </a>
                <hr className='my-5'/>




            <div>
            <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 9
            </h1>
            <p className='font-bold mb-2'>MAASAI MARA NATIONAL RESERVE|| Hot air balloon safari, star –lit bush diner  </p>
            <hr/>
            <div className='lg:flex items-center justify-center'>
            
                <p className='font-[SourceSerifPro-Regular] md:text-xl lg:w-1/2'>
                This day, you will embark on an early morning game drive and later set out on a fascinating sunrise hot air balloon ride across the park, for a chance to get a stunning aerial view of the park and its game. The rest of the day is for you to enjoy the comprehensive amenities of the lodge with a five star service around you. This evening you will enjoy a star–lit bush dinner, enlivened by the presence of scarlet-clad Maasai Morans (warriors).
                </p>
            
                <img alt='Arival' loading='lazy' src={Day9} className=' lg:w-1/2 lg:ml-5  object-cover'/>
                
            </div>
            </div>
            <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
            <a href='/kenya/marares' className='flex items-center underline decoration-orange-500'>
                <FaHotel className=' mr-3'/> <p>Mara Serena camp </p>
                </a>
                <hr className='my-5'/>



            <div>
            <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 10
            </h1>
            <p className='font-bold mb-2'>NAIROBI  </p>
            <hr/>
            <div className='lg:flex items-center justify-center'>
            
                <p className='font-[SourceSerifPro-Regular] md:text-xl lg:w-1/2'>
                After a hearty morning breakfast, you will get a chance to relax and enjoy armchair viewing of the arresting scenery and wildlife. Later in the afternoon, you will be driven to the airstrip  for a flight to Nairobi, where you will have a day room at Norfolk hotel and a meal before you are transferred to the airport for a flight back home..
                </p>
            
                <img alt='Arival' loading='lazy' src={Day10} className=' lg:w-1/2 lg:ml-5  object-cover'/>
                
            </div>
            </div>
            <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <a href="/kenya/norfolk" className='flex items-center underline decoration-orange-500'>
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
                        <a href='/kenya/lewaconservancy' className="w-1/2 ml-5 cursor-pointer hover:text-orange-500">
                        <img style={imageStyle} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/96/41/3c/elewana-lewa-safari-camp.jpg?w=700&h=-1&s=1" alt="2"/>
                        <h1 className="font-bold">Lewa Safari Camp</h1>
                        </a>
                        <a href='/kenya/marares' className="w-1/2 mr-5 cursor-pointer hover:text-orange-500">
                        <img style={imageStyle} src="https://image-tc.galaxy.tf/wijpeg-8yfjmlr8n5lprgp07lfj0gxwj/240a1921-edita.jpg?width=1600&height=1066" alt="3"/>
                        <h1 className="font-bold">Mara Serena lodge</h1>
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

export default Mara;