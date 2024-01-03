import PageContainer from '../PageContainer/PageContainer';
import HeaderTitle from '../HeaderTitle';
import RecentVisited from '../RecentVisited/RecentVisited';
import Tabs from '../Tabs/Tabs';
import TopBar from '../TopBar/TopBar';

export default function Header() {
  return (
    <header>
      <TopBar />
      <PageContainer>
        <HeaderTitle />
        <Tabs />
        <RecentVisited />
      </PageContainer>
    </header>
  );
}
