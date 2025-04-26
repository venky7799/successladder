import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/pages/Login/Login';
// import SignUp from './components/pages/SignUp/SignUp';
// import ForgotPassword from './components/pages/ForgotPassword/ForgotPassword';
// import OtpVerification from './components/pages/OtpVerification/OtpVerification';
// import SetPassword from './components/pages/SetPassword/SetPassword';
// import Dashboard from './components/pages/Dashboard/Dashboard';
import './App.css';
import './commoncore/styles/reset.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;