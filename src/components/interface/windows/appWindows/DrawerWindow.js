import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import DrawerHeader from './DrawerHeader';
import DrawerListItems from './DrawerListItems';
import { WINDOW } from 'components/interface/windows/constants';

export default function DrawerWindow({ open, handleDrawerClose }) {
  const theme = useTheme();
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
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <DrawerListItems />
    </Drawer>
  );
}
