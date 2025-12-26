import PlaceholderPage from './PlaceholderPage';

const AboutPage = () => {
  return (
    <PlaceholderPage
      title="About Us"
      description="Learn about our mission to bring you the finest mangoes."
    >
      <div className="bg-white rounded-xl shadow-lg p-8 mt-8 text-left">
        <p className="text-gray-600 mb-4">
          We are passionate about bringing you the finest mango varieties from Indian farms.
        </p>
        <p className="text-gray-600 mb-4">
          Our mission is to connect mango lovers with premium quality mangoes, ensuring freshness
          and authenticity in every delivery.
        </p>
        <p className="text-gray-600">
          This page is under development. More information about our story will be available soon!
        </p>
      </div>
    </PlaceholderPage>
  );
};

export default AboutPage;

