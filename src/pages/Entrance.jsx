import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { clickState } from '../db/atom';
import { useState, useEffect } from 'react';
import placesdb from '../db/placesdb';

const MainContianer = styled.main`
  width: 100vw;
  height: 100vh;
  font-family: 'Main Font';
`;

/**
 * MAIN CIRCLE
 */

const DotColorChange = keyframes`
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
`;

const Dot = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  cursor: ${(props) => (props.clicked ? null : `pointer`)};
  background-color: #ff0000;
  animation: ${DotColorChange} 2s infinite linear;
`;

/**
 * TEXT
 */

const TextOpacityAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const EntranceContainer = styled.div`
  position: absolute;
  display: ${(props) => (props.clicked ? `flex` : null)};
  justify-content: ${(props) => (props.clicked ? `center` : null)};
  align-items: ${(props) => (props.clicked ? `center` : null)};
  left: 50%;
  top: ${(props) => (props.clicked ? `50%` : `60%`)};
  transform: translate(-50%, -50%);
  width: ${(props) => (props.clicked ? `100%` : `200px`)};
  height: 100px;
  /* border: 1px solid red; */
`;

const EntranceTextShake = keyframes`
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }`;

const EntranceText = styled.p`
  font-style: italic;
  text-align: center;
  animation: ${EntranceTextShake} 1s infinite;
  margin-top: 20px;
`;

const NextPageText = styled.p`
  font-style: italic;
  animation: ${TextOpacityAnimation} 1s infinite;
  font-size: 5rem;
  font-weight: 700;
  color: #ffffff;
  display: block;
`;

const LoadingContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 30px;
    font-style: italic;
    text-align: center;
  }
`;

const Spinner = (theme) => keyframes`
  0% { 
    transform: rotate(0deg); 
    border-top: 20px solid ${theme.trainColor};
  }

  25% {
    border-top: 20px solid ${theme.martColor};
  }

  50% {
    border-top: 20px solid ${theme.baseballColor};
  }
  75% {
    border-top: 20px solid ${theme.waterparkColor};
  }
100% { 
  transform: rotate(360deg);
  border-top: 20px solid ${theme.hangangColor};
   }
`;

const Loader = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 20px solid #eaf0f6;
  animation: ${(props) => Spinner(props.theme)} 4s linear infinite;
`;

export default function Entrance() {
  const [clicked, setClicked] = useRecoilState(clickState);
  const [imgLoad, setImgLoad] = useState(false);
  const nav = useNavigate();

  // 진입할 때 폰트와 이미지 프리로딩 해주기
  useEffect(() => {
    const img = new Image();
    placesdb.imgArr.forEach((pic) => {
      img.src = pic;
    });
    img.onload = () => {
      setImgLoad(true);
    };
  }, []);

  function clickCircleSize({ currentTarget }) {
    gsap.to(currentTarget, {
      width: '150vw',
      height: '150vh',
      backgroundColor: '#000000',
      duration: 2,
    });

    // 클릭했을 때 텍스트 바뀌도록
    setClicked((current) => !current);
  }
  return (
    <MainContianer>
      {imgLoad ? (
        <>
          <Dot onClick={clickCircleSize} clicked={clicked} />
          <EntranceContainer clicked={clicked}>
            {clicked ? (
              <NextPageText
                onClick={() => {
                  nav('/bridge');
                  console.log('hell');
                }}
              >
                WHAT IF DANCE HERE?
              </NextPageText>
            ) : (
              <EntranceText>CAN WE DANCE HERE?</EntranceText>
            )}
          </EntranceContainer>
        </>
      ) : (
        <LoadingContainer>
          <Loader />
          <p>Loading Dance Stage ...</p>
        </LoadingContainer>
      )}
    </MainContianer>
  );
}
