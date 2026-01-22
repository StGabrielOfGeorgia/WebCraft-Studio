import React from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Intro */}
      <div className="py-24 border-b border-zinc-100 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zinc-50 to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-zinc-900 mb-6 tracking-tight">Plus qu'une agence web, <br/> un partenaire de croissance.</h1>
            <p className="text-xl text-zinc-500 leading-relaxed">
              Chez WebCraft Studio, nous pensons qu'un site web ne doit pas seulement être beau. Il doit être rentable, fonctionnel et servir vos objectifs commerciaux.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8 text-zinc-600 leading-relaxed">
              <p>
                Fondée avec une vision claire, WebCraft Studio s'adresse aux entreprises locales et PME qui souhaitent franchir un cap. Nous savons que le monde digital peut sembler complexe et coûteux. C'est pourquoi nous avons simplifié nos offres pour garantir transparence et efficacité.
              </p>
              <p>
                Nous ne sommes pas des "artistes" déconnectés de la réalité économique. Nous sommes des techniciens et des stratèges. Chaque pixel que nous plaçons, chaque ligne de code que nous écrivons a pour but de guider votre visiteur vers l'action : vous appeler, demander un devis, ou acheter vos produits.
              </p>
              <div className="border-l-4 border-zinc-900 pl-8 py-4 my-8 italic text-zinc-800 bg-zinc-50 rounded-r-xl">
                "Notre mission est de démocratiser l'accès à des sites web de haute qualité, optimisés pour la conversion, sans les délais interminables ni les budgets explosés."
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <Target className="h-8 w-8 text-zinc-900 mb-4" />
                <h3 className="text-lg font-bold text-zinc-900 mb-2">Orienté Résultats</h3>
                <p className="text-sm text-zinc-600">Nous mesurons notre succès au vôtre. Pas de jargon technique inutile, nous parlons leads, clients et chiffre d'affaires.</p>
              </div>
              <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <Lightbulb className="h-8 w-8 text-zinc-900 mb-4" />
                <h3 className="text-lg font-bold text-zinc-900 mb-2">Efficacité & Clarté</h3>
                <p className="text-sm text-zinc-600">Nos sites sont rapides, sécurisés et faciles à utiliser. Nous allons droit au but pour offrir la meilleure expérience utilisateur.</p>
              </div>
              <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <Users className="h-8 w-8 text-zinc-900 mb-4" />
                <h3 className="text-lg font-bold text-zinc-900 mb-2">Approche Humaine</h3>
                <p className="text-sm text-zinc-600">Derrière chaque projet, il y a une relation de confiance. Nous sommes disponibles et réactifs pour vous accompagner.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};