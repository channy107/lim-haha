export async function getBoards(page: number, offset: number) {
  const res = await fetch(`http://localhost:3000/api/boards?page=${page}&offset=${offset}`, {
    next: {
      tags: ['boards'],
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
