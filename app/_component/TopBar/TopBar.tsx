import Link from 'next/link';
import styles from './topBar.module.css';

export default function TopBar() {
  return (
    <section className={styles.container}>
      <ul className={styles.ul}>
        <li>
          <Link className={styles.link} href={'/join'}>
            회원가입
          </Link>
        </li>
        <li>
          <Link className={styles.link} href={'/login'}>
            로그인
          </Link>
        </li>
      </ul>
    </section>
  );
}
