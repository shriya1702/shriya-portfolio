import React from 'react';

const experiences = [
  {
    role: 'SDE Intern',
    company: 'Project Dark Horse',
    duration: 'Aug 2024 - Present',
    details: [
      'Pioneered the development of Elite Aide, an advanced interactive assistant application, leveraging tools like Figma and React Native CLI to enhance app interactivity and user engagement.',
      'Spearheaded the end-to-end design and implementation of the PDH School website, establishing a compelling online presence that effectively communicates the educational mission and engages a diverse audience.',
      'Engineered the HAZO mobile app, a robust humor-driven social media platform with dynamic content features such as filters, memes, and interactive posts, utilizing React Native for cross-platform functionality.',
      'Integrated Redux for state management to provide consistent and efficient updates across user interfaces, enhancing user experience with real-time interaction capabilities.',
      'Developed and connected RESTful APIs to the front-end, ensuring immediate synchronization of content and interactive elements like comments, likes, and shares.'
    ],
  },
  {
    role: 'Project Intern',
    company: 'Center for Development and Computing Noida',
    duration: 'July 2023 – Nov 2023',
    details: [
      'Overhauled the conventional email-based translational management system into an efficient Translation Management System.',
      'Orchestrated seamless collaboration within a cross-functional team.',
      'Integrated third-party APIs for improved workflow management.',
    ],
  },
  // Add other experiences here
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Work Experience</h2>
        <div className="mt-8 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">{exp.role} at {exp.company}</h3>
              <p className="mt-1 text-gray-600">{exp.duration}</p>
              <ul className="mt-4 list-disc list-inside">
                {exp.details.map((detail, i) => (
                  <li key={i} className="text-gray-700">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
