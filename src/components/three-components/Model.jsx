import { useGLTF, useAnimations } from '@react-three/drei';

import { Suspense, useEffect, useRef } from 'react';
export default function Model() {
  const ref = useRef();
  const gltf = useGLTF('imgs/dancer.glb');
  const { actions } = useAnimations(gltf.animations, ref);
  useEffect(() => {
    actions['transform1|Scene'].play();
  });

  return (
    <Suspense fallback={null}>
      <primitive ref={ref} object={gltf.scene} position={[0, -350, -2000]} scale={[100, 100, 100]} />
    </Suspense>
  );
}
