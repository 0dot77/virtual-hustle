import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';
import PageMove from './PageMove';
import RandomRevealText from './RandomRevealText';
import { useLocation } from 'react-router-dom';
import placesdb from '../db/placesdb';

const DotSizeAnimation = keyframes`
  from {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  to {
    width:100%;
    height:100vh;
    border-radius: 0%;
  }
`;

const BackImgContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-size: cover;
`;

const BackImgDotToWholeContainer = styled.div`
  img {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    animation: ${DotSizeAnimation} 2s ease forwards;
  }
`;

const TextArea = styled.article`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.imgLoad ? 'normal' : 'none')};
`;

const TextOffset = styled.div`
  position: absolute;
  padding: 1rem;
  font-size: 4rem;
  filter: drop-shadow(0 0 0.75rem crimson);
  &.word1 {
    display: ${(props) => (props.wordNum.includes(1) ? 'normal' : 'none')};
  }
  &.word2 {
    display: ${(props) => (props.wordNum.includes(2) ? 'normal' : 'none')};
  }
  &.word3 {
    display: ${(props) => (props.wordNum.includes(3) ? 'normal' : 'none')};
  }
  &.word4 {
    display: ${(props) => (props.wordNum.includes(4) ? 'normal' : 'none')};
  }
  &.word5 {
    display: ${(props) => (props.wordNum.includes(5) ? 'normal' : 'none')};
  }
  &.word6 {
    display: ${(props) => (props.wordNum.includes(6) ? 'flex' : 'none')};
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: static;
    p {
      font-size: 7rem;
      text-align: center;
      color: ${(props) => props.theme[props.pathName + 'AccentColor']};
    }
  }
`;

/*
bgImg : 각 공간에 대한 배경
moveUrl : 다음 이동할 공간의 주소

*/

export default function Places({ bgImg, moveToUrl, nextPlaceImg, placeWords, placeWordsPos }) {
  const [wordNum, setWordNum] = useState([1]);
  const [imgLoad, setImgLoad] = useState(false);
  const loc = useLocation();
  const pathName = loc.pathname.split('/');

  // useEffect로 트랜지션 구현
  useEffect(() => {
    setTimeout(() => {
      setImgLoad(true);
    }, 2000);
  }, []);

  return (
    <BackImgContainer>
      <BackImgDotToWholeContainer>
        <img src={wordNum.includes(7) ? 'none' : bgImg} fetchpriority="high" />
      </BackImgDotToWholeContainer>
      <TextArea imgLoad={imgLoad}>
        {wordNum.includes(7) ? (
          <PageMove nextPlace={moveToUrl} nextPlaceImg={bgImg} />
        ) : (
          placeWords.map((words, index) => (
            <TextOffset
              key={index}
              style={{
                left: `${
                  placeWordsPos[index][0] > window.screen.availWidth
                    ? placeWordsPos[index][0] - 100
                    : placeWordsPos[index][0]
                }px`,
                top: `${placeWordsPos[index][1]}px`,
              }}
              pathName={pathName[1]}
              wordNum={wordNum}
              className={`word${index + 1}`}
            >
              <RandomRevealText setWordNum={setWordNum} index={index} words={words} wordNum={wordNum} />
            </TextOffset>
          ))
        )}
      </TextArea>
    </BackImgContainer>
  );
}
