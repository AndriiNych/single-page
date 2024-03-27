import * as React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import DrawerItem from './DrawerItem';
import { projectsList } from 'data';

export default function DrawerListItems() {
  return (
    <>
      {projectsList.map(group => {
        return (
          <div key={group.groupId}>
            <Divider />
            <List>
              {group.items.map(item => (
                <ListItem key={item.id} disablePadding>
                  <DrawerItem item={item} />
                </ListItem>
              ))}
            </List>
          </div>
        );
      })}
    </>
  );
}
