import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get In <span className="text-blue-500">Touch</span>
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a 
          href="mailto:your.email@example.com" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Say Hello
        </a>

        <div className="mt-20 border-t border-gray-800 pt-10 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;