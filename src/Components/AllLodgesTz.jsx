import React from 'react'
import Beho from '../Assets/Pool2.jpg';
import Elephant from '../Assets/Kleins-camp-serengeti-welcome-1024x576.jpg';
import Elsa from '../Assets/arusha-3.jpg';
import FairMount from '../Assets/fairmount.jpg';
import Finch from '../Assets/628bc79aa224f5ea4de88f24_Ngorongoro Crater Lodge.jpg';
import Giraffe from '../Assets/62b1bb8e048e2ace60499d7e_Greystoke-Mahale.jpg';
import Hemingways from '../Assets/628b581829afba6c79b12ddb_Kigelia-Ruaha-23.jpg';
import Kampi from '../Assets/kili_resort.jpg';
import Kicheche from '../Assets/kilindi-stone-town.jpg';
import Kifaru from '../Assets/397914775.jpg';
import Kilanguni from '../Assets/250368-lemala-serengeti-camp1.jpg';
import Kinondo from '../Assets/manor-at-ngorongoro-6.jpg';
import Larsen from '../Assets/287074672.jpg';
import Lewa from '../Assets/retreat_intro_3.jpg';
import Loldia from '../Assets/Manya1.jpg';
import Mara from '../Assets/lodge-and-pool-1200x900.jpg';
import MaraPlains from '../Assets/Onsea.jpg';
import Mbweha from '../Assets/mbweha.jpg';
import Medina from '../Assets//kilindi-stone-town.jpg';
import Neptune from '../Assets/TarangireTreetops---Game-Drive.jpg';




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

function AllLodgesTz() {

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
                        <a href='/tanzania/lodges/beho' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Beho} alt='All lodges' className=' mr-10' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Beho Beho Camp</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-400 uppercase">Nyerere National Park, Tanzania</h1>
                        </a>
                      <a href='/tanzania/lodges/beyond' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>

                           <img src={Elephant} alt='All lodges' className=' mr-10'  style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">&Beyond Klein's Camp </h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-400 uppercase">The Serengeti National Park, Tanzania</h1>
                       </a>

                      <a href='/tanzania/lodges/coffee' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>

                           <img src={Elsa} alt='All lodges' className=' mr-10'  style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Arusha Coffee Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-400 uppercase">Arusha, Tanzania</h1>
                       </a>

                      <a href='/tanzania/lodges/crater' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>

                           <img src={Finch} alt='All lodges'  style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Ngorongoro  Crater  Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-400 uppercase">Ngorongoro, Tanzania</h1>
                       </a>

                      <a href='/tanzania/lodges/greystoke' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>

                           <img src={Giraffe} alt='All lodges'  style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Greystoke Mahale</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-400 uppercase">Mahale National Park, Tanzania</h1>
                       </a>

                      <a href='/tanzania/lodges/kigelia' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Hemingways} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Kigelia Ruaha</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-400 uppercase">Nyerere National Park, Tanzania</h1>
                       </a>

                      <a href='/tanzania/lodges/kilimount' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Kampi} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Kilimanjaro  Mountain  Resort</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-400 uppercase">Kilimanjaro, Tanzania</h1>
                       </a>

                      <a href='/tanzania/lodges/kilindi' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Kicheche} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Kilindi</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-400 uppercase">Zanzibar, Tanzania</h1>
                       </a>

                      <a href='/tanzania/lodges/kuro' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Kifaru} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Kuro Tarangire</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-400 uppercase">Tarangire, Tanzania</h1>
                       </a>

                      <a href='/tanzania/lodges/lemala' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Kilanguni} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Lemala Ewanjan</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-400 uppercase">Serengeti National Park, Tanzania</h1>
                       </a>

                      <a href='/tanzania/lodges/manor' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Kinondo} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Manor At Ngorongoro</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-400 uppercase">Ngorongoro, Tanzania</h1>
                       </a>

                      <a href='/tanzania/lodges/manayarasecret' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Larsen} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Manyarasecret</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-400 uppercase">Lake Manyara's National Park, Tanzania</h1>
                       </a>

                      <a href='/tanzania/lodges/manyaratree' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Loldia} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Lake Manyara Tree Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-400 uppercase">Lake Manyara's National Park, Tanzania</h1>
                       </a>
                        
                      <a href='/tanzania/lodges/matemwe' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Lewa} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Matemwe Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-400 uppercase">Zanzibar, Tanzania</h1>
                       </a>
                        
                      <a href='/tanzania/lodges/neptune' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Mara} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Neptune Ngorongoro  Luxury  Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-400 uppercase">Ngorongoro, Tanzania</h1>
                       </a>
                        
                      <a href='/tanzania/lodges/onsea' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={MaraPlains} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Onsea House</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-400 uppercase">Arusha, Tanzania</h1>
                       </a>
                        
                      <a href='/tanzania/lodges/sasakwa' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src="https://cdn.audleytravel.com/1050/750/79/257948-sasakwa-hill-lodge.webp" alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Sasakwa Hill Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-400 uppercase">The Serengeti National Park, Tanzania </h1>
                       </a>
                        
                      <a href='/tanzania/lodges/singita' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Medina} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Singita Mara River Tented Camp</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-400 uppercase">The Serengeti National Park, Tanzania</h1>
                       </a>
                        

                      <a href='/tanzania/lodges/treetop' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Neptune} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Tarangire  Treetops Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-400 uppercase">Tarangire, Tanzania</h1>
                       </a>
                        
                                       
                        
                        </Slider>
                   </div> 
  )
};

export default AllLodgesTz