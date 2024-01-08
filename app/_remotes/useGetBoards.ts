import { useSuspenseQuery } from '@tanstack/react-query';
import { getBoards } from '../_api/getBoards';

interface IUseGetBoardsParams {
  page: number;
}

const useGetBoards = ({ page }: IUseGetBoardsParams) => {
  const fetcher = async () => {
    const response = await getBoards(page, 5);

    return response;
  };

  return useSuspenseQuery<IResponse<IBoards[]>>({ queryKey: ['boards', page], queryFn: fetcher });
};

export default useGetBoards;
