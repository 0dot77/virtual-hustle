import Places from '../components/Places';
import styled from 'styled-components';
import placesdb from '../db/placesdb';

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
`;

export default function Train() {
  return (
    <MainContainer>
      <Places
        bgImg={placesdb.train.img}
        moveToUrl={'/mart'}
        nextPlaceImg={placesdb.mart.img}
        placeWords={placesdb.train.word}
        placeWordsPos={placesdb.train.pos}
      />
    </MainContainer>
  );
}
