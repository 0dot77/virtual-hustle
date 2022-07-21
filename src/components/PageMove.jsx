import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const DotContainer = styled.section`
  width: 100%;
  height: 100%;
  background-color: #000000;
`;

const DotSizeAnimation = keyframes`
  from {
    width: 150vw;
    height : 150vh;
  }
  to {
    width:50px;
    height:50px;
  }
`;

const Dot = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  border-radius: 50%;
  background-image: url(${(props) => props.placeImg});
  background-size: cover;
  animation: ${DotSizeAnimation} 2s ease forwards;
  cursor: pointer;
`;

export default function PageMove({ nextPlace, nextPlaceImg }) {
  let navigate = useNavigate();

  function handleClickNavigate() {
    navigate(nextPlace);
  }
  return (
    <DotContainer>
      <Dot placeImg={nextPlaceImg} onClick={handleClickNavigate}></Dot>
    </DotContainer>
  );
}
