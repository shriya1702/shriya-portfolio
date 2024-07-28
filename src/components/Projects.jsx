import React from 'react';

const projects = [
  {
    name: 'Recipify',
    description: 'An intuitive web application for recipe sharing and meal planning.',
    link: 'https://github.com/shriya1702/recipify',
  },
  {
    name: 'Indian Startup Funding Analysis',
    description: 'Comprehensive analysis of funding data for Indian startups from January 2015 to August 2017.',
    link: 'https://github.com/shriya1702/Analysis-of-Indian-Startup-Funding--2015-2017-',
  },
  {
    name: 'InstaBot - Instagram Automation and Analysis',
    description: 'Developed an Instagram automation bot using Python and Selenium.',
    link: 'https://github.com/shriya1702/instabot',
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
