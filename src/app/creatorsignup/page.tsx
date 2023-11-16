"use client";
import React, { useMemo, useState } from "react";
import image from '../../../public/images/updatedLogo.png';
import Image from "next/image";
import LandingLayout from '../LandingLayout';
import countryList from "react-select-country-list";
import Select from 'react-select'
import Link from "next/link";

const Signup = () => {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
    const changeHandler = value => {
      setValue(value)
    }

  return (
    <LandingLayout>
<section className="text-gray-600 body-font">
<div className="">
  <div className="flex bg-white shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-full">
        <div className="hidden lg:block lg:w-1/2 bg-cover" style={{ 
              backgroundImage: "url(images/bk.png)",
              height:'auto',
            //   marginTop:'-70px',
              fontSize:'50px',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
         }}>
            <div className="mt-10 flex justify-center ">
            <Image className='Image flex justify-center' src={image} alt="Image" style={{ 
                width: "40%",
                display: "flex",
                justifyContent: "center"
             }} />
        
            </div>
            <div className="flex justify-center">
             <div>
             <p className='md:text-white ml-12' style={{ fontSize:'30px' }}>Sign up to support your</p>
            <p className='md:text-white ml-12'style={{ fontSize:'30px' }}>favourite creators.</p>
             </div>
             </div>
         </div>
         
        <div className="w-full p-16 lg:w-[35%]">
            <div className="text-center">
            <h2 className="text-2xl  text-gray-500">Sign Up As A User</h2>
            <p className="text-base text-gray-500 mt-2">Fill blank to create new account.</p>
            </div>
            <div className="mt-4">
                <label className="block text-gray-500 text-base font-medium mb-1">First Name</label>
                    <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    height="1em" 
                    fill="#959fb2" 
                    viewBox="0 0 512 512"
                    className="absolute mt-3.5 ml-2 w-4" 
                    ><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 
                    0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 
                    0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 
                    64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                    <input className="bg-white text-gray-700 focus:outline-none focus:shadow-outline 
                    border border-gray-300 rounded-lg text-base py-2 px-8 block w-full appearance-none" 
                    placeholder="First Name" type="text"/>
                    </div>
            </div>
            <div className="mt-2">
                <label className="block text-gray-500 text-base font-medium mb-1">Last Name</label>
                    <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    height="1em" 
                    fill="#959fb2" 
                    viewBox="0 0 512 512"
                    className="absolute mt-3.5 ml-2 w-4" 
                    ><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 
                    0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 
                    0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 
                    64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                    <input className="bg-white text-gray-700 focus:outline-none focus:shadow-outline 
                    border border-gray-300 rounded-lg py-2 px-8 text-base block w-full appearance-none" 
                    placeholder="Last Name" type="email"/>
                    </div>
            </div>
            <div className="md:flex items-center w-full gap-2">
            <div className="relative w-full mt-2">
                <label className="block text-gray-500 text-base font-medium mb-1">Email</label>
                    <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    height="1em" 
                    fill="#959fb2" 
                    viewBox="0 0 512 512"
                    className="absolute mt-3.5 ml-2 w-4" 
                    ><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 
                    0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 
                    0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 
                    64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                    <input className="bg-white text-gray-700 focus:outline-none focus:shadow-outline 
                    border border-gray-300 rounded-lg text-base py-2 px-8 block w-full appearance-none" 
                    placeholder="name@example.com" type="email"/>
                    </div>
            </div>
            <div className="relative w-full mt-2">
                <label className="block text-gray-500 text-base font-medium mb-1">Username</label>
                    <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    height="1em" 
                    fill="#959fb2" 
                    viewBox="0 0 512 512"
                    className="absolute mt-3.5 ml-2 w-4" 
                    ><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 
                    0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 
                    0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 
                    64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                    <input className="bg-white text-gray-700 focus:outline-none focus:shadow-outline 
                    border border-gray-300 rounded-lg py-2 px-8 block w-full appearance-none" 
                    placeholder="username" type="text"/>
                    </div>
            </div>

            </div>
         
            <div className="md:flex items-center w-full gap-2">
            <div className="relative w-full mt-2">
                <label className="block text-gray-500 text-base font-medium mb-1">Phone Number</label>
                    <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    height="1em" 
                    fill="#959fb2" 
                    viewBox="0 0 512 512"
                    className="absolute mt-3.5 ml-2 w-4" 
                    ><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 
                    0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 
                    0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 
                    64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                    <input className="bg-white text-gray-700 focus:outline-none focus:shadow-outline 
                    border border-gray-300 rounded-lg text-base py-2 px-8 block w-full appearance-none" 
                    placeholder="Phone Number" type=""/>
                    </div>
            </div>
            <div className="relative w-full mt-2">
                <label className="block text-gray-500 text-base font-medium mb-1">Country of Residence</label>
                    <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    height="1em" 
                    fill="#959fb2" 
                    viewBox="0 0 512 512"
                    className="absolute mt-3.5 ml-2 w-4" 
                    ><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 
                    0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 
                    0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 
                    64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                           <Select options={options} className='bg-white border border-gray-300 
                           text-gray-900 text-sm rounded-lg 
                                focus:ring-blue-500' 
                                    value={value}
                                onChange={changeHandler} />
                    </div>
            </div>

            </div>

            <div className="md:flex items-center w-full gap-2">
            <div className="relative w-full mt-2">
                <label className="block text-gray-500 text-base font-medium mb-1">Gender</label>
                    <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    height="1em" 
                    fill="#959fb2" 
                    viewBox="0 0 512 512"
                    className="absolute mt-3.5 ml-2 w-4" 
                    ><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 
                    0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 
                    0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 
                    64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                           <Select className='bg-white border text-base border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500' />
                    </div>
            </div>
            <div className="relative w-full mt-2">
                <label className="block text-gray-500 text-base font-medium mb-1">Age</label>
                    <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    height="1em" 
                    fill="#959fb2" 
                    viewBox="0 0 512 512"
                    className="absolute mt-3.5 ml-2 w-4" 
                    ><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 
                    0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 
                    0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 
                    64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                    <input className="bg-white text-gray-700 focus:outline-none focus:shadow-outline 
                    border border-gray-300 rounded-lg py-2 px-8 block w-full appearance-none" 
                    placeholder="" type="number"/>
                    </div>
            </div>
      

            </div>

                <div className="md:flex items-center w-full gap-2">
                <div className="relative w-full mt-4">
                <label className="block text-gray-500 text-base font-medium mb-2">Password</label>
                    <div className="relative">
                    <div className="flex justify-between">
               {/* Svg icon */}
                  
                    </div>
                    <input className="bg-white text-gray-700 focus:outline-none focus:shadow-outline 
                    border border-gray-300 rounded-lg py-2 text-base px-8 block w-full appearance-none" 
                    placeholder="*****" type="pass"/>
                    </div>
   
        
            </div>
            <div className="relative w-full mt-4">
                <label className="block text-gray-500 text-base font-medium mb-2">Comfirm Password</label>
                    <div className="relative">
                    <div className="flex justify-between">
               {/* Svg icon */}
                  
                    </div>
                    <input className="bg-white text-gray-700 focus:outline-none focus:shadow-outline 
                    border border-gray-300 rounded-lg py-2 px-8 block w-full appearance-none" 
                    placeholder="*****" type="pass"/>
                    </div>
   
        
            </div>
                </div>


<div className='text-sm text-red-600 mt-1'>

<p>* Password must contain uppercase letters.</p>
<p>* Password must contain numbers.</p>
<p>* Password must contain a non-alphabetic character.</p>
</div>
         
<div className="flex items-center mb-4">
<input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 
  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 
  dark:bg-gray-700 dark:border-gray-600"/>
<p className='text-base text-gray-500 text-left ml-4 mt-2'>
By signing up you agree to our Terms of Service and Privacy Policy, and confirm that you are at least 18 years old.</p>
</div>

            <div className="mt-8">
                <button className="bg-red-500 text-white text-base  py-2
                px-4 w-full rounded-full hover:bg-gray-600"> Get Started </button>
            <p className="text-center mt-4">Do you have account? <Link href="/dashboard" className="text-blue-500">Sign in</Link> </p>
            </div>
        </div>
    </div>
</div>
    </section>
</LandingLayout>
  );
}

export default Signup
