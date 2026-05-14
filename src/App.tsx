import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { SITE_CONFIG } from './site-config';
import PsyEngineView from './components/PsyEngineView';
import WaitlistForm from './components/WaitlistForm';
import Loader from './components/Loader';
import CharacterScene from './components/CharacterScene';
import LegalModal from './components/LegalModal';

// Palette Lofi Morning
const OCEAN_COLORS = [
  "text-[#4E7D8B]", // O - Muted Cloud Blue
  "text-[#E63946]", // C - Soft Red
  "text-[#83A598]", // E - Muted Teal
  "text-[#E8B878]", // A - Warm Sand
  "text-[#4A6FA5]"  // N - Deep Muted Blue
];

// Animations "JELLY BOUNCE"
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4
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
      stiffness: 250,
      damping: 10,
      mass: 1.2
    }
  }
};

// Animations "MENU MOBILE"
const mobileMenuVariants = {
  hidden: { y: '-100%', opacity: 1 },
  visible: { 
    y: 0, opacity: 1, 
    transition: { type: 'spring', stiffness: 100, damping: 20, staggerChildren: 0.05, delayChildren: 0.1 } 
  }
};

const mobileItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

function App() {
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [heroKey, setHeroKey] = useState(0);
  const [activeModal, setActiveModal] = useState<'legal' | 'privacy' | null>(null);
  const heroControls = useAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    const handleResize = () => { if (window.innerWidth >= 768) setIsMobileMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Déclenche l'animation de la section Hero une fois le chargement terminé
  useEffect(() => {
    if (!loading) {
      heroControls.start("visible");
    }
  }, [loading, heroControls]);

  return (
    <div className="relative min-h-screen bg-[#FAF9F6] z-0 page text-primary selection:bg-accent/30 overflow-x-hidden">
      
      <Loader onFinished={() => setLoading(false)} />

      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          {/* Grain de film analogique (Conservé pour l'aspect papier texturé) */}
          <div 
            className="fixed inset-0 z-2 opacity-[0.035] mix-blend-multiply pointer-events-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
          />

          <header className="fixed top-0 left-0 w-full z-[100] bg-[#F5F0EB]/90 backdrop-blur-md border-b border-[#DED5CC]/20 transition-all duration-500 ease-in-out">
            <div className="w-full px-4 md:px-8 lg:px-12 h-20 flex items-center justify-between">
              
              {/* LOGO GRAPHIQUE CORRIGÉ */}
              <a 
                onClick={(e) => { 
                  e.preventDefault(); 
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  // Force instantanément l'état caché, puis relance l'animation de rebond
                  heroControls.set("hidden");
                  heroControls.start("visible");
                  setHeroKey(prev => prev + 1);
                }}
                className={`relative cursor-pointer hover:scale-105 transition-all duration-300 flex items-center z-[110] ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              >
                <img src="/vertical6.png" alt="kakkoï AI" className="logo-img" />
              </a>
              
              <nav className="hidden md:flex items-center gap-16 lg:gap-24">
                <a href="#technologie" className="ui-link text-lg font-bold tracking-wide">Technologie</a>
                <a href="#vision" className="ui-link text-lg font-bold tracking-wide">Vision</a>
                <a href="#waitlist" className="ui-link text-lg font-bold tracking-wide">Accès</a>
              </nav>

              <motion.div 
                className="hidden md:flex items-center"
              >
                <motion.a 
                  href="#waitlist" 
                  className="ui-btn-primary"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  EN SAVOIR PLUS
                </motion.a>
              </motion.div>

              <button 
                className="md:hidden relative z-[110] p-3 -mr-3 text-primary focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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

            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div 
                  initial="hidden" animate="visible" exit="hidden"
                  variants={mobileMenuVariants}
                  className="fixed top-0 left-0 w-full h-screen z-[100] bg-[#F5F0EB] shadow-2xl border-b border-border-subtle flex flex-col items-center justify-center pt-24 md:hidden"
                >
                  <nav className="flex flex-col items-center gap-10 w-full px-6">
                    <motion.a variants={mobileItemVariants} href="#technologie" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-[600] tracking-[-0.02em] text-primary hover:text-[#4E7D8B] transition-colors [-webkit-text-stroke:0.5px_currentcolor]">Technologie</motion.a>
                    <motion.a variants={mobileItemVariants} href="#vision" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-[600] tracking-[-0.02em] text-primary hover:text-[#E63946] transition-colors [-webkit-text-stroke:0.5px_currentcolor]">Vision</motion.a>
                    <motion.a variants={mobileItemVariants} href="#waitlist" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-[600] tracking-[-0.02em] text-primary hover:text-[#E8B878] transition-colors [-webkit-text-stroke:0.5px_currentcolor]">Accès</motion.a>
                    <motion.div variants={mobileItemVariants} className="mt-8 w-full max-w-xs">
                      <motion.a 
                        href="#waitlist" 
                        onClick={() => setIsMobileMenuOpen(false)} 
                        className="ui-btn-primary w-full py-4 text-xl"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        EN SAVOIR PLUS
                      </motion.a>
                    </motion.div>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </header>

          <main className="relative w-full">
            <motion.section 
              id="hero"
              variants={heroContainerVariants}
              initial="hidden" 
              animate={heroControls}
              className="relative z-[10] bg-transparent min-h-screen flex flex-col justify-center items-center text-center ui-container ui-section pt-[14vh] md:pt-[14vh] pb-16 md:pb-24"
            > 
              <h1 className="text-[3.25rem] md:text-[4.45rem] font-[600] tracking-[-0.02em] leading-[1.05] max-w-[18ch] mx-auto mb-4 [-webkit-text-stroke:0.5px_currentcolor] flex flex-wrap justify-center gap-x-[0.25em] gap-y-2">
                {SITE_CONFIG.hero.title.split(' ').map((word, index) => (
                  <motion.span key={index} variants={jellyVariants} className="inline-block origin-bottom">
                    {word}
                  </motion.span>
                ))}
              </h1>
              {SITE_CONFIG.hero.highlight && (
                <motion.h2 variants={jellyVariants} className="text-2xl md:text-3xl font-[600] tracking-[-0.02em] text-accent mb-8 [-webkit-text-stroke:0.5px_currentcolor]">
                  {SITE_CONFIG.hero.highlight}
                </motion.h2>
              )}
              {SITE_CONFIG.hero.subtitle && (
                <motion.p variants={jellyVariants} className="text-base md:text-lg leading-relaxed text-muted max-w-2xl mx-auto mb-10">
                  {SITE_CONFIG.hero.subtitle}
                </motion.p>
              )}
            </motion.section>

          {/* SCÈNE 3D (Transition Hero -> Technologie sur Mobile, Arrière-plan sur Desktop) */}
          <div className="relative z-[1] pointer-events-none">
            <CharacterScene key={heroKey} isReplay={heroKey > 0} />
          </div>

          <section id="technologie" className="relative z-[10] bg-transparent min-h-screen flex flex-col justify-center items-center scroll-mt-24 pb-[5vh] md:pb-[15vh]">
              <div className="ui-container flex flex-col gap-8">
                <PsyEngineView />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {SITE_CONFIG.ocean.slice(0, 3).map((trait, index) => (
                    <motion.div 
                      key={trait.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      whileHover={{ scale: 1.03, y: -5 }}
                      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="card-glass p-6 group flex flex-col text-left w-full h-full hover:border-[#4E7D8B]/40 hover:shadow-[0_20px_40px_rgba(78,125,139,0.2)]"
                    >
                      <div className={`${OCEAN_COLORS[index]} font-[600] tracking-[-0.02em] text-5xl xl:text-6xl mb-3 drop-shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 [-webkit-text-stroke:0.5px_currentcolor]`}>{trait.id}</div>
                      <h3 className="title-3 mb-2">{trait.title}</h3>
                      <p className="text-muted text-xs leading-tight flex-grow">{trait.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  {SITE_CONFIG.ocean.slice(3, 5).map((trait, index) => (
                    <motion.div 
                      key={trait.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      whileHover={{ scale: 1.03, y: -5 }}
                      transition={{ duration: 0.8, delay: (index + 3) * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="card-glass p-6 group flex flex-col text-left w-full md:w-[calc(33.333%-10.66px)] h-full hover:border-[#4E7D8B]/40 hover:shadow-[0_20px_40px_rgba(78,125,139,0.2)]"
                    >
                      <div className={`${OCEAN_COLORS[index + 3]} font-[600] tracking-[-0.02em] text-5xl xl:text-6xl mb-3 drop-shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 [-webkit-text-stroke:0.5px_currentcolor]`}>{trait.id}</div>
                      <h3 className="title-3 mb-2">{trait.title}</h3>
                      <p className="text-muted text-xs leading-tight flex-grow">{trait.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

          <section id="vision" className="relative z-[10] bg-transparent min-h-screen flex flex-col justify-center items-center ui-container scroll-mt-24 pb-[5vh] md:pb-[15vh]">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="ui-kicker-muted mb-8 text-center"
              >
                L'Âme du Projet
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="card-glass p-10 md:p-16 w-full md:w-[60%] text-center flex flex-col items-center"
              >
                <h2 className="text-3xl md:text-5xl font-[600] tracking-[-0.02em] text-title-primary mb-6 [-webkit-text-stroke:0.5px_currentcolor]">
                  Faire de vos avatars des personnages dotés d’une psychologie évolutive.
                </h2>
              </motion.div>
            </section>

          <section id="waitlist" className="relative z-[10] bg-transparent min-h-screen flex flex-col justify-center items-center ui-container scroll-mt-24 pb-[5vh] md:pb-[15vh]">
              <WaitlistForm />
          </section>
          </main>

        <footer className="py-12 border-t border-border-subtle">
            <div className="ui-container flex flex-col items-center gap-8">
              <p className="text-muted text-[10px] uppercase tracking-widest italic">
                "Donner une personnalité à la machine."
              </p>
              
              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-primary tracking-tight">kakkoï AI</span> © {new Date().getFullYear()}
                </div>
                <div className="flex items-center gap-6">
                <a href="mailto:contact@kakkoi-ai.com" className="text-primary hover:text-accent transition-colors">contact@kakkoi-ai.com</a>
                  <a href="#legal" onClick={(e) => { e.preventDefault(); setActiveModal('legal'); }} className="py-2 md:py-0 hover:text-accent transition-colors cursor-pointer">Mentions Légales</a>
                  <a href="#privacy" onClick={(e) => { e.preventDefault(); setActiveModal('privacy'); }} className="py-2 md:py-0 hover:text-accent transition-colors cursor-pointer">Confidentialité</a>
                </div>
              </div>
            </div>
          </footer>

          <LegalModal isOpen={activeModal !== null} modalType={activeModal || 'legal'} onClose={() => setActiveModal(null)} />
        </motion.div>
      )}
    </div>
  );
}

export default App;