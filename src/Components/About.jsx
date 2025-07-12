import React from 'react';
import about_img from '../assets/about.png'

const About = () => {
  return (
    <section className='flex flex-col md:flex-row bg-gray-800 h-screen text-white items-center' id='about'>
        <div className='md:w-1/2 py-5 '>
            <img src={about_img} alt="about_png" className='animate-pulse'/>
        </div>
        <div className='md:w-1/2 flex justify-center pl-5'>
            <div className='flex flex-col justify-center'>
            <h1 className='text-3xl  font-bold border-b-4 w-[200px]'>About Me</h1>
            <p className='py-2'>
                I'm currently pursuing a Bachelor of Engineering in Computer Science and Engineering. Passionate about building modern web applications
            </p>
            <p className='pb-2'>
               My technical expertise lies in full-stack web development, particularly with the MERN stack ( MongoDB, Express.js, React.js, Node.js ). I also have hands-on experience with Tailwind CSS
            </p>
            <p>
                I enjoy solving real-world problems through code and continuously expanding my skill set in full-stack development. Whether it's front-end finesse or back-end logic
            </p>
            </div>
        </div>
    </section>
  )
}

export default About