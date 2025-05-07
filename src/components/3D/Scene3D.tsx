import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { FloatingLaptop } from './FloatingLaptop';

export function Scene3D() {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10">
      <Canvas
        camera={{ position: [0, 0.5, 3], fov: 45 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          {/* Ambient light for soft overall illumination */}
          <ambientLight intensity={0.2} />
          
          {/* Key light */}
          <directionalLight
            position={[5, 5, 5]}
            intensity={0.8}
            castShadow
            shadow-mapSize={[1024, 1024]}
            color="#60a5fa"
          />
          
          {/* Fill light */}
          <directionalLight
            position={[-5, 3, -5]}
            intensity={0.4}
            color="#a78bfa"
          />
          
          {/* Rim light */}
          <pointLight
            position={[0, 3, -5]}
            intensity={0.3}
            color="#60a5fa"
          />
          
          {/* Main laptop model */}
          <FloatingLaptop />
          
          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
} 