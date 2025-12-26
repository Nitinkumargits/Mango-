import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const BlogCard = ({ post }) => {
  return (
    <article className="card group hover:shadow-2xl transition-all duration-300">
      <Link to={`/blog/${post.id}`}>
        <div className="relative h-48 bg-gradient-to-br from-mango-yellow-light to-mango-orange-light overflow-hidden">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">
              🥭
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span className="bg-mango-orange text-white px-3 py-1 rounded-full text-xs font-semibold">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span>{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-mango-orange transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-mango-yellow-light text-gray-700 px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
          <span className="text-mango-orange font-semibold text-sm group-hover:underline">
            Read More →
          </span>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;

