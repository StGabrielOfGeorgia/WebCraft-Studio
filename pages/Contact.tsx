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
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);

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
        alert("Une erreur est survenue.");
      }
    } catch (error) {
      alert("Erreur réseau.");
    } finally {
      setIsPending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-zinc-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* --- PARTIE GAUCHE (INFOS) : TOUJOURS VISIBLE --- */}
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

          {/* --- PARTIE DROITE (FORMULAIRE OU SUCCÈS) --- */}
          <div className="bg-white p-8 md:p-12 rounded-[32px] border border-zinc-200 shadow-xl shadow-zinc-200/50">
            {isSubmitted ? (
              /* DESIGN DE SUCCÈS */
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
              /* FORMULAIRE */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2 pl-1">Nom complet</label>
                  <input
                    type="text" id="name" name="name" required
                    value={formState.name}
