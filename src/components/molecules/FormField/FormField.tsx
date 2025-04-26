// src/components/molecules/FormField/FormField.tsx
import React from 'react';
import Input from '../../atoms/Input/Input';
// import './FormField.css';

// Define the props interface
interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  icon,
  iconPosition,
  fullWidth = true,
}) => {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        variant={error ? 'error' : 'default'}
        icon={icon}
        iconPosition={iconPosition}
        fullWidth={fullWidth}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default FormField;