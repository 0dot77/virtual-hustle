import placesdb from '../db/placesdb';
import styled from 'styled-components';
import Places from '../components/Places';
import BackImgDot from '../components/BackImgDot';

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
`;

export default function Mart() {
  return (
    <MainContainer>
      <BackImgDot currentImg={placesdb.mart.img} />
      <Places
        bgImg={null}
        moveToUrl={'/baseball'}
        nextPlaceImg={placesdb.baseball.img}
        placeWords={placesdb.mart.word}
        placeWordsPos={placesdb.mart.pos}
      />
    </MainContainer>
  );
}
