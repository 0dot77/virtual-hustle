import places from '../db/places';
import styled, { keyframes } from 'styled-components';
import { useState } from 'react';

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
`;

const BackImgContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.placeImg});
  background-size: cover;
`;

const TextContainer = styled.article`
  width: 100%;
  height: 100%;
`;

const TextOpacity = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
   }

   100% {
    opacity: 1;
   }
`;

const TextColorChange = keyframes`
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
`;

const Text = styled.p`
  font-family: 'Places Font';
  padding: 1rem;
  font-size: 5rem;
  cursor: pointer;
  color: #ffffff;
  animation: ${TextOpacity} 2s ease-in-out infinite;

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
    color: ${TextColorChange};
  }
`;

export default function Train() {
  const [wordNum, setWordNum] = useState([1]);

  function handleWordNum(index) {
    if (!wordNum.includes(index + 2)) {
      setWordNum([...wordNum, index + 2]);
    }
    // index가 5일 때, 다음 링크로 이동
    if (index === 5) {
      window.location.href = '/mart';
    }
  }
  return (
    <MainContainer>
      <BackImgContainer placeImg={places.train.img}>
        <TextContainer>
          {places.train.word.map((words, index) => (
            <Text
              key={index}
              className={`word${index + 1}`}
              onClick={() => {
                handleWordNum(index);
              }}
              wordNum={wordNum}
            >
              {words}
            </Text>
          ))}
        </TextContainer>
      </BackImgContainer>
    </MainContainer>
  );
}
