import React from 'react';

const Menu = ({ labs, onSelect }) => {
  return (
    <nav>
      <ul>
        {labs.map((lab, index) => (
          <li key={index} onClick={() => onSelect(lab)}>
            {lab.title}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;