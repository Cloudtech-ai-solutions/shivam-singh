import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function AnimatedSphere({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * speed * 0.8) * 0.2;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 32, 32]} position={position} scale={0.8}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.4}
          metalness={0.1}
        />
      </Sphere>
    </Float>
  );
}

function CloudParticles() {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const particles = new Float32Array(200 * 3);
  for (let i = 0; i < 200; i++) {
    particles[i * 3] = (Math.random() - 0.5) * 10;
    particles[i * 3 + 1] = (Math.random() - 0.5) * 10;
    particles[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#4f46e5" />
    </points>
  );
}

export function CloudScene3D() {
  return (
    <div className="w-full h-96 relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <AnimatedSphere position={[-2, 0, 0]} color="#3b82f6" speed={1} />
        <AnimatedSphere position={[2, 1, -1]} color="#06b6d4" speed={1.2} />
        <AnimatedSphere position={[0, -1, 1]} color="#8b5cf6" speed={0.8} />
        
        <CloudParticles />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
