import styled from 'styled-components';
import anime from 'animejs';
import Layout from '../components/Layout';
import useWindowSize from '../hooks/useWindowSize';

const Dot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: black;
`;

export default function Test() {
  const size = useWindowSize();
  return (
    <Layout>
      <Dot className="dot" />
      <p>{size.width}px</p>
      <p>{size.height}px</p>
    </Layout>
  );
}
