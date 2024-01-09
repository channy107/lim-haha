'use client';
import useRecentVisited, { ISetRecentVisitedCookieParam } from '@/app/_hooks/useRecentVisited';
import { MouseEvent } from 'react';
import Close from '@/assets/svg/close.svg';
import Image from 'next/image';
import styles from './recentVisitedChip.module.css';
import Link from 'next/link';

interface IRecentVisitedChipProp {
  board: ISetRecentVisitedCookieParam;
  index: number;
}

export default function RecentVisitedChip({ board, index }: IRecentVisitedChipProp) {
  const { removeRecentVisited } = useRecentVisited();
  const handleClose = (event: MouseEvent, index: number) => {
    event.preventDefault();
    removeRecentVisited(index);
  };
  return (
    <Link href={board.url} className={styles.container}>
      {board.name}
      <Image
        src={Close}
        alt="close"
        width="14"
        height="14"
        onClick={(e) => handleClose(e, index)}
      />
    </Link>
  );
}
