import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
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
`;

const Loading = styled.p`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  font-style: italic;
  text-align: center;
`;

export default function Entrance() {
  const [clicked, setClicked] = useRecoilState(clickState);
  const [imgLoad, setImgLoad] = useState(false);

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
              <Link to={`/train`}>
                <NextPageText>WHAT IF DANCE HERE?</NextPageText>
              </Link>
            ) : (
              <EntranceText>CAN WE DANCE HERE?</EntranceText>
            )}
          </EntranceContainer>
        </>
      ) : (
        <Loading>Going to dance</Loading>
      )}
    </MainContianer>
  );
}
