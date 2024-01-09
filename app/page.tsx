import PageContainer from './_component/PageContainer';
import Board from './_component/Board';
import Title from './_component/BoardTitle/Title';
import YoutubeStream from './_component/YoutubeStream';
import Notification from './_component/BoardNotification';
import Posts from './_component/BoardPosts';
import Pagination from './_component/Pagination/Pagination';
import Search from './_component/Search';

export default function Home() {
  return (
    <PageContainer>
      <section>
        <YoutubeStream />
        <Board>
          <Title title="임하하" />
          <Notification />
          <Posts />
          <Pagination />
          <Search />
        </Board>
      </section>
    </PageContainer>
  );
}
