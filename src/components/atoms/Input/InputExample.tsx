import React, { useState } from 'react';
import Input from './Input';
import './InputExample.css';

// Example of an email icon component
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
  </svg>
);

// Example of a password icon component
const PasswordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
  </svg>
);

const InputExample: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    
    // Simple validation
    if (!value) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    
    // Simple validation
    if (!value) {
      setPasswordError('Password is required');
    } else if (value.length < 8) {
      setPasswordError('Password must be at least 8 characters');
    } else {
      setPasswordError('');
    }
  };

  return (
    <div className="input-example">
      <h2>Input Component Examples</h2>
      
      <div className="example-section">
        <h3>Default Input</h3>
        <Input 
          placeholder="Default input" 
        />
      </div>

      <div className="example-section">
        <h3>Input with Icon</h3>
        <Input 
          type="email"
          placeholder="Enter your email"
          icon={<EmailIcon />}
          iconPosition="right"
        />
      </div>

      <div className="example-section">
        <h3>Full Width Input</h3>
        <Input 
          placeholder="Full width input" 
          fullWidth
        />
      </div>

      <div className="example-section">
        <h3>Input with Error</h3>
        <Input 
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          variant={emailError ? 'error' : 'default'}
          icon={<EmailIcon />}
          fullWidth
        />
        {emailError && <div className="error-message">{emailError}</div>}
      </div>

      <div className="example-section">
        <h3>Password Input</h3>
        <Input 
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          variant={passwordError ? 'error' : 'default'}
          icon={<PasswordIcon />}
          fullWidth
        />
        {passwordError && <div className="error-message">{passwordError}</div>}
      </div>

      <div className="example-section">
        <h3>Disabled Input</h3>
        <Input 
          placeholder="Disabled input" 
          disabled
        />
      </div>

      <div className="example-section">
        <h3>Success Input</h3>
        <Input 
          placeholder="Success input" 
          variant="success"
        />
      </div>

      <div className="example-section">
        <h3>With Jankoti Style Icon</h3>
        <Input 
          type="email"
          placeholder="Enter your mail id"
          icon={<div className="blue-bg-icon"><EmailIcon /></div>}
        />
      </div>
    </div>
  );
};

export default InputExample;