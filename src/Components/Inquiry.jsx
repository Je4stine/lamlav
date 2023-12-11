
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from './Input/DropDown';
import Radio from './Input/Radio';
import Textbox from './Input/Textbox';
import DatePickers from './Input/DatePicker';
import CountryDropdown from './Input/Drop2';
import Checkbox from './Input/Checkbox';
import Navbar from './Navbar/Navbar';
import Navreveal from './Navbar/Navreveal';
import Footer from './Footer/Footer';

function Inquiry() {
    const [selectedOption, setSelectedOption] = useState('classic');
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



    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };
  

  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0])
  const [state, setState] = useState({
    name: '',
    dept: '',
    batch: '',
    varsity: '',
    session: '',
    address: '',
    district: '',
    thana: '',
    post: ''
  })
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const next = () => {
    // if (formNo === 1 && state.name && state.dept && state.batch) {
      setFormNo(formNo + 1)
    // }
    // else if (formNo === 2 && state.varsity && state.session && state.address) {
    //   setFormNo(formNo + 1)
    // } else {
    //   toast.error('Please fillup all input field')
    // }
  }
  const pre = () => {
    setFormNo(formNo - 1)
  }
  const finalSubmit = () => {
    // if (state.district && state.thana && state.post) {
      toast.success('form submit success')
    // } else {
    //   toast.error('Please fillup all input field')
    // }
  }


  return (
    < >
<div className="bg-white">
      {
        colorChanged ? <Navreveal/> : <Navreveal/>
       }
       <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 mt-[20px]">Inquiry Form</h2>
        <hr/>
      <div className=" flex justify-center items-center">
      <ToastContainer />
      
      <div className="w-full h-full rounded-md shadow-md bg-white lg:px-[300px] px-10 py-10">
        <div className='flex justify-center items-center'>
          {
            formArray.map((v, i) => <><div className={`w-[35px] my-3 text-white rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'} h-[35px] flex justify-center items-center`}>
              {v}
            </div>
              {
                i !== formArray.length - 1 && <div className={`w-[85px] h-[2px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'}`}></div>
              }
            </>)
          }
        </div>
        {
          formNo === 1 && <div>
            <div>
            <h1>A. YOUR TRAVEL PLANS </h1>
            <p className=' font-bold'>Destination*</p>
            <div>
            <Dropdown/>          
            <div className=' mt-10'>
              <h1 className=' font-bold' >Trip type*</h1>
              <Radio name="Classic  safari " safari='classic' selectedOption={selectedOption} handleOptionChange={handleOptionChange}/>
              <Radio name="Custom  safari "safari='custom' selectedOption={selectedOption} handleOptionChange={handleOptionChange}/>
              <Radio name="Private  safari " safari='private' selectedOption={selectedOption} handleOptionChange={handleOptionChange}/>
              <Radio name="No idea " safari='none' selectedOption={selectedOption} handleOptionChange={handleOptionChange}/>
            </div>
            <div className=' mt-10'>
              <h1 className=' font-bold'>Lamlav recommend  Safari of interest?</h1>
              <Textbox placeholder=""/>
            </div>
            <div className=' mt-10'>
              <h1 className=' font-bold'>Preferred  dates of Travel*</h1>
              <DatePickers/>
            </div>
            <div className=' mt-10'>
              <h1 className=' font-bold'>Ideal length of trip*</h1>
              <Textbox placeholder=""/>
            </div>
            <div className=' mt-10'>
              <h1 className=' font-bold'>Adults*</h1>
              <Textbox placeholder=""/>
            </div>
            <div className=' mt-10'>
              <h1 className=' font-bold'>Kids under 18*</h1>
              <Textbox placeholder=""/>
            </div>
            <div className=' mt-10'>
              <h1 className=' font-bold'>Have you travelled with us before?*</h1>
              <Radio name="Yes" safari='yes' selectedOption={selectedOption} handleOptionChange={handleOptionChange}/>
              <Radio name="No" safari='no' selectedOption={selectedOption} handleOptionChange={handleOptionChange}/>
            </div>
            <div className=' mt-10'>
              <h1 className=' font-bold'>What's  your estimated  travel budget per person ?*</h1>
              <Textbox placeholder=""/>
            </div>
            <div className=' mt-10'>
              <h1 className=' font-bold'>Please provide information about yourself, and feel free to ask me any question that you may have.*</h1>
              <div class="w-[70%]">

                <div class="relative w-full lg:min-w-[500px] mt-10">
                  <textarea
                    className="peer h-full min-h-[400px] resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  ></textarea>
               
                </div>
              </div>
            </div>
            </div>
                


            </div>
            <div className='mt-4 flex justify-center items-center'>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
            </div>
          </div>
        }

        {
          formNo === 2 && <div>
    
    <div className="mt-10">
              <h1>B.GUEST INFORMATION  </h1>
              <p> <em>Lamlav Safaris considers the protection and confidentiality of your information as a matter of great importance.</em></p>
            </div>
            <div className=' mt-10'>
              <h1 className=' font-bold'>Title*</h1>
              <Textbox placeholder=""/>
            </div>
             <div className=' mt-10'>
              <h1 className=' font-bold'>First name*</h1>
              <Textbox placeholder=""/>
            </div>
             <div className=' mt-10'>
              <h1 className=' font-bold'>Last name*</h1>
              <Textbox placeholder=""/>
            </div>
             <div className=' mt-10'>
              <h1 className=' font-bold'>Email*</h1>
              <Textbox placeholder=""/>
            </div>
            <div className=' mt-10'>
              <h1 className=' font-bold'>Phone?*</h1>
              <Textbox placeholder=""/>
            </div>
            <div className='mt-10'>
              <p><em>It may be necessary to get in touch with you to have a more thorough discussion about your travel arrangements, at a time that suits you.</em></p>
              <div className=' mt-10'>
                <h1 className=' font-bold'>Preferred  method  of contact?*</h1>
                <Radio name="Email " safari='email' selectedOption={selectedOption} handleOptionChange={handleOptionChange}/>
                <Radio name="Day time phone " safari='phone' selectedOption={selectedOption} handleOptionChange={handleOptionChange}/>
                <Radio name="Whatapp chat/call " safari='chat' selectedOption={selectedOption} handleOptionChange={handleOptionChange}/>
              </div>
              <div className=' mt-10'>
                <h1 className=' font-bold'>Street address*</h1>
                <Textbox placeholder=""/>
              </div>
              <div className=' mt-10'>
                <h1 className=' font-bold'>City*</h1>
                <Textbox placeholder=""/>
              </div>
              <div className=' mt-10'>
                <h1 className=' font-bold'>State/Region*</h1>
                <Textbox placeholder=""/>
              </div>
              <div className=' mt-10'>
                <h1 className=' font-bold'>Zip code*</h1>
                <Textbox placeholder=""/>
              </div>
              <div className=' mt-10'>
                <h1 className=' font-bold'>Country  of residence*</h1>
                <CountryDropdown/>
              </div>
              </div>

            <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
            </div>
          </div>
        }

        {
          formNo === 3 && <div>
            <div className="mt-10">
                <h1>C. FURTHER  INFORMATION   </h1>
                <h1 className=' font-bold'>What was the reason for your reaching out today?</h1>
                <Radio name="Websearch " safari='email' selectedOption={selectedOption} handleOptionChange={handleOptionChange}/>
                <Radio name="Recommended  " safari='email' selectedOption={selectedOption} handleOptionChange={handleOptionChange}/>
                <Radio name="Email newsletter " safari='email' selectedOption={selectedOption} handleOptionChange={handleOptionChange}/>
                <Radio name="Other reasons " safari='email' selectedOption={selectedOption} handleOptionChange={handleOptionChange}/>
              </div>
              <div className=' mt-10 flex'>
                <Checkbox/>
                <h1 className=' font-bold ml-3'>I am  on board  with  receiving  Lamlav  Safaris  newsletters  and offers</h1>
              </div>


            <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
              <button onClick={finalSubmit} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Submit</button>
            </div>
          </div>
        }

      </div>
    </div>
    </div>
    </>
  );
}

export default Inquiry;