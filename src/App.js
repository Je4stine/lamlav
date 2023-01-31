import './App.css';
import Homepage from './Components/Screens/Homepage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


import AboutUs from './Components/Screens/About/About';

import Safaris from './Components/Screens/Safaris/Safaris';

import Contacts from './Components/Screens/Contacts/ContactUs';
import Mara from './Components/Screens/SafariDetails/MaraSerengeti';
import Migration from './Components/Screens/SafariDetails/Migration';
import Honeymoon from './Components/Screens/SafariDetails/Honeymoon';

import Amboseli from './Components/Screens/SafariDetails/Amboseli';


function App() {
  return (
    <div>
      <Router basename='/'>
        <Routes>
          <Route path ="/" element={<Homepage/>}/>
          <Route path ="/about" element={<AboutUs/>}/>
          <Route path ="/safaris" element={<Safaris/>}/>
          <Route path ="/contacts" element={<Contacts/>}/>
          <Route path ='/mara' element={<Mara/>}/>
          <Route path ='/migration' element={<Migration/>}/>
          <Route path ='/honeymoon' element={<Honeymoon/>}/>
          <Route path ='/amboseli' element={<Amboseli/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
