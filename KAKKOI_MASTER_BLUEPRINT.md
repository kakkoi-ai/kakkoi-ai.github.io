# 🧬 KAKKOI_MASTER_BLUEPRINT

> **Version** : 2.1 (Lofi Morning)
> **Role** : Document de référence absolu pour l'architecture de contenu, l'UX et l'UI.

---

## 1. Identité de Marque & Vision

- **Nom Officiel** : `kakkoï AI` (Typographie bas de casse privilégiée, tréma sur le "i", AI en majuscules).
- **Promesse Principale** : Les avatars qui ressent et raconte.
- **Philosophie du Design** :
  - **Minimaliste** : Interface épurée, absence de bruit visuel inutile. L'espace vide est traité comme un élément de design.
  - **Organique** : Rejet des clichés habituels de l'IA (néons, grilles cybernétiques, dark mode). Utilisation de courbes, d'élasticité et de mouvements lents (respiration).
  - **Humanisé (Blanc Cassé / Warm Paper)** : Une atmosphère texturée, chaleureuse et introspective ancrée sur un fond unifié, suggérant que l'IA est capable de ressentir des émotions.

---

## 2. Inventaire Textuel (Copywriting Log)

Voici l'exhaustivité du texte injecté dans les composants actuels, classé par zone d'apparition pour garantir la cohérence sémantique.

### 🎬 Loader (Preloader)

- **Logo** : "kakkoï AI"
- **Statut** : "Initialisation de l'avatar..."

### 🧭 Header & Navigation

- **Logo** : "kakkoï AI"
- **Liens de navigation** : "Technologie", "Vision", "Accés"
- **Call To Action (CTA)** : "EN SAVOIR PLUS"

### 🦸‍♂️ Hero Section

- **Badge / Kicker** : ""
- **Titre H1** : "Les avatars qui ressentent et racontent."
- **Titre H2 (Highlight)** : "Pour donner vie à vos personnages."
- **Sous-titre (Lead)** : "Personnages de bandes dessinées, de dessins animés, de jeux vidéo, logos de marques, kakkoï AI permet à chaque utilisateur une expérience singulière avec vos avatars."

### ⚙️ Section Technologie (PsyEngine & Polymood)

- **Titre Principal** : "Polymood"
- **Description** : "Au cœur de Kakkoï AI, notre algorithme ne se contente pas de répondre. Il
  simule la psychologie et les émotions de vos avatars."
- **Bloc 1 (Input)** :
  - Titre : "Entrée verbale"
  - Description : "Analyse sémantique des questions."
- **Bloc 3 (Output)** :
  - Titre : "Réponse en sortie"
  - Description : "Génération d'une réponse imprégnée de l'état émotionnel actuel de l'avatar."

### 🌊 Section Technologie (Modèle O.C.E.A.N.)

- **O (Ouverture)** : "Capacité de l'avatar à apprécier l'art, l'émotion, l'aventure et les idées non conventionnelles."
- **C (Conscience)** : "Autodiscipline et orientation vers un but. Kakkoï agit avec intention, pas seulement par réaction."
- **E (Extraversion)** : "Énergie, émotions positives et tendance à rechercher la stimulation dans la compagnie des autres."
- **A (Agréabilité)** : "Empathie et coopération. L'avatar comprend vos sentiments et s'y adapte avec une véritable compassion."
- **N (Nervosité)** : "Vulnérabilité émotionnelle mesurée. Un avatar capable d'hésiter et de ressentir la complexité du monde."

### 👁️ Section Vision

- **Kicker** : "L'Âme du Projet"
- **Titre** : " Faire de vos avatars des personnages dotés d’une psychologie évolutive."
- **Description** : "Le Moteur Polymood™ ne se contente pas de générer du texte : il module les expressions faciales, la présence organique et les émotions en temps réel."

### ⏳ Section Waitlist

- **Titre par défaut** : "Rejoignez l'évolution."
- **Placeholder Formulaire** : "votre@email.com"
- **Bouton Idle** : "S'inscrire"
- **Bouton Submitting** : "Envoi..."
- **État de Succès** : "Bienvenue." / "Vous êtes sur la liste d'attente."

### 🦶 Footer

- **Citation Kicker** : "Donner une personnalité à la machine."
- **Copyright** : "kakkoï AI © [ANNÉE]"
- **Liens Légaux** : "Contact", "Mentions Légales", "Confidentialité"

### ⚖️ Modales Légales (LegalModal)

- **Mentions Légales** : "Éditeur", "Hébergement" (OVH), "Propriété Intellectuelle", "Clause relative à l'Intelligence Artificielle" (précise la nature générative des IA et l'engagement d'usage éthique).
- **Politique de Confidentialité** : "Collecte", "Engagement" (aucune revente, pas de cookies), "Vos droits".

---

## 3. Architecture Visuelle (UX Structure)

### Ordre de lecture (User Flow)

1. **Amorce Immersive** : Un _Preloader_ isole l'utilisateur pendant 2.5 secondes. Affichage de la marque avec un tracé vectoriel animé et un texte d'amorce ("Initialisation de l'avatar...").
2. **Impact (Hero)** : Un énorme titre découpé mot par mot, atterrissant avec une physique élastique (Jelly Bounce), synchronisé avec l'apparition en fondu des 3 avatars organiques. Introduction directe du _Moteur Polymood_.
3. **Explication Technologique** :
   - D'abord la dynamique (PsyEngineView) : Un schéma en trois étapes (Input cognitif > Cœur PSY rotatif > Réponse organique).
   - Ensuite la fondation théorique (OCEAN Grid) : Grille visuelle avec de gigantesques lettres typographiques reprenant les couleurs des 5 piliers de la personnalité.
4. **Projection (Vision)** : Un bloc focus unique, massif, pour vendre la suite logique du projet (l'incarnation physique).
5. **Écosystème Étendu (Vues Internes)** : Base de design préparée pour d'autres pages (`/community`, `/who`, `/news`, `Missions`, `Partners`), incluant des composants uniques (carrousels infinis, patches de grilles animées).
6. **Conversion (Waitlist)** : Formulaire épuré, centré dans une carte texturée en verre dépoli. Validation in-place animée.
7. **Conclusion (Footer)** : Dépouillé, mettant en avant le mantra final de la marque.

### Hiérarchie Visuelle Typique

- **Macrotitres (Hero/Headings)** : Titres massifs (allant de text-5xl à text-7xl), toujours accompagnés d'un contour fin et d'un ombrage coloré diffus pour l'effet bulle 3D.
- **Sous-titres & Accents** : Colorés, gras, utilisés pour capter le regard juste en dessous des gros titres.
- **Descriptions (Lead/Body)** : Textes dans une teinte adoucie (Muted Taupe), taille standard à large (text-base à text-lg), avec un espacement de ligne relaxé (`leading-relaxed`) pour la lisibilité.
- **Kickers** : Petits textes majuscules avec un tracking très large (`tracking-widest` ou `[0.15em]`), souvent couplés avec une icône (Lucide) pour taguer une section.

---

## 4. Design Tokens (Style DNA)

### 🎨 Palette de Couleurs "Lofi Morning"

Le thème est un mode clair "Premium", rejetant le blanc pur au profit de teintes "papier".

**Fonds & Surfaces :**

- `bg-page` (Blanc Cassé) : `#FAF9F6` | `rgb(250, 249, 246)`
- `header-modal` (Latte Clair) : `#F5F0EB` | `rgb(245, 240, 235)`
- `surface-1` (Warm Glass) : `#FAF6F2` | `rgb(250, 246, 242)`

**Encres (Typographie) :**

- `text-primary` (Dark Espresso Brown) : `#3D3431` | `rgb(61, 52, 49)`
- `text-muted` (Taupe) : `#8A7B76` | `rgb(138, 123, 118)`

**Accents (Modèle Polymood™ / O.C.E.A.N) :**

- O (Muted Cloud Blue) & Accent Global : `#4E7D8B` | `rgb(78, 125, 139)`
- C (Soft Red) : `#E63946` | `rgb(230, 57, 70)`
- E (Muted Teal) : `#83A598` | `rgb(131, 165, 152)`
- A (Warm Sand) : `#E8B878` | `rgb(232, 184, 120)`
- N (Nervosité) : `#4A6FA5` | `rgb(74, 111, 165)`

### ✍️ Typographie

- **Police unique** : `Bolota` (chargée localement via `BolotaVF.ttf`).
- **Poids** : Toujours exploitée en `font-black` (900) pour les titres.
- **Tracking** : Extrêmement resserré (`tracking-tighter` / `tracking-tight`).
- **Effet Bulle / Outline** : Application stricte de `-webkit-text-stroke: 0.5px currentcolor` sur tous les titres majeurs (h1, h2) pour sculpter les mots.

### ✨ Effets Visuels (Signature UX)

- **Card-Glass** :
  - Background: `rgba(245, 239, 234, 0.45)`
  - Filtre: `backdrop-filter: blur(20px)`
  - Bordure blanche subtile (`border: 1px solid rgba(255, 255, 255, 0.5)`)
  - Ombre colorée (ex: `box-shadow: 0 12px 40px rgba(78, 125, 139, 0.08)`)
- **Structure Unifiée (Minimalisme)** : Les sections adoptent un `bg-transparent` pour laisser filer le "Blanc Cassé" global, créant l'illusion d'une page continue sans rupture.
- **Grain Analogique (Noise)** : Couche SVG `fractalNoise` superposée sur toute la page avec `mix-blend-multiply` et une opacité de `0.035` pour créer la texture "Lofi".
- **Custom Cursor** : Curseur par défaut masqué sur desktop (`cursor: none`), remplacé par un petit point doté de `mix-blend-difference` qui inverse les couleurs en temps réel, devenant plus petit (`scale: 0.5`) au survol d'éléments interactifs.
- **Gradients & Décors Avancés** : Ajout de fonds dynamiques comme `subtle-gradient-bg` (gradients elliptiques lents) et `animated-grid-patches` (patches de grilles avec marqueurs de données) pour enrichir les nouvelles vues.
- **Jelly Bounce** : Tous les éléments entrants (Hero text, cartes OCEAN) utilisent un ressort de Framer Motion : `type: "spring", stiffness: 250, damping: 10, mass: 1.2`.
- **Scène 3D Interactive** : Canvas WebGL (Three.js) rendu en arrière-plan transparent avec 3 avatars "fantômes" (Rouge, Violet, Vert). Ils suivent le curseur, respirent avec une interpolation Y, et intègrent un moteur émotionnel (`suspicious`, `happy`) générant des variations fluides sur les yeux.
- **Cœur PSY (Sphère rotative)** : Composition de cercles en tiretés tournant à l'infini avec un noyau vibrant doté d'une aura rouge (`animate-pulse` + ombre forte).
- **Draw Animation (SVG)** : Ligne de soulignement sous le logo qui se dessine toute seule au démarrage (via `stroke-dashoffset` / `stroke-dasharray`).

---

## 5. Logique Technique

### Stack & Architecture

- **React 18 + Vite** : Framework principal.
- **TypeScript (Strict)** : Tout est rigoureusement typé pour prévenir les erreurs.
- **Tailwind CSS** : Stylisation utility-first augmentée par une configuration sémantique dans `index.css` via variables CSS.
- **Three.js** : Moteur de rendu WebGL pour la scène 3D des avatars interactifs (`CharacterScene.tsx`).
- **Framer Motion** : Gestion intégrale des animations DOM (scroll parallax, jelly bounce, modales, loader, exit animations avec `AnimatePresence`).
- **Lucide-React** : Iconographie.

### Choix de Navigation & Comportements

- **Architecture Évolutive** : Initialement SPA via ancres hash (`#technologie`), le CSS et la structure gèrent à présent un écosystème de multiples pages (News, Community, Who...).
- **Responsive Header Dynamique** : Le header s'appuie sur les Container Queries (`container-type: inline-size`) et des unités `cqw` pour un redimensionnement fluide et ultra-précis des menus typographiques sans sauts abrupts.
- **Reset Logo** : Un clic sur le logo central réinitialise le composant et remonte en haut de la page (`window.location.href = '/'` et `window.scrollTo(0,0)`).
- **Mobile Menu Focus** :
  - Déclencheur hamburger fluide se transformant en icône de fermeture (X) via `AnimatePresence`.
  - Blocage natif du scroll (reflow évité via `100svh`) avec `document.body.style.overflow = 'hidden'` pendant l'ouverture de l'overlay mobile.
- **Modales Légales (`LegalModal`)** : L'affichage des pages légales et de confidentialité s'opère par une modale superposée (overlay `backdrop-blur-sm`), bloquant le scroll global pour forcer le focus utilisateur de manière élégante.
- **Hardware Acceleration (GPU)** : Obligation de lier `willChange: "transform"` (ou opacity) sur les éléments continuellement animés (Background Glows, Custom Cursor, Sphère rotative) pour empêcher la surcharge CPU.
