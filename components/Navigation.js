// components/Navigation.js
'use client';

import Link from 'next/link';
import React from 'react';

const Navigation = ({ navItems, userPermissions }) => {
  return (
    <nav>
      <ul>
        {navItems
          .filter((item) =>
            item.permissions.some((permission) =>
              userPermissions.includes(permission)
            )
          )
          .map((item) => (
            <li key={item.path}>
              <Link href={item.path}>
                {item.label}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navigation;