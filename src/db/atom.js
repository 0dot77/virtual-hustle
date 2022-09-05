import { atom } from 'recoil';

export const clickState = atom({
  key: 'clickState',
  default: false,
});

export const fufilled = atom({
  key: 'fulfilled',
  default: false,
});

export const topDance = atom({
  key: 'topDance',
  default: null,
});

export const bottomDance = atom({
  key: 'bottomDance',
  default: null,
});
