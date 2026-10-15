import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="not-found-page" style={{ textAlign: 'center', padding: '80px 20px' }}>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <AlertCircle size={64} style={{ color: '#A91F2B', marginBottom: '20px' }} />
        <h1 style={{ fontSize: '2.5rem', color: '#24211F', marginBottom: '10px' }}>404</h1>
        <h2 style={{ fontSize: '1.5rem', color: '#24211F', marginBottom: '20px' }}>Page Not Found</h2>
        <p style={{ color: '#666', marginBottom: '30px' }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link 
          to="/" 
          style={{
            backgroundColor: '#A91F2B',
            color: '#FFFFFF',
            padding: '12px 24px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: '600',
            display: 'inline-block'
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}