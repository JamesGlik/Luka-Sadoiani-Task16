import React from 'react';
import logo from '../../../assets/sneakers 2.svg';
import cartIcon from '../../../assets/Group 14.svg';
import userIcon from '../../../assets/Oval.png';

const Navbar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '45px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <img src={logo} alt="Logo" style={{ width: '138px', height: '20px' }} />
        <span style={{ color: '#69707D', fontSize: '15px' }}>Collections</span>
        <span style={{ color: '#69707D', fontSize: '15px' }}>Men</span>
        <span style={{ color: '#69707D', fontSize: '15px' }}>Women</span>
        <span style={{ color: '#69707D', fontSize: '15px' }}>About</span>
        <span style={{ color: '#69707D', fontSize: '15px' }}>Contact</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <img src={cartIcon} alt="Cart" style={{ width: '20px', height: '20px' }} />
        <img src={userIcon} alt="User" style={{ width: '50px', height: '50px' }} />
      </div>
    </div>
  );
};

export default Navbar;