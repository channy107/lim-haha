import { HttpResponse, http } from 'msw';
import { boardMenus, notifications, boards } from './data';

export const handlers = [
  http.get('/api/boardMenus', () => {
    return HttpResponse.json(boardMenus);
  }),
  http.get('/api/notifications', () => {
    return HttpResponse.json(notifications);
  }),
  http.get('/api/boards', ({ request }) => {
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

    if (searchType === 'title') {
      newBoards = boards.data.filter((board) => board.title.includes(search));
    }

    if (searchType === 'content') {
      newBoards = boards.data.filter((board) => board.content.includes(search));
    }

    if (searchType === 'titleOrContent') {
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
