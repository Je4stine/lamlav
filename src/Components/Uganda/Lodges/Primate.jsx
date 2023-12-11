import React, {useState} from "react";
import Navbar from "../../Navbar/Navbar";
import Navreveal from "../../Navbar/Navreveal";
import Footer from "../../Footer/Footer";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
// import Slider from "react-slick";
import Lodge1 from '../../../Assets/Primate-Lodge-double-room.jpg';

import Lodge2 from '../../../Assets/8007426-lounge-at-primate-lodge.jpg';

import Lodge3 from '../../../Assets/8007428-luxury-cottage-at-primate-lodge.jpg';

import Lodge4 from '../../../Assets/8007429-standard-room-at-primate-lodge.jpg';

import Lodge5 from '../../../Assets/16001618-the-communal-lounge-primate-lodge-kibale.jpg';


import ShowMoreText from "react-show-more-text";

import Partners from "../../Partners";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Primate =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Primate Lodge.</h1>
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
                Primate Lodge Kibale's prime location within the forest, proximity to chimpanzee tracking and habituation experiences, and its well-appointed Luxury Cottages provide a unique and immersive stay for guests seeking an exceptional wildlife encounter and a tranquil retreat amidst nature.
                <br/><br/>The lodge provides nine spacious and private Luxury Cottages, nestled deep in the forest to ensure maximum privacy and an authentic "living in nature" ambiance. Each cottage features either 2 double beds or 1 king-size bed, a comfortable sitting area with armchairs, a reading table, and a large veranda that offers excellent views.
                <br/><br/>Guests can enjoy additional amenities such as a massage parlor, a spacious dining terrace, a well-stocked bar, and complimentary room service. There is also a secluded lounge area with a small library, where guests can relax and unwind. In the evening, a campfire provides a cozy atmosphere, and free Wi-Fi is available in the public areas. Furthermore, the lodge offers complimentary laundry service to enhance guests' convenience and comfort.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Primate Lodge.</strong>
                            <li>Butler service</li> 
                            <li>Spa</li>
                            <li>Fitness center </li>
                            <li>Laundry service </li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>Private deck</li> 
                            <li>En-suite bathroom </li>
                            <li>Fireplace </li>
                            <li>Safe</li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Primate Lodge.  </strong>
                    <li>Chimpanzee trekking</li> 
                    <li>Birdwatching </li>
                    <li>Bigodi Nature Walks </li>
                    <li>Cultural encounters </li>
                    <li>Sebitole Forest exploration</li> 


                </p>
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
                    <Slider {...settings} autoplay arrows>
                        <div>
                            <img src={Lodge4} alt="Primate"/>
                        </div>
                        <div>
                        <img src={Lodge2} alt="Primate"/>
                        </div>
                        <div>
                        <img src={Lodge5} alt="Primate"/>
                        </div>
                        <div>
                        <img src={Lodge3} alt="Primate"/>
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

export default Primate;