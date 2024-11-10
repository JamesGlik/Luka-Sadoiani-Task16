import React from 'react';
import cartIcon from '../../../assets/Shape.png';

const AddToCartButton = () => {
  return (
    <button
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',  
        gap: '10px',
        backgroundColor: '#FF7E1B',
        color: '#FFFFFF',
        padding: '0 20px', 
        borderRadius: '10px',
        border: 'none',
        width: '272px',
        height: '60px', 
      }}
    >
      <img src={cartIcon} alt="Cart Icon" style={{ width: '20px', height: '20px' }} />
      Add to Cart
    </button>
  );
};

export default AddToCartButton;