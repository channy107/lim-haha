import Link from 'next/link';
import styles from './subMenus.module.css';

interface ISubmenuProps {
  subMenus: ISubBoardMenus[];
}

const SubMenus = ({ subMenus }: ISubmenuProps) => {
  return (
    <div className={styles.container}>
      <ul>
        {subMenus.map((subMenu) => (
          <Link href={subMenu.url} key={subMenu.id}>
            <li className={styles.li}>{subMenu.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SubMenus;
