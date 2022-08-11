import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import { ContactShadows, Html, Environment, useBounds, Bounds, OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import styled from 'styled-components';
import create from 'zustand';
import Model from '../components/three-components/Model';
import Circles from '../components/three-components/SpaceCircle';

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

const Circle = ({ position, colorMap, texts, name, index }) => {
  const mesh = useRef(null);
  const { current, setCurrent } = useStore();

  useFrame(({ clock }) => (mesh.current.position.y = Math.sin(clock.getElapsedTime()) * 2));
  return (
    <mesh
      name={name}
      position={position}
      ref={mesh}
      onClick={() => {
        setCurrent(texts[index + 1]);
      }}
      visible={current.includes(name) ? true : false}
    >
      <sphereBufferGeometry attach="geometry" args={[10, 50]} />
      <Html distanceFactor={50} visible={current.includes(name) ? true : false}>
        <div className="content" style={{ display: `${current.includes(name) ? 'block' : 'none'}` }}>
          {texts[index]}
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

export default function ThreeTest() {
  const texts = ['train', 'mart', 'baseball', 'waterpark', 'hangang', 'go'];
  const colorMap = useLoader(TextureLoader, [
    'imgs/train.jpg',
    'imgs/mart.jpg',
    'imgs/baseball.jpg',
    'imgs/waterpark.jpg',
    'imgs/hangang.jpg',
  ]);

  return (
    <CanvasContainer>
      <Description>Hustle | Ars Electronica</Description>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 15, 0] }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={false}>
          <Model />
          <Bounds fit clip observe damping={3} margin={1.5}>
            <SelectToZoom>
              <Circles position={[-25, 0, -0]} name={texts[0]} nextPlace={texts[1]} colorMap={colorMap[0]} />
              <Circles position={[-25, 0, -30]} name={texts[1]} nextPlace={texts[2]} colorMap={colorMap[1]} />
              <Circles position={[-25, 0, -60]} name={texts[2]} nextPlace={texts[3]} colorMap={colorMap[2]} />
              <Circles position={[-25, 0, -90]} name={texts[3]} nextPlace={texts[4]} colorMap={colorMap[3]} />
              <Circles position={[-25, 0, -120]} name={texts[4]} nextPlace={texts[5]} colorMap={colorMap[4]} />
            </SelectToZoom>
          </Bounds>
        </Suspense>
        <Environment background={true} near={1} far={1000} files={'web.hdr'} path={'imgs/'} preset={null} />
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
