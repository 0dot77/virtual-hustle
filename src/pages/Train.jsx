import places from '../db/places';
import styled from 'styled-components';

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100vh;
    object-fit: fill;
  }
`;

export default function Train() {
  return (
    <MainContainer>
      <img src={places.train.img} />
    </MainContainer>
  );
}
