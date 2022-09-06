import styled, { keyframes } from 'styled-components';
import { useState } from 'react';
import placesdb from '../../db/placesdb';
import { topDance } from '../../db/atom';
import { bottomDance } from '../../db/atom';
import { useRecoilState } from 'recoil';
import { mixedAreaCircleBackground } from '../../db/atom';

/**
 * ANIMATION
 */

const OpacityAnimation = keyframes`
 0% {
   opacity: 0;
 }

 50% {
   opacity: 1;
 }

 100% {
  opacity: 0;
 }
`;

const BridgeOpacityAnimation = keyframes`
0% {
  opacity: 0;
}

100% {
  opacity: 1;
}
`;

const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #000000;
`;

const Refresh = styled.p`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  color: white;
  margin-top: 1rem;
  margin-right: 1rem;
`;

const TopCircleContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .mart,
  .train,
  .baseball,
  .water,
  .hangang {
    animation: ${(props) => (props.topCircleBackground === null ? OpacityAnimation : null)} 2s ease-in-out infinite;
  }
  p {
    cursor: pointer;
  }
`;

const MiddleCircleContainer = styled(TopCircleContainer)``;

const BottomCircleContainer = styled(TopCircleContainer)``;

const TopTextContainer = styled.div`
  display: flex;
  width: 100%;
  color: #79f200;
  justify-content: space-evenly;
  text-align: center;
`;

const BottomTextContainer = styled(TopTextContainer)`
  p {
    padding-top: 0.5rem;
  }
`;

const SelectCircleContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #79f200;
  text-align: center;

  p:first-child {
    margin-right: 1rem;
  }

  p:last-child {
    margin-left: 1rem;
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

const Circle = styled(SelectCircle)`
  width: 50%;
  height: 100%;
  border: 3px solid #79f200;
  border-radius: 50%;
  background: ${(props) => props.background};
`;

const FirstBridge = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  div {
    display: ${(props) => (props.firstToSecond ? 'flex' : 'none')};
    height: 20%;
    width: 2.5rem;
    border-radius: 50%;
    background-color: #79f200;
    box-shadow: 0px 10px 10px rgba(255, 255, 255, 0.25);
  }

  .first-cirlce {
    animation: ${BridgeOpacityAnimation} 1s ease forwards;
  }

  .second-circle {
    animation: ${BridgeOpacityAnimation} 2s ease forwards;
  }

  .third-circle {
    animation: ${BridgeOpacityAnimation} 3s ease forwards;
  }
`;

const SecondBridge = styled(FirstBridge)`
  div {
    display: ${(props) => (props.secondToThird ? 'flex' : 'none')};
  }
`;

export default function Top({ handleButtonClicked }) {
  const [topCircleBackground, setTopCircleBackground] = useRecoilState(mixedAreaCircleBackground);
  const [firstToSecond, setFirstToSecond] = useState(false);
  const [secondToThird, setSecondToThird] = useState(false);

  //recoil
  const [topDanceSeleted, setTopDanceSelected] = useRecoilState(topDance);
  const [bottomDanceSeleted, setBottomDanceSelected] = useRecoilState(bottomDance);

  function firstBridgeAndTextOpacity() {
    setFirstToSecond(true);
  }

  function secondBridgeAndTextOpacity() {
    setSecondToThird(true);
  }

  return (
    <Container>
      <Refresh
        onClick={() => {
          window.location.reload();
        }}
      >
        RESET
      </Refresh>
      <TopCircleContainer topCircleBackground={topCircleBackground}>
        <TopTextContainer>
          <p
            className="mart"
            onClick={() => {
              setTopCircleBackground(1);
              firstBridgeAndTextOpacity();
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
              firstBridgeAndTextOpacity();
            }}
          >
            야구장
            <br />
            Baseball
          </p>
        </TopTextContainer>
        <SelectCircleContainer>
          <p
            className="train"
            onClick={() => {
              setTopCircleBackground(0);
              firstBridgeAndTextOpacity();
            }}
          >
            지하철
            <br />
            Train
          </p>
          <SelectCircle backgroundImg={`${placesdb.imgArr[`${topCircleBackground}`]}`} />
          <p
            className="water"
            onClick={() => {
              setTopCircleBackground(3);
              firstBridgeAndTextOpacity();
            }}
          >
            워터파크
            <br />
            Waterpark
          </p>
        </SelectCircleContainer>
        <BottomTextContainer>
          <p
            className="hangang"
            onClick={() => {
              setTopCircleBackground(4);
              firstBridgeAndTextOpacity();
            }}
          >
            한강
            <br />
            Hangang
          </p>
        </BottomTextContainer>
      </TopCircleContainer>
      <FirstBridge firstToSecond={firstToSecond}>
        <div className="first-circle"></div>
        <div className="second-circle"></div>
        <div className="third-circle"></div>
      </FirstBridge>
      <MiddleCircleContainer>
        <TopTextContainer>
          <p
            onClick={() => {
              secondBridgeAndTextOpacity();
              if (topDanceSeleted === null) {
                setTopDanceSelected('top1');
              }
            }}
            onMouseEnter={() => {}}
          >
            상체1
            <br />
            TOP1
          </p>
          <p
            onClick={() => {
              secondBridgeAndTextOpacity();
              if (topDanceSeleted === null) {
                setTopDanceSelected('top2');
              }
            }}
          >
            상체2
            <br />
            TOP2
          </p>
        </TopTextContainer>
        <SelectCircleContainer>
          <p
            onClick={() => {
              secondBridgeAndTextOpacity();
              if (topDanceSeleted === null) {
                setTopDanceSelected('top4');
              }
            }}
          >
            상체4
            <br />
            TOP4
          </p>
          <Circle background={'linear-gradient(180deg, #000000 0%, #E98ABD 100%)'} />
          <p
            onClick={() => {
              secondBridgeAndTextOpacity();
              if (topDanceSeleted === null) {
                setTopDanceSelected('top3');
              }
            }}
          >
            상체3
            <br />
            TOP3
          </p>
        </SelectCircleContainer>
      </MiddleCircleContainer>
      <SecondBridge secondToThird={secondToThird}>
        <div className="first-circle"></div>
        <div className="second-circle"></div>
        <div className="third-circle"></div>
      </SecondBridge>
      <BottomCircleContainer>
        <TopTextContainer>
          <p
            onClick={() => {
              if (firstToSecond && secondToThird) {
                handleButtonClicked();
              }
              if (bottomDanceSeleted === null) {
                setBottomDanceSelected('bottom1');
              }
            }}
          >
            하체1
            <br />
            BOTTOM1
          </p>
          <p
            onClick={() => {
              if (firstToSecond && secondToThird) {
                handleButtonClicked();
              }
              if (bottomDanceSeleted === null) {
                setBottomDanceSelected('bottom2');
              }
            }}
          >
            하체2
            <br />
            BOTTOM2
          </p>
        </TopTextContainer>
        <SelectCircleContainer>
          <p
            onClick={() => {
              if (firstToSecond && secondToThird) {
                handleButtonClicked();
              }
              if (bottomDanceSeleted === null) {
                setBottomDanceSelected('bottom4');
              }
            }}
          >
            하체4
            <br />
            BOTTOM4
          </p>
          <Circle background={'rgba(233, 138, 189, 0.5)'} />
          <p
            onClick={() => {
              if (firstToSecond && secondToThird) {
                handleButtonClicked();
              }
              if (bottomDanceSeleted === null) {
                setBottomDanceSelected('bottom3');
              }
            }}
          >
            하체3
            <br />
            BOTTOM3
          </p>
        </SelectCircleContainer>
      </BottomCircleContainer>
    </Container>
  );
}
