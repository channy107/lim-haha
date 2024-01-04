import { useQuery } from '@tanstack/react-query';
import { getNotifications } from '../_api/getNotifications';

const useGetNotifications = () => {
  const fetcher = async () => {
    const response = await getNotifications();

    return response;
  };

  return useQuery<INotification[]>({ queryKey: ['notifications'], queryFn: fetcher });
};

export default useGetNotifications;
