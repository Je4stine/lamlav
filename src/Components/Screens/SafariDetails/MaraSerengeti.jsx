import React from "react";

import Navbar from "../../Navbar/Navreveal";

import Mara1 from '../../../Assets/beast1.jpg';

import Kanairo from '../../../Assets/kanairo.jpeg';

import Giraffe from '../../../Assets/giraffe.jpg'

import Footer from "../../Footer/Footer";




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
        <div className=" bg-white flex flex-col flex-1 items-center justify-center">
            <Navbar/>
            <div className=" flex flex-col items-center">
                <p>Mara Serengeti</p>
                <div>
                    <img src={Mara1} alt=" Mara Camping" className=" m-auto rounded-lg p-5 lg:px-[400px]"/>
                    <div className=" lg:px-[400px] p-10">
                        <h1>Itenerary Highlight</h1>
                        <p className=" font-[SourceSerifPro-Regular]">
                            <strong>DAY I. NAIROBI</strong> <br/>
                            Arrival and transfer to the luxurious Norfolk Hotel Nairobi for overnight stay.<br/>
                            <strong>DAY 2. NAIROBI </strong> <br/>
                            Excursions in the city with visits to David shieldrick wildlife trust, the giraffe center and national museums of Kenya. Return back to Norfolk hotel in the evening<br/>
                            <strong>DAY 3. MAASAI MARA GAME RESERVES.</strong> <br/>
                            Transfer to Wilson Airport, after morning breakfast, for a flight to maasai mara. Upon touch down at keekorok airstrip, you will be transferred to the iconic keekorock lodge for check in. Enjoy game drive en route and in the afternoon after a hearty lunch. Return back in the evening for dinner and relaxation.<br/>
                            <strong>DAY 4-5. MAASAI MARA </strong><br/>
                            Spend the next two days adventuring the bush, with a series of activities ranging from classic game viewing on scheduled day and night game drives, to hot air balloon rides and cultural visits to the manyattas. Return back to the lodge in the evening to enjoy a sundowner and an elegant dinner.<br/>
                            <strong>DAY 6 SERENGETI NATIONAL PARK. </strong><br/>
                            Fly to Serengeti and be transferred to the amazing four seasons safari camp.<br/>
                            <strong>DAY 7-8 SERENGETI NATIONAL PARK.</strong><br/>
                            Spend two days and nights searching for wildlife in the fascinating ecosystem of Serengeti, on unlimited day and night game drives. Experience the great migration and the breathless wildlife spectacles.<br/>
                            <strong>DAY 9. NAIROBI</strong><br/>
                            Depart for a flight to Kenya’s capital Nairobi, after a leisurely breakfast and transfer to Norfolk for day room service before you catch a flight back.<br/>
                        </p>
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

export default Mara