import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Info } from 'lucide-react';
import { Button } from '../components/Button';
import { ServicePackage } from '../types';

const packages: ServicePackage[] = [
  {
    id: 'basic',
    name: 'Package Basic',
    price: '500 000 Ar',
    description: "L'essentiel pour démarrer votre présence en ligne.",
    features: [
      'Site Vitrine 3–5 pages',
      'Design template personnalisé',
      '100% Responsive Mobile',
      'Formulaire de contact simple',
      'Intégration Google Maps'
    ],
    paymentTerms: '250k à la commande + 250k à la livraison (10 jours)',
    maintenance: 'Optionnelle : 50 000 Ar / mois'
  },
  {
    id: 'standard',
    name: 'Package Standard',
    price: '1 000 000 Ar',
    description: "La solution idéale pour les PME en croissance.",
    isPopular: true,
    features: [
      'Site Complet 5–8 pages',
      'Design sur-mesure avancé',
      'Formulaires de contact avancés',
      'Intégration réseaux sociaux',
      'Formation 2h (gestion contenu)',
      'Optimisation vitesse'
    ],
    paymentTerms: '500k à la commande + 500k à la livraison',
    maintenance: '75 000 Ar / mois (Mises à jour incluses)'
  },
  {
    id: 'premium',
    name: 'Package Premium',
    price: '1 500 000 Ar',
    description: "Performance maximale et visibilité accrue.",
    features: [
      'Tout le Package Standard',
      'Blog intégré pour le contenu',
      'SEO de base (Référencement)',
      'Configuration Google My Business',
      'Analytics & Rapport mensuel',
      'Support prioritaire'
    ],
    paymentTerms: '50% acompte + 50% à la livraison',
    maintenance: '100 000 Ar / mois (Maintenance + SEO léger)'
  }
];

export const Offers: React.FC = () => {
  return (
    <div className="py-24 bg-zinc-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-zinc-900 mb-6 tracking-tight">Des offres claires, sans surprise.</h1>
          <p className="text-zinc-600 text-lg">
            Choisissez le niveau d'accompagnement adapté à vos ambitions et à votre budget. Investissez dans un outil rentable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative bg-white p-8 rounded-3xl transition-all duration-300 ${
                pkg.isPopular 
                  ? 'border-2 border-zinc-900 shadow-2xl scale-100 lg:-mt-4 lg:mb-4 hover:-translate-y-2' 
                  : 'border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-zinc-300'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-zinc-900 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    Le plus choisi
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-zinc-900">{pkg.name}</h3>
                <p className="mt-2 text-zinc-500 text-sm min-h-[40px]">{pkg.description}</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-3xl font-bold text-zinc-900">{pkg.price}</span>
                  {pkg.id === 'premium' && <span className="ml-2 text-sm text-zinc-500">+</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8 border-t border-zinc-100 pt-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="rounded-full bg-zinc-100 p-1 mr-3 flex-shrink-0">
                      <Check className="h-3 w-3 text-zinc-900" />
                    </div>
                    <span className="text-sm text-zinc-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-zinc-50 p-5 rounded-2xl mb-8 text-xs text-zinc-600 space-y-2 border border-zinc-100">
                <div className="flex items-start">
                  <Info className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Paiement :</strong> {pkg.paymentTerms}</span>
                </div>
                <div className="flex items-start">
                  <Info className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Maintenance :</strong> {pkg.maintenance}</span>
                </div>
              </div>

              <Link to="/contact">
                <Button 
                  fullWidth 
                  variant={pkg.isPopular ? 'primary' : 'outline'}
                >
                  Choisir ce package
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <p className="text-zinc-500">
             Vous avez un besoin spécifique (E-commerce, Application Web) ? 
             <Link to="/contact" className="text-zinc-900 font-semibold underline decoration-zinc-900/30 hover:decoration-zinc-900 transition-all ml-2">Contactez-nous pour un devis sur mesure.</Link>
           </p>
        </div>
      </div>
    </div>
  );
};