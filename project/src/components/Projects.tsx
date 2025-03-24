import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Job Portal",
      description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/job2.jpg",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app for managing tasks, projects, and team collaboration with real-time updates.",
      image: "/lms.jpg",
      tags: ["React", "Firebase", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is a unique piece of development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-4">
                  <div className="flex gap-3">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
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
