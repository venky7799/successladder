import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthTemplate from '../../templates/AuthTemplate/AuthTemplate';
import LoginForm from '../../organisms/LoginForm/LoginForm';
import './Login.css';

const Login: React.FC = () => {
  const navigate = useNavigate();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (email: string, password: string, rememberMe: boolean) => {
    console.log('Login attempt with:', { email, password, rememberMe });
    // Implement authentication logic
    // Example: 
    // if (authSuccessful) {
    //   navigate('/dashboard');
    // }
  };
  
  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <AuthTemplate>
      <h1>Sign In</h1>
      <p className="subtitle">into your account</p>
      <LoginForm 
        onSubmit={handleLogin}
        onForgotPassword={handleForgotPassword}
      />
    </AuthTemplate>
   
  );
};

export default Login;