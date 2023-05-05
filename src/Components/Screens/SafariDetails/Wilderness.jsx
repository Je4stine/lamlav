import React from "react";

import Navbar from "../../Navbar/Navreveal";

import Mara1 from '../../../Assets/tsavoo.jpg';

import Kanairo from '../../../Assets/kanairo.jpeg';

import Giraffe from '../../../Assets/giraffe.jpg'

import Footer from "../../Footer/Footer";

import Site1 from "../../../Assets/sitemap1.png";

import Nairobi1 from '../../../Assets/Nairobi1.jpg';

import Giraf from '../../../Assets/Giraf.jpg';

import Kilima from '../../../Assets/Kilima1.jpg';

import Game1 from '../../../Assets/Game1.jpg';

import Lewa from '../../../Assets/Lewa.jpg';

import Conserve1 from '../../../Assets/Conserve1.jpg';

import Palm from "../../../Assets/Palm.jpg";

import Maara from '../../../Assets/Maara.jpg';


import Faq from "react-faq-component";

const Wilderness =()=>{
    const data = {
        title: "Iteneraries",
        rows: [
            {
                title: <strong> <h1 className="  font-[SourceSerifPro-Regular]">DAY 1 ARRIVE IN NAIROBI KENYA</h1></strong>,
                content: <div className=" lg:flex lg:items-center">
                    <img src={Nairobi1} alt=" Mara1" className=" lg:w-[800px]"/>
                    <div> 
                        <p className=" p-5">
                        Your expedition begins as you touch down at Jomo Kenyatta International Airport in Nairobi. You will be warmly met and received by your Safari  Director who will thereafter transfer to the elegant Hemmingways hotel, where you will spend  two leisurely nights.
                        Hemmingways hotel is an elegant boutique  hotel  situated in the leafy suburbs of Nairobi   in the Karen area. Karen is named after Karen Christensen von Blixen -the author of the Oscar award winning film, ‘Out of Africa’, an account of her life while living in Kenya. 
                        Hemingways hotel   is designed for leisure and offers the full facilities expected in a modern day luxury boutique hotel.
                        <br/> <br/>
                        <strong>Accommodation:</strong> <a href="/nairobi">Hemingways hotel  Nairobi </a> <br/>
                        <strong>Meals:</strong> Lunch & dinner 
                        </p>
                    </div>
                </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 2 NAIROBI || Up-close Giraffes and baby  Elephants  </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Giraf} alt="Mara1" className=" lg:w-[700px] "/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            Spend this day  touring the Karen  Blixen  Muesum,  Daphine Shieldrick Wildlife Trust and the famous Giraffe Center, which is the home of the highly endangered Rothchild giraffe, and the only wildlife sanctuary in the world located within a capital city. 
                            The giraffe center started as a rehabilitation project to rescue the Rothschild giraffe,  original founded by  Jock Leslie Melville, the Kenyan grandson of a Scottish Earl, when he and his wife betty captured two baby giraffe to start a program of breeding giraffe on the Langata facility.  It is an amazing place to visit as offers visitors the opportunity to get up close and personal with these friendly giants.
                            At giraffe center, you will get   a very unique opportunity to see, feed, handle and even kiss the tallest animal species. 

                            <br/>
                            <br/>
                            <strong>Accommodation:</strong> <a href="/nairobi"> Hemingways  hotel  Nairobi </a> <br/>
                            <strong>Meals:</strong> Breakfast, lunch & dinner 
                            </p>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 3  AMBOSELI NATIONAL PARK || At the Snows of Mt Kilimanjaro</strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Kilima} alt="Mara1" className=" lg:w-[700px]"/>
                            <div>
                                <em className=" p-5 font-[SourceSerifPro-Regular]"> There's no doubt that the Maasai Mara, which is also decorated with the great migration spectacle, is home to the highest concentration of savanna wildlife species.</em>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                Drive to Amboseli national park and check-in  at the Luxarious Tortilis camp, situated beneath Mount Kilimanjaro.  After lunch and relaxation, you will head out on a late afternoon game drive to explore the scrub brush, acacia woodland, freshwater swamps and open plains in search of wildlife.
                                Amboseli is a Maasai word meaning ‘salty water’ and is best known for its unrivalled views of Kilimanjaro and the local Elephant population. You will have an opportunity to view the elephants up-close during the morning and afternoon game drives, as they abound forests and swamps, feeding on the lush papyrus
                                <br/><br/>
                                <strong>Accomodations:</strong> <a href="/keekorok">Tortilis  Camp</a><br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner <br/>
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 4:  AMBOSELI NATIONAL PARK || Classic  game  viewing   </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Game1} alt="Mara1" className=" lg:w-[700px]"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                Full day (and night) adventure in the park, loaded with unlimited game viewing, cultural visits and guided park walks culminating to an evening capped with a sundowner.
                                Keep your eyes peeled  for a spectacular watch of other games including; cheetah, hippos, lion, hyenas, giraffes, zebras and wildebeest among many others. You will also get a chance to visit the ‘manyattas’ and interact with the local Maasai community as well as experience their authentic culture.
                                <br/><br/>
                                <strong>Accomodations:</strong> <a href="/keekorok">Tortilis  Camp</a> <br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner 
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 5 : LEWA WILDLIFE CONSERVANCY || Home to the ‘Grand lady’  </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Lewa} alt="Mara1" className=" lg:w-[700px]"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                Fly over to Laikipia plateau, as you enjoy the captivating  view of Mt Kenya, to the Lewa conservancy. Upon arrival, you will be transferred Lewa Safari camp for a leisurely two night stay.
                                Set out for an afternoon  game  drive  through  the conservancy and keep an eye out for various native species found in the northern region, such as the black/white rhinos,sitatunga, beisa oryx, Somali ostrich, reticulated giraffe, Grevy’s zebra, and the unique long-necked gerenuk that stands on its hind legs to eat. Also, be on the lookout for Grant’s gazelles, dik-diks, elands, and impala as they wander across the vast landscape alongside impressive leopards and lions. At night, stay in luxurious tents and listen to the sounds of Africa surrounding you for a peaceful slumber

                                <br/>
                                <br/>
                                <strong>Accomodations:</strong> <a href="/keekorok">Lewa Safari Camp</a> <br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 6:  LEWA WILDLIFE CONSERVANCY || Deep into the Laikipia  wilderness </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Conserve1} alt=" Mara1" className=" lg:w-[700px]"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                                Today, you have the opportunity to spend the morning and afternoon exploring a beautiful wildlife reserve, on game drives,  horseback rides,  and guided bush-walks. Be on the lookout for various wild animals such as lions, black and white rhinoceroses, elephants, oryxes, and sitatungas. Return  to the camp after your adventure, to relax on your private deck while enjoying delicious  meals and drinks.
                            <br/>
                            <br/>
                            <stong>Accomodations:</stong><a href="/gour">Lewa Safari Camp</a> <br/>
                            <strong>Meals:</strong> Breakfast, Lunch and Dinner 
                            </p>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 7:  MAASAI MARA || a slum dunk destination    </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Palm} alt="Mara1" className=" lg:w-[700px]"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                Fly over the Great Rift Valley to the great maasai Mara national reserve and check  in at the elegant Plains Camp for a two night intimate  stay and relaxation. 
The great migration is one of the most impressive natural events involving 2million wildebeest, 500000 Thomson gazelles, 200,000 Zebras, 97000 tupi and 18000 eland crossing the mara river from Serengeti in Tanzania to Kenya’s masai mara reserve, in search of greener pasture.Set out for an afternoon  game  drive for a chance  to spot some of these amazing  wildlife.                                 <br/><br/>
                                <strong>Accomodations:</strong> <a href="/gour">Mara Plains Camp </a> <br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 8: MAASAI MARA ||  Big game exploration  </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Maara} alt="Mara1" className=" lg:w-[700px]"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                Game viewing is never dull in the Maasai Mara, and you will spend this day  exploring the  mara eco-system on morning  and afternoon and night  game drives. Keep your  eyes  peeled  for  an opportunity  to spot the iconic " Big Fives" which includes: lions, rhinos,  elephants,  buffalos and leopards; as well as some  rare creatures  like the copper  tailed  monkeys, crested  porcupine, bushbaby etc.                                
                                <br/><br/>
                                <strong>Accomodations:</strong> <a href="/gour">Mara Plains Camp</a> <br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 9: MAASAI MARA || Plan your  day  </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt="Mara1" className=" lg:w-[700px]"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                Design  your day by sampling  some of the optional  activities that the camp provides. You may choose  to:
                                Visit and interact  with the Maasai  community  in the manyattas, learning their  ways of life and traditions. AND/OR
                                Set out on a hot air balloon  ride over the sprawling  mara Plains to explore  it's  scenic  beauty and wildlife, before you enjoin fellow guest for  an evening capped with a sundowner followed by an elegant dinner.
                                <br/>
                                <br/>
                                <strong>Accomodations:</strong> <a href="/gour">Mara Plains Camp</a> <br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 10: NAIROBI || Wayward  connection to other parts of the world 
                </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Kanairo} alt=" Mara1" className=" lg:w-[700px]"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            Return to Nairobi and enjoy some free time in the afternoon in the dayroom  reserved for you at the hemmingways  hotel  Nairobi. Afterwards, proceed to the  Jomo  Kenyatta  International  Airport for your international flight.                            <br /> <br/>
                            <strong>Accomodations:</strong> <a href="#jhjh">Hemingways hotel Nairobi </a> <br/>
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
                <h1 className=" md:absolute md:bottom-0 text-white text-3xl lg:text-7xl font-[SourceSerifPro-Regular] z-0">LAMLAV GREAT WILDERNESS  SAFARI</h1>
            </div>
            <div className=" w-full bg-red-900 md:h-[100px] h-[300px] md:flex md:flex-row flex flex-col md:justify-around justify-center md:items-center px-5">
                <div className=" md:mr-10 md:py-20">
                    <h1 className="font-[SourceSerifPro-Black] text-white">DESTINATION</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white md:flex-wrap">Kenya: Nairobi, Amboseli, Lewa Safari Camp, Maasai Mara</p>
                </div>
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">DURATION</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">10days/9 nights</p>
                </div>
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">PRICE</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">From $13,241 per person</p>
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
                                     Hemmingways Nairobi   
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#maasaimara" className=" hover:text-red-900 md:text-xl">Amboseli  </a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    2
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Elewana Tortilis camp 
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#serengeti" className=" hover:text-red-900 md:text-xl">Lewa Safari Camp</a>
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    2
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Elewana Tortilis camp  
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                    Full board
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href="#Nairobi" className=" hover:text-red-900 md:text-xl">Maasai Mara </a> 
                                </th>
                                <td className="px-6 py-4 md:text-xl">
                                    3
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Mara plains camp  
                                </td>
                                <td className="px-6 py-4 md:text-xl">
                                Full board
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
                                <span>Accomodations  at the crème de la crème camps  and  lodges. </span></li>
                            <li className="flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Three exhilarating flights between the camps  to expedite your  travel.</span>
                            </li>
                          
                            <li className=" flex items-center space-x-3"> 
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span> Classic  game  viewing  thrill at Amboseli,  Lewa Conservancy  and Maasai Mara with spectacular hot air balloon  rides across  the mara plains</span></li>
                                                       
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
                                <span>Spectacular Hot air balloon  Safari</span>
                            </li>
                        
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span> Unlimited  game drives in camps using 4  4 vehicles with roof hatches for game viewing</span>
                            </li>

                        
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span> Transport using  4  4 vehicle with experienced English/French/Spanish speaking driver/guide</span>
                            </li>
                          
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Accommodation as shown in the itinerary</span>

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

                                <span>Scheduled flights;Amboseli/Lewa/Mara/Nairobi</span>
                            </li>
                           
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>24 hour Lamlav Safaris on call support</span></li>
                        
                            <li className=" font-[SourceSerifPro-Regular] mb-3 md:text-xl flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                <span>Laundry services  where  included  </span></li>
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

export default Wilderness;