import { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, useTexture, Trail } from '@react-three/drei';
import * as THREE from 'three';

const Earth = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();
  
  // Load high-res night earth texture
  const [colorMap] = useTexture([
    'https://unpkg.com/three-globe/example/img/earth-night.jpg'
  ]);

  useFrame((state) => {
    const { clock } = state;
    const time = clock.getElapsedTime();
    
    // Earth's natural rotation - drastically slowed down
    mesh.current.rotation.y = time * 0.05;
    mesh.current.rotation.x = time * 0.02;
    
    // Floating mathematical path - slower and without mouse reactivity
    const floatX = Math.sin(time * 0.05) * Math.cos(time * 0.04) * (viewport.width * 0.3);
    const floatY = Math.sin(time * 0.06) * Math.cos(time * 0.03) * (viewport.height * 0.3);
    const floatZ = Math.sin(time * 0.08) * 1.5;
    
    mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, floatX, 0.01);
    mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, floatY, 0.01);
    mesh.current.position.z = THREE.MathUtils.lerp(mesh.current.position.z, floatZ, 0.01);
  });

  return (
    <mesh ref={mesh} scale={1.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial 
        map={colorMap}
        roughness={0.8}
        metalness={0.2}
      />
    </mesh>
  );
};

const Meteorite = ({ offset, speed, pathX, pathY, zDepth, color }: any) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();
  
  useFrame(({ clock }) => {
    // Loop much slower (e.g. every 60 seconds) for extremely slow drifting
    const t = (clock.getElapsedTime() * speed + offset) % 60;
    const progress = t / 60; // 0 to 1
    
    // Shoot very slowly across the screen in the background
    mesh.current.position.x = (0.5 - progress) * (viewport.width * pathX);
    mesh.current.position.y = (-0.5 + progress) * (viewport.height * pathY);
    // Keep them deep in the background with a slight Z fluctuation
    mesh.current.position.z = zDepth + Math.sin(progress * Math.PI) * 2;
  });

  return (
    <Trail 
      width={0.6} 
      length={4} // Even shorter tail
      color={new THREE.Color(color)} 
      attenuation={(t) => t * t}
    >
      <mesh ref={mesh}>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </Trail>
  );
};

const SpaceScene = () => {
  // A group to hold everything and make it all float together
  const group = useRef<THREE.Group>(null!);
  const { viewport } = useThree();

  useFrame((state) => {
    const { clock } = state;
    const time = clock.getElapsedTime();
    
    // The entire solar system gently drifts - slower, no mouse
    const floatX = Math.sin(time * 0.03) * (viewport.width * 0.15);
    const floatY = Math.cos(time * 0.04) * (viewport.height * 0.15);
    
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, floatX, 0.01);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, floatY, 0.01);
  });

  // Increased density of meteorites with diverse parameters
  const meteorites = [
    { offset: 0, speed: 0.4, pathX: 2, pathY: 2.5, zDepth: -8, color: "#ffaa00" },
    { offset: 10, speed: 0.3, pathX: -2.5, pathY: 1.5, zDepth: -6, color: "#ff4d4d" },
    { offset: 20, speed: 0.5, pathX: 1.5, pathY: -2, zDepth: -10, color: "#4f8ef7" },
    { offset: 30, speed: 0.35, pathX: -2, pathY: -2.5, zDepth: -7, color: "#ffffff" },
    { offset: 40, speed: 0.25, pathX: 3, pathY: 1, zDepth: -9, color: "#c9a84c" },
    { offset: 50, speed: 0.6, pathX: -3, pathY: -1, zDepth: -12, color: "#ffaa00" },
    { offset: 5, speed: 0.2, pathX: 1, pathY: 3, zDepth: -15, color: "#4f8ef7" },
    { offset: 15, speed: 0.45, pathX: -1.5, pathY: -3, zDepth: -11, color: "#ff7700" },
    { offset: 25, speed: 0.32, pathX: 2.5, pathY: -1.5, zDepth: -5, color: "#ffd400" },
    { offset: 35, speed: 0.55, pathX: -2, pathY: 2, zDepth: -14, color: "#ffffff" },
    { offset: 45, speed: 0.28, pathX: 1, pathY: -2.5, zDepth: -8, color: "#4f8ef7" },
    { offset: 55, speed: 0.42, pathX: -2.8, pathY: 0.5, zDepth: -10, color: "#ff4d4d" },
    { offset: 2, speed: 0.38, pathX: 1.8, pathY: 2.2, zDepth: -13, color: "#c9a84c" },
    { offset: 12, speed: 0.52, pathX: -2.2, pathY: -1.8, zDepth: -7, color: "#ffaa00" },
    { offset: 22, speed: 0.22, pathX: 3.2, pathY: 2.8, zDepth: -16, color: "#ffffff" },
    { offset: 32, speed: 0.48, pathX: -1.2, pathY: 3.5, zDepth: -9, color: "#4f8ef7" },
    { offset: 42, speed: 0.34, pathX: 2.4, pathY: -3.2, zDepth: -11, color: "#ff7700" },
    { offset: 52, speed: 0.58, pathX: -3.5, pathY: 1.2, zDepth: -6, color: "#c9a84c" },
  ];

  return (
    <group ref={group}>
      <Suspense fallback={
        <mesh scale={1.5}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#0a0a0a" wireframe />
        </mesh>
      }>
        <Earth />
      </Suspense>

      {/* Burning Meteorites - Slower, Shorter tails, Deep Background */}
      {meteorites.map((m, i) => (
        <Meteorite key={i} {...m} />
      ))}
    </group>
  );
};

const GlassOrb = () => {
  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw', 
      height: '100vh',
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[10, 10, 5]} intensity={2.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4f8ef7" />
        
        <SpaceScene />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default GlassOrb;
