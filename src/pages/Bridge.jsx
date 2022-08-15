import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import {
  useProgress,
  ContactShadows,
  Environment,
  useBounds,
  Bounds,
  OrbitControls,
  Html,
  Text,
  Preload,
} from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Model from '../components/three-components/Model';
import Circles from '../components/three-components/SpaceCircle';
import Orbits from '../components/three-components/SpaceObjects';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useRecoilState } from 'recoil';
import { fufilled } from '../db/atom';
import placesdb from '../db/placesdb';
import { defaultTheme } from '../theme';
import styled from 'styled-components';
import ZoomModel from '../components/three-components/ZoomModel';
import WebComposeModel from '../components/three-components/WebComposeModel';

const Loading = styled.h1`
  color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
  top: 0;
  width: 100%;
  height: 100%;
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
  const textRef = useRef(null);
  const [go] = useRecoilState(fufilled);
  const texts = ['train', 'mart', 'baseball', 'waterpark', 'hangang', 'go'];
  const colorMap = useLoader(TextureLoader, [
    'imgs/train.jpg',
    'imgs/mart.jpg',
    'imgs/baseball.jpg',
    'imgs/waterpark.jpg',
    'imgs/hangang.jpg',
  ]);

  const creditText = [
    'Art Director and Programmer: Raegyun Kim, Taeyang Yoo',
    'Web Development : Taeyang Yoo',
    'Programmer : Jeeyoun Kim',
    'Talchum Dancer : Hyunki Kim, Byeongho Son',
  ];

  const fontProps = {
    font: '/fonts/Gobold Bold.otf',
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
  };

  return (
    <Layout>
      <Suspense fallback={<Loading>Loading...</Loading>}>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 15, 15] }}>
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <Model />
            {go ? (
              <group ref={textRef}>
                {/* 줌 공연으로 이동 */}

                <ZoomModel />
                <WebComposeModel />

                <Text
                  position={[15, -5, -10]}
                  scale={[1, 1, 1]}
                  rotation={[30, 0, 0]}
                  {...fontProps}
                  anchorX="center"
                  anchorY="center"
                  outlineBlur
                  outlineWidth={0.1}
                  children={'GO TO SHOW'}
                  outlineColor="#ff0000"
                />

                {/* 춤 조합 페이지로 이동 */}
                <Text
                  position={[-15, -5, -10]}
                  scale={[1, 1, 1]}
                  rotation={[30, 0, 0]}
                  {...fontProps}
                  anchorX="center"
                  anchorY="center"
                  outlineBlur
                  outlineWidth={0.1}
                  children={'Compose Dances'}
                  outlineColor="#ff0000"
                  onClick={() => {
                    nav('/mixed-area');
                  }}
                />
                <Text
                  position={[0, 12, -10]}
                  scale={[1, 1, 1]}
                  {...fontProps}
                  anchorX="center"
                  anchorY="center"
                  outlineBlur
                  outlineWidth={0.1}
                  children={'CREDIT'}
                  outlineColor="#ff0000"
                />
                <group>
                  <Text
                    position={[0, 8, -10]}
                    scale={[0.5, 0.5, 0.5]}
                    {...fontProps}
                    anchorX="center"
                    anchorY="center"
                    outlineBlur
                    outlineWidth={0.1}
                    children={creditText[0]}
                    outlineColor="#ff0000"
                  />
                  <Text
                    position={[0, 6, -10]}
                    scale={[0.5, 0.5, 0.5]}
                    {...fontProps}
                    anchorX="center"
                    anchorY="center"
                    outlineBlur
                    outlineWidth={0.1}
                    children={creditText[1]}
                    outlineColor="#ff0000"
                  />
                  <Text
                    position={[0, 4, -10]}
                    scale={[0.5, 0.5, 0.5]}
                    {...fontProps}
                    anchorX="center"
                    anchorY="center"
                    outlineBlur
                    outlineWidth={0.1}
                    children={creditText[2]}
                    outlineColor="#ff0000"
                  />
                  <Text
                    position={[0, 2, -10]}
                    scale={[0.5, 0.5, 0.5]}
                    {...fontProps}
                    anchorX="center"
                    anchorY="center"
                    outlineBlur
                    outlineWidth={0.1}
                    children={creditText[3]}
                    outlineColor="#ff0000"
                  />
                </group>
              </group>
            ) : (
              <>
                <Bounds fit clip observe damping={3} margin={1}>
                  <SelectToZoom>
                    <Circles
                      nav={nav}
                      position={[-25, 0, 0]}
                      name={texts[0]}
                      nextPlace={texts[1]}
                      colorMap={colorMap[0]}
                    />
                    <Circles
                      nav={nav}
                      position={[-25, 0, -50]}
                      name={texts[1]}
                      nextPlace={texts[2]}
                      colorMap={colorMap[1]}
                    />
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
                <Orbits
                  position={[0, 1, 1]}
                  children={placesdb.train.threeTexts}
                  name={texts[0]}
                  color={defaultTheme.trainColor}
                />
                <Orbits
                  position={[0, 1, -50]}
                  children={placesdb.mart.threeTexts}
                  name={texts[1]}
                  color={defaultTheme.martColor}
                />
                <Orbits
                  position={[0, 1, -100]}
                  children={placesdb.baseball.threeTexts}
                  name={texts[2]}
                  color={defaultTheme.baseballColor}
                />
                <Orbits
                  position={[0, 1, -150]}
                  children={placesdb.waterpark.threeTexts}
                  name={texts[3]}
                  color={defaultTheme.waterparkColor}
                />
                <Orbits
                  position={[0, 1, -200]}
                  children={placesdb.hangang.threeTexts}
                  name={texts[4]}
                  color={defaultTheme.hangangColor}
                />
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
              </>
            )}
          </Suspense>
          <Environment background={true} near={1} far={1000} files={'5.hdr'} path={'imgs/'} />
          <OrbitControls
            makeDefault
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 1.75}
            enableDamping={true}
            enableZoom={false}
          />
          <Preload all />
        </Canvas>
      </Suspense>
    </Layout>
  );
}
