import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Router from './Router';
import { isMobile } from 'react-device-detect';
import Mobile from './pages/Mobile';
import { useRecoilState } from 'recoil';
import { clickState } from './db/atom';
import { defaultTheme } from './theme';

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
   */

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

html {
  box-sizing: border-box;
  width:100vw;
  height:100vh;
}


/* FONT */
@font-face {
  font-family: 'Main Font';
  font-style: normal;
  font-weight: 400;
  src: local('Main Font'),
  url('fonts/comichustletbs.ttf') format("truetype"),
  url('fonts/comichustletbsital.ttf') format("truetype"),
  url('fonts/comichustletbs_itabold.ttf') format("truetype");
}

@font-face {
  font-family: 'Places Font';
  font-style: normal;
  font-weight: 400;
  src: local('Places Font'),
  url('fonts/appleberry.ttf') format("truetype");
}

a {
  text-decoration: none;
  color: black;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1.2;
	overflow: hidden;
  width:100%;
  height:100%;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

function App() {
  const [clicked] = useRecoilState(clickState);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        {isMobile ? (
          <Mobile />
        ) : (
          <>
            <Router />
            {clicked ? <audio src="sound/sample.wav" muted autoPlay loop></audio> : null}
          </>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
