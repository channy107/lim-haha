import { atom } from 'recoil';

const postsSearchState = atom<{ search?: string; searchType?: string }>({
  key: 'postsSearchState',
  default: { search: undefined, searchType: undefined },
});

export { postsSearchState };
