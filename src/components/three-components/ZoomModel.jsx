import { useGLTF } from '@react-three/drei';
import { Suspense, useRef } from 'react';

export default function ZoomModel() {
  const ref = useRef();
  const gltf = useGLTF('imgs/zoomfix.glb');

  return (
    <Suspense fallback={null}>
      <primitive ref={ref} object={gltf.scene} rotation={[30, 0, 0]} position={[15, -10, 10]} scale={[0.1, 0.1, 0.1]} />
    </Suspense>
  );
}
