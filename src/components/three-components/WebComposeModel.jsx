import { useGLTF } from '@react-three/drei';
import { Suspense, useRef } from 'react';

export default function WebComposeModel() {
  const ref = useRef();
  const gltf = useGLTF('imgs/Web_dance_button_fixed.glb');

  return (
    <Suspense fallback={null}>
      <primitive
        ref={ref}
        object={gltf.scene}
        rotation={[30, 0, 0]}
        position={[-15, -10, 10]}
        scale={[0.1, 0.1, 0.1]}
      />
    </Suspense>
  );
}
