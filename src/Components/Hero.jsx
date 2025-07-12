import React from 'react';
import hero from '../assets/hero.png'
import { AiOutlineInstagram,AiOutlineFacebook ,AiOutlineGithub,AiOutlineLinkedin} from "react-icons/ai";

const Hero = () => {
  return (
    <section className='flex md:flex-row flex-col bg-gray-800 py-32 text-white md:justify-center  items-center h-screen justify-around' >
        <div className='md:w-1/2'>
        <h1 className='md:text-6xl text-4xl'>Hi ,<br />I'm  Karthikeyan T
            <p className='text-2xl'>Im Full-Stack Developer</p>
        </h1>
        <div className='flex py-5'>
            <a href="https://instagram.com/karthi_fsd" className='pr-5 hover:text-rose-400'><AiOutlineInstagram size={40}/></a>
            <a href="#" className='pr-5 hover:text-blue-400'><AiOutlineFacebook size={40}/></a>
            <a href="https://github.com/Karthikeyan-BE" className='pr-5 hover:text-black'><AiOutlineGithub size={40}/></a>
            <a href="https://linkedin.com/in/karthikeyan-t-82b2992a7" className='hover:text-blue-800'><AiOutlineLinkedin size={40}/></a>
        </div>
        </div>
        <img className='md:w-1/3  animate-pulse bg-fixed ' src={hero} alt="hero_png" />
    </section>
  )
}

export default Hero