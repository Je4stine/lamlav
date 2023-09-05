import React, {useState} from "react";
import Navbar from "../../Navbar/Navbar";
import Navreveal from "../../Navbar/Navreveal";
import Footer from "../../Footer/Footer";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
// import Slider from "react-slick";
import Lodge1 from '../../../Assets/parc-national-desk-volcans-1.jpg';

import Lodge2 from '../../../Assets/61d345098ce3f8a0a20b2829_Bisate-Nelson-Travel-0.jpg';

import Lodge3 from '../../../Assets/61d345088ce3f863960b2828_Bisate-Nelson-Travel-2.jpg';

import Lodge4 from '../../../Assets/61d34509af10c429600f7018_Bisate-Nelson-Travel-1.jpg';

import Lodge5 from '../../../Assets/61d344f926a3943bde34d9e8_Bisate-Nelson-Travel-5.jpg';

import Chyulu from '../../../Assets/2020-10-22.jpg';

import ShowMoreText from "react-show-more-text";

import { useParams, Link } from 'react-router-dom';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Bisate =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Bisate Lodge</h1>
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
                Bisate is nestled in the natural beauty of an eroded volcanic cone. These intimate forest villas in Rwanda, which resemble enormous bird nests nestled among the trees, offer a sumptuous and eco-friendly retreat with only six stunning thatched pods designed to provide maximum comfort and panoramic views of the imposing Bisoke, Karisimbi, and Mikeno volcanoes. 
                <br/><br/>Each villa features a spacious lounge with a warming fireplace, a well-appointed bedroom area with large beds, and a luxurious bathroom complete with bathrobes and toiletries. The reception, restaurant, and lounge areas create a convivial atmosphere for sharing stories and enjoying delicious meals and drinks. With both communal and individual dining options, as well as an impressive wine cellar, guests are guaranteed an unforgettable experience in this idyllic setting.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Bisate Lodge</strong>
                            <li>Laundry  services </li>
                            <li>Fitness Center with Gym</li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>Bathrobes </li>
                            <li>En-suite bathrooms </li>
                            <li> Safe</li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Bisate Lodge  </strong>
                    <li>Gorilla Trekking</li>
                    <li>Golden Monkey Tracking</li>
                    <li>Hiking and Nature Walks</li>
                    <li>Bird Watching</li>
                    <li>Conservation and Community Visits</li>


                </p>
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
                    <Slider {...settings} autoplay arrows>
                        <div>
                            <img src={Lodge4} alt="Lodge"/>
                        </div>
                        <div>
                        <img src={Lodge2} alt="Lodge"/>
                        </div>
                        <div>
                        <img src={Lodge5} alt="Lodge"/>
                        </div>
                        <div>
                        <img src={Lodge3} alt="Lodge"/>
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

export default Bisate;