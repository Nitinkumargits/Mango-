import { Link } from 'react-router-dom';
import { formatSeasonMonths, getSeasonStatus } from '../utils/dateUtils';
import { useState } from 'react';

const MangoCard = ({ mango }) => {
  const seasonStatus = getSeasonStatus(mango.seasonMonths);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="card border-0 h-100 w-full flex flex-col h-full">
      {/* Card Image */}
      <div className="card-image relative" style={{ height: '250px', overflow: 'hidden' }}>
        {mango.images && mango.images[0] && !imageError ? (
          <img
            src={mango.images[0]}
            alt={mango.name}
            className="w-full h-full object-cover"
            style={{ height: '250px', objectFit: 'cover', width: '100%' }}
            onError={() => {
              setImageError(true);
            }}
            onLoad={() => {
              setImageError(false);
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-mango-yellow-light to-mango-orange-light" style={{ height: '250px' }}>
            <span className="text-6xl">🥭</span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="card-body text-center px-5 md:px-6 lg:px-8 py-4 flex-grow flex flex-col">
        <h3 className="text-mango-green font-bold text-xl uppercase">
          {mango.name}
        </h3>
        <Link
          to={`/mangoes?origin=${mango.origin.toLowerCase().replace(/\s+/g, '-')}`}
          className="block font-bold uppercase mt-3 mb-4 no-underline text-gray-800 hover:text-mango-green transition-colors"
        >
          {mango.origin}
        </Link>

        {/* Info Section */}
        <div className="flex justify-between border-t border-gray-300 pt-4 mt-6 flex-grow">
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
      <div className="card-footer bg-transparent border-0 text-center pb-4 mt-auto flex justify-center items-center">
        <Link
          to={`/mangoes/${mango.id}`}
          className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-8 rounded-lg uppercase inline-block transition-colors w-[170px]"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MangoCard;

