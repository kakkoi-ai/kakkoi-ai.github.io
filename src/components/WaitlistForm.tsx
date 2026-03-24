import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="px-6 relative z-10 w-full">
      <div className="max-w-xl mx-auto card-glass p-10 text-center" aria-live="polite">
        <AnimatePresence mode="wait">
          {status !== 'success' ? (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-title-primary mb-6 [-webkit-text-stroke:0.5px_currentcolor]">Rejoignez l'évolution.</h2>
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  aria-label="Adresse e-mail pour la liste d'attente"
                  className="ui-input py-4 text-base"
                />
                <motion.div
                  animate={status === 'idle' ? { scale: [1, 1.02, 1] } : {}}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full mt-4"
                >
                  <motion.button 
                    type="submit" 
                    className="ui-btn-primary w-full py-4 text-base"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {status === 'submitting' ? "Envoi..." : "S'inscrire"}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          ) : (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
              <CheckCircle size={48} className="mx-auto text-success mb-4" />
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-title-primary mb-2 [-webkit-text-stroke:0.5px_currentcolor]">Bienvenue.</h2>
              <p className="text-muted text-lg">Vous êtes sur la liste d'attente.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WaitlistForm;