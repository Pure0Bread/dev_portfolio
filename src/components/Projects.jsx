import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "You are looking at it! A personal portfolio website built with React and Tailwind CSS to showcase my skills and projects.",
      tech: ["React", "Tailwind", "Vite"],
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "E-Commerce Dashboard",
      description: "A responsive dashboard for managing products and orders, featuring dark mode and real-time data visualization.",
      tech: ["React", "Node.js", "Chart.js"],
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "Weather App",
      description: "A simple application that fetches weather data from an external API and displays it based on user location.",
      tech: ["JavaScript", "API Integration", "CSS"],
      githubLink: "#",
      demoLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-800">
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-r from-blue-900 to-gray-800 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-500 opacity-50">Project Image</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="bg-gray-800 text-blue-400 text-xs px-2 py-1 rounded border border-gray-700">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a href={project.githubLink} className="text-gray-300 hover:text-white text-sm font-semibold transition-colors">
                    View Code &rarr;
                  </a>
                  <a href={project.demoLink} className="text-blue-500 hover:text-blue-400 text-sm font-semibold transition-colors">
                    Live Demo &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;