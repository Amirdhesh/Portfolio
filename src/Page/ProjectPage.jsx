import React, { useEffect, useState, useRef } from 'react';
import wallpaper2 from './../assets/wallpaper2.jpg';
import SideScroller from '../Components/SideScroller';

const ProjectPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const projectPageRef = useRef(null);

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

    observer.observe(projectPageRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={projectPageRef}
      className='h-screen bg-cover bg-center flex justify-center items-center'
      style={{ backgroundImage: `url(${wallpaper2})` }}
    >
      <SideScroller />
        <div className={`${showPopup ? 'right-[1px] duration-500' : '-right-40 duration-500'} absolute top-12 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-md backdrop-filter bg-opacity-10 border-[1px] border-black rounded-3xl shadow-2xl px-6 py-[3px]`}>
        <div className="text-center">
            <p className="font-Josefin font-bold text-lg text-[#0C0C0C] md:text-xl ">Project</p>
          </div>
        </div>
    
    </div>
  );
};

export default ProjectPage;
