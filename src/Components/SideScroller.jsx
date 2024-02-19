import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaGithub } from "react-icons/fa";

export default function SideScroller() {
  const projects = [
    {
      id: 1,
      title: "Dermatica",
      description:
        "Utilizing Flask for server-side rendering, our machine learning website seamlessly identifies skin diseases. Through HTML interfaces, users can input images for analysis, receiving prompt and accurate diagnoses leveraging advanced ML algorithms.",
      githubLink: "https://github.com/Amirdhesh/Dermatica",
      imageSrc: null,
    },
    {
      id: 2,
      title: "ERP",
      description:
        "Designed and implemented an ERP platform for college administration utilizing Flask, React, and MongoDB. Enhanced efficiency and organization by integrating various modules for seamless management of academic and administrative processes.",
      githubLink: "https://github.com/Amirveen/ERP",
      imageSrc: null,
    },
    {
      id: 3,
      title: "Waste2value",
      description:
        "Utilized React Native, Python, Flask, and MySQL to develop a groundbreaking marketplace for recycled products. Designed and implemented a point-based reward system driven by machine learning algorithms, motivating user engagement in plastic recycling efforts. Enabled users to receive discounts when purchasing recycled items, effectively promoting a circular economy. Spearheaded the creation of an innovative sustainability solution, showcasing expertise in app development, machine learning, and eco-conscious design.",
      githubLink: "https://github.com/Amirdhesh/waste2value",
      imageSrc: null,
    },
    {
      id: 4,
      title: "Movies.com",
      description:
        "Movies.com is a simple web application developed using React on the frontend and Python FastAPI on the backend, with data stored in a MySQL database and managed using the SQLModel ORM. Users can browse a vast collection of movies, explore detailed information, and even search for specific titles. With its sleek interface and efficient backend, Movies.com provides users with a seamless experience for discovering and enjoying their favorite movies",
      githubLink: "https://github.com/Amirdhesh/Movies.com",
      imageSrc: null,
    },
    {
      id: 5,
      title: "Project Task Management",
      description:
        "Currently Under development.",
      githubLink: "https://github.com/Amirdhesh/Project-task-management",
      imageSrc: null,
    },
  ];
  return (
    <div className='flex justify-between gap-14 w-full overflow-x-auto overflow-scroll snap-x no-scrollbar px-6'>
  <div className='hidden md:block'>
    <div className='h-[440px] w-[290px] snap-center shrink-0'></div>
  </div>
  <div className='hidden  md:block'>
    <div className='h-[440px] w-[290px] snap-center shrink-0'></div>
  </div>

  {projects.map(project => (
    <div key={project.id} className='bg-[#CBCBCB] h-[440px] flex flex-col rounded-2xl justify-evenly items-center shadow-lg snap-center shrink-0'>
      <div className='px-2 pt-1'>
      {project.imageSrc != null && 
        <img src={project.imageSrc} alt="image" width={290} height={180} className='rounded-lg'/>
      }
      {
        project.imageSrc == null && 
        <div className="w-72 h-44 bg-[#ADADAD] flex justify-center items-center rounded-lg">
      <FaGithub style={{ fontSize: 100 }} className='text-[#6B6A6A]' />
        </div>
      }
      </div>
      
      <div className='text-[#2C2C2C] font-Josefin font-bold text-xl'>{project.title}</div>
      <div className='bg-transparent h-28 w-[288px] p-1 rounded-lg text-[#595959] font-Josefin font-bold text-sm text-center overflow-y-scroll scroll-smooth no-scrollbar'>
        {project.description}
      </div>
      <button className='bg-[#959494] rounded-md px-8 py-1 font-Josefin font-bold flex justify-between items-center hover:bg-[#7D7B7B]' onClick={() => window.open(project.githubLink, "_blank")} rel="noopener noreferrer">
        <GitHubIcon />
        <p className='mt-1 mx-1'>Github</p>
      </button>
    </div>
  ))}

  <div className='hidden md:block'>
    <div className='h-[440px] w-[290px] snap-center shrink-0'></div>
  </div>
  <div className='hidden md:block'>
    <div className='h-[440px] w-[290px] snap-center shrink-0'></div>
  </div>
</div>
    
  )
}
