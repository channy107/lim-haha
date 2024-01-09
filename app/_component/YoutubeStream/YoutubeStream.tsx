import styles from './youtubeStream.module.css';
import Youtube from '@/public/youtube.png';
import Image from 'next/image';

export default function YoutubeStream() {
  return (
    <section className={styles.container}>
      <div className={styles.recent}>
        <div className={styles.title}>
          <Image src={Youtube} alt="youtube" width="20" height="20" />
          최신 임투부
        </div>
        <iframe
          src="https://www.youtube.com/embed?list=UUUj6rrhMTR9pipbAWBAMvUQ"
          width="470"
          height="263"
          title="최신 침투부"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      <div className={styles.original}>
        <div className={styles.title}>
          <Image src={Youtube} alt="youtube" width="20" height="20" />
          원본 박물관
        </div>
        <iframe
          src="https://www.youtube.com/embed?list=UUewitUbsXnyjvJjGgxa0IYw"
          width="470"
          height="263"
          title="원본 박물관"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </section>
  );
}
