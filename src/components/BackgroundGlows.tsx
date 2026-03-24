/**
 * FEATURE: BackgroundGlows
 * PURPOSE: Créer une ambiance immersive avec des halos de lumière mouvants.
 * VIBE: Futuriste, "Soul of AI", organique.
 */

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundGlows: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Définition des vitesses et directions du parallax en fonction du défilement (de 0 à 1)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]); // Monte très vite
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);  // Descend doucement
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]); // Monte doucement
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 300]);  // Descend très vite

  return (
    <>
      {/* Calque des lueurs (en arrière-plan) */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Blob 1 : Lofi Blue */}
        <motion.div style={{ y: y1, willChange: "transform" }} className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-[#5B8C9A]/15 rounded-full blur-[120px] missions-bg-blob-1" />

        {/* Blob 2 : Soft Red */}
        <motion.div style={{ y: y2, willChange: "transform" }} className="absolute top-[30%] left-[-10%] w-[700px] h-[700px] bg-[#E63946]/10 rounded-[40%] blur-[130px] missions-bg-blob-2" />

        {/* Blob 3 : Sand/Gold */}
        <motion.div style={{ y: y3, willChange: "transform" }} className="absolute top-[60%] right-[-10%] w-[500px] h-[500px] bg-[#E8B878]/15 rounded-full blur-[120px] missions-bg-blob-1" />

        {/* Blob 4 : Deep Muted Blue */}
        <motion.div style={{ y: y4, willChange: "transform" }} className="absolute bottom-[-10%] left-[10%] w-[800px] h-[800px] bg-[#4A6FA5]/10 rounded-[45%] blur-[140px] missions-bg-blob-2" />
      </div>

      {/* Grain de film analogique (Au premier plan, 100% Local via SVG Base64) */}
      <div 
        className="fixed inset-0 z-[100] opacity-[0.035] mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
      />
    </>
  );
};

export default BackgroundGlows;