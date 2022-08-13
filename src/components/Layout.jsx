import styled from 'styled-components';
import { useStore } from '../db/state';

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
  svg {
    width: 2rem;
    height: 2rem;
    color: #ffffff;
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
    background-image: ${(props) => (props.current.includes('mart') ? `url('imgs/train.webp')` : null)};
  }
  &:nth-child(2) {
    background-image: ${(props) => (props.current.includes('baseball') ? `url('imgs/mart.webp')` : null)};
  }
  &:nth-child(3) {
    background-image: ${(props) => (props.current.includes('waterpark') ? `url('imgs/baseball.webp')` : null)};
  }
  &:nth-child(4) {
    background-image: ${(props) => (props.current.includes('hangang') ? `url('imgs/waterpark.webp')` : null)};
  }
  &:last-child {
    background-image: ${(props) => (props.current.includes('go') ? `url('imgs/hangang.webp')` : null)};
  }
`;

export default function Layout({ children }) {
  const { current } = useStore();
  return (
    <MainContainer>
      <HeaderContainer>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </svg>
      </HeaderContainer>
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
