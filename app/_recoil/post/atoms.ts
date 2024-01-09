import { atom } from 'recoil';

const postsPageState = atom<{ page: number; total: number }>({
  key: 'postsPageState',
  default: { page: 1, total: 0 },
});

const postsSearchState = atom<{ search?: string; searchType?: string }>({
  key: 'postsSearchState',
  default: { search: undefined, searchType: undefined },
});

export { postsPageState, postsSearchState };
