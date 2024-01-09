import Image from 'next/image';

import EyeIcon from '@/assets/svg/eye.svg';
import LikeIcon from '@/assets/svg/like.svg';
import { elapsedTime } from '@/app/_common/utils/date';
import styles from './postTitleInfo.module.css';

interface IProps {
  post: IPost;
}

export default function PostTitleInfo({ post }: IProps) {
  return (
    <div className={styles.info}>
      <div className={styles.item}>
        <div>{post.author.name}</div>
        <div className={styles.dot} />
      </div>
      <div className={styles.item}>
        <div>{elapsedTime(post.createAt)}</div>
        <div className={styles.dot} />
      </div>
      <div className={styles.item}>
        <Image className={styles.icon} alt="eye" src={EyeIcon} width="12" height="12" />
        <div>{post.viewCount}</div>
        <div className={styles.dot} />
      </div>
      <div className={styles.item}>
        <Image className={styles.icon} alt="like" src={LikeIcon} width="12" height="12" />
        <div>{post.likes}</div>
      </div>
    </div>
  );
}
