import { Link } from 'react-router-dom';
import { formatSeasonMonths, getSeasonStatus } from '../utils/dateUtils';

const MangoCard = ({ mango }) => {
  const seasonStatus = getSeasonStatus(mango.seasonMonths);

  return (
    <div className="card border-0 h-100 w-full flex flex-col">
      {/* Card Image */}
      <div className="card-image relative">
        {mango.images && mango.images[0] ? (
          <img
            src={mango.images[0]}
            alt={mango.name}
            className="w-full h-full object-cover"
            style={{ height: '370px', objectFit: 'cover' }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        ) : (
          <div className="w-full flex items-center justify-center bg-gradient-to-br from-mango-yellow-light to-mango-orange-light" style={{ height: '370px' }}>
            <span className="text-6xl">🥭</span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="card-body text-center px-5 md:px-6 lg:px-8 py-6">
        <h3 className="text-mango-green font-bold text-xl uppercase">
          {mango.name}
        </h3>
        <Link
          to={`/mangoes?origin=${mango.origin.toLowerCase().replace(/\s+/g, '-')}`}
          className="block font-bold uppercase mt-4 mb-8 no-underline text-gray-800 hover:text-mango-green transition-colors"
        >
          {mango.origin}
        </Link>

        {/* Info Section */}
        <div className="flex justify-between border-t border-gray-300 pt-8 mt-12">
          <div className="px-3 flex-1">
            <span className="block uppercase font-bold text-red-600 text-xs mb-1" style={{ lineHeight: '100%' }}>
              Taste
            </span>
            <span className="block uppercase text-gray-700 text-sm font-medium">
              {mango.tasteProfile}
            </span>
          </div>
          <div className="px-3 flex-1">
            <span className="block uppercase font-bold text-red-600 text-xs mb-1" style={{ lineHeight: '100%' }}>
              Season
            </span>
            <span className="block uppercase text-gray-700 text-sm font-medium">
              {formatSeasonMonths(mango.seasonMonths)}
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="card-footer bg-transparent border-0 text-center pb-6">
        <Link
          to={`/mangoes/${mango.id}`}
          className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-8 rounded-lg uppercase inline-block transition-colors max-w-[170px] w-full"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MangoCard;

