import { ReactNode } from 'react';
import styles from './container.module.css';

const Container = ({ children }: { children: ReactNode }) => {
  return <main className={styles.container}>{children}</main>;
};

export default Container;
