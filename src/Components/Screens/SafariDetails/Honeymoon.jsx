import React,{useState} from "react";

import Navbar from "../../Navbar/Navreveal";

import Mara1 from '../../../Assets/moon2.jpg';

import Kanairo from '../../../Assets/kanairo.jpeg';

import Giraffe from '../../../Assets/giraffe.jpg'

import Footer from "../../Footer/Footer";

import Site1 from "../../../Assets/sitemap1.png";

import Kicheche from "../../../Assets/Kicheche.jpg";

import Olpe from "../../../Assets/olpejeta.jpg";

import Faq from "react-faq-component";

import Rhino from '../../../Assets/rhino.jpg';

import Chipol from '../../../Assets/chipol.jpg';

import Olseki from '../../../Assets/olseki.jpg';

import Naboisho from '../../../Assets/naboisho.jpg';

import Watamu1 from '../../../Assets/watamu1.jpg';

import Cruise from '../../../Assets/cruise.jpg';

import Scuba from '../../../Assets/Scuba.jpg';

import HemNai from '../../../Assets/HemNai.jpg';

import Arabuko from '../../../Assets/Arabuko.jpg';
import Partners from "../../Partners";
import { FaHotel } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import { ImCheckmark } from "react-icons/im";

const Honeymoon =()=>{
    const data = {
        title: "Iteneraries",
        rows: [
            {
                title: <strong> <h1 className="  font-[SourceSerifPro-Regular]">DAY 1: ARRIVAL AT NAIROBI || City On the sun </h1></strong>,
                content: <div className=" lg:flex lg:items-center">
                    <img src={Kanairo} alt=" Mara1" className=" lg:w-1/2"/>
                    
                </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 2: OL PEJETA CONSERVANCY || Deep into the Laikipia wilderness </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Kicheche} alt="Mara1" className=" lg:w-1/2"/>
                          
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 3: OL PEJETA CONSERVANCY || Excellent game viewing </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Olpe} alt="Mara1" className=" lg:w-1/2"/>
                           
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 4: OL PEJETA CONSERVANCY || Plan your day  </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Rhino} alt="Mara1" className=" lg:w-1/2"/>
                          
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 5:  OL PEJETA CONSERVANCY || Armchair game viewing; day and night game drives; visit chimpanzee sanctuary </strong>,
                content: <div className=" lg:flex lg:items-center"> 
                            <img src={Chipol} alt="Mara1" className=" lg:w-1/2"/>
                            
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 6: NABOISHO CONSERVANCY || within the wilderness of Maasai Mara north conservancy</strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Olseki} alt=" Mara1" className=" lg:w-1/2"/>
                           
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 7. NABOISHO CONSERVANCY || Ultimate wildlife spectacle  </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Naboisho} alt="Mara1" className=" lg:w-1/2"/>
                          
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 8.WATAMU BAY|| Commingle with the maasai culture and later fly to watamu bay. </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Watamu1} alt="Mara1" className=" lg:w-1/2"/>
                           
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 9: WATAMU BAY || Romantic sunset dhow to Mida Creek!</strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Cruise} alt="Mara1" className=" lg:w-1/2"/>
                           
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]"> DAY 10. WATAMDAYU BAY || Snorkeling, scuba diving and Golfing
                </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Scuba} alt=" Mara1" className=" lg:w-1/2"/>
                           
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 11. MALINDI ||game viewing at Arabuko Sokoke Forest, deep sea fishing and humpback whale excursion</strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Arabuko} alt="Mara1" className=" lg:w-1/2"/>
                           
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 12 NAIROBI || Departure</strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={HemNai} alt="Mara1" className=" lg:w-1/2"/>
                            
                        </div>,
            }
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
                <h1 className=" md:absolute md:bottom-0 text-white text-3xl lg:text-7xl font-[SourceSerifPro-Regular] z-0">LAMLAV HONEYMOON SAFARI</h1>
            </div>
            <div className=" w-full bg-red-900 md:h-[100px] h-[300px] md:flex md:flex-row flex flex-col md:justify-around justify-center md:items-center px-5">
                <div className=" md:mr-10 md:py-20">
                    <h1 className="font-[SourceSerifPro-Black] text-white">DESTINATION</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white md:flex-wrap">Kenya: Nairobi, Ol Pejeta, Maasai Mara Game reserve, Serengeti National Park, Watamu</p>
                </div>
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">DURATION</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">12days/11Nights</p>
                </div>
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">PRICE</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">From $13,055 per person</p>
                </div>
            </div>
            <div className=" p-5 lg:px-[300px]">
                <p className="font-[SourceSerifPro-Regular] lg:text-xl">
                Experience the epitome of safari luxury with this unique combination of Ol Pejeta, Maasai Mara, and Kenya's coastal Safari. Your safari adventure begins with a leisurely one-night stay at the distinctive Hemingways Hotel. A picturesque flight over the rolling plains north of Mt. Kenya lands you at the exquisite Kicheche Safari Camp in the Ol Pejeta Conservancy, offering four thrilling nights filled with diverse experiences like game drives, horseback riding, guided nature walks, cultural encounters, and birding.
                <br/><br/>The Maasai Mara National Reserve awaits with its abundance of buffalos, hippos, elephants, cheetahs, leopards, and the iconic wildebeest migration from July to October. In the North of Mara, the ultra-luxurious Ol Seki Hemingways in the Naboisho Conservancy provides unrivaled views in the Mara Triangle, complemented by first-class accommodation and activities. 
                <br/><br/>Conclude your journey with four nights of sheer indulgence at Hemingways Watamu, nestled on the pristine Watamu Beaches on Kenya's north coast. Whether you choose to relax by the beach or pool, or engage in various activities like deep-sea fishing, golfing, biking, scuba diving, snorkeling, or a romantic sunset Dhow cruise on Mida Creek, this coastal retreat offers the perfect grand finale in style.
                </p>
            </div>
           
            <div className=" flex flex-col items-center">
                <div className=" lg:flex lg:justify-around">
                    <div className=" p-10 flex flex-col flex-2">
                        <h1 className="lg:px-[200px] text-2xl mb-10 font-[SourceSerifPro-Black] text-red-900">Safari Highlights </h1>
                        <ul className=" font-[SourceSerifPro-Regular] lg:px-[200px] list-none md:text-xl space-y-4 text-left text-black">
                            <li className=" flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Experience the ultimate luxury by staying at Kenya's most opulent tented camps and lodges, the exquisite Hemmingways Collections in Nairobi, Ol Seki, and Watamu, and the magnificent Kicheche Safari Camp in Ol Pejeta</span></li>
                            <li className="flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span> Spectacular  game viewing  in  Ol Pejeta and the Maasai mara </span>
                            </li>
                          
                            <li className=" flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Down time at the prestine beaches and pleasantly  warm waters of Watamu </span></li>
                           
                            <li className=" flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Exhilarating  flights  between  the camps  and lodges  with VIP transfers </span></li>
                            
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
                                    1
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Hemingways Hotel  
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#maasaimara" className=" hover:text-red-900 md:text-xl">Ol Pejeta Conservancy </a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    4
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Kicheche Safari Camp  
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#serengeti" className=" hover:text-red-900 md:text-xl">Laboisho Conservancy</a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    2
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Ol Seki Hemingways
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Watamu </a> 
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    4
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Hemingways Watamu 
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Nairobi </a> 
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    ___
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Hemingways Hotel
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Half board
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
                                <span> Romantic sundowner experience at Crabshack Dabaso including a bottle of sparkling wine.</span>
                            </li>

                        
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span> Complimentary room upgrade to an executive suite.</span>
                            </li>
                          
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Massage in the Hemingways Spa per person.</span>

                            </li>
            
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Spectacular hot air balloon  Safari.</span>
                            </li>
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-centee space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Optional activities and excursions Individualised for you by your Safari Director</span>
                            </li>
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-centee space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Scheduled flights; Lewa/maasai mara/Nairobi.</span>
                            </li>
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-centee space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>24hour Lamlav on call support.</span>
                            </li>
                        </ul>

                        <ul className=" lg:p-5 space-y-4 text-left text-black">
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Unlimited game drives in  4 × 4 vehicles with roof hatches for game viewing.</span>
                            </li>
                          
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Transport using 4 × 4 vehicle with experienced English/French/spanish speaking driver/guide.</span>
                            </li>
                           
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Soft drinks, beer, house wines and selected spirits.</span>
                            </li>
                         
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Airport and Airstrip transfers</span>
                            </li>
                           
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Park/conservancy fees.</span></li>
                        
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Flying Doctors emergency evacuation cover.</span></li>
                          
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Mineral water on  game drives. </span></li>

                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-centee space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Daily valet laundry service.</span>
                            </li>
                        </ul>                   
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className=" flex justify-center items-center flex-col ">
                    { detailed===false?
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
            <p className='font-bold mb-2'>ARRIVAL AT NAIROBI || City On the sun</p>
            <hr/>
            <div className='lg:flex items-center justify-center'>
            
                <p className='font-[SourceSerifPro-Regular] md:text-xl lg:w-1/2'>
                Your honeymoon begins as you touch down in Kenya’s capital Nairobi. You will be met and received by your Lamlaw Safari director, who will brief you on your safari as you transfer to the lavishly elegant and refined Hemingways hotel, for overnight stay.
                </p>
            
                <img alt='Arival' loading='lazy' src={Kanairo} className=' lg:w-1/2 lg:ml-5  object-cover'/>
                
            </div>
        </div>
        <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
            <a href='/kenya/hemingways' className='flex items-center underline'>
            <FaHotel className=' mr-3'/> <p>Hemingways hotel Nairobi </p>
            </a>
            <hr className='my-5'/>



            <div>
            <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 2
            </h1>
            <p className='font-bold mb-2'>OL PEJETA CONSERVANCY || Deep into the Laikipia wilderness </p>
            <hr/>
            <div className='lg:flex items-center justify-center'>
            
                <p className='font-[SourceSerifPro-Regular] md:text-xl lg:w-1/2'>
                After enjoying a private morning breakfast, you will be transferred to the nearby Wilson aerodrome for a flight to Ol pejeta conservancy, in Laikipia south. Enjoy game drive en route to the amazing Kicheche safari camp, at the heart of Ol Pejeta conservancy, where you will spend four romantic nights! 
                            <br/><br/>Spend the rest of the day relaxing in camp, while enjoying stunning views of the arresting sceneries and wildlife, all from the comfort of your tent. A late afternoon game drive around the conservancy will give you the first taste of safari, as you will get a chance to spot the lion, rhino, elephant, buffalo, cheetah and the elusive leopard.
                                  </p>
            
                <img alt='Arival' loading='lazy' src={Kicheche} className=' lg:w-1/2 lg:ml-5  object-cover'/>
                
            </div>
        </div>
        <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
            <a href='/kenya/kicheche' className='flex items-center underline'>
            <FaHotel className=' mr-3'/> <p>Kicheche Safari Camp </p>
            </a>
            <hr className='my-5'/>


            <div>
            <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 3
            </h1>
            <p className='font-bold mb-2'>OL PEJETA CONSERVANCY || Excellent game viewing </p>
            <hr/>
            <div className='lg:flex items-center justify-center'>
            
                <p className='font-[SourceSerifPro-Regular] md:text-xl lg:w-1/2'>
                Situated in southern Laikipia, Ol Pejeta is an excellent destination for wildlife viewing.This region functions as a migration corridor for elephants and numerous other wild animals, including a substantial number of black rhinos. It is also home to various wildlife, such as cheetahs, lions, leopards, as well as rare species like wild dogs, Grevy's zebras, and reticulated giraffes. 
                                <br/><br/>Dedicate the day to exploring the region through planned game drives, providing opportunities for awe-inspiring wildlife sightings and enjoying picturesque landscapes. Take breaks for meals and relaxation. As evening falls, guests can indulge in cocktails and local beverages, savoring the breathtaking sunset and gazing at the starry skies before a romantic dinner.
                                         
                </p>
            
                <img alt='Arival' loading='lazy' src={Olpe} className=' lg:w-1/2 lg:ml-5  object-cover'/>
                
            </div>
        </div>
        <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
        <a href='/kenya/kicheche' className='flex items-center underline'>
            <FaHotel className=' mr-3'/> <p>Kicheche Safari Camp </p>
            </a>
            <hr className='my-5'/>



            
            <div>
            <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 4
            </h1>
            <p className='font-bold mb-2'>OL PEJETA CONSERVANCY || Plan your day </p>
            <hr/>
            <div className='lg:flex items-center justify-center'>
            
                <p className='font-[SourceSerifPro-Regular] md:text-xl lg:w-1/2'>
                Indulge in a range of activities provided by the camp today. Commence your day with a delightful bush breakfast, followed by a selection of thrilling adventures such as guided walking safaris, camel rides, bird watching, canoeing, hiking, mountain biking, and wildlife tracking. In the afternoon, participate in your chosen activity, and as evening descends, relish a sophisticated open-air bush dinner by a warm campfire.
                </p>
            
                <img alt='Arival' loading='lazy' src={Rhino} className=' lg:w-1/2 lg:ml-5  object-cover'/>
                
            </div>
            </div>
            <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
            <a href='/kenya/kicheche' className='flex items-center underline'>
            <FaHotel className=' mr-3'/> <p>Kicheche Safari Camp </p>
            </a>
                <hr className='my-5'/>



            <div>
            <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 5
            </h1>
            <p className='font-bold mb-2'>OL PEJETA CONSERVANCY || Armchair game viewing; day and night game drives; visit chimpanzee sanctuary </p>
            <hr/>
            <div className='lg:flex items-center justify-center'>
            
                <p className='font-[SourceSerifPro-Regular] md:text-xl lg:w-1/2'>
                After morning bush breakfast, you will have a chance to relax in the camp, enjoying its amenities, stunning hospitality and spectacular views, from the comfort of your tent. Head out on a late afternoon scenic drive and excursion to the only chimpanzee sanctuary. Return to the camp in the evening to indulge in local drinks and a delightful dinner at the camp, followed by an optional night time game drive to catch a glimpse of the elusive leopard and other nocturnal creatures like bush babies, aardvarks, and servals
                </p>
            
                <img alt='Arival' loading='lazy' src={Chipol} className=' lg:w-1/2 lg:ml-5  object-cover'/>
                
            </div>
            </div>
            <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
            <a href='/kenya/kicheche' className='flex items-center underline'>
            <FaHotel className=' mr-3'/> <p>Kicheche Safari Camp </p>
            </a>
                <hr className='my-5'/>



            <div>
            <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 6
            </h1>
            <p className='font-bold mb-2'>NABOISHO CONSERVANCY || within the wilderness of Maasai Mara north conservancy </p>
            <hr/>
            <div className='lg:flex items-center justify-center'>
            
                <p className='font-[SourceSerifPro-Regular] md:text-xl lg:w-1/2'>
                Following a delightful champagne breakfast in the bush, take the opportunity to unwind at the camp or embark on an intriguing exploration of the surroundings, perhaps on a horse ride, before lunch. Post-lunch, enjoy the swimming pool or indulge in a spa treatment while awaiting your flight transfer to the magnificent Maasai Mara National Reserve. Upon arrival at Naboishio Conservancy, receive a warm welcome and be chauffeured to the exquisite Ol Seki Hemingway’s Camp in Mara North Conservancy. In the comfort of your tent, relish refreshing cocktails while enjoying wildlife gathering on the Mara River banks for a drink. Later, embark on a late afternoon game drive in the conservancy to explore the Mara ecosystem.
                </p>
            
                <img alt='Arival' loading='lazy' src={Olseki} className=' lg:w-1/2 lg:ml-5  object-cover'/>
                
            </div>
            </div>
            <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <a href='/' className='flex items-center underline'>
                <FaHotel className=' mr-3'/> <p>Four Seasons Safari Lodge </p>
                </a>
                <hr className='my-5'/>



            <div>
            <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 7
            </h1>
            <p className='font-bold mb-2'>NABOISHO CONSERVANCY || Ultimate wildlife spectacle </p>
            <hr/>
            <div className='lg:flex items-center justify-center'>
            
                <p className='font-[SourceSerifPro-Regular] md:text-xl lg:w-1/2'>
                Enjoy the real safari experience today by searching for the Big Five animals, as well as other animals like giraffes, gazelles, and zebras. Explore the rivers, plains, and rocky areas to spot some of the smaller inhabitants of the Serengeti, such as leopard tortoises and rhinoceros beetles. Crown your day by witnessing the great migration firsthand.                                 
                </p>
            
                <img alt='Arival' loading='lazy' src={Naboisho} className=' lg:w-1/2 lg:ml-5  object-cover'/>
                
            </div>
            </div>
            <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <a href='/kenya/hemwatamu' className='flex items-center underline'>
                <FaHotel className=' mr-3'/> <p>Ol Seki Hemingways </p>
                </a>
                <hr className='my-5'/>



            <div>
            <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 8
            </h1>
            <p className='font-bold mb-2'>WATAMU BAY|| Commingle with the maasai culture and later fly to watamu bay.   </p>
            <hr/>
            <div className='lg:flex items-center justify-center'>
            
                <p className='font-[SourceSerifPro-Regular] md:text-xl lg:w-1/2'>
                On this day, you will set out on an early morning exploration of this remarkable park on a sunrise hot air balloon ride and enjoy a stunning bird’s eye view of some of its arresting sceneries and wildlife. After a leisurely breakfast, you will have a chance to relax in your luxurious tent and later make a maasai cultural visit in the manyattas, for some enthralling camaraderie with the maasai community who live around this park.  After lunch, you will fly to Hemingways Watamu in Malindi, arriving in the evening to enjoy a sundowner on the pristine white sand beaches of Watamu.
                </p>
            
                <img alt='Arival' loading='lazy' src={Watamu1} className=' lg:w-1/2 lg:ml-5  object-cover'/>
                
            </div>
            </div>
            <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <a href='/kenya/hemwatamu' className='flex items-center underline'>
                <FaHotel className=' mr-3'/> <p>Hemingways Watamu </p>
                </a>
                <hr className='my-5'/>




            <div>
            <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 9
            </h1>
            <p className='font-bold mb-2'>WATAMU BAY || Romantic sunset dhow to Mida Creek!  </p>
            <hr/>
            <div className='lg:flex items-center justify-center'>
            
                <p className='font-[SourceSerifPro-Regular] md:text-xl lg:w-1/2'>
                Hemingways Watamu is an iconic tropical paradise on the Kenyan coast sitting right in the middle of the pristine Watamu Marine National Park with its idyllic white sand beach and turquoise waters. Spend this day on the immaculate white sand beaches of Watamu bay, unwinding and relaxing as you walk your way throughout the cocktail menu. In the evening, take a sunset dhow cruise on Mida Creek- a mangrove ecosystem that is a paradise for national waterfowls and migrating birds from Europe and Eurasia.
                </p>
            
                <img alt='Arival' loading='lazy' src={Cruise} className=' lg:w-1/2 lg:ml-5  object-cover'/>
                
            </div>
            </div>
            <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
            <a href='/kenya/hemwatamu' className='flex items-center underline'>
                <FaHotel className=' mr-3'/> <p>Hemingways Watamu </p>
                </a>
                <hr className='my-5'/>



            <div>
            <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 10
            </h1>
            <p className='font-bold mb-2'>WATAMDAYU BAY || Snorkeling, scuba diving and Golfing  </p>
            <hr/>
            <div className='lg:flex items-center justify-center'>
            
                <p className='font-[SourceSerifPro-Regular] md:text-xl lg:w-1/2'>
                You will spend this day sampling some of the numerous activities offered by the resort including; snorkeling over the coral reef, master kite-surfing, diving and scuba diving. Another sunset dhow cruise on Mida Creek is another option you can revisit, as well as  golfing in the nearby world class golf course, vipingo ridge.
                 </p>
            
                <img alt='Arival' loading='lazy' src={Scuba} className=' lg:w-1/2 lg:ml-5  object-cover'/>
                
            </div>
            </div>
            <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
            <a href='/kenya/hemwatamu' className='flex items-center underline'>
                <FaHotel className=' mr-3'/> <p>Hemingways Watamu </p>
                </a>
                <hr className='my-5'/>


                <div>
            <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 11
            </h1>
            <p className='font-bold mb-2'>MALINDI ||game viewing at Arabuko Sokoke Forest, deep sea fishing and humpback whale excursion  </p>
            <hr/>
            <div className='lg:flex items-center justify-center'>
            
                <p className='font-[SourceSerifPro-Regular] md:text-xl lg:w-1/2'>
                This morning, you will venture out on deep sea fishing, and humpback whale excursion, where you will watch the majestic humpbacks migrating along the coast of east Africa. If time allows, you may take an exhilarating trip to the extraordinary Arabuko Sokoke Forest - home to some of Kenya’s rarest mammals, elephant, brilliant butterflies and saltwater mangroves
                 </p>
            
                <img alt='Arival' loading='lazy' src={Arabuko} className=' lg:w-1/2 lg:ml-5  object-cover'/>
                
            </div>
            </div>
            <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
            <a href='/kenya/hemwatamu' className='flex items-center underline'>
                <FaHotel className=' mr-3'/> <p>Hemingways Watamu </p>
                </a>
                <hr className='my-5'/>




                <div>
            <h1 className=' font-semibold text-xl mb-5 text-orange-500'>
                Day 12
            </h1>
            <p className='font-bold mb-2'> NAIROBI || Departure  </p>
            <hr/>
            <div className='lg:flex items-center justify-center'>
            
                <p className='font-[SourceSerifPro-Regular] md:text-xl lg:w-1/2'>
                Spend this morning visiting the nearby National Marine Park and Watamu turtle sanctuary, before you catch a late afternoon flight to Wilson airport Nairobi. Upon arrival, you will be transferred to hemingways hotel for day room, and later transferred to Jomo Kenyatta international airport for onward connection abroad. 
                 </p>
            
                <img alt='Arival' loading='lazy' src={Scuba} className=' lg:w-1/2 lg:ml-5  object-cover'/>
                
            </div>
            </div>
            <h1 className='font-semibold text-xl mb-2'>Accomodation</h1>
                <a href='/kenya/hemingways' className='flex items-center underline'>
                <FaHotel className=' mr-3'/> <p>Hemingways  Nairobi </p>
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
                            <img style={imageStyle} alt="1" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/96/6f/5b/hemingways-nairobi.jpg?w=700&h=-1&s=1"/>
                            <h1 className="font-bold">Hemingways Nairobi</h1>
                        </a>
                        <a href='/kenya/kicheche' className="w-1/2 ml-5 cursor-pointer hover:text-orange-500">
                        <img style={imageStyle} src="https://kicheche.com/wp-content/uploads/2023/01/kicheche-valley-triple-tent.jpg" alt="2"/>
                        <h1 className="font-bold">Kicheche Safari Camp</h1>
                        </a>
                        <a href='/kenya/hemwatamu' className="w-1/2 mr-5 cursor-pointer hover:text-orange-500">
                        <img style={imageStyle} src="https://yellowzebrasafaris.com/media/42611/ol-seki-hemingways-kenya-yellow-zebra-safaris-view.jpg" alt="3"/>
                        <h1 className="font-bold">Ol Seki Hemingways</h1>
                        </a>
                        <a href='/kenya/hemwatamu' className="w-1/2 mr-5 cursor-pointer hover:text-orange-500">
                        <img style={imageStyle} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/96/90/cf/hemingways-watamu.jpg?w=700&h=-1&s=1" alt="3"/>
                        <h1 className="font-bold">Hemingways Watamu</h1>
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

export default Honeymoon;