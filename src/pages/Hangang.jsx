import placesdb from '../db/placesdb';
import styled from 'styled-components';
import MoveToInvite from '../components/MoveToInvite';

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
`;

export default function Hangang() {
  return (
    <MainContainer>
      <MoveToInvite
        bgImg={placesdb.hangang.img}
        moveToUrl={'/invite'}
        nextPlaceImg={placesdb.hangang.img}
        placeWords={placesdb.hangang.word}
        placeWordsPos={placesdb.hangang.pos}
      />
    </MainContainer>
  );
}
