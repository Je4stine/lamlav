import React from 'react';
import Destination1 from "../../../Assets/leo.jpg";
import Destination2 from "../../../Assets/moon.jpg";
import Destination3 from "../../../Assets/migr.jpg";
import Destination4 from "../../../Assets/ambo.jpg";
import Destination5 from '../../../Assets/wildness.jpg'

import {useNavigate} from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';


function SafariDeets() {
  return (
    <div className=" items-center m-auto p-5" id= 'Destination'>
    <h1 className=" my-[50px] font-bold text-5xl max-[768px]:text-xl max-[768px]:my-10">Luxury East African Safaris </h1>
    
    
    <div className=" ">

    <Bounce top>
        <div className=' bg-white mb-3 mr-4 lg:flex'>
            <img src={Destination1} alt="Destination images" className=' lg:w-1/2 object-cover'/>
            <div className=' px-5 pb-5 lg:w-1/2'>
                <h1 className=' font-[SourceSerifPro-Black] text-xl my-5 text-red-900'> Mara Serengeti Great Migration Safari</h1>
                <h2 className=' text-lg italic font-bold mb-10 text-red-900'> Presenting an exceptionally memorable and unabashedly luxurious safari experience within the Mara and Serengeti ecosystems. </h2>
                <p className=' font-[SourceSerifPro-Regular]'>
                The Great Migration safari epitomizes the essence of East Africa, introducing you to renowned locations and, more importantly, unveiling extraordinary places that are truly unparalleled elsewhere on the planet. Throughout your safari, immerse yourself in the authenticity of tented camps and partake in various experiences, including game drives, sundowners, hot air balloon rides, guided walking tours, and bush meals.                     </p>
                <p className=' my-5 text-lg font-[SourceSerifPro-Regular] text-red-900'> 10days/9 nights from $ 9,700 per person.</p>
                <a href='/migration' className=' flex border border-red-900 rounded-md p-3 my-5 w-[150px] items-center justify-center hover:text-white duration-500 hover:bg-red-900'>
                    <h1 className=' font-[SourceSerifPro-Black]'>Learn More</h1>
                </a>
                <p className=''> </p>
            </div>
        </div>
       </Bounce>

        <Bounce top>
        <div className=' bg-white mb-3 mr-4 lg:flex'>
            <img src={Destination3} alt="Destination images" className=' lg:w-1/2 object-cover'/>
            <div className=' px-5 pb-5 lg:w-1/2'>
                <h1 className=' font-[SourceSerifPro-Black] text-xl my-5 text-red-900'> GREAT MIGRATION  SAFARI - Kenyan  Edition</h1>
                <h2 className=' text-lg italic font-bold mb-10 text-red-900'> Experience the pulse of nature and the grandeur of wildlife in a seamless exploration of diverse landscapes. </h2>
                <p className=' font-[SourceSerifPro-Regular]'>
                This is a high-end Kenyan safari that's very popular among those who want to experience Africa's renowned savannahs and witness the awe-inspiring wildebeest migrations up close. The safari covers three of Kenya's top wildlife sanctuaries: Nairobi National Park, Lewa Conservancy in the Laikipia Plateau, and the famous Maasai Mara game reserve, which is known for its incredible wildlife sightings.                     </p>
                <p className=' my-5 text-lg font-[SourceSerifPro-Regular] text-red-900'>  10days/9nights, from $9,127 per person.</p>
                <a href='/mara' className=' flex border border-red-900 rounded-md p-3 my-5 w-[150px] items-center justify-center hover:text-white duration-500 hover:bg-red-900'>
                    <h1 className=' font-[SourceSerifPro-Black]'>Learn More</h1>
                </a>
                <p className=''> </p>
            </div>
        </div>
       </Bounce>

        <Bounce top>
        <div className=' bg-white mb-3 mr-4 lg:flex'>
            <img src={Destination2} alt="Destination images" className=' lg:w-1/2 object-cover'/>
            <div className=' px-5 pb-5 lg:w-1/2'>
                <h1 className=' font-[SourceSerifPro-Black] text-xl my-5 text-red-900'> Lamlav Honeymoon Safari</h1>
                <h2 className=' text-lg italic font-bold mb-10 text-red-900'> An adventure  that feeds your Soul </h2>
                <p className=' font-[SourceSerifPro-Regular]'>
                By commemorating your union in a grand fashion, at some of the finest honeymoon destinations in Kenya, Lamlav Honeymoon Safari presents you an opportunity to discover and create unforgettable memories that you will forever cherish. This safari package guarantees lavish stays at top-rated accommodations that includes: the Hemingways Hotel in Nairobi, Kicheche Safari Camp in the southern part of Laikipia's Ol Pejeta Conservancy, Ol Seki Hemingways in Maasai Mara, and the renowned Hemingway's Hotel in the beguiling Watamu                    </p>
                <p className=' my-5 text-lg font-[SourceSerifPro-Regular] text-red-900'>  12days/11Nights from $ 13,055 per person.</p>
                <a href='/honeymoon' className=' flex border border-red-900 rounded-md p-3 my-5 w-[150px] items-center justify-center hover:text-white duration-500 hover:bg-red-900'>
                    <h1 className=' font-[SourceSerifPro-Black]'>Learn More</h1>
                </a>
                <p className=''> </p>
            </div>
        </div>
       </Bounce>

        <Bounce top>
        <div className=' bg-white mb-3 mr-4 lg:flex'>
            <img src={Destination4} alt="Destination images" className=' lg:w-1/2 object-cover'/>
            <div className=' px-5 pb-5 lg:w-1/2'>
                <h1 className=' font-[SourceSerifPro-Black] text-xl my-5 text-red-900'> Kenya Safari and Beach Holiday</h1>
                <h2 className=' text-lg italic font-bold mb-10 text-red-900'> Explore the Kenyan  wildlife  havens  in Style. </h2>
                <p className=' font-[SourceSerifPro-Regular]'>
                Bush and beach is one of Lamlav's  most  comprehensive  safari  package  that  matchlessly introduces you to the country's most  treasured  and exhilarating  savannahs:  the city's Nairobi  National  park,  the Iconic Maasai  Mara Game  Reserve and Tsavo West and East National  Parks.                     </p>
                <p className=' my-5 text-lg font-[SourceSerifPro-Regular] text-red-900'>  14Days/13Nights tour from $17,400 per person.</p>
                <a href='/amboseli' className=' flex border border-red-900 rounded-md p-3 my-5 w-[150px] items-center justify-center hover:text-white duration-500 hover:bg-red-900'>
                    <h1 className=' font-[SourceSerifPro-Black]'>Learn More</h1>
                </a>
                <p className=''> </p>
            </div>
        </div>
      </Bounce>

        
       <Bounce top>
        <div className=' bg-white mb-3 mr-4 lg:flex'>
            <img src={Destination5} alt="Destination images" className=' lg:w-1/2 object-cover'/>
            <div className=' px-5 pb-5 lg:w-1/2'>
                <h1 className=' font-[SourceSerifPro-Black] text-xl my-5 text-red-900'> Lamlav Great Wilderness Safari</h1>
                <h2 className=' text-lg italic font-bold mb-10 text-red-900'> A truly indulgent  and quintessential  Kenyan Safari experience.   </h2>
                <p className=' font-[SourceSerifPro-Regular]'>
                Great Wilderness safari package offers you a chance to explore the Kenyan legendary savannahs in the Amboseli National Park , Lewa Conservancy in the dramatic Laikipia plateau, and the famed Maasai Mara Game Reserve, all while enjoying leisurely stays at the most refined and lavishly elegant resorts.                    </p>
                <p className=' my-5 text-lg font-[SourceSerifPro-Regular] text-red-900'> 10days/9nights, from $13,241.00 per person.</p>
                <a href='/wilderness' className=' flex border border-red-900 rounded-md p-3 my-5 w-[150px] items-center justify-center hover:text-white duration-500 hover:bg-red-900'>
                    <h1 className=' font-[SourceSerifPro-Black]'>Learn More</h1>
                </a>
                <p className=''> </p>
            </div>
        </div>
       </Bounce>
        
        <Bounce top>
        <div className=' bg-white mb-3  mr-4 lg:flex'>
            <img src="https://cdn.kimkim.com/files/a/images/4ae80a4bbd736d119a07254e1b141c78a3c28341/original-791d0a79388bd3274678e278870f6d2b.jpg" alt="Destination images" className=' lg:w-1/2 object-cover'/>
            <div className=' px-5 pb-5 lg:w-1/2'>
                <h1 className=' font-[SourceSerifPro-Black] text-xl my-5 text-red-900'>Spirit of Uganda</h1>
                <h2 className=' text-lg italic font-bold mb-10 text-red-900'> Explore the marvels of Uganda witha a hint of indulgence </h2>
                <p className=' font-[SourceSerifPro-Regular]'>
                This expedition is customized specifically for safari enthusiasts seeking a thorough exploration of the diverse  landscapes  of Uganda and it's  amazing  game and/or  primates.  
                </p>
                <p className=' my-5 text-lg font-[SourceSerifPro-Regular] text-red-900'> 15days/14nights from $ 17,567 per person.</p>
                <a href='/uganda/spiritofug' className=' flex border border-red-900 rounded-md p-3 my-5 w-[150px] items-center justify-center hover:text-white duration-500 hover:bg-red-900'>
                    <h1 className=' font-[SourceSerifPro-Black]'>Learn More</h1>
                </a>
                <p className=''> </p>
            </div>
        </div>
       </Bounce>

        <Bounce top>
        <div className=' bg-white mb-3 mr-4 lg:flex'>
            <img src="https://i0.wp.com/www.allugandasafaris.com/wp-content/uploads/2022/05/Family-Safaris-Uganda.jpg?w=750&ssl=1" alt="Destination images" className=' lg:w-1/2 object-cover'/>
            <div className=' px-5 pb-5 lg:w-1/2'>
                <h1 className=' font-[SourceSerifPro-Black] text-xl my-5 text-red-900'>Uganda Family Safari</h1>
                <h2 className=' text-lg italic font-bold mb-10 text-red-900'> Experience a family safari that combines gorillas, magnificent wildlife, adventure, and rich culture.  </h2>
                <p className=' font-[SourceSerifPro-Regular]'>
                This journey is centered around three of Uganda's most iconic destinations: Jinja town, Queen Elizabeth National Park, and Bwindi Impenetrable Forest. Rest assured, you'll have the opportunity to witness the finest wildlife that Uganda has to offer.                    </p>
                <p className=' my-5 text-lg font-[SourceSerifPro-Regular] text-red-900'> 12days/11nights from $ 8,567 per person.</p>
                <a href='/uganda/familysafari' className=' flex border border-red-900 rounded-md p-3 my-5 w-[150px] items-center justify-center hover:text-white duration-500 hover:bg-red-900'>
                    <h1 className=' font-[SourceSerifPro-Black]'>Learn More</h1>
                </a>
                <p className=''> </p>
            </div>
        </div>
       </Bounce>

        <Bounce top>
        <div className=' bg-white mb-3 mr-4 lg:flex'>
            <img src="https://www.naturaltoursandsafaris.com/wp-content/uploads/2020/01/Wildebeest-Migration-Maasai-Mara-Natural-World-Kenya-Safaris.jpg" alt="Destination images" className=' lg:w-1/2 object-cover'/>
            <div className=' px-5 pb-5 lg:w-1/2'>
                <h1 className=' font-[SourceSerifPro-Black] text-xl my-5 text-red-900'>KENYA & TANZANIA GREAT MIGRATION HOLIDAY</h1>
                <h2 className=' text-lg italic font-bold mb-10 text-red-900'> Experience the thrill of being at the epicenter of the Great Wildebeest Migration, surrounded by the untamed wilderness while enjoying all the refined comforts you desire. </h2>
                <p className=' font-[SourceSerifPro-Regular]'>
                This expedition is  tailor-made  for safari  aficionados who wish to embark on an adventurous East Africa safari, flying between Kenya and Tanzania's top safari spots, for an incredible chance to witness the renowned wildebeest migration.                     </p>
                <p className=' my-5 text-lg font-[SourceSerifPro-Regular] text-red-900'> 13days/12 nights from $ 15,275 per person.</p>
                <a href='/tanzania/ultimatemigration' className=' flex border border-red-900 rounded-md p-3 my-5 w-[150px] items-center justify-center hover:text-white duration-500 hover:bg-red-900'>
                    <h1 className=' font-[SourceSerifPro-Black]'>Learn More</h1>
                </a>
                <p className=''> </p>
            </div>
        </div>
       </Bounce>

        <Bounce top>
        <div className=' bg-white mb-3 mr-4 lg:flex'>
            <img src="https://secretafrica.com/wp-content/uploads/2021/10/Best-Time-To-Go-To-Tanzania-36.jpg" alt="Destination images" className=' lg:w-1/2 object-cover'/>
            <div className=' px-5 pb-5 lg:w-1/2'>
                <h1 className=' font-[SourceSerifPro-Black] text-xl my-5 text-red-900'>Splendor of Tanzania</h1>
                <h2 className=' text-lg italic font-bold mb-10 text-red-900'> An iconic safari combining the perfect blend of adventure, cultural immersion, and relaxation. </h2>
                <p className=' font-[SourceSerifPro-Regular]'>
                Experience the genuine and lasting safari adventures by Elewana collections in the heart of Tanzania's Northern wilderness.With this safari, you will greatly immerse yourself in the warm and authentic East African hospitality, top-tier cuisine, and exceptional comfort and service.                    </p>
                <p className=' my-5 text-lg font-[SourceSerifPro-Regular] text-red-900'> 10days/9nights From $ 11,860 per person.</p>
                <a href='/tanzania/splendoftz' className=' flex border border-red-900 rounded-md p-3 my-5 w-[150px] items-center justify-center hover:text-white duration-500 hover:bg-red-900'>
                    <h1 className=' font-[SourceSerifPro-Black]'>Learn More</h1>
                </a>
                <p className=''> </p>
            </div>
        </div>
       </Bounce>

        <Bounce top>
        <div className=' bg-white mb-3 mr-4 lg:flex'>
            <img src="https://live.staticflickr.com/8740/16298396774_e6d631a1e7_b.jpg" alt="Destination images" className=' lg:w-1/2 object-cover'/>
            <div className=' px-5 pb-5 lg:w-1/2'>
                <h1 className=' font-[SourceSerifPro-Black] text-xl my-5 text-red-900'>Treasures of a thousand hills</h1>
                <h2 className=' text-lg italic font-bold mb-10 text-red-900'> An adventure amidst the captivating allure of misty volcanoes densely cloaked in jungle foliage.</h2>
                <p className=' font-[SourceSerifPro-Regular]'>
                This adventure encompasses the finest aspects of Rwanda, including stops in the capital, Kigali, the high-altitude cloud forests of Volcanoes National Park, the ancient Lake Kivu, and the Afro montane forests of Nyungwe National Park. During your journey, you'll have the chance to encounter not only the endangered mountain gorillas but also chimpanzees, golden monkeys, and colobus monkeys.                    </p>
                <p className=' my-5 text-lg font-[SourceSerifPro-Regular] text-red-900'> 10days/9nights From $ 11,860 per person.</p>
                <a href='/rwanda/thousandhills' className=' flex border border-red-900 rounded-md p-3 my-5 w-[150px] items-center justify-center hover:text-white duration-500 hover:bg-red-900'>
                    <h1 className=' font-[SourceSerifPro-Black]'>Learn More</h1>
                </a>
                <p className=''> </p>
            </div>
        </div>
       </Bounce>

        <Bounce top>
        <div className=' bg-white mb-3 mr-4 lg:flex'>
            <img src="https://drive.google.com/uc?export=view&id=1UlAmCffzQ7pgYoRwUwB1LCaL588Jpsw5" alt="Destination images" className=' lg:w-1/2 object-cover'/>
            <div className=' px-5 pb-5 lg:w-1/2'>
                <h1 className=' font-[SourceSerifPro-Black] text-xl my-5 text-red-900'>Rwanda Gorilla and Game Vacation</h1>
                <h2 className=' text-lg italic font-bold mb-10 text-red-900'>An uplifting safari experience in Rwanda </h2>

                <p className=' font-[SourceSerifPro-Regular]'>
                This exclusive itinerary effortlessly blends a gorilla tracking adventure within the breathtaking Volcanoes National Park with a classic safari in Akagera National Park, which happens to be Rwanda's sole protected area where you can encounter the Big Five.                    </p>
                <p className=' my-5 text-lg font-[SourceSerifPro-Regular] text-red-900'> 10days/9nights From $ 11,860 per person.</p>
                <a href='/rwanda/gorilla' className=' flex border border-red-900 rounded-md p-3 my-5 w-[150px] items-center justify-center hover:text-white duration-500 hover:bg-red-900'>
                    <h1 className=' font-[SourceSerifPro-Black]'>Learn More</h1>
                </a>
                <p className=''> </p>
            </div>
        </div>
       </Bounce>


        
    </div>
  </div>  
  )
}

export default SafariDeets