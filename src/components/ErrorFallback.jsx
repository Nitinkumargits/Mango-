import { useErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({ error }) => {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong</h2>
        <p className="text-gray-600 mb-6">{error.message}</p>
        <button
          onClick={resetBoundary}
          className="btn-primary"
        >
          Try again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="btn-secondary ml-4"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;

