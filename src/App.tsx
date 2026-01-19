import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Blog from './components/Blog';
import About from './components/About';

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

function App() {
    const [randomSentence, setRandomSentence] = useState("");

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * sentences.length);
        setRandomSentence(sentences[randomIndex]);
    }, []);

    return (
        <Router>
            <div className="min-h-screen bg-[#0f0f0f] text-gray-100">
                <div className="max-w-2xl mx-auto px-6 py-16">
                    <Navbar />
                    {/* Introduction */}
                    <div className="mb-10">
                        <h1 className="text-4xl font-light mb-6 text-white text-center">
                            Maxence Rossignol
                        </h1>
                        <p className="text-lg leading-relaxed text-gray-300 font-light text-center">
                            {randomSentence}
                        </p>
                    </div>

                    <Routes>
                        <Route path="/" element={<Blog />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
