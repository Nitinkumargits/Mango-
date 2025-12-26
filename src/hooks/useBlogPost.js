import { useQuery } from '@tanstack/react-query';
import { fetchBlogPostById } from '../services/blogService';

const useBlogPost = (id) => {
  return useQuery({
    queryKey: ['blogPost', id],
    queryFn: () => fetchBlogPostById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export default useBlogPost;

