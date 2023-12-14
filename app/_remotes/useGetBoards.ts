import { useQuery } from '@tanstack/react-query';
import { getBoardMenus } from '../_api/getBoardMenus';

const useGetBoards = () => {
  const fetcher = async () => {
    const response = await getBoardMenus();

    return response;
  };

  return useQuery<IBoardMenu[]>({ queryKey: ['boardMenus'], queryFn: fetcher });
};

export default useGetBoards;
