import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useStore } from '../../db/state';
import { Html, Text } from '@react-three/drei';
import { useControls } from 'leva';

function OrbitText({ children, pos }) {
  const text = useRef(null);
  const fontProps = {
    font: '/fonts/appleberry.ttf',
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
  };
  return <Text ref={text} {...fontProps} children={children} position={pos} />;
}

export default function Circles({ children, name, position, colorMap, nextPlace }) {
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
      {/* <OrbitText pos={}>hello</OrbitText> */}
    </>
  );
}
