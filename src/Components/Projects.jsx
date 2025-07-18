import React from 'react';
import gym from '../assets/gym.png'
import library from '../assets/library.png'
import portfolio from '../assets/portfolio.png'
import weather from '../assets/weather.jpeg'
import todo from '../assets/todo.jpeg'


const Projects = () => {
  const projectDetails = [
    {
      id:1,
      name:"Library Management",
      description:"Library Management System Using React JS , Express Js , SQL , Bootstrap ",
      img:library,
      gitLink:"https://github.com/Karthikeyan-BE/LMS_SQL.git",
      siteLink:""
    },
    {
      id:2,
      name:"GYM Management",
      description:"Gym Management System Using React JS , Express Js , SQL , Bootstrap ",
      img:gym,
      gitLink:"",
      siteLink:""
    },
    {
      id:3,
      name:"Portfolio",
      description:"Responsive personal portfolio website using React and Tailwind CSS",
      img:portfolio,
      gitLink:"https://github.com/Karthikeyan-BE/portfolio.git",
      siteLink:""
    },
    {
      id:4,
      name:"weather App",
      description:"Real time weather data using rapid weather api",
      img:weather,
      gitLink:"https://github.com/Karthikeyan-BE/Weather_MERN.git",
      siteLink:""
    },
    {
      id:5,
      name:"Todo",
      description:"Responsive Todo app with Login Build with Tailwind , React , Zustand , Express , MongoDB",
      img:todo,
      gitLink:"https://github.com/Karthikeyan-BE/Todo_Mern.git",
      siteLink:""
    },
  ]
  return (
    <section className='flex p-5 flex-col bg-gray-800 text-white  items-center justify-center' id='project'>
        <div className='py-5'>
            <h1 className='text-3xl  font-bold border-b-4 w-[130px] '>Projects</h1>
        </div>
        <div className='w-full pt-5 text-black'>
        <div className='flex flex-col justify-center flex-wrap md:flex-row gap-5'>
            {
              projectDetails.map((project)=>(
                  <div key={project.id} className='relative'>
                    <img src={project.img} alt="" className='h-[200px] w-[350px]' />
                    <p className='text-center text-white pt-2'>{project.name}</p>
                    <div className='absolute left-0 bottom-0 right-0 top-2 bg-gray-400   duration-1000 opacity-0 hover:opacity-90 h-[200px] w-[350px]'>
                      <p className=''>{project.description}</p>
                      <button className='bg-red-500 rounded-sm  p-1 m-2 text-white'><a href={project.gitLink}>Source Code</a></button>
                    </div>
                  </div>
              ))
            }
        </div>
        </div>
    </section>
  )
}

export default Projects