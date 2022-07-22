import placesdb from '../db/placesdb';
import styled from 'styled-components';
import Places from '../components/Places';

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
`;

export default function Baseball() {
  return (
    <MainContainer>
      <Places
        bgImg={placesdb.baseball.img}
        moveToUrl={'/waterpark'}
        nextPlaceImg={placesdb.waterpark.img}
        placeWords={placesdb.baseball.word}
        placeWordsPos={placesdb.baseball.pos}
      />
    </MainContainer>
  );
}
