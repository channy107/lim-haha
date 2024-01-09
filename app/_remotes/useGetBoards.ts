import { useSuspenseQuery } from '@tanstack/react-query';
import { getBoards } from '../_api/getBoards';

interface IUseGetBoardsParams {
  page: number;
  search?: string;
  searchType?: string;
}

const useGetBoards = ({ page, search, searchType }: IUseGetBoardsParams) => {
  const fetcher = async () => {
    const response = await getBoards(page, 5, search, searchType);

    return response;
  };

  return useSuspenseQuery<IResponse<IBoards[]>>({
    queryKey: ['boards', page, search, searchType],
    queryFn: fetcher,
  });
};

export default useGetBoards;
