import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import { ContactShadows, Html, Environment, useBounds, Bounds, OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import styled from 'styled-components';
import Model from '../components/three-components/Model';
import Circles from '../components/three-components/SpaceCircle';
import Orbits from '../components/three-components/SpaceObjects';
import { useNavigate } from 'react-router-dom';

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;

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
const Description = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  font-size: 3rem;
  z-index: 1000;
  color: #ffffff;
`;

function SelectToZoom({ children }) {
  const api = useBounds();
  return (
    <group
      onClick={(e) => {
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

export default function Bridge() {
  const nav = useNavigate();
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
      <Description> Tinkers &lt;Hustle&gt; | Ars Electronica</Description>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 15, 30] }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Model />
          <Bounds fit clip observe damping={3} margin={1.5}>
            <SelectToZoom>
              <Circles nav={nav} position={[-25, 0, 0]} name={texts[0]} nextPlace={texts[1]} colorMap={colorMap[0]} />
              <Circles nav={nav} position={[-25, 0, -50]} name={texts[1]} nextPlace={texts[2]} colorMap={colorMap[1]} />
              <Circles
                nav={nav}
                position={[-25, 0, -100]}
                name={texts[2]}
                nextPlace={texts[3]}
                colorMap={colorMap[2]}
              />
              <Circles
                nav={nav}
                position={[-25, 0, -150]}
                name={texts[3]}
                nextPlace={texts[4]}
                colorMap={colorMap[3]}
              />
              <Circles
                nav={nav}
                position={[-25, 0, -200]}
                name={texts[4]}
                nextPlace={texts[5]}
                colorMap={colorMap[4]}
              />
            </SelectToZoom>
          </Bounds>
          <Orbits position={[0, 1, 1]} children={'hello'} name={texts[0]} />
          <Orbits position={[0, 1, -50]} children={'hello'} name={texts[1]} />
          <Orbits position={[0, 1, -100]} children={'hello'} name={texts[2]} />
          <Orbits position={[0, 1, -150]} children={'hello'} name={texts[3]} />
          <Orbits position={[0, 1, -200]} children={'hello'} name={texts[4]} />
        </Suspense>
        <Environment background={true} near={1} far={1000} files={'5.hdr'} path={'imgs/'} preset={null} />
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
        <OrbitControls
          makeDefault
          // minPolarAngle={0}
          // maxPolarAngle={Math.PI / 1.75}
          enableDamping={true}
          zoomSpeed={0.5}
        />
      </Canvas>
    </CanvasContainer>
  );
}
