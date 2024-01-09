import Board from '@/app/_common/components/Board';
import Title from '@/app/_component/BoardTitle/Title';
import YoutubeStream from '@/app/_component/YoutubeStream';
import Notification from '@/app/_common/components/Notification';
import Posts from '@/app/_component/Posts';
import Pagination from '@/app/_component/Pagination/Pagination';
import Search from '@/app/_component/Search';

export default function Home() {
  return (
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
  );
}
