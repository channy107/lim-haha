import { BADGE_TYPE } from '../../constants';
import styles from './Badge.module.css';

interface IProps {
  label: string;
  type?: BADGE_TYPE.NORMAL | BADGE_TYPE.PRIMARY;
}

export default function Badge({ label, type = BADGE_TYPE.NORMAL }: IProps) {
  return (
    <section
      className={`${styles.label} ${type === BADGE_TYPE.PRIMARY ? styles.primary : styles.normal}`}
    >
      {label}
    </section>
  );
}
