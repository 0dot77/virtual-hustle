import create from 'zustand';

export const useStore = create((set) => ({
  current: ['train'],
  setCurrent: (input) => set((state) => ({ current: [...state.current, input] })),
}));
