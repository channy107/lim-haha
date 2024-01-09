import { ReactNode } from 'react';
import styles from './post.module.css';

interface IProps {
  children: ReactNode;
}

export default function TitleContainer({ children }: IProps) {
  return <div>{children}</div>;
}
