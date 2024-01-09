import Link from 'next/link';
import styles from './topBar.module.css';
import { URLS } from '@/app/_common/constants';

export default function TopBar() {
  return (
    <section className={styles.container}>
      <ul className={styles.ul}>
        <li>
          <Link className={styles.link} href={URLS.SIGN_UP}>
            회원가입
          </Link>
        </li>
        <li>
          <Link className={styles.link} href={URLS.LOG_IN}>
            로그인
          </Link>
        </li>
      </ul>
    </section>
  );
}
