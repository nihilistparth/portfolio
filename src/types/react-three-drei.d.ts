declare module '@react-three/drei' {
  import { ReactNode } from 'react';
  import * as THREE from 'three';

  export interface OrbitControlsProps {
    enableZoom?: boolean;
    enablePan?: boolean;
    minPolarAngle?: number;
    maxPolarAngle?: number;
  }

  export function OrbitControls(props: OrbitControlsProps): JSX.Element;
  export function useGLTF(path: string): {
    nodes: Record<string, THREE.Mesh>;
    materials: Record<string, THREE.Material>;
  };
} 