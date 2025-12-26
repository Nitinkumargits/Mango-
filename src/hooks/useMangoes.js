import { useQuery } from '@tanstack/react-query';
import { fetchMangoes } from '../services/mangoService';

const useMangoes = (filters = {}) => {
  return useQuery({
    queryKey: ['mangoes', filters],
    queryFn: () => fetchMangoes(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export default useMangoes;

