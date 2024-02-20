import React, { useEffect, useRef, useState } from 'react';
import wallpaper1 from './../assets/wallpaper1.jpg';
import Home from '../Components/Home';

const FrontPage = () => {
  const frontPageRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            
            setShowPopup(true);
            setTimeout(() => {
              setShowPopup(false);
            }, 3000);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(frontPageRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={frontPageRef}
      className='h-screen bg-cover bg-center flex justify-center items-center relative'
      style={{ backgroundImage: `url(${wallpaper1})` }}
    >
      <div className='flex justify-center items-center'>
        <Home />
      </div>
     
      <div className={`${showPopup ? 'block ' : 'hidden '} absolute top-5 right-5 backdrop-blur-md backdrop-filter bg-opacity-10 border-[1px] border-black rounded-3xl shadow-2xl px-6 py-[3px]`}>        <div className="text-center">
            <p className="font-Josefin font-bold text-lg text-[#0C0C0C] md:text-xl ">Home</p>
          </div>
        </div>
   
    </div>
  );
};

export default FrontPage;
