import styled from 'styled-components';
import inviteImg from '../imgs/web-invite.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MainContianer = styled.main`
  width: 100vw;
  height: 100vh;
`;

const BackgroundImageContainer = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.isHover ? 0.1 : 1)};
`;

const MainTriggerBox = styled.div`
  position: relative;
  width: 45%;
  height: 100%;
  left: 48%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const EntranceTextBox = styled.section`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.isHover ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

const EntranceText = styled.h2`
  font-family: entranceFont;
  font-size: 5rem;
`;

export default function Invite() {
  const [isHover, setIsHover] = useState(false);

  function handleMouseEnter() {
    setIsHover(true);
  }

  function handleMouseLeave() {
    setIsHover(false);
  }

  return (
    <MainContianer>
      <BackgroundImageContainer src={inviteImg} isHover={isHover} />
      <MainTriggerBox setIsHover={setIsHover} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <EntranceTextBox isHover={isHover}>
          <EntranceText>
            <Link to="/entrance">들어가기!</Link>
          </EntranceText>
        </EntranceTextBox>
      </MainTriggerBox>
    </MainContianer>
  );
}
