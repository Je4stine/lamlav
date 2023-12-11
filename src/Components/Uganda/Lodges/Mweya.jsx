import React, {useState} from "react";
import Navbar from "../../Navbar/Navbar";
import Navreveal from "../../Navbar/Navreveal";
import Footer from "../../Footer/Footer";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
// import Slider from "react-slick";
import Lodge1 from '../../../Assets/7998707-mweya-safari-lodge-queen-elizabeth-national-park.jpg';

import Lodge2 from '../../../Assets/1004124-mweya-safari-lodge-queen-elizabeth-national-park.jpg';

import Lodge3 from '../../../Assets/7998710-mweya-safari-lodge-queen-elizabeth-national-park.jpg';

import Lodge4 from '../../../Assets/7998711-mweya-safari-lodge-queen-elizabeth-national-park.jpg';

import Lodge5 from '../../../Assets/7998712-mweya-safari-lodge-queen-elizabeth-national-park.jpg';


import ShowMoreText from "react-show-more-text";

import Partners from "../../Partners";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Mweya =()=>{
    const [colorChanged, setColorChanged]= useState(false);
    // const { campId} = useParams();
    // const item = LODGES.find((item) => item.campId1  === campId);

    
    
  
    // if (!item) {
    //   return <div>Item not found</div>;
    // }



    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
          setColorChanged(true);
        }
        else{
          setColorChanged(false);
        }
     };
    window.addEventListener('scroll', changeNavbarColor);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div className=" bg-white">
             {
                colorChanged ? <Navreveal/> : <Navbar/>
            }
            <secttion>
                <div className=" flex flex-col justify-center items-center mt-[100px]">
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Mweya Safari Lodge</h1>
                    <img src={Lodge1} alt="Roaring lion" className=" lg:w-[70%]"/>
                </div>
            </secttion>
            <section className=" bg-white w-[100%] m-auto lg:px-[300px] px-10" >
            <ShowMoreText
                    /* Default options */
                    lines={4}
                    more='READ MORE'
                    less='READ LESS'
                    anchorClass='font-[SourceSerifPro-Regular] pt-[50px] text-red-600'
                    className='font-[SourceSerifPro-Regular] pt-[50px] text-xl'
                    // onClick={this.executeOnClick}
                    expanded={false}
                    truncatedEndingComponent={"..... "}
                >
                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                This magnificent lodge is surrounded by the enchanting Rwenzori Mountains and offers breathtaking views. To the east, you will find the awe-inspiring Great Rift Valley hills, which guard the birthplace of humanity. Separating the Mountains of the Moon, you'll discover the meandering Kazinga Channel, where water flows endlessly into the vast lakes of Lake George and Lake Edward.
                <br/><br/>Overlooking the Kazinga Channel,  the  Infinity Swimming Pool and Tembo Bar  provide stunning panoramic views of Lake George and Lake Edward. They are perfect vitage points for observing the various wildlife species cooling off in the waters below. Additionally,  the Lodge's verandahs offer a serene setting to relax and rejuvenate relaxing space. Immerse yourself in the tranquility and natural beauty that surrounds you, allowing the ambiance to transport you to a bygone era. 
                <br/><br/>Don't miss the opportunity to browse through the gift shop, where you'll find a delightful collection of local East African crafts and souvenirs. Experience the allure of a classic safari and bring home a special gift from the beautiful "Pearl of Africa". 

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Mweya Safari Lodge</strong>
                            <li>Infinity swimming pool </li>
                            <li>Laundry service </li>
                            <li>Giftshop</li>
                            <li>Spa</li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>Air conditioning</li>
                            <li>Housekeeping</li>
                            <li>Private balcony</li>
                            <li>Safe</li>
                                                    </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Mweya Safari Lodge  </strong>
                        <li>Safari drives</li>
                         <li>Birding</li>
                        <li>Gorilla trekking </li>
                         <li>Water safari</li>
                        <li>Chimpanzee trekking </li>
                        <li>Visit Katwe explosion crater </li>
                        <li>Sundowner and bush breakfast</li>


                </p>
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
                    <Slider {...settings} autoplay arrows>
                        <div>
                            <img src={Lodge4} alt="Mweya"/>
                        </div>
                        <div>
                        <img src={Lodge2} alt="Mweya"/>
                        </div>
                        <div>
                        <img src={Lodge5} alt="Mweya"/>
                        </div>
                        <div>
                        <img src={Lodge3} alt="Mweya"/>
                        </div>
                    </Slider>
                </div>
                
            </section>
            <Partners/>
            <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Mweya;