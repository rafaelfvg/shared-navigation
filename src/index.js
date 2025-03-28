// components/Navigation.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css'; 

const Navigation = ({ navItems }) => {
  const [activePath, setActivePath] = useState(''); // Estado para la ruta activa

  const handleLinkClick = (path) => {
    setActivePath(path); // Actualizar la ruta activa al hacer clic
  };

  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item.path}>
            <a
              href={item.path}
              className={activePath === item.path ? 'active' : ''} // Aplicar la clase 'active' si la ruta coincide
              onClick={() => handleLinkClick(item.path)} // Manejar el clic en el enlace
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      permissions: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Navigation;