import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { CheckCircle2, TrendingUp, Users, ShieldCheck } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden isolate">
        {/* Abstract Background Design */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-zinc-400 opacity-20 blur-[100px] animate-pulse"></div>
        <div className="absolute right-10 top-20 -z-10 h-64 w-64 rounded-full bg-zinc-200 opacity-30 blur-3xl"></div>
        <div className="absolute left-10 bottom-20 -z-10 h-40 w-40 rounded-full bg-zinc-300 opacity-20 blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold uppercase tracking-wide text-zinc-600">
            Agence Web Premium
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8">
            Transformez votre <br />
            présence digitale.
          </h1>
          <p className="mt-4 text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Ne laissez pas votre entreprise invisible. Nous concevons des sites web performants qui convertissent vos visiteurs en clients fidèles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button withIcon>Lancer mon projet</Button>
            </Link>
            <Link to="/offres">
              <Button variant="outline">Voir nos offres</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-20 bg-zinc-50/50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 tracking-tight">
                Pourquoi un site web est essentiel aujourd'hui ?
              </h2>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                À l'ère du numérique, votre site web est souvent le premier point de contact entre vous et vos clients. Un site amateur ou inexistant coûte de l'argent à votre entreprise chaque jour.
              </p>
              <ul className="space-y-4">
                {[
                  "Crédibilité immédiate auprès de vos prospects",
                  "Accessible 24h/24 et 7j/7",
                  "Une vitrine professionnelle pour vos services"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-zinc-900 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group">
               {/* Decorative backdrop for image */}
               <div className="absolute -inset-4 bg-gradient-to-tr from-zinc-200 to-white rounded-3xl opacity-50 blur-lg group-hover:opacity-75 transition duration-500"></div>
              <img 
                src="https://picsum.photos/seed/office1/800/600?grayscale" 
                alt="Bureau moderne" 
                className="relative rounded-3xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-[1.02] border border-zinc-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">Ce que WebCraft Studio vous apporte</h2>
            <p className="mt-4 text-zinc-500">Des résultats concrets, pas de promesses en l'air.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <TrendingUp className="h-8 w-8 text-zinc-900" />,
                title: "Visibilité & Croissance",
                desc: "Augmentez votre portée et attirez de nouveaux clients grâce à une structure optimisée pour le web."
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-zinc-900" />,
                title: "Crédibilité Professionnelle",
                desc: "Un design premium qui inspire confiance et positionne votre entreprise comme leader de son marché."
              },
              {
                icon: <Users className="h-8 w-8 text-zinc-900" />,
                title: "Conversion Client",
                desc: "Des parcours utilisateurs étudiés pour transformer les simples visiteurs en prospects qualifiés."
              }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 hover:border-zinc-300 transition-all duration-300 group hover:shadow-xl hover:-translate-y-2"
              >
                <div className="mb-6 bg-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 border border-zinc-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-zinc-900 text-white text-center relative overflow-hidden">
        {/* Abstract shapes in footer */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-zinc-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-zinc-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Prêt à passer au niveau supérieur ?</h2>
          <p className="text-zinc-400 mb-12 text-lg max-w-2xl mx-auto">
            Discutons de vos objectifs et construisons ensemble l'outil qui fera grandir votre business.
          </p>
          <Link to="/contact">
            <button className="bg-white text-zinc-900 px-10 py-4 font-bold text-lg rounded-full hover:bg-zinc-200 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-white/10">
              Demander un devis
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};