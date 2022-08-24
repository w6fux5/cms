import create from 'zustand';
import { persist } from 'zustand/middleware';

export const MenuItem = [
  { label: '總覽', key: 'overview' },
  { label: '錢包狀態', key: 'wallet' },
  { label: '會員資料', key: 'member' },
  { label: '代理資料', key: 'agent' },
  { label: '即時訂單', key: 'instant' },
  { label: '所有交易紀錄', key: 'trade' },
  { label: '會員對話', key: 'chat' },
  { label: '驗證碼', key: 'valid-code' },
];

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
