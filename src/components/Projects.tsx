import React from 'react';
import {
  Wrench,
  FileText,
  Eye,
  Brain,
  Code,
  Database,
  Compass,
  Gamepad,
  Lock,
} from 'lucide-react';

const projects = [
  {
    title: 'Dotfiles: Developer Workflow',
    subtitle:
      'Custom environment using NeoVim, Tmux, and Hammerspoon for productivity and speed',
    icon: Wrench,
    link: 'https://github.com/maxmaxou2/dotfiles',
  },
  {
    title: 'Document Intelligence Platform',
    subtitle:
      'Production-grade RAG system using OpenAI, Mistral, and OCR for document parsing',
    icon: FileText,
    confidential: true,
  },
  {
    title: 'GPS Extraction from Blueprints',
    subtitle:
      'Computer vision pipeline with OpenCV and binary classifier for building localization',
    icon: Eye,
    confidential: true,
  },
  {
    title: 'Data Platform Engineering',
    subtitle:
      'Data pipelines with Dagster and optimized PostgreSQL via SQLAlchemy ORM',
    icon: Database,
    confidential: true,
  },
  {
    title: 'CV & Generative Models @ CEA',
    subtitle:
      'Trained models like Mask R-CNN, Autoencoders, GANs for computer vision tasks',
    icon: Brain,
    link: '/assets/pdfs/Rapport pole projet IA.pdf',
  },
  {
    title: 'Hackathon Winner: REX System',
    subtitle: 'PWA with SQL-based semantic search using Transformer embeddings',
    icon: Compass,
    link: 'https://github.com/maxmaxou2/T-REX',
  },
  {
    title: 'Poker Assistant UI',
    subtitle:
      'CNN-based card recognition and real-time probability guidance in Python UI',
    icon: Gamepad,
    link: 'https://github.com/maxmaxou2/poker_project',
  },
];

function Projects() {
  return (
    <div className="space-y-5 mb-20">
      {projects.map((project, index) => {
        const IconComponent = project.icon;
        const content = (
          <div key={index} className="group cursor-pointer">
            <div className="flex items-start space-x-4 p-6 rounded-lg bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] hover:border-gray-300 dark:hover:border-[#3a3a3a] transition-colors duration-200">
              <div className="flex-shrink-0 mt-1">
                <IconComponent
                  size={24}
                  className="text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-medium text-black dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-100">
                    {project.title}
                  </h3>
                  {project.confidential && (
                    <div className="flex items-center px-2 py-0.5 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200/70 text-xs rounded-full">
                      <Lock size={12} className="mr-1" />
                      Confidential
                    </div>
                  )}
                  {!project.confidential && project.link && (
                    <div className="flex items-center px-2 py-0.5 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200/70 text-xs rounded-full">
                      <Code size={12} className="mr-1" />
                      Available
                    </div>
                  )}
                </div>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-light">
                  {project.subtitle}
                </p>
              </div>
            </div>
          </div>
        );

        return project.link ? (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {content}
          </a>
        ) : (
          content
        );
      })}
    </div>
  );
}

export default Projects;
