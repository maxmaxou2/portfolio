import React from 'react';
import {
    Github,
    Linkedin,
    FileText,
} from 'lucide-react';

function About() {
    return (
        <div>
            <div className="flex justify-center space-x-4 mt-6">
                <a
                    href="https://github.com/maxmaxou2"
                    className="group flex items-center justify-center w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#3a3a3a] transition-colors duration-200"
                    aria-label="GitHub"
                >
                    <Github
                        size={18}
                        className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/maxencerossignol/"
                    className="group flex items-center justify-center w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#3a3a3a] transition-colors duration-200"
                    aria-label="LinkedIn"
                >
                    <Linkedin
                        size={18}
                        className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200"
                    />
                </a>
                <a
                    href="/assets/pdfs/CV_Maxence_Rossignol.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#3a3a3a] transition-colors duration-200"
                    aria-label="Resume"
                >
                    <FileText
                        size={18}
                        className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200"
                    />
                </a>
            </div>
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-gray-400">
                This is the about page. I will write something about my life here.
            </p>
        </div>
    );
}

export default About;
