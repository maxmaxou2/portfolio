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
    Github,
    Linkedin,
} from 'lucide-react';

const projects = [
    {
        title: "Dotfiles: Developer Workflow",
        subtitle: "Custom environment using NeoVim, Tmux, and Hammerspoon for productivity and speed",
        icon: Wrench,
        link: "https://github.com/maxmaxou2/dotfiles"
    },
    {
        title: "Document Intelligence Platform",
        subtitle: "Production-grade RAG system using OpenAI, Mistral, and OCR for document parsing",
        icon: FileText,
        link: null
    },
    {
        title: "GPS Extraction from Blueprints",
        subtitle: "Computer vision pipeline with OpenCV and binary classifier for building localization",
        icon: Eye
    },
    {
        title: "Data Platform Engineering",
        subtitle: "Data pipelines with Dagster and optimized PostgreSQL via SQLAlchemy ORM",
        icon: Database
    },
    {
        title: "CV & Generative Models @ CEA",
        subtitle: "Trained models like Mask R-CNN, Autoencoders, GANs for computer vision tasks",
        icon: Brain
    },
    {
        title: "Hackathon Winner: REX System",
        subtitle: "PWA with SQL-based semantic search using Transformer embeddings",
        icon: Compass
    },
    {
        title: "Poker Assistant UI",
        subtitle: "CNN-based card recognition and real-time probability guidance in Python UI",
        icon: Gamepad
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
                        on creating scalable and production-ready artificial intelligence solutions.
                    </p>
                </div>

                {/* Projects */}
                <div className="space-y-8 mb-20">
                    {projects.map((project, index) => {
                        const IconComponent = project.icon;
                        const content = (
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
                        ) : content;
                    })}
                </div>

                {/* Footer */}
                <footer className="border-t border-[#2a2a2a] pt-12">
                    <div className="flex justify-center space-x-8">
                        <a
                            href="https://github.com/maxmaxou2"
                            className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#3a3a3a] transition-colors duration-200"
                            aria-label="GitHub"
                        >
                            <Github
                                size={20}
                                className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/maxencerossignol/"
                            className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#3a3a3a] transition-colors duration-200"
                            aria-label="LinkedIn"
                        >
                            <Linkedin
                                size={20}
                                className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200"
                            />
                        </a>
                        <a
                            href="/src/assets/pdfs/CV_Maxence_Rossignol.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
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
