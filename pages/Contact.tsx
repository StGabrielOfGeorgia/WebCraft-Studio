import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-zinc-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-zinc-900 mb-6 tracking-tight">Parlons de votre projet.</h1>
            <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
              Vous avez une idée ? Un besoin précis ? Ou simplement des questions sur nos offres ? Remplissez le formulaire et nous vous recontacterons sous 24h ouvrées.
            </p>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-zinc-100 mr-5 group-hover:border-zinc-300 transition-colors">
                  <Phone className="h-6 w-6 text-zinc-900" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 text-lg">Téléphone</h3>
                  <p className="text-zinc-500">+261 34 00 000 00</p>
                  <p className="text-xs text-zinc-400 mt-1">Lun-Ven : 8h - 18h</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-zinc-100 mr-5 group-hover:border-zinc-300 transition-colors">
                  <Mail className="h-6 w-6 text-zinc-900" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 text-lg">Email</h3>
                  <p className="text-zinc-500">contact@webcraftstudio.com</p>
                  <p className="text-xs text-zinc-400 mt-1">Réponse rapide garantie</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-zinc-100 mr-5 group-hover:border-zinc-300 transition-colors">
                  <MapPin className="h-6 w-6 text-zinc-900" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 text-lg">Bureau</h3>
                  <p className="text-zinc-500">Antananarivo, Madagascar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded-[32px] border border-zinc-200 shadow-xl shadow-zinc-200/50">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <Send className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Message envoyé !</h3>
                <p className="text-zinc-600">Merci de nous avoir contactés. Notre équipe reviendra vers vous très rapidement.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-sm font-semibold text-zinc-900 underline hover:text-zinc-600"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2 pl-1">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all bg-zinc-50 focus:bg-white hover:border-zinc-300"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2 pl-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all bg-zinc-50 focus:bg-white hover:border-zinc-300"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-2 pl-1">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all bg-zinc-50 focus:bg-white hover:border-zinc-300"
                      placeholder="034 00 000 00"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2 pl-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all bg-zinc-50 focus:bg-white resize-none hover:border-zinc-300"
                    placeholder="Parlez-nous de votre projet..."
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" fullWidth>Discutons de votre projet</Button>
                </div>
                <p className="text-xs text-zinc-400 text-center mt-4">
                  Vos informations sont confidentielles et ne seront jamais partagées.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};