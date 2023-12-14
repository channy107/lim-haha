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
