import React from "react";

import Navbar from "../../Navbar/Navreveal";

import Mara1 from '../../../Assets/Mara1.jpg';

import Footer from "../../Footer/Footer";



import Faq from "react-faq-component";


const Migration =()=>{
    const data = {
        title: "Iteneraries",
        rows: [
            {
                title: <strong> <h1 className="  font-[SourceSerifPro-Regular]">Day 1 Arrival in Nairobi || <em> Grand Welcome to kenya</em></h1></strong>,
                content: <div className=" lg:flex md:items-center">
                    <img src={Mara1} alt=" Mara1" className=" lg:w-[1000px]"/>
                    <div> 
                        <p className=" p-5">Upon arrival at Jomo Kenyatta International Airport, you will be warmly received by your Lamlav  Safari Director who will brief you on the safari and transfer you to Norfolk hotel for overnight stay.<br/>
                                    <strong>Norfolk hotel</strong> is a luxury hotel located in the heart of the city. It boasts of 27 signature suits and 147 rooms with heated outdoor swimming pool, a health club and sybaritic spa facilities- all to  combine classic elegance and modern design with discreet technology . The luxurious suits offer an excellent choice for guests seeking to experience luxury intertwined with the rich history of the city.

                        </p>
                    </div>
                </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 2:  NAIROBI || <em>Game viewing in the city</em> </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt="Mara1" className=" lg:w-[1000px] "/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            After a hearty morning breakfast, combine wildlife and culture with a trip to the giraffe center and David Shieldrick Wildlife Trust and later to the Kazuri bead factory/national museums.<br/>
                             The Giraffe Centre is located approximately 5km from the city center and is home to the endangered Rothschild’s giraffes. At the giraffes center, you will get an opportunity interact with the world’s tallest species at close range and even feed them by hand on a raised observation platform. We shall then navigate our way to the nearby David Sheldrick Wildlife Trust; an important conservation center with an orphanage for baby elephants and rhinos.<br/>
                            Explore the better part of the afternoon with visits to the Kazuri bead factory where you will see how classic pottery beads are made, following the process from beginning to end. End the day at the national museums before returning to Norfolk hotel in the evening.
                            </p>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 3 LEWA WILDLIFE CONSERVANCY || <em>In the wilderness of Laikipia Plateau</em></strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt="Mara1" className=" lg:w-[1000px]"/>
                            <div>
                               
                                <p className=" p-5  font-[SourceSerifPro-Regular]">
                                Catch a flight at Wilson airport and fly over the Laikipia plateau, with a stunning view of the lordly Mt Kenya, to the Lewa wildlife conservancy. On touch down at Lewa airstrip you will enjoy a game drive transfer to the famous Lewa Safari Camp where you will spend three amazing nights. Arrive in time for lunch and have time to relax before setting out for an afternoon game drive to dusk. <br/>
                                <strong>Lewa safari camp </strong>offers very comfortable accommodation, with excellent food and elegant surroundings to match the views and unsurpassed game viewing of Lewa Wildlife Conservancy.
  
                                </p>
                            </div>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 4: LEWA CONSERVANCY || <em>Classic game viewing</em></strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt=" Mara1" className=" lg:w-[1000px]"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            Lewa wildlife conservancy is a world heritage center and home to diverse array of game mammals and birds. It is a vital stronghold for the approximately 400 Grevy’s Zebras and more than 120 rhinos, and  second to Maasai Mara in terms of wildlife densities. Visitors to Lewa are privy to some of the most spectacular wildlife viewing that Kenya has to offer. Prides of lion, leopard and jackal thrive on the rich diversity of prey that inhabits the area. Spend this day exploring the landscapes on scheduled morning and afternoon game drives, returning to the camp In between the drives for lunch and relaxation, before setting out for another game drive 
                            </p>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 5: LEWA CONSERVANCY || <em>Bush walks, horse or camel rides, and cultural visits</em>
                </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt=" Mara1" className=" lg:w-[1000px]"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                                After a sumptuous Champaign breakfast in the bush, you will head out to explore the beautiful terrains on a fascinating guided walk, with an armed escort. Horse rides or camel rides and cultural visits are some exciting activities that you will also have a chance to explore on this day. Your day ends with a sundowner and a delicious al fresco dinner around a campfire. 
                            </p>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 6: MAASAI MARA NATIONAL RESERVE || <em>Face to face with the great migration!</em>
                </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt=" Mara1" className=" lg:w-[1000px]"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            After a leisurely bush breakfast, you will be transferred to Lewa airstrip for a flight to the great Maasai Mara National Park. While airborne,  you  will enjoy  a captivating  aerial  view of the beautiful scenery of the Great Rift Valley and the expansive park. Upon touch down, you will be transferred to the indulgent and lush Mara Serena camp for a three night stay. Enjoy game drive en route to the camp from keekorock airstrip.<br/>
                            Arrive in time for a hearty lunch and relax while enjoying the camp’s amenities. Depart for a thrilling afternoon game drive to dusk, around the park, for a chance to view the big cats; lion, cheetah, leopard and other games like rhino, elephant, buffalo, gazelle etcetera. Return to the lodge for a comprehensive dinner around a cozy camp fire or lounge.
 
                            </p>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]"> DAY 7: MAASAI MARA NATIONAL RESERVE || <em>Breath- taking wildlife encounters</em>
                </strong>,
                content: <div className=" lg:flex md:items-center">
                            <img src={Mara1} alt=" Mara1" className=" lg:w-[1000px]"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            Maasai Mara National Reserve boasts of some the spectacular wildlife viewing in the word. All major safari animals can be found roaming in Maasai Mara, which is also home to the great migration. Every year over 1.5 million wildebeest migrate between the vast Serengeti in Tanzania and Kenya as they search for green pasture. This migration is often characterized by breathless crossings of Mara and Talek Rivers, accompanied with adrenaline charged spectacles whose drama is heightened by the crocodiles that weave gape-mouthed through the crossing herd, ready to snatch any individual that makes a false move. Spend this day exploring the Mara ecosystem on unlimited game drives, for a chance to experience these breathtaking spectacles that will always leave you breathless!
                            Brace yourself for  a spectacular wildlife migration experience and keep your eye peeled (throughout) to catch a plethora of game mammals including the big fives ( lion, elephant, rhino, leopard, buffalos) and several bird species that inhabit the expansive park.
                            </p>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 8: MAASAI MARA NATIONAL RESERVE || <em>Hippo pool bush breakfast, game drives, Maasai cultural </em>
                </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt=" Mara1" className=" lg:w-[1000px]"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            This morning, you will crown your game viewing experience with a leisurely Bush Breakfast by the Mara River Hippo Pools, before heading out for a morning game drive. Return to the lodge for lunch and indulge in spa, or a muscle relieving massage, before making a grand visit (optional) to the maasai village cget to learn their proud heritage and how they peacefully coexist with the wild animals. 
                            </p>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 9: MAASAI MARA NATIONAL RESERVE|| <em>Hot air balloon safari, star –lit bush diner</em>
                </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt=" Mara1" className=" lg:w-[1000px]"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                                This day, you will embark on an early morning game drive and later set out on a fascinating sunrise hot air balloon ride across the park, for a chance to get a stunning aerial view of the park and its game. The rest of the day is for you to enjoy the comprehensive amenities of the lodge with a five star service around you. This evening you will enjoy a star–lit bush dinner, enlivened by the presence of scarlet-clad Maasai Morans (warriors).  
                            </p>
                        </div>,
            },
            {
                title: <strong className="  font-[SourceSerifPro-Regular]">DAY 10 NAIROBI
                </strong>,
                content: <div className=" lg:flex lg:items-center">
                            <img src={Mara1} alt=" Mara1" className=" lg:w-[1000px]"/>
                            <p className=" p-5  font-[SourceSerifPro-Regular]">
                            After a hearty morning breakfast, you will get a chance to relax and enjoy armchair viewing of the arresting scenery and wildlife. Later in the afternoon, you will be driven to the airstrip  for a flight to Nairobi, where you will have a day room at Norfolk hotel and a meal before you are transferred to the airport for a flight back home..  
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
        <div className=" bg-white flex flex-col flex-1 items-center justify-center">
            <Navbar/>
            <div className=" flex flex-col items-center">
                <div>
                    <img src={Mara1} alt=" Mara Camping" className=" m-auto rounded-lg p-5 lg:px-[400px]"/>
                    <div className=" lg:px-[400px] p-10">
                        <h1 className=" font-bold">Itenerary Highlight</h1>
                        <p className=" font-[SourceSerifPro-Regular]">
                        An unabashedly  luxurious  safari, favoured  by many who  desire to to explore Africa's  legendary  savannahs,  and witness -first hand - the  breath-taking  wildebeest  migrations. This classic  Safari  covers three of Kenya’s great wildlife havens: The Nairobi National  Park, The Lewa Conservancy, in the dramatic  Laikipia Plateau,  and the iconic Maasai Mara game reserve, which is the centerpiece  of wildlife spectacles. Three exhilarating  flights between  the luxury camps and lodges  (and  back to the city) are meant  to expedite  your  travel.
                        Your leisurely stay in places like the fairmount  Norfolk  hotel at the heart of  the  city;
                         Elewana  Lewa  Safari Camp in Laikipia; and the charmingly  luxe Mara Serena lodge in Maasai Mara, will make your safari adventure  comfortable  throughout. <br/>
                         <div className=" mt-5"></div>
                         <strong className=" mt-5"> 9days/8nights,from $9000 per person</strong>
                        </p>
                    </div>
                    <div className=" lg:px-[400px] p-10">
                        <h1><strong>Included:</strong></h1>
                        <ul className=" list-disc">
                            <li>Luxury accommodation  and all meals.</li>
                            <li>Spectacular hot air balloon  Safari.</li>
                            <li>Unlimited game drives in  4  4 vehicles with roof hatches for game viewing.</li>
                            <li>Optional activities and excursions Individualised for you by your Safari Director.</li>
                            <li>Transport using 4  4 vehicle with experienced English/French/spanish speaking driver/guide.</li>
                            <li>Accommodation as shown in the itinerary. </li>
                            <li>Internet  access.</li>
                            <li> soft drinks, beer, house wines and selected spirits,</li>
                            <li> Airport and Airstrip transfers.</li>
                            <li> Park/conservancy fees.</li>
                            <li>Flying Doctors emergency evacuation cover.</li>
                            <li> Mineral water on  game drives.</li>
                            <li> Scheduled flights; Lewa/maasai mara/Nairobi.</li>
                            <li> Daily valet laundry service.</li>
                            <li> 24hour Lamlav on call support.</li>
                        </ul>
                        <h1><strong> Excluded:</strong></h1>
                        <ul className=" list-disc">
                            <li>Visa fees and International flight</li>
                            <li> Regional flights and departure taxes</li>
                            <li> Medical, Travel and baggie insurance</li>
                            <li> Inoculations and personal insurance</li>
                            <li> Tips for driver/guide/lodge/camp staff</li>
                        </ul>
                    </div>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className=" flex justify-center items-center flex-col ">
                    
                    <div className=" p-5">
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

export default Migration