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


function App() {
  return (
    <div>
      <Router basename='/lamlav'>
        <Routes>
          <Route path ="/" element={<Homepage/>}/>
          <Route path ="/about" element={<AboutUs/>}/>
          <Route path ="/safaris" element={<Safaris/>}/>
          <Route path ="/contacts" element={<Contacts/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
