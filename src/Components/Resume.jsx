import React from 'react';
import resume_img from '../assets/resume.jpg'

const Resume = () => {
  return (
    <section className='flex flex-col h-[80vh] md:flex-row bg-gray-800  text-white justify-center  items-center' id='resume'>
        <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
            <img src={resume_img} alt="about_png" className='animate-pulse w-[300px]'/>
        </div>
        <div className='md:w-1/2 flex justify-center pl-5'>
            <div className='flex flex-col justify-center'>
            <h1 className='text-3xl  font-bold border-b-4 w-[150px]'>Resume</h1>
            <p className='py-2'>
                You can view and Download my Resume
            </p>
            <button className='p-5 '>
                <a href="" className='p-2 bg-cyan-200 rounded-md  text-black font-bold border-2 border-cyan-200 '>Download Resume</a>
            </button>
            </div>
        </div>
    </section>
  )
}

export default Resume