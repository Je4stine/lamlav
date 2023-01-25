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
      <Router >
        <Routes>
          <Route path ="/lamlav" element={<Homepage/>}/>
          <Route path ="/lamlav/about" element={<AboutUs/>}/>
          <Route path ="/lamlav/safaris" element={<Safaris/>}/>
          <Route path ="/lamlav/contacts" element={<Contacts/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
