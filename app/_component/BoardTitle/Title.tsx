import styles from './title.module.css';

interface Props {
  title: string;
}

export default function Title({ title }: Props) {
  return <h2 className={styles.title}>{title}</h2>;
}
