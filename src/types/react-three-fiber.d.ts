declare module '@react-three/fiber' {
  import { ReactNode } from 'react';
  import * as THREE from 'three';

  export interface CanvasProps {
    children?: ReactNode;
    camera?: {
      position?: [number, number, number];
      fov?: number;
    };
    style?: React.CSSProperties;
  }

  export interface RootState {
    clock: THREE.Clock;
  }

  export function Canvas(props: CanvasProps): JSX.Element;
  export function useFrame(callback: (state: RootState) => void): void;
} 