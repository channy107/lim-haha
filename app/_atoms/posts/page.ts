import { atom } from 'recoil';

const postsPageState = atom<{ page: number; total: number }>({
  key: 'postsPageState',
  default: { page: 1, total: 0 },
});

export { postsPageState };
