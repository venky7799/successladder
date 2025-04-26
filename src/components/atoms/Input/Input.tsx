import React, { forwardRef } from 'react';
import './Input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'error' | 'success';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'default',
      icon,
      iconPosition = 'right',
      fullWidth = false,
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <div className={`input-wrapper ${variant} ${fullWidth ? 'full-width' : ''} ${iconPosition}`}
      >
        {icon && <div className="input-icon">{icon}</div>}
        <input
          ref={ref}
          className="input"
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;