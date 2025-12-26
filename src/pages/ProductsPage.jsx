import PlaceholderPage from './PlaceholderPage';

const ProductsPage = ({ category }) => {
  const titles = {
    beverages: 'Mango Beverages',
    confectionary: 'Mango Confectionary',
  };

  const descriptions = {
    beverages: 'Explore our range of refreshing mango beverages made from premium mango varieties.',
    confectionary: 'Discover delicious mango confectionary products crafted with the finest ingredients.',
  };

  return (
    <PlaceholderPage
      title={titles[category] || 'Products'}
      description={descriptions[category] || 'Explore our mango products.'}
    >
      <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
        <p className="text-gray-600">
          This page is under development. Check back soon for our amazing {category} products!
        </p>
      </div>
    </PlaceholderPage>
  );
};

export default ProductsPage;

