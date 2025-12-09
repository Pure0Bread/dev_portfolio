import React from 'react';

const HeroSection = () => {
  return (
    
    <div id="home" className="min-h-screen flex items-center justify-center bg-gray-900 text-white relative overflow-hidden">
      
      {/* Background Decor (Optional glow effect) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-black z-0"></div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Hi, I'm [Your Name]
        </h1>

        {/* Sub-headline: The "Hook" */}
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
          Junior Full Stack Developer
        </h2>

        {/* The Value Prop */}
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Specializing in <span className="text-blue-400 font-semibold">React</span>, <span className="text-yellow-400 font-semibold">Python</span>, and <span className="text-green-400 font-semibold">SQL</span>. 
          <br/>
          Building scalable web applications and optimizing data pipelines.
          <br/>
          <span className="text-sm italic opacity-70 mt-2 block">Ex-Intern at Hectadata</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-gray-600 hover:border-white rounded-full font-semibold transition-all hover:bg-white hover:text-black"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;