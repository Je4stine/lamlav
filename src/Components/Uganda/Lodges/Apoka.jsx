import React, {useState} from "react";
import Navbar from "../../Navbar/Navbar";
import Navreveal from "../../Navbar/Navreveal";
import Footer from "../../Footer/Footer";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
// import Slider from "react-slick";
import Lodge1 from '../../../Assets/74650364.jpg';

import Lodge2 from '../../../Assets/74650359.jpg';

import Lodge3 from '../../../Assets/74650352.jpg';

import Lodge4 from '../../../Assets/74650347.jpg';

import Lodge5 from '../../../Assets/74650345.jpg';

import Partners from "../../Partners";


import ShowMoreText from "react-show-more-text";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Apoka =()=>{
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
                <div className=" flex flex-col justify-center items-center mt-[60px] lg:mt-[120px]">
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif"> Apoka Safari Lodge </h1>
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
                The Apoka Safari Lodge is located in a secluded area of Kidepo National Park, surrounded by picturesque landscapes filled with golden grasses, rugged hills, and abundant wildlife. 
                <br/><br/>The lodge offers an intimate and exclusive retreat with only ten beautifully  furnished rooms. These boutique-like accommodations are meticulously crafted by local builders and feature spacious interiors with comfortable sitting rooms and private verandas. The beds are handmade and adorned with soft duvets, all protected by mosquito nets for a peaceful night's sleep. One of the standout features of the lodge is the outdoor stone bathtub on the sheltered terrace of each room, which can comfortably accommodate up to four people. This unique feature allows guests to indulge in a relaxing bath while enjoying the breathtaking panoramic views that stretch out before them, creating a truly unforgettable experience that might make them never want to leave

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at  Apoka Safari Lodge </strong>
                            <li>Outdoor pool </li>
                            <li>Bar</li>
                            <li>Laundry service </li>
                            <li>Gift shop </li>
                            <li>Wifi</li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>Private deck/veranda </li>
                            <li>En-suite bathroom </li>
                            <li>Room service </li>
                            <li>Bathtub </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at  Apoka Safari Lodge   </strong>
                    <li>Cultural experiences with visits  to the nearby Karamojong community </li>
                    <li>Exhilarating day and night game drives </li>
                    <li>Birdwatching </li>
                    <li>Game tracking through the deep dry sandy riverbeds</li>


                </p>
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
                    <Slider {...settings} autoplay arrows>
                        <div>
                            <img src={Lodge4} alt="Apoka"/>
                        </div>
                        <div>
                        <img src={Lodge2} alt="Apoka"/>
                        </div>
                        <div>
                        <img src={Lodge5} alt="Apoka"/>
                        </div>
                        <div>
                        <img src={Lodge3} alt="Apoka"/>
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

export default Apoka;