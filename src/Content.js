// src/Content.js
import React from 'react';

const Content = ({ selectedLab }) => {
  return (
    <div>
      <h2>{selectedLab.title}</h2>
      <p>{selectedLab.description}</p>
    </div>
  );
}

export default Content;