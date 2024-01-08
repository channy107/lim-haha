'use client';

import useGetNotifications from '@/app/_remotes/useGetNotifications';
import Badge from '../Badge/Badge';
import styles from './notification.module.css';
import { elapsedTime } from '@/app/_utils/date';
import Check from '@/public/check.svg';
import Eye from '@/public/eye.svg';
import Like from '@/public/like.svg';
import Image from 'next/image';

export default function Notification() {
  const { data: notifications } = useGetNotifications();
  return (
    <>
      {notifications?.map((notification) => (
        <section className={styles.container}>
          <div className={styles.left}>
            <Badge label="필독" type="primary" />
            <Badge label={notification.type === 'notice' ? '공지' : '두들'} />
            <div className={styles.title}>{notification.title}</div>
            <div className={styles.commentCount}>{notification.commentCount}</div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightItem}>
              <div>{notification.author.name}</div>
              <Image className={styles.adminIcon} alt="check" src={Check} width="12" height="12" />
              <div className={styles.dot} />
            </div>
            <div className={styles.rightItem}>
              <div>{elapsedTime(notification.createAt)}</div>
              <div className={styles.dot} />
            </div>
            <div className={styles.rightItem}>
              <Image className={styles.icon} alt="eye" src={Eye} width="12" height="12" />
              <div>{notification.viewCount}</div>
              <div className={styles.dot} />
            </div>
            <div className={styles.rightItem}>
              <Image className={styles.icon} alt="like" src={Like} width="12" height="12" />
              <div>{notification.likes}</div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
