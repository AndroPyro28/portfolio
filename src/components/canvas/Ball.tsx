import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const BallCanvas: React.FC<{ icon: string }> = ({ icon }) => {
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true, }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

const Ball: React.FC<{ imgUrl: string }> = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.55} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={"#fff8eb"}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[Math.PI * 2, 0, 6.25]}
        />
      </mesh>
    </Float>
  );
};

export default BallCanvas;


/*

import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

import * as THREE from 'three';

const Ball: React.FC<{icon: string, position: any}> = ({ icon, position }) => {

  const decal = useMemo(() => new THREE.TextureLoader().load(icon), [icon]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.03} />
      <directionalLight position={[10, 5, -5]} />
      <mesh castShadow receiveShadow scale={1} position={position}>
        <icosahedronGeometry args={[1, 10]} />
        <meshStandardMaterial
          color='#fff8eb'
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.2}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const Particles = () => {
  const count = 500;

  const [positions, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
      sizes[i] = Math.random() < 0.03 ? 15 : 6;
    }

    return [positions, sizes];
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          // attachObject={["attributes", "position"]}
          count={positions.length / 3}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} />
    </points>
  );
};

const BallCanvas:React.FC<{icons: string[]}> = ({ icons }) => {
  return (
    <Canvas frameloop='always'
    shadows
    dpr={[1, 1]}
    camera={{ position: [0, 0, 5], fov: 75 }}
    gl={{ preserveDrawingBuffer: true }}>
        <Particles />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <group dispose={null}>
          {icons.map((icon, index) => {
            const row = Math.floor(index / 3);
            const col = index % 3;
            return (
              <Ball key={icon} icon={icon} position={[col * 3 - 4, row * 3 + -2, -9]} />
            );
          })}
        </group>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
*/