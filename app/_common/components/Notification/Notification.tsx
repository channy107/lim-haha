'use client';

import useGetNotifications from '@/app/_remotes/useGetNotifications';
import styles from './notification.module.css';
import { Title } from './Title';
import { Info } from './Info';

export default function Notification() {
  const { data: notifications } = useGetNotifications();
  return (
    <>
      {notifications?.map((notification) => (
        <section className={styles.container}>
          <div className={styles.left}>
            <Title
              type={notification.type}
              title={notification.title}
              commentCount={notification.commentCount}
            />
          </div>
          <div className={styles.right}>
            <Info
              author={notification.author}
              createAt={notification.createAt}
              viewCount={notification.viewCount}
              likes={notification.likes}
            />
          </div>
        </section>
      ))}
    </>
  );
}
