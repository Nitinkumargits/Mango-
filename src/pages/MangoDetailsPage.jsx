import { useParams, Link } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import OrderForm from '../components/OrderForm';
import LoadingSpinner from '../components/LoadingSpinner';
import Button from '../components/Button';
import useMango from '../hooks/useMango';
import useSeasonalAvailability from '../hooks/useSeasonalAvailability';
import { formatSeasonMonths } from '../utils/dateUtils';

const AvailabilityStatus = ({ seasonMonths }) => {
  const { status, isAvailable } = useSeasonalAvailability(seasonMonths);
  
  const statusConfig = {
    available: {
      text: 'Available Now',
      color: 'bg-green-100 text-green-800 border-green-300',
      icon: '✅',
    },
    upcoming: {
      text: 'Coming Soon',
      color: 'bg-yellow-100 text-yellow-800 border-yellow-300',
      icon: '⏳',
    },
    'out-of-season': {
      text: 'Out of Season',
      color: 'bg-gray-100 text-gray-800 border-gray-300',
      icon: '❌',
    },
  };
  
  const config = statusConfig[status] || statusConfig['out-of-season'];
  
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 ${config.color}`}>
      <span>{config.icon}</span>
      <span className="font-semibold">{config.text}</span>
    </div>
  );
};

const MangoInfo = ({ mango }) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{mango.name}</h1>
        <p className="text-xl text-gray-600">{mango.origin}</p>
      </div>
      
      <div className="flex items-center gap-4">
        <AvailabilityStatus seasonMonths={mango.seasonMonths} />
        <div className="text-3xl font-bold text-mango-orange">
          ₹{mango.pricePerDozen} <span className="text-lg text-gray-600 font-normal">/ dozen</span>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Description</h2>
        <p className="text-gray-600 leading-relaxed">{mango.description}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-mango-yellow-light p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Taste Profile</p>
          <p className="font-semibold text-gray-800">{mango.tasteProfile}</p>
        </div>
        <div className="bg-mango-orange-light p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Season</p>
          <p className="font-semibold text-gray-800">{formatSeasonMonths(mango.seasonMonths)}</p>
        </div>
      </div>
      
      {mango.nutrition && (
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Nutritional Information</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Calories</p>
              <p className="text-xl font-bold text-mango-orange">{mango.nutrition.calories}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Vitamin C</p>
              <p className="text-xl font-bold text-mango-orange">{mango.nutrition.vitaminC}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Vitamin A</p>
              <p className="text-xl font-bold text-mango-orange">{mango.nutrition.vitaminA}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Fiber</p>
              <p className="text-xl font-bold text-mango-orange">{mango.nutrition.fiber}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MangoDetailsPage = () => {
  const { id } = useParams();
  const { data: mango, isLoading, error } = useMango(id);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error || !mango) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Mango Not Found</h1>
          <p className="text-gray-600 mb-6">The mango you're looking for doesn't exist.</p>
          <Link to="/mangoes">
            <Button>Browse All Mangoes</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/mangoes" className="inline-flex items-center text-mango-orange hover:underline mb-6">
          ← Back to Mangoes
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <ImageGallery images={mango.images} name={mango.name} />
          </div>
          <div>
            <MangoInfo mango={mango} />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Place Your Order</h2>
          <OrderForm mangoId={mango.id} mangoName={mango.name} />
        </div>
      </div>
    </div>
  );
};

export default MangoDetailsPage;

