import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiCplusplus, SiNumpy, SiPandas, SiSelenium, SiJupyter, SiMicrosoft, SiMysql } from 'react-icons/si';
import { IoMdPeople } from 'react-icons/io';
import { MdWork } from 'react-icons/md';

const skills = [
  { name: 'C/C++', icon: <SiCplusplus size={40} /> },
  { name: 'React', icon: <FaReact size={40} /> },
  { name: 'Python', icon: <FaPython size={40} /> },
  { name: 'Django', icon: <FaPython size={40} /> },
  { name: 'HTML', icon: <FaHtml5 size={40} /> },
  { name: 'CSS', icon: <FaCss3Alt size={40} /> },
  { name: 'JavaScript', icon: <FaJs size={40} /> },
  { name: 'MySQL', icon: <SiMysql size={40} /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={40} /> },
  { name: 'Git', icon: <FaGitAlt size={40} /> },
  { name: 'Team Work', icon: <IoMdPeople size={40} /> },
  { name: 'Interpersonal Skills', icon: <MdWork size={40} /> },
  { name: 'NumPy', icon: <SiNumpy size={40} /> },
  { name: 'Pandas', icon: <SiPandas size={40} /> },
  { name: 'Matplotlib', icon: <SiJupyter size={40} /> },
  { name: 'Beautiful Soup', icon: <SiJupyter size={40} /> },
  { name: 'Selenium', icon: <SiSelenium size={40} /> },
  { name: 'MS Excel', icon: <SiMicrosoft size={40} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {skill.icon}
              <p className="mt-2 text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
