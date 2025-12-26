import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import { toggleFavorite } from '../services/recipeService';

const RecipeCard = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(recipe.isFavorite || false);
  const [isToggling, setIsToggling] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleFavoriteClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isToggling) return;
    
    setIsToggling(true);
    try {
      const result = await toggleFavorite(recipe.id);
      if (result.success) {
        setIsFavorite(result.isFavorite);
      }
    } catch (error) {
      console.error('Failed to toggle favorite:', error);
    } finally {
      setIsToggling(false);
    }
  };

  return (
    <div className="card border-0 bg-white rounded-lg overflow-hidden flex flex-col h-full">
      {/* Image with Heart Icon */}
      <div className="relative h-64 bg-gradient-to-br from-mango-yellow-light to-mango-orange-light overflow-hidden">
        {recipe.image && !imageError ? (
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover object-center"
            onError={() => {
              setImageError(true);
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">
            🥭
          </div>
        )}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-2 right-2 bg-transparent border-0 p-2 cursor-pointer z-10 flex items-center justify-center"
          aria-label="Like This Recipe"
        >
          <FaHeart
            className={`text-2xl transition-colors ${
              isFavorite ? 'text-red-500 fill-red-500' : 'text-white'
            }`}
          />
        </button>
      </div>

      {/* Card Body */}
      <div className="card-body text-center px-6 py-4">
        <h3 className="text-mango-green font-bold text-xl uppercase mb-2">
          {recipe.title}
        </h3>
        <Link
          to={`/recipes/${recipe.category.toLowerCase().replace(/\s+/g, '-')}`}
          className="block text-gray-800 font-bold uppercase text-sm mb-4 no-underline hover:text-mango-green transition-colors"
        >
          {recipe.category}
        </Link>

        {/* Cooking Time and Cuisine */}
        <div className="flex justify-between border-t border-gray-300 pt-3 mt-3">
          <div className="px-3 flex-1">
            <span className="block uppercase font-bold text-red-600 text-xs mb-1" style={{ lineHeight: '100%' }}>
              cooking time
            </span>
            <span className="block uppercase text-gray-700 text-sm">
              {recipe.cookingTime}
            </span>
          </div>
          <div className="px-3 flex-1">
            <span className="block uppercase font-bold text-red-600 text-xs mb-1" style={{ lineHeight: '100%' }}>
              Cuisine
            </span>
            <span className="block uppercase text-gray-700 text-sm">
              {recipe.cuisine}
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="card-footer bg-transparent border-0 text-center pb-6">
        <Link
          to={`/recipes/${recipe.id}`}
          className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-8 rounded-lg uppercase inline-block transition-colors max-w-[170px] w-full"
        >
          Make It
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;

