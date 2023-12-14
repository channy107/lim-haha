import { ReactNode } from 'react';
import styles from './pageContainer.module.css';

const PageContainer = ({ children }: { children: ReactNode }) => {
  return <main className={styles.container}>{children}</main>;
};

export default PageContainer;
