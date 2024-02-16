import React from 'react'
import Image from "./../assets/Image.jpg"
export default function About() {
  return (
    <div className='flex justify-evenly items-center'>
      <div className='md:w-2/4 text-justify '>
                <p className='text-center font-Josefin text-[16.1px] md:text-3xl font-bold text-black ' style={{textShadow: '0.5px 0 10px rgba(66, 66, 66, 1)'}}>
                  "As an undergraduate student with a passion for coding, I am a <u>full-stack developer and Python enthusiast</u>. My expertise extends to languages and databases such as
                  <span className='text-red-600' style={{textShadow: '0.5px 0 10px rgba(255, 0, 0, 0.5)'}}> Python, HTML, CSS, JavaScript, MYSQL, MongoDB, and Redis,</span>
                   complemented by my adept use of frameworks and libraries like
                  <span className='text-blue-400' style={{textShadow: '0.5px 0 10px rgba(33, 150, 243, 0.8)'}}> Flask, SQLModel, FastAPI, Tailwind CSS, React, and React-Native.</span> <br />
                   <span style={{ textShadow: '0.5px 0 10px rgba(168, 168, 168, 1)' }}>I navigate the development landscape with ease, utilizing tools like</span>
                  <span className='text-yellow-600' > GitHub </span> for version control,
                  <span className='text-yellow-600' > Postman </span> for API testing,
                  <span className='text-yellow-600' style={{textShadow: '0.5px 0 10px rgba(255, 255, 0, 0.3)'}}> Docker </span> for containerization, and
                  <span className='text-yellow-600' style={{textShadow: '0.5px 0 10px rgba(255, 255, 0, 0.3)'}}> Figma </span> for design collaboration. With a versatile skill set, I am dedicated to creating seamless and innovative solutions in the world of software development."
                </p>
        </div>
        <div className='hidden md:block'>
            <img src={Image} alt="Image" className='rounded-2xl  w-[250px] h-[330px]' />
        </div>
        
    </div>
  )
}
