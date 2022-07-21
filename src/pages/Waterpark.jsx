import placesdb from '../db/placesdb';
import styled from 'styled-components';
import Places from '../components/Places';
import BackImgDot from '../components/BackImgDot';

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
`;

export default function Waterpark() {
  return (
    <MainContainer>
      <BackImgDot currentImg={placesdb.waterpark.img} />
      <Places
        bgImg={null}
        moveToUrl={'/hangang'}
        nextPlaceImg={placesdb.hangang.img}
        placeWords={placesdb.waterpark.word}
        placeWordsPos={placesdb.waterpark.pos}
      />
    </MainContainer>
  );
}
