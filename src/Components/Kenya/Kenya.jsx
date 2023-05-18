import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Lion from '../../Assets/lion1.jpg';
import AmboseliN from '../../Assets/Natpa.jpg';
import Tsavo from '../../Assets/tsavo11.jpg';
import Lewaco from '../../Assets/lewacon.jpg';

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
               <hi className=" absolute top-[50%] lg:left-[35%] left-[20%] text-white lg:text-6xl text-6xl font-[SourceSerifPro-Bold] text-center ">
                    Why Kenya is Magical
                </hi>
            </div>
            <section className=" bg-white w-[100%] m-auto lg:px-[600px] px-10">
              <p className=" font-[SourceSerifPro-Regliar] pt-[50px] text-xl">
                Visitors worldwide are drawn to the bustling atmosphere and modern architecture of Nairobi, as well as its fine dining options. However, in the countryside, specifically in the treasured national parks and conservancies, the focus shifts from human activity to the awe-inspiring wildlife. Observing the Big Five becomes a natural experience in this region. These magnificent creatures captivate visitors with their numbers and opportunities for close-up observation.The thrilling events of the Great Migration, which take place annually in the Masai Mara, is one striking example. "You know you are trliy alive when you are living among lions." ~ Karen Blixen
                <br/><br/>For those seeking a more secluded safari experience, the Laikipia Plateau, with its endangered species such as the white rhinoceroses, Grévy's zebra and wild dog; and the sun-soaked Samburu National Reserve, with its cooling elephants in the Ewaso Ng'iro River, offer a different perspective. 
                <br/> <br/>In addition to wildlife viewing, a trip to Kenya presents the chance to learn about the Maasai cliture and to unwind on the idyllic beaches along the country's extensive coastline.
                <br/> <br/><strong>LAMLAV LEISURE  SAFARIS</strong> provides exclusive, inspiring, and authentic safari experiences through its Private Safaris, Custom Safaris, and Small group Classic Safaris that are always built  around  the tastes, preferences, and budget of every client.  
                <br/><br/>We showcase the diverse landscapes of Kenya including:
                <li>The world-famous Maasai Mara, which is the northern part of the Serengeti-Maasai Mara ecosystem and the greatest wildlife show on the planet.</li>
                <li>The breathtaking Amboseli National Park with views of Kilimanjaro.</li>
                <li>The brush and riverine areas of Samburu, Laikipia Plateau and  Mount Kenya. </li>
                <li>The stunning Lake Turkana, in the northern  district. </li>
                <li>The iconic  Tsavo West and Tsavo  East wildlife  sanctuaries </li>
              </p>
            </section>
            <section className=" bg-white flex flex-col items-center pt-20 ">
              <h1 className=" lg:text-5xl text-3xl font-[SourceSerifPro-Bold] text-center">Explore the Most  popular<br/>  spots in Kenya </h1>
              <div className=" lg:flex lg:justify-around mt-20 lg:px-[250px]">
                  <img src={AmboseliN} alt=" Lion" className=" lg:w-1/2 lg:h-3/4 m-auto"/>
                  <div className="p-5">
                      <h1 className=" font-[SourceSerifPro-Bold] mb-10 text-3xl">Amboseli  National  Reserve </h1>
                      <p className=" font-[SourceSerifPro-Regular] text-lg">
                        <em>The name "Amboseli" means "salty dust" in reference to the ancient volcanic ash that creates shimmering mirages and dust devils in the dry season, especially around seasonal Lake Amboseli</em>
                      </p>
                      <br/><p className=" font-[SourceSerifPro-Regular] text-lg">
                          Located in the Southern  part of Kenya, near the boarder with Tanzania,  the Amboseli National Park, is famed for its large herds of elephants and its spectacular views of Mount Kilimanjaro, the highest mountain in Africa, which can be seen in the background. It is only 392Km2 in size, and  an hour's  flight  or four hours drive from Nairobi City.
                      </p>
                      <a href='/kenya'><div className=' mt-10 border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto'>
                                <span >Explore more</span>
                      </div></a> 
                  </div>
              </div>

              <div className=" lg:flex lg:justify-around mt-20 lg:px-[250px]">
                  <img src={Tsavo} alt=" Lion" className=" lg:w-1/2 lg:h-3/4 m-auto"/>
                  <div className="p-5">
                      <h1 className=" font-[SourceSerifPro-Bold] mb-10 text-3xl">Tsavo  National  park </h1>
                      <p className=" font-[SourceSerifPro-Regular] text-lg">
                        <em>"It’s quite difficult to portray the magic of Tsavo in just a few words… It really grips your soul. Tremendous contrasts everywhere. Tsavo, in fact, has a greater bio-diversity than any other place on earth. The more you know about nature, the more you can learn" ~Dr Dame Daphne Sheldrick</em>
                      </p>
                      <br/><p className=" font-[SourceSerifPro-Regular] text-lg">
                        Tsavo National Park is a major tourist destination in Kenya located in the south-western part of the country. It consists of two separate parks, Tsavo East and Tsavo West, which are separated by a railway line. The park is famous for its man-eating lions, which were known for attacking construction workers during the building of the railway. The park spans an area of 13,747 square kilometers and offers visitors a diverse landscape, including rugged mountains in Tsavo West and semi-arid grasslands and savannah in Tsavo East, where visitors can see various wildlife species.                      </p>
                      <a href='/kenya'><div className=' mt-10 border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto'>
                                <span >Explore more</span>
                      </div></a> 
                  </div>
              </div>

              <div className=" lg:flex lg:justify-around mt-20 lg:px-[250px]">
                  <img src={Lewaco} alt=" Lion" className=" lg:w-1/2 lg:h-3/4 m-auto"/>
                  <div className="p-5">
                      <h1 className=" font-[SourceSerifPro-Bold] mb-10 text-3xl">Lewa Conservancy </h1>
                      <p className=" font-[SourceSerifPro-Regular] text-lg">
                        <em>The Lewa Conservancy, also called the Lewa Downs, is a groundbreaking World Heritage Site, established by the Craig family in 1996. The 250-square-mile conservancy was originally established to protect Kenya's rhinos, which today make up 13% of the country's rhino population.</em>
                      </p>
                      <br/><p className=" font-[SourceSerifPro-Regular] text-lg">
                      The Lewa Wildlife Conservancy is a safe haven for a wide range of wildlife species, including the big five. The conservancy is also home to various plains game species that are well-adapted to the semi-desert environment, such as Grevy's Zebra and Reticulated Giraffe. The Beisa Oryx and Greater Kudu, which are seasonal visitors, and the Guenther's Dikdik, Gerenuk and Somali Ostrich, which are residents all year round, are also present in the conservancy                        
                      </p>
                      <a href='/kenya'><div className=' mt-10 border-black border-[1px] rounded-md hover:bg-[#f15d30] hover:text-white h-[50px] w-[130px] flex items-center justify-center m-auto'>
                                <span >Explore more</span>
                      </div></a> 
                  </div>
              </div>

              
            </section>
        </div>
    )
};

export default Kenya;