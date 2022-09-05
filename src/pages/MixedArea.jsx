import styled from 'styled-components';
import Bottom from '../components/mixed-movement/Bottom';
import Top from '../components/mixed-movement/Top';

const MainContainer = styled.main`
  width: 100%;
  height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const handleButtonClicked = () => {
  window.scroll({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
};

const handleButtonScrollTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
};

// 상체와 하체 카테고리를 선택하면 아래로 스크롤이 내려갔을 때 춤이 재생되고 있도록
// recoil 사용해서 전역으로 변수 관리
// 부모 -> 자식 -> 부모 -> 자식의 왔다갔다 변수 관리는 조금 어려운 것 같다.

export default function MixedArea() {
  return (
    <MainContainer>
      <Top handleButtonClicked={handleButtonClicked} />
      <Bottom handleButtonScrollTop={handleButtonScrollTop} />
    </MainContainer>
  );
}
