import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div style={{
      height: '100vh',
      background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'Poppins, sans-serif',
      textAlign: 'center',
      padding: '0 20px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '15px' }}>
        Welcome to <span style={{ color: '#ffd700' }}>Paragon App</span>
      </h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '500px', lineHeight: '1.6', marginBottom: '40px' }}>
        Your one-stop platform for connecting students and alumni. <br />
        Join us today and explore exciting opportunities!
      </p>

      <div>
        <Link to="/signup">
          <button style={{
            backgroundColor: '#ffd700',
            color: '#333',
            border: 'none',
            padding: '12px 28px',
            borderRadius: '25px',
            fontSize: '1rem',
            cursor: 'pointer',
            fontWeight: '600',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Sign Up
          </button>
        </Link>

        <Link to="/login">
          <button style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: '2px solid #fff',
            padding: '12px 28px',
            borderRadius: '25px',
            fontSize: '1rem',
            cursor: 'pointer',
            marginLeft: '15px',
            fontWeight: '600',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
