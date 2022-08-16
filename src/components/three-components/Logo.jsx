import { Suspense, useRef } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader } from '@react-three/fiber';

export default function Logo(props) {
  const colorMap = useLoader(TextureLoader, 'imgs/logo_white.png');
  colorMap.repeat.set(1, 1);
  const ref = useRef();
  return (
    <Suspense fallback={null}>
      <mesh ref={ref} {...props}>
        <planeBufferGeometry attach="geometry" args={[15, 5]} />
        <meshBasicMaterial attach="material" map={colorMap} toneMapped={false} transparent />
      </mesh>
    </Suspense>
  );
}
