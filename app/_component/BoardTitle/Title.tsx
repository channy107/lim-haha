import styles from './title.module.css';

interface IProps {
  title: string;
}

export default function Title({ title }: IProps) {
  return <h2 className={styles.title}>{title}</h2>;
}
