"use client";

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';

let NextLink;
try {
  NextLink = require("next/link").default;
} catch (error) {
  NextLink = null; 
}

const SidebarMenu = ({ items, userPermissions }) => {
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (itemName) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const hasPermission = (permissions) => {
    return permissions.some((permission) => userPermissions.includes(permission));
  };

  if (!items) return null;

  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        {items.map((item) => {
          if (!hasPermission(item.permissions)) {
            return null;
          }

          const LinkComponent = NextLink ? NextLink : "a";

          if (item.submenu) {
            return (
              <li key={item.name} className="sidebar-item">
                <div className="submenu-title" onClick={() => toggleSubmenu(item.name)}>
                  {item.name}
                  <span className="arrow">{openSubmenus[item.name] ? "▲" : "▼"}</span>
                </div>
                {openSubmenus[item.name] && (
                  <ul className="submenu-list">
                    {item.submenu.map((subitem) => {
                      if (!hasPermission(subitem.permissions)) {
                        return null;
                      }
                      return (
                        <li key={subitem.name} className="submenu-item">
                          <LinkComponent href={subitem.href}>{subitem.name}</LinkComponent>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          }

          return (
            <li key={item.name} className="sidebar-item">
              <LinkComponent href={item.href}>{item.name}</LinkComponent>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

SidebarMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      permissions: PropTypes.arrayOf(PropTypes.string).isRequired,
      submenu: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
          permissions: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
      ),
    })
  ).isRequired,
  userPermissions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SidebarMenu;
