'use client';
import useGetBoardMenus from '@/app/_remotes/useGetBoardMenus';
import styles from '@/app/_component/Tabs/tabs.module.css';
import Tab from '@/app/_component/Tab';
import { useState } from 'react';
import SubMenus from '../SubMenus';

const PRIMARY_ID = '1';

export default function Tabs() {
  const { data } = useGetBoardMenus();
  const [activeSubMenu, setActiveSubMenu] = useState('');

  const handleMouseEnter = (id: string) => {
    setActiveSubMenu(id);
  };

  const handleMouseLeave = () => {
    setActiveSubMenu('');
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {data?.map((menu) => {
          const { id, name, url, subBoardMenus } = menu;
          const isPrimary = id === PRIMARY_ID;
          return (
            <li
              className={isPrimary ? styles.primaryList : styles.normalList}
              key={id}
              onMouseEnter={() => handleMouseEnter(id)}
              onMouseLeave={handleMouseLeave}
            >
              <Tab name={name} url={url} />
              {subBoardMenus && id === activeSubMenu && (
                <SubMenus key={id} subMenus={subBoardMenus} />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
