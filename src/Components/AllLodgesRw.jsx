import React from 'react'
import Almanara from '../Assets/parc-national-desk-volcans-1.jpg';
import Elephant from '../Assets/DSC_0064-1024x682.jpg';
import Elsa from '../Assets/Rwanda-Tailormade-Tours-Nyungwe-Forest-Lodge_Terrace-1920x1280.jpg';
import FairMount from '../Assets/fairmount.jpg';
import Finch from '../Assets/hr-dsc-5630.jpg';
import Giraffe from '../Assets/hr-dsc-5630.jpg';
import Hemingways from '../Assets/58cd67dc3d934a749dfed2511a403408.jpg';
import Kampi from '../Assets/329065050.jpg';
import Kicheche from '../Assets/444103583.jpg';
import Kifaru from '../Assets/462528547.jpg';
import Kilanguni from '../Assets/dining-room-at-kilaguni-serena.jpg';
import Kinondo from '../Assets/Kwitonda_slider_2.jpg';




import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius:50 }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black",borderRadius:50 }}
        onClick={onClick}
      />
    );
  }
  
  const imageStyle = {
   width: '100%', // Fixed width
   height: '300px',
   objectFit: 'cover',
 };

function AllLodgesRw() {

    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

  return (
                <div className=" mt-10">
                        <Slider {...settings2}>
                        <a href='/rwanda/lodges/bisate' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Almanara} alt='All lodges' className=' mr-10' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Bisate Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Volcanoes, Rwanda</h1>
                        </a>
                      <a href='/rwanda/lodges/cleo' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>

                           <img src={Elephant} alt='All lodges' className=' mr-10'  style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Cleo Lake Kivu Hotel </h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Lake Kivu, Rwanda</h1>
                       </a>

                      <a href='/rwanda/lodges/forest' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>

                           <img src={Elsa} alt='All lodges' className=' mr-10'  style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Nyungwe Forest Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Nyungwe, Rwanda</h1>
                       </a>

                      <a href='/rwanda/lodges/kigaliserena' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>

                           <img src={Finch} alt='All lodges'  style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Kigali Serena Hotel</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Kigali, Rwanda</h1>
                       </a>

                      <a href='/rwanda/lodges/kivu' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>

                           <img src={Giraffe} alt='All lodges'  style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Lake Kivu Serena Hotel</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Lake Kivu, Rwanda</h1>
                       </a>

                      <a href='/rwanda/lodges/magashi' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Hemingways} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Magashi Camp</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Akagera, Rwanda</h1>
                       </a>

                      <a href='/rwanda/lodges/mantis' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Kampi} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Mantis Akagera Game Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Akagera, Rwanda</h1>
                       </a>

                      <a href='/rwanda/lodges/marriott' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Kicheche} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Kigali Marriott Hotel</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Kigali, Rwanda</h1>
                       </a>

                      <a href='/rwanda/lodges/nyungwe' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Kifaru} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">One&Only Nyungwe House</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Nyungwe, Rwanda</h1>
                       </a>

                      <a href='/rwanda/lodges/sabyinyo' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src='https://www.africanwelcomesafaris.com/wp-content/uploads/2019/10/Sabyinyo-Silverback-Lodge-2.jpg' alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Sabyinyo Silverback Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Volcanoes, Rwanda</h1>
                       </a>

                      <a href='/rwanda/lodges/singita' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Kinondo} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Singita Kwitonda Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Volcanoes, Rwanda</h1>
                       </a>

                    
                        
                        </Slider>
                   </div> 
  )
};

export default AllLodgesRw