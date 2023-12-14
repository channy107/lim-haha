'use client';
import useGetBoards from '@/app/_remotes/useGetBoards';
import styles from './tabs.module.css';
import Link from 'next/link';
import { useState } from 'react';
import SubMenus from '../SubMenus/SubMenus';

export default function Tabs() {
  const { data } = useGetBoards();
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
          const isImhaha = menu.id === '1';
          return (
            <li
              className={isImhaha ? styles.primaryList : styles.normalList}
              key={menu.id}
              onMouseEnter={() => handleMouseEnter(menu.id)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={menu.url}>{menu.name}</Link>
              {menu.subBoardMenus && menu.id === activeSubMenu && (
                <SubMenus key={menu.id} subMenus={menu.subBoardMenus} />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
