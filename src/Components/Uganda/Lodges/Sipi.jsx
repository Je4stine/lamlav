import React, {useState} from "react";
import Navbar from "../../Navbar/Navbar";
import Navreveal from "../../Navbar/Navreveal";
import Footer from "../../Footer/Footer";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
// import Slider from "react-slick";
import Lodge1 from '../../../Assets/323483133.jpg';

import Lodge2 from '../../../Assets/323483116.jpg';

import Lodge3 from '../../../Assets/323483079.jpg';

import Lodge4 from '../../../Assets/323483059.jpg';

import Lodge5 from '../../../Assets/323483098.jpg';

import Partners from "../../Partners";

import ShowMoreText from "react-show-more-text";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import DETAILS from "./detailsdata";
// import LODGES from "./lodgedata";

const Sipi =()=>{
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
                    <h1 className=" mb-20 lg:text-6xl text-4xl font-serif"> Sipi Valley  Resort</h1>
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
                The Sipi Valley Resort on the slopes  of Mount  Elgon is a picturesque gateway with  breathtaking views  of Sipi valley, including the magnificent Sipi waterfalls and the vast plains of Karamoja.
                <br/><br/>The resort boasts a range of luxurious accommodations designed to provide comfort and serenity amidst the natural beauty of the surroundings. Guests can choose from cozy and well-appointed cottages or spacious suites, all featuring modern amenities such as private balconies, plush beds, en-suite bathrooms, and breathtaking views of the valley. Each room is tastefully decorated, blending contemporary elegance with a touch of local charm.
                <br/><br/>The resort offers a wide range of amenities to ensure a delightful stay for every guest. The on-site restaurant serves delectable cuisine, incorporating fresh local ingredients and offering a variety of dishes to cater to different tastes. After a day of exploration, guests can unwind at the resort's spa, indulging in rejuvenating treatments and massages. 
                <br/><br/>For those seeking adventure, the resort organizes guided hiking and trekking excursions, allowing guests to explore the awe-inspiring beauty of the Sipi Valley. Additionally, the resort provides opportunities for cultural immersion, with activities such as traditional dance performances and visits to nearby villages, where guests can interact with the local community and learn about their way of life. Whether you're looking for relaxation, adventure, or cultural experiences, Sipi Valley Resort has it all.

                </p>
            </ShowMoreText>

                <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                    <div className=" ">
                        <div>
                            <br/><br/> <strong>Amenities at  Sipi Valley  Resort</strong>
                            <li>24hr Electricity </li>
                            <li>Massage services </li>
                        </div>
                        <div>
                            <br/><br/><strong>Room features </strong>
                            <li>En-suite bathroom </li>
                            <li>Wifi</li>
                            <li>Room service </li>
                        </div>
                    </div>
                

                    <br/><br/> <strong>Activities  at  Sipi Valley  Resort  </strong>
                            <li>Guided hiking sipi falls </li>
                            <li>Trekking excursions </li>
                            <li>Cultural visits and immersion </li>
                            <li>Coffee plantation tours </li>
                            <li>Abseiling at Sipi Valley </li>
                            <li>Tours to mount Elgon National Park </li>


                </p>
                <div className="relative mt-20 z-[0] m-auto w-[80%]">
                    <Slider {...settings} autoplay arrows>
                        <div>
                            <img src={Lodge4} alt="Sipi"/>
                        </div>
                        <div>
                        <img src={Lodge2} alt="Sipi"/>
                        </div>
                        <div>
                        <img src={Lodge5} alt="Sipi"/>
                        </div>
                        <div>
                        <img src={Lodge3} alt="Sipi"/>
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

export default Sipi;