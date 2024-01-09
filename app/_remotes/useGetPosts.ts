import { useSuspenseQuery } from '@tanstack/react-query';
import { getPosts } from '../_api/getPosts';
import { QUERY_KEYS } from '../_common/constants';

interface IParams {
  page: number;
  search?: string;
  searchType?: string;
}

const useGetPosts = ({ page, search, searchType }: IParams) => {
  const fetcher = async () => {
    const response = await getPosts(page, 5, search, searchType);

    return response;
  };

  return useSuspenseQuery<IResponse<IPost[]>>({
    queryKey: [QUERY_KEYS.POSTS, page, search, searchType],
    queryFn: fetcher,
  });
};

export default useGetPosts;
