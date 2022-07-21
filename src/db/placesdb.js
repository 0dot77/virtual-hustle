import train_1 from '../imgs/train/train.jpg';
import train_2 from '../imgs/train/train.webp';
import mart_1 from '../imgs/mart/mart.jpg';
import mart_2 from '../imgs/mart/mart.webp';
import baseball_1 from '../imgs/baseball/baseball.jpg';
import baseball_2 from '../imgs/baseball/baseball.webp';
import waterpark_1 from '../imgs/waterpark/waterpark.jpg';
import waterpark_2 from '../imgs/waterpark/waterpark.webp';
import hangang_1 from '../imgs/hangang/hangang.jpg';
import hangang_2 from '../imgs/hangang/hangang.webp';

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
    img: train_1,
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
    img: mart_1,
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
      ['Jumpers', 'Down Team is Down'],
    ],
    img: baseball_1,
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
      ['Card', 'Do you have a loyalty card?'], //!채워야함
      ['Toys', "I'm not going home until you buy me!"], //!채워야함
      ['WHAT IF WE DANCE HERE?', ''],
    ],
    img: waterpark_1,
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
      ['Drinking Game', 'filllllllit!'], //! 채워야함
      ['Busking', 'filllllllit'], //! 채워야함
      ['Trash', 'Take home to throw away'],
      ['WHAT IF WE DANCE HERE?', ''],
    ],
    img: hangang_1,
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
};

export default placesdb;
