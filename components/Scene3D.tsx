
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShapes = () => {
  const sphereRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(t * 0.5) * 0.2;
      sphereRef.current.rotation.z = t * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.2;
      ringRef.current.rotation.y = t * 0.3;
    }
  });

  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere ref={sphereRef} args={[1, 64, 64]} position={[2.5, 0, -1]}>
          <MeshDistortMaterial
            color="#a855f7"
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.2}
            metalness={0.9}
          />
        </Sphere>
      </Float>

      <mesh ref={ringRef} position={[-2.5, -1, -2]}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshStandardMaterial color="#3b82f6" roughness={0.1} metalness={0.9} />
      </mesh>

      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
    </>
  );
};

interface Scene3DProps {
  onError?: () => void;
}

const Scene3D: React.FC<Scene3DProps> = ({ onError }) => {
  return (
    <div className="absolute inset-0 z-0 opacity-30 md:opacity-100 pointer-events-none">
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        onError={(e) => {
          console.error("Three.js Canvas Error:", e);
          if (onError) onError();
        }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
          <AnimatedShapes />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
