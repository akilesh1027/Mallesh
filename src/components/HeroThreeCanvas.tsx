import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

interface HeroThreeCanvasProps {
  className?: string;
}

export const HeroThreeCanvas: React.FC<HeroThreeCanvasProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasWebGlError, setHasWebGlError] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL
    const isSoftwareGl = (() => {
      try {
        const testCanvas = document.createElement('canvas');
        const gl = testCanvas.getContext('webgl2') || testCanvas.getContext('webgl');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return true;
      }
    })();

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isSoftwareGl,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setHasWebGlError(true);
      return;
    }

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x090a0c, 0.12);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 4.2);

    // Studio Reflection Environment
    try {
      const pmremGenerator = new THREE.PMREMGenerator(renderer);
      const roomEnv = new RoomEnvironment();
      scene.environment = pmremGenerator.fromScene(roomEnv, 0.04).texture;
      pmremGenerator.dispose();
    } catch {
      // Fallback if PMREM is not supported
    }

    // Studio 3-point Lighting
    const keyLight = new THREE.DirectionalLight(0xfff8ee, 2.6);
    keyLight.position.set(4, 5, 4);
    keyLight.castShadow = !isSoftwareGl;
    if (keyLight.castShadow) {
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.bias = -0.0005;
      keyLight.shadow.normalBias = 0.02;
    }
    scene.add(keyLight);

    const fillLight = new THREE.HemisphereLight(0x7687a0, 0x111317, 1.2);
    scene.add(fillLight);

    // Subtle artist signature accent rim light (electric lime #C8FF55)
    const accentRimLight = new THREE.DirectionalLight(0xc8ff55, 1.8);
    accentRimLight.position.set(-4, -1, -3);
    scene.add(accentRimLight);

    // Composite 3D Sculpture Group (Multi-part procedural model)
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // Materials
    const titaniumMaterial = new THREE.MeshStandardMaterial({
      color: 0x828892,
      metalness: 0.95,
      roughness: 0.22,
    });

    const polishedGoldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd9c59a,
      metalness: 0.96,
      roughness: 0.12,
    });

    const darkAlloyMaterial = new THREE.MeshStandardMaterial({
      color: 0x22262d,
      metalness: 0.9,
      roughness: 0.35,
    });

    const accentLimeWireMaterial = new THREE.MeshStandardMaterial({
      color: 0xc8ff55,
      metalness: 0.8,
      roughness: 0.2,
      wireframe: true,
    });

    // 1. Primary Feature: Torus Knot Sculpture Core
    const torusKnotGeo = new THREE.TorusKnotGeometry(0.85, 0.24, 140, 28, 2, 3);
    const mainSculpture = new THREE.Mesh(torusKnotGeo, titaniumMaterial);
    mainSculpture.castShadow = !isSoftwareGl;
    mainSculpture.receiveShadow = !isSoftwareGl;
    sculptureGroup.add(mainSculpture);

    // 2. Secondary Feature: Outer Precision Gyroscopic Ring
    const outerRingGeo = new THREE.TorusGeometry(1.48, 0.035, 24, 100);
    const outerRing = new THREE.Mesh(outerRingGeo, polishedGoldMaterial);
    sculptureGroup.add(outerRing);

    // 3. Middle Precision Inclined Gimbal Ring
    const midRingGeo = new THREE.TorusGeometry(1.25, 0.025, 20, 80);
    const midRing = new THREE.Mesh(midRingGeo, darkAlloyMaterial);
    midRing.rotation.x = Math.PI / 3;
    sculptureGroup.add(midRing);

    // 4. Accent Detail: Central Faceted Geodesic Gem
    const coreIcosaGeo = new THREE.IcosahedronGeometry(0.38, 1);
    const coreMesh = new THREE.Mesh(coreIcosaGeo, accentLimeWireMaterial);
    sculptureGroup.add(coreMesh);

    // 5. Orbiting Precision Satellite Nodes
    const satelliteGroup = new THREE.Group();
    sculptureGroup.add(satelliteGroup);
    const satCount = 3;
    const satNodes: THREE.Mesh[] = [];
    for (let i = 0; i < satCount; i++) {
      const satGeo = new THREE.OctahedronGeometry(0.08, 0);
      const sat = new THREE.Mesh(satGeo, polishedGoldMaterial);
      const angle = (i / satCount) * Math.PI * 2;
      sat.position.set(Math.cos(angle) * 1.5, Math.sin(angle * 2) * 0.3, Math.sin(angle) * 1.5);
      satelliteGroup.add(sat);
      satNodes.push(sat);
    }

    // 6. Ground Contact Shadow Disc
    const groundShadowGeo = new THREE.PlaneGeometry(3.6, 3.6);
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(128, 128, 10, 128, 128, 120);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.7)');
      gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 256, 256);
    }
    const groundShadowTexture = new THREE.CanvasTexture(canvas);
    groundShadowTexture.colorSpace = THREE.SRGBColorSpace;
    const groundShadowMat = new THREE.MeshBasicMaterial({
      map: groundShadowTexture,
      transparent: true,
      depthWrite: false,
    });
    const groundShadow = new THREE.Mesh(groundShadowGeo, groundShadowMat);
    groundShadow.rotation.x = -Math.PI / 2;
    groundShadow.position.y = -1.45;
    scene.add(groundShadow);

    setIsLoaded(true);

    // Mouse Interaction Parallax tracking
    const targetRotation = { x: 0, y: 0 };
    const currentRotation = { x: 0, y: 0 };

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotation.y = x * 0.45;
      targetRotation.x = -y * 0.35;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop with Software WebGL pacing
    let frameId = 0;
    let startTime = performance.now();
    let lastTime = startTime;

    function afterDraw(cb: () => void) {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      if (gl.fenceSync) {
        const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
        gl.flush();
        const poll = () => {
          const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
          if (state === gl.UNSIGNALED) {
            frameId = window.setTimeout(poll, 6);
          } else {
            if (sync) gl.deleteSync(sync);
            frameId = window.setTimeout(cb, 60);
          }
        };
        frameId = window.setTimeout(poll, 6);
      } else {
        frameId = window.setTimeout(cb, 60);
      }
    }

    function animate() {
      const now = performance.now();
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      const elapsed = (now - startTime) / 1000;

      // Exponential damping for smooth mouse follow
      currentRotation.x = THREE.MathUtils.damp(currentRotation.x, targetRotation.x, 3.5, delta);
      currentRotation.y = THREE.MathUtils.damp(currentRotation.y, targetRotation.y, 3.5, delta);

      // Autonomous precession + interactive tilt
      sculptureGroup.rotation.y = elapsed * 0.22 + currentRotation.y;
      sculptureGroup.rotation.x = Math.sin(elapsed * 0.15) * 0.12 + currentRotation.x;
      sculptureGroup.position.y = Math.sin(elapsed * 0.8) * 0.08;

      // Independent Gimbal Ring Rotations
      outerRing.rotation.z = elapsed * 0.35;
      midRing.rotation.y = -elapsed * 0.25;
      coreMesh.rotation.x = elapsed * 0.5;
      coreMesh.rotation.y = elapsed * 0.4;

      // Satellite Orbits
      satelliteGroup.rotation.y = -elapsed * 0.4;

      renderer.render(scene, camera);

      if (isSoftwareGl) {
        afterDraw(animate);
      } else {
        frameId = requestAnimationFrame(animate);
      }
    }

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);

      // Dispose resources
      torusKnotGeo.dispose();
      outerRingGeo.dispose();
      midRingGeo.dispose();
      coreIcosaGeo.dispose();
      groundShadowGeo.dispose();
      groundShadowTexture.dispose();
      titaniumMaterial.dispose();
      polishedGoldMaterial.dispose();
      darkAlloyMaterial.dispose();
      accentLimeWireMaterial.dispose();
      groundShadowMat.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative w-full h-full flex items-center justify-center select-none ${className}`}>
      {/* 3D Canvas Mount Point */}
      <div
        ref={mountRef}
        data-testid="hero-threejs-viewport"
        className="w-full h-full min-h-[380px] sm:min-h-[460px] md:min-h-[540px] flex items-center justify-center"
      />

      {/* Software or Fallback Artwork if WebGL is unavailable */}
      {hasWebGlError && (
        <div className="absolute inset-0 flex items-center justify-center p-6 bg-[#111317] border border-[#282B31] rounded-2xl">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full border border-[#C8FF55]/40 flex items-center justify-center bg-[#171A20]">
              <div className="w-16 h-16 rounded-full border border-[#C8FF55] animate-spin" />
            </div>
            <p className="text-sm font-medium text-[#F4F4F2]">3D Kinetic Sculpture</p>
            <p className="text-xs text-[#9B9DA5] mt-1">WebGL Hardware Render</p>
          </div>
        </div>
      )}

      {/* Subtle interaction cue badge */}
      <div
        className={`absolute bottom-4 right-4 sm:bottom-6 sm:right-6 pointer-events-none transition-opacity duration-700 ${
          isLoaded ? 'opacity-80' : 'opacity-0'
        }`}
      >
        <span className="text-[11px] font-mono text-[#9B9DA5] tracking-wider uppercase bg-[#111317]/80 border border-[#282B31] px-3 py-1.5 rounded-full backdrop-blur-sm">
          Interactive 3D Form · Rotate With Cursor
        </span>
      </div>
    </div>
  );
};
