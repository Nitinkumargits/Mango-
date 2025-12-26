import { Link } from 'react-router-dom';
import { FaLeaf, FaAward, FaUsers, FaHeart, FaTruck, FaShieldAlt } from 'react-icons/fa';
import Button from '../components/Button';

const AboutPage = () => {
  const values = [
    {
      icon: <FaLeaf className="text-4xl" />,
      title: 'Farm Fresh',
      description: 'Direct from Indian farms to your doorstep, ensuring the freshest quality.',
    },
    {
      icon: <FaAward className="text-4xl" />,
      title: 'Premium Quality',
      description: 'We handpick only the finest mango varieties, maintaining the highest standards.',
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: 'Farmer Partnership',
      description: 'Supporting local farmers and sustainable agricultural practices.',
    },
    {
      icon: <FaHeart className="text-4xl" />,
      title: 'Passion Driven',
      description: 'Our love for mangoes drives us to deliver exceptional experiences.',
    },
    {
      icon: <FaTruck className="text-4xl" />,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery to preserve freshness and quality.',
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: 'Trusted Source',
      description: 'Years of experience in sourcing and delivering premium mangoes.',
    },
  ];

  const stats = [
    { number: '1000+', label: 'Happy Customers' },
    { number: '6+', label: 'Mango Varieties' },
    { number: '50+', label: 'Partner Farms' },
    { number: '10+', label: 'Years Experience' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-mango-yellow via-mango-orange to-mango-yellow-dark text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Connecting mango lovers with the finest varieties from Indian farms
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Our Story Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Founded with a passion for bringing the finest mango varieties to mango lovers worldwide, 
                we started as a small initiative to connect premium Indian mango farms with discerning customers. 
                What began as a simple mission has grown into a trusted platform that celebrates the rich 
                diversity and exceptional quality of Indian mangoes.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Our journey started when we discovered that many people outside India had never experienced 
                the authentic taste of premium mango varieties like Alphonso, Kesar, and Dasheri. We realized 
                that these exceptional fruits deserved to be shared with the world, and we set out to make 
                that possible.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, we work directly with farmers across India, ensuring that every mango we deliver 
                meets our strict quality standards. We're committed to supporting sustainable farming practices 
                and fair trade, creating a positive impact on both our customers and the farming communities 
                we partner with.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="bg-mango-orange text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FaAward className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To bring the finest mango varieties from Indian farms directly to your doorstep, 
              ensuring freshness, quality, and authenticity. We aim to celebrate the rich heritage 
              of Indian mangoes while supporting sustainable farming practices and fair trade.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="bg-mango-green text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FaLeaf className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become the most trusted platform for premium mango varieties, recognized globally 
              for our commitment to quality, sustainability, and customer satisfaction. We envision 
              a world where everyone can experience the authentic taste of premium Indian mangoes.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-mango-yellow to-mango-orange rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/90 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-mango-orange mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Direct from Farms</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We work directly with trusted farmers across India, eliminating middlemen and 
                  ensuring you get the freshest mangoes at fair prices. Our direct partnerships 
                  also mean better support for farming communities.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality Assurance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every mango is carefully selected and inspected before shipping. We maintain 
                  strict quality standards to ensure you receive only the best. Our quality control 
                  process includes visual inspection, ripeness checks, and packaging standards.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Seasonal Expertise</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We understand the nuances of mango seasons and varieties. Our team helps you 
                  choose the right mangoes based on your preferences and the current season, 
                  ensuring optimal taste and quality.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer First</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your satisfaction is our priority. From the moment you browse our varieties to 
                  the delivery of your order, we're committed to providing exceptional service. 
                  We're always here to answer questions and help you find the perfect mangoes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-mango-green to-mango-green-dark rounded-xl shadow-lg p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Premium Mangoes?</h2>
            <p className="text-xl mb-8 text-white/90">
              Explore our collection of premium mango varieties and discover your new favorite
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/mangoes">
                <Button variant="secondary" className="bg-white text-mango-green hover:bg-gray-100">
                  Browse Mangoes
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-mango-green">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
