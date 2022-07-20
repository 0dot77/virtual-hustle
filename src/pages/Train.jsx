import places from '../db/places';
import styled, { keyframes, css } from 'styled-components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageMove from '../components/PageMove';
import RandomRevealText from '../components/RandomRevealText';

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
`;

const BackImgContainer = styled.section`
  width: 100%;
  height: 100vh;
  filter: saturate(30%);
  background-image: url(${(props) => props.placeImg});
  background-size: cover;
`;

/*
text animation
https://codepen.io/yemon/pen/pWoROm
*/

const TextContainer = styled.article`
  width: 100%;
  height: 100%;
`;

const TextKeyFrames = keyframes`
    0% {
      margin-top: -270px;
    }
    5% {
      margin-top: -180px;
    }
    33% {
      margin-top: -180px;
    }
    38% {
      margin-top: -90px;
    }
    66% {
      margin-top: -90px;
    }
    71% {
      margin-top: 0px;
    }
    100% {
      margin-top: 0px;
    }
`;

const TextAnimation = () =>
  css`
    animation: ${TextKeyFrames} 2s forwards;
  `;

const TextOffset = styled.div`
  position: absolute;
  padding: 1rem;
  font-size: 5rem;
  border: 1px solid red;
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

export default function Train() {
  const [wordNum, setWordNum] = useState([1]);

  // MAP 사용 -> 개별 요소 변경해주기
  // https://velog.io/@ljo094822/react-map%ED%95%A8%EC%88%98-%EC%82%AC%EC%9A%A9%EC%8B%9C-%ED%81%B4%EB%A6%AD%EC%8B%9C-%EC%8A%A4%ED%83%80%EC%9D%BC-%EB%B0%94%EA%BE%B8%EA%B8%B0
  return (
    <MainContainer>
      <BackImgContainer placeImg={places.train.img}>
        <TextContainer>
          {wordNum.includes(7) ? (
            <PageMove mart={'/mart'} placeImg={places.train.img} />
          ) : (
            places.train.word.map((words, index) => (
              <TextOffset
                key={index}
                style={{
                  left: `${
                    places.train.pos[index][0] > window.screen.availWidth
                      ? places.train.pos[index][0] - 100
                      : places.train.pos[index][0]
                  }px`,
                  top: `${places.train.pos[index][1]}px`,
                }}
                wordNum={wordNum}
                className={`word${index + 1}`}
              >
                <RandomRevealText setWordNum={setWordNum} index={index} words={words} wordNum={wordNum} />
              </TextOffset>
            ))
          )}
        </TextContainer>
      </BackImgContainer>
    </MainContainer>
  );
}
