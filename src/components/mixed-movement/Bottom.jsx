import styled, { keyframes } from 'styled-components';

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
`;

const CircleRotationTop = keyframes`
 0%{
  transform: translateX(0) rotateX(0deg);
 }
 
 25%{
  transform: translateX(-5rem) rotateY(45deg);
 }

 50%{
  transform: translateX(0) rotateY(0deg);
 }

 75%{
  transform: translateX(5rem) rotateY(-45deg);
 }

 100%{
  transform: translateX(0) rotateY(0deg);
 }
`;

const CircleRotationBottom = keyframes`
 0%{
  transform: translateX(0) rotateX(0deg);
 }
 
 25%{
  transform: translateX(5rem) rotateY(45deg);
 }

 50%{
  transform: translateX(0) rotateY(0deg);
 }

 75%{
  transform: translateX(-5rem) rotateY(-45deg);
 }

 100%{
  transform: translateX(0) rotateY(0deg);
 }
`;

const TopDance = styled.div`
  background: #000000;
  border: 3px solid #00ff00;
  width: 12rem;
  height: 17rem;
  margin-left: 15rem;
  animation: ${CircleRotationTop} 3s ease infinite;
`;

const BottomDance = styled.div`
  background: #000000;
  position: absolute;
  border: 3px solid #00ff00;
  width: 12rem;
  height: 17rem;
  margin-top: 10rem;
  animation: ${CircleRotationBottom} 3s ease infinite;
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
  return (
    <Container>
      <Bridge>
        <div className="first-circle"></div>
        <div className="second-circle"></div>
        <div className="third-circle"></div>
      </Bridge>
      <DanceContainer>
        <TopDance></TopDance>
        <BottomDance></BottomDance>
      </DanceContainer>
      <TopCirclesContainer>
        <Circle className="top-first-circle" />
      </TopCirclesContainer>
      <TopCirclesContainer>
        <Circle className="top-second-circle" />
      </TopCirclesContainer>
      <BottomCirclesContainer>
        <Circle className="top-third-circle" />
      </BottomCirclesContainer>
      <BottomCirclesContainer>
        <Circle className="top-forth-circle" />
      </BottomCirclesContainer>
      <Footer>
        <p onClick={handleButtonScrollTop}>TOP</p>
      </Footer>
    </Container>
  );
}
