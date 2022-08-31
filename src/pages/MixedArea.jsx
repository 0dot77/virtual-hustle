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

export default function MixedArea() {
  return (
    <MainContainer>
      <Top handleButtonClicked={handleButtonClicked} />
      <Bottom handleButtonScrollTop={handleButtonScrollTop} />
    </MainContainer>
  );
}
