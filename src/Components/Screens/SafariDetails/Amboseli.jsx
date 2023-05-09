import React from "react";

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

const Amboseli =()=>{
    const data = {
        title: "Iteneraries",
        rows: [
            {
                title: <strong> <h1 className="  font-[SourceSerifPro-Regular]">DAY 1: ARRIVAL IN NAIROBI || Hemingways Hotel </h1></strong>,
                content: <div className=" lg:flex lg:items-center">
                    <img src={Heming} alt=" Mara1" className=" lg:w-[800px]"/>
                    <div> 
                        <p className=" p-5">
                        Your safari expedition begins immediately you touch down in Kenya’s capital Nairobi. You will be received by our Safari  director who will brief you on your safari as you transfer you to Hemingways hotel, for overnight stay.
                        Hemingways hotel is an exclusive boutique in the peaceful and exclusive Nairobi’s Karen suburbs, just 40 minutes’ drive from Jomo Kenyata International Airport, and perfectly placed for trips to the Nairobi national park and the capital. It has 45 luxurious suites of generous size, each with a private terrace, from which you can make magnificent views of the iconic silhouette of the Ngong hills as you enjoy a sundowner. 
                        <br/>
                        <br/>
                        <strong>Accommodation:</strong> <a href="/nairobi">Hemingways hotel Nairobi </a> <br/>
                        <strong>Meals:</strong> Breakfast, lunch & dinner 
                        </p>
                    </div>
                </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 2: NAIROBI NATIONAL PARK|| David Shieldrick wildlife trust |giraffe center </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Giraffe} alt="Mara1" className=" lg:w-[700px] "/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            Take an exhilarating trip to Nairobi National park and spend a memorable morning with baby orphaned elephants at David Shieldrick wildlife trust.Join the endangered Rothschild’s giraffes for a mid-morning snack at the giraffe center and later head to the  Carnivore Restaurant for a leisurely lunch, before returning to Hemingway for  relaxation, dinner and overnight.
                            <br/>
                            <br/>
                            <strong>Accommodation:</strong> <a href="/nairobi">Hemingways hotel Nairobi</a> <br/>
                            <strong>Meals:</strong> Breakfast, lunch & dinner 
                            </p>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 3: MAASAI MARA NATIONAL RESERVE || A slum-dunk destination </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Kicheche} alt="Mara1" className=" lg:w-[700px]"/>
                            <div>
                                <em className=" p-5 font-[SourceSerifPro-Regular]"> There's no doubt that the Maasai Mara, which is also decorated with the great migration spectacle, is home to the highest concentration of savanna wildlife species.</em>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                After morning breakfast, drive to the magnificent Maasai Mara national reserve, through the scenic great rift valley, arriving at Narok town for lunch, before proceeding with safari. Upon arrival at Maasai Mara, Kicheche bush camp will be your enclave of luxury in the wildest terrains of Kenya. Spend the rest of the day in the camp relaxing while overlooking the Mara River and wildlife coming to drink water. The sounds and smells on Mara will keep you enthralled and enchanted.
                                Kicheche Mara Camp is a classic tented camp hidden in a beautiful valley in a prime wildlife area of the Mara North Conservancy. The luxury tents are laid out alongside a seasonal stream (the Olare Orok stream) from where you can observe the resident birdlife and plains game beyond. Game viewing is excellent in this area.
                                <br/><br/>
                                <strong>Accomodations:</strong> <a href="/keekorok">Kicheche  Mara Camp </a><br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner <br/>
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 4: MAASAI MARA NATIONAL RESERVE|| Game drives with ultimate wildlife spectacles </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt="Mara1" className=" lg:w-[700px]"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                Maasai Mara is one of the best places in Africa to encounter big cats, and the endless plains are the setting for world’s ultimate spectacle - the great wildebeest migration. “Cheetahs and lions roam the plains, waiting for migrating wildebeest and leopards pose in its riverside fig trees” Spend full day exploring the Maasai Mara national reserve, and Mara triangle on game drives with picnic lunch hampers. Keep your eyes peeled throughout, and cameras charged for there so much to see!                                <br/><br/>
                                <strong>Accomodations:</strong> <a href="/keekorok">Kicheche  Mara Camp</a> <br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner 
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 5: MAASAI MARA NATIONAL PARK|| Plan  your  day   </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Plan} alt="Mara1" className=" lg:w-[700px]"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                Kicheche bush camp offers comprehensive activities that are designed to suit your taste and interest. This morning, enjoy a leisurely bush breakfast, and head out on a captivating walking safari around the park, with an opportunity to sight game, including the leopard and some rare species like gerenuk and beisa Oryx. Later  take a hot air balloon ride around the park and enjoy a fascinating aerial view of the park and it's abundant wildlife. A Maasai cultural visit in late afternoon, presents a chance for you to interact with the Maasai community and learn their heritage. Return to the camp in the evening for local drinks and refreshing sundowner followed by an elegant al fresco dinner around a camp fire.
                                <br/>
                                <br/>
                                <strong>Accomodations:</strong> <a href="/keekorok">Kicheche  Mara Camp</a> <br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 6: TSAVO WEST NATIONAL PARK|| Face to face with man eaters of Tsavo </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Tsavo1} alt=" Mara1" className=" lg:w-[700px]"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            After a champagne breakfast in the bush, you will have time to venture out on a final game drive for some classic views, before departing to Tsavo west national park in the afternoon via a scheduled flight. Upon arrival you will be transferred to the luxurious Finch Hatton’s Luxury Tented Camp and the rest of the day is for you to enjoy the Camp's comprehensive facilities, with a five star hospitality around.
                            <br/>
                            <br/>
                            <stong>Accomodations:</stong><a href="/gour">Finch Hatton's</a> <br/>
                            <strong>Meals:</strong> Breakfast, Lunch and Dinner 
                            </p>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 7: TSAVO WEST NATIONAL PARK|| Day long game drives| Shetani lava flows| Shiamu crater</strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Lava} alt="Mara1" className=" lg:w-[700px]"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                Tsavo west national park is one of the largest parks in Kenya, famed for its striking geographical formations, animal and bird life. Spend this day exploring the landscapes on day long game drives, with visits to Shetani lava flow and Shiamu crater, returning to the camp in between the drives for lunch and relaxation, before setting out on another game drive. Big games that roam in this park include: large herds of various antelopes, zebras, lions, cheetahs, leopards, buffalos, rhinos, giraffes etcetera. After a game drive, stop in the wild for sundowner and cocktails with spectacular views of Mt. Kilimanjaro. A truly magical experience not to be missed!                                <br/><br/>
                                <strong>Accomodations:</strong> <a href="/gour">Finch Hatton’s Luxury Tented Camp</a> <br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 8: TSAVO WEST NATIONAL PARK|| Mzima springs | Ngulia Wildlife Sanctuary </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mzima} alt="Mara1" className=" lg:w-[700px]"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                Visit the renowned Mzima springs early in the morning to observe hippos and crocodiles from an underground chamber. This area of the park is lush and provides fresh water for wildlife to gather and drink, as well as a home for aquatic species. It's best to go in the morning as hippos tend to hide during the day. After a relaxing breakfast, take a walk through the fever-tree forest to observe the diverse birdlife and other animals.
                                Next, explore the Chyulu and Ngulia hills using the park's animal trails while observing the over 600 bird species that inhabit the area, including the endangered corncrake and Basra reed warbler. Enjoy a picnic lunch before heading to the Ngulia wildlife sanctuary in the late afternoon. This sanctuary is home to endangered rhinos, and you can view them from a panoramic observation point while enjoying a sundowner at the roaring rocks.
                                <br/><br/>
                                <strong>Accomodations:</strong> <a href="/gour">Finch Hatton’s Luxury Tented Camp</a> <br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 9: TSAVO NATIONAL PARK|| bush walks| night game drives </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Finch} alt="Mara1" className=" lg:w-[700px]"/>
                            <div>
                                <p className=" p-5 font-[SourceSerifPro-Regular]">
                                In the morning, a campaign breakfast will be provided before embarking on a more daring bush walk with armed escort to explore the surrounding hinterland. After lunch, one can take advantage of the amenities offered by the camp for the remainder of the afternoon.
                                Later in the evening, a night drive will provide the opportunity to experience the sounds of the night and gaze at the starry sky while observing the nocturnal wildlife in Tsavo. Keep a lookout for leopards, civet cats, genet cats, and bush babies throughout the drive.
                                <br/>
                                <br/>
                                <strong>Accomodations:</strong> <a href="/gour">Finch Hatton’s Luxury Tented Camp</a> <br/>
                                <strong>Meals:</strong> Breakfast, Lunch and dinner
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 10: WATAMU|| Medina palms
                </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Medina} alt=" Mara1" className=" lg:w-[700px]"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            After a leisurely morning breakfast, you will game drive your way out of the park as you depart to Mombasa by road. Upon arrival in Mombasa town, you will enjoy a leisurely lunch, and spend some touring the old town, before heading to the airport for a short flight to Malindi. At Malindi airport, you will be met and transferred to the serene and exquisite medina palms resort where you will relax and unwind for the next four nights.                            
                            <br /> <br/>
                            <strong>Accomodations:</strong> <a href="#jhjh">Medina  Palms  Resort </a> <br/>
                            <strong>Meals:</strong>  Lunch and Dinner 
                             </p>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 11: WATAMU|| Mida Creek
                </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Creek} alt=" Mara1" className=" lg:w-[700px]"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            Spend this day relaxing and unwinding on the pristine white sand beaches of Watamu, while walking through the cocktail menu. In the evening, take a peaceful sun-downer cruise on Mida Creek, sailing peacefully on a romantic Swahili dhow, through a 32 sq. km tidal estuary lined with mangroves and beaches. There is abundant birdlife in this UNESCO biosphere and stunning views to enjoy along with your delicious cocktail and canopes while watching a spectacular sunset and twinkling skies                            
                            <br/><br/>
                            <strong>Accomodations:</strong> <a href="#jhjh">Medina  Palms  Resort </a> <br/>
                            <strong>Meals:</strong>  Lunch and Dinner 
                             </p>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY12: WATAMU||ArabukoSokoke forest| big game sport fishing|snorkeling|windsurfing|diving
                </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Surf} alt=" Mara1" className=" lg:w-[700px]"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            The Watamu Marine Reserve is home to some of East Africa’s best reefs for snorkeling or diving. Spend this day sampling the various sporting activities offered by medina palms, including water sports such as windsurfing, kayaking and body boarding. You can also go deep diving (if you’re an experienced diver) to explore the turtle reef and high spiking coral heads which attract large shoals of parrot fish. If you are lucky, you may catch sight of the harmless white-tip reef sharks. Big game sport fishing, with experienced fishermen is also available and you can take part in the big four catch, tag and release fishing of marlin, sailfish, swordfish and spearfish. 
                             Alternatively you can visit the neighboring Arabuko Sokoke forest, a magical reserve of great natural beauty, and home to the rarest birds, mammals, elephant, brilliant butterflies, trees alive with monkeys and saltwater mangroves
                            <br/><br/>
                            <strong>Accomodations:</strong> <a href="#jhjh">Medina  Palms  Resort </a> <br/>
                            <strong>Meals:</strong>  Lunch and Dinner 
                             </p>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 13: WATAMU|| Watamu Turtle sunctuary|Gede ruins
                </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Gedi} alt=" Mara1" className=" lg:w-[700px]"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            Take a mid-morning visit to Watamu turtle sanctuary, and the historical gede ruins in the afternoon. Gede ruins are a 12th Century Swahili village that was mysteriously abandoned some 600 years ago. A guided tour through the ruins and the museum will teach you a lot of interesting things about the fascinating culture of the Swahili people and the ancient town they constructed. Gede is heavily overgrown with beautiful indigenous forest trees, baobabs and tamarind. Take a guided walk along the nature trail network comprising 40 different species of plants and Look out for Syke's Monkeys, and the Golden Rumped Elephant Shrew that are common here.
                            <br/><br/>
                            <strong>Accomodations:</strong> <a href="#jhjh">Medina  Palms  Resort </a> <br/>
                            <strong>Meals:</strong>  Lunch and Dinner 
                             </p>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 14. DEPARTURE||Day room at Hemingways Nairobi
                </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Hemingways2} alt=" Mara1" className=" lg:w-[600px]"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            Spend this day enjoying the comprehensive facilities of the resort followed by a tour of the ancient Malindi town in the afternoon, before you catch an evening flight too Nairobi. Upon arrival at Wilson airport, you will be driven to Hemingway hotel for day room before you catch your homeward flight .                            
                            <br/><br/>
                            <strong>Accomodations:</strong> <a href="#jhjh">Hemingways  hotel  Nairobi  </a> <br/>
                            <strong>Meals:</strong>  Brakfast and Lunch 
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
                <h1 className=" md:absolute md:bottom-0 text-white text-3xl lg:text-7xl font-[SourceSerifPro-Regular] z-0">LAMLAV BUSH AND BEACH SAFARI </h1>
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

export default Amboseli;