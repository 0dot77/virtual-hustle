import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useStore } from '../../db/state';
import { Html } from '@react-three/drei';

export default function Circles({ nav, name, position, colorMap, nextPlace }) {
  const circleMesh = useRef(null);
  const { current, setCurrent } = useStore();
  useFrame(({ clock }) => (circleMesh.current.position.y = Math.sin(clock.getElapsedTime()) * 2));

  return (
    <>
      <mesh
        name={name}
        position={position}
        ref={circleMesh}
        onClick={() => {
          setCurrent(nextPlace);
          setTimeout(() => {
            nav('/' + name);
          }, 3000);
        }}
        visible={current.includes(name) ? true : false}
      >
        <sphereBufferGeometry attach="geometry" args={[10, 50]} />
        <Html distanceFactor={50} visible={current.includes(name) ? true : false}>
          <div className="content" style={{ display: `${current.includes(name) ? 'block' : 'none'}` }}>
            {name}
          </div>
        </Html>
        <meshStandardMaterial attach="material" map={colorMap} />
      </mesh>
    </>
  );
}
