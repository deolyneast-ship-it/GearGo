import React from 'react';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>GearGo</h1>
      <p style={{ color: '#fff' }}>The engine of your logistics.</p>
      
      <div style={{ 
        border: '1px solid #E0B0FF', 
        padding: '1rem', 
        borderRadius: '8px',
        marginTop: '2rem' 
      }}>
        <h2>Part Search</h2>
        <input 
          type="text" 
          placeholder="Enter VIN or Part Name..." 
          style={{ width: '100%', padding: '0.5rem' }} 
        />
      </div>
    </main>
  );
}
