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
                title: <strong> <h1 className="  font-[SourceSerifPro-Regular]">Day 1: Nairobi</h1></strong>,
                content: <div className=" lg:flex lg:items-center">
                    <img src={Kanairo} alt=" Mara1" className=" lg:w-[800px]"/>
                    <div> 
                        <p className=" p-5">Arrival and transfer to one of Kenya’s most luxurious hotels in the city; The Norfolk hotel Nairobi <br/>
                           <strong> Included:</strong>
                            Full board accommodation; Bed, dinner breakfast and lunch
                        </p>
                    </div>
                </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">Day 2: NAIROBI –David Shieldrick wildlife trust and the giraffe center </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Giraffe} alt="Mara1" className=" lg:w-[900px] "/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            After a leisurely breakfast, you will drive to David Shieldrick wildlife trust located near the Nairobi national park where you will be accorded an opportunity to get up close with orphaned elephants and even adopt one baby elephant. 
                            David Shieldric wild life trust is a haven to elephant’s orphans, rhinos and other animals, where they receive specialized treatment and care from a highly dedicated staff. It is managed by Daphine Shieldrick, the widow of one of Kenya’s best known game warden.
                            From the trust, we will navigate our way to the giraffe center, a home to the endangered Rothschild’s giraffe, where you will spend the rest of your afternoon interacting with the world’s tallest species. It is the only wildlife sanctuary in the world that is located in a city - approximately 5k from the city center. Finish your day at the national museums of Kenya before you settle for dinner at Norfolk hotel 

                            </p>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">Day 3-5:  MAASAI MARA GAME RESERVE</strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt="Mara1" className=" lg:w-[1000px]"/>
                            <div>
                                <em className=" p-5  font-[SourceSerifPro-Regular]">Home to the highest concentration of savanna wildlife species, decorated with the great migration spectacle.</em>
                                <p className=" p-5  font-[SourceSerifPro-Regular]">
                                After a leisurely breakfast, you will be transferred to Wilson airport to catch a morning flight to the Maasai Mara national reserve. Upon arrival, you will be warmly received by our representative who will then transfer you to the Luxe Keekorok lodge for a three night expedition. Set out for an afternoon game drive after a delicious lunch in the bush, and return back to the lodge as the sun sets.
                                For the two next days,  venture out on  early morning and afternoon game drives in the vast Mara conservancy as you keep your eye peeled to catch a plethora of animal species that will forever remain the most fascinating experience in your life. Experience the great migration of wildebeest and the breathless wildlife spectacles, aboard comfy 4x4 vehicles. At an additional cost, you may choose to go on a hot air balloon ride above the plains of Mara for a more wonderful catch of the wildlife. You can  also pay a visit to the Manyattas and experience the unique and authentic culture of the Maasai community living around the park. Share your experiences with other guests as you enjoy an evening capped with a sundowner followed by a leisurely dinner in the camp  
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">Day 6 - 8 SERENGETI NATIONAL PARK</strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt=" Mara1" className=" lg:w-[1000px]"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            We fly to Serengeti via Migori airstrip, then do a road connection to Tarime and fly express to Serengeti. On touch down, you will be transferred to the amazing four seasons safari lodge, for three night stay and expedition. 
                            Spend the next two days adventuring the bush, with a series of activities ranging from classic game viewing on scheduled day and night game drives, to hot air balloon rides and cultural visits to the Manyattas. Return back to the lodge in the evening to enjoy a sundowner and an elegant dinner.
                            Serengeti national park is iconic, vast and golden. It is a world heritage site located in the northern Tanzania and extends into southern Kenya where it connects with the great Maasai Mara. It is renowned for its large lion population, together with approximately over 70 mammals and 500 species of birds. At Serengeti, you will weather an epic spectacle of the great migration of millions of wildebeest, zebras, gazelles, buffalos, giraffes and other animal species crossing the Mara River in search of the sprouting pasture on the Kenyan Maasai Mara.
                            “No one can return from Serengeti  unchanged, for the lions will forever prowl our memory and great heard throng our imaginations’’. 
                            </p>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">Day 9. BACK TO NAIROBI AND CONNECT TO OTHER PARTS OF THE WORLD.
                </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt=" Mara1" className=" lg:w-[1000px]"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            After a hearty morning breakfast, you will depart for a flight to Kenya’s capital Nairobi and subsequent transfer to Norfolk hotel day room service and a meal before you catch a flight back. 
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
                <h1 className=" md:absolute md:bottom-0 text-white text-3xl lg:text-7xl font-[SourceSerifPro-Regular] z-0">Lamlav Mara Serengeti Deluxe</h1>
            </div>
            <div className=" w-full bg-red-900 md:h-[100px] h-[300px] md:flex md:flex-row flex flex-col md:justify-around justify-center md:items-center px-5">
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">DESTINATION</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">Kenya: Nairobi, Maasai Mara Game reserve, Serengeti National Park</p>
                </div>
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">DURATION</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">10days/9 nights</p>
                </div>
                <div>
                    <h1 className="font-[SourceSerifPro-Black] text-white">PRICE</h1>
                    <p className="font-[SourceSerifPro-Regular] text-white">$ 9,700 per person</p>
                </div>
            </div>
            <div className=" p-5 lg:px-[300px]">
                <h1 className=" font-[SourceSerifPro-Black] text-2xl mb-10">ACCOMMODATION OVERVIEW</h1>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Destination
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Night
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Accomodation
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Nairobi  
                                </th>
                                <td className="px-6 py-4">
                                    2
                                </td>
                                <td className="px-6 py-4">
                                    Norfolk hotel Nairobi  
                                </td>
                                <td className="px-6 py-4">
                                    Full board
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Maasai Mara 
                                </th>
                                <td className="px-6 py-4">
                                    3
                                </td>
                                <td className="px-6 py-4">
                                    Keekorok camp  
                                </td>
                                <td className="px-6 py-4">
                                    Full board
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Serengeti  
                                </th>
                                <td className="px-6 py-4">
                                    4
                                </td>
                                <td className="px-6 py-4">
                                Four seasons safari lodge  
                                </td>
                                <td className="px-6 py-4">
                                    Full board
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Nairobi 
                                </th>
                                <td className="px-6 py-4">
                                    ___
                                </td>
                                <td className="px-6 py-4">
                                Norfolk hotel Nairobi  
                                </td>
                                <td className="px-6 py-4">
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
                        <h1 className="lg:px-[200px] text-2xl mb-10 font-[SourceSerifPro-Black]">Safari Highlights </h1>
                        <ul className=" font-[SourceSerifPro-Regular] lg:px-[200px] list-disc">
                            <li>Up close  with giraffes  and baby  elephants  at the heart  of Nairobi  city </li>
                            <br/>
                            <li> Seven exhilarating  nights  at the epicentre  of great wildebeest  migration  spectacle - the great maasai mara and Serengeti </li>
                            <br/>
                            <li> Three exhilarating  flights  to expedite  your  travel between  the camps</li>
                            <br/>
                            <li>Accommodations  at East Africa’s  most luxurious tented  camps and lodges including,  the iconic  Keekorok  lodge and the beguiling  Four  Seasons  Safari  Lodge.</li>
                            <br/>
                        </ul>
                    </div>
                    <div>
                        <img src={Site1} alt="Sample site maps" className=" lg:h-[500px] lg:w-[1200px]"/>
                    </div>
                </div>
                <h1 className="text-2xl mb-10 font-[SourceSerifPro-Black]">Included</h1>
                <div className=" lg:flex lg: justify-between p-5">
                        <div className=" lg:p-5">
                            <li className=" font-[SourceSerifPro-Regular]">Bush breakfast, Sundowner and all beverages  as provided</li>
                            <li className=" font-[SourceSerifPro-Regular]">House wines and local beers/spirits</li>
                            <li className=" font-[SourceSerifPro-Regular]">Unlimited game drives in camps 4 X 4 vehicles with roof hatches for game viewing</li>
                            <li className=" font-[SourceSerifPro-Regular]">Transport using  4  4 vehicle with experienced English/French/Spanish speaking driver/guide</li>
                            <li className=" font-[SourceSerifPro-Regular]">Finnest accommodation in the most authentic  camps and lodges shown in the itinerary</li>
                            <li className=" font-[SourceSerifPro-Regular]">Airport and Airstrip transfers</li>
                        </div>
                        <div className=" lg:p-5">
                            <li className=" font-[SourceSerifPro-Regular]">Park/conservancy fees</li>
                            <li className=" font-[SourceSerifPro-Regular]">Flying Doctors emergency evacuation cover</li>
                            <li className=" font-[SourceSerifPro-Regular]">Mineral water on  game drives</li>
                            <li className=" font-[SourceSerifPro-Regular]">Scheduled flights;maasai mara/serengeti/Nairobi</li>
                            <li className=" font-[SourceSerifPro-Regular]">24hour Lamlav Safaris on call support</li>
                            <li className=" font-[SourceSerifPro-Regular]">Optional activities  and excursions </li>
                            <li className=" font-[SourceSerifPro-Regular]">Telephone  calls and laundry services </li>
                        </div>                   
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

export default Mara