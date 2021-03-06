import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Router from './Router';
import mainfont_italic from './fonts/comichustletbs_itabold.ttf';
import mainfont_1 from './fonts/comichustletbs.ttf';
import mainfont_2 from './fonts/comichustletbsital.ttf';
import subFont from './fonts/appleberry.ttf';
import { isMobile } from 'react-device-detect';
import Mobile from './pages/Mobile';
import { useRecoilState } from 'recoil';
import sampleSound from './sound/sample.wav';
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


/* FONT */
@font-face {
  font-family: 'Main Font';
  font-style: normal;
  font-weight: 400;
  src: local('Main Font'),
  url(${mainfont_1}) format("truetype"),
  url(${mainfont_2}) format("truetype"),
  url(${mainfont_italic}) format("truetype");
}

@font-face {
  font-family: 'Places Font';
  font-style: normal;
  font-weight: 400;
  src: local('Places Font'),
  url(${subFont}) format("truetype");
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
	line-height: 1;
	overflow: hidden;
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
            {clicked ? <audio src={sampleSound} muted autoPlay loop></audio> : null}
          </>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
