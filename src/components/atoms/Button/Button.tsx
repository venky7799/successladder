import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

function Button({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  leftIcon,
  rightIcon,
  isLoading = false,
  className = '',
  disabled = false,
  children,
  ...rest
}: ButtonProps) {
  
  // Tailwind classes mapping
  const variantClasses = {
    'primary': 'bg-blue-500 hover:bg-blue-600 text-white',
    'secondary': 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    'outline': 'bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50',
    'text': 'bg-transparent text-blue-500 hover:underline'
  };
  
  const sizeClasses = {
    'small': 'py-2 px-3 text-sm',
    'medium': 'py-3 px-5 text-base',
    'large': 'py-4 px-6 text-lg'
  };
  
  // Combine Tailwind classes
  const buttonClasses = [
    // Base button styles
    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 ease-in-out relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 active:scale-95',
    
    // Variant styles
    variantClasses[variant],
    
    // Size styles (don't apply size padding to text variant)
    variant !== 'text' ? sizeClasses[size] : '',
    
    // Width
    fullWidth ? 'w-full' : '',
    
    // Loading and disabled states
    isLoading ? 'cursor-not-allowed opacity-70' : '',
    disabled ? 'opacity-50 cursor-not-allowed' : '',
    
    // Custom classes
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...rest}
    >
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <span className="w-5 h-5 border-2 border-white border-opacity-30 border-t-white rounded-full animate-spin"></span>
        </span>
      )}
      
      <span className={`flex items-center ${isLoading ? 'opacity-0' : ''}`}>
        {!isLoading && leftIcon && (
          <span className="mr-2" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        
        {children}
        
        {!isLoading && rightIcon && (
          <span className="ml-2" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </span>
    </button>
  );
}

export default Button;