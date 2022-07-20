import styled from 'styled-components';

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DanceContainer = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid red;
  filter: blur(2px);
`;

export default function Text() {
  return (
    <MainContainer>
      <DanceContainer>
        <video src="/" />
      </DanceContainer>
      <DanceContainer>
        <video src="/" />
      </DanceContainer>
    </MainContainer>
  );
}
