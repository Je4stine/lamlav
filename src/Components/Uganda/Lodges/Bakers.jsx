import React, {useState} from "react";
import Navbar from "../../Navbar/Navbar";
import Navreveal from "../../Navbar/Navreveal";
import Footer from "../../Footer/Footer";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
// import Slider from "react-slick";
import Lodge1 from '../../../Assets/Bakers-lodge-chalet.jpg';

import Lodge2 from '../../../Assets/8.jpg';

import Lodge3 from '../../../Assets/Credit-Marcus-Westburg-Dec-2015-11.jpg';

import Lodge4 from '../../../Assets/DSC_3683.jpg';

import Lodge5 from '../../../Assets/DSC_7436.jpg';

import ShowMoreText from "react-show-more-text";


import Partners from "../../Partners";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Bakers =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif"> Baker's Lodge. </h1>
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
                Nestled on the southern bank of the majestic Nile River, Baker's Lodge is a charming and cozy retreat named after the renowned English explorer Samuel Baker.This intimate lodge is surrounded by lush greenery and towering trees, and offers breathtaking views of the river and its diverse wildlife. The lodge features eight luxurious cottages built on raised wooden decks, designed to capture the cool breeze and provide uninterrupted vistas of the river. These spacious cottages exude elegance with their thatched roofs, custom-made wooden furniture, and exquisite handcrafted accessories.
                <br/><br/>Each cottage boasts an en-suite bathroom equipped with a solar-powered hot shower and a flush toilet, and some even feature a bath with scenic views. The raised cottages are particularly recommended for an enhanced experience.

                <br/><br/>Meals at Baker's Lodge are served on a raised dining deck or on the riverbank, allowing guests to savor their delicious cuisine while being serenaded by the gentle sounds of the flowing river. In their leisure time between activities in Murchison Falls National Park, guests can relax in the thatched lounge or bar, or take a refreshing dip in the inviting swimming pool.
                <br/><br/>As expected, Baker's Lodge offers a range of exceptional river-based excursions, but it also provides opportunities for traditional wildlife drives, forest walks, and chimpanzee trekking.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at  Baker's Lodge. </strong>
                                <li>Outdoor pool.</li>
                                
                                <li>Laundry service </li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>En-suite bathroom</li>
                            <li>Safe</li>
                            <li> Private deck/veranda </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at  Baker's Lodge.   </strong>
                    <li>Chimpanzee trekking </li>
                    <li>River- based excursions</li>
                    <li>Nature walks </li>


                </p>
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
                    <Slider {...settings} autoplay arrows>
                        <div>
                            <img src={Lodge4} alt="Baker"/>
                        </div>
                        <div>
                        <img src={Lodge2} alt="Baker"/>
                        </div>
                        <div>
                        <img src={Lodge5} alt="Baker"/>
                        </div>
                        <div>
                        <img src={Lodge3} alt="Baker"/>
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

export default Bakers;