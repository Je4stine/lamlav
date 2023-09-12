import React, {useState} from "react";
import Navbar from "../../Navbar/Navbar";
import Navreveal from "../../Navbar/Navreveal";
import Footer from "../../Footer/Footer";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
// import Slider from "react-slick";
import Lodge1 from '../../../Assets/250368-lemala-serengeti-camp1.jpg';

import Lodge2 from '../../../Assets/628e1f430c1ce53ef8dcfa17_Lemala Ewanjan1.jpg';

import Lodge3 from '../../../Assets/628e1fd282294a133c9ba09d_Lemala Ewanjan3.jpg';

import Lodge4 from '../../../Assets/628e20330c1ce57615dcfa50_Lemala Ewanjana1.jpg';

import Lodge5 from '../../../Assets/628e1e5cbab138c5900f4ed4_Lemala EwanjanSingle1.jpg';



import ShowMoreText from "react-show-more-text";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Lemala =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif"> Lemala Ewanjan </h1>
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
                Lemala Ewanjan is a genuine and cozy tented camp located in a secluded section of the wildlife-rich Seronera Valley in the heart of the Serengeti. Positioned between the grasslands of the south and the woodlands of the north, the Seronera region serves as a vital corridor for wildlife and is famous for its year-round game viewing opportunities. Its numerous rivers and ample water sources attract a diverse range of animals, including a substantial population of impressive big cats. Moreover, from April to June and November to January, the area becomes a captivating spectacle as it becomes traversed by the annual wildebeest migration, an event filled with exciting wildlife encounters.
                <br/><br/>The camp provides 12 roomy and cozy tents with private bathrooms. These tents offer a generous amount of space and are designed for comfort. They feature an outdoor deck that provides stunning views of the surrounding area. Inside, each tent is equipped with two queen-size beds adorned with cozy duvets, a modern flush toilet, a spacious safari-style shower with ample running water, wooden storage cabinets and flooring, and 24-hour solar lighting. Additionally, outside the tent, guests can relax on loungers while enjoying morning teas, coffees, and afternoon gin and tonics.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at  Lemala Ewanjan </strong>
                            <li>Public wifi</li>
                            <li>Free breakfast</li>
                            <li>Bar / lounge</li>
                            <li>Restaurant</li>
                            <li>Special diet menus</li>
                            <li>Outdoor fireplace</li>
                            <li>Laundry service</li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>Private  deck</li>
                            <li>En-suite bathroom </li>
                            <li>Complimentary toiletries</li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at  Lemala Ewanjan   </strong>
                        <li>Hot air ballooning</li>
                        <li>Guided game drives</li>
                        <li>Witness The Great Migration</li>
                        <li>Walking safari</li>
                        <li>Bird watching</li>


                </p>
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
                    <Slider {...settings} autoplay arrows>
                        <div>
                            <img src={Lodge4} alt="Lodges"/>
                        </div>
                        <div>
                        <img src={Lodge2} alt="Lodges"/>
                        </div>
                        <div>
                        <img src={Lodge5} alt="Lodges"/>
                        </div>
                        <div>
                        <img src={Lodge3} alt="Lodges"/>
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

export default Lemala;