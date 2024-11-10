import React, { useState } from 'react';
import AddToCartButton from '../AddToCartButton/AddToCartButton'; 

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 0 && setQuantity(quantity - 1);

  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop:'32px'}}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: '#F6F8FD',
          padding: '10px',
          borderRadius: '10px',
          width: '157px',
          height: '40px',
          justifyContent: 'space-between',
        }}
      >
        <button
          onClick={decreaseQuantity}
          style={{
            color: '#FF7E1B',
            border: 'none',
            backgroundColor: 'transparent',
            fontSize: '24px', 
            flex: 1, 
            textAlign: 'center',
          }}
        >
          -
        </button>
        <span style={{ fontSize: '24px', flex: 2, textAlign: 'center' }}>{quantity}</span>
        <button
          onClick={increaseQuantity}
          style={{
            color: '#FF7E1B',
            border: 'none',
            backgroundColor: 'transparent',
            fontSize: '24px', 
            flex: 1, 
            textAlign: 'center',
          }}
        >
          +
        </button>
      </div>
      <AddToCartButton />
    </div>
  );
};

export default QuantitySelector;