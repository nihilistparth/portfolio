import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function FloatingLaptop() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Create a more refined geometry for the laptop
  const baseGeometry = new THREE.BoxGeometry(1.6, 0.05, 1.2);
  const screenGeometry = new THREE.BoxGeometry(1.5, 1, 0.05);
  const screenBorderGeometry = new THREE.BoxGeometry(1.6, 1.1, 0.05);
  const keyboardGeometry = new THREE.BoxGeometry(1.4, 0.02, 0.9);
  
  // Create materials with more refined properties
  const baseMaterial = new THREE.MeshPhysicalMaterial({
    color: '#1e293b',
    metalness: 0.7,
    roughness: 0.3,
    clearcoat: 0.5,
    clearcoatRoughness: 0.3,
    emissive: '#60a5fa',
    emissiveIntensity: 0.1,
  });

  const screenMaterial = new THREE.MeshPhysicalMaterial({
    color: '#0f172a',
    metalness: 0.2,
    roughness: 0.4,
    emissive: '#60a5fa',
    emissiveIntensity: 0.2,
  });

  const screenBorderMaterial = new THREE.MeshPhysicalMaterial({
    color: '#1e293b',
    metalness: 0.7,
    roughness: 0.3,
    clearcoat: 0.5,
    clearcoatRoughness: 0.3,
    emissive: '#60a5fa',
    emissiveIntensity: 0.1,
  });

  const keyboardMaterial = new THREE.MeshPhysicalMaterial({
    color: '#1e293b',
    metalness: 0.5,
    roughness: 0.6,
    emissive: '#60a5fa',
    emissiveIntensity: 0.05,
  });

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Smoother floating animation
    const time = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(time * 0.8) * 0.05;
    groupRef.current.rotation.y = Math.sin(time * 0.4) * 0.08;
    groupRef.current.rotation.x = -0.5 + Math.sin(time * 0.3) * 0.02;
  });

  return (
    <group ref={groupRef} dispose={null} position={[0, 0.3, 0]}>
      {/* Base */}
      <mesh
        castShadow
        receiveShadow
        geometry={baseGeometry}
        material={baseMaterial}
        position={[0, -0.3, 0]}
      />
      
      {/* Screen Border */}
      <mesh
        castShadow
        receiveShadow
        geometry={screenBorderGeometry}
        material={screenBorderMaterial}
        position={[0, 0.25, -0.1]}
        rotation={[0.5, 0, 0]}
      />
      
      {/* Screen */}
      <mesh
        castShadow
        receiveShadow
        geometry={screenGeometry}
        material={screenMaterial}
        position={[0, 0.25, -0.09]}
        rotation={[0.5, 0, 0]}
      />
      
      {/* Keyboard */}
      <mesh
        castShadow
        receiveShadow
        geometry={keyboardGeometry}
        material={keyboardMaterial}
        position={[0, -0.27, 0]}
      />

      {/* Screen Content */}
      <group position={[0, 0.25, -0.08]} rotation={[0.5, 0, 0]}>
        {Array.from({ length: 5 }).map((_, i) => (
          <mesh key={i} position={[0, -0.3 + i * 0.15, 0]}>
            <planeGeometry args={[1.2, 0.02]} />
            <meshBasicMaterial color="#60a5fa" transparent opacity={0.5} />
          </mesh>
        ))}
      </group>

      {/* Logo */}
      <mesh
        castShadow
        receiveShadow
        position={[0, -0.32, 0.4]}
        rotation={[-0.2, 0, 0]}
      >
        <circleGeometry args={[0.1, 32]} />
        <meshPhysicalMaterial
          color="#60a5fa"
          metalness={0.9}
          roughness={0.2}
          emissive="#60a5fa"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
} 