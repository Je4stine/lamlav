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
import Partners from "../../Partners";

const Wilderness =()=>{
    const data = {
        title: "Iteneraries",
        rows: [
            {
                title: <strong> <h1 className="  font-[SourceSerifPro-Regular]">DAY 1 ARRIVE IN NAIROBI KENYA</h1></strong>,
                content: <div className=" lg:flex lg:items-center">
                    <img src={Nairobi1} alt=" Mara1" className=" lg:w-1/2"/>
                    <div> 
                        <p className=" p-5 font-[SourceSerifPro-Regular]">
                        Your expedition begins as you touch down at Jomo Kenyatta International Airport in Nairobi. 
                        You will be warmly met and received by your Safari  Director who will thereafter facilitate your transfer to the elegant Hemmingways hotel.
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
                            <img src={Giraf} alt="Mara1" className=" lg:w-1/2 "/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            Explore the Karen Blixen Museum, Daphne Sheldrick Wildlife Trust, and the renowned Giraffe Center on this day. The Giraffe Center is home to the endangered Rothschild giraffe and stands as the sole wildlife sanctuary situated within a capital city globally.It is an amazing place to visit as offers visitors the opportunity to get up close and personal with these friendly giants.
                            <br/><br/>At giraffe center, you will get   a very unique opportunity to see, feed, handle and even kiss the tallest animal species.  

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
                            <img src={Kilima} alt="Mara1" className=" lg:w-1/2"/>
                            <div>
                                <em className=" p-5 font-[SourceSerifPro-Regular]"> There's no doubt that the Maasai Mara, which is also decorated with the great migration spectacle, is home to the highest concentration of savanna wildlife species.</em>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                        
                                Embark on a journey to Amboseli National Park, where you'll settle into the lavish Tortilis Camp nestled beneath Mount Kilimanjaro. Following lunch and a period of relaxation, venture on a late afternoon game drive to traverse the scrub brush, acacia woodland, freshwater swamps, and open plains in pursuit of wildlife.
                                <br/><br/>Amboseli is best known for its unrivalled views of Kilimanjaro and the local Elephant population. You will have an opportunity to view the elephants up-close during the morning and afternoon game drives, as they abound forests and swamps, feeding on the lush papyrus. 
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
                            <img src={Game1} alt="Mara1" className=" lg:w-1/2"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                Full day (and night) adventure in the park, loaded with unlimited game viewing, cultural visits and guided park walks culminating to an evening capped with a sundowner.
                                <br/><br/>Keep your eyes peeled  for a spectacular watch of other games including; cheetah, hippos, lion, hyenas, giraffes, zebras and wildebeest among many others. You will also get a chance to visit the ‘manyattas’ and interact with the local Maasai community as well as experience their authentic culture.
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
                            <img src={Lewa} alt="Mara1" className=" lg:w-1/2"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                Fly over to Laikipia plateau, as you enjoy the captivating  view of Mt Kenya, to the Lewa conservancy. Upon arrival, you will be transferred Lewa Safari camp for a leisurely two night stay.
                                <br/><br/>Set out for an afternoon  game  drive  through  the conservancy and keep an eye out for various native species found in the northern region, such as the black/white rhinos,sitatunga, beisa oryx, Somali ostrich, reticulated giraffe, Grevy’s zebra, and the unique long-necked gerenuk that stands on its hind legs to eat. Also, be on the lookout for Grant’s gazelles, dik-diks, elands, and impala as they wander across the vast landscape alongside impressive leopards and lions. At night, stay in luxurious tents and listen to the sounds of Africa surrounding you for a peaceful slumber
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
                            <img src={Conserve1} alt=" Mara1" className=" lg:w-1/2"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            Seize the day to explore a picturesque wildlife reserve with morning and afternoon activities like game drives, horseback rides, and guided bush-walks. Keep an eye out for a diverse array of wild animals including lions, black and white rhinoceroses, elephants, oryxes, and sitatungas. After your adventure, return to the camp to unwind on your private deck while savoring delectable meals and beverages.                            <br/>
                            <br/>
                            <stong>Accomodations:</stong><a href="/gour">Lewa Safari Camp</a> <br/>
                            <strong>Meals:</strong> Breakfast, Lunch and Dinner 
                            </p>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 7:  MAASAI MARA || a slum dunk destination    </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Palm} alt="Mara1" className=" lg:w-1/2"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                Take a scenic flight over the Great Rift Valley to the Maasai Mara National Reserve and settle into the sophisticated Mara Plains Camp for an intimate two-night retreat. 
                                <br/><br/>Witness, up-close, the remarkable Great Migration, a breathtaking natural spectacle featuring millions of wildlife, including wildebeest, Thomson gazelles, zebras, topi, and eland crossing the Mara River from Tanzania's Serengeti to Kenya's Maasai Mara in search of greener pastures. Embark on an afternoon game drive for an opportunity to observe these incredible wildlife in their natural habitat.                                 
                                <br/><br/>
                                <strong>Accomodations:</strong> <a href="/gour">Mara Plains Camp </a> <br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 8: MAASAI MARA ||  Big game exploration  </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Maara} alt="Mara1" className=" lg:w-1/2"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                Witnessing wildlife in the Maasai Mara is always captivating, and on this day, engage in morning, afternoon, and night game drives to explore the Mara ecosystem. Stay vigilant for a chance to encounter the renowned "Big Five" – lions, rhinos, elephants, buffalos, and leopards – as well as rare creatures such as copper-tailed monkeys, crested porcupines, bushbabies, and more. Keep your eyes peeled for these fascinating animals during your safari adventures.
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
                            <img src={Mara1} alt="Mara1" className=" lg:w-1/2"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                Personalize your day by participating in optional activities offered by the camp. You have the option to:
                                <br/><li>Engage with the Maasai community, visiting their manyattas to learn about their ways of life and traditions. AND/OR</li>
                                <br/><li>Embark on a hot air balloon journey over the expansive Mara Plains, immersing yourself in its scenic beauty and wildlife. Later, join fellow guests for an evening featuring a sundowner and an elegant dinner. </li>
                                    <br/>Tailor your experience with these choices to enhance your day at the camp.
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
                            <img src={Kanairo} alt=" Mara1" className=" lg:w-1/2"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            Head back to Nairobi and savor some leisure time during the afternoon in the dayroom exclusively booked for you at the Hemingways Hotel Nairobi. Subsequently, make your way to Jomo Kenyatta International Airport for your international flight.
                            <br/><br/>
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
            <div className=" p-5 lg:px-[300px] my-10">
                <p className="font-[SourceSerifPro-Regular] lg:text-xl">The Great Wilderness Safari combines three of Kenya's most iconic wildlife regions: the Amboseli National Park, celebrated for its splendid elephant population and the stunning backdrop of snow-capped Mount Kilimanjaro; the Lewa Wildlife Conservancy, known for its innovative conservation efforts; and the world-renowned Maasai Mara Game Reserve, the crown jewel of Kenya's game viewing areas. 
                <br/><br/>Luxuriate in the exquisite Hemingways Hotel in Nairobi and the Amboseli's eco-friendly Tortilis Camp, offering experiences such as sumptuous bush breakfasts, game drives, guided walking tours, birding, and sundowners. A scenic flight over the Laikipia plateau, north of Mount Kenya, takes you to Lewa Safari Camp in the Lewa Wildlife Conservancy - a globally recognized rhino conservation habitat. 
                <br/><br/>Wrap up this memorable safari experience at Mara Plains Camp in the Maasai Mara, where you'll encounter a diverse array of resident and migrating wildlife, including the world-famous annual Great Migration phenomenon.
            </p>
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
                                Lewa Safari Camp 
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
            <Partners/>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo"/>
            <Footer/>
        </div>
    )
}

export default Wilderness;