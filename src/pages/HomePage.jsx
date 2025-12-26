import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import HeroSection from '../components/HeroSection';
import MangoCard from '../components/MangoCard';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';
import useMangoes from '../hooks/useMangoes';

const SeasonalBanner = () => {
  const now = new Date();
  const currentMonth = format(now, 'MMMM');
  const currentYear = format(now, 'yyyy');
  
  // Get available mangoes for the banner
  const { data: availableMangoes } = useMangoes({ season: 'available' });
  
  const availableCount = availableMangoes?.length || 0;
  
  return (
    <div className="bg-gradient-to-r from-mango-green to-mango-green-dark text-white py-4 px-6 rounded-xl shadow-lg mb-12">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h3 className="text-xl font-bold mb-1">🍃 Mango Season Alert!</h3>
          <p className="text-green-100">
            {availableCount > 0 
              ? `${availableCount} premium mango variety${availableCount > 1 ? 'ies' : ''} available this ${currentMonth} ${currentYear}`
              : `Stay tuned for the upcoming mango season in ${currentMonth} ${currentYear}`
            }
          </p>
        </div>
        {availableCount > 0 && (
          <Link to="/mangoes?filter=available">
            <Button variant="secondary" className="bg-white text-mango-green hover:bg-gray-100">
              Shop Now
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

const FeaturedMangoes = () => {
  const { data: mangoes, isLoading, error } = useMangoes();
  
  if (isLoading) {
    return <LoadingSpinner size="lg" />;
  }
  
  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Failed to load mangoes. Please try again later.</p>
      </div>
    );
  }
  
  // Show first 4 mangoes as featured
  const featuredMangoes = mangoes?.slice(0, 4) || [];
  
  if (featuredMangoes.length === 0) {
    return null;
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredMangoes.map((mango) => (
        <MangoCard key={mango.id} mango={mango} />
      ))}
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <SeasonalBanner />
        
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Featured Mangoes</h2>
            <Link to="/mangoes">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <FeaturedMangoes />
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Experience the Taste of Premium Mangoes
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            From the royal Alphonso to the tangy Totapuri, explore our curated collection 
            of the finest mango varieties, each with its unique flavor and story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/mangoes">
              <Button variant="primary" className="text-lg px-8 py-3">
                Browse All Varieties
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="secondary" className="text-lg px-8 py-3">
                View Seasonal Trends
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

