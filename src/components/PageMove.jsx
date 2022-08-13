import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const DotContainer = styled.section`
  width: 100%;
  height: 100%;
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

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }, []);
  return (
    <DotContainer>
      <Dot placeImg={nextPlaceImg}></Dot>
    </DotContainer>
  );
}
