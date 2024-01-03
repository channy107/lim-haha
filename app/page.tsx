import PageContainer from './_component/PageContainer/PageContainer';
import YoutubeStream from './_component/YoutubeStream/YoutubeStream';
import styles from './page.module.css';

export default function Home() {
  return (
    <PageContainer>
      <section className={styles.container}>
        <YoutubeStream />
      </section>
    </PageContainer>
  );
}
