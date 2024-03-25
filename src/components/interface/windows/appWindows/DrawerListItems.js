import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { projectsList } from 'data';

export default function DrawerListItems() {
  return (
    <>
      {projectsList.map(group => {
        return (
          <>
            <Divider />
            <List>
              {group.map((item, index) => (
                <ListItem key={item.id} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </>
        );
      })}
    </>
  );
}
