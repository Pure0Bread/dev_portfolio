import React from 'react';

const About = () => {
  const skills = [
    "React", "Tailwind CSS", "JavaScript", "Node.js", 
    "Git", "Python", "SQL", "Figma"
  ];

  return (
    <section className="py-20 bg-gray-900 text-white" id="about">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            I am a student and developer passionate about building software that solves real-world problems. 
            I started coding in [Year], and I've been hooked ever since. 
          </p>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            When I'm not coding, you can find me learning new technologies, contributing to open source, or [Your Hobby].
          </p>
        </div>

        {/* Right Column: Skills Grid */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">My Tech Stack</h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all cursor-default shadow-md"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;