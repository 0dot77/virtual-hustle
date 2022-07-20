import places from '../db/places';
import styled, { keyframes } from 'styled-components';

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
`;

const DotSizeAnimation = keyframes`
  from {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  to {
    width:100%;
    height:100%;
    border-radius: 0%;
  }
`;

const BackImgContainer = styled.section`
  width: 100%;
  height: 100%;
`;

const BackImgDot = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background-image: url(${(props) => props.placeImg});
  background-size: cover;
  animation: ${DotSizeAnimation} 2s ease forwards;
`;

export default function Mart() {
  return (
    <MainContainer>
      <BackImgContainer>
        <BackImgDot placeImg={places.mart.img} />
      </BackImgContainer>
    </MainContainer>
  );
}
