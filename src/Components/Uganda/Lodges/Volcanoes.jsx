import React, {useState} from "react";
import Navbar from "../../Navbar/Navbar";
import Navreveal from "../../Navbar/Navreveal";
import Footer from "../../Footer/Footer";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
// import Slider from "react-slick";
import Lodge1 from '../../../Assets/15975620-room-at-bwindi-lodge.jpg';

import Lodge2 from '../../../Assets/15975615-main-area-at-bwindi-lodge.jpg';

import Lodge3 from '../../../Assets/15975616-bwindi-lodge.jpg';

import Lodge4 from '../../../Assets/15975618-aerial-view-of-bwindi-lodge.jpg';

import Lodge5 from '../../../Assets/15975619-room-at-bwindi-lodge.jpg';


import ShowMoreText from "react-show-more-text";




import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Volacanoes =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Volcanoes Bwindi Lodge</h1>
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
                Volcanoes Bwindi Lodge is a small-scale, luxurious retreat that offers a distinctive safari adventure amidst the jungle.
                <br/><br/>Perched above the pristine Bwindi Impenetrable Forest, the Volcanoes Bwindi Lodge presents a sophisticated environment to immerse oneself in the extraordinary pursuit of tracking Uganda's majestic mountain gorillas. This enchanting lodge boasts a limited number of eight bandas crafted from stone, timber, and glass, all positioned to face the verdant forest canopy. Reflecting the local architectural style, these ensuite rooms offer both luxury and eco-consciousness. They feature amenities such as flushing toilets, a double vanity, hot and cold running water in the showers, and a private balcony where guests can observe wildlife, including chimpanzees, mountain gorillas, and monkeys.
                <br/><br/>Delightful meals and evening refreshments can be savored at the intimate bar and dining area, offering panoramic views of the forested slopes. Alternatively, guests can unwind by the fireplace in the lounge, sharing captivating stories of their gorilla tracking adventures with fellow visitors. 

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Volcanoes Bwindi Lodge</strong>
                            <li>Wifi</li>
                            <li>Room service </li>
                            <li> Bar and restaurant </li>
                            <li>Massage services </li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>Private veranda </li>
                            <li>En-suite bathrooms </li>
                            <li>Bathrobes </li>
                            <li>Safe</li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Volcanoes Bwindi Lodge  </strong>
                        <li>Gorilla trekking expeditions </li>
                        <li>Scenic walks</li>
                        <li>Tea processing tours </li>
                        <li>Massage and wellness </li>
                        <li>Visit Bwindi Community Hospital </li>


                </p>
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
                    <Slider {...settings} autoplay arrows>
                        <div>
                            <img src={Lodge4} alt="dfghjk"/>
                        </div>
                        <div>
                        <img src={Lodge2} alt="dfghjk"/>
                        </div>
                        <div>
                        <img src={Lodge5} alt="dfghjk"/>
                        </div>
                        <div>
                        <img src={Lodge3} alt="dfghjk"/>
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

export default Volacanoes;