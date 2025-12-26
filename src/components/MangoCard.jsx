import { Link } from 'react-router-dom';
import { formatSeasonMonths, getSeasonStatus } from '../utils/dateUtils';

const MangoCard = ({ mango }) => {
  const seasonStatus = getSeasonStatus(mango.seasonMonths);
  const statusColors = {
    available: 'bg-green-100 text-green-800',
    upcoming: 'bg-yellow-100 text-yellow-800',
    'out-of-season': 'bg-gray-100 text-gray-800',
  };

  return (
    <div className="card group">
      <div className="relative h-48 bg-gradient-to-br from-mango-yellow-light to-mango-orange-light overflow-hidden">
        {mango.images && mango.images[0] ? (
          <img
            src={mango.images[0]}
            alt={mango.name}
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
        <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold ${statusColors[seasonStatus]}`}>
          {seasonStatus === 'available' ? 'Available' : seasonStatus === 'upcoming' ? 'Coming Soon' : 'Out of Season'}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{mango.name}</h3>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-semibold">Origin:</span> {mango.origin}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-semibold">Taste:</span> {mango.tasteProfile}
        </p>
        <p className="text-sm text-gray-600 mb-3">
          <span className="font-semibold">Season:</span> {formatSeasonMonths(mango.seasonMonths)}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-mango-orange">
            ₹{mango.pricePerDozen}
          </span>
          <span className="text-sm text-gray-500">/ dozen</span>
        </div>
        <Link
          to={`/mangoes/${mango.id}`}
          className="block mt-4 btn-primary text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MangoCard;

