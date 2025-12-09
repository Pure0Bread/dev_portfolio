import React from 'react';

const About = () => {
  const skills = [
    "React", "Tailwind CSS", "JavaScript", "Node.js", 
    "Git", "Python", "SQL", "Figma"
  ];

  return (
    // Background: Neutral-950 to match Hero and Projects
    <section className="py-20 bg-neutral-950 text-white" id="about">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-emerald-500">Me</span>
          </h2>
          <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
            I am a student and developer passionate about building software that solves real-world problems. 
            I started coding in 2019, and I've been improving myself ever since. 
          </p>
          <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
            When I'm not coding, you can find me learning other cultures and history, writing short stories, or gaming during my free time.
          </p>
        </div>

        {/* Right Column: Skills Grid */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">My Tech Stack</h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                // Skill Tag: Neutral background, Emerald border on hover
                className="px-6 py-3 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-emerald-500 hover:text-emerald-400 transition-all cursor-default shadow-md hover:shadow-emerald-900/20"
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