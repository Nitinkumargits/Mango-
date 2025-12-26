import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { submitOrderInquiry } from '../services/mangoService';
import Button from './Button';

const OrderForm = ({ mangoId, mangoName }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await submitOrderInquiry({
        ...data,
        mangoId,
        mangoName,
      });
      
      if (result.success) {
        toast.success(result.message || 'Order inquiry submitted successfully!');
        reset();
      } else {
        toast.error('Failed to submit order inquiry. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
      console.error('Order submission error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          {...register('name', {
            required: 'Name is required',
            minLength: { value: 2, message: 'Name must be at least 2 characters' },
          })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mango-orange focus:border-transparent"
          placeholder="Enter your full name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mango-orange focus:border-transparent"
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Phone number must be 10 digits',
            },
          })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mango-orange focus:border-transparent"
          placeholder="9876543210"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="mangoType" className="block text-sm font-medium text-gray-700 mb-1">
          Mango Type *
        </label>
        <input
          type="text"
          id="mangoType"
          value={mangoName || ''}
          disabled
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
        />
      </div>

      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
          Quantity (Dozen) *
        </label>
        <input
          type="number"
          id="quantity"
          {...register('quantity', {
            required: 'Quantity is required',
            min: { value: 1, message: 'Quantity must be at least 1' },
            max: { value: 100, message: 'Quantity cannot exceed 100' },
          })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mango-orange focus:border-transparent"
          placeholder="Enter quantity"
          min="1"
          max="100"
        />
        {errors.quantity && (
          <p className="mt-1 text-sm text-red-600">{errors.quantity.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Delivery Date *
        </label>
        <input
          type="date"
          id="deliveryDate"
          {...register('deliveryDate', {
            required: 'Delivery date is required',
            validate: (value) => {
              const selectedDate = new Date(value);
              const today = new Date();
              today.setHours(0, 0, 0, 0);
              if (selectedDate < today) {
                return 'Delivery date cannot be in the past';
              }
              return true;
            },
          })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mango-orange focus:border-transparent"
          min={new Date().toISOString().split('T')[0]}
        />
        {errors.deliveryDate && (
          <p className="mt-1 text-sm text-red-600">{errors.deliveryDate.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Order Inquiry'}
      </Button>
    </form>
  );
};

export default OrderForm;

