import { NOTIFICATIONS_ENDPOINT } from './endpoints';

export async function getNotifications() {
  const res = await fetch(NOTIFICATIONS_ENDPOINT, {
    next: {
      tags: ['notifications'],
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
