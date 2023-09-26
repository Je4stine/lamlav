import React from 'react'
import Almanara from '../Assets/Almanara-2018-15.jpg';
import Elephant from '../Assets/safari-in-samburu-by-muthaiga-travel-11-900x500.jpg';
import Elsa from '../Assets/elsa.jpg';
import FairMount from '../Assets/fairmount.jpg';
import Finch from '../Assets/finch-hattons-tsavo-star-gazing.jpg';
import Giraffe from '../Assets/giraffe2.jpg';
import Hemingways from '../Assets/Hem1.jpg';
import Kampi from '../Assets/kampi.jpg';
import Kicheche from '../Assets/Kicheche.jpg';
import Kifaru from '../Assets/Kifaru2.jpg';
import Kilanguni from '../Assets/dining-room-at-kilaguni-serena.jpg';
import Kinondo from '../Assets/kinindo.jpg';
import Larsen from '../Assets/larsens.jpg';
import Lewa from '../Assets/safariccamp.jpg';
import Loldia from '../Assets/lodia.jpg';
import Mara from '../Assets/Almanara-2018-15.jpg';
import MaraPlains from '../Assets/great-plains-conservation-mara-plains-bridge-600x400.jpg';
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

function AllLodges() {

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
                        <a href='/kenya/almanara' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Almanara} alt='All lodges' className=' mr-10' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Almanara</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Mombasa, Kenya</h1>
                        </a>
                      <a href='/kenya/elephant' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>

                           <img src={Elephant} alt='All lodges' className=' mr-10'  style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Elephant Bedroom Samburu </h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Samburu National Park, Kenya</h1>
                       </a>

                      <a href='/kenya/elsa' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>

                           <img src={Elsa} alt='All lodges' className=' mr-10'  style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Elsa's Kopjelsa</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Meru , Kenya</h1>
                       </a>

                      <a href='/kenya/finch' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>

                           <img src={Finch} alt='All lodges'  style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Finch Hatton's Luxury Camp</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Tsavo National Park, Kenya</h1>
                       </a>

                      <a href='/kenya/giraffe' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>

                           <img src={Giraffe} alt='All lodges'  style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Giraffe Manor</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Nairobi, Kenya</h1>
                       </a>

                      <a href='/kenya/hemingways' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Hemingways} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Hemingways Nairobi</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Nairobi, Kenya</h1>
                       </a>

                      <a href='/kenya/campi' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Kampi} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Kampi ya Kazi</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Chyullu Hills, Kenya</h1>
                       </a>

                      <a href='/kenya/kicheche' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Kicheche} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Kicheche Laikipia Camp</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Ol Pejeta Conservancy, Kenya</h1>
                       </a>

                      <a href='/kenya/kifaru' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Kifaru} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Kifaru House</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Lewa Conservancy, Kenya</h1>
                       </a>

                      <a href='/kenya/kilanguni' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Kilanguni} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Kilanguni Serena Safari Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Tsavo National Park, Kenya</h1>
                       </a>

                      <a href='/kenya/kinondo' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Kinondo} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Kinondo Kwetu</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Mombasa, Kenya</h1>
                       </a>

                      <a href='/kenya/larsen' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Larsen} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Larsens Camp</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Samburu National Park</h1>
                       </a>

                      <a href='/kenya/loldia' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Loldia} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Loldia House & Cottages</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Lake Nakuru and Naivasha, Kenya</h1>
                       </a>
                        
                      <a href='/kenya/lewa' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Lewa} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Lewa Safari  Camp.</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Lewa Conservancy, Kenya</h1>
                       </a>
                        
                      <a href='/kenya/marares' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Mara} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Mara Serena Safari Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Maasai Mara National Park, Kenya</h1>
                       </a>
                        
                      <a href='/kenya/maraplains' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={MaraPlains} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Mara Plain Camps</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Maasai Mara National Park, Kenya</h1>
                       </a>
                        
                      <a href='/kenya/mbweha' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Mbweha} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Mbweha Camp</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Lake Nakuru and Naivasha, Kenya </h1>
                       </a>
                        
                      <a href='/kenya/medina' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Medina} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Medina Palms</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Watamu, Kenya</h1>
                       </a>
                        

                      <a href='/kenya/neptune' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Neptune} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Neptune Mara Rianta Luxury Tented Camps</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Maasai Mara National Park, Kenya</h1>
                       </a>
                        
                       <a href='/kenya/norfolk' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Norfolk} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Fairmount  Norfolk Hotel</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Nairobi, Kenya</h1>
                       </a>
                        
                      <a href='/kenya/oldonyo' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Odonyo} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Ol Donyo Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Chyullu Hills, Kenya</h1>
                       </a>
                        
                      <a href='/kenya/porini' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Porini} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Porini Rhino Camp</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Ol pejeta, Kenya</h1>
                       </a>
                        
                      <a href='/kenya/sands' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Sands} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">The Sands at Nomad</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Mombasa, Kenya</h1>
                       </a>
                      <a href='/kenya/sasaab' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Saasab} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Sasaab Samburu</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Samburu National Park, Kenya</h1>
                       </a>

                      <a href='/kenya/amboseli/tortolis' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Tortilis} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Tortolis Camp</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Amboseli National Park, Kenya</h1>
                       </a>

                      <a href='/kenya/waine' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Waine} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">House of Waine</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Nairobi, Kenya</h1>
                       </a>

                      <a href='/kenya/hemwatamu' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Watamu} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Hemingways Hotel Watamu</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Watamu, Kenya</h1>
                       </a>

                      <a href='/kenya/amboseli/oltukai' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={Olkatai} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Ol Tukai  Lodge</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Amboseli National Park, Kenya</h1>
                       </a>

                      <a href='/kenya/fairmount' className=' flex flex-col p-10 items-center justify-center cursor-pointer hover:text-orange-500'>
                           <img src={FairMount} alt='All lodges' style={imageStyle}/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-2xl mt-2 font-bold">Fairmount Mount Kenya</h1>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2 text-gray-600 uppercase">Mount Kenya, Kenya</h1>
                       </a>
                        
                        </Slider>
                   </div> 
  )
};

export default AllLodges