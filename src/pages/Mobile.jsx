import styled from 'styled-components';
const MainContianer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Notice = styled.p`
  font-size: 2rem;
  font-style: italic;
  text-align: center;
`;

export default function Mobile() {
  return (
    <MainContianer>
      <Notice>MOBILE IS NOT SUPPORTED, PLEASE ACCESS THE DESKTOP!</Notice>
    </MainContianer>
  );
}
