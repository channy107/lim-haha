export async function getBoards() {
  const res = await fetch('http://localhost:3000/api/boards', {
    next: {
      tags: ['boards'],
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
