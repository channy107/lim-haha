'use client';
import RecentVisitedChip from '../RecentVisitedChip/RecentVisitedChip';
import styles from './recentVisited.module.css';
import useRecentVisited, { ISetRecentVisitedCookieParam } from '@/app/_hooks/useRecentVisited';

export default function RecentVisited() {
  const { visited } = useRecentVisited();

  console.info('visited', visited);
  return (
    <div className={styles.container}>
      <span>최근 방문</span>
      {visited?.map((board: ISetRecentVisitedCookieParam, index: number) => (
        <RecentVisitedChip board={board} index={index} />
      ))}
    </div>
  );
}
