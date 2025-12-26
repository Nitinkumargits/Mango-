import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MangoCard from '../components/MangoCard';
import FilterBar from '../components/FilterBar';
import LoadingSpinner from '../components/LoadingSpinner';
import useMangoes from '../hooks/useMangoes';

const MangoVarietiesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    season: searchParams.get('season') || '',
    taste: searchParams.get('taste') || '',
    origin: searchParams.get('origin') || '',
  });

  const { data: mangoes, isLoading, error } = useMangoes(filters);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Update URL params
    const params = new URLSearchParams();
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    setSearchParams(params);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Mango Varieties</h1>
          <p className="text-gray-600">
            Explore our premium collection of handpicked mango varieties
          </p>
        </div>

        <FilterBar onFilterChange={handleFilterChange} currentFilters={filters} />

        {isLoading ? (
          <LoadingSpinner size="lg" />
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600 text-lg">Failed to load mangoes. Please try again later.</p>
          </div>
        ) : mangoes && mangoes.length > 0 ? (
          <>
            <div className="mb-4">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{mangoes.length}</span> mango{mangoes.length !== 1 ? 'es' : ''}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mangoes.map((mango) => (
                <MangoCard key={mango.id} mango={mango} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow-md">
            <p className="text-gray-600 text-lg mb-4">No mangoes found matching your filters.</p>
            <button
              onClick={() => handleFilterChange({ season: '', taste: '', origin: '' })}
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

export default MangoVarietiesPage;

