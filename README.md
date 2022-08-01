# 야단법석 HUSTLE 웹 - 퍼포먼스 연계 페이지

## Structure

```
Main Page
👇
Train
👇
Mart
👇
Baseball
👇
Waterpark
👇
Hangang
👇
Invite
👇
ZOOM!
```

- ## Main Font
- ## Sub pages Font

## dev-log

_2022.07.06_

- [x] 초대장 페이지 만들기
  - [x] QR 코드를 찍고 ZOOM 링크로 입장할 수 있도록

_2022.07.13_

- 페이지 UI 회의

_2022.07.14_

- [x] Main Page
  - CSS를 활용해서 작업하기
  - Random하게 색깔 바꾸기 [CSS Random color change](https://stackoverflow.com/questions/25507496/css-change-text-color-randomly)

_2022.07.15_

- [웹 폰트 최적화하기](https://velog.io/@vnthf/%EC%9B%B9%ED%8F%B0%ED%8A%B8-%EC%B5%9C%EC%A0%81%ED%99%94-%ED%95%98%EA%B8%B0)
  - 폰트를 다운받기 전에 보이는 기본 폰트가 너무 보기 싫게 팝업된다.
  - preloading을 주거나, 아예 보이지 않는 형태가 좋을 것 같다.

_2022.07.18_

- Recoil을 사용해서 click state를 메인으로 끌어냈고, 메인 페이지에서 넘어갈 때 사운드를 출력할 수 있도록 했다. (쭉 출력되는 사운드)

_2022.07.20_

- [x] 각각의 텍스트가 랜덤 위치를 갖고 나올 수 있도록 해보기
- [x] 텍스트를 클릭하면 텍스트의 내용으로 넘어갈 수 있는 애니메이션 찾고, 적용해보기
- [x] 영문 어떻게 할지?
- [x] 동일하게 사용할 수 있는 부분들 전 부 컴포넌트화 해버리기

_2022.07.21_

- [x] 텍스트 가독성이 떨어지기 때문에, 클릭한 뒤에 흰색으로 바뀐다거나.. 배경의 accent color에 맞춰서 작업해보기

_2022.07.31_

- [x] 텍스트 가독성 : 폰트 테두리
  - drop shadow로 우선 처리
- [x] 이미지 나온 뒤에 텍스트 나오도록 할 수 있나?
  - useEffect, setTimeOut을 사용해서 구현했음.
  - 로드 된 뒤에 나와야 하는 것이 아니라, 원이 커진 뒤에 나와야 하기 때문에 useEffect/setTimeOut이 조금 더 괜찮아보였음.

_2022.08.01_

- [ ] 화면 전환시의 배경색 랜덤한 쨍한 색으로...
- [ ] 이미지 로딩? 처리
  - 메인 들어갈 때 로딩 처리를 해주는 것?
  - https://codesandbox.io/s/react-image-preload-ptosn?file=/src/App.js
  - https://velog.io/@sehyunny/the-definitive-guide-to-image-optimization
    - css 부분에서 background-image가 아닌 img 태그로 변경해서 사용하기 (최적화)
    - webp 파일 혹은 avif 파일 사용하기
    - 시작 부분에서 preloading component를 만들고 페이지 진입시에 한 번에 로딩 처리하기
- [ ] 안무 조합 페이지

_Soon_
