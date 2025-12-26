import { FaAppleAlt, FaHeart, FaEye, FaBrain, FaBone, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const MangoNutritionPage = () => {
  const nutritionFacts = [
    { label: 'Calories', value: '99', unit: 'kcal' },
    { label: 'Total Fat', value: '0.6', unit: 'g' },
    { label: 'Saturated Fat', value: '0.1', unit: 'g' },
    { label: 'Cholesterol', value: '0', unit: 'mg' },
    { label: 'Sodium', value: '1', unit: 'mg' },
    { label: 'Total Carbohydrate', value: '24.7', unit: 'g' },
    { label: 'Dietary Fiber', value: '2.6', unit: 'g' },
    { label: 'Sugars', value: '22.5', unit: 'g' },
    { label: 'Protein', value: '1.4', unit: 'g' },
    { label: 'Vitamin C', value: '60.1', unit: 'mg' },
    { label: 'Vitamin A', value: '1082', unit: 'IU' },
    { label: 'Folate', value: '14', unit: 'µg' },
    { label: 'Potassium', value: '277', unit: 'mg' },
    { label: 'Magnesium', value: '10', unit: 'mg' },
  ];

  const healthBenefits = [
    {
      icon: <FaHeart className="text-4xl" />,
      title: 'Heart Health',
      description: 'Mangoes are rich in fiber, potassium, and vitamins that help maintain healthy blood pressure and reduce the risk of heart disease.',
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: 'Immune System',
      description: 'High in vitamin C and vitamin A, mangoes help strengthen your immune system and protect against infections.',
    },
    {
      icon: <FaEye className="text-4xl" />,
      title: 'Eye Health',
      description: 'The vitamin A and beta-carotene in mangoes support healthy vision and may help prevent age-related macular degeneration.',
    },
    {
      icon: <FaBrain className="text-4xl" />,
      title: 'Brain Function',
      description: 'Mangoes contain vitamin B6 and glutamine acid, which support brain health and improve memory and concentration.',
    },
    {
      icon: <FaBone className="text-4xl" />,
      title: 'Bone Health',
      description: 'Rich in vitamin K, mangoes help maintain strong bones and may reduce the risk of fractures.',
    },
    {
      icon: <FaAppleAlt className="text-4xl" />,
      title: 'Digestive Health',
      description: 'The fiber and enzymes in mangoes aid digestion, prevent constipation, and promote a healthy gut.',
    },
  ];

  const vitamins = [
    { name: 'Vitamin C', amount: '60.1 mg', percentage: '67%', benefit: 'Antioxidant, immune support' },
    { name: 'Vitamin A', amount: '1082 IU', percentage: '36%', benefit: 'Vision, skin health' },
    { name: 'Folate (B9)', amount: '14 µg', percentage: '4%', benefit: 'Cell division, DNA synthesis' },
    { name: 'Vitamin E', amount: '1.5 mg', percentage: '10%', benefit: 'Antioxidant, skin protection' },
    { name: 'Vitamin K', amount: '4.2 µg', percentage: '4%', benefit: 'Blood clotting, bone health' },
    { name: 'Vitamin B6', amount: '0.2 mg', percentage: '12%', benefit: 'Brain function, metabolism' },
  ];

  const minerals = [
    { name: 'Potassium', amount: '277 mg', percentage: '6%', benefit: 'Blood pressure, muscle function' },
    { name: 'Magnesium', amount: '10 mg', percentage: '2%', benefit: 'Muscle and nerve function' },
    { name: 'Phosphorus', amount: '14 mg', percentage: '1%', benefit: 'Bone health, energy' },
    { name: 'Calcium', amount: '11 mg', percentage: '1%', benefit: 'Bone strength' },
    { name: 'Iron', amount: '0.2 mg', percentage: '1%', benefit: 'Oxygen transport' },
    { name: 'Zinc', amount: '0.1 mg', percentage: '1%', benefit: 'Immune function' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-mango-yellow via-mango-orange to-mango-yellow-dark text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Mango Nutrition</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Discover the incredible nutritional benefits and health advantages of mangoes
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Nutrition Facts Table */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Nutrition Facts</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Per 100g serving of fresh mango (approximately 1 cup sliced)
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-mango-yellow-light">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Nutrient</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">Amount</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">Unit</th>
                  </tr>
                </thead>
                <tbody>
                  {nutritionFacts.map((fact, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{fact.label}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">{fact.value}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-600">{fact.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Health Benefits */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Health Benefits</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Mangoes are not just delicious—they're packed with nutrients that offer numerous health benefits
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-mango-orange mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Vitamins & Minerals */}
        <section className="mb-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Vitamins</h3>
            <div className="space-y-4">
              {vitamins.map((vitamin, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">{vitamin.name}</h4>
                      <p className="text-sm text-gray-600">{vitamin.benefit}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-mango-orange">{vitamin.amount}</p>
                      <p className="text-sm text-gray-500">{vitamin.percentage} DV</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Minerals</h3>
            <div className="space-y-4">
              {minerals.map((mineral, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">{mineral.name}</h4>
                      <p className="text-sm text-gray-600">{mineral.benefit}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-mango-green">{mineral.amount}</p>
                      <p className="text-sm text-gray-500">{mineral.percentage} DV</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Nutrients Highlight */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-mango-green to-mango-green-dark rounded-xl shadow-lg p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Nutrients in Mangoes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Vitamin C</h3>
                <p className="text-white/90">
                  One cup of mango provides 67% of your daily vitamin C needs, supporting immune function and collagen production.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Vitamin A</h3>
                <p className="text-white/90">
                  Rich in beta-carotene, mangoes support healthy vision, skin health, and immune function.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Fiber</h3>
                <p className="text-white/90">
                  With 2.6g of fiber per serving, mangoes support digestive health and help maintain healthy cholesterol levels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dietary Information */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Dietary Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Low in Calories</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Mangoes are naturally low in calories, making them an excellent choice for weight management. 
                  A 100g serving contains only 99 calories, making it a guilt-free sweet treat.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Natural Sugars</h3>
                <p className="text-gray-700 leading-relaxed">
                  While mangoes contain natural sugars, they also provide fiber which helps slow sugar absorption, 
                  preventing blood sugar spikes. They have a moderate glycemic index, making them suitable for most diets.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Fat-Free</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Mangoes are virtually fat-free, with less than 1g of fat per serving. They contain no cholesterol 
                  and minimal sodium, making them heart-healthy.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Antioxidant Rich</h3>
                <p className="text-gray-700 leading-relaxed">
                  Mangoes are packed with antioxidants including vitamin C, beta-carotene, and polyphenols that help 
                  protect your cells from damage and reduce inflammation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-mango-orange to-mango-orange-dark rounded-xl shadow-lg p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enjoy Healthy Mangoes?</h2>
            <p className="text-xl mb-8 text-white/90">
              Explore our premium mango varieties and experience the nutritional benefits
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/mangoes">
                <Button variant="secondary" className="bg-white text-mango-orange hover:bg-gray-100">
                  Browse Mangoes
                </Button>
              </Link>
              <Link to="/blog">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-mango-orange">
                  Read More Articles
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MangoNutritionPage;

