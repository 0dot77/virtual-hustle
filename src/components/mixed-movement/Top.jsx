import styled, { keyframes } from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #000000;
`;

const RotateFirst = keyframes`
  0%{
    transform: rotate(0deg);
  }
 100%{
    transform: rotate3d(0,0,0,180deg);
  }
`;

const Circle = styled.div`
  width: 50%;
  height: 10%;
  border: 3px solid #79f200;
  border-radius: 50%;
  background: ${(props) => props.background};

  p {
    animation: ${RotateFirst} 2s ease-in-out infinite;
    color: green;
    position: absolute;
  }
`;

export default function Top() {
  return (
    <Container>
      <Circle background={'#ffffff'}>
        <p className="train">
          지하철
          <br />
          Train
        </p>
        <p className="mart">
          지하철
          <br />
          Train
        </p>
      </Circle>
      <Circle background={'linear-gradient(180deg, #000000 0%, #E98ABD 100%)'} />
      <Circle background={'rgba(233, 138, 189, 0.5)'} />
    </Container>
  );
}
