'use client';

import { ChangeEvent, useState } from 'react';
import styles from './search.module.css';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { postsSearchState } from '@/app/_atoms/posts/search';
import { postsPageState } from '@/app/_atoms/posts/page';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('title');
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
        <option value="title">제목</option>
        <option value="titleOrContent">제목 + 내용</option>
        <option value="content">내용</option>
      </select>

      <input className={styles.input} type="text" value={searchTerm} onChange={handleChange} />

      <div className={styles.button} onClick={handleSearchButton}>
        검색
      </div>
    </section>
  );
}
