import React from 'react';
import { Brain, Database, BarChart3, Bot, Eye, MessageSquare, Github, Linkedin, FileText } from 'lucide-react';

const projects = [
  {
    title: "Neural Style Transfer",
    subtitle: "Deep learning model for artistic image transformation using CNNs",
    icon: Brain
  },
  {
    title: "Time Series Forecasting Platform",
    subtitle: "MLOps pipeline for predicting market trends with LSTM networks",
    icon: BarChart3
  },
  {
    title: "Document Intelligence System",
    subtitle: "NLP-powered document analysis and information extraction",
    icon: FileText
  },
  {
    title: "Conversational AI Assistant",
    subtitle: "Multi-modal chatbot with context awareness and memory",
    icon: MessageSquare
  },
  {
    title: "Computer Vision Pipeline",
    subtitle: "Real-time object detection and tracking for autonomous systems",
    icon: Eye
  },
  {
    title: "Recommendation Engine",
    subtitle: "Collaborative filtering system with deep learning embeddings",
    icon: Database
  }
];

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-100">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="mb-20">
          <h1 className="text-4xl font-light mb-6 text-white">
            Maxence Rossignol
          </h1>
          <p className="text-lg leading-relaxed text-gray-300 font-light">
            AI/ML Engineer passionate about building intelligent systems that solve real-world problems. 
            I specialize in deep learning, computer vision, and natural language processing, with a focus 
            on creating scalable and production-ready machine learning solutions.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8 mb-20">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={index}
                className="group cursor-pointer"
              >
                <div className="flex items-start space-x-4 p-6 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#3a3a3a] transition-colors duration-200">
                  <div className="flex-shrink-0 mt-1">
                    <IconComponent 
                      size={24} 
                      className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200" 
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-medium mb-2 text-white group-hover:text-gray-100">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-light">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="border-t border-[#2a2a2a] pt-12">
          <div className="flex justify-center space-x-8">
            <a 
              href="https://github.com" 
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#3a3a3a] transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github 
                size={20} 
                className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200" 
              />
            </a>
            <a 
              href="https://linkedin.com" 
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#3a3a3a] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin 
                size={20} 
                className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200" 
              />
            </a>
            <a 
              href="/resume.pdf" 
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#3a3a3a] transition-colors duration-200"
              aria-label="Resume"
            >
              <FileText 
                size={20} 
                className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200" 
              />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;