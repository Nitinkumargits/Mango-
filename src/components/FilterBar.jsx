import { useState } from 'react';
import { ORIGINS, TASTE_PROFILES } from '../utils/constants';

const FilterBar = ({ onFilterChange, currentFilters }) => {
  const [filters, setFilters] = useState({
    season: currentFilters?.season || '',
    taste: currentFilters?.taste || '',
    origin: currentFilters?.origin || '',
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const emptyFilters = { season: '', taste: '', origin: '' };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  const hasActiveFilters = Object.values(filters).some(v => v !== '');

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Filter Mangoes</h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-mango-orange hover:underline"
          >
            Clear All
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Season
          </label>
          <select
            value={filters.season}
            onChange={(e) => handleFilterChange('season', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mango-orange focus:border-transparent"
          >
            <option value="">All Seasons</option>
            <option value="available">Available Now</option>
            <option value="upcoming">Coming Soon</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Taste Profile
          </label>
          <select
            value={filters.taste}
            onChange={(e) => handleFilterChange('taste', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mango-orange focus:border-transparent"
          >
            <option value="">All Tastes</option>
            {Object.values(TASTE_PROFILES).map(taste => (
              <option key={taste} value={taste}>{taste}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Origin
          </label>
          <select
            value={filters.origin}
            onChange={(e) => handleFilterChange('origin', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mango-orange focus:border-transparent"
          >
            <option value="">All Origins</option>
            {Object.values(ORIGINS).map(origin => (
              <option key={origin} value={origin}>{origin}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;

