import styled from 'styled-components';
import { useState } from 'react';
import PageMove from './PageMove';
import RandomRevealText from './RandomRevealText';

const BackImgContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
`;

const BackMoveContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #000000;
`;

const TextArea = styled.article`
  width: 100%;
  height: 100%;
`;

const TextOffset = styled.div`
  position: absolute;
  padding: 1rem;
  font-size: 4rem;
  overflow: hidden;
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
    display: ${(props) => (props.wordNum.includes(6) ? 'normal' : 'none')};
  }
`;

/*
bgImg : 각 공간에 대한 배경
moveUrl : 다음 이동할 공간의 주소

*/

export default function Places({ bgImg, moveToUrl, nextPlaceImg, placeWords, placeWordsPos }) {
  const [wordNum, setWordNum] = useState([1]);
  return (
    <>
      <TextArea>
        {wordNum.includes(7) ? <BackMoveContainer /> : <BackImgContainer bgImg={bgImg} />}
        {wordNum.includes(7) ? (
          <PageMove nextPlace={moveToUrl} nextPlaceImg={nextPlaceImg} />
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
              wordNum={wordNum}
              className={`word${index + 1}`}
            >
              <RandomRevealText setWordNum={setWordNum} index={index} words={words} wordNum={wordNum} />
            </TextOffset>
          ))
        )}
      </TextArea>
    </>
  );
}
