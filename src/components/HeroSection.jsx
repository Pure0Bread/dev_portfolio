import React from 'react';
import { Github, Linkedin, FileText, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center bg-neutral-950 text-white relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hi, I'm <span className="text-emerald-500">[Dzareef Azraei Bin Dzainul]</span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-neutral-400 mb-8 font-light">
          Full Stack Developer
        </h2>

        <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Building scalable solutions with clean architecture.
          <br />
          Specializing in <span className="text-emerald-200/80">React</span>, <span className="text-emerald-200/80">Node.js</span>, and Modern UI.
        </p>

        {/* SOCIAL LINKS ROW */}
        <div className="flex justify-center gap-6 mb-10">
          <a 
            href="https://github.com/Pure0Bread" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-emerald-400 transition-colors"
          >
            <Github size={30} />
          </a>
          <a 
            href="https://www.linkedin.com/in/dzareef-azraei-1884b6384/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-emerald-400 transition-colors"
          >
            <Linkedin size={30} />
          </a>
          {/* Simple Mailto Link */}
          <a 
            href="dzareef.azraei@gmail.com" 
            className="text-neutral-400 hover:text-emerald-400 transition-colors"
          >
            <Mail size={30} />
          </a>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-emerald-600 text-white hover:bg-emerald-500 rounded font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
          >
            View Projects
          </a>

          {/* CV DOWNLOAD BUTTON */}
          <a 
            href="/my-resume.pdf" // Ensure this file exists in your 'public' folder
            download="My_Resume.pdf" // This forces the browser to download it
            className="flex items-center justify-center gap-2 px-8 py-3 border border-neutral-700 text-neutral-300 hover:border-emerald-500 hover:text-emerald-400 rounded font-semibold transition-all"
          >
            <FileText size={20} />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;