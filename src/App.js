import './App.css';
import Homepage from './Components/Screens/Homepage';
import {
  BrowserRouter as Router,
  Route,
  Routes,useLocation
} from "react-router-dom";
import React, {useLayoutEffect} from 'react';

import AboutUs from './Components/Screens/About/About';

import Safaris from './Components/Screens/Safaris/Safaris';

import Contacts from './Components/Screens/Contacts/ContactUs';
import Mara from './Components/Screens/SafariDetails/MaraSerengeti';
import Migration from './Components/Screens/SafariDetails/Migration';
import Honeymoon from './Components/Screens/SafariDetails/Honeymoon';

import Amboseli from './Components/Screens/SafariDetails/Amboseli';

import FAQs from './Components/Screens/FAQS/FAQS'
import Wilderness from './Components/Screens/SafariDetails/Wilderness';
import Kenya from './Components/Kenya/Kenya';
import DestAmboseli from './Components/Kenya/DestAmboseli';
import DesTsavo from './Components/Kenya/DestTsavo';
import DestLewa from './Components/Kenya/DestLewa';
import DestOlpe from './Components/Kenya/DestolPejeta';
import DestMaasai from './Components/Kenya/DestMaasi';
import DestChyulu from './Components/Kenya/DestChyulu';
import DestMeru from './Components/Kenya/DestMeru';
import DestNakuru from './Components/Kenya/DestNakuru';
import DestSamburu from './Components/Kenya/DestSamburu';
import DestMtK from './Components/Kenya/DestMtKenya';
import DestNairobi from './Components/Kenya/DestNairobi';
import DestMombasa from './Components/Kenya/DestMombasa';
import DestWatamu from './Components/Kenya/DestWatamu';
import Tortolis from './Components/Kenya/Lodges/Tortolis';
import Olkatai from './Components/Kenya/Lodges/Olkatai';
import Almanara from './Components/Kenya/Lodges/Almanara';
import Elephant from './Components/Kenya/Lodges/Elephant';
import Elsa from './Components/Kenya/Lodges/Elsa';
import FairmountMt from './Components/Kenya/Lodges/FairMountmt';
import Finch from './Components/Kenya/Lodges/Finch';
import Giraffe from './Components/Kenya/Lodges/Giraffe';
import Hemingways from './Components/Kenya/Lodges/Hemingways';
import Kampi from './Components/Kenya/Lodges/Kampi';
import Kicheche from './Components/Kenya/Lodges/Kicheche';
import Kifaru from './Components/Kenya/Lodges/Kifaru';
import Kinondo from './Components/Kenya/Lodges/Kinondo';
import Larsen from './Components/Kenya/Lodges/Larsen';
import Lewa from './Components/Kenya/Lodges/Lewa';
import Loldia from './Components/Kenya/Lodges/Loldia';
import MaraPlains from './Components/Kenya/Lodges/Maraplains';
import Mara1 from './Components/Kenya/Lodges/Mara';
import Mbweha from './Components/Kenya/Lodges/Mbweha';
import Medina from './Components/Kenya/Lodges/Medina';
import Neptune from './Components/Kenya/Lodges/Neptune';
import Norfolk from './Components/Kenya/Lodges/Norfolk';
import Oldonyo from './Components/Kenya/Lodges/odonyo';
import Porini from './Components/Kenya/Lodges/Porini';
import Sands from './Components/Kenya/Lodges/Sands';
import Sasaab from './Components/Kenya/Lodges/Sasaab';
import Waine from './Components/Kenya/Lodges/Waine';
import Watamu from './Components/Kenya/Lodges/Watamu';
import Kilanguni from './Components/Kenya/Lodges/Kilanguni';
import Tanzania from './Components/Tanzania/Tanzania';
import DetailsTz from './Components/Tanzania/DetailsTz';
import Lodges from './Components/Tanzania/Lodges';
import Kilindi from './Components/Tanzania/Lodges/Kilindi';
import Matemwe from './Components/Tanzania/Lodges/Matemwe';
import Onsea from './Components/Tanzania/Lodges/Onsea';
import ArushaCoffee from './Components/Tanzania/Lodges/Coffee';
import Kilimount from './Components/Tanzania/Lodges/Kilimount';
import Beho from './Components/Tanzania/Lodges/Beho';
import Kigelia from './Components/Tanzania/Lodges/Kigelia';
import Greystoke from './Components/Tanzania/Lodges/Greystoke';
import NeptuneNg from './Components/Tanzania/Lodges/Neptune';
import Crater from './Components/Tanzania/Lodges/Crater';
import Manor from './Components/Tanzania/Lodges/Manor';
import Beyond from './Components/Tanzania/Lodges/Beyond';
import Lemala from './Components/Tanzania/Lodges/Lemala';
import Kuro from './Components/Tanzania/Lodges/Kuro';
import Treetops from './Components/Tanzania/Lodges/Treetops';
import ManyaraTree from './Components/Tanzania/Lodges/Manyaratree';
import Manyarasecrete from './Components/Tanzania/Lodges/Manyarasecrete';
import Uganda from './Components/Uganda/Uganda';
import DetailsUg from './Components/Uganda/DetailsUg';
import Rwanda from './Components/Rwanda/Rwanda';
import DetailsRwanda from './Components/Rwanda/DetailsRwanda';
import Serena from './Components/Uganda/Lodges/Serena';
import Boma from './Components/Uganda/Lodges/Boma';
import Mahogany from './Components/Uganda/Lodges/Mahogany';
import Volacanoes from './Components/Uganda/Lodges/Volcanoes';
import Mweya from './Components/Uganda/Lodges/Mweya';
import Ishasha from './Components/Uganda/Lodges/Ishasha';
import Primate from './Components/Uganda/Lodges/Primate';
import Kyaninga from './Components/Uganda/Lodges/Kyaninga';
import Sambiya from './Components/Uganda/Lodges/Sambiya';
import Bakers from './Components/Uganda/Lodges/Bakers';


function App() {
  
  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  };


  return (
    <div>
      <Router basename='/'>
        <Wrapper>
          <Routes>
            <Route path ="/" element={<Homepage/>}/>
            <Route path ="/about" element={<AboutUs/>}/>
            <Route path ="/safaris" element={<Safaris/>}/>
            <Route path ="/contacts" element={<Contacts/>}/>
            <Route path ="/faqs" element={<FAQs/>}/>
            <Route path ='/mara' element={<Mara/>}/>
            <Route path ='/migration' element={<Migration/>}/>
            <Route path ='/honeymoon' element={<Honeymoon/>}/>
            <Route path ='/amboseli' element={<Amboseli/>}/>
            <Route path='/wilderness' element={<Wilderness/>}/>
            <Route path ='/kenya' element ={<Kenya/>}/>
            <Route path ='/tanzania' element ={<Tanzania/>}/>
            <Route path ='/kenya/destamboseli' element ={<DestAmboseli/>}/>
            <Route path ='/kenya/tsavonational' element ={<DesTsavo/>}/>
            <Route path ='/kenya/lewaconservancy' element ={<DestLewa/>}/>
            <Route path ='/kenya/olpejeta' element ={<DestOlpe/>}/>
            <Route path ='/kenya/maasaimara' element ={<DestMaasai/>}/>
            <Route path ='/kenya/chyulu' element ={<DestChyulu/>}/>
            <Route path ='/kenya/meru' element ={<DestMeru/>}/>
            <Route path ='/kenya/nakuru' element ={<DestNakuru/>}/>
            <Route path ='/kenya/samburu' element ={<DestSamburu/>}/>
            <Route path ='/kenya/mountkenya' element ={<DestMtK/>}/>
            <Route path ='/kenya/nairobi' element ={<DestNairobi/>}/>
            <Route path ='/kenya/mombasa' element ={<DestMombasa/>}/>
            <Route path ='/kenya/watamu' element ={<DestWatamu/>}/>
            <Route path ='/kenya/amboseli/tortolis' element ={<Tortolis/>}/>
            <Route path ='/kenya/amboseli/oltukai' element ={<Olkatai/>}/>
            <Route path ='/kenya/almanara' element ={<Almanara/>}/>
            <Route path ='/kenya/elephant' element ={<Elephant/>}/>
            <Route path ='/kenya/elsa' element ={<Elsa/>}/>
            <Route path ='/kenya/fairmount' element ={<FairmountMt/>}/>
            <Route path ='/kenya/finch' element ={<Finch/>}/>
            <Route path ='/kenya/giraffe' element ={<Giraffe/>}/>
            <Route path ='/kenya/hemingways' element ={<Hemingways/>}/>
            <Route path ='/kenya/campi' element ={<Kampi/>}/>
            <Route path ='/kenya/kicheche' element ={<Kicheche/>}/>
            <Route path ='/kenya/kifaru' element ={<Kifaru/>}/>
            <Route path ='/kenya/kinondo' element ={<Kinondo/>}/>
            <Route path ='/kenya/larsen' element ={<Larsen/>}/>
            <Route path ='/kenya/lewa' element ={<Lewa/>}/>
            <Route path ='/kenya/loldia' element ={<Loldia/>}/>
            <Route path ='/kenya/marares' element ={<Mara1/>}/>
            <Route path ='/kenya/maraplains' element ={<MaraPlains/>}/>
            <Route path ='/kenya/mbweha' element ={<Mbweha/>}/>
            <Route path ='/kenya/medina' element ={<Medina/>}/>
            <Route path ='/kenya/neptune' element ={<Neptune/>}/>
            <Route path ='/kenya/norfolk' element ={<Norfolk/>}/>
            <Route path ='/kenya/oldonyo' element ={<Oldonyo/>}/>
            <Route path ='/kenya/porini' element ={<Porini/>}/>
            <Route path ='/kenya/sands' element ={<Sands/>}/>
            <Route path ='/kenya/sasaab' element ={<Sasaab/>}/>
            <Route path ='/kenya/waine' element ={<Waine/>}/>
            <Route path ='/kenya/hemwatamu' element ={<Watamu/>}/>
            <Route path ='/kenya/kilanguni' element ={<Kilanguni/>}/>
            <Route path ='/tanzania/:itemId' element={<DetailsTz/>}/>
            <Route path ='/tanzania/lodge/:campId' element={<Lodges/>}/>
            <Route path='/tanzania/lodges/kilindi' element={<Kilindi/>}/>
            <Route path='/tanzania/lodges/matemwe' element={<Matemwe/>}/>
            <Route path='/tanzania/lodges/onsea' element={<Onsea/>}/>
            <Route path='/tanzania/lodges/coffee' element={<ArushaCoffee/>}/>
            <Route path='/tanzania/lodges/kilimount' element={<Kilimount/>}/>
            <Route path='/tanzania/lodges/beho' element={<Beho/>}/>
            <Route path='/tanzania/lodges/kigelia' element={<Kigelia/>}/>
            <Route path='/tanzania/lodges/greystoke' element={<Greystoke/>}/>
            <Route path='/tanzania/lodges/manor' element={<Manor/>}/>
            <Route path='/tanzania/lodges/crater' element={<Crater/>}/>
            <Route path='/tanzania/lodges/neptune' element={<NeptuneNg/>}/>
            <Route path='/tanzania/lodges/lemala' element={<Lemala/>}/>
            <Route path='/tanzania/lodges/beyond' element={<Beyond/>}/>
            <Route path='/tanzania/lodges/kuro' element={<Kuro/>}/>
            <Route path='/tanzania/lodges/treetop' element={<Treetops/>}/>
            <Route path='/tanzania/lodges/manyaratree' element={<ManyaraTree/>}/>
            <Route path='/tanzania/lodges/manayarasecret' element={<Manyarasecrete/>}/>

            <Route path='/uganda' element={<Uganda/>}/>
            <Route path ='/uganda/:itemId' element={<DetailsUg/>}/>
            <Route path='/uganda/lodges/serena' element={<Serena/>}/>
            <Route path='/uganda/lodges/boma' element={<Boma/>}/>
            <Route path='/uganda/lodges/mahogany' element={<Mahogany/>}/>
            <Route path='/uganda/lodges/volcanoes' element={<Volacanoes/>}/>
            <Route path='/uganda/lodges/mweya' element={<Mweya/>}/>
            <Route path='/uganda/lodges/ishasha' element={<Ishasha/>}/>
            <Route path='/uganda/lodges/primate' element={<Primate/>}/>
            <Route path='/uganda/lodges/kyaninga' element={<Kyaninga/>}/>
            <Route path='/uganda/lodges/sambiya' element={<Sambiya/>}/>
            <Route path='/uganda/lodges/bakers' element={<Bakers/>}/>


            <Route path='/rwanda' element={<Rwanda/>}/>
            <Route path ='/rwanda/:itemId' element={<DetailsRwanda/>}/>

          </Routes>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
