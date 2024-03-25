import Drawer from '@mui/material/Drawer';
import { DrawerHeader } from './DrawerHeader';
import DrawerListItems from './DrawerListItems';
import DrawerHeaderWindow from './DrawerHeaderWindow';
import { WINDOW } from 'components/interface/windows/constants';

export default function DrawerWindow({ open, handleDrawerClose }) {
  return (
    <Drawer
      sx={{
        width: WINDOW.DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: WINDOW.DRAWER_WIDTH,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader sx={{ ml: -1, justifyContent: 'space-between' }}>
        <DrawerHeaderWindow handleDrawerClose={handleDrawerClose} />
      </DrawerHeader>
      <DrawerListItems />
    </Drawer>
  );
}
