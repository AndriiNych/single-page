import * as React from 'react';
import { NavLink } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { menuActiveElement } from 'styles/menuActiveElement';

export default function DrawerItem({ item }) {
  return (
    <NavLink
      to={item.to}
      className={({ isActive }) =>
        `${isActive ? menuActiveElement.mainMenu : ''} pt-0.5`
      }
    >
      <ListItemButton>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItemButton>
    </NavLink>
  );
}
