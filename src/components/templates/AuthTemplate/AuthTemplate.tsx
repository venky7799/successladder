import React from 'react';
import './AuthTemplate.css';

interface AuthTemplateProps {
  children: React.ReactNode;
  logoText?: string;
}

const AuthTemplate: React.FC<AuthTemplateProps> = ({ 
  children
}) => {
  return (
    <div className="auth-template">
      <div className="left-section">
        <div className="content-wrapper">
          <div className="logo">
            <span className="logo-blue">Success</span>
            <span className="logo-dark">Ladder</span>
          </div>
          
          <div className="content">
            {children}
          </div>
        </div>
        
        <div className="footer">
          © 2025, Success Ladder. All Rights Reserved.
        </div>
      </div>
      
      <div className="right-section">
        {/* Blue background section */}
      </div>
    </div>
  );
};

export default AuthTemplate;
