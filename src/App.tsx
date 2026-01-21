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
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

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
        <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0f0f0f] dark:text-gray-100 flex flex-col">
            <div className="flex-grow max-w-2xl mx-auto px-6 py-16">
                <Navbar />
                {/* Introduction */}
                <div className="mb-10">
                    <h1 className="text-4xl font-light mb-6 text-black dark:text-white text-center">
                        Maxence Rossignol
                    </h1>
                    <div className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 font-light text-center">
                        {isAboutPage ? (
                            <div className="flex justify-center space-x-4 mt-6">
                                <a
                                    href="https://github.com/maxmaxou2"
                                    className="group flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] hover:border-gray-300 dark:hover:border-[#3a3a3a] transition-colors duration-200"
                                    aria-label="GitHub"
                                >
                                    <Github
                                        size={18}
                                        className="text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200"
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/maxencerossignol/"
                                    className="group flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] hover:border-gray-300 dark:hover:border-[#3a3a3a] transition-colors duration-200"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin
                                        size={18}
                                        className="text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200"
                                    />
                                </a>
                                <a
                                    href="/assets/pdfs/CV_Maxence_Rossignol.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] hover:border-gray-300 dark:hover:border-[#3a3a3a] transition-colors duration-200"
                                    aria-label="Resume"
                                >
                                    <FileText
                                        size={18}
                                        className="text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200"
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
            <Footer />
        </div>
    );
}

function App() {
    return (
        <Router>
            <ThemeProvider>
                <AppContent />
            </ThemeProvider>
        </Router>
    );
}

export default App;
