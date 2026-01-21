import React from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

function Navbar() {
  return (
    <nav className="mb-10 flex justify-center items-center">
      <ul className="flex justify-center space-x-6 mr-4">
        <li>
          <Link
            to="/"
            className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            About
          </Link>
        </li>
      </ul>
      <ThemeSwitcher />
    </nav>
  );
}

export default Navbar;
