import React, {useState} from 'react'
import Navbar from '../../Navbar/Navbar';
import Navreveal from '../../Navbar/Navreveal';
import Footer from '../../Footer/Footer';
import BlogHero from './BlogHero';
import Blogcard from './BlogCard';
import { useNavigate } from "react-router-dom";

function Blog() {
    const [colorChanged, setColorChanged]= useState(false);
    const navigate = useNavigate();

    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
          setColorChanged(true);
        }
        else{
          setColorChanged(false);
        }
     };
    window.addEventListener('scroll', changeNavbarColor);

    const handleNavigate =(id, blog, image, title, date, paragraph, author)=> {
      navigate('/blogdetails/ngorongoro-crater')
  }

  return (
    <div className=' bg-white'>
            {
                colorChanged ? <Navreveal/> : <Navbar/>
            }
            <div >
                <BlogHero/>
                <div className=" my-10 mx-10 grid grid-cols-3 gap-5">
                  <Blogcard author={"John Doe"} 
                  Image="https://climbingkilimanjaro.info/wp-content/uploads/2024/04/ngorongoro-crater-9A.jpeg"
                  dateCreated={"23/02/2024"
                }
                blogTitle={"Six Reasons Why you Should Dip Into The World's Stunning Caldera: The Ngorongoro Crater."}
                body={"Imagine a place where time stands still, a landscape that preserves echoes of the Earth’sancient past, blending them with thriving wildlife and unmatched natural beauty. Ngorongoro , the cone of dead volcano, high above the plains of equatorial Africa, is one such timelessmarvel that captures the raw, awe-inspiring power of nature......"}
                handleClick={handleNavigate}
                  />
                </div>
            </div>
        <Footer/>        
    </div>
  )
}

export default Blog