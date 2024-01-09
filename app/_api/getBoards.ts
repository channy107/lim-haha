export async function getBoards(
  page: number,
  offset: number,
  search?: string,
  searchType?: string,
) {
  let url = `http://localhost:3000/api/boards?page=${page}&offset=${offset}`;

  if (search && searchType) {
    url += `&search=${search}&searchType=${searchType}`;
  }

  const res = await fetch(url, {
    next: {
      tags: ['boards'],
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
