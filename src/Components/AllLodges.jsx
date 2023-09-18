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
import MaraPlains from '../Assets/maraserena.jpg';
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
                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={Almanara} alt='All lodges' className=' mr-10'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Almanara</h1>
                        </div>
                        <div className=' flex flex-col p-10 items-center justify-center'>

                           <img src={Elephant} alt='All lodges' className=' mr-10'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Elephant Bedroom Samburu </h1>
                        </div>

                        <div className=' flex flex-col p-10 items-center justify-center'>

                           <img src={Elsa} alt='All lodges' className=' mr-10'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Elsa's Kopjelsa</h1>
                        </div>

                        <div className=' flex flex-col p-10 items-center justify-center'>

                           <img src={Finch} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Finch Hatton's Luxury Camp</h1>
                        </div>

                        <div className=' flex flex-col p-10 items-center justify-center'>

                           <img src={Giraffe} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Giraffe Manor</h1>
                        </div>

                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={Hemingways} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Heminways Nairobi</h1>
                        </div>

                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={Kampi} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Kampi ya Kazi</h1>
                        </div>

                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={Kicheche} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Kicheche Laikipia Camp</h1>
                        </div>

                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={Kifaru} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Kifaru House</h1>
                        </div>

                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={Kilanguni} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Kilanguni Serena Safari Lodge</h1>
                        </div>

                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={Kinondo} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Kinindo Kwetu</h1>
                        </div>

                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={Larsen} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Larsens Camp</h1>
                        </div>

                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={Loldia} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Loldia House & Cottages</h1>
                        </div>
                        
                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={Lewa} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Lewa Safari  Camp.</h1>
                        </div>
                        
                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={Mara} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Mara</h1>
                        </div>
                        
                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={MaraPlains} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Mara Plain Camps</h1>
                        </div>
                        
                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={Mbweha} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Mbweha Camp</h1>
                        </div>
                        
                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={Medina} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Medina Palms</h1>
                        </div>
                        

                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={Neptune} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Neptune Mara Rianta Luxury Tented Camps</h1>
                        </div>
                        
                         <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={Norfolk} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Fairmount  Norfolk Hotel</h1>
                        </div>
                        
                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={Odonyo} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Ol Donyo Lodge</h1>
                        </div>
                        
                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={Porini} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Porini Rhino Camp</h1>
                        </div>
                        
                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={Sands} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Sands</h1>
                        </div>
                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={Saasab} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Sasaab Samburu</h1>
                        </div>

                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={Tortilis} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Tortolis Camp</h1>
                        </div>

                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={Waine} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Waine</h1>
                        </div>

                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={Watamu} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Watamu</h1>
                        </div>

                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={Olkatai} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Ol Tukai  Lodge</h1>
                        </div>

                        <div className=' flex flex-col p-10 items-center justify-center'>
                           <img src={FairMount} alt='All lodges'/>
                           <h1 className="font-[SourceSerifPro-Regular] text-lg lg:text-xl mt-2">Fairmount Mount Kenya</h1>
                        </div>
                        
                        </Slider>
                    </div> 
  )
};

export default AllLodges