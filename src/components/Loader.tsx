/**
 * FEATURE: Preloader
 * PURPOSE: Créer une introduction immersive et masquer le chargement des assets.
 * VIBE: Éveil de la conscience, minimalisme.
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader: React.FC<{ onFinished: () => void }> = ({ onFinished }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // On simule un temps de chargement de 2.5 secondes
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onFinished, 500); // On laisse le temps à l'animation de fin
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-page flex flex-col items-center justify-center"
        >
          {/* Logo animé */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-primary hero-text-block [-webkit-text-stroke:0.5px_currentcolor]">
              kakkoï<span className="text-accent">-ai</span>
            </h1>
            <svg className="absolute -bottom-2 left-0 w-full h-3 overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,10 Q50,20 100,0" fill="transparent" stroke="#E63946" strokeWidth="6" strokeLinecap="round" className="logo-pen-path-1" />
            </svg>
            
            {/* Barre de chargement fine en dessous */}
            <motion.div 
              className="absolute -bottom-4 left-0 h-[1px] bg-accent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Message de "boot" de l'IA */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-12 text-[10px] uppercase tracking-[0.3em] text-accent/50 font-medium"
          >
            Initialisation de l'âme...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
