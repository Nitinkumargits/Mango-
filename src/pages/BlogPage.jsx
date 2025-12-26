import { useState } from 'react';
import BlogCard from '../components/BlogCard';
import BlogFilter from '../components/BlogFilter';
import LoadingSpinner from '../components/LoadingSpinner';
import useBlogPosts from '../hooks/useBlogPosts';

const BlogPage = () => {
  const [filters, setFilters] = useState({
    category: '',
    tag: '',
    search: '',
  });

  const { data: posts, isLoading, error } = useBlogPosts(filters);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Mango Blog</h1>
          <p className="text-xl text-gray-600">
            Stay updated with the latest news, recipes, and stories about mangoes
          </p>
        </div>

        <BlogFilter onFilterChange={handleFilterChange} currentFilters={filters} />

        {isLoading ? (
          <LoadingSpinner size="lg" />
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600 text-lg">Failed to load blog posts. Please try again later.</p>
          </div>
        ) : posts && posts.length > 0 ? (
          <>
            <div className="mb-4">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{posts.length}</span> post{posts.length !== 1 ? 's' : ''}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow-md">
            <p className="text-gray-600 text-lg mb-4">No blog posts found matching your filters.</p>
            <button
              onClick={() => handleFilterChange({ category: '', tag: '', search: '' })}
              className="text-mango-orange hover:underline font-semibold"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
