import React, {useState} from "react";
import Navbar from "../../Navbar/Navbar";
import Navreveal from "../../Navbar/Navreveal";
import Footer from "../../Footer/Footer";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
// import Slider from "react-slick";
import Lodge1 from '../../../Assets/The-Boma-Hotel-entebbe.jpg';

import Lodge2 from '../../../Assets/the_boma_entebbe__1-1060x707.jpg';

import Lodge3 from '../../../Assets/the_boma_entebbe__2-1060x707.jpg';

import Lodge4 from '../../../Assets/the_boma_entebbe__3-1060x707.jpg';

import Lodge5 from '../../../Assets/the_boma_entebbe__6-1060x707.jpg';

import ShowMoreText from "react-show-more-text";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Boma =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">The Boma Hotel  Entebbe </h1>
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
                <br/><br/>The Boma Hotel is a delightful boutique hotel that skillfully combines the grace of colonial design with the warmth and charm of African aesthetics and hospitality.
                <br/><br/>Located in a verdant neighborhood just minutes away from Entebbe International Airport, the hotel is enveloped by a lush, tropical garden, effortlessly blending local customs with the allure of colonial residences. This cozy hotel presents a select number of 15 lavishly appointed rooms, each featuring an en-suite bathroom, uniquely adorned with a tasteful fusion of African textiles and colonial furnishings. Offering amenities such as a four-poster bed with mosquito netting, satellite television, WiFi, and a serene private veranda overlooking the tranquil garden.
                <br/><br/>Within the meticulously landscaped garden, guests can indulge in the shimmering pool or dine at the exceptional restaurant and bar, which affords picturesque views of Lake Victoria. Additionally, a play area is available to keep children happily entertained. When not unwinding at the hotel, visitors have the option to explore the nearby Entebbe Botanical Garden, the Uganda Wildlife Education Centre, or embark on a delightful excursion to the beach.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at The Boma Hotel  Entebbe </strong>
                            <li>24hr Electricity </li>
                            <li>Outdoor pool </li>
                            <li>Wifi </li>
                            <li>Laundry service </li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>En-suite bathrooms </li>
                            <li>Private veranda </li>
                            <li> Wifi</li>
                            <li>Satellite TV </li>
                            <li> Safe</li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at The Boma Hotel  Entebbe   </strong>
                            <li>Swimming </li>
                    
                    <br/><br/>Excursion visit to; 
                        <li>Entebbe Botanical Garden</li>
                        <li>Uganda  Wildlife Education Centre </li>
                        <li>Beach excursion </li>
                            


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

export default Boma;