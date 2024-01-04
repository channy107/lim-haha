import { useQuery } from '@tanstack/react-query';
import { getBoards } from '../_api/getBoards';

const useGetBoards = () => {
  const fetcher = async () => {
    const response = await getBoards();

    return response;
  };

  return useQuery<IBoards[]>({ queryKey: ['boards'], queryFn: fetcher });
};

export default useGetBoards;
