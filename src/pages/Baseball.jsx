import placesdb from '../db/placesdb';
import styled from 'styled-components';
import Places from '../components/Places';
import BackImgDot from '../components/BackImgDot';

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
`;

export default function Baseball() {
  return (
    <MainContainer>
      <BackImgDot currentImg={placesdb.baseball.img} />
      <Places
        bgImg={null}
        moveToUrl={'/waterpark'}
        nextPlaceImg={placesdb.waterpark.img}
        placeWords={placesdb.baseball.word}
        placeWordsPos={placesdb.baseball.pos}
      />
    </MainContainer>
  );
}
