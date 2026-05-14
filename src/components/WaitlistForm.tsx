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

  // Animation fluide et calme (remplace l'ancien Jelly Bounce trop élastique)
  const calmTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

  return (
    <div className="px-6 relative z-10 w-full">
      <motion.div 
        className="max-w-xl mx-auto card-glass p-10 md:p-14 text-center min-h-[300px] flex flex-col justify-center" 
        aria-live="polite"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={calmTransition}
      >
        <AnimatePresence mode="wait">
          {status !== 'success' ? (
            <motion.div 
              key="form" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              transition={calmTransition}
            >
              <h2 className="text-3xl md:text-4xl font-[600] tracking-[-0.02em] text-title-primary mb-6 [-webkit-text-stroke:0.5px_currentcolor]">Rejoignez l'évolution.</h2>
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  aria-label="Adresse e-mail pour la liste d'attente"
                  className="ui-input py-4 text-base w-full"
                  disabled={status === 'submitting'}
                />
                <div className="w-full mt-4">
                  <motion.button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="ui-btn-primary w-full py-4 text-base"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {status === 'submitting' ? "Envoi..." : "S'inscrire"}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              key="success" 
              initial={{ opacity: 0, scale: 0.8, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={calmTransition}
              className="flex flex-col items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ ...calmTransition, delay: 0.1 }}
              >
                <CheckCircle size={56} className="text-success mb-6" strokeWidth={2} />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-[600] tracking-[-0.02em] text-title-primary mb-3 [-webkit-text-stroke:0.5px_currentcolor]">Bienvenue.</h2>
              <p className="text-muted text-lg">Vous êtes sur la liste d'attente.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default WaitlistForm;