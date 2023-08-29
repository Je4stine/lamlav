import React, {useState} from "react";
import Navbar from "../../Navbar/Navbar";
import Navreveal from "../../Navbar/Navreveal";
import Footer from "../../Footer/Footer";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
// import Slider from "react-slick";
import Lodge1 from '../../../Assets/volcanoes-safaris-mount-gahinga-lodge-standard-room.jpg';

import Lodge2 from '../../../Assets/volcanoes-safaris-mount-gahinga-lodge-looking-out-bedroom.jpg';

import Lodge3 from '../../../Assets/volcanoes-safaris-mount-gahinga-lodge-main-building-exterior.jpg';

import Lodge4 from '../../../Assets/volcanoes-safaris-mount-gahinga-lodge-night-time-view-outside.jpg';

import Lodge5 from '../../../Assets/volcanoes-safaris-mount-gahinga-lodge-sunroom.jpg';

import ShowMoreText from "react-show-more-text";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Gahinga =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif">Mount Gahinga Lodge.</h1>
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
                Mount Gahinga Lodge is a warm and inviting accommodation situated at the base of the Virunga Volcanoes. The lodge offers eight bandas, tastefully decorated in the traditional style of the Bufimbira people, creating a unique and cultural atmosphere.Each banda features en-suite bathrooms with modern amenities such as a shower with hot and cold water, a flushing toilet, and  double vanity. Guests can relax by the cozy fireplace or on their private porch, taking in the beauty of the surrounding area. Every guest at the lodge is provided with a private butler who caters to their every need.
                <br/><br/>Take leisurely strolls through the vibrant gardens or find a peaceful spot under the shade of a leafy tree to immerse yourself in a good book. Delicious meals are served in the open air, with panoramic views of the rolling mountain ranges, or dine in the welcoming dining room. 
                <br/><br/>During your stay at the Lodge, you will experience a range of incredible activities including, visits to the Batwa Vocational Centre, where you will be entertained by a captivating Batwa dance performance. Explore the Gahinga Batwa Village and learn about inspiring community projects. Engage in the Batwa Cultural Heritage Tour. Put on your hiking boots and embark on thrilling hikes up Mount Gahinga, Mount Muhavura volcanoes, Mount Sabinyo,and  the Kisozi caldera. Engage in the gorilla and golden monkey tracking. 

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at Mount Gahinga Lodge.</strong>
                               
                                <li>Butler service </li>
                                <li>Fire place </li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>En-suite bathroom</li>
                            <li>Private deck/veranda</li>
                           
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at Mount Gahinga Lodge.  </strong>
                    <li>Gorilla and golden  monkey tracking </li>
                    <li>Hiking Mount Gahinga and Muhavura volcanoes </li>
                    <li>Batwa Trail and cultural  visits </li>
                    <li>Birdwatching</li>


                </p>
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
                    <Slider {...settings} autoplay arrows>
                        <div>
                            <img src={Lodge4} alt="Gahinga"/>
                        </div>
                        <div>
                        <img src={Lodge2} alt="Gahinga"/>
                        </div>
                        <div>
                        <img src={Lodge5} alt="Gahinga"/>
                        </div>
                        <div>
                        <img src={Lodge3} alt="Gahinga"/>
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

export default Gahinga;