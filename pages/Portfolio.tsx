import React from 'react';
import { Project } from '../types';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Sparkles, Zap, Layers } from 'lucide-react';

const packageShowcase = [
  {
    level: 'Basic',
    price: '500 000 Ar',
    icon: <Layers className="w-5 h-5" />,
    title: "L'Essentiel Pro",
    description: "Un design épuré et fonctionnel. Focus sur la lisibilité et les informations de contact. Idéal pour démarrer.",
    imageUrl: 'https://picsum.photos/seed/minimal/600/400?grayscale',
    features: ['Design structuré', 'Navigation simple', 'Message direct']
  },
  {
    level: 'Standard',
    price: '1 000 000 Ar',
    icon: <Zap className="w-5 h-5" />,
    title: "L'Impact Dynamique",
    description: "Plus de liberté créative, des animations fluides et une mise en page plus riche pour captiver l'audience.",
    imageUrl: 'https://picsum.photos/seed/dynamic/600/400?grayscale',
    features: ['Mise en page riche', 'Micro-interactions', 'Identité forte'],
    highlight: true
  },
  {
    level: 'Premium',
    price: '1 500 000 Ar +',
    icon: <Sparkles className="w-5 h-5" />,
    title: "L'Expérience Immersive",
    description: "Sur-mesure total. Des visuels grands formats, une narration visuelle (storytelling) et une finition haut de gamme.",
    imageUrl: 'https://picsum.photos/seed/luxury/600/400?grayscale',
    features: ['Direction artistique unique', 'Effets avancés', 'Immersion totale']
  }
];

const projects: Project[] = [
  {
    id: '1',
    title: 'Cabinet Alpha',
    category: 'Services Juridiques',
    description: 'Refonte complète de l\'identité visuelle et création d\'un site vitrine institutionnel pour un cabinet d\'avocats.',
    imageUrl: 'https://picsum.photos/seed/law/800/600?grayscale'
  },
  {
    id: '2',
    title: 'Restaurant Le Gusto',
    category: 'Restauration',
    description: 'Site web avec menu interactif et module de réservation de table intégré.',
    imageUrl: 'https://picsum.photos/seed/resto/800/600?grayscale'
  },
  {
    id: '3',
    title: 'Green Tech Madagascar',
    category: 'Industrie / Énergie',
    description: 'Plateforme B2B présentant les solutions solaires pour les entreprises industrielles.',
    imageUrl: 'https://picsum.photos/seed/tech/800/600?grayscale'
  },
  {
    id: '4',
    title: 'Villa Horizon',
    category: 'Immobilier / Tourisme',
    description: 'Site de location saisonnière haut de gamme avec galerie photo immersive.',
    imageUrl: 'https://picsum.photos/seed/villa/800/600?grayscale'
  },
  {
    id: '5',
    title: 'Dr. Ravelo',
    category: 'Santé',
    description: 'Site pour cabinet médical avec prise de rendez-vous en ligne et blog santé.',
    imageUrl: 'https://picsum.photos/seed/doctor/800/600?grayscale'
  },
  {
    id: '6',
    title: 'Construction Batipro',
    category: 'BTP & Construction',
    description: 'Portfolio de réalisations de chantiers et présentation des services de construction.',
    imageUrl: 'https://picsum.photos/seed/build/800/600?grayscale'
  }
];

export const Portfolio: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">Nos Réalisations</h1>
          <p className="text-zinc-600 max-w-2xl text-lg leading-relaxed">
            Découvrez la qualité de nos productions. Du site vitrine efficace à l'expérience digitale complète, nous adaptons le design à vos ambitions.
          </p>
        </div>

        {/* New Section: Package Comparison Showcase */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">À chaque budget son résultat</h2>
            <Link to="/offres" className="hidden md:inline-flex text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors items-center group">
              Voir les détails des offres <Sparkles className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform"/>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packageShowcase.map((item, idx) => (
              <div 
                key={idx} 
                className={`group relative flex flex-col rounded-[2rem] overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  item.highlight 
                    ? 'bg-zinc-900 border-zinc-800 text-white shadow-xl lg:-mt-4 lg:mb-4 lg:py-2' 
                    : 'bg-zinc-50 border-zinc-100 text-zinc-900'
                }`}
              >
                {/* Image Area */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 z-10 ${item.highlight ? 'bg-zinc-900/20' : 'bg-white/10'}`}></div>
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md ${
                      item.highlight 
                        ? 'bg-white/20 text-white border border-white/20' 
                        : 'bg-zinc-900/10 text-zinc-900 border border-zinc-900/10 bg-white/80'
                    }`}>
                      {item.level}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-xl ${item.highlight ? 'bg-zinc-800' : 'bg-white shadow-sm'}`}>
                      {item.icon}
                    </div>
                    <span className={`text-sm font-semibold ${item.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {item.price}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className={`text-sm leading-relaxed mb-6 ${item.highlight ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {item.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-dashed border-opacity-20 flex flex-wrap gap-2" style={{ borderColor: item.highlight ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)' }}>
                    {item.features.map((feat, fIdx) => (
                      <span key={fIdx} className={`text-[10px] font-medium px-2 py-1 rounded-md ${
                        item.highlight 
                          ? 'bg-zinc-800 text-zinc-300' 
                          : 'bg-white border border-zinc-100 text-zinc-500'
                      }`}>
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Main Grid Title */}
        <div className="mb-12 border-t border-zinc-100 pt-12">
          <h2 className="text-2xl font-bold text-zinc-900 tracking-tight mb-8">Tous nos projets récents</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-zinc-100 rounded-3xl shadow-sm group-hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 z-10 transition-colors duration-500"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="bg-white/90 backdrop-blur text-zinc-900 text-xs font-bold px-3 py-1.5 rounded-full">
                      Voir le projet
                    </span>
                  </div>
                </div>
                <div className="px-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2 border border-zinc-200">{project.category}</span>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-24 bg-zinc-50 border border-zinc-200 p-12 text-center rounded-[32px] relative overflow-hidden group">
          {/* Subtle decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-zinc-200 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-1000"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Vous aimez ce que vous voyez ?</h3>
            <p className="text-zinc-600 mb-8 max-w-lg mx-auto">
              Nous appliquons la même rigueur et la même créativité à chaque projet. Le prochain pourrait être le vôtre.
            </p>
            <Link to="/contact">
              <Button>Démarrer mon projet</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};