import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-neutral-950 text-white border-t border-neutral-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-neutral-400">
            Have a question or want to work together? Drop me a line.
          </p>
        </div>

        <form action="https://formspree.io/f/mjknelwq" method="POST" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-emerald-500 mb-2">Name</label>
              <input 
                type="text"
                name="name"
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded focus:outline-none focus:border-emerald-500 text-white placeholder-neutral-600 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-emerald-500 mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                required
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded focus:outline-none focus:border-emerald-500 text-white placeholder-neutral-600 transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-emerald-500 mb-2">Message</label>
            <textarea 
              name="message"
              rows="4" 
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded focus:outline-none focus:border-emerald-500 text-white placeholder-neutral-600 transition-colors"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full md:w-auto px-8 py-3 bg-emerald-600 text-white font-bold rounded hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-900/20"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;