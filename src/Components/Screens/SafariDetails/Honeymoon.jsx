import React from "react";

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

const Honeymoon =()=>{
    const data = {
        title: "Iteneraries",
        rows: [
            {
                title: <strong> <h1 className="  font-[SourceSerifPro-Regular]">DAY 1: ARRIVAL AT NAIROBI || City On the sun </h1></strong>,
                content: <div className=" lg:flex lg:items-center">
                    <img src={Kanairo} alt=" Mara1" className=" lg:w-1/2"/>
                    <div> 
                        <p className="p-5 font-[SourceSerifPro-Black]">Welcome to Africa’s 4th largest city </p>
                        <p className=" p-5 font-[SourceSerifPro-Regular]">
                            Your honeymoon begins as you touch down in Kenya’s capital Nairobi. You will be met and received by your Lamlaw Safari director, who will brief you on your safari as you transfer to the lavishly elegant and refined Hemingways hotel, for overnight stay.
                            Hemingways hotel is an exclusive boutique in the peaceful and exclusive Nairobi’s Karen suburbs, just 40 minutes drive from Jomo kenyata International Airport, and is perfectly placed for trips to the Nairobi national park and the capital. It has 45 luxurious suites of generous size, each with a private terrace, from which you can make magnificent views of the iconic silhouette of the Ngong hills as you enjoy a sundowner. Arrive and relax while enjoying the Hotel's excellent amenities.
                            <br/>
                            <br/>
                        <strong>Accommodation:</strong> <a href="/nairobi">Hemingways hotel Nairobi </a> <br/>
                        <strong>Meals:</strong> Breakfast, lunch & dinner 
                        </p>
                    </div>
                </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 2: OL PEJETA CONSERVANCY || Deep into the Laikipia wilderness </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Kicheche} alt="Mara1" className=" lg:w-1/2"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            <p className="font-[SourceSerifPro-Black]"> </p>
                                After enjoying a private morning breakfast, you will be transferred to the nearby Wilson aerodrome for a flight to Ol pejeta conservancy, in Laikipia south. Enjoy game drive en route to the amazing Kicheche safari camp, at the heart of Ol Pejeta conservancy, where you will spend four romantic nights! Spend the rest of the day relaxing in camp, while enjoying stunning views of the arresting sceneries and wildlife, all from the comfort of your tent. A late afternoon game drive around the conservancy will give you the first taste of safari, as you will get a chance to spot the lion, rhino, elephant, buffalo, cheetah and the elusive leopard.                            
                                <br/>
                                <br/>
                            <strong>Accommodation:</strong> <a href="/nairobi">Kicheche Safari Camp </a> <br/>
                            <strong>Meals:</strong> Breakfast, lunch & dinner 
                            </p>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 3: OL PEJETA CONSERVANCY || Excellent game viewing </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Olpe} alt="Mara1" className=" lg:w-1/2"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                Ol Pejeta, located in southern Laikipia, is a wildlife sanctuary that is home to a significant population of black rhinos, along with other animals such as elephants, cheetahs, lions, leopards, and some rare species like wild dogs, Grevy's zebras, and reticulated giraffes. This region is an ideal wildlife viewing destination, as it serves as a migration corridor for elephants and thousands of other wild animals. The day can be spent exploring the area on scheduled game drives to witness breathtaking wildlife encounters and scenic views, with breaks in between for meals and relaxation. In the evening, before a romantic dinner, guests can enjoy cocktails and local drinks while admiring the stunning sunset and starry skie                                
                                <br/><br/>
                                <strong>Accomodations:</strong> <a href="/keekorok">Kicheche Safari Camp</a><br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner <br/>
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 4: OL PEJETA CONSERVANCY || Plan your day  </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Rhino} alt="Mara1" className=" lg:w-1/2"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                Today, you'll have the opportunity to enjoy a variety of activities offered at the camp. Begin with a delicious breakfast in the bush, then choose from guided walking safaris, camel rides, bird watching, canoeing, hiking, mountain biking, and wildlife tracking for a thrilling adventure. In the afternoon, engage in your preferred activity, and later in the evening, savor an elegant alfresco bush dinner around a cozy campfire.                                 <br/><br/>
                                <strong>Accomodations:</strong> <a href="/keekorok">Kicheche Safaric Camp</a> <br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner 
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 5:  OL PEJETA CONSERVANCY || Armchair game viewing; day and night game drives; visit chimpanzee sanctuary </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Chipol} alt="Mara1" className=" lg:w-1/2"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                After morning bush breakfast, you will have a chance to relax in the camp, enjoying its amenities, stunning hospitality and spectacular views, from the comfort of your tent. Head out on a late afternoon scenic drive and excursion to the only chimpanzee sanctuary. Return to the camp in the evening to indulge in local drinks and a delightful dinner at the camp, followed by an optional night time game drive to catch a glimpse of the elusive leopard and other nocturnal creatures like bush babies, aardvarks, and servals
                                <br/><br/>
                                <strong>Accomodations:</strong> <a href="/keekorok">Kicheche  Safari  Camp </a> <br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 6: NABOISHO CONSERVANCY || within the wilderness of Maasai Mara north conservancy</strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Olseki} alt=" Mara1" className=" lg:w-1/2"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                                After enjoying a leisurely champagne breakfast in the bush, you will have a chance to relax at the camp or set out on a fascinating tour of the surrounding, perhaps on a horse ride, before lunch. After lunch, you may indulge in the swimming pool or spa treatment, as you wait for your flight transfer to the magnificent Maasai Mara National Reserve.  Upon arrival, at Naboishio conservancy, you will be warmly received and driven to the exquisite Ol Seki Hemingway’s camp, in Mara north conservancy, where you will relax in your tent with refreshing cocktails, as you enjoy armchair viewing of wildlife gathering on the banks of Mara River to drink water. You will later set out on an exploration tour of the Mara ecosystem on a late afternoon game drive in the conservancy.
                            <br/>
                            <br/>
                            <stong>Accomodations:</stong><a href="/gour"> Ol Seki Hemingways </a> <br/>
                            <strong>Meals:</strong> Breakfast, Lunch and Dinner 
                            </p>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 7. NABOISHO CONSERVANCY || Ultimate wildlife spectacle  </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Naboisho} alt="Mara1" className=" lg:w-1/2"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                Naboisho in mara north conservancy, boarders the great Maasai Mara national reserve to the south. The conservancy is an important migration corridor for hundred thousand animals between Maasai Mara game reserve and the Loita plains in the east.This region boasts of higher wildlife density than maasai mara and is home to the highest density of lion In Africa. Spend this day exploring the terrains of the Maasai Mara National Reserve and the Mara triangle, with a romantic picnic hamper.  Experience firsthand, the great wildebeest migration and some breathtaking wildlife spectacles that this region is famed for. Return back in time and enjoy an evening capped with   refreshing local drinks and sundowner, followed by a sumptuous al fresco dinner around an intimate camp fire.                                <br/><br/>
                                <strong>Accomodations:</strong> <a href="/gour">Ol Seki Hemingways</a> <br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 8.WATAMU BAY|| Commingle with the maasai culture and later fly to watamu bay. </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Watamu1} alt="Mara1" className=" lg:w-1/2"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                On this day, you will set out on an early morning exploration of this remarkable park on a sunrise hot air balloon ride and enjoy a stunning bird’s eye view of some of its arresting sceneries and wildlife. After a leisurely breakfast, you will have a chance to relax in your luxurious tent and later make a maasai cultural visit in the manyattas, for some enthralling camaraderie with the maasai community who live around this park.  After lunch, you will fly to Hemingways Watamu in Malindi, arriving in the evening to enjoy a sundowner on the pristine white sand beaches of Watamu.                                <br/><br/>
                                <strong>Accomodations:</strong> <a href="/gour">Hemingways Watamu</a> <br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 9: WATAMU BAY || Romantic sunset dhow to Mida Creek!</strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Cruise} alt="Mara1" className=" lg:w-1/2"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                Hemingways Watamu is an iconic tropical paradise on the Kenyan coast sitting right in the middle of the pristine Watamu Marine National Park with its idyllic white sand beach and turquoise waters. Spend this day on the immaculate white sand beaches of Watamu bay, unwinding and relaxing as you walk your way throughout the cocktail menu. In the evening, take a sunset dhow cruise on Mida Creek- a mangrove ecosystem that is a paradise for national waterfowls and migrating birds from Europe and Eurasia.                                <br/>
                                <strong>Accomodations:</strong> <a href="/gour">Hemingways  Watamu </a> <br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]"> DAY 10. WATAMDAYU BAY || Snorkeling, scuba diving and Golfing
                </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Scuba} alt=" Mara1" className=" lg:w-1/2"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            You will spend this day sampling some of the numerous activities offered by the resort including; snorkeling over the coral reef, master kite-surfing, diving and scuba diving. Another sunset dhow cruise on Mida Creek is another option you can revisit, as well as  golfing in the nearby world class golf course, vipingo ridge                            ,<br /> <br/>
                            <strong>Accomodations:</strong> <a href="#jhjh">Hemingways  Watamu</a> <br/>
                            <strong>Meals:</strong>  Lunch and Dinner 
                             </p>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 11. MALINDI ||game viewing at Arabuko Sokoke Forest, deep sea fishing and humpback whale excursion</strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Arabuko} alt="Mara1" className=" lg:w-1/2"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                This morning, you will venture out on deep sea fishing, and humpback whale excursion, where you will watch the majestic humpbacks migrating along the coast of east Africa. If time allows, you may take an exhilarating trip to the extraordinary Arabuko Sokoke Forest - home to some of Kenya’s rarest mammals, elephant, brilliant butterflies and saltwater mangroves                                
                                <br/><br/>
                                <strong>Accomodations:</strong> <a href="/gour">Hemingways  Watamu </a> <br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 12 NAIROBI || Departure</strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={HemNai} alt="Mara1" className=" lg:w-1/2"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                Spend this morning visiting the nearby National Marine Park and Watamu turtle sanctuary, before you catch a late afternoon flight to Wilson airport Nairobi. Upon arrival, you will be transferred to hemingways hotel for day room, and later transferred to Jomo Kenyatta international airport for onward connection abroad. 
                                <br/><br/>
                                <strong>Accomodations:</strong> <a href="/gour">Hemingways Nairobi</a> <br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner
                                </p>
                            </div>
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
                    <p className="font-[SourceSerifPro-Regular] text-white md:flex-wrap">Kenya: Nairobi, Maasai Mara Game reserve, Serengeti National Park</p>
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
                    <div className=" flex flex-col items-center text-2xl my-10">
                        <h1 className=" font-[SourceSerifPro-Black] text-red-900">Site map</h1>
                        <img src={Site1} alt="Sample site maps" className=" lg:h-[500px] lg:w-[1200px]"/>
                    </div>
                </div>
                <h1 className="text-2xl mb-10 font-[SourceSerifPro-Black] text-red-900">Included</h1>
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
                    
                    <div className=" p-5 lg:px-[200px]">
                        <Faq
                            data={data}
                            styles={styles}
                            config={config}
                        />
                    </div>
                </div>
            </div> 
                <Partners/>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo"/>
            <Footer/>
        </div>
    )
}

export default Honeymoon;