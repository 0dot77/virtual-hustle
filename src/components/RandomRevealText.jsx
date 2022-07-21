import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useLocation } from 'react-router-dom';

const TextOpacity = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
   }
   100% {
    opacity: 1;
   }
`;

const Text = styled.p`
  font-family: 'Places Font';
  cursor: pointer;
  color: ${(props) => (props.isClicked ? '#ffffff' : props.theme[props.path + 'Color'])};
  animation: ${TextOpacity} 2s ease-in-out infinite;
`;

export default function RandomRevealText({ index, words, wordNum, setWordNum }) {
  const [isClicked, setIsClicked] = useState(false);
  const loc = useLocation();
  const pathName = loc.pathname.split('/'); //현재 path 추출
  function handleClicked(index) {
    if (!wordNum.includes(index + 2)) {
      setWordNum([...wordNum, index + 2]);
    }
    setIsClicked((current) => !current);
  }
  return (
    <Text
      onClick={() => {
        handleClicked(index);
      }}
      isClicked={isClicked}
      path={pathName[1]}
    >
      {isClicked ? words[1] : words[0]}
    </Text>
  );
}
