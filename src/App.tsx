import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import {
    FileText,
    Github,
    Linkedin,
} from 'lucide-react';

import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Blog from './components/Blog';
import About from './components/About';
import BlogPostPage from './blog/BlogPostPage';

const sentences = [
    "Wannabe entrepreneur. Who isn't?",
    "AI/ML Engineer at your service.",
    "Passionate guy learning useful stuff.",
    "Building my own things.",
    "Tech enthusiast at heart.",
    "Top French engineering grad.",
    "Yes, I do wear glasses.",
    "Introvert with a keyboard.",
    "Trying hard to code well.",
    "Staying curious every day.",
    "This is mostly AI-generated.",
    "This is partly not AI-generated.",
    "Trying to add more human data to www."
];

function AppContent() {
    const location = useLocation();
    const [randomSentence, setRandomSentence] = useState("");

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * sentences.length);
        setRandomSentence(sentences[randomIndex]);
    }, [location]);

    const isAboutPage = location.pathname === '/about';

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-gray-100">
            <div className="max-w-2xl mx-auto px-6 py-16">
                <Navbar />
                {/* Introduction */}
                <div className="mb-10">
                    <h1 className="text-4xl font-light mb-6 text-white text-center">
                        Maxence Rossignol
                    </h1>
                    <div className="text-lg leading-relaxed text-gray-300 font-light text-center">
                        {isAboutPage ? (
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
                        ) : (
                            <p>{randomSentence}</p>
                        )}
                    </div>
                </div>

                <Routes>
                    <Route path="/" element={<Blog />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog/:slug" element={<BlogPostPage />} />
                </Routes>
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
