import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PenTool as Tool } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Tool className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ToolKit</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-gray-900 hover:text-indigo-600 transition-colors ${
                location.pathname === '/' ? 'text-indigo-600' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/tools" 
              className={`text-gray-900 hover:text-indigo-600 transition-colors ${
                location.pathname === '/tools' ? 'text-indigo-600' : ''
              }`}
            >
              Tools
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-900 hover:text-indigo-600 transition-colors ${
                location.pathname === '/about' ? 'text-indigo-600' : ''
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-900 hover:text-indigo-600 transition-colors ${
                location.pathname === '/contact' ? 'text-indigo-600' : ''
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;