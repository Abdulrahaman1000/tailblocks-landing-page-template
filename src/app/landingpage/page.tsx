import LandingLayout from "@/app/LandingLayout";
import React from "react";
import Image from "next/image";
import image from '../../../public/images/updatedLogo.png';
const LandingPage = () => {

  return (
<LandingLayout>
<section className="text-gray-600 body-font">
<div className="py-2">
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
            <h2 className="text-2xl font-semibold text-gray-500 text-left">Login</h2>
         
            <div className="mt-4 flex items-center justify-between">
            
            </div>
            <div className="mt-4">
                <label className="block text-gray-500 text-base font-bold mb-2">Email or Username</label>
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
                    placeholder="email or username" type="email"/>
                    </div>
   
        
            </div>
            <div className="mt-4">
                <label className="block text-gray-500 text-base font-bold mb-2">Password</label>
                    <div className="relative">
                    <div className="flex justify-between">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="21" 
                    width="21"
                    fill="#959fb2" 
                    viewBox="0 -960 960 960" 
                    className="absolute mt-3 ml-2" 
                    ><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 
                    23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 
                    23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 
                    56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 
                    56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 8
                    5v80ZM240-160v-400 400Z"/></svg>
                    </div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="21" 
                    width="21"
                    fill="#959fb2" 
                    viewBox="0 -960 960 960" 
                    className="absolute mt-3 ml-[-26px]" 
                    ><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 
                    23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 
                    23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 
                    56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 
                    56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 8
                    5v80ZM240-160v-400 400Z"/></svg>
                    </div>
                    </div>
                    <input className="bg-white text-gray-700 focus:outline-none focus:shadow-outline 
                    border border-gray-300 rounded-lg py-2 px-8 block w-full appearance-none" 
                    placeholder="*****" type="pass"/>
                    </div>
   
        
            </div>
            <div className="mt-8">
                <button className="bg-red-500 text-white text-base py-2 
                px-4 w-full rounded-full hover:bg-gray-600">Sign in</button>
            </div>
            <div className="mt-8">
                <button className="bg-red-600 text-white text-sm  py-2 
                px-4 w-full rounded-full hover:bg-gray-600">Sign in with Twitter</button>
            </div>
            <div className="mt-8">
                <button className="bg-red-600 text-white text-sm  py-2 
                px-4 w-full rounded-full hover:bg-gray-600">Sign in with Google</button>
            </div>
            <div className="mt-6 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <a href="#" className="text-xs text-gray-500 uppercase">or sign up</a>
                <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
            <div className="mt-8">
                <button className="bg-red-500 text-white text-sm  py-2
                px-4 w-full rounded-full hover:bg-gray-600">  Creator Sign Up | Earn money $ </button>
            </div>
        </div>
    </div>
</div>
    </section>
</LandingLayout>
  );
};

export default LandingPage;
