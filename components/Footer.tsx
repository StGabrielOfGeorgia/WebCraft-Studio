import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="text-2xl font-bold tracking-tighter text-white block mb-4">
            WebCraft<span className="text-zinc-600">Studio</span>.
          </span>
          <p className="text-sm max-w-xs leading-relaxed">
            Nous transformons votre présence digitale en un véritable levier de croissance pour votre entreprise.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Accueil</Link></li>
            <li><Link to="/offres" className="hover:text-white transition-colors">Nos Offres</Link></li>
            <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>contact@webcraftstudio.com</li>
            <li>+261 34 00 000 00</li>
            <li>Antananarivo, Madagascar</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-zinc-800 text-xs text-center">
        © {new Date().getFullYear()} WebCraft Studio. Tous droits réservés.
      </div>
    </footer>
  );
};