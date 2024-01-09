import Badge from '@/app/_common/components/Badge';
import { BADGE_TYPE } from '@/app/_common/constants';
import styles from './notification.module.css';

interface IProps {
  type: TNotificationType;
  title: string;
  commentCount: number;
}

export function Title({ type, title, commentCount }: IProps) {
  return (
    <>
      <Badge label="필독" type={BADGE_TYPE.PRIMARY} />
      <Badge label={type === 'notice' ? '공지' : '두들'} />
      <div className={styles.title}>{title}</div>
      <div className={styles.commentCount}>{commentCount}</div>
    </>
  );
}
