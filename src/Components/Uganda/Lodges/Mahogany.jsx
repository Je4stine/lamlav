import React, {useState} from "react";
import Navbar from "../../Navbar/Navbar";
import Navreveal from "../../Navbar/Navreveal";
import Footer from "../../Footer/Footer";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
// import Slider from "react-slick";
import Lodge1 from '../../../Assets/1322152-mahogany-springs-bwindi-impenetrable-forest-national-park.jpg';

import Lodge2 from '../../../Assets/1322155-sunrise-over-the-forest-from-mahogany-springs.jpg';

import Lodge3 from '../../../Assets/1322161-mahogany-springs-bwindi-impenetrable-forest-national-park.jpg';

import Lodge4 from '../../../Assets/1322163-superior-suite-mahogany-springs-bwindi-impenetrable-forest-national-park.jpg';

import Lodge5 from '../../../Assets/1322164-superior-suite-at-mahogany-springs.jpg';



import ShowMoreText from "react-show-more-text";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Mahogany =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Mahogany Springs Lodge</h1>
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
                Mahogany Springs Lodge provides an ideal starting point for your gorilla trekking expedition, ensuring utmost comfort and privacy in a breathtaking location. Positioned atop the Munyanga River, with a captivating vista of Bwindi Impenetrable National Park, the lodge comprises 12 luxurious suites nestled amidst stunning gardens, offering panoramic views of the lush valley.
                <br/><br/>Each superior suite boasts a private terrace, spacious en-suite bathroom, and a walk-in terracotta shower. Notably, Uganda was recognized by The Huffington Post as the second-most unforgettable honeymoon destination, with Mahogany Springs Lodge being recommended as the premier accommodation for gorilla trekking.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Mahogany Springs Lodge</strong>
                                <li>Gift Shop</li>
                                <li>Laundry service </li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>En-Suite Bathroom </li>
                            <li>Safe</li>
                            <li>Private Deck</li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Mahogany Springs Lodge  </strong>
                    <li>Gorilla trekking adventures </li>
                    <li>Scenic walks </li>
                    <li>Batwa Trail Experience:</li>
                    <li>Scenic Drives</li>
                    <li>Batwa Pygmy Experience</li>


                </p>
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
                    <Slider {...settings} autoplay arrows>
                        <div>
                            <img src={Lodge4} alt="Mahogany"/>
                        </div>
                        <div>
                        <img src={Lodge2} alt="Mahogany"/>
                        </div>
                        <div>
                        <img src={Lodge5} alt="Mahogany"/>
                        </div>
                        <div>
                        <img src={Lodge3} alt="Mahogany"/>
                        </div>
                    </Slider>
                </div>
                
            </section>
            <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Mahogany;