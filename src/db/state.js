import create from 'zustand';

export const useStore = create((set) => ({
  current: ['train'],
  setCurrent: (input) => set((state) => ({ current: [...state.current, input] })),
}));

export const useClicked = create((set) => ({
  clicked: false,
  setClicked: () => set((state) => ({ clicked: !state.clicked })),
}));
