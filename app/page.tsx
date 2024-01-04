import PageContainer from './_component/PageContainer/PageContainer';
import Board from './_component/Board';
import Title from './_component/BoardTitle/Title';
import YoutubeStream from './_component/YoutubeStream/YoutubeStream';
import Notification from './_component/BoardNotification/Notification';

export default function Home() {
  return (
    <PageContainer>
      <section>
        <YoutubeStream />
        <Board>
          <Title title="임하하" />
          <Notification />
        </Board>
      </section>
    </PageContainer>
  );
}
