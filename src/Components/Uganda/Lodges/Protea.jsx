import React, {useState} from "react";
import Navbar from "../../Navbar/Navbar";
import Navreveal from "../../Navbar/Navreveal";
import Footer from "../../Footer/Footer";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
// import Slider from "react-slick";
import Lodge1 from '../../../Assets/461635418.jpg';

import Lodge2 from '../../../Assets/461635420.jpg';

import Lodge3 from '../../../Assets/461635421.jpg';

import Lodge4 from '../../../Assets/461635424.jpg';

import Lodge5 from '../../../Assets/461635429.jpg';

import ShowMoreText from "react-show-more-text";
import Partners from "../../Partners";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Protea =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Protea Hotel Kampala</h1>
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
                Protea Hotel Kampala is located in the upscale neighborhood of Kololo, just 35 km from Entebbe airport. 
                <br/><br/>The hotel offers comfortable rooms with air-conditioning and en suite bathrooms. It provides convenient amenities such as a business center, 24-hour reception, and round-the-clock room service. The guest rooms and suites are designed to offer a luxurious retreat in the heart of the city. Whether you're visiting for business or leisure, the hotel offers a range of amenities, including a fitness center with air-conditioning, dining options, and conference facilities; that can accommodate up to 350 guests. 
                <br/><br/>The Chapter One Restaurant serves international favorites, and the Ladies Bar is ideal for relaxing with sundowners, pre-dinner cocktails, or socializing with colleagues. No matter the purpose of your visit, Protea Hotel Kampala aims to enhance your travel experience in the city.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Protea Hotel Kampala</strong>
                            <li>Gift shop</li>
                            <li>Laundry service </li>
                            <li>Outdoor  pool </li>
                            <li>Fitness center </li>
                            <li>Safe deposit box </li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>En-suite bathroom </li>
                            <li>In-room safe </li>
                            <li>Room service </li>
                            <li>Mini fridge </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Protea Hotel Kampala  </strong>
                    <li>Massage and wellness </li>
                    <li>Tours and excursions </li>
                    <li>Shopping </li>
                    <li>Business and Events facilities </li>


                </p>
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
                    <Slider {...settings} autoplay arrows>
                        <div>
                            <img src={Lodge4} alt="Protea"/>
                        </div>
                        <div>
                        <img src={Lodge2} alt="Protea"/>
                        </div>
                        <div>
                        <img src={Lodge5} alt="Protea"/>
                        </div>
                        <div>
                        <img src={Lodge3} alt="Protea"/>
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

export default Protea;