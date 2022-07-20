import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const DotColorChange = keyframes`
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
`;

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
  /* background-color: ${DotColorChange} 0.5s infinite; */
  animation: ${DotSizeAnimation} 2s ease forwards;

  a {
    width: inherit;
    height: inherit;
    display: block;
  }
`;

export default function PageMove({ mart, placeImg }) {
  return (
    <DotContainer>
      <Dot placeImg={placeImg}>
        <Link to={mart}></Link>
      </Dot>
    </DotContainer>
  );
}
