import { useQuery } from '@tanstack/react-query';
import { fetchBlogPosts } from '../services/blogService';

const useBlogPosts = (filters = {}) => {
  return useQuery({
    queryKey: ['blogPosts', filters],
    queryFn: () => fetchBlogPosts(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export default useBlogPosts;

