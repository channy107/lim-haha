import Image from 'next/image';
import { elapsedTime } from '@/app/_common/utils/date';
import Check from '@/assets/svg/check.svg';
import Eye from '@/assets/svg/eye.svg';
import Like from '@/assets/svg/like.svg';
import styles from '@/app/_common/components/Notification/notification.module.css';

interface IProps {
  author: IAuthor;
  createAt: string;
  viewCount: number;
  likes: number;
}

export function Info({ author, createAt, viewCount, likes }: IProps) {
  return (
    <>
      <div className={styles.rightItem}>
        <div>{author.name}</div>
        <Image className={styles.adminIcon} alt="check" src={Check} width="12" height="12" />
        <div className={styles.dot} />
      </div>
      <div className={styles.rightItem}>
        <div>{elapsedTime(createAt)}</div>
        <div className={styles.dot} />
      </div>
      <div className={styles.rightItem}>
        <Image className={styles.icon} alt="eye" src={Eye} width="12" height="12" />
        <div>{viewCount}</div>
        <div className={styles.dot} />
      </div>
      <div className={styles.rightItem}>
        <Image className={styles.icon} alt="like" src={Like} width="12" height="12" />
        <div>{likes}</div>
      </div>
    </>
  );
}
