import { useState } from 'react';
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import Navreveal from "../../Navbar/Navreveal";

const FAQs =()=>{

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
        <div className=" relative flex flex-col flex-1 min-h-screen" >
            {
                colorChanged ? <Navreveal/> : <Navbar/>
            }
          <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mt-10">
              <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently asked questions</h2>
              <div className="grid pt-8 text-left border-t border-gray-200 lg:gap-16 dark:border-gray-700 lg:grid-cols-2">
                
                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                              When is the best time to visit Kenya?
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                          Generally,  dry season is the best time for game-viewing  and the best times  to visit Kenya are December through  March, and between  Mid July to late October - the  Great Wildebeest  Migration  period. The only time to avoid Kenya and East Africa in general,  is during the main rainy season  that typically  lasts from April  to  May with a short wet season  during November. 
                          </p>
                      </div>

                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                              Do I need a Visa to travel to Kenya?
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                          Yes,Visas are required by everyone except citizens of some commonwealth countries and certain countries with which Kenya has a reciprocal waivier arrangements. Citizens of Australia ,Canada, USA, UK, Ireland, New zealand, France, and most European countries require visa. 
                          <br/><br/>To apply online, please visit evisa.go.ke/evisa.html, and have your e-visa ready to be printed out within seven business days. This is a quick and straightforward procedure. For a multiple - entry visa, you should obtain an application form from the nearest Kenyan Embassy or High Commission, and allow atleast a week for Processing. Since these arrangements may change, It is essential to double- check on visa requirements well ahead of the trip.
                          </p>
                      </div>

                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                              What Immunizations are required?
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                          It is important to check the latest recommendations from the Centers for Disease Control and Prevention (CDC) or a healthcare professional, as the required vaccinations may change depending on factors such as individual health, planned activities, and duration of stay in Kenya.However, No immunizations are required to enter Kenya if arriving from the United States, Canada or Europe.
                          </p>
                      </div>

                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                              Do I need Travel Insurance ?
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                          Travel Insurance Offers many advantages and we highly recommend that our clients have a policy that covers their trips while abroad - It is not a mandatory requirement though.
                          </p>
                      </div>


                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                              How is the weather in Kenya and Tanzania ?
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                          Both Kenya and Tanzania are located near the equator, so they generally have a tropical climate with warm temperatures and high humidity. The rainy seasons in these countries typically occur in the spring and fall, while the summer months can be dry and hot. Generally, Temperature variance is determined more by region than by season: upcountry areas such as Mount Kenya and the Aberdares are at elevated altitudes and  can be cool, while the drier bush country is warmer. Mombasa and Zanzibar quite hot
                          </p>
                      </div>


                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                              Can young children be Included on a safari?
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                          Situations can vary depending on the country you wish to visit. But In Kenya, there's no minimum age for children and our Safaris - the family Safaris  in particular - can be tailored to accomodate children of any age. Please call / Whatsapp us on +254 716 251 937 to discuss which Safari is best suited for you and your family.
                          </p>
                      </div>


                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                              What type of clothing should I wear?
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                          Just a select clothing for all Seasons. Light and casual is the clothing code for the coast and on a Safari. Any light clothing In Muted Colours, plus a hat and sunglasses for protection against the Sun will do. For footwear, Comfort should take precedence over style. 
                            <br/> <br/>Since laundry Services are available In most places we visit, we advice that you resist the temptation of our-packing. Smart casual attire is appropriate in the evenings as formal clothing is not necessary unless you want to make your evening formal.
                          </p>
                      </div>



                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                              When is the best time to witness the Great Migration?
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                          The Great Wildebeest Migration is an annual event where over 1.5 million wildebeest, along with hundreds of thousands of zebras and gazelles, migrate clockwise in a circular route in search of fresh grazing lands and water sources in the Serengeti-Masai Mara ecosystem in East Africa.
                          <br/> <br/>The best time to see the Great Wildebeest Migration depends on where the animals are, in their migration cycle. Typically, the migration begins in late December to early January in the Southern Serengeti; and the best time to see the herds crossing the Mara River in Kenya is from July to October.
                          <br/> <br/>If you want to see the calving of the wildebeest, the best time is January and February in the Southern Serengeti.  However, the migration is a constantly evolving phenomenon, and the timing and location of the herds can vary year to year
                          </p>
                      </div>


                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                              What happens When I get sick while on a Safari?
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                          Medical Services are first class In Kenya than most  other African Countries.There are good quality medical facilities in Nairobi, and the Coast with specialist physicians and Surgions. Therefore,you are assured of first class medical attention In Kenya, should you fall sick or require urgent medical attention, In more remote regions of East Africa, you will access the Services of highy specialised medics in flight- the flying Doctors.
                          </p>
                      </div>


                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                              What are  the " Big Fives " In Africa?
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                          The "Big Five" is a term used to describe the five most iconic and difficult-to-hunt large mammals in Africa, and today it is often used to refer to the five most sought-after wildlife species for tourists to see on an African safari.They have become synonymous with an African wildlife experience and continue to draw tourists from around the world to African countries like Kenya, Tanzania, South Africa, and more. They include: Lion, Elephant,  Buffalo,  Leopard  and the Rhinoceros. 
                          <br/> <br/><strong>Lion</strong>: Known for its strength and dominance, the lion is the king of the African savanna.
                          <br/> <br/><strong>Elephant</strong>: The largest land mammal on earth, elephants are known for their intelligence and social behavior.
                          <br/> <br/><strong>Buffalo</strong>: Known for their powerful horns and unpredictable nature, buffalo are one of the most dangerous animals in Africa.
                          <br/> <br/><strong>Leopard</strong>: A solitary and elusive predator, the leopard is known for its distinctive markings and powerful hunting abilities.
                          <br/> <br/><strong>Rhinoceros</strong>: With its distinctive horn, the rhinoceros is one of the most recognizable and endangered animals in Africa.
                          </p>
                      </div>

                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                              What are the best places to visit in Kenya and Tanzania?
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                          Kenya and Tanzania are both popular tourist destinations known for their stunning landscapes, rich wildlife, and cultural heritage. Here are some of the best places to visit in both countries:
                          <br/>Maasai Mara National Reserve (Kenya), is great wildlife reserve  known for its stunning landscapes and rich wildlife, including the Great Wildebeest Migration.
                          <br/> <br/><strong>Serengeti National Park (Tanzania) </strong>, is a park is known for its large herds of wildlife, including the Great Wildebeest Migration, and its breathtaking landscapes.
                          <br/> <br/><strong>Ngorongoro Crater (Tanzania)</strong>,  is a large, intact volcanic crater and home to a diverse array of wildlife, including lions, elephants, and rhinos etc.
                          <br/> <br/><strong>Amboseli National Park (Kenya)</strong>, at the foot of Mount Kilimanjaro and is known for its large herds of elephants and spectacular views of the mountain.
                          <br/> <br/><strong>Zanzibar (Tanzania)</strong>: This historic island is known for its white-sand beaches, clear waters, and well-preserved Stone Town.
                          <br/> <br/><strong>Mount Kilimanjaro (Tanzania)</strong>: This iconic mountain is the highest peak in Africa and is a popular destination for trekking and climbing.
                          <br/> <br/><strong>Samburu National Reserve (Kenya)</strong>: This park is known for its unique wildlife, including the rare reticulated giraffe and Grevy's zebra.
                          <br/> <br/><strong>Lake Manyara National Park (Tanzania)</strong>: This park is known for its lush forests and diverse wildlife, including tree-climbing lions.
                          <br/> <br/><strong>Lake Nakuru National Park(Kenya)</strong>: This park is known for its flamingos and other birdlife, as well as its rhinos and other wildlife.
                          <br/> <br/><strong>Mount Kenya National Park(Kenya)</strong>: This park is home to Mount Kenya, the second-highest peak in Africa, and offers stunning views, trekking, and wildlife viewing opportunities.
                          <br/> <br/><strong>Lamu Island(Kenya)</strong>: This historic island is a UNESCO World Heritage Site and is known for its well-preserved Swahili architecture and vibrant cultural scene.
                          <br/> <br/><strong>Nairobi National Park(Kenya)</strong>: This park is located within the city limits of Nairobi and is known for its diverse wildlife, including lions, leopards, and rhinos.
                          <br/> <br/>These are just a few of the many great places to visit in Kenya and Tanzania. Both countries offer a wealth of natural, cultural, and historical attractions, making them a top destination for travelers from around the world.
                          </p>
                      </div>


                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                              Will someone recieve me at the Airport?
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                          Yes! upon landing and clearance by the Customs, you will be met by Lamlav staff member who will warmly welcome to you our homeland  and transfer you to your  hotel.
                          </p>
                      </div>


                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                              What type of food should I expect ?
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                          Mouth-watering local specialities In addition to Continental cuisines are offered in our lodges and camps. Nairobi and Mombasa offers a variety of Savoury regional Specialities, In addition to French, Italian, and Indian cuisines. All your meals are included from the moment you arrive upto the end of your safari, and each is extremely appetizing!
                          </p>
                      </div>


                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                              Is there Internet access at the camps and Lodges?
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                          Wi-Fi is not available  in all the camps and lodges but it's complementary for all Lamlav travellers wherever it exists.
                          </p>
                      </div>


                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                              How many travel in your established Safaris?
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                          Our luxury Safari is always small and Intimate ln size and have a maximum of 14 travellers. You are assured of a Comfortable 4x4 Vehicle - with no more than six passangers - and excellent  game sightings, no matter which Safari you choose. Simply let us know if you want a more private safari for your party or family.
                          </p>
                      </div>


                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                              Are there special COVID-19 related entry requirements for Kenya and Tanzania?
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                          No. Only proof of vaccinations  and/or negative  COVID-19 test may be required for your  entry.
                          </p>
                      </div>


                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                              Do I have to wear a mask while travelling?
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                          Eventhough COVID-19  rules and protocols have been relaxed in most countries, we strongly  recommend  that you mask up during  your journey. We encourage  you  to  bring  your  own  mask; although  a supply  will be on hand where  needed.
                          </p>
                      </div>


                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                              What happens if I test positive for COVID-19 while travelling?
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                          If a traveler receives a positive COVID-19 test result, they must follow local and service provider regulations, including potentially being quarantined and tested, at their own cost. 
                          <br/><br/>For those traveling on a Small Group Journey, and Luxury Expeditions, they must not participate in scheduled activities for at least five days after receiving the positive test result. 
                          </p>
                      </div>


                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                              What are my options  if I'm  not vaccinated?
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                          Our travel specialists can assist in planning a customized or signature trip to a destination where getting vaccinated is not mandatory.
                          </p>
                      </div>


                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                              Are children required to be vaccinated?
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                          For all Small Group Journeys and Luxury Expedition Safaris, all guests, including children, must provide evidence of complete COVID-19 vaccination. For all Tailor Made and Signature trips, children must meet the entry requirements set by the country and the service provider.
                          </p>
                      </div>


                      <div className="mb-10">
                          <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                              Are all your staff Vaccinated against Covid-19?
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                          Yes. It is a Lamlav  policy direction  that all staffs: Tour Directors,  Tour Guides and Drivers  must undergo a mandatory  Covid-19  vaccinations. This is absolutely necessary  as it essentially guarantees the safety of our staffs and clients.
                          <br/><br/>Lamlav field staff, including Safari Directors, Guides, Drivers, and Concierges, have all received vaccinations, undergo regular COVID-19 testing prior to traveling, and have their temperatures checked daily. They follow health and safety protocols, including frequently washing their hands with soap, wearing masks supplied by Lamlav, carrying personal hand sanitizers, and regularly sanitizing their mobile devices and any surfaces they touch.
                          </p>
                      </div>


                      

                         
                      </div>
                  </div>
        </section>



            <div className=' '>
                <div class="bg-white dark:bg-gray-900" >
                    <img src={require('../../../Assets/kanairo-black.svg').default } alt="Kanairo"/>
                </div>
                <Footer/>
            </div>
            </div>
  )
};

export default FAQs;