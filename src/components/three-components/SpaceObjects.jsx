import { useMemo, useRef } from 'react';
import { Text } from '@react-three/drei';
import { useStore } from '../../db/state';
import { useFrame } from '@react-three/fiber';

function OrbitText({ children, position, name, color }) {
  const textRef = useRef(null);
  const { current } = useStore();
  const fontProps = {
    font: '/fonts/appleberry.ttf',
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
  };

  useFrame(({ clock }) => {
    textRef.current.position.y = Math.sin(clock.getElapsedTime()) * 2;
    textRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 2;
  });
  return (
    <Text
      visible={current.includes(name) ? true : false}
      ref={textRef}
      {...fontProps}
      position={position}
      anchorX="center"
      anchorY="center"
      outlineBlur
      outlineWidth={0.1}
      children={children}
      outlineColor={color}
    />
  );
}

export default function Orbits({ position, children, name, color }) {
  const circlePos = useMemo(() => {
    const [x, y, z] = [...position];
    const pos = [
      [x - 10, y - 5, z - 5],
      [x - 40, y - 10 * Math.random(), z - 5],
      [x - 40, y - 10, z + 5],
      [x - 10, y - 10, z + 15],
      [x - 10 * Math.trunc(Math.random()), y + 20, z],
    ];

    return pos;
  }, [position]);
  // [pos] 와 같이 백터를 사용할 때의 map 함수 사용에 유의하기...
  return circlePos.map((pos, i) => (
    <OrbitText name={name} key={i} position={pos} children={children[i]} color={color} />
  ));
}
