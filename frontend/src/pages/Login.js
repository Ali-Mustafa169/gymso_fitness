import React, { useState } from 'react';
import { login } from '../api';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      const token = res.data.token;
      localStorage.setItem('token', token);
      alert('Login successful!');
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div style={{
      height: '100vh',
      background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Poppins, sans-serif',
      color: '#fff',
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '40px 50px',
        borderRadius: '20px',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center',
      }}>
        <h2 style={{ marginBottom: '20px', fontWeight: '600' }}>Welcome Back</h2>
        <form onSubmit={submit}>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 15px',
                borderRadius: '10px',
                border: 'none',
                outline: 'none',
                fontSize: '1rem',
                color: '#333',
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 15px',
                borderRadius: '10px',
                border: 'none',
                outline: 'none',
                fontSize: '1rem',
                color: '#333',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#ffd700',
              border: 'none',
              padding: '12px',
              borderRadius: '25px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              color: '#333',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.target.style.transform = 'scale(1)'}
          >
            Login
          </button>
        </form>

        <p style={{ marginTop: '20px', fontSize: '0.95rem' }}>
          Don’t have an account?{' '}
          <Link to="/signup" style={{ color: '#ffd700', textDecoration: 'none', fontWeight: '600' }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
