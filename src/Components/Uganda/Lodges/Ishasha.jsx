import React, {useState} from "react";
import Navbar from "../../Navbar/Navbar";
import Navreveal from "../../Navbar/Navreveal";
import Footer from "../../Footer/Footer";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
// import Slider from "react-slick";
import Lodge1 from '../../../Assets/7998643-ishasha-wilderness-camp-ishasha.jpg';

import Lodge2 from '../../../Assets/home2.jpg';

import Lodge3 from '../../../Assets/home.jpg';

import Lodge4 from '../../../Assets/IMG_0995.jpg';

import Lodge5 from '../../../Assets/IMG-20180314-WA0024.jpg';


import ShowMoreText from "react-show-more-text";

import Partners from "../../Partners";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Ishasha =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Ishasha Wilderness Camp</h1>
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
                Nestled along the Ntungwe River in the Southern  Ishasha  sector of the Queen Elizabeth National Park,  the exclusive Ishasha Wilderness Camp offers a serene and enchanting getaway for those who appreciate the untamed beauty of nature. Every tent-style room at the camp features a personal verandah that provides a scenic view of the river. The rooms are tastefully decorated and equipped with spacious beds enclosed with mosquito nets. Each room has its own private bathroom with a refreshing "bush" shower, running water for handwashing, and an environmentally friendly flushing toilet.
                <br/><br/>Since the camp is situated within the park, the wildlife is free to roam, and guests can witness elephants bathing in the river, buffalo grazing, and groups of Black-and-White Colobus and vervet monkeys that reside in the area are frequently observed. Additionally, the Ishasha savannahs are renowned for their population of lions that have the unique behavior of climbing trees. These tree-climbing lions can occasionally be spotted resting on the branches of the majestic fig trees.
                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Ishasha Wilderness Camp</strong>
                            <li>Outdoor fireplace </li>
                            <li>Laundry service </li>
                            <li>Wifi </li>
                            <li>24hr Electricity </li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>In-room safe </li>
                            <li>Private veranda </li>
                            <li>En-suite bathroom </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Ishasha Wilderness Camp  </strong>
                        <li>Community Tours & Visits</li>
                        <li> Chimpanzee Trekking in Kyambura Gorge</li>
                        <li>Cruise the Kazinga Channel</li>
                        <li>Birding and Wildlife Walks</li>
                        <li>Sundowners and Bush Breakfasts</li>


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
            <Partners/>
            <div>
                <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo" loading="lazy"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Ishasha;