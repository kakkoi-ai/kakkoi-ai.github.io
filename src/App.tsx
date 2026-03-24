import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Waves, Menu, X } from 'lucide-react';

import { SITE_CONFIG } from './site-config';
import BackgroundGlows from './components/BackgroundGlows';
import PsyEngineView from './components/PsyEngineView';
import WaitlistForm from './components/WaitlistForm';
import Loader from './components/Loader'; // <-- Nouvel import
import CustomCursor from './components/CustomCursor';

// Palette Lofi Morning (Latte & Bleu)
const OCEAN_COLORS = [
  "text-[#5B8C9A]", // O - Lofi Blue
  "text-[#E63946]", // C - Soft Red
  "text-[#83A598]", // E - Muted Teal
  "text-[#E8B878]", // A - Warm Sand
  "text-[#4A6FA5]"  // N - Deep Muted Blue
];

// --- CONFIGURATION DES ANIMATIONS "JELLY BOUNCE" ---
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Délai entre chaque mot/élément
      delayChildren: 0.3    // Attendre que le Loader disparaisse
    }
  }
};

const jellyVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.8, rotate: -4 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 250, // Force du ressort
      damping: 10,    // Élasticité (plus c'est bas, plus ça rebondit)
      mass: 1.2       // Poids des lettres
    }
  }
};

// --- CONFIGURATION DES ANIMATIONS "MENU MOBILE" ---
const mobileMenuVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: { 
    opacity: 1, 
    backdropFilter: "blur(16px)", 
    transition: { duration: 0.3, staggerChildren: 0.05, delayChildren: 0.1 } 
  }
};

const mobileItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

function App() {
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fix du Scroll instable : Force le retour en haut de page au rafraîchissement (F5)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // UX Mobile : Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Sécurité : Fermer le menu si on repasse sur un grand écran
    const handleResize = () => { if (window.innerWidth >= 768) setIsMobileMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <div className="relative min-h-screen page text-primary selection:bg-accent/30 overflow-x-hidden">
      
      <CustomCursor />
      
      {/* 1. ÉCRAN DE CHARGEMENT */}
      <Loader onFinished={() => setLoading(false)} />

      {/* 2. CONTENU (affiché uniquement après le loader ou via animation de fondu) */}
      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <BackgroundGlows />

          <header className="fixed top-0 w-full z-50 bg-surface-1/80 backdrop-blur-xl border-b border-border-subtle">
            <div className="ui-container h-20 flex items-center justify-between">
              <a 
                href="/" 
                onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}
                className="relative font-black text-2xl tracking-tighter cursor-pointer hover:scale-105 transition-transform flex flex-col items-center hero-text-block z-[60]"
              >
                <span>kakkoï<span className="text-accent">-ai</span></span>
                {/* Animation 'Pop' de dessin au trait sous le logo */}
                <svg className="absolute -bottom-1 left-0 w-full h-2 overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q50,20 100,0" fill="transparent" stroke="#E63946" strokeWidth="6" strokeLinecap="round" className="logo-pen-path-1" />
                </svg>
              </a>
              
              <nav className="hidden md:flex items-center gap-8">
                <a href="#technologie" className="ui-link">Technologie</a>
                <a href="#vision" className="ui-link">Vision</a>
                <a href="#waitlist" className="ui-link">Accès</a>
              </nav>

              <motion.div 
                className="hidden md:flex items-center"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.a 
                  href="#waitlist" 
                  className="ui-btn-primary"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  S'inscrire
                </motion.a>
              </motion.div>

              {/* Bouton Menu Burger Mobile */}
              <button 
                className="md:hidden relative z-[60] p-2 -mr-2 text-primary focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMobileMenuOpen ? "close" : "menu"}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                  >
                    {isMobileMenuOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>

            {/* Overlay Menu Mobile (Glass Panel) */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                id="mobile-menu"
                  variants={mobileMenuVariants}
                  className="fixed inset-0 z-[55] bg-surface-1/95 flex flex-col items-center justify-center md:hidden"
                >
                  <nav className="flex flex-col items-center gap-10 w-full px-6">
                    <motion.a variants={mobileItemVariants} href="#technologie" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black tracking-tighter text-primary hover:text-[#5B8C9A] transition-colors [-webkit-text-stroke:0.5px_currentcolor]">Technologie</motion.a>
                    <motion.a variants={mobileItemVariants} href="#vision" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black tracking-tighter text-primary hover:text-[#E63946] transition-colors [-webkit-text-stroke:0.5px_currentcolor]">Vision</motion.a>
                    <motion.a variants={mobileItemVariants} href="#waitlist" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black tracking-tighter text-primary hover:text-[#E8B878] transition-colors [-webkit-text-stroke:0.5px_currentcolor]">Accès</motion.a>
                    
                    <motion.div variants={mobileItemVariants} className="mt-8 w-full max-w-xs">
                      <a href="#waitlist" onClick={() => setIsMobileMenuOpen(false)} className="ui-btn-primary w-full py-4 text-xl">S'inscrire</a>
                    </motion.div>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </header>

          <main className="relative z-10">
            {/* SECTION 1: HERO */}
            <motion.section 
              id="hero"
              variants={heroContainerVariants}
              initial="hidden"
              animate="visible"
              className="relative min-h-screen flex flex-col justify-center items-center text-center ui-container ui-section"
            >
              <motion.div variants={jellyVariants} className="flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 mb-8">
                <Waves size={14} className="text-accent" />
                <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">MOTEUR POLYMOOD™ v1.0</span>
              </motion.div>

              <h1 className="text-6xl md:text-[5.5rem] font-black tracking-tighter leading-[1.05] max-w-[18ch] mx-auto mb-4 [-webkit-text-stroke:0.5px_currentcolor] flex flex-wrap justify-center gap-x-[0.25em] gap-y-2">
                {SITE_CONFIG.hero.title.split(' ').map((word, index) => (
                  <motion.span key={index} variants={jellyVariants} className="inline-block origin-bottom">
                    {word}
                  </motion.span>
                ))}
              </h1>
              <motion.h2 variants={jellyVariants} className="text-2xl md:text-3xl font-black tracking-tight text-accent mb-8 [-webkit-text-stroke:0.5px_currentcolor]">
                {SITE_CONFIG.hero.highlight}
              </motion.h2>
              <motion.p variants={jellyVariants} className="text-base md:text-lg leading-relaxed text-muted max-w-2xl mx-auto mb-10">
                {SITE_CONFIG.hero.subtitle}
              </motion.p>
            </motion.section>

            {/* SECTION 2: TECHNOLOGIE (Polymood + OCEAN) */}
            <section id="technologie" className="min-h-screen flex flex-col justify-center ui-section">
              <div className="ui-container flex flex-col gap-4">
                <PsyEngineView />

                {/* Rangée 1 : O, C, E */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {SITE_CONFIG.ocean.slice(0, 3).map((trait, index) => (
                    <motion.div 
                      key={trait.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      whileHover={{ scale: 1.03, y: -8 }}
                      transition={{ 
                        default: { duration: 0.6, delay: index * 0.15, ease: "easeOut" },
                        scale: { type: "spring", stiffness: 300, damping: 20 },
                        y: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                      className="card-glass p-6 group flex flex-col text-left w-full h-full hover:border-[#5B8C9A]/40 hover:shadow-[0_20px_40px_rgba(91,140,154,0.2)]"
                    >
                      <div className={`${OCEAN_COLORS[index]} font-black tracking-tighter text-5xl xl:text-6xl mb-3 drop-shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 [-webkit-text-stroke:0.5px_currentcolor]`}>{trait.id}</div>
                      <h3 className="title-3 mb-2">{trait.title}</h3>
                      <p className="text-muted text-xs leading-tight flex-grow">{trait.desc}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Rangée 2 : A, N */}
                <div className="flex flex-wrap justify-center gap-4">
                  {SITE_CONFIG.ocean.slice(3, 5).map((trait, index) => (
                    <motion.div 
                      key={trait.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      whileHover={{ scale: 1.03, y: -8 }}
                      transition={{ 
                        default: { duration: 0.6, delay: (index + 3) * 0.15, ease: "easeOut" },
                        scale: { type: "spring", stiffness: 300, damping: 20 },
                        y: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                      className="card-glass p-6 group flex flex-col text-left w-full md:w-[calc(33.333%-10.66px)] h-full hover:border-[#5B8C9A]/40 hover:shadow-[0_20px_40px_rgba(91,140,154,0.2)]"
                    >
                      <div className={`${OCEAN_COLORS[index + 3]} font-black tracking-tighter text-5xl xl:text-6xl mb-3 drop-shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 [-webkit-text-stroke:0.5px_currentcolor]`}>{trait.id}</div>
                      <h3 className="title-3 mb-2">{trait.title}</h3>
                      <p className="text-muted text-xs leading-tight flex-grow">{trait.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 3: VISION */}
            <section id="vision" className="min-h-screen flex flex-col justify-center items-center ui-container ui-section">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="ui-kicker-muted mb-8 text-center"
              >
                À suivre : L’incarnation de l’esprit
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="card-glass p-10 md:p-16 w-full md:w-[60%] text-center flex flex-col items-center"
              >
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-title-primary mb-6 [-webkit-text-stroke:0.5px_currentcolor]">
                  L’incarnation de l’esprit.
                </h2>
                <p className="lead max-w-xl mx-auto">
                  Le texte n’est que le début. Notre vision est de donner une forme physique à notre IA. Bientôt, kakkoï-ai animera des présences captivantes, où chaque intonation et chaque expression refléteront fidèlement l’état émotionnel interne.
                </p>
              </motion.div>
            </section>

            {/* SECTION 4: WAITLIST */}
            <section id="waitlist" className="min-h-screen flex flex-col justify-center">
              <WaitlistForm />
            </section>
          </main>

          <footer className="py-12 border-t border-border-subtle">
            <div className="ui-container flex flex-col items-center gap-8">
              <p className="text-muted text-[10px] uppercase tracking-widest italic">
                "Donner une âme à la machine."
              </p>
              
              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-primary tracking-tight">kakkoï-ai</span> © {new Date().getFullYear()}
                </div>
                <div className="flex items-center gap-6">
                  <a href="mailto:contact@kakkoi-ai.com" className="hover:text-accent transition-colors">Contact</a>
                  <a href="#legal" className="hover:text-accent transition-colors">Mentions Légales</a>
                  <a href="#privacy" className="hover:text-accent transition-colors">Confidentialité</a>
                </div>
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
}

export default App;