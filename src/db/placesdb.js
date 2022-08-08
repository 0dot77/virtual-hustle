const placesdb = {
  train: {
    word: [
      ['Ticket', "We don't use this nowadays"],
      ['Rush Hour', 'Somebody help please, almost dead here!'],
      ['AIRPOD', 'My personal area in the subway'],
      ['Underground Shopping Malls', 'Most fun to look around'],
      ['HANDLE', 'Something I would not touch after all that virus'],
      ['WHAT IF WE DANCE HERE?', ''],
    ],
    img: 'imgs/train.webp',
    pos: (function () {
      const randPos = [];
      for (let i = 0; i < 6; i++) {
        randPos.push([
          Math.trunc(Math.random() * Math.abs(window.screen.availWidth - 200)),
          Math.trunc(Math.random() * Math.abs(window.screen.availHeight - 200)),
        ]);
      }
      return randPos;
    })(),
  },
  mart: {
    word: [
      ['Cart', "I didn't put that in..you!"],
      ['Tasting Stall', 'A too small piece'],
      ['Sales', 'Look for the cheapest'],
      ['Card', 'Do you have a loyalty card?'],
      ['Toys', "I'm not going home until you buy me!"],
      ['WHAT IF WE DANCE HERE?', ''],
    ],
    img: 'imgs/mart.webp',
    pos: (function () {
      const randPos = [];
      for (let i = 0; i < 6; i++) {
        randPos.push([
          Math.trunc(Math.random() * Math.abs(window.screen.availWidth - 200)),
          Math.trunc(Math.random() * Math.abs(window.screen.availHeight - 200)),
        ]);
      }
      return randPos;
    })(),
  },
  baseball: {
    word: [
      ['Billboard', 'Ace. Lee Seung-yuop. Booyah!'],
      ['Cheering Pole', 'Homee Runn'],
      ['Drums', 'Here we go! Stomp! Stomp!'],
      ['Chimaek', 'You cannot not eat Chimaek here'],
      ['Baseball Chants', 'We want single, just a little single, S-I-N-G-L-E'],
      ['WHAT IF WE DANCE HERE?', ''],
    ],
    img: 'imgs/baseball.webp',
    pos: (function () {
      const randPos = [];
      for (let i = 0; i < 6; i++) {
        randPos.push([
          Math.trunc(Math.random() * Math.abs(window.screen.availWidth - 200)),
          Math.trunc(Math.random() * Math.abs(window.screen.availHeight - 200)),
        ]);
      }
      return randPos;
    })(),
  },
  waterpark: {
    word: [
      ['Water Slide', 'How cross your arms'],
      ['Floating Suncream', 'Seriously..? How are you all swimming here?'],
      ['Wave Pool Crowd', 'Somebody Kicked me!'],
      ['Waterproof Cell Phone', 'I prepared it for today!'],
      ['Cup Noodles', 'I knew it would be right!'],
      ['WHAT IF WE DANCE HERE?', ''],
    ],
    img: 'imgs/waterpark.webp',
    pos: (function () {
      const randPos = [];
      for (let i = 0; i < 6; i++) {
        randPos.push([
          Math.trunc(Math.random() * Math.abs(window.screen.availWidth - 200)),
          Math.trunc(Math.random() * Math.abs(window.screen.availHeight - 200)),
        ]);
      }
      return randPos;
    })(),
  },
  hangang: {
    word: [
      ['Beer', "It was 10thousand for 4 cans before... now it's 11thousand"],
      ['Delivery', 'Who ordered chicken?'],
      ['Drinking Game', 'I love Game!'],
      ['Busking', 'Feel so good!'],
      ['Trash', 'Take home to throw away'],
      ['WHAT IF WE DANCE HERE?', ''],
    ],
    img: 'imgs/hangang.webp',
    pos: (function () {
      const randPos = [];
      for (let i = 0; i < 6; i++) {
        randPos.push([
          Math.trunc(Math.random() * Math.abs(window.screen.availWidth - 200)),
          Math.trunc(Math.random() * Math.abs(window.screen.availHeight - 200)),
        ]);
      }
      return randPos;
    })(),
  },
  // img array 만들어서 미리 로딩 처리해주기
  imgArr: [
    'imgs/train.webp',
    'imgs/mart.webp',
    'imgs/baseball.webp',
    'imgs/hangang.webp',
    'imgs/waterpark.webp',
    'imgs/dance.gif',
  ],
};

export default placesdb;
