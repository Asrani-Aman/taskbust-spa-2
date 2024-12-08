import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectSection = () => {
  return (
    <section className="w-full py-12 bg-[#080e10]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* D'n'D Rodhak Card */}
          <div className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20">
            <div className="h-48 bg-gray-800">
              <img 
                src="../images/dndRodhak.png"
                alt="D'n'D Rodhak"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">D'n'D Rodhak</h3>
              <div className="space-y-2 mb-4 text-gray-300">
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  UI/UX design using Figma and Canva
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  ReactJS & Material UI implementation
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  Full-stack integration with API endpoints
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://www.dndrodhak.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
                >
                  <ExternalLink size={20} className="group-hover:rotate-12 transition-transform" />
                  <span>Visit Site</span>
                </a>
              </div>
            </div>
          </div>

          {/* Honbil Card */}
          <div className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20">
            <div className="h-48 bg-gray-800">
              <img 
                src="../images/Honbil.png"
                alt="Honbil"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">Honbil (Bike Renting)</h3>
              <div className="space-y-2 mb-4 text-gray-300">
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  Online bike and scooter rental platform
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  Full-stack development with MERN stack
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  Digital rental process management
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <a 
                  href="#"
                  className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors group"
                >
                  <Github size={20} className="group-hover:rotate-12 transition-transform" />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>

          {/* Electrothon Card */}
          <div className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20">
            <div className="h-48 bg-gray-800">
              <img 
                src="/api/placeholder/400/320"
                alt="Electrothon"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">Electrothon Website</h3>
              <div className="space-y-2 mb-4 text-gray-300">
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  National-level hackathon website
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  Event information and registration system
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  Complete event management platform
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://electrothon.nith.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
                >
                  <ExternalLink size={20} className="group-hover:rotate-12 transition-transform" />
                  <span>Visit Site</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;