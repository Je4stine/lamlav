import React from "react";

import Navbar from "../../Navbar/Navreveal";

import Mara1 from '../../../Assets/serengeti1.jpg';

import Kanairo from '../../../Assets/kanairo.jpeg';

import Giraffe from '../../../Assets/giraffe.jpg'

import Footer from "../../Footer/Footer";

import Site1 from "../../../Assets/sitemap1.png";

import Faq from "react-faq-component";

const Mara =()=>{
    const data = {
        title: "Iteneraries",
        rows: [
            {
                title: <strong> <h1 className="  font-[SourceSerifPro-Regular]">Day 1: Nairobi - Welcome to Africa’s 4th largest city </h1></strong>,
                content: <div className=" lg:flex lg:items-center">
                    <img src={Kanairo} alt=" Mara1" className=" lg:w-[800px]"/>
                    <div> 
                        <p className="p-5 font-[SourceSerifPro-Black]">Welcome to Africa’s 4th largest city </p>
                        <p className=" p-5">
                        Arrival and transfer to one of Kenya’s most luxurious hotels in the city, the Norfolk Hotel Nairobi, for a leisurely two-night  stay.             <br/>
                        <strong>Accommodation:</strong> <a href="/nairobi">Norfolk  hotel  Nairobi</a> <br/>
                        <strong>Meals:</strong> Breakfast, lunch & dinner 
                        </p>
                    </div>
                </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">Day 2: NAIROBI –David Shieldrick wildlife trust and the giraffe center </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Giraffe} alt="Mara1" className=" lg:w-[900px] "/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            <p className="font-[SourceSerifPro-Black]">Fascinating excursions and game viewing in the city </p>
                            After a leisurely morning breakfast, you will drive to the David Shieldrick Wildlife Trust, located near the Nairobi National Park, where you will be accorded an opportunity to get up close with orphaned elephants and even adopt one baby elephant. 

                            The David Shieldrick Wild Life Trust is a haven for elephant orphans, rhinos, and other animals, where they receive specialized treatment and care from a highly dedicated staff. It is managed by Daphine Shieldrick, the widow of one of Kenya’s best-known game wardens.

                            Spend the rest of your afternoon interacting with the world’s tallest species at the famous Giraffe Center, home to the endangered Rothschild’s giraffe. It is the only wildlife sanctuary in the world that is located in a city—approximately 5 kilometers from the city center. Finish your day at the national museums of Kenya before your dinner and relaxation at the Norfolk hotel.<br/>
                            <br/>
                            <strong>Accommodation:</strong> <a href="/nairobi">Norfolk  hotel  Nairobi</a> <br/>
                            <strong>Meals:</strong> Breakfast, lunch & dinner 
                            </p>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">Day 3:  MAASAI MARA GAME RESERVE -Into the untamed  wilderness </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt="Mara1" className=" lg:w-[1000px]"/>
                            <div>
                                <em className=" p-5 font-[SourceSerifPro-Regular]"> There's no doubt that the Maasai Mara, which is also decorated with the great migration spectacle, is home to the highest concentration of savanna wildlife species.</em>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                After a leisurely breakfast, you will be transferred to Wilson airport to catch a morning flight to the Maasai Mara national reserve. Upon arrival, you will be warmly received by our representative, who will then transfer you to the Luxe Keekorok lodge for a three-night expedition. Set out for an afternoon game drive after a delicious lunch in the bush, and return back to the lodge as the sun sets.
                                <br/><br/>
                                <strong>Accomodations:</strong> <a href="/keekorok">Keekorok Lodge</a><br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner <br/>
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">Day 4:  MAASAI MARA -Constant exploration  </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt="Mara1" className=" lg:w-[1000px]"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                Set out on early morning and afternoon game drives to discover an area that spans more than 600 square miles of savannas, woodlands, and rivers lined with trees. Keep your eye peeled during these drives to catch a plethora of animal species that will forever remain the most fascinating experience of your life. Experience the great migration of wildebeest and the breathless wildlife spectacles aboard comfy 4x4 vehicles. You will witness crocodiles soaking up the sun, vigilant hippos relaxing in the muddy water, and enjoy the playful activities of mischievous monkeys overhead. You'll also have the opportunity to watch African elephants moving along the edge of the forest and see giraffes stretching their necks to grab leaves from high branches                                <br/>
                                <br/><br/>
                                <strong>Accomodations:</strong> <a href="/keekorok">Keekorok Lodge</a> <br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner 
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 5: MAASAI MARA-Create your own day plan  </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt="Mara1" className=" lg:w-[1000px]"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                Go for a morning game drive and then choose from one of the following activities: A spectacular hot air balloon ride across the Mara Plains, Join a guided bird walk to spot some of the many bird species in the area, learn the art of beading from the Maasai tribe and make your own jewelry, or test your skills with the Maasai warriors and throw their traditional hunting club. 
                                Afterward, go on a late-afternoon game drive before enjoying a scenic sundowner with traditional cocktails while admiring the beautiful open plains at dusk. Share your experiences with other guests as you enjoy an evening capped with a sundowner followed by a leisurely dinner in the camp.
                                <br/>
                                <strong>Accomodations:</strong> <a href="/keekorok">Keekorok Lodge</a> <br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">Day 6 SERENGETI NATIONAL PARK -  Golden  plains </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt=" Mara1" className=" lg:w-[1000px]"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            We fly to Serengeti via Migori airstrip, then do a road connection to Tarime and fly express to Serengeti. On touch down, you will be transferred to the amazing four seasons safari lodge, for three night stay and expedition. 
                            Spend the next two days adventuring the bush, with a series of activities ranging from classic game viewing on scheduled day and night game drives, to hot air balloon rides and cultural visits to the Manyattas. Return back to the lodge in the evening to enjoy a sundowner and an elegant dinner.
                            Serengeti national park is iconic, vast and golden. It is a world heritage site located in the northern Tanzania and extends into southern Kenya where it connects with the great Maasai Mara. It is renowned for its large lion population, together with approximately over 70 mammals and 500 species of birds. At Serengeti, you will weather an epic spectacle of the great migration of millions of wildebeest, zebras, gazelles, buffalos, giraffes and other animal species crossing the Mara River in search of the sprouting pasture on the Kenyan Maasai Mara.
                            <em>“No one can return from Serengeti  unchanged, for the lions will forever prowl our memory and great heard throng our imaginations’’.</em><br/>
                            <br/>
                            <stong>Accomodations:</stong><a href="/gour">Four Seasons Safari Lodge</a> <br/>
                            <strong>Meals:</strong> Breakfast, Lunch and Dinner 
                            </p>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 7: SERENGETI NATIONAL PARK- Make friends  with tree climbing  lions of Serengeti   </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt="Mara1" className=" lg:w-[1000px]"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                    Enjoy the real safari experience today by searching for the Big Five animals, as well as other animals like giraffes, gazelles, and zebras. Explore the rivers, plains, and rocky areas to spot some of the smaller inhabitants of the Serengeti, such as leopard tortoises and rhinoceros beetles. Crown your day by witnessing the great migration firsthand. 
                                <br/><br/>
                                <strong>Accomodations:</strong> <a href="/gour">Four Seasons Safari Lodge</a> <br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">Day 8 : SERENGETI NATIONAL PARK - Visit " the lost world"  of Ngorongoro and the Mara river  </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt="Mara1" className=" lg:w-[1000px]"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                    Spend this day on an excursion visit to the great wildlife haven of Ngorongoro Crater and the famed Mara River, to observe wildlife in their most active state. The crater floor, which spans over 100 square miles, is an ideal location for observing the numerous species that inhabit the area, including buffalo and elephants. You may also be lucky enough to spot flamingos (during their season) or the elusive black rhino.
                                <br/><br/>
                                <strong>Accomodations:</strong> <a href="/gour">Four Seasons Safari Lodge</a> <br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">Day 9: SERENGETI NATIONAL PARK - Create  your  own day plan </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt="Mara1" className=" lg:w-[1000px]"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                Set out for an early morning game drive and return to the lodge to sample the various activities on offer: guided nature walks, bird watching, riding on horseback, cultural visits at the manyattas, and the spectacular hot air balloon rides.                                <br/>
                                <br/>
                                <strong>Accomodations:</strong> <a href="/gour">Four Seasons Safari Lodge</a> <br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">Day 9: NAIROBI - Wayward  connection  back home
                </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt=" Mara1" className=" lg:w-[1000px]"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            After a hearty morning breakfast, you will depart for a flight to Kenya’s capital, Nairobi, and a subsequent transfer to the Norfolk Hotel for day room service and a meal before you catch a flight back.                           
                            ,<br /> <br/>
                            <strong>Accomodations:</strong> <a href="#jhjh">Norfolk  hotel  Nairobi</a> <br/>
                            <strong>Meals:</strong>  Lunch and Dinner 
                             </p>
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


    return (
        <div className=" bg-white">
            <Navbar/>
            <div className=" relative bg-[#3c0008]">
                <img src={Mara1} alt=" Mara Camping" className=" m-auto w-full"/>
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
                    
                    <div className=" p-5 lg:px-[200px]">
                        <Faq
                            data={data}
                            styles={styles}
                            config={config}
                        />
                    </div>
                </div>
            </div> 
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo"/>
            <Footer/>
        </div>
    )
}

export default Mara;