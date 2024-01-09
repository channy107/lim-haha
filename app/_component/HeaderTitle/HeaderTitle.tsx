import Logo from '@/assets/svg/logo.svg';
import Image from 'next/image';
import styles from './headerTitle.module.css';
import Link from 'next/link';

export default function HeaderTitle() {
  return (
    <Link href={'/'}>
      <section className={styles.container}>
        <Image className={styles.logo} src={Logo} alt="logo" width="120" height="40" />
        <span>βeta</span>
      </section>
    </Link>
  );
}
