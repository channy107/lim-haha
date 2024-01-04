interface ISubBoardMenus {
  id: string;
  name: string;
  url: string;
}

interface IBoardMenu {
  id: string;
  name: string;
  subBoardMenus: ISubBoardMenus[];
  url: string;
}

interface IAuthor {
  name: string;
  type: 'admin' | 'user';
}

interface INotification {
  id: string;
  type: 'dudle' | 'notice';
  title: string;
  content: string;
  commentCount: number;
  author: IAuthor;
  createAt: string;
  viewCount: number;
  likes: number;
}

interface IBoards {
  id: string;
  thumbnail: string;
  title: string;
  label: string;
  content: string;
  commentCount: number;
  author: IAuthor;
  createAt: string;
  viewCount: number;
  likes: number;
}
