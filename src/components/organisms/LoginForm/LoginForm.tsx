// src/components/organisms/LoginForm/LoginForm.tsx
import React, { useState } from 'react';
import FormField from '../../molecules/FormField/FormField';
import Button from '../../atoms/Button/Button';
// import './LoginForm.css';

interface LoginFormProps {
  onSubmit: (email: string, password: string, rememberMe: boolean) => void;
  onForgotPassword: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, onForgotPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const newErrors = { email: '', password: '' };
    let isValid = true;
    
    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }
    
    setErrors(newErrors);
    
    if (isValid) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        onSubmit(email, password, rememberMe);
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <FormField
        id="email"
        label="Email address"
        type="email"
        placeholder="Enter your mail id"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        error={errors.email}
      />
      
      <FormField
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        error={errors.password}
      />
      
      <div className="form-footer">
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="remember"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label className="checkbox-label" htmlFor="remember">
          Remember me
          <span>Save my login details for next time.</span>
        </label>
        </div>
      </div>
        <div className="forgot-password">
          <a href="#" onClick={(e) => {
            e.preventDefault();
            onForgotPassword();
          }}>Forgot Password?</a>
        </div>
     
      
      <Button 
        type="submit" 
        variant="primary"
        fullWidth
        isLoading={isSubmitting}
      >
        Login now
      </Button>
    </form>
  );
};

export default LoginForm;