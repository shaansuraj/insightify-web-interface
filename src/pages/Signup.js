import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import './styles/Signup.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await axiosInstance.post('/auth/signup', {
        username,
        email,
        password,
      });
      // If you return a token on signup, you can do something with it:
      // localStorage.setItem('token', response.data.token);
      window.location.href = '/login'; // redirect to home or wherever
    } catch (error) {
      console.error('Signup failed:', error.response?.data || error.message);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignup} className="signup-form">
        <h2 className="signup-title">Create Account</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="signup-input"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="signup-input"
          required
        />
        <button type="submit" className="signup-btn">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
