import { ReactNode } from 'react';
import styles from './post.module.css';

interface IProps {
  children: ReactNode;
}

export default function PostMain({ children }: IProps) {
  return <div className={styles.post}>{children}</div>;
}
