export async function getNotifications() {
  const res = await fetch('http://localhost:3000/api/notifications', {
    next: {
      tags: ['notifications'],
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
