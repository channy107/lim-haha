interface IResponse<T> {
  data: T;
  total: number;
}

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

type TAuthorType = 'admin' | 'user';

interface IAuthor {
  name: string;
  type: TAuthorType;
}

type TNotificationType = 'dudle' | 'notice';

interface INotification {
  id: string;
  type: TNotificationType;
  title: string;
  content: string;
  commentCount: number;
  author: IAuthor;
  createAt: string;
  viewCount: number;
  likes: number;
}

interface IPost {
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
