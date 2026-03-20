# 🧠 Design Ledger - Kakkoi-ai (v2.0)

## 🎯 Vision du Projet & Image de Marque

Création d'une landing page pour **kakkoi-ai**, une IA dotée d'une architecture émotionnelle ("une âme").
L'image de marque se détache des clichés habituels de l'IA (néons, dark mode, grilles cybernétiques).
Le parti pris est **minimaliste, organique, texturé et humanisé** (vibe "Warm Paper" / "Lofi Morning"). L'interface doit refléter la capacité de l'IA à ressentir, en offrant une expérience fluide, douce et introspective.

---

## ✍️ Typographie

La typographie joue un rôle majeur dans l'identité visuelle de kakkoi-ai.

- **Police Unique** : `Bolota` (variable font locale `BolotaVF.ttf`)
- **Caractéristiques** : Ultra-massive, effet bulle doux, géométrique mais accessible.
- **Utilisation** : Appliquée globalement à l'ensemble du projet sans exception.
- **Traitement des titres (Hero/Headings)** : Tracking très compact (`tracking-tighter`), poids maximal (`font-black`), contour fin (`-webkit-text-stroke: 0.5px currentcolor`) pour renforcer l'effet de présence tridimensionnelle.

---

## 🎨 Système de Couleurs (Palette "Lofi Morning")

Le thème global est résolument clair, chaleureux et texturé.

### Fonds et Surfaces (Backgrounds)

- **Fond Principal (Page)** : Latte / Warm Paper `rgb(238, 230, 224)` | `#EEE6E0`
- **Fond de Section (Alternatif)** : Légèrement plus clair `rgb(245, 239, 234)` | `#F5EFEA`
- **Surfaces Élevées (Cards, Modals)** : Warm Glass `rgb(250, 246, 242)` | `#FAF6F2`

### Typographie (Encres)

- **Texte Principal (Titres & Corps de texte fort)** : Dark Espresso Brown `rgb(61, 52, 49)` | `#3D3431`
- **Texte Secondaire / Muted** : Taupe `rgb(138, 123, 118)` | `#8A7B76`

### Couleurs d'Accentuation et Modèle O.C.E.A.N.

Les couleurs d'accentuation sont utilisées de manière sémantique pour représenter les différents piliers de la personnalité du moteur Polymood™ (Modèle OCEAN) :

- 🔵 **O (Ouverture)** & Accent Principal : Lofi Blue / Teal `rgb(91, 140, 154)` | `#5B8C9A`
- 🔴 **C (Conscience)** & Break/Alert : Soft Red `rgb(230, 57, 70)` | `#E63946`
- 🟢 **E (Extraversion)** : Muted Teal `rgb(131, 165, 152)` | `#83A598`
- 🟡 **A (Agréabilité)** : Warm Sand `rgb(232, 184, 120)` | `#E8B878`
- 🫐 **N (Névrosisme)** : Deep Muted Blue `rgb(74, 111, 165)` | `#4A6FA5`

---

## ✨ Effets Visuels & Animations

- **Card-Glass** : Les cartes et interfaces superposées utilisent un effet de verre dépoli clair. Background translucide (`rgba(245, 239, 234, 0.45)`), fort flou d'arrière-plan (`backdrop-filter: blur(20px)`), bordure blanche subtile et légère ombre colorée.
- **Custom Cursor** : Curseur natif masqué sur desktop. Remplacé par un point central hyper réactif qui inverse subtilement les couleurs (`mix-blend-difference`). Désactivé intelligemment sur les appareils tactiles (`pointer: coarse`).
- **Background Glows** : Halos de lumière colorés flottant lentement en arrière-plan, utilisant les couleurs d'accentuation Lofi Blue et Soft Red pour donner une impression de "respiration" organique au site.
- **Animations d'Interface** : Effet "Jelly bounce" sur les titres via Framer Motion (élasticité fluide, `type: "spring"`).
- **Preloader** : Écran d'initialisation de "l'âme" avec dessin vectoriel du trait du logo en introduction.

---

## 🛠 Stack Technique (Local-First)

- **Framework** : React 18 + Vite
- **Langage** : TypeScript (Strict)
- **Styling** : Tailwind CSS + Variables CSS natives
- **Animations** : Framer Motion
- **Icônes** : Lucide-React
- **Architecture** : Modulaire (Composants atomiques, variables CSS sémantiques isolées)

---

## ⚡ Performances & Accessibilité (A11y)

- **Accélération Matérielle (GPU)** : Utilisation stricte de `willChange: "transform"` sur les halos floutés (`blur`) et animations infinies pour décharger le processeur et garantir un défilement 60 FPS constant, même sur mobile.
- **Accessibilité Inclusive** : Interface conforme aux standards avec balises ARIA complètes (`aria-live="polite"` pour les annonces du formulaire, `aria-hidden="true"` pour cacher les éléments purement décoratifs aux lecteurs d'écran, et `aria-expanded` pour le menu mobile).
- **Optimisation Mobile** : Viewport stabilisé avec `min-height: 100svh` pour éviter les sauts de navigation, et blocage natif du scroll lors de l'ouverture du menu mobile.

---

## 🚫 Contraintes de Sécurité & Contenu

- **INTERNET** : Le projet doit tourner sans dépendances externes (pas d'appels CDN au runtime, polices chargées en local).
- **CONTENU** : Le discours se concentre sur l'intelligence émotionnelle, le texte et le comportement. Aucune mention d'Unreal Engine, d'Unity, ou de moteurs 3D à ce stade.
