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
          </Routes>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
