import PlaceholderPage from './PlaceholderPage';
import OrderForm from '../components/OrderForm';

const ContactPage = ({ formType = 'general' }) => {
  const titles = {
    general: 'General Enquiry Form',
    distributors: 'Distributors Enquiry Form',
  };

  const descriptions = {
    general: 'Have a question? Get in touch with us using the form below.',
    distributors: 'Interested in becoming a distributor? Fill out the form below.',
  };

  return (
    <PlaceholderPage
      title={titles[formType] || 'Contact Us'}
      description={descriptions[formType] || 'Get in touch with us.'}
    >
      <div className="bg-white rounded-xl shadow-lg p-8 mt-8 max-w-2xl mx-auto">
        {formType === 'general' ? (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
            <OrderForm mangoId="" mangoName="General Enquiry" />
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Distributor Application</h2>
            <p className="text-gray-600 mb-6">
              Interested in distributing our premium mango products? Fill out the form below and
              our team will get back to you.
            </p>
            <OrderForm mangoId="" mangoName="Distributor Enquiry" />
          </div>
        )}
      </div>
    </PlaceholderPage>
  );
};

export default ContactPage;

