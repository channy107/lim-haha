import styles from './Badge.module.css';

export default function Badge({
  label,
  type = 'normal',
}: {
  label: string;
  type?: 'primary' | 'normal';
}) {
  return (
    <section className={`${styles.label} ${type === 'primary' ? styles.primary : styles.normal}`}>
      {label}
    </section>
  );
}
