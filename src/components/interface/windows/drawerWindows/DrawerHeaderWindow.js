import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import DrawerItem from './DrawerItem';
import { drawerHeaderItem } from 'data';

export default function DrawerHeaderWindow({ handleDrawerClose }) {
  const theme = useTheme();

  return (
    <>
      <DrawerItem item={drawerHeaderItem} />
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </>
  );
}
