import { MENUS_ENDPOINT } from './endpoints';

export async function getBoardMenus() {
  const res = await fetch(MENUS_ENDPOINT, {
    next: {
      tags: ['boardMenus'],
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
