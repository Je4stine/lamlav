import React, {useState} from 'react'
import Navbar from './Navbar/Navbar';
import Navreveal from './Navbar/Navreveal';
import Footer from './Footer/Footer';
import Dropdown from './Input/DropDown';


function Inquiry() {
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
    <div className=' bg-gray-200'>
       {
        colorChanged ? <Navreveal/> : <Navbar/>
       }
       <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 '>
       <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 mt-10">Inquiry Form</h2>
        <hr/>
          <div>
            <h1>A. YOUR TRAVEL PLANS </h1>
            <p className=' font-bold'>Destination*</p>
            <div>
            <Dropdown/>          
              
            </div>

          </div>
       </div>
        <div>
          <img src={require('../Assets/kanairo-black.svg').default } alt="Kanairo"/>
        </div>
        <Footer/>
    </div>
  )
};

export default Inquiry;
