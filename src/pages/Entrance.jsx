import styled from 'styled-components';
import voidImg from '../imgs/web-void.jpg';

const MainContianer = styled.main`
  width: 100vw;
  height: 100vh;
`;

const BackgroundImageContainer = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const QrBox = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    left: 42.5%;
    filter: contrast(1);
  }
`;

export default function Entrance() {
  return (
    <MainContianer>
      <BackgroundImageContainer src={voidImg} />
      <QrBox>
        <img
          src="https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fzoom.us%2Fj%2F2517434469%3Fpwd%3DTjJZdU9hNTUrbHVVQWFOSGpEdWJXUT09&chs=180x180&choe=UTF-8&chld=L|2"
          alt=""
        />
      </QrBox>
    </MainContianer>
  );
}
