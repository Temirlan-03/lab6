// src/Container.js
import React from 'react';

const Container = ({ children }) => {
  return <div style={{ border: '1px solid black', padding: '20px', margin: '20px' }}>{children}</div>;
}

export default Container;
