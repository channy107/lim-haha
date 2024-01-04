'use client';

import Image from 'next/image';
import Thumbnail from '@/public/document.svg';
import Eye from '@/public/eye_white.svg';
import Like from '@/public/like_white.svg';
import styles from './posts.module.css';
import Badge from '../Badge/Badge';
import useGetBoards from '@/app/_remotes/useGetBoards';
import { elapsedTime } from '@/app/_utils/date';

export default function Posts() {
  const { data: boards } = useGetBoards();

  return (
    <>
      {boards?.map((board) => (
        <section className={styles.container}>
          <div className={styles.thumbnail}>
            <Image alt="thumbnail" src={Thumbnail} width="65" height="50" />
          </div>
          <div className={styles.post}>
            <div className={styles.title}>
              <Badge label={board.label} />
              {board.title}
            </div>
            <div className={styles.info}>
              <div className={styles.item}>
                <div>{board.author.name}</div>
                <div className={styles.dot} />
              </div>
              <div className={styles.item}>
                <div>{elapsedTime(board.createAt)}</div>
                <div className={styles.dot} />
              </div>
              <div className={styles.item}>
                <Image className={styles.icon} alt="eye" src={Eye} width="12" height="12" />
                <div>{board.viewCount}</div>
                <div className={styles.dot} />
              </div>
              <div className={styles.item}>
                <Image className={styles.icon} alt="like" src={Like} width="12" height="12" />
                <div>{board.likes}</div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
