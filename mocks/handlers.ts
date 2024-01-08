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
    const total = boards.data.length;

    const startIndex: number = (Number(page) - 1) * Number(offset);

    const endIndex = Math.min(startIndex + Number(offset), total);
    return HttpResponse.json({
      data: boards.data.slice(startIndex, endIndex),
      total,
    });
  }),
];
