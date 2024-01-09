import HeaderTitle from '../HeaderTitle';
import RecentVisited from '../RecentVisited/RecentVisited';
import Tabs from '../Tabs/Tabs';

export default function Header() {
  return (
    <header>
      <HeaderTitle />
      <Tabs />
      <RecentVisited />
    </header>
  );
}
