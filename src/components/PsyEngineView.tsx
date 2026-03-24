/**
 * FEATURE: PsyEngineView
 * PURPOSE: Visualisation dynamique du moteur PSY™ montrant l'interaction 
 * entre les données brutes et l'âme de l'IA.
 * USE CASE: Section principale de la landing page pour illustrer la technologie OCEAN.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Activity } from 'lucide-react';

const PsyEngineView: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Effet de lueur d'arrière-plan animé */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 bg-[#5B8C9A]/10 blur-[120px] rounded-full z-0 pointer-events-none"
        style={{ willChange: "transform, opacity" }}
      />

      <div className="w-full relative z-10">
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-title-primary mb-2 [-webkit-text-stroke:0.5px_currentcolor]">
            Polymood™
          </h2>
          <p className="text-muted text-sm md:text-base max-w-2xl mx-auto">
            Notre algorithme ne se contente pas de répondre. Il simule la psychologie et les émotions de nos avatars.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch justify-items-center w-full">
          
          {/* Bloc 1: Input Cognitif */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.04, y: -5 }}
            transition={{ 
              default: { duration: 0.5 },
              scale: { type: "spring", stiffness: 300, damping: 20 },
              y: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="card-glass p-5 flex flex-col items-start text-left w-full justify-center hover:border-[#5B8C9A]/40 hover:shadow-[0_20px_40px_rgba(91,140,154,0.2)] cursor-default"
          >
            <Brain className="text-accent mb-3" size={28} aria-hidden="true" />
            <h3 className="title-3 mb-2">Entrée verbale</h3>
            <p className="text-muted text-xs leading-tight">Analyse sémantique des questions.</p>
          </motion.div>

          {/* Bloc 2: Le Cœur PSY (Animé) */}
          <motion.div 
            className="flex justify-center items-center relative w-full h-full py-6 md:py-0"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 150, damping: 20 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-40 h-40 border-2 border-dashed border-[#5B8C9A]/30 rounded-full flex items-center justify-center"
              style={{ willChange: "transform" }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-24 h-24 bg-[#E63946]/15 rounded-full blur-2xl absolute"
                style={{ willChange: "transform" }}
              />
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E63946] to-[#5B8C9A] shadow-[0_0_40px_rgba(91,140,154,0.3)] animate-pulse relative z-20" />
            </motion.div>
            
            {/* Lignes de flux animées */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <Activity className="text-[#5B8C9A]/30" size={64} aria-hidden="true" />
            </div>
          </motion.div>

          {/* Bloc 3: Réponse Organique */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.04, y: -5 }}
            transition={{ 
              default: { duration: 0.5, delay: 0.4 },
              scale: { type: "spring", stiffness: 300, damping: 20 },
              y: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="card-glass p-5 flex flex-col items-start text-left w-full justify-center hover:border-[#5B8C9A]/40 hover:shadow-[0_20px_40px_rgba(91,140,154,0.2)] cursor-default"
          >
            <Zap className="text-accent mb-3" size={28} aria-hidden="true" />
            <h3 className="title-3 mb-2">Réponse en sortie</h3>
            <p className="text-muted text-xs leading-tight">Génération d'une réponse imprégnée de l'état émotionnel actuel de l'IA.</p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default PsyEngineView;