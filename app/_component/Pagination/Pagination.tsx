'use client';
import { postsPageState } from '@/app/_recoil/post/atoms';
import styles from './pagination.module.css';
import { useRecoilState } from 'recoil';

export default function Pagination() {
  const [pageState, setPageState] = useRecoilState(postsPageState);
  const { page, total } = pageState;

  const totalPages = Math.ceil(total / 5);

  const startIndex = (Math.ceil(page / 5) - 1) * 5 + 1;
  const endIndex = Math.min(startIndex + 4, totalPages);

  const handlePageChange = (newPage: number) => {
    setPageState({ ...pageState, page: newPage });
  };

  const pageItems = [];

  for (let i = startIndex; i <= endIndex; i++) {
    pageItems.push(
      <div
        className={`${styles.pageItem} ${page === i && styles.selected}`}
        key={i}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </div>,
    );
  }
  return (
    <div className={styles.container}>
      {page > 5 && (
        <div className={styles.actionButton} onClick={() => handlePageChange(startIndex - 1)}>
          이전
        </div>
      )}
      {pageItems}
      {endIndex < totalPages && (
        <div className={styles.actionButton} onClick={() => handlePageChange(endIndex + 1)}>
          다음
        </div>
      )}
    </div>
  );
}
