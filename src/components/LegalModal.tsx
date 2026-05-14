import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  modalType: 'legal' | 'privacy';
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, modalType, onClose }) => {
  // Bloquer le scroll de l'arrière-plan quand la modale est ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#2D2D2D]/20 backdrop-blur-sm p-4 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#F5F0EB] rounded-2xl shadow-[0_20px_40px_rgba(45,45,45,0.15)] p-8 md:p-12 text-[#2D2D2D] scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full hover:bg-[#2D2D2D]/10 transition-colors focus:outline-none"
              aria-label="Fermer les mentions légales"
            >
              <X size={28} strokeWidth={2} />
            </button>

            <h2 className="text-3xl md:text-4xl font-[600] tracking-[-0.02em] mb-8 [-webkit-text-stroke:0.5px_currentcolor]">
              {modalType === 'legal' ? 'Mentions Légales' : 'Politique de Confidentialité'}
            </h2>

            <div className="space-y-8 text-sm md:text-base leading-relaxed">
              {modalType === 'legal' && (
                <>
                  <section>
                    <h3 className="text-xl font-[600] tracking-[-0.02em] mb-2 [-webkit-text-stroke:0.5px_currentcolor]">Éditeur</h3>
                    <p>Le site est édité par deux particuliers, Emmanuel Reau et Maurice Pang. Pour toute demande, contactez : <a href="mailto:contact@kakkoi-ai.com" className="text-accent hover:underline font-semibold whitespace-nowrap">contact@kakkoi-ai.com</a>.</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-[600] tracking-[-0.02em] mb-2 [-webkit-text-stroke:0.5px_currentcolor]">Hébergement</h3>
                    <p>
                      Le site est hébergé par la société OVH SAS.<br />
                      SIREN : 424 761 419.<br />
                      Siège social : 2 rue Kellermann - 59100 Roubaix - France.<br />
                      Site web : <a href="https://www.ovhcloud.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">www.ovhcloud.com</a>.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-[600] tracking-[-0.02em] mb-2 [-webkit-text-stroke:0.5px_currentcolor]">Propriété Intellectuelle</h3>
                    <p>Tous les éléments présents sur ce site (logo, textes, personnages 3D, animations, code source) sont la propriété exclusive de leurs auteurs et sont protégés par les lois françaises et internationales sur la propriété intellectuelle. Toute reproduction, représentation, modification ou adaptation de tout ou partie des éléments du site est strictement interdite sans l'accord écrit préalable des éditeurs.</p>
                  </section>

                  <section className="bg-[#2D2D2D]/5 p-5 md:p-6 rounded-xl border border-[#2D2D2D]/10">
                    <h3 className="text-xl md:text-2xl font-[600] tracking-[-0.02em] mb-4 [-webkit-text-stroke:0.5px_currentcolor]">
                      Clause relative à l'Intelligence Artificielle
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-base font-[600] tracking-[-0.02em] mb-1 [-webkit-text-stroke:0.5px_currentcolor]">Nature des contenus</h4>
                        <p>L'utilisateur est informé que les interactions, les réponses et les comportements des avatars sur kakkoï AI sont générés par des systèmes d'Intelligence Artificielle basés sur des modèles de langage et de personnalité (OCEAN).</p>
                      </div>
                      <div>
                        <h4 className="text-base font-[600] tracking-[-0.02em] mb-1 [-webkit-text-stroke:0.5px_currentcolor]">Responsabilité</h4>
                        <p>Bien que nous travaillions à rendre ces avatars "empathiques" et cohérents, les contenus générés ne reflètent pas nécessairement l'opinion des éditeurs. L'IA peut parfois produire des réponses imprévisibles ou inexactes.</p>
                      </div>
                      <div>
                        <h4 className="text-base font-[600] tracking-[-0.02em] mb-1 [-webkit-text-stroke:0.5px_currentcolor]">Usage Éthique</h4>
                        <p>L'utilisateur s'engage à ne pas détourner les avatars pour générer des contenus haineux, illégaux ou diffamatoires.</p>
                      </div>
                    </div>
                  </section>
                </>
              )}

              {modalType === 'privacy' && (
                <>
                  <section>
                    <h3 className="text-xl font-[600] tracking-[-0.02em] mb-2 [-webkit-text-stroke:0.5px_currentcolor]">Collecte</h3>
                    <p>Nous collectons votre adresse e-mail uniquement pour vous informer du lancement de kakkoï AI.</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-[600] tracking-[-0.02em] mb-2 [-webkit-text-stroke:0.5px_currentcolor]">Engagement</h3>
                    <p>Pas de revente de données, pas de cookies publicitaires.</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-[600] tracking-[-0.02em] mb-2 [-webkit-text-stroke:0.5px_currentcolor]">Vos droits</h3>
                    <p>Droit de suppression et d'accès sur simple demande à <a href="mailto:contact@kakkoi-ai.com" className="text-accent hover:underline font-semibold whitespace-nowrap">contact@kakkoi-ai.com</a>.</p>
                  </section>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default LegalModal;