import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false); // Pour l'état de chargement

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true); // On commence le chargement

    try {
      const response = await fetch("https://formspree.io/f/mzdebgwr", {
        method: "POST",
        body: JSON.stringify(formState),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', phone: '', message: '' });
      } else {
        alert("Une erreur est survenue lors de l'envoi.");
      }
    } catch (error) {
      alert("Erreur réseau : vérifiez votre connexion.");
    } finally {
      setIsPending(false); // On arrête le chargement
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-zinc-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Infos de contact inchangées */}
          <div className="flex flex-col justify-center">
             {/* ... ton code actuel pour la partie gauche ... */}
          </div>

          {/* Section Formulaire / Succès */}
          <div className="bg-white p-8 md:p-12 rounded-[32px] border border-zinc-200 shadow-xl shadow-zinc-200/50">
            {isSubmitted ? (
              /* --- TON DESIGN DE SUCCÈS RÉTABLI --- */
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
              /* --- TON FORMULAIRE --- */
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inputs identiques à ton code */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2 pl-1">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all bg-zinc-50 focus:bg-white"
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
                      className="w-full px-5 py-3.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all bg-zinc-50 focus:bg-white"
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
                      className="w-full px-5 py-3.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all bg-zinc-50 focus:bg-white"
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
                    className="w-full px-5 py-3.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all bg-zinc-50 focus:bg-white resize-none"
                    placeholder="Parlez-nous de votre projet..."
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" fullWidth disabled={isPending}>
                    {isPending ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="animate-spin h-4 w-4" /> Envoi en cours...
                      </span>
                    ) : (
                      "Discutons de votre projet"
                    )}
                  </Button>
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
