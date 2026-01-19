import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="mb-10">
            <ul className="flex justify-center space-x-6">
                <li>
                    <Link to="/" className="text-gray-400 hover:text-white">Blog</Link>
                </li>
                <li>
                    <Link to="/projects" className="text-gray-400 hover:text-white">Projects</Link>
                </li>
                <li>
                    <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;