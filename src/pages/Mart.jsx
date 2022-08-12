import placesdb from '../db/placesdb';
import styled from 'styled-components';
import Places from '../components/Places';

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
`;

// state 만들어보기
// 마지막 단어를 클릭했을 때의 상태를 체크해서, 백그라운드 이미지를 빼주기

export default function Mart() {
  return (
    <MainContainer>
      <Places
        bgImg={placesdb.mart.img}
        moveToUrl={'/'}
        placeWords={placesdb.mart.word}
        placeWordsPos={placesdb.mart.pos}
      />
    </MainContainer>
  );
}
