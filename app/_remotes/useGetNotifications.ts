import { useQuery } from '@tanstack/react-query';
import { getNotifications } from '../_api/getNotifications';
import { QUERY_KEYS } from '../_common/constants';

const useGetNotifications = () => {
  const fetcher = async () => {
    const response = await getNotifications();

    return response;
  };

  return useQuery<INotification[]>({ queryKey: [QUERY_KEYS.NOTIFICATIONS], queryFn: fetcher });
};

export default useGetNotifications;
