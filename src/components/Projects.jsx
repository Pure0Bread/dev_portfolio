import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Here you are Dear viewer! A personal portfolio website built with React and Tailwind CSS.",
      tech: ["React", "Tailwind", "Vite"],
      githubLink: "#",
      demoLink: "#",
      image: "/project1.png" 
    },
    {
      title: "Logistics Management Dashboard",
      description: "A responsive dashboard for managing Logistics.",
      tech: ["React", "Node.js", "NivoCharts"],
      githubLink: "#",
      demoLink: "#",
      image: "/project2.png" 
    },
    {
      title: "TME: The Malayan Emergency",
      description: "My Final Year Project showcasing the Malayan Emergency using Game based learning, developed in GODOT.",
      tech: ["Godot", "GDscript", "Python"],
      githubLink: "#",
      demoLink: "#",
      image: "/project3.png" 
    },
  ];

  return (
    // Background: Neutral-950 (Deep Dark)
    <section id="projects" className="py-20 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-emerald-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              // Card: Neutral-900 with subtle Emerald border on hover
              className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-900/20 transition-all duration-300 border border-neutral-800 hover:border-emerald-500/50 group"
            >
              
              {/* IMAGE CONTAINER */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/400x200?text=Project+Image"; }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-neutral-400 text-sm mb-4">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="bg-neutral-800 text-emerald-400 text-xs px-2 py-1 rounded border border-neutral-700">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a href={project.githubLink} className="text-neutral-300 hover:text-white text-sm font-semibold transition-colors">
                    View Code &rarr;
                  </a>
                  <a href={project.demoLink} className="text-emerald-500 hover:text-emerald-400 text-sm font-semibold transition-colors">
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