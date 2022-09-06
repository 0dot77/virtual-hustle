import { useRecoilState } from 'recoil';
import styled, { keyframes } from 'styled-components';
import { topDance, bottomDance } from '../../db/atom';
import { mixedAreaCircleBackground } from '../../db/atom';
import placesdb from '../../db/placesdb';

const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #000000;
`;

const Bridge = styled.div`
  width: 100%;
  height: 15%;
  z-index: 100;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  div {
    margin-top: 1rem;
    display: flex;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background-color: #79f200;
    box-shadow: 0px 10px 10px rgba(255, 255, 255, 0.25);
  }
`;

const TopCirclesContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

const Circle = styled.div`
  width: 70%;
  height: 50%;
  background: linear-gradient(180deg, #000000 0%, #e98abd 100%);
  border: 3px solid #79f200;
  border-radius: 50%;

  &.top-first-circle {
    transform: rotate(-12.81deg);
    margin-bottom: 5rem;
    margin-left: 10rem;
    background-image: ${(props) => `url(${props.background})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &.top-second-circle {
    opacity: 0.5;
    margin-top: 5rem;
    margin-right: 3rem;
    transform: rotate(-12.81deg);
  }

  &.top-third-circle {
    background: linear-gradient(180deg, #000000 0%, #e98abd 100%);
    transform: rotate(-174.18deg);
  }

  &.top-forth-circle {
    background: linear-gradient(180deg, #000000 0%, #e98abd 100%);
    margin-bottom: 10rem;
    opacity: 0.5;
    margin-left: 10rem;
    transform: rotate(-174.18deg);
    background-image: ${(props) => `url(${props.background})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const BottomCirclesContainer = styled(TopCirclesContainer)`
  top: 50%;
`;

const DanceContainer = styled.div`
  position: absolute;
  z-index: 1000;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  video {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

const orbitAnimationTop = keyframes`
  from {
      transform: rotateY(0) translateZ(100px);
      animation-timing-function: linear;
  }

  to {
      transform: rotateY(360deg) translateZ(100px);
      animation-timing-function: linear;
  }
`;

const orbitAnimationBottom = keyframes`
  from {
    transform: rotateY(360deg) translateZ(100px);
      animation-timing-function: linear;
  }

  to {

    transform: rotateY(0) translateZ(100px);
      animation-timing-function: linear;
  }
`;

const TopDance = styled.div`
  background: #000000;
  border: 3px solid #00ff00;
  width: 12rem;
  height: 17rem;
  margin-left: 15rem;
  animation: ${orbitAnimationTop} 10s ease infinite;
`;

const BottomDance = styled.div`
  background: #000000;
  position: absolute;
  border: 3px solid #00ff00;
  width: 12rem;
  height: 17rem;
  margin-top: 16rem;
  animation: ${orbitAnimationBottom} 10s ease infinite;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-style: italic;
    color: #00ff00;
    cursor: pointer;
  }
`;

export default function Bottom({ handleButtonScrollTop }) {
  const [userSelectedBottomDance, resetSelectedBottomDance] = useRecoilState(bottomDance);
  const [userSelectedTopDance, resetSelectedTopDance] = useRecoilState(topDance);
  const [circleBackground] = useRecoilState(mixedAreaCircleBackground);

  return (
    <Container>
      <Bridge>
        <div className="first-circle"></div>
        <div className="second-circle"></div>
        <div className="third-circle"></div>
      </Bridge>
      <DanceContainer>
        <TopDance>
          {userSelectedTopDance ? (
            <video className="top" alt="top dance" autoPlay={true}>
              <source src={`imgs/mixed/${userSelectedTopDance}.mp4`} type="video/mp4" />
            </video>
          ) : null}
        </TopDance>
        <BottomDance>
          {userSelectedBottomDance ? (
            <video className="top" alt="top dance" autoPlay={true}>
              <source src={`imgs/mixed/${userSelectedBottomDance}.mp4`} type="video/mp4" />
            </video>
          ) : null}
        </BottomDance>
      </DanceContainer>
      <TopCirclesContainer>
        <Circle className="top-first-circle" background={`${placesdb.imgArr[`${circleBackground}`]}`} />
      </TopCirclesContainer>
      <TopCirclesContainer>
        <Circle className="top-second-circle" />
      </TopCirclesContainer>
      <BottomCirclesContainer>
        <Circle className="top-third-circle" />
      </BottomCirclesContainer>
      <BottomCirclesContainer>
        <Circle className="top-forth-circle" background={`${placesdb.imgArr[`${circleBackground}`]}`} />
      </BottomCirclesContainer>
      <Footer>
        <p
          onClick={() => {
            handleButtonScrollTop();
            resetSelectedBottomDance(null);
            resetSelectedTopDance(null);
          }}
        >
          TOP
        </p>
      </Footer>
    </Container>
  );
}
