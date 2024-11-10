import React from 'react';

const Pricing = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <span style={{ color: '#1D2026', fontSize: '28px' }}>$125.00</span>
        <span style={{ color: '#FF7E1B', fontSize: '16px', backgroundColor: '#FFEEE2', borderRadius: '6px', padding: '2px 8px' }}>50%</span>
      </div>
      <span style={{ color: '#B6BCC8', fontSize: '16px', textDecoration: 'line-through', marginBottom:'32px' }}>$250.00</span>
    </div>
  );
};

export default Pricing;