import React, { useState} from "react";

import Navbar from "../../Navbar/Navreveal";

import Mara1 from '../../../Assets/Mara1.jpg';

import Footer from "../../Footer/Footer";

import {MdKeyboardArrowDown} from 'react-icons/md';

import Faq from "react-faq-component";


const Mara =()=>{
    const data = {
        title: "Iteneraries",
        rows: [
            {
                title: <strong> <h1>Day 1: Nairobi</h1></strong>,
                content: `Arrival and transfer to one of Kenya’s most luxurious hotels in the city; The Norfolk hotel Nairobi
                Included:
                Full board accommodation; Bed, dinner breakfast and lunch. <img src={Mara1} />`,
            },
            {
                title: "Nunc maximus, magna at ultricies elementum",
                content:
                    "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            },
            {
                title: "Curabitur laoreet, mauris vel blandit fringilla",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "What is the package version",
                content: <p>current version is 1.2.1</p>,
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
                <p>Mara 1</p>
                <div>
                    <img src={Mara1} alt=" Mara Camping" className=" m-auto rounded-lg p-5 md:px-[400px]"/>
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