import train_1 from '../imgs/train/train.jpg';
import train_2 from '../imgs/train/train.webp';
import mart_1 from '../imgs/mart/mart.jpg';
import mart_2 from '../imgs/mart/mart.webp';
const places = {
  train: {
    word: [
      ['TICKET', 'example1'],
      ['MANJU', 'example2'],
      ['AIRPOD', 'example3'],
      ['COMMUTE BY', 'example4'],
      ['HANDLE', 'example5'],
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
    word: ['TICKET', 'MANJU', 'AIRPOD', 'COMMUTE BY', 'HANDLE', 'WHAT IF WE DANCE HERE?'],
    img: mart_1,
  },
  baseball: {},
  waterpark: {},
  hangang: {},
};

export default places;
