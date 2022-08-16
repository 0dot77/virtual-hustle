import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';
import PageMove from './PageMove';
import RandomRevealText from './RandomRevealText';
import { useLocation } from 'react-router-dom';

const BackgroundColorChange = keyframes`
  0%   { background: #33CCCC; }
  20%  { background: #33CC36; }
  40%  { background: #B8CC33; }
  60%  { background: #FCCA00; }
  80%  { background: #33CC36; }
  100% { background: #33CCCC; }
`;

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
  animation: ${BackgroundColorChange} 2s ease infinite;
`;

const BackImgDotToWholeContainer = styled.div`
  .background {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    animation: ${DotSizeAnimation} 2s linear forwards;
  }
`;

const GifContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  .gif {
    width: 50%;
  }
`;

const TextArea = styled.article`
  width: 100%;
  height: 100%;
  position: absolute;
  flex-direction: column;
  display: ${(props) => (props.imgLoad ? 'flex' : 'none')};
`;

const TextOffset = styled.div`
  font-size: 5em;
  padding: 1rem;
  margin-bottom: 1rem;
  word-break: break-all;
  &.word1 {
    display: ${(props) => (props.wordNum.includes(1) ? 'flex' : 'none')};
  }
  &.word2 {
    display: ${(props) => (props.wordNum.includes(2) ? 'flex' : 'none')};
  }
  &.word3 {
    display: ${(props) => (props.wordNum.includes(3) ? 'flex' : 'none')};
  }
  &.word4 {
    display: ${(props) => (props.wordNum.includes(4) ? 'flex' : 'none')};
  }
  &.word5 {
    display: ${(props) => (props.wordNum.includes(5) ? 'flex' : 'none')};
  }
  &.word6 {
    position: absolute;
    display: ${(props) => (props.wordNum.includes(6) ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    font-size: 8em;
    transform: scale(1, 1);
    p {
      text-align: center;
      color: ${(props) => props.theme[props.pathName + 'AccentColor']};
    }
  }
`;

/*
bgImg : 각 공간에 대한 배경
moveUrl : 다음 이동할 공간의 주소

*/

export default function Places({ bgImg, moveToUrl, placeWords, placeWordsPos }) {
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
        {wordNum.includes(7) ? null : (
          <>
            <img src={bgImg} fetchpriority="high" decoding="auto" className="background" />
            <GifContainer>
              <img src="imgs/dance.gif" className="gif" />
            </GifContainer>
          </>
        )}
      </BackImgDotToWholeContainer>
      <TextArea imgLoad={imgLoad}>
        {wordNum.includes(7) ? (
          <PageMove nextPlace={moveToUrl} nextPlaceImg={bgImg} />
        ) : (
          placeWords.map((words, index) => (
            <TextOffset key={index} pathName={pathName[1]} wordNum={wordNum} className={`word${index + 1}`}>
              <RandomRevealText setWordNum={setWordNum} index={index} words={words} wordNum={wordNum} />
            </TextOffset>
          ))
        )}
      </TextArea>
    </BackImgContainer>
  );
}
