import { useQuery } from '@tanstack/react-query';
import { fetchMangoById } from '../services/mangoService';

const useMango = (id) => {
  return useQuery({
    queryKey: ['mango', id],
    queryFn: () => fetchMangoById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export default useMango;

