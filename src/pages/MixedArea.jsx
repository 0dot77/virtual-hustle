import styled from 'styled-components';
import Top from '../components/mixed-movement/Top';

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function MixedArea() {
  return (
    <MainContainer>
      <Top />
    </MainContainer>
  );
}
