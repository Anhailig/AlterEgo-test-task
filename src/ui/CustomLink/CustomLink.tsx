import * as React from 'react';
import { NavLink } from 'react-router-dom';

import type { ICustomLink } from '../../types';


export const CustomLink: React.FC<ICustomLink> = ({to, children}) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        ...(isActive ? {color: '#54ffff'} : {color: 'white'}),
        fontSize: '22px',
        fontWeight: 'bold',
      })}
    >{children}</NavLink>
  );
};

