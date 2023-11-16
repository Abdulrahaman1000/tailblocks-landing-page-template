import React from 'react'
import {AiOutlineInstagram} from "react-icons/ai";
import {FiTwitter} from "react-icons/fi";
import Mcard from '../../public/images/materCard.png';
import Visa from '../../public/images/Visa.png';
import Image from "next/image"
const Footer = () => {

  return (
    <footer className="footer bg-white dark:bg-gray-900">
    <div className="text-left  md:mx-auto shadow-lg w-full  py-2 lg:py-8">
        <div className="md:w-full">
          <div className="flex mt-4 justify-between grid grid-cols-2  gap-8 sm:gap-10 ml-20 sm:grid-cols-3">
              <div className='footerText1 text-left '> 
                  <h2 className=" text-blue-600  md:hover:underline active mb-6 text-base text-blue-600  dark:text-white "><a href ="">©2023 Allacessfans</a></h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-normal">
                      <li className="mb-4">
                          <a href="" className="hover:underline active hover:text-blue-600 text-base mb-6 text-blue-600 dark:text-white">About</a>
                      </li>
                      <li className="mb-4">
                          <a href="" className="hover:underline active hover:text-blue-600  mb-6 text-base text-blue-600  dark:text-white">Copyright Infringement Policy</a>
                      </li>
                      
                  <div className='iconAll'>
                  <li className='flex gap-2 '>
                          <a href="" className="icon hover:underline mb-6 text-base font-semibold rounded-full w-8 h-8 uppercase dark:text-white">
                          <FiTwitter className =" hover:text-blue-600 text-xl text-blue-500 rounded-full hover:text-blue-600 "/>
          
                          </a>
                          <a href="" className="icon hover:underline mb-6 text-base font-semibold rounded-full w-auto h-auto uppercase dark:text-white">
                          <AiOutlineInstagram className='hover:text-blue-600 text-xl  text-blue-500 rounded-full hover:text-blue-600  '/>
                          </a>
                      </li>
                      <li className='flex gap-2 '>
                      <Image className='rounded-full w-10 h-10' src={Mcard} alt="Mcard" />
                      <Image className='rounded-full w-10 h-10' src={Visa} alt="Visa" />
                      </li>
                  </div>
                  </ul>
              </div>
              
              <div className='footerText2 text-left '> 
                  <h2 className="hover:underline active mb-6 text-base text-blue-600  dark:text-white "><a href ="">Terms and Condition</a></h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-normal">
                      <li className="mb-4">
                          <a href="" className="hover:underline active hover:text-blue-600   mb-6 text-base text-blue-600  dark:text-white">How it works</a>
                      </li>
                      <li className="mb-4">
                          <a href="" className="hover:underline active hover:text-blue-600   mb-6 text-base text-blue-600  dark:text-white"> Disclosure Statement</a>
                      </li>
                  </ul>
              </div>
            
              <div className='footerText3 text-left '> 
                  <h2 className="hover:underline active mb-6 text-base text-blue-600  dark:text-white "><a href ="">Our Privacy Policy</a></h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-normal">
                      <li className="mb-4">
                          <a href="" className="hover:underline active hover:text-blue-600   mb-6 text-base text-blue-600  dark:text-white">Complaints Policy</a>
                      </li>
                      <li className="mb-4">
                          <a href="" className="hover:underline active hover:text-blue-600   mb-6 text-base text-blue-600  dark:text-white">Content Monitor Policy</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
  </footer>
  
  );
}

export default Footer;