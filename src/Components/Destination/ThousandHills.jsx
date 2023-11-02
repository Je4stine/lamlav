import React,{useState} from 'react';
import Navbar from "../Navbar/Navbar";
import Navreveal from "../Navbar/Navreveal";
import Footer from '../Footer/Footer';

function ThousandHills() {
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
        <div className=" bg-[#fff]">
                <img src={require('../../Assets/kanairo-black.svg').default } alt="Kanairo"/>
        </div>
        <Footer/>
    </div>
  )
};

export default ThousandHills;