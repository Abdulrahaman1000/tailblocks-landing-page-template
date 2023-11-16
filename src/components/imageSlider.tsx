import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dataCardAbout } from '../data/Data';
import imgGirl from '../../../public/images/defaultImage.jpg';
import padlockLogo from '../../../public/images/padlockLogo.png';
import Image from "next/image"
import { Img } from '@react-email/components';

const ImageSlider = () => {
    function ImageSlider() {
        const [defaultImage, setDefaultImage] = useState({});
        const settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        };
      
        const handleErrorImage = (data: { target: { alt: any; }; }) => {
          setDefaultImage((prev) => ({
            ...prev,
            [data.target.alt]: data.target.alt,
            linkDefault: imgGirl,
          }));
        };
      
        return (
          <div className="CardSlider px-4 py-4 md:px-16 py-10" style={{ "height":"auto" }}>
            <Slider {...settings}>
              {dataCardAbout.map((item) => (
                <div className="card w-full">
                  <div className="card-top">
                  <div className="flex justify-between px-2 py-2">
                  <div className='flex'>
                  <div className='imgCircle'>
                    <Image className=' padlockLogo w-14' src={ padlockLogo} alt="Image" />
                    </div>
                  <div className="mt-2 text-left">
                  <h1 className='font-medium mb-2'>{item.title}</h1>
                  <h3 className='text-gray-500 font-medium'>{item.price}</h3>
                  </div>
               
                  </div>
                  <div className='mt-2 text-gray-500 font-medium'>
                    <p>{item.time}</p>
                  </div>
                  </div>
                    <p className="category text-left px-2 text-gray-700 font-medium text-xl"> 
                    TikToker<a href='#' className='text-blue-500'> @breckie </a>  
                    and <a href='#' className='text-blue-500'> @caseboon</a> master the art of aerial yoga and chat about Breckie..</p>
                    <p className='text-left px-2 text-medium'><a href='#' className='text-blue-500'>read more</a></p> 
                  </div>
              
                  <div className="card-bottom">
                  <img src={item.linkImg}
                    
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        );
      }
      
}

export default ImageSlider
