import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import LoadingSpinner from '../components/LoadingSpinner';
import Button from '../components/Button';
import useBlogPost from '../hooks/useBlogPost';

const BlogPostDetailPage = () => {
  const { id } = useParams();
  const { data: post, isLoading, error } = useBlogPost(id);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/blog" className="inline-flex items-center text-mango-orange hover:underline mb-6">
          ← Back to Blog
        </Link>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Featured Image */}
          <div className="relative h-96 bg-gradient-to-br from-mango-yellow-light to-mango-orange-light overflow-hidden">
            {post.image ? (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-8xl">
                🥭
              </div>
            )}
            <div className="absolute top-4 left-4">
              <span className="bg-mango-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
            </div>

            <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm bg-mango-yellow-light text-gray-700 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                lineHeight: '1.8',
              }}
            />
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-8 flex justify-center">
          <Link to="/blog">
            <Button variant="primary">View All Posts</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetailPage;

