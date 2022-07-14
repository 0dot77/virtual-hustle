import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MainContianer = styled.main`
  width: 100vw;
  height: 100vh;
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
  /* border: 1px solid red; */
  background-color: #ff0000;
  animation: ${DotColorChange} 1s infinite linear;
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
  align-items: ${(props) => (props.clicked ? `center` : null)};
  left: 50%;
  top: ${(props) => (props.clicked ? `50%` : `60%`)};
  transform: translate(-50%, -50%);
  width: ${(props) => (props.clicked ? `500px` : `200px`)};
  height: 100px;
  /* border: 1px solid red; */
`;

const EntranceText = styled.p`
  font-style: italic;
  text-align: center;
`;

const NextPageText = styled.p`
  font-style: italic;
  text-align: center;
  animation: ${TextOpacityAnimation} 1s infinite;
  font-size: 5rem;
  font-weight: 700;
  color: #ffffff;
`;

export default function Entrance() {
  const [clicked, setClicked] = useState(false);

  function clickCircleSize({ currentTarget }) {
    gsap.to(currentTarget, {
      width: '150vw',
      height: '150vh',
      backgroundColor: '#000000',
      duration: 1,
    });

    // 클릭했을 때 텍스트 바뀌도록
    setClicked((current) => !current);
  }

  return (
    <MainContianer>
      <Dot onClick={clickCircleSize} />
      <EntranceContainer clicked={clicked}>
        {clicked ? (
          <Link to={`/train`}>
            <NextPageText>LET'S DANCE!</NextPageText>
          </Link>
        ) : (
          <EntranceText>CAN WE DANCE HERE?</EntranceText>
        )}
      </EntranceContainer>
    </MainContianer>
  );
}
