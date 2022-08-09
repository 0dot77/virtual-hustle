import styled from 'styled-components';
import { ReactComponent as Wait } from '../imgs/wait.svg';
import { useEffect, useRef, useState } from 'react';

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
`;

const FooterContainer = styled.footer`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  bottom: 1rem;
  width: 80%;
  height: 150px;
  border-radius: 1rem;
`;

const FooterSvgContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  svg {
  }
`;

const FooterCircleContainer = styled.div`
  width: 100%;
  height: 35%;
  background-color: darkcyan;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const FooterCirlce = styled.div`
  width: 40px;
  height: 40px;
  background-color: aquamarine;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

export default function Layout({ children }) {
  const observeMainContainerSize = useRef(null);
  const footerContainerSize = useRef(null);
  const [footerSize, setFooterSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleFooterResize() {
      setFooterSize({
        width: footerContainerSize.clientWidth,
        height: footerContainerSize.clientHeight,
      });
    }
    window.addEventListener('resize', handleFooterResize);
    handleFooterResize();

    return () => window.addEventListener('resize', handleFooterResize);
  }, []);
  console.log(footerSize);

  return (
    <MainContainer ref={observeMainContainerSize}>
      {children}
      <FooterContainer ref={footerContainerSize}>
        {footerSize.width}px
        <FooterSvgContainer>
          <Wait width={100} height={100} />
          <Wait width={100} height={100} />
          <Wait width={100} height={100} />
          <Wait width={100} height={100} />
          <Wait width={100} height={100} />
        </FooterSvgContainer>
        <FooterCircleContainer>
          <FooterCirlce />
          <FooterCirlce />
          <FooterCirlce />
          <FooterCirlce />
          <FooterCirlce />
        </FooterCircleContainer>
      </FooterContainer>
    </MainContainer>
  );
}
