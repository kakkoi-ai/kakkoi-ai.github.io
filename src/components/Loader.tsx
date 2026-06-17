/**
 * FEATURE: Preloader
 * PURPOSE: Créer une introduction immersive et masquer le chargement des assets.
 * VIBE: Éveil de la conscience, minimalisme.
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assetUrl } from '../utils/assetUrl';

const Loader: React.FC<{ onFinished: () => void }> = ({ onFinished }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Temps de chargement allongé (2.5s) pour laisser l'animation d'introduction se terminer
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onFinished, 800); // Synchronisé avec la durée de sortie (exit transition: 0.8s)
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
          className="fixed inset-0 z-[100] bg-[#FAF9F6] flex flex-col items-center justify-center"
        >
          {/* Logo animé */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex flex-col items-center"
          >
            <motion.img 
              src={assetUrl('vertical6.png')} 
              alt="kakkoï AI" 
              className="loader-logo z-10"
              animate={{ scale: [1, 1.04, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            
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
            className="mt-12 text-[10px] uppercase tracking-[0.3em] text-[#2D2D2D] font-[600]"
          >
            Initialisation de l'avatar...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
