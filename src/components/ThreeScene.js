import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import './ThreeText.css';

const ThreeText = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    // Renderer with transparent background
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.PointLight(0xffffff, 2, 100);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Load and add 3D text with bluish techno gradient material
    const loader = new FontLoader();
    loader.load(
      'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
      (font) => {
        const textGeometry = new TextGeometry('Srinjay', {
          font: font,
          size: 2,
          height: 0.5,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.1,
          bevelSize: 0.05,
          bevelOffset: 0,
          bevelSegments: 5,
        });

        // Custom ShaderMaterial for bluish techno gradient effect
        const shaderMaterial = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
          },
          vertexShader: `
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform float time;
            varying vec2 vUv;
            void main() {
              float colorFactor = abs(sin(time + vUv.x * 3.0));
              vec3 color = mix(vec3(0.0, 0.4, 0.8), vec3(0.2, 0.6, 1.0), colorFactor);
              gl_FragColor = vec4(color, 1.0);
            }
          `,
          side: THREE.DoubleSide,
        });

        const textMesh = new THREE.Mesh(textGeometry, shaderMaterial);
        textMesh.position.set(-4, 0, 0);
        scene.add(textMesh);

        const animate = () => {
          requestAnimationFrame(animate);
          textMesh.rotation.y += 0.01;
          shaderMaterial.uniforms.time.value += 0.02; // Animation speed
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (error) => console.error('An error occurred while loading the font:', error)
    );

    // Resize handler
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default ThreeText;
