import styles from './postTitle.module.css';
import Badge from '@/app/_common/components/Badge';

interface IProps {
  label: string;
  title: string;
}

export default function PostTitle({ label, title }: IProps) {
  return (
    <div className={styles.title}>
      <Badge label={label} />
      {title}
    </div>
  );
}
