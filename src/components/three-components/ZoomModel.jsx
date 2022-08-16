import { useGLTF } from '@react-three/drei';
import { Suspense, useRef, useState, useEffect } from 'react';
import { Select } from '@react-three/postprocessing';
export default function ZoomModel({ setSelectedZoom }) {
  // const [hovered, setHovered] = useState(null);
  // useEffect(() => {
  //   document.body.style.cursor = hovered ? 'pointer' : 'auto'
  //   return ()=> document.body.style.cursor = 'auto';
  // }, [hovered])
  const ref = useRef();
  const gltf = useGLTF('imgs/zoomfix.glb');
  return (
    <Suspense fallback={null}>
      <primitive
        onClick={() => {
          window.location.href = 'https://zoom.us/j/93176744296?pwd=YTJMcjlWNWUxMG9qUkxBM1JTaVE5Zz09';
        }}
        onPointerOver={() => setSelectedZoom(true)}
        onPointerOut={() => setSelectedZoom(false)}
        ref={ref}
        object={gltf.scene}
        rotation={[30, 0, 0]}
        position={[15, -10, 10]}
        scale={[0.1, 0.1, 0.1]}
      />
    </Suspense>
  );
}
