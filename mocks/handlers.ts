import { HttpResponse, http } from 'msw';
import { boardMenus, notifications, boards } from './data';
import { MENUS_ENDPOINT, NOTIFICATIONS_ENDPOINT, POSTS_ENDPOINT } from '@/app/_api/endpoints';
import { SEARCH_TYPE } from '@/app/_common/constants';

export const handlers = [
  http.get(MENUS_ENDPOINT, () => {
    return HttpResponse.json(boardMenus);
  }),
  http.get(NOTIFICATIONS_ENDPOINT, () => {
    return HttpResponse.json(notifications);
  }),
  http.get(POSTS_ENDPOINT, ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page');
    const offset = url.searchParams.get('offset');
    const search = url.searchParams.get('search');
    const searchType = url.searchParams.get('searchType');
    const total = boards.data.length;

    const startIndex: number = (Number(page) - 1) * Number(offset);
    const endIndex = Math.min(startIndex + Number(offset), total);

    let newBoards = boards.data.slice(startIndex, endIndex);

    if (!search) {
      return HttpResponse.json({
        data: newBoards,
        total: boards.data.length,
      });
    }

    if (searchType === SEARCH_TYPE.TITLE) {
      newBoards = boards.data.filter((board) => board.title.includes(search));
    }

    if (searchType === SEARCH_TYPE.CONTENT) {
      newBoards = boards.data.filter((board) => board.content.includes(search));
    }

    if (searchType === SEARCH_TYPE.TITLE_OR_CONTENT) {
      newBoards = boards.data.filter(
        (board) => board.title.includes(search) || board.content.includes(search),
      );
    }

    return HttpResponse.json({
      data: newBoards.slice(startIndex, endIndex),
      total: newBoards.length,
    });
  }),
];
