import React from 'react';
import { motion } from 'framer-motion';
import image from '../assets/profile.jpeg'

const LandingPage = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-10 py-24" style={{ background: 'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)' }}>
      <div className="flex flex-col items-center md:items-start z-10 w-full md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center md:text-left">Hi, I'm Shriya</h1>
        <p className="text-xl md:text-2xl text-white mt-4 text-center md:text-left">I'm an aspiring software engineer with a passion for Development and Data Science. Reach out if you'd like to learn more!</p>
        <div className="mt-8 flex space-x-4">
          <a href="https://www.linkedin.com/in/shriya-kapil-8123071b6" className="text-blue-500 hover:underline">LinkedIn</a>
          <a href="https://github.com/shriya1702" className="text-blue-500 hover:underline">GitHub</a>
          <a href="/resume.pdf" download className="text-blue-500 hover:underline">Resume</a>

        </div>
      </div>
      <div className="relative w-2/3 md:w-1/3 flex justify-center items-center">
        <motion.div
          className="relative w-full pt-full"
          style={{
            borderRadius: '50%',
            overflow: 'hidden',
            width: '20rem',
            height: '20rem',
          }}
        >
          <motion.img
            src={image}
            alt="Shriya Kapil"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              animationName: 'floating',
              animationDuration: '3s',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out',
              transform: 'translateY(-15%)',
            }}
          />
        </motion.div>
      </div>
    
    </section>
  );
};

export default LandingPage;
