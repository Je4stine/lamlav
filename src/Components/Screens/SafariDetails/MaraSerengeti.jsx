import React, { useState} from "react";

import Navbar from "../../Navbar/Navreveal";

import Mara1 from '../../../Assets/Mara1.jpg';

import Footer from "../../Footer/Footer";

import {MdKeyboardArrowDown} from 'react-icons/md';


const Mara =()=>{
    const [day1, setDay1]= useState(false);

    function toggle (){
        setDay1(!day1)
    }
    return (
        <div className=" bg-white flex flex-col flex-1 items-center justify-center">
            <Navbar/>
            <div className=" flex flex-col items-center">
                <p>Mara 1</p>
                <div>
                    <img src={Mara1} alt=" Mara Camping" className=" m-auto rounded-md"/>
                    <div className=" md:px-[400px] p-10">
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
                <h1>Itenerary</h1>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className=" flex justify-center items-center">
                    <strong><h1 className=" mr-10">DAY 1: NAIROBI KENYA</h1></strong>
                    <span><MdKeyboardArrowDown size={30}/></span>
                    {/* <div>
                        <img/>
                        <p>
                        Arrival and transfer to one of Kenya’s most luxurious hotels in the city; The Norfolk hotel Nairobi
                        Included:
                        Full board accommodation; Bed, dinner breakfast and lunch.
                        </p>
                    </div> */}
                </div>
            </div> 
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo"/>
            <Footer/>
        </div>
    )
}

export default Mara