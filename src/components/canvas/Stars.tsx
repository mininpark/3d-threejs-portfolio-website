import { useState, useRef, Suspense, MutableRefObject } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props: any) => {
  const starRef = useRef<THREE.Object3D | undefined>(null);
  // A sphere is perfectly round shape with a constant radius that has no corners or edges
  // In this modified code, we create a Float32Array with a length of 5000 * 3, where 3 represents the number of components (X, Y, Z) for each position. This ensures that the Float32Array has enough capacity to store the positions for all the stars.
  const sphere = random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 })

  // to rotate the stars frame react three fiber
  useFrame((state, delta) => {
    if (starRef.current) {
      starRef.current.rotation.x -= delta / 10;
      starRef.current.rotation.y -= delta / 15;
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={starRef}
        positions={sphere}
        stride={3}
        frustumCulled {...props} >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false} />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className="star-canvas">
      <Canvas
        camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>

    </div>
  )

}

export default StarsCanvas