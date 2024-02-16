import React, { useEffect, useState, useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = ({ contactref }) => {
  const [showPopup, setShowPopup] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Is footer visible?', entry.isIntersecting);
          if (entry.isIntersecting) {
            setShowPopup(true);
            // Set a timeout to close the popup after 10 seconds
            setTimeout(() => {
              setShowPopup(false);
            }, 5000); // 10 seconds
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(footerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={footerRef} className='py-20 h-screen bg-[#6B6B6B] flex justify-around items-center'>
      <div className='static hover:rounded-full p-2 hover:bg-[#606060]'>
        <GitHubIcon style={{ fontSize: '2rem' }} onClick={() => window.open("https://github.com/Amirdhesh")} />
      </div>
      <div className='hover:rounded-full p-2 hover:bg-[#606060]'>
        <LinkedInIcon style={{ fontSize: '2rem' }} onClick={() => window.open("https://www.linkedin.com/in/amirdhesh-s-0a2967224/")} />
      </div>
      <div className='hover:rounded-full p-2 hover:bg-[#606060]'>
        <XIcon style={{ fontSize: '2rem' }} onClick={() => window.open("https://twitter.com/AmirDhesh")} />
      </div>
      <div className='hover:rounded-full p-2 hover:bg-[#606060]'>
        <InstagramIcon style={{ fontSize: '2rem' }} onClick={() => window.open("https://www.instagram.com/_.amirdhesh._/")} />
      </div>
      
        <div className={`${showPopup ? 'right-[1px] duration-500' : '-right-60 duration-500'} absolute top-12 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-md backdrop-filter bg-opacity-10 border-[1px] border-black rounded-3xl shadow-2xl px-6 py-[3px]`}>
        <div className="text-center">
            <p className="font-Josefin font-bold text-lg text-[#0C0C0C] md:text-xl ">Contact</p>
          </div>
        </div>
    
    </div>
  );
}

export default Footer;
