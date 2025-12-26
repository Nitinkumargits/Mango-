const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button',
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
  
  const variantClasses = {
    primary: 'bg-mango-orange hover:bg-mango-orange-dark text-white',
    secondary: 'bg-mango-yellow hover:bg-mango-yellow-dark text-gray-800',
    outline: 'border-2 border-mango-orange text-mango-orange hover:bg-mango-orange hover:text-white',
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

