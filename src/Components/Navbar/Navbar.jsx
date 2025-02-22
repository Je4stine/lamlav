import React, { useState } from "react";

import { HiMenu } from "react-icons/hi";

import { AiOutlinePhone } from "react-icons/ai";

import Logo from "../../Assets/Logos/logo.png";

import { AiOutlineCaretRight } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const [toggleNation, setToggleNation] = useState(false);

  const handleToggleNation = () => {
    setToggleNation(!toggleNation);
  };

  const Toggle = () => {
    setIsopen(!isOpen);
    console.log(isOpen);
  };

  return (
    <nav className=" w-full absolute top-0 z-[1] lg:flex lg:justify-between lg:bg-transparent bg-white px-5 min-h-[60px] lg:items-center">
      <div className=" flex justify-between items-center relative">
        <div className=" flex items-center  ">
          <a href="/">
            <img
              src={Logo}
              alt="Lamlav Logo"
              className=" h-[100px] cursor-pointer"
            />
          </a>
          <h1 className="hidden lg:inline mx-4 lg:my-6 font-[SourceSerifPro-Black] text-xl text-black lg:text-white my-3">
            <a href="/">Lamlav Leisure Safaris</a>
          </h1>
        </div>
        <span className=" cursor-pointer block lg:hidden" onClick={Toggle}>
          <HiMenu size={30} />
        </span>
        <div className=" hidden lg:inline absolute lg:left-[400px] md:left-[200px] border-white border-x-[1px] px-5">
          <div className=" flex flex-col justify-center items-center">
            <div className=" flex justify-center items-center">
              <AiOutlinePhone color="#fff" />
              <a href="https://wa.me/+254716251932" className=" cursor-pointer">
                <h1 className=" font-bold text-white"> +254716251932 </h1>
              </a>
            </div>
            <h1 className=" font-bold text-white">Plan for a safari</h1>
          </div>
        </div>
      </div>
      {isOpen ? (
        <ul className="lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute bg-white w-full left-0 lg:w-auto lg:opacity-100 opacity-100 transition-all ease-in duration-500">
          <li className=" mx-4 my-6 ">
            <a
              href="/"
              className=" hover:text-[#f15d30] duration-500 font-[SourceSerifPro-Black]"
            >
              Home
            </a>
          </li>
          <li className=" mx-4 my-6 ">
            <button
              onClick={handleToggleNation}
              className=" hover:text-[#f15d30] duration-500 font-[SourceSerifPro-Black] relative"
            >
              Destinations
            </button>
          </li>
          <div className={` ${toggleNation ? "block" : "hidden"} `}>
            <ul className=" mx-4 ">
              <li>
                <a href="/kenya" className=" hover:text-orange-700">
                  Kenya
                </a>
              </li>
              <li>
                <a href="/uganda" className=" hover:text-orange-700">
                  Uganda
                </a>
              </li>
              <li>
                <a href="/tanzania" className=" hover:text-orange-700">
                  Tanzana
                </a>
              </li>
              <li>
                <a href="/rwanda" className=" hover:text-orange-700">
                  Rwanda
                </a>
              </li>
            </ul>
          </div>
          <li className=" mx-4 my-6 ">
            <a
              href="/safaris"
              className=" hover:text-[#f15d30] duration-500 font-[SourceSerifPro-Black]"
            >
              Luxury Safaris
            </a>
          </li>

          <li className=" mx-4 my-6 ">
            <a
              href="/faqs"
              className=" hover:text-[#f15d30] duration-500 font-[SourceSerifPro-Black]"
            >
              FAQs
            </a>
          </li>
          <li className=" mx-4 my-6 ">
            <a
              href="/contacts"
              className=" hover:text-[#f15d30] duration-500 font-[SourceSerifPro-Black]"
            >
              Contacts/Inquiry
            </a>
          </li>
          <li className=" mx-4 my-6 ">
            <a
              href="/blog"
              className=" hover:text-yellow-400 duration-500 text-white font-[SourceSerifPro-Black]"
            >
              Blogs
            </a>
          </li>
          <li className=" mx-4 my-6 ">
            <a
              href="https://wa.me/+254716251932"
              className=" hover:text-[#f15d30] duration-500 font-[SourceSerifPro-Black]"
            >
              Plan for a trip call +254716251932{" "}
            </a>
          </li>
        </ul>
      ) : (
        <ul className=" lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute w-full left-0 lg:w-auto lg:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
          <li className=" mx-4 my-6 ">
            <a
              href="/"
              className=" hover:text-yellow-400 duration-500 text-white font-[SourceSerifPro-Black]"
            >
              Home
            </a>
          </li>
          <li className=" mx-4 my-6 ">
            <div className="relative group">
              <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none text-white font-[SourceSerifPro-Black]">
                <span>Destinations</span>
              </button>
              <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                <div className="px-2 pt-2 pb-4 bg-black rounded-sm opacity-50">
                  <div className=" flex flex-col px-5">
                    <p className="text-white font-[SourceSerifPro-Black] cursor-pointer">
                      Destinations
                    </p>
                    <hr className="mb-5" />
                    <a
                      href="/kenya"
                      className="text-white font-[SourceSerifPro-Regular] cursor-pointer hover:text-yellow-400 duration-500 mb-2"
                    >
                      <div className=" flex justify-around items-center">
                        <p>Kenya</p>
                        <AiOutlineCaretRight color="#fff" />
                      </div>
                    </a>
                    <a
                      href="/uganda"
                      className="text-white font-[SourceSerifPro-Regular] cursor-pointer hover:text-yellow-400 duration-500 mb-2"
                    >
                      <div className=" flex justify-around items-center">
                        <p>Uganda</p>
                        <AiOutlineCaretRight color="#fff" />
                      </div>
                    </a>
                    <a
                      href="/tanzania"
                      className="text-white font-[SourceSerifPro-Regular] cursor-pointer hover:text-yellow-400 duration-500 mb-2"
                    >
                      <div className=" flex justify-around items-center">
                        <p>Tanzania</p>
                        <AiOutlineCaretRight color="#fff" />
                      </div>
                    </a>
                    <a
                      href="/rwanda"
                      className="text-white font-[SourceSerifPro-Regular] cursor-pointer hover:text-yellow-400 duration-500 mb-2"
                    >
                      <div className=" flex justify-around items-center">
                        <p>Rwanda</p>
                        <AiOutlineCaretRight color="#fff" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className=" mx-4 my-6 ">
            <a
              href="/safaris"
              className=" hover:text-yellow-400 duration-500 text-white font-[SourceSerifPro-Black]"
            >
              Luxury Safaris
            </a>
          </li>
          <li className=" mx-4 my-6 ">
            <a
              href="/faqs"
              className=" hover:text-yellow-400 duration-500 text-white font-[SourceSerifPro-Black]"
            >
              FAQS
            </a>
          </li>
          <li className=" mx-4 my-6 ">
            <a
              href="/contacts"
              className=" hover:text-yellow-400 duration-500 text-white font-[SourceSerifPro-Black]"
            >
              Contacts/Inquiry
            </a>
          </li>
          <li className=" mx-4 my-6 ">
            <a
              href="/blog"
              className=" hover:text-yellow-400 duration-500 text-white font-[SourceSerifPro-Black]"
            >
              Blogs
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
