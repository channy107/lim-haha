'use client';
import useGetBoardMenus from '@/app/_remotes/useGetBoardMenus';
import styles from './tabs.module.css';
import Link from 'next/link';
import { useState } from 'react';
import SubMenus from '../SubMenus/SubMenus';
import useRecentVisited from '@/app/_hooks/useRecentVisited';

export default function Tabs() {
  const { data } = useGetBoardMenus();
  const { setRecentVisitedCookie } = useRecentVisited();
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
              <Link
                href={menu.url}
                onClick={() => {
                  setRecentVisitedCookie({ name: menu.name, url: menu.url });
                }}
              >
                {menu.name}
              </Link>
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
