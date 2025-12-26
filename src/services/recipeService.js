// Mock recipe data for Fan Favorites
const recipes = [
  {
    id: "1",
    title: "Mango Pie",
    category: "Baked",
    cookingTime: "60 min",
    cuisine: "American",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
    isFavorite: false,
  },
  {
    id: "2",
    title: "Mango BBQ Chicken",
    category: "Lunch & Dinner",
    cookingTime: "60 min",
    cuisine: "American",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
    isFavorite: false,
  },
  {
    id: "3",
    title: "Mango Salsa 3 Ways",
    category: "Appetizers",
    cookingTime: "15 min",
    cuisine: "Mexican",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
    isFavorite: false,
  },
  {
    id: "4",
    title: "Fresh Mango Bento Box",
    category: "Lunch & Dinner",
    cookingTime: "45 min",
    cuisine: "Asian, Japanese",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop",
    isFavorite: false,
  },
  {
    id: "5",
    title: "Mango Fries and Dip",
    category: "Snacks",
    cookingTime: "15 min",
    cuisine: "---",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop",
    isFavorite: false,
  },
  {
    id: "6",
    title: "Mango Pork Sliders",
    category: "Lunch & Dinner",
    cookingTime: "60 min",
    cuisine: "American",
    image:
      "https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=800&h=600&fit=crop",
    isFavorite: false,
  },
];

// Simulate API delay
const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Fetch all recipes (fan favorites)
 * @returns {Promise<Array>}
 */
export const fetchRecipes = async () => {
  await delay();
  return recipes;
};

/**
 * Fetch a single recipe by ID
 * @param {string} id - Recipe ID
 * @returns {Promise<Object|null>}
 */
export const fetchRecipeById = async (id) => {
  await delay();
  return recipes.find((recipe) => recipe.id === id) || null;
};

/**
 * Toggle favorite status for a recipe
 * @param {string} id - Recipe ID
 * @returns {Promise<Object>}
 */
export const toggleFavorite = async (id) => {
  await delay();
  const recipe = recipes.find((r) => r.id === id);
  if (recipe) {
    recipe.isFavorite = !recipe.isFavorite;
    return { success: true, isFavorite: recipe.isFavorite };
  }
  return { success: false };
};
