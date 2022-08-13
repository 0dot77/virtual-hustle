import { atom } from 'recoil';

export const clickState = atom({
  key: 'clickState',
  default: false,
});

export const fufilled = atom({
  key: 'fulfilled',
  default: false,
});
