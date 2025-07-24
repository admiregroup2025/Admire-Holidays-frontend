import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onClose }) => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleMobileSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!mobile || mobile.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call to send OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('OTP sent to:', mobile);
      setOtpSent(true);
    } catch (error) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!otp || otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    setIsLoading(true);
    try {
      // Simulate OTP verification
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('OTP verified:', otp);
      // On successful verification, navigate to dashboard
      navigate('/dashboard');
    } catch (error) {
      setError('Invalid OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setIsLoading(true);
    setError('');
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Resending OTP to:', mobile);
      setOtp('');
    } catch (error) {
      setError('Failed to resend OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg w-full max-w-md relative"
        onClick={handleModalClick}
      >
        {/* Close Button */}
        <button 
  onClick={() => {
    if (onClose) {
      onClose(); // modal version
    } else {
      window.history.back(); // page version
    }
  }}
  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
  aria-label="Close"
>
  &times;
</button>


        {/* Header */}
        <div className="px-6 pt-8 pb-2">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Welcome Back</h2>
        </div>

        {/* Form Content */}
        <div className="px-6 pb-6">
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}

          {/* Mobile Number Input */}
          {!otpSent ? (
            <form onSubmit={handleMobileSubmit}>
              <div className="mb-6">
                <label htmlFor="mobile" className="block text-sm font-bold text-gray-700 mb-2">
                  Mobile Number
                </label>
                <div className="flex border border-gray-300 rounded-md overflow-hidden">
                  <div className="flex items-center px-3 bg-gray-100 border-r border-gray-300 cursor-pointer">
                    <span className="mr-2">🇮🇳</span>
                    <span className="font-bold">+91</span>
                    <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    id="mobile"
                    className="flex-1 px-3 py-2 outline-none"
                    placeholder="Enter Mobile Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-200 disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? 'Sending OTP...' : 'Continue'}
              </button>
            </form>
          ) : (
            /* OTP Verification */
            <form onSubmit={handleOtpSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Enter OTP sent to +91{mobile.replace(/(\d{2})\d{6}(\d{2})/, '$1******$2')}
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  pattern="[0-9]{6}"
                  required
                />
                <p className="text-sm text-gray-600 mt-2">
                  Didn't receive OTP?{' '}
                  <button 
                    type="button" 
                    className="text-blue-600 hover:underline"
                    onClick={handleResendOtp}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : 'Resend'}
                  </button>
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-200 disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? 'Verifying...' : 'Login'}
              </button>
            </form>
          )}

          {/* Social Login Divider */}
          {!otpSent && (
            <>
              <div className="relative flex items-center my-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-500 text-sm">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              {/* Google Sign-In */}
              <div className="flex justify-center mb-4">
                <button 
                  type="button"
                  className="flex items-center justify-center p-2 border border-gray-300 rounded-full hover:bg-gray-50 w-full max-w-xs"
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path>
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>

              {/* Email Sign-In */}
              <div className="flex justify-center">
                <button 
                  type="button"
                  className="flex items-center justify-center p-2 w-full max-w-xs"
                >
                  <svg className="w-6 h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">Continue with Email</span>
                </button>
              </div>
            </>
          )}

          {/* Sign Up Link */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 font-bold hover:underline">
              Sign up
            </Link>
          </div>

          {/* Footer Terms */}
          <div className="mt-8 text-center text-xs text-gray-500">
            <p>By proceeding, you agree to our 
              <Link to="/privacy-policy" className="text-blue-600 hover:underline"> Privacy Policy</Link>, 
              <Link to="/terms-conditions" className="text-blue-600 hover:underline"> Terms of Service</Link> and 
              <Link to="/user-agreement" className="text-blue-600 hover:underline"> User Agreement</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;