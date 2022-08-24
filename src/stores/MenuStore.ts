import create from 'zustand';
import { persist } from 'zustand/middleware';

export type Menu =
  | 'overview'
  | 'wallet'
  | 'member'
  | 'agent'
  | 'instant'
  | 'trade'
  | 'chat'
  | 'valid-code';

type MenuStore = {
  current: Menu;
  setCurrent: (menu: Menu) => void;
};

export const useMenu = create<
  MenuStore,
  [['zustand/persist', { siteId: string; email: string; siteUrl: string }]]
>(
  persist((set) => ({
    current: 'overview',
    setCurrent: (menu: Menu) => set(() => ({ current: menu })),
  }))
);
