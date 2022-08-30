import styled, { keyframes } from 'styled-components';
import { useState } from 'react';
import placesdb from '../../db/placesdb';

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #000000;
`;

const CircleContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  p {
    color: #79f200;
    position: absolute;
    text-align: center;
    cursor: pointer;
  }

  .train {
    margin-right: 57rem;
    transform: translateY(2rem);
  }

  .mart {
    margin-right: 25rem;
    transform: translateY(-3rem);
  }

  .baseball {
    margin-left: 25rem;
    transform: translateY(-3rem);
  }

  .water {
    margin-left: 58rem;
    transform: translateY(2rem);
  }

  .hangang {
    transform: translateY(7rem);
  }
`;

const SelectCircle = styled.div`
  width: 50%;
  height: 100%;
  border: 3px solid #79f200;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.backgroundImg});
`;
const Circle = styled.div`
  width: 50%;
  height: 100%;
  border: 3px solid #79f200;
  border-radius: 50%;
  background: ${(props) => props.background};
`;

export default function Top() {
  const [topCircleBackground, setTopCircleBackground] = useState(null);
  const [firstToSecond, setFirstToSecond] = useState(false);
  return (
    <Container>
      <CircleContainer>
        <p
          className="train"
          onClick={() => {
            setTopCircleBackground(0);
            setFirstToSecond((current) => !current);
          }}
        >
          지하철
          <br />
          Train
        </p>
        <p
          className="mart"
          onClick={() => {
            setTopCircleBackground(1);
          }}
        >
          마트
          <br />
          Mart
        </p>
        <p
          className="baseball"
          onClick={() => {
            setTopCircleBackground(2);
          }}
        >
          야구장
          <br />
          Baseball
        </p>
        <p
          className="water"
          onClick={() => {
            setTopCircleBackground(3);
          }}
        >
          워터파크
          <br />
          Waterpark
        </p>
        <p
          className="hangang"
          onClick={() => {
            setTopCircleBackground(4);
          }}
        >
          한강
          <br />
          Hangang
        </p>
        <SelectCircle backgroundImg={`${placesdb.imgArr[`${topCircleBackground}`]}`}></SelectCircle>
      </CircleContainer>
      <CircleContainer>
        <Circle background={'linear-gradient(180deg, #000000 0%, #E98ABD 100%)'} />
      </CircleContainer>
      <CircleContainer>
        <Circle background={'rgba(233, 138, 189, 0.5)'} />
      </CircleContainer>
    </Container>
  );
}
