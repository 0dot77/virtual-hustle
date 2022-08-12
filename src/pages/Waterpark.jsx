import placesdb from '../db/placesdb';
import styled from 'styled-components';
import Places from '../components/Places';

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
`;

export default function Waterpark() {
  return (
    <MainContainer>
      <Places
        bgImg={placesdb.waterpark.img}
        moveToUrl={'/'}
        placeWords={placesdb.waterpark.word}
        placeWordsPos={placesdb.waterpark.pos}
      />
    </MainContainer>
  );
}
