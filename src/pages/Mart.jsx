import places from '../db/places';
import styled, { keyframes } from 'styled-components';

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
`;

const BackImgContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.placeImg});
  background-size: cover;
`;
export default function Mart() {
  return (
    <MainContainer>
      <BackImgContainer placeImg={places.mart.img} />
    </MainContainer>
  );
}
