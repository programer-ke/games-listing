import React from "react";
import { FaGithub, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-100 via-gray-50 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 shadow-inner transition-colors mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Project Info */}
        <div>
          <h2 className="font-bold text-xl text-indigo-600 dark:text-indigo-400 mb-2">Game Listing</h2>
          <p className="text-sm mb-4">
            Discover trending and genre-based games with a modern, responsive UI. Powered by RAWG API.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://github.com/programer-ke/games-listing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@programminghub1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              aria-label="TikTok"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a to="/" className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="https://github.com/programer-ke/games-listing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@programminghub1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>
        {/* Contact / Credits */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">About</h3>
          <p className="text-sm mb-2">
            Built by <a href="https://github.com/programer-ke" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-600 dark:hover:text-indigo-400">programer-ke</a>.<br />
            Data from <a href="https://rawg.io/apidocs" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-600 dark:hover:text-indigo-400">RAWG API</a>.
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 text-center py-4 text-xs text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Game Listing. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;