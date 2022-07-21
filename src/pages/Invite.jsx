import styled from 'styled-components';

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 3rem;
  font-family: 'Places Font';
`;
export default function Invite() {
  return (
    <MainContainer>
      <Text>INVITE PAGE</Text>
    </MainContainer>
  );
}
