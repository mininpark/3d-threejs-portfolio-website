import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf') //3D MODEL GLTF
  return (
    <mesh>
      <hemisphereLight
        intensity={0.15}
        groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -3, -2.0] : [0, -3.25, -1.5]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const isMobile = useMediaQuery("(max-width: 500px)");
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}> // To have a Loader spinner
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas >
  )
}

export default ComputersCanvas;