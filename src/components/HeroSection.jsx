import { Link } from 'react-router-dom';
import Button from './Button';

const HeroSection = () => {
  return (
    <div className="relative h-[600px] bg-gradient-to-br from-mango-yellow via-mango-orange to-mango-yellow-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Premium Mangoes
          <span className="block text-mango-yellow-light">From Indian Farms</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up">
          Discover the finest varieties of mangoes, handpicked and delivered fresh to your doorstep
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Link to="/mangoes">
            <Button variant="secondary" className="text-lg px-8 py-3">
              Explore Mangoes
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="outline" className="text-lg px-8 py-3 bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-mango-orange">
              View Insights
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
};

export default HeroSection;

