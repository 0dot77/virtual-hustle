import placesdb from '../db/placesdb';
import styled from 'styled-components';
// import MoveToInvite from '../components/MoveToInvite';
import Places from '../components/Places';

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
`;

export default function Hangang() {
  return (
    <MainContainer>
      <Places
        bgImg={placesdb.hangang.img}
        moveToUrl={'/invite'}
        placeWords={placesdb.hangang.word}
        placeWordsPos={placesdb.hangang.pos}
      />
    </MainContainer>
  );
}
