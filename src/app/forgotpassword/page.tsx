import LandingLayout from "@/app/LandingLayout";
import React from "react";
import Image from "next/image";
import Link from 'next/link'
import image from '../../../public/images/updatedLogo.png';
const ForgetPassword = () => {

  return (
<LandingLayout>
<section className="text-gray-600 body-font">
<div className="">
  <div className="flex bg-white  shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-full" style={{ height: "500px" }}>
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
             <p className='md:text-white ml-12' style={{ fontSize:'30px' }}>Reset Password</p>
             </div>
             </div>
         </div>
         
        <div className="w-full p-16 lg:w-[35%]">
            <div className="mt-4 flex items-center justify-between">
            </div>
            <div className="mt-4">
                <label className="block text-gray-500 text-normal font-normal mb-2">Enter your registered email address</label>
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
                    placeholder="email address" type="email"/>
                    </div>
   
        
            </div>
            <div className="mt-8">
                <button className="bg-red-500 text-white text-base  py-2
                px-4 w-full rounded-full hover:bg-gray-600"> Send Reset Password Link </button>
                <p className="text-center mt-4">Do you have account? <Link href="/dashboard" className="text-blue-400">Sign in</Link> </p>
            </div>
        </div>
    </div>
</div>
    </section>
</LandingLayout>
  );
};

export default ForgetPassword;
