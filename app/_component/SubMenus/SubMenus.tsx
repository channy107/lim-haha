'use client';
import Link from 'next/link';
import styles from './subMenus.module.css';
import useRecentVisited from '@/app/_hooks/useRecentVisited';

interface ISubmenuProps {
  subMenus: ISubBoardMenus[];
}

const SubMenus = ({ subMenus }: ISubmenuProps) => {
  const { setRecentVisitedCookie } = useRecentVisited();
  return (
    <div className={styles.container}>
      <ul>
        {subMenus.map((subMenu) => (
          <Link
            href={subMenu.url}
            key={subMenu.id}
            onClick={() => {
              setRecentVisitedCookie({ name: subMenu.name, url: subMenu.url });
            }}
          >
            <li className={styles.li}>{subMenu.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SubMenus;
