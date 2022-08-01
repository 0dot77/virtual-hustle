import styled, { keyframes } from 'styled-components';
import { useState } from 'react';

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Places Font';
`;

const DotSizeAnimation = keyframes`
  from {
    width: 150vw;
    height : 150vh;
  }
  to {
    width:50px;
    height:50px;
  }
`;

const TextOpacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ExclamationMark = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  font-size: 7rem;
`;

const Dot = styled.div`
  position: inherit;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  border-radius: 50%;
  background-image: url(${(props) => props.placeImg});
  background-size: cover;
  animation: ${DotSizeAnimation} 2s ease forwards;
  cursor: pointer;
`;

// const Trapzoid = styled.div`
//   position: inherit;
//   transform: translate(-50%, -50%);
//   left: 50%;
//   top: 25%;
//   border-top: 400px solid black;
//   border-left: 50px solid transparent;
//   border-right: 50px solid transparent;
//   height: 0;
//   width: 100px;
// `;

const Text1 = styled.p`
  position: inherit;
  transform: translate(-50%, -50%);
  left: 30%;
  top: 45%;
  animation: ${TextOpacity} 3s ease forwards;
`;

const TextShake = keyframes`
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

const Text2 = styled.p`
  position: inherit;
  transform: translate(-50%, -50%);
  left: 12%;
  top: 40%;
  animation: ${TextShake} 1s infinite;
`;

export default function Invite({ currentPlace }) {
  const [showText, setShowText] = useState(false);
  return (
    <MainContainer>
      <ExclamationMark>
        <Dot
          placeImg={currentPlace}
          onMouseEnter={() => {
            setShowText((current) => !current);
          }}
          onMouseLeave={() => {
            setShowText((current) => !current);
          }}
          onClick={() => {
            window.location.href = 'http://www.worldwidelab.kr/';
          }}
        ></Dot>
        {showText ? <Text2>Go to Stage</Text2> : <Text1>Let's Dance</Text1>}
      </ExclamationMark>
    </MainContainer>
  );
}
