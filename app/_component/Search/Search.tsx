'use client';

import { ChangeEvent, useState } from 'react';
import styles from './search.module.css';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { postsPageState, postsSearchState } from '@/app/_recoil/post/atoms';
import { SEARCH_TYPE } from '@/app/_common/constants';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState(SEARCH_TYPE.TITLE);
  const resetPageState = useResetRecoilState(postsPageState);
  const setSearchState = useSetRecoilState(postsSearchState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
    setSearchState((prev) => ({ ...prev, searchType: e.target.value }));
  };

  const handleSearchButton = () => {
    resetPageState();
    setSearchState((prev) => ({ ...prev, search: searchTerm, searchType }));
  };

  return (
    <section className={styles.container}>
      <select className={styles.select} value={searchType} onChange={handleFilter}>
        <option value={SEARCH_TYPE.TITLE}>제목</option>
        <option value={SEARCH_TYPE.TITLE_OR_CONTENT}>제목 + 내용</option>
        <option value={SEARCH_TYPE.CONTENT}>내용</option>
      </select>

      <input className={styles.input} type="text" value={searchTerm} onChange={handleChange} />

      <div className={styles.button} onClick={handleSearchButton}>
        검색
      </div>
    </section>
  );
}
