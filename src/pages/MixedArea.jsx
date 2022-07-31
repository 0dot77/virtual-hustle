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
`;

export default function MixedArea() {
  return (
    <MainContainer>
      <DanceContainer>
        <iframe
          src="https://www.youtube.com/embed/XzRk-WT66ik?controls=0"
          height="400"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        ></iframe>
      </DanceContainer>
      <DanceContainer>
        <iframe
          height="400"
          src="https://www.youtube.com/embed/GTb9n4jSucw?controls=0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </DanceContainer>
    </MainContainer>
  );
}
