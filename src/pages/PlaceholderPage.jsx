import { Link } from 'react-router-dom';
import Button from '../components/Button';

const PlaceholderPage = ({ title, description, children }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{title}</h1>
        {description && (
          <p className="text-xl text-gray-600 mb-8">{description}</p>
        )}
        {children}
        <div className="mt-8">
          <Link to="/">
            <Button variant="primary">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;

