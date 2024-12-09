import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "PDH School Website",
    description: "An intuitive Landing page for Pdh school",
    link: "https://www.pdhschool.com/",
  },
  {
    name: "Elite Aide Landing Page",
    description: "Landing Page for the upcoming AI Assistant app I made.",
    link: "https://elite-aide-v1.vercel.app/",
  },
  {
    name: "Recipify",
    description: "An intuitive web application for recipe sharing and meal planning.",
    link: "https://github.com/shriya1702/recipify",
  },
  {
    name: "Indian Startup Funding Analysis",
    description: "Comprehensive analysis of funding data for Indian startups from January 2015 to August 2017.",
    link: "https://github.com/shriya1702/Analysis-of-Indian-Startup-Funding--2015-2017-",
  },
  {
    name: "InstaBot - Instagram Automation and Analysis",
    description: "Developed an Instagram automation bot using Python and Selenium.",
    link: "https://github.com/shriya1702/instabot",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-400">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-bg-gray-700 via-bg-gray-600 to-red-500 group hover:scale-105 transition-transform duration-300"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <h3 className="text-2xl font-semibold text-white group-hover:text-purple-300 transition duration-300">
                {project.name}
              </h3>
              <p className="mt-4 text-gray-200 group-hover:text-white">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-purple-300 hover:text-white transition duration-300"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
