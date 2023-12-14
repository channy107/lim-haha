export async function getBoardMenus() {
  const res = await fetch('http://localhost:3000/api/boardMenus', {
    next: {
      tags: ['boardMenus'],
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
