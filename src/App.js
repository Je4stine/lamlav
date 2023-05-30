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
            <Route path ='/kenya/marares' element ={<Mara/>}/>
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
          </Routes>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
