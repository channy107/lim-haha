import { HttpResponse, http } from 'msw';
import { boardMenus } from './data';

export const handlers = [
  http.get('/api/boardMenus', () => {
    return HttpResponse.json(boardMenus);
  }),
];
