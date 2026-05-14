import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

// Structure de données pour nos personnages animés
interface CharacterData {
  group: THREE.Group;
  headGroup: THREE.Group;
  eyeLeft: THREE.Mesh;
  eyeRight: THREE.Mesh;
  blink: {
    timer: number;
    interval: number;
    isBlinking: boolean;
    duration: number;
  };
  emotion: {
    type: string;
    timer: number;
    interval: number;
    active: boolean;
  };
}

interface CharacterSceneProps {
  isReplay?: boolean;
}

const CharacterScene: React.FC<CharacterSceneProps> = ({ isReplay = false }) => {
  // On cible notre balise canvas existante dans le JSX
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // =======================
    // SCÈNE
    // =======================
    const scene = new THREE.Scene();
    // Pas de background pour garder la transparence sur le fond "Latte" du site
    // scene.background = new THREE.Color(0xFFFFFF); 

    const getWidth = () => window.innerWidth;
    const getHeight = () => window.innerWidth < 768 ? 400 : window.innerHeight;

    // =======================
    // CAMÉRA
    // =======================
    const camera = new THREE.PerspectiveCamera(
      40,
      getWidth() / getHeight(),
      0.1,
      1000
    );

    // =======================
    // RENDERER
    // =======================
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true, // Transparent
      antialias: true
    });
    // UX Mobile : On bride la résolution sur mobile pour soulager le GPU et économiser la batterie
    renderer.setPixelRatio(window.innerWidth < 768 ? Math.min(window.devicePixelRatio, 1.5) : Math.min(window.devicePixelRatio, 2));
    renderer.setSize(getWidth(), getHeight());
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // =======================
    // LUMIÈRES
    // =======================
    scene.add(new THREE.AmbientLight(0xffffff, 1.78));

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.19);
    keyLight.position.set(5.8, 6.8, 5.3);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 1.25);
    fillLight.position.set(-3.5, 2, -2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xff8647, 3.09);
    rimLight.position.set(10, -1.3, 6.1);
    scene.add(rimLight);

    // =======================
    // SOL (Transparent mais reçoit les ombres)
    // =======================
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 100),
      new THREE.ShadowMaterial({ opacity: 0.08 }) // Laisse voir le site à travers
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1;
    floor.receiveShadow = true;
    scene.add(floor);

    // =======================
    // FUNCTION PERSONNAGE
    // =======================
    function createCharacter(color: number): CharacterData {
      const group = new THREE.Group();
      const material = new THREE.MeshStandardMaterial({ color });

      // --- CORPS DU FANTÔME ---
      const ghostBody = new THREE.Group();

      // Le haut du fantôme (demi-sphère parfaite)
      const dome = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2),
        material
      );
      dome.position.y = 0.6; // Se pose au sommet du cylindre
      dome.castShadow = true;

      // Le bas du fantôme (cylindre avec base plate)
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 1.2, 32), material);
      base.position.y = 0;
      base.castShadow = true;

      ghostBody.add(dome, base);
      ghostBody.position.y = -0.3; // Ajustement pour que les yeux soient bien placés
      group.add(ghostBody);

      // --- TÊTE ET YEUX ---
      const headGroup = new THREE.Group();
      headGroup.position.y = 0.25;
      headGroup.scale.set(0.5, 0.5, 0.5);
      group.add(headGroup);

      const head = new THREE.Mesh(
        new THREE.SphereGeometry(1, 32, 32),
        new THREE.MeshStandardMaterial({ transparent: true, opacity: 0 })
      );

      const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });

      const eyeLeft = new THREE.Mesh(
        new RoundedBoxGeometry(0.38, 0.38, 0.38, 4, 0.12),
        eyeMaterial
      );
      const eyeRight = eyeLeft.clone();

      eyeLeft.position.set(-0.22, 0, 0.88);
      eyeRight.position.set(0.22, 0, 0.88);

      eyeLeft.rotation.y = -0.25;
      eyeRight.rotation.y = 0.25;

      // Cible d'échelle pour l'interpolation React/Three
      eyeLeft.userData.targetScale = 1;
      eyeRight.userData.targetScale = 1;

      headGroup.add(head, eyeLeft, eyeRight);

      const blink = { timer: 0, interval: 2 + Math.random() * 3, isBlinking: false, duration: 0.08 };
      const emotion = { type: "normal", timer: 0, interval: 4 + Math.random() * 4, active: false };

      return { group, headGroup, eyeLeft, eyeRight, blink, emotion };
    }

    // =======================
    // CREATE CHARACTERS
    // =======================
    const redChar = createCharacter(0xff0000);
    const purpleChar = createCharacter(0x8e44ad);
    const greenChar = createCharacter(0x2ecc71);

    scene.add(redChar.group, purpleChar.group, greenChar.group);

    const baseDelay = isReplay ? 0 : 0.4; // Synchronisé avec l'apparition du texte Hero (0.4s)

    // Positions : On les place initialement très bas (-8) pour l'animation d'entrée au chargement, puis ils remontent
    redChar.group.position.set(2.0, -8, 1.4);
    redChar.group.userData.baseY = -8;
    redChar.group.userData.targetBaseY = -0.4; // Remonté pour ne pas être coupé en bas
    redChar.group.userData.delay = baseDelay; // Démarre l'animation en même temps que le texte
    purpleChar.group.position.set(-1.8, -8, 1.7);
    purpleChar.group.userData.baseY = -8;
    purpleChar.group.userData.targetBaseY = -0.6; // Remonté
    purpleChar.group.userData.delay = baseDelay + 0.2;
    greenChar.group.position.set(-2.5, -8, 1.3);
    greenChar.group.userData.baseY = -8;
    greenChar.group.userData.targetBaseY = 0.2; // Remonté
    greenChar.group.userData.delay = baseDelay + 0.4;

    // Scale
    redChar.group.scale.set(0.5, 0.5, 0.5);
    purpleChar.group.scale.set(0.4, 0.4, 0.4);
    greenChar.group.scale.set(0.5, 0.5, 0.5);

    // =======================
    // MOUSE TRACKING
    // =======================
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // =======================
    // LOGIQUE RESPONSIVE
    // =======================
    const updateLayout = () => {
      const isMobile = window.innerWidth < 768;

      const w = getWidth();
      const h = getHeight();
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);

      // Sur mobile, on recule la caméra et on resserre les personnages
      // pour qu'ils rentrent dans le cadre vertical.
      camera.position.z = isMobile ? 8.5 : 6;
      
      // Rapprochement des personnages sur l'axe X
      redChar.group.position.x = isMobile ? 1.3 : 2.0;
      purpleChar.group.position.x = isMobile ? -0.5 : -1.8;
      greenChar.group.position.x = isMobile ? -1.6 : -2.5;

      // Ajustement de l'échelle globale sur mobile pour un meilleur cadrage
      const globalScale = isMobile ? 0.85 : 1;
      redChar.group.scale.set(0.5 * globalScale, 0.5 * globalScale, 0.5 * globalScale);
      purpleChar.group.scale.set(0.4 * globalScale, 0.4 * globalScale, 0.4 * globalScale);
      greenChar.group.scale.set(0.5 * globalScale, 0.5 * globalScale, 0.5 * globalScale);
    };

    updateLayout(); // Appel initial
    // =======================
    // LOGIQUE ANIMATION
    // =======================
    function updateEmotion(char: CharacterData, delta: number) {
      const e = char.emotion;
      e.timer += delta;

      if (!e.active && e.timer > e.interval) {
        e.timer = 0;
        e.active = true;
        const emotions = ["suspicious", "happy"];
        e.type = emotions[Math.floor(Math.random() * emotions.length)];
      }

      if (e.active && e.timer > 2) {
        e.active = false;
        e.timer = 0;
        e.interval = 4 + Math.random() * 5;
        e.type = "normal";
      }

      let leftTarget = 1;
      let rightTarget = 1;

      if (e.active) {
        if (e.type === "suspicious") {
          leftTarget = 0.3;
        }
        if (e.type === "happy") {
          leftTarget = 0.2;
          rightTarget = 0.2;
        }
      }

      char.eyeLeft.userData.targetScale = leftTarget;
      char.eyeRight.userData.targetScale = rightTarget;
    }

    function updateBlink(char: CharacterData, delta: number) {
      const b = char.blink;
      b.timer += delta;

      if (!b.isBlinking && b.timer > b.interval) {
        b.isBlinking = true;
        b.timer = 0;
      }

      if (!b.isBlinking) return;

      const t = b.timer / b.duration;
      const scale = 1 - Math.sin(Math.min(t, 1) * Math.PI);

      char.eyeLeft.scale.y = char.eyeLeft.userData.targetScale * scale;
      char.eyeRight.scale.y = char.eyeRight.userData.targetScale * scale;

      if (t >= 1) {
        b.isBlinking = false;
        b.interval = 2 + Math.random() * 4;
      }
    }

    const screenPosition = new THREE.Vector3();
    function updateLook(char: CharacterData) {
      char.group.getWorldPosition(screenPosition);
      screenPosition.project(camera);

      const offsetX = mouse.x - screenPosition.x;
      const offsetY = mouse.y - screenPosition.y;

      const targetY = offsetX * 0.5;
      const targetX = -offsetY * 0.5;

      char.headGroup.rotation.y += (targetY - char.headGroup.rotation.y) * 0.1;
      char.headGroup.rotation.x += (targetX - char.headGroup.rotation.x) * 0.1;
    }

    // =======================
    // ANIMATION LOOP
    // =======================
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Le scroll fait descendre la caméra (donc monter les personnages) sur Desktop.
      // Sur Mobile, le canvas est un bloc relatif, on fige donc la caméra en Y.
      const isMobile = window.innerWidth < 768;
      camera.position.y = isMobile ? 0 : -(window.scrollY / window.innerHeight) * 5.5;

      [redChar, purpleChar, greenChar].forEach((char, index) => {
        updateLook(char);
        updateEmotion(char, delta);

        // Interpolation douce
        char.eyeLeft.scale.y += (char.eyeLeft.userData.targetScale - char.eyeLeft.scale.y) * 0.15;
        char.eyeRight.scale.y += (char.eyeRight.userData.targetScale - char.eyeRight.scale.y) * 0.15;

        // Effet fantôme : flottaison légère et organique (différente pour chaque personnage via l'index)
        // Fly-in : Animation d'entrée (synchronisée avec le temps écoulé depuis le chargement)
        if (time > char.group.userData.delay) {
          // Remonte progressivement vers sa position cible avec un effet "ease-out" amorti
          char.group.userData.baseY += (char.group.userData.targetBaseY - char.group.userData.baseY) * (delta * 3.5);
        }

        // Position fixe (sans flottaison)
        char.group.position.y = char.group.userData.baseY;

        updateBlink(char, delta);
      });

      renderer.render(scene, camera);
    };

    animate();

    // =======================
    // RESPONSIVE
    // =======================
    const onResize = () => {
      updateLayout(); // On ré-applique le layout responsive au redimensionnement
    };
    window.addEventListener('resize', onResize);

    // =======================
    // CLEANUP REACT (On Unmount)
    // =======================
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);

      // Vidage de la mémoire WebGL
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <canvas className="webgl outline-none pointer-events-none relative w-full h-[400px] -mt-64 mb-12 z-0 md:fixed md:top-0 md:left-0 md:w-full md:h-full md:-z-10 md:mt-0 md:mb-0" style={{ background: 'transparent' }} ref={canvasRef} />
  );
};

export default CharacterScene;