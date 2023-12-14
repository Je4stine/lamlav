import React from 'react'
import Almanara from '../Assets/74650364.jpg';
import Elephant from '../Assets/Bakers-lodge-chalet.jpg';
import Elsa from '../Assets/The-Boma-Hotel-entebbe.jpg';
import FairMount from '../Assets/fairmount.jpg';
import Finch from '../Assets/volcanoes-safaris-mount-gahinga-lodge-standard-room.jpg';
import Giraffe from '../Assets/7998643-ishasha-wilderness-camp-ishasha.jpg';
import Hemingways from '../Assets/kyaninga-lodge-breakfast-on-the-terrace-1280.jpg';
import Kampi from '../Assets/1322152-mahogany-springs-bwindi-impenetrable-forest-national-park.jpg';
import Kicheche from '../Assets/7998707-mweya-safari-lodge-queen-elizabeth-national-park.jpg';
import Kifaru from '../Assets/Primate-Lodge-double-room.jpg';
import Kilanguni from '../Assets/461635418.jpg';
import Kinondo from '../Assets/405764732.jpg';
import Larsen from '../Assets/125258158.jpg';
import Lewa from '../Assets/b8b928ef.jpg';
import Loldia from '../Assets/323483133.jpg';
import Mara from '../Assets/15975620-room-at-bwindi-lodge.jpg';
import MaraPlains from '../Assets/270124520.jpg';
import Mbweha from '../Assets/mbweha.jpg';
import Medina from '../Assets/medina333.jpg';
import Neptune from '../Assets/rianta2.jpg';
import Norfolk from '../Assets/Almanara-2018-15.jpg';
import Odonyo from '../Assets/oldonyo1.jpg';
import Olkatai from '../Assets/ol-tukai-lodge-amboseli_153098540211.jpg';
import Porini from '../Assets/porini-rhino-camp-gallery-image-13-1444934892.jpg';
import Sands from '../Assets/sands.jpg';
import Saasab from '../Assets/sasaab.jpg';
import Tortilis from '../Assets/tortilis-1.jpg';
import Waine from '../Assets/waine.jpg';
import Watamu from '../Assets/Almanara-2018-15.jpg';



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

function AllLodgesUg() {

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
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
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
                        <a href='/uganda/lodges/apoka' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Almanara} alt='All lodges' className=' mr-10' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Apoka Safari Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Kidepo, Uganda</h1>
                        </a>

                      <a href='/uganda/lodges/bakers' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>

                           <img src={Elephant} alt='All lodges' className=' mr-10'  style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Baker's Lodge. </h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Murchisons, Uganda</h1>
                       </a>

                      <a href='/uganda/lodges/boma' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>

                           <img src={Elsa} alt='All lodges' className=' mr-10'  style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">The Boma Hotel  Entebbe</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Kampala and Entebe , Uganda</h1>
                       </a>

                      <a href='/uganda/lodges/gahinga' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>

                           <img src={Finch} alt='All lodges'  style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Mount Gahinga Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Mgahinga, Uganda</h1>
                       </a>

                      <a href='/uganda/lodges/ishasha' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>

                           <img src={Giraffe} alt='All lodges'  style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Ishasha Wilderness Camp</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Queen Elizabeth  , Uganda</h1>
                       </a>

                      <a href='/uganda/lodges/kyaninga' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Hemingways} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Kyaninga Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Kibale, Uganda</h1>
                       </a>

                      <a href='/uganda/lodges/mahogany' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Kampi} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Mahogany Springs Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Bwindi, Uganda</h1>
                       </a>

                      <a href='/uganda/lodges/mweya' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Kicheche} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Mweya Safari Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Queen Elizabeth, Uganda</h1>
                       </a>

                      <a href='/uganda/lodges/primate' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Kifaru} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Primate Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Kibale, Uganda</h1>
                       </a>

                      <a href='/uganda/lodges/protea' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Kilanguni} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Protea Hotel Kampala</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Rwenzori, Uganda</h1>
                       </a>

                      <a href='/uganda/lodges/sambiya' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Kinondo} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Sambiya River Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Murchison, Uganda</h1>
                       </a>

                      <a href='/uganda/lodges/serena' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Larsen} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Kampala  Serena  Hotel</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Kampala and Entebbe, Uganda</h1>
                       </a>

                      <a href='/uganda/lodges/sipi' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Loldia} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Sipi Valley  Resort</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Sipi, Uganda</h1>
                       </a>
                        
                      <a href='/uganda/lodges/trackers' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Lewa} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Trackers Safari Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Ziwa, Uganda</h1>
                       </a>
                        
                      <a href='/uganda/lodges/volcanoes' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Mara} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Volcanoes Bwindi Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Mgahinga, Uganda</h1>
                       </a>
                        
                      <a href='/uganda/lodges/wildwaters' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={MaraPlains} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Wildwaters Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-lg text-md mt-2 text-gray-600 uppercase">Jinja, Uganda</h1>
                       </a>
                        
                    
                        </Slider>
                   </div> 
  )
};

export default AllLodgesUg;