import styled from 'styled-components';
import { useStore } from '../db/state';
import { useState } from 'react';
import useAudio from '../hooks/useAudio';

const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #000000;

  .content {
    width: 100%;
    height: 100%;
    font-size: 5rem;
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    padding-top: 10px;
    transform: translate3d(-50%, 200%, 0);
    text-align: center;
    background-color: black;
    padding: 10px 15px;
    border-radius: 20px;

    /* block drag */
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    /* pointer */
    cursor: default;
  }
`;

const HeaderContainer = styled.header`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  display: flex;

  div {
    margin-right: 1rem;
  }

  svg {
    width: 2rem;
    height: 2rem;
    color: #ffffff;
    cursor: pointer;
    &:hover {
      color: #ff0000;
    }
    &.active {
      color: #ff0000;
    }
  }
`;

const FooterContainer = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 1rem;
  left: 0.5em;
  font-size: 2rem;
  z-index: 1000;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'LayoutFont';
`;

const Description = styled.p`
  width: 50%;
`;

const QuestionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10000;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  svg {
    width: 2rem;
    height: 2rem;
    color: #ff0000;
    cursor: pointer;
  }

  img {
    width: 80%;
    margin-bottom: 3rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
  }
`;

const ProgressContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  margin-right: 1em;
`;

const Progress = styled.div`
  width: 3rem;
  height: 3rem;
  margin-left: 0.25em;
  border: 3px solid;
  border-image: linear-gradient(45deg, purple, orange) 1;
  background-repeat: none;
  background-size: cover;
  background-position: center;
  &:first-child {
    background-image: ${(props) => (props.current.includes('mart') ? `url('imgs/container-imgs/train.webp')` : null)};
  }
  &:nth-child(2) {
    background-image: ${(props) =>
      props.current.includes('baseball') ? `url('imgs/container-imgs/mart.webp')` : null};
  }
  &:nth-child(3) {
    background-image: ${(props) =>
      props.current.includes('waterpark') ? `url('imgs/container-imgs/baseball.webp')` : null};
  }
  &:nth-child(4) {
    background-image: ${(props) =>
      props.current.includes('hangang') ? `url('imgs/container-imgs/waterpark.webp')` : null};
  }
  &:last-child {
    background-image: ${(props) => (props.current.includes('go') ? `url('imgs/container-imgs/hangang.webp')` : null)};
  }
`;

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);
  return (
    <div onClick={toggle}>
      {playing ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            clip-rule="evenodd"
          />
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </svg>
      )}
    </div>
  );
};

export default function Layout({ children }) {
  const { current } = useStore();
  const [modal, setModal] = useState(false);

  return (
    <MainContainer>
      <HeaderContainer>
        <Player url="sound/sample.wav" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={modal ? 'active' : null}
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => {
            setModal(true);
          }}
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </svg>
      </HeaderContainer>
      {modal ? (
        <QuestionContainer>
          <img src="imgs/explain.webp" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            onClick={() => {
              setModal(false);
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </QuestionContainer>
      ) : null}

      {children}
      <FooterContainer>
        <Description>Tinkers &lt;Hustle&gt; | Ars Electronica </Description>
        <ProgressContainer>
          <Progress current={current} />
          <Progress current={current} />
          <Progress current={current} />
          <Progress current={current} />
          <Progress current={current} />
        </ProgressContainer>
      </FooterContainer>
    </MainContainer>
  );
}
