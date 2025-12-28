import React, { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function MilkyWayGalaxy({
  position = [0, -1.2, -16],
  count = 7000,
  arms = 10,
  radius = 14,
  spin = 1.35,
  randomness = 0.65,
}) {
  const pointsRef = useRef();

  const { positions, colors } = useMemo(() => {
    const positionsArr = new Float32Array(count * 3);
    const colorsArr = new Float32Array(count * 3);

    const inner = new THREE.Color('#ffffff');
    const outer = new THREE.Color('#8b5cf6');

    for (let i = 0; i < count; i++) {
      const r = Math.pow(Math.random(), 1.9) * radius;
      const branchAngle = ((i % arms) / arms) * Math.PI * 2;
      const spinAngle = r * spin * 0.22;
      const angle = branchAngle + spinAngle;

      const randomX = (Math.random() - 0.5) * randomness * r;
      const randomY = (Math.random() - 0.5) * randomness * r * 0.25;
      const randomZ = (Math.random() - 0.5) * randomness * r * 0.18;

      const x = Math.cos(angle) * r + randomX;
      const y = randomY;
      const z = Math.sin(angle) * r + randomZ;

      positionsArr[i * 3 + 0] = x;
      positionsArr[i * 3 + 1] = y;
      positionsArr[i * 3 + 2] = z;

      const mixed = inner.clone().lerp(outer, r / radius);
      colorsArr[i * 3 + 0] = mixed.r;
      colorsArr[i * 3 + 1] = mixed.g;
      colorsArr[i * 3 + 2] = mixed.b;
    }

    return { positions: positionsArr, colors: colorsArr };
  }, [count, arms, radius, spin, randomness]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.elapsedTime;
    // Precise single-axis spin: galaxy rotates around its vertical axis.
    pointsRef.current.rotation.y = t * 0.03;
    pointsRef.current.rotation.x = -0.4;
    pointsRef.current.rotation.z = 0;
  });

  return (
    <points ref={pointsRef} position={position}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        transparent
        opacity={0.7}
        vertexColors
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

// Mouse-following light
function MouseLight() {
  const lightRef = useRef();
  
  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.position.x = state.mouse.x * 5;
      lightRef.current.position.y = state.mouse.y * 5;
    }
  });

  return (
    <pointLight
      ref={lightRef}
      intensity={18}
      color="#8b5cf6"
      distance={20}
    />
  );
}

// Main scene component
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.35} />
      <directionalLight position={[8, 8, 5]} intensity={0.35} color="#ffffff" />
      <MouseLight />

      {/* Milky Way */}
      <MilkyWayGalaxy />

      <Stars radius={50} depth={50} count={1000} factor={2} fade speed={0.5} />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
