import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import { Link, useLocation } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Nos Offres', path: '/offres' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'À Propos', path: '/a-propos' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <span className="text-2xl font-bold tracking-tighter text-zinc-900 group-hover:text-zinc-700 transition-colors">
                WebCraft<span className="text-zinc-400">Studio</span>.
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-200 px-3 py-1 rounded-full ${
                  isActive(item.path) 
                    ? 'text-zinc-900 bg-zinc-100' 
                    : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact">
              <button className="bg-zinc-900 text-white px-6 py-2.5 text-sm font-medium hover:bg-zinc-800 transition-all rounded-full hover:shadow-lg hover:-translate-y-0.5">
                Devis Gratuit
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-zinc-500 hover:bg-zinc-100 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-zinc-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-lg ${
                  isActive(item.path)
                    ? 'text-zinc-900 bg-zinc-50'
                    : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-3 py-3 text-base font-medium text-white bg-zinc-900 mt-4 rounded-full"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};