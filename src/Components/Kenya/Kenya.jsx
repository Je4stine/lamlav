import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Lion from '../../Assets/lion1.jpg';

const Kenya = ()=>{
    const [colorChanged, setColorChanged]= useState(false);

    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
          setColorChanged(true);
        }
        else{
          setColorChanged(false);
        }
     };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <div>
            {
                colorChanged ? <Navreveal/> : <Navbar/>
            }
            <div className=" relative">
               <img src={Lion} loading="lazy" className=" w-[100vw] h-[100vh] object-cover" alt="Lion"/>
               <hi className=" absolute top-[50%] lg:left-[35%] left-[20%] text-white lg:text-6xl text-3xl font-[SourceSerifPro-Bold] text-center ">
                    Why Kenya is Magical?
                </hi>
            </div>
            <section className=" bg-white w-[100%] m-auto lg:px-[600px] px-10">
              <p className=" font-[SourceSerifPro-Regular] pt-[50px] text-xl">
                Kenya is a rapidly developing country, and visitors are drawn to the bustling atmosphere and modern architecture of Nairobi, as well as its fine dining options. However, in the countryside, specifically in the treasured national parks and conservancies, the focus shifts from human activity to the awe-inspiring wildlife.Observing the Big Five becomes a natural experience in this region. These magnificent creatures captivate visitors with their numbers and opportunities for close-up observation.The thrilling events of the Great Migration, which take place annually in the Masai Mara, is one striking example. As author Isak Dinesen once noted, <em>"The sight of a lion goes straight to the heart."</em><br/><br/>
                For those seeking a more secluded safari experience, the Laikipia Plateau, with its endangered species such as Grévy's zebra and wild dog; and the sun-soaked Samburu National Reserve, with its cooling elephants in the Ewaso Ng'iro River, offer a different perspective.<br/><br/>
                In addition to wildlife viewing, a trip to Kenya presents the chance to learn about the Maasai culture and unwind on the idyllic beaches along the country's extensive coastline.<br/><br/>
                <strong>LAMLAV LEISURE  SAFARIS</strong> provides exclusive and personalized safari experiences through its Private Safaris, Custom Safaris, and Small group Classic Safaris with guaranteed departures. We showcase the diverse landscapes of Kenya, including the desert of the Northern District, the stunning Lake Turkana, the brush and riverine areas of Samburu, the grand Laikipia Plateau with Mount Kenya, the breathtaking Amboseli National Park with views of Kilimanjaro, and the world-famous Maasai Mara, which is the northern part of the Serengeti-Maasai Mara ecosystem and the greatest wildlife show on the planet.

              </p>
            </section>
            <section className=" bg-white flex flex-col items-center pt-20">
              <h1 className=" lg:text-5xl text-3xl font-[SourceSerifPro-Bold] text-center">Explore the Most  popular<br/>  spots in Kenya </h1>
            </section>
        </div>
    )
};

export default Kenya;