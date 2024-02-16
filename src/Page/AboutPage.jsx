// AboutPage.js
import React, { useEffect, useState, useRef } from 'react';
import wallpaper from './../assets/wallpaper.jpg';
import About from '../Components/About';

const AboutPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const aboutPageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowPopup(true);
            // Set a timeout to close the popup after 30 seconds
            setTimeout(() => {
              setShowPopup(false);
            }, 5000); // 30 seconds
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(aboutPageRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={aboutPageRef}
      className="h-screen bg-cover bg-center flex justify-center items-center relative"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <About />
      
        <div className={`${showPopup ? 'right-[1px] duration-500' : '-right-40 duration-500'} absolute top-12 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-md backdrop-filter bg-opacity-10 border-[1px] border-black rounded-3xl shadow-2xl px-6 py-[3px]`}>
          <div className="text-center">
            <p className="font-Josefin font-bold text-lg text-[#0C0C0C] md:text-xl ">About</p>
          </div>
        </div>
    </div>
  );
};

export default AboutPage;
