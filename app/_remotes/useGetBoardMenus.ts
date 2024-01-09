import { useQuery } from '@tanstack/react-query';
import { getBoardMenus } from '../_api/getBoardMenus';
import { QUERY_KEYS } from '../_common/constants';

const useGetBoardMenus = () => {
  const fetcher = async () => {
    const response = await getBoardMenus();

    return response;
  };

  return useQuery<IBoardMenu[]>({ queryKey: [QUERY_KEYS.MENUS], queryFn: fetcher });
};

export default useGetBoardMenus;
