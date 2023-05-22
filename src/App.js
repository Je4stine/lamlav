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
          </Routes>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
