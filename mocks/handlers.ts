import { HttpResponse, http } from 'msw';
import { boardMenus, notifications } from './data';

export const handlers = [
  http.get('/api/boardMenus', () => {
    return HttpResponse.json(boardMenus);
  }),
  http.get('/api/notifications', () => {
    return HttpResponse.json(notifications);
  }),
];
