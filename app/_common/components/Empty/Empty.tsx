import styles from './empty.module.css';

interface IProps {
  text: string;
}

export default function Empty({ text }: IProps) {
  return <div className={styles.empty}>{text}</div>;
}
