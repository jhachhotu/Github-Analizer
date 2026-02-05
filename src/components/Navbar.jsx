import { useState } from 'react';
import { FiGithub, FiSearch, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FiGithub className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">GitAnalyzer</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#analytics" className="hover:text-blue-400 transition-colors">Analytics</a>
            <a href="#compare" className="hover:text-blue-400 transition-colors">Compare</a>
            <a href="#trending" className="hover:text-blue-400 transition-colors">Trending</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
              <a href="#home" className="block px-3 py-2 hover:text-blue-400">Home</a>
              <a href="#analytics" className="block px-3 py-2 hover:text-blue-400">Analytics</a>
              <a href="#compare" className="block px-3 py-2 hover:text-blue-400">Compare</a>
              <a href="#trending" className="block px-3 py-2 hover:text-blue-400">Trending</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;