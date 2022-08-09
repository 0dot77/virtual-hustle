import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import {
  ContactShadows,
  Html,
  Environment,
  useBounds,
  Bounds,
  OrbitControls,
  useFBX,
  useAnimations,
} from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import styled from 'styled-components';
import create from 'zustand';

// zustand 상태관리

const useStore = create((set) => ({
  current: ['train'],
  setCurrent: (input) => set((state) => ({ current: [...state.current, input] })),
}));
const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;

  .content {
    width: 100%;
    height: 100%;
    font-size: 5rem;
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    padding-top: 10px;
    transform: translate3d(-50%, 200%, 0);
    text-align: center;
    background-color: black;
    padding: 10px 15px;
    border-radius: 20px;

    /* block drag */
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    /* pointer */
    cursor: default;
  }
`;

const Loading = styled.h1`
  position: absolute;
  font-size: 5rem;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  color: #000000;
`;

const Description = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  font-size: 3rem;
  z-index: 1000;
  color: #ffffff;
`;

const Circle = ({ position, colorMap, texts, name }) => {
  const mesh = useRef(null);
  const { current, setCurrent } = useStore();
  // const { scale } = useSpring({
  //   loop: true,
  //   from: {
  //     scale: 1,
  //   },
  //   to: {
  //     scale: current === name ? 1.5 : 1,
  //   },
  // });

  useFrame(({ clock }) => (mesh.current.position.y = Math.sin(clock.getElapsedTime()) * 2));
  return (
    <mesh
      name={name}
      position={position}
      ref={mesh}
      onClick={() => {
        setCurrent(name);
      }}
      visible={current.includes(name) ? true : false}
    >
      <sphereBufferGeometry attach="geometry" args={[10, 50]} />
      <Html distanceFactor={50}>
        <div className="content" style={{ display: `${current.includes(name) ? 'block' : 'none'}` }}>
          {texts}
        </div>
      </Html>
      <meshStandardMaterial attach="material" map={colorMap} />
    </mesh>
  );
};

function SelectToZoom({ children }) {
  const api = useBounds();
  return (
    <group
      onClick={(e) => {
        e.stopPropagation();
        e.delta <= 2 && api.refresh(e.object).fit();
      }}
      onPointerMissed={(e) => {
        e.button === 0 && api.refresh(e.camera).clip().fit();
      }}
    >
      {children}
    </group>
  );
}

function Dancer(props) {
  const fbx = useFBX('/imgs/dancer.fbx');

  return <primitive {...props} object={fbx} scale={0.5} />;
}

export default function ThreeTest() {
  const texts = ['Train', 'Mart', 'Baseball', 'Waterpark', 'Hangang', 'go'];

  const colorMap = useLoader(TextureLoader, [
    'imgs/train.jpg',
    'imgs/mart.jpg',
    'imgs/baseball.jpg',
    'imgs/waterpark.jpg',
    'imgs/hangang.jpg',
  ]);

  function createCircles() {
    let circles = [];
    for (let i = 0; i < 5; i++) {
      let x = -25 + i * 30;
      let y = 0;
      let z = i * -25;
      circles[i] = [x, y, z];
    }
    return circles;
  }

  const circles = createCircles().map((cords, i) => (
    <Circle key={i} position={cords} colorMap={colorMap[i]} texts={texts[i]} name={texts[i].toLowerCase()} />
  ));

  return (
    <CanvasContainer>
      <Description>Hustle | Ars Electronica</Description>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 15, 0] }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Dancer position={[100, -200, -200]} />
          <Bounds fit clip observe damping={3} margin={1.5}>
            <SelectToZoom>{circles}</SelectToZoom>
          </Bounds>
        </Suspense>
        <Environment background={true} near={1} far={1000} files={'file.hdr'} path={'imgs/'} preset={null} />
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -20, 0]}
          opacity={0.5}
          width={50}
          height={50}
          blur={0.5}
          far={20}
          color={'white'}
        />
        <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} enableZoom={false} />
      </Canvas>
    </CanvasContainer>
  );
}
